import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Lesson, VocabularyItem } from '@unlock2026/shared';
import { useProgressStore } from '@/stores/progressStore';
import { SFX } from '@/utils/sounds';
import { getDisplayAnswer, matchAnswer } from '@/utils/matchAnswer';

// Add shake animation styles
const shakeStyle = `
  @keyframes shake {
    0%, 100% { transform: translateX(0) translateY(0); }
    10% { transform: translateX(-8px) translateY(-8px); }
    20% { transform: translateX(8px) translateY(8px); }
    30% { transform: translateX(-8px) translateY(8px); }
    40% { transform: translateX(8px) translateY(-8px); }
    50% { transform: translateX(-6px) translateY(-6px); }
    60% { transform: translateX(6px) translateY(6px); }
    70% { transform: translateX(-4px) translateY(4px); }
    80% { transform: translateX(4px) translateY(-4px); }
    90% { transform: translateX(-2px) translateY(-2px); }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = shakeStyle;
  if (!document.head.querySelector('style[data-word-drop]')) {
    styleSheet.setAttribute('data-word-drop', 'true');
    document.head.appendChild(styleSheet);
  }
}

interface Props { lesson: Lesson; onFinish: () => void; }

interface Block {
  id: number;
  word: VocabularyItem;
  y: number;
  x: number;
  speed: number;
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
}

const ANSWER_ZONE_OFFSET = 220;
const FLOOR_MARGIN = 60;
const FEEDBACK_DELAY_CORRECT = 800;
const FEEDBACK_DELAY_WRONG = 1200;

export function WordDropGame({ lesson, onFinish }: Props) {
  const navigate = useNavigate();
  const store = useProgressStore();
  const vocab = useMemo(() => {
    // Remove duplicate vocabulary entries (same English answer)
    const seen = new Set<string>();
    const unique = (lesson.vocabulary || []).filter(item => {
      if (seen.has(item.en)) {
        console.warn(`⚠️ Duplicate word filtered: ${item.en}`);
        return false;
      }
      seen.add(item.en);
      return true;
    });
    return shuffle(unique);
  }, [lesson.id]);

  // Game State
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [combo, setCombo] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<number | null>(null);
  const [options, setOptions] = useState<string[]>([]);
  const [answering, setAnswering] = useState(false);
  const [feedbackBlockId, setFeedbackBlockId] = useState<number | null>(null);
  const [feedbackResult, setFeedbackResult] = useState<'correct' | 'wrong' | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [forceRegenerate, setForceRegenerate] = useState(false);
  const [loseEffectActive, setLoseEffectActive] = useState(false);

  // Refs
  const arenaRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const blockIdRef = useRef(0);
  const wordIndexRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const blocksRef = useRef<Block[]>([]);

  const getArenaDimensions = useCallback(() => {
    if (!arenaRef.current) return { height: 450, width: 400 };
    return {
      height: arenaRef.current.offsetHeight,
      width: arenaRef.current.offsetWidth,
    };
  }, []);

  // Keep blocksRef in sync with blocks state
  useEffect(() => {
    blocksRef.current = blocks;
  }, [blocks]);

  // Auto-select block
  useEffect(() => {
    if (blocks.length === 0 || answering) {
      setSelectedBlockId(null);
      setOptions([]);
      return;
    }

    console.log('🎯 Auto-select effect running. Blocks:', blocks.length);

    const arena = getArenaDimensions();
    const floorY = arena.height - FLOOR_MARGIN;
    const answerZone = floorY - ANSWER_ZONE_OFFSET;

    console.log('📍 Arena:', arena, 'FloorY:', floorY, 'AnswerZone:', answerZone);
    console.log('📦 Block positions:', blocks.map(b => ({ id: b.id, y: b.y, word: b.word.pt })));

    const eligible = blocks.filter(b => b.y >= answerZone);
    let pick: Block | null = null;

    if (eligible.length > 0) {
      pick = eligible.reduce((a, b) => (a.y > b.y ? a : b));
      console.log('✅ Selected from eligible blocks:', pick.word.pt);
    } else if (blocks.length > 0) {
      pick = blocks.reduce((a, b) => (a.y > b.y ? a : b));
      console.log('🟡 Selected from all blocks:', pick.word.pt);
    }

    if (pick && (pick.id !== selectedBlockId || forceRegenerate)) {
      if (pick.id !== selectedBlockId) {
        setSelectedBlockId(pick.id);
      }

      const correct = getDisplayAnswer(pick.word.en);
      const wrongOptions = vocab
        .filter(w => w.en !== pick.word.en)
        .map(w => getDisplayAnswer(w.en))
        .filter((opt, idx, arr) => arr.indexOf(opt) === idx) // Remove duplicate options
        .filter(opt => opt !== correct); // Ensure wrong options don't include correct answer

      // If we don't have enough wrong options, that's a problem with the vocab
      if (wrongOptions.length < 2) {
        console.warn('⚠️ Not enough unique wrong options. Available:', wrongOptions.length);
      }

      const selected = shuffle(wrongOptions).slice(0, 2);
      const allOptions = shuffle([correct, ...selected]);
      console.log('🔤 Options generated:', allOptions, 'for word:', pick.word.pt);
      setOptions(allOptions);

      if (forceRegenerate) {
        setForceRegenerate(false);
      }
    }
  }, [blocks, answering, vocab, getArenaDimensions, selectedBlockId, forceRegenerate]);

  // Keyboard Controls

  const handleAnswer = useCallback((answerText: string) => {
    console.log('🎯 handleAnswer called. selectedBlockId:', selectedBlockId, 'answering:', answering, 'blocks:', blocks.length);
    if (selectedBlockId === null || blocks.length === 0 || answering) {
      console.log('⛔ Early return - guard triggered');
      return;
    }

    const block = blocks.find(b => b.id === selectedBlockId);
    if (!block) {
      console.log('⛔ Block not found!');
      return;
    }

    // Capture the block ID immediately to avoid stale closure in setTimeout
    const blockIdToRemove = selectedBlockId;

    const result = matchAnswer(answerText, block.word.en);
    const isCorrect = result.isCorrect;
    console.log('🎮 Processing answer:', answerText, '-> isCorrect:', isCorrect);

    setAnswering(true);
    setFeedbackBlockId(selectedBlockId);
    setFeedbackResult(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      console.log('✅ CORRECT! Block ID to remove:', blockIdToRemove, 'Current blocks:', blocks.length);
      SFX.correct();

      const newCombo = combo + 1;
      const pts = 10 + combo * 5;

      setScore(s => s + pts);
      setCombo(newCombo);
      setCorrect(c => c + 1);

      if (newCombo > 0 && newCombo % 5 === 0) SFX.combo();
      if (newCombo % 10 === 0 && newCombo > 0) {
        setLives(l => Math.min(l + 1, 7));
      }

      store.trackWord({
        en: block.word.en,
        pt: block.word.pt,
        emoji: block.word.emoji || '📝',
        correct: true,
        responseTime: 0,
        context: 'word-drop',
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonOrder: lesson.order,
        module: lesson.module,
      });

      // Remove block immediately, show feedback after
      setBlocks(b => {
        const filtered = b.filter(bl => bl.id !== blockIdToRemove);
        console.log('🗑️ Removing block ID:', blockIdToRemove, 'Blocks before:', b.length, 'after:', filtered.length);
        return filtered;
      });

      setTimeout(() => {
        console.log('⏱️ Feedback timeout reached');
        setSelectedBlockId(null);
        setSelectedOptionIndex(null); // Reset option navigation
        setAnswering(false);
        setFeedbackBlockId(null);
        setFeedbackResult(null);
      }, FEEDBACK_DELAY_CORRECT);

    } else {
      SFX.wrong();
      setCombo(0);
      setWrong(w => w + 1);
      setLives(l => Math.max(0, l - 1));

      store.trackWord({
        en: block.word.en,
        pt: block.word.pt,
        emoji: block.word.emoji || '📝',
        correct: false,
        responseTime: 0,
        context: 'word-drop',
        lessonId: lesson.id,
        lessonTitle: lesson.title,
        lessonOrder: lesson.order,
        module: lesson.module,
      });

      setTimeout(() => {
        setSelectedBlockId(null); // Reset selection to force re-selection
        setSelectedOptionIndex(null); // Reset option navigation
        setForceRegenerate(true); // Force new options to be generated
        setAnswering(false);
        setFeedbackBlockId(null);
        setFeedbackResult(null);
      }, FEEDBACK_DELAY_WRONG);
    }
  }, [selectedBlockId, blocks, answering, store, lesson, combo]);

  useEffect(() => {
    // Always attach the listener, but guard inside the handler
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only process keyboard if game is active and not currently answering
      if (!gameStarted || gameOver || paused || answering || options.length === 0) {
        return;
      }

      const key = e.key;

      // Number keys: 1, 2, 3 select and submit
      if (key === '1' || key === '2' || key === '3') {
        const index = parseInt(key) - 1;
        if (index < options.length) {
          e.preventDefault();
          handleAnswer(options[index]);
        }
      }

      // Arrow keys: cycle through options
      if (key === 'ArrowLeft' || key === 'ArrowUp') {
        e.preventDefault();
        // Move left (or wrap to right if at first)
        const current = selectedOptionIndex ?? -1;
        const prev = current <= 0 ? options.length - 1 : current - 1;
        setSelectedOptionIndex(prev);
      } else if (key === 'ArrowRight' || key === 'ArrowDown') {
        e.preventDefault();
        // Move right (or wrap to left if at last)
        const current = selectedOptionIndex ?? -1;
        const next = (current + 1) % options.length;
        setSelectedOptionIndex(next);
      }

      // Space or Enter: confirm selected option
      if ((key === ' ' || key === 'Enter' || e.code === 'Space') && options.length > 0) {
        e.preventDefault();
        // If no option selected yet, select the first one and submit immediately
        const indexToSubmit = selectedOptionIndex ?? 0;
        if (indexToSubmit < options.length) {
          handleAnswer(options[indexToSubmit]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameStarted, gameOver, answering, options, selectedOptionIndex, handleAnswer]);


  // Game Loop
  useEffect(() => {
    if (gameOver || !gameStarted || paused) {
      return;
    }

    console.log('🟢 Game loop starting');
    let frameCount = 0;

    const gameLoop = () => {
      frameCount++;
      const now = Date.now();
      const arena = getArenaDimensions();
      const floorY = arena.height - FLOOR_MARGIN;

      // Read current blocks from ref (avoids stale closures)
      const currentBlocks = blocksRef.current;

      // --- All logic computed OUTSIDE the updater ---

      // Apply gravity
      let updated = currentBlocks.map(b => ({
        ...b,
        y: b.y + b.speed,
      }));

      // Remove blocks at floor (track how many fell for lives)
      let fellCount = 0;
      updated = updated.filter(b => {
        if (b.y >= floorY) {
          fellCount++;
          return false;
        }
        return true;
      });

      // Side effect: reduce lives for fallen blocks (OUTSIDE updater)
      if (fellCount > 0) {
        setLives(l => Math.max(0, l - fellCount));
        setLoseEffectActive(true);
        setTimeout(() => setLoseEffectActive(false), 600); // Match shake duration
      }

      // Difficulty scaling: speed up every 5 combos
      const difficultyLevel = Math.floor(combo / 5);
      const speedMultiplier = 1 + (difficultyLevel * 0.25); // +25% speed per difficulty level

      // Spawn logic: first 3 blocks in 5 seconds, then every 10 seconds
      if (lastSpawnRef.current === 0) {
        lastSpawnRef.current = now;
      }

      const timeSinceLastSpawn = now - lastSpawnRef.current;
      const totalBlocksSpawned = blockIdRef.current;

      // If no blocks on screen, spawn immediately to speed up gameplay
      let shouldSpawn = false;
      if (updated.length === 0) {
        shouldSpawn = true;
      } else if (totalBlocksSpawned < 3) {
        // First 3 blocks: spawn every ~1667ms (5 seconds / 3), scaled by difficulty
        shouldSpawn = timeSinceLastSpawn >= (1667 / speedMultiplier);
      } else {
        // After 3 blocks: spawn every 10 seconds, scaled by difficulty
        shouldSpawn = timeSinceLastSpawn >= (10000 / speedMultiplier);
      }

      if (shouldSpawn && vocab.length > 0) {
        const word = vocab[wordIndexRef.current % vocab.length];
        wordIndexRef.current++;

        // Create lanes to prevent block collisions
        const numLanes = 3;
        const laneWidth = arena.width / numLanes;
        const lane = blockIdRef.current % numLanes;
        const laneCenter = lane * laneWidth + laneWidth / 2;
        const x = Math.max(5, Math.min(arena.width - 75, laneCenter - 30 + (Math.random() - 0.5) * 30));

        updated = [...updated, {
          id: blockIdRef.current++,
          word,
          y: -80,
          x,
          speed: (0.30 + Math.random() * 0.1) * speedMultiplier,
        }];
        lastSpawnRef.current = now;
      }

      // Pure state update — just set the computed result
      setBlocks(updated);

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);
    console.log('🎬 Game loop RAF scheduled');
    return () => {
      console.log(`⛔ Cleaning up game loop after ${frameCount} frames`);
      if (gameLoopRef.current !== null) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameOver, gameStarted, vocab, getArenaDimensions]);

  // Game Over
  useEffect(() => {
    if (lives <= 0) {
      setGameOver(true);
    }
  }, [lives]);

  // Handle Answer


  const startGame = useCallback(() => {
    console.log('🎮 START clicked');
    console.log('Arena ref:', arenaRef.current);
    console.log('Arena dimensions:', getArenaDimensions());
    console.log('Vocab:', vocab.length, 'words');
    setGameStarted(true);
  }, [getArenaDimensions, vocab]);

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const restartGame = useCallback(() => {
    // Reset all game state
    setScore(0);
    setLives(5);
    setCombo(0);
    setCorrect(0);
    setWrong(0);
    setGameOver(false);
    setBlocks([]);
    setSelectedBlockId(null);
    setOptions([]);
    setAnswering(false);
    setFeedbackBlockId(null);
    setFeedbackResult(null);
    setGameStarted(false);
    setSelectedOptionIndex(null);

    // Reset refs
    blockIdRef.current = 0;
    wordIndexRef.current = 0;
    lastSpawnRef.current = 0;
    blocksRef.current = [];
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2a4a 50%, #0a1628 100%)',
      color: 'var(--white)',
      fontFamily: 'Inter, sans-serif',
      padding: '20px',
      animation: feedbackResult === 'wrong' || loseEffectActive ? 'shake 0.6s ease-in-out' : 'none',
      boxShadow: feedbackResult === 'wrong' || loseEffectActive ? 'inset 0 0 60px rgba(255,68,68,0.6)' : 'none',
      transition: 'box-shadow 0.3s ease-out',
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h1 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '2.2rem',
            color: 'var(--gold)',
            textShadow: '4px 4px 0 #8B6914, 0 0 30px rgba(255,215,0,0.5)',
            margin: 0,
            fontWeight: 900,
            letterSpacing: '2px',
          }}>
            🎮 WORD DROP
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--gray)',
            margin: '10px 0 0 0',
            fontWeight: 500,
            letterSpacing: '0.5px',
          }}>
            {lesson.title}
          </p>
          {gameStarted && !gameOver && (
            <button onClick={() => setPaused(!paused)} style={{
              marginTop: 10, padding: '8px 20px', background: paused ? 'var(--green)' : 'rgba(255,255,255,0.08)',
              border: `2px solid ${paused ? 'var(--green)' : 'rgba(255,255,255,0.15)'}`,
              borderRadius: 10, color: paused ? '#000' : 'var(--white)',
              fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer',
              letterSpacing: 1
            }}>
              {paused ? '▶ CONTINUAR' : '⏸ PAUSAR'}
            </button>
          )}
        </div>

        {/* HUD Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          marginBottom: '18px',
          padding: '16px',
          background: 'linear-gradient(180deg, rgba(20,40,80,0.95), rgba(10,22,40,0.98))',
          border: '2px solid rgba(255,215,0,0.3)',
          borderRadius: '12px',
          boxShadow: '0 0 25px rgba(255,215,0,0.1), inset 0 0 20px rgba(255,215,0,0.02)',
          backdropFilter: 'blur(10px)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--cyan)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>
              ⭐ Score
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--gold)', marginTop: '6px', textShadow: '0 0 10px rgba(255,215,0,0.5)' }}>
              {score}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--cyan)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>
              ❤️ Lives
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#FF6B6B', marginTop: '6px' }}>
              {Array(Math.max(0, lives)).fill('❤️').join('')}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.65rem', color: 'var(--cyan)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px' }}>
              🔥 Combo
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--orange)', marginTop: '6px', textShadow: '0 0 10px rgba(255,140,0,0.5)' }}>
              {combo}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '10px',
          background: 'rgba(0,0,0,0.5)',
          border: '2px solid rgba(0,191,255,0.3)',
          borderRadius: '6px',
          overflow: 'hidden',
          marginBottom: '18px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
        }}>
          <div
            style={{
              height: '100%',
              background: 'linear-gradient(90deg, var(--cyan), var(--green))',
              width: `${correct > 0 ? Math.min(100, (correct / 30) * 100) : 0}%`,
              transition: 'width 0.3s ease-out',
              boxShadow: '0 0 12px rgba(0,255,136,0.6)',
            }}
          />
        </div>

        {/* Game Arena */}
        <div
          ref={arenaRef}
          style={{
            position: 'relative',
            width: '100%',
            height: '450px',
            border: '3px solid rgba(0,191,255,0.4)',
            background: 'linear-gradient(180deg, rgba(10,22,40,0.8), rgba(20,40,80,0.5))',
            overflow: 'hidden',
            marginBottom: '22px',
            borderRadius: '14px',
            boxShadow: '0 0 30px rgba(0,191,255,0.15), inset 0 0 40px rgba(0,191,255,0.08)',
            backdropFilter: 'blur(5px)',
          }}
        >
          {blocks.map(block => (
            <div
              key={block.id}
              style={{
                position: 'absolute',
                top: block.y,
                left: block.x,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div
                style={{
                  width: '55px',
                  height: '55px',
                  background: 'linear-gradient(180deg, rgba(20,40,80,0.95), rgba(10,22,40,0.98))',
                  border: selectedBlockId === block.id ? '3px solid #FFD700' : '2px solid #00BFFF',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.3rem',
                  cursor: 'pointer',
                  boxShadow: selectedBlockId === block.id ? '0 0 20px rgba(255,215,0,0.8)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {block.word.emoji || '📝'}
              </div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: '#FFD700',
                  background: 'rgba(10,22,40,0.95)',
                  border: '2px solid #FFD700',
                  padding: '6px 10px',
                  borderRadius: '6px',
                  maxWidth: '140px',
                  textAlign: 'center',
                  fontWeight: 700,
                  fontFamily: 'Orbitron, sans-serif',
                }}
              >
                {block.word.pt}
              </div>
            </div>
          ))}
        </div>

        {/* Translation Box - Always Visible */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(20,40,80,0.95), rgba(10,22,40,0.98))',
            border: '2px solid rgba(255,215,0,0.5)',
            borderRadius: '12px',
            padding: '16px 18px',
            marginBottom: '18px',
            textAlign: 'center',
            boxShadow: '0 0 20px rgba(255,215,0,0.2), inset 0 0 15px rgba(255,215,0,0.05)',
            backdropFilter: 'blur(10px)',
            minHeight: '80px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{
            fontSize: '0.7rem',
            color: 'var(--cyan)',
            textTransform: 'uppercase',
            marginBottom: '10px',
            fontWeight: 700,
            letterSpacing: '1.5px',
          }}>
            📝 Tradução do Bloco
          </div>
          <div
            style={{
              fontSize: '1.2rem',
              fontWeight: 900,
              color: selectedBlockId !== null && blocks.find(b => b.id === selectedBlockId) ? 'var(--gold)' : 'var(--gray)',
              fontFamily: 'Orbitron, sans-serif',
              wordBreak: 'break-word',
              textShadow: selectedBlockId !== null && blocks.find(b => b.id === selectedBlockId) ? '0 0 10px rgba(255,215,0,0.4)' : 'none',
              minHeight: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {selectedBlockId !== null && blocks.find(b => b.id === selectedBlockId) ? blocks.find(b => b.id === selectedBlockId)?.word.pt : '- Aguardando seleção -'}
          </div>
        </div>

        {/* Options Grid - Fixed Height */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            marginBottom: '18px',
            padding: '0 2px',
            minHeight: '130px',
            alignContent: 'start',
          }}
        >
          {options.map((opt, i) => {
            const isSelected = selectedOptionIndex === i;
            const hasCorrect = feedbackBlockId !== null && feedbackResult === 'correct';
            const hasWrong = feedbackBlockId !== null && feedbackResult === 'wrong';
            return (
              <button
                key={i}
                disabled={answering}
                onClick={() => handleAnswer(opt)}
                style={{
                  padding: '14px 10px',
                  background: hasCorrect ?
                    'linear-gradient(180deg, rgba(0,255,136,0.25), rgba(0,200,100,0.15))' :
                    hasWrong ?
                    'linear-gradient(180deg, rgba(255,68,68,0.25), rgba(255,40,40,0.15))' :
                    isSelected ?
                    'linear-gradient(180deg, rgba(0,255,136,0.15), rgba(0,191,255,0.1))' :
                    'linear-gradient(180deg, rgba(20,40,80,0.95), rgba(10,22,40,0.98))',
                  border: hasCorrect ?
                    '2px solid var(--green)' :
                    hasWrong ?
                    '2px solid var(--red)' :
                    isSelected ?
                    '3px solid var(--green)' :
                    '2px solid rgba(0,191,255,0.4)',
                  color: hasCorrect ?
                    'var(--green)' :
                    hasWrong ?
                    'var(--red)' :
                    isSelected ?
                    'var(--green)' :
                    'var(--white)',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: answering ? 'not-allowed' : 'pointer',
                  borderRadius: '10px',
                  transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  opacity: answering ? 0.5 : 1,
                  boxShadow: hasCorrect ?
                    '0 0 20px rgba(0,255,136,0.7)' :
                    hasWrong ?
                    '0 0 20px rgba(255,68,68,0.7)' :
                    isSelected ?
                    '0 0 18px rgba(0,255,136,0.6), inset 0 0 15px rgba(0,255,136,0.15)' :
                    'none',
                  transform: hasWrong ? 'scale(1.15)' : isSelected ? 'scale(1.08) translateY(-2px)' : 'scale(1)',
                  animation: hasWrong ? 'shake 0.6s ease-in-out' : 'none',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
          <button
            onClick={startGame}
            disabled={gameStarted}
            style={{
              flex: 1,
              padding: '14px',
              background: gameStarted ?
                'linear-gradient(180deg, rgba(100,100,100,0.3), rgba(80,80,80,0.2))' :
                'linear-gradient(135deg, #FFE566, #FFD700)',
              color: gameStarted ? 'var(--gray)' : '#000',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: '0.95rem',
              letterSpacing: '1px',
              border: gameStarted ? '2px solid rgba(255,255,255,0.1)' : 'none',
              cursor: gameStarted ? 'not-allowed' : 'pointer',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: gameStarted ? 'none' : '0 0 20px rgba(255,215,0,0.4), 0 5px 15px rgba(255,215,0,0.2)',
              transform: gameStarted ? 'none' : 'translateY(0)',
            }}
            onMouseEnter={(e) => !gameStarted && (e.currentTarget.style.transform = 'translateY(-3px)', e.currentTarget.style.boxShadow = '0 0 25px rgba(255,215,0,0.5), 0 8px 20px rgba(255,215,0,0.3)')}
            onMouseLeave={(e) => !gameStarted && (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '0 0 20px rgba(255,215,0,0.4), 0 5px 15px rgba(255,215,0,0.2)')}
          >
            {gameStarted ? '▶️ PLAYING' : '🚀 INICIAR'}
          </button>
          <button
            onClick={goBack}
            style={{
              flex: 1,
              padding: '14px',
              background: 'linear-gradient(135deg, var(--purple), #7B4DDF)',
              color: '#fff',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: '0.95rem',
              letterSpacing: '1px',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: '0 0 20px rgba(155,109,255,0.4), 0 5px 15px rgba(155,109,255,0.2)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)', e.currentTarget.style.boxShadow = '0 0 25px rgba(155,109,255,0.5), 0 8px 20px rgba(155,109,255,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '0 0 20px rgba(155,109,255,0.4), 0 5px 15px rgba(155,109,255,0.2)')}
          >
            📋 MENU
          </button>
        </div>

        {/* Pause Overlay */}
        {paused && !gameOver && (
          <div style={{
            position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.92)',
            zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              background: 'rgba(15,30,55,0.98)', border: '3px solid var(--cyan)',
              borderRadius: 18, padding: 32, maxWidth: 340, width: '90%', textAlign: 'center',
              boxShadow: '0 0 40px rgba(0,191,255,0.2)',
            }}>
              <div style={{ fontSize: '3rem', marginBottom: 12 }}>⏸️</div>
              <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.2rem', color: 'var(--cyan)', marginBottom: 18 }}>JOGO PAUSADO</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button onClick={() => setPaused(false)}
                  style={{ padding: 14, background: 'var(--green)', color: '#0a1628', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(0,255,136,0.3)' }}>
                  ▶ CONTINUAR
                </button>
                <button onClick={() => onFinish()}
                  style={{ padding: 12, background: 'rgba(255,255,255,0.05)', color: 'var(--gray)', borderRadius: 12, border: '2px solid rgba(255,255,255,0.1)', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                  🚪 SAIR DO JOGO
                </button>
              </div>
            </div>
          </div>
        )}

        {gameOver && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              backdropFilter: 'blur(4px)',
              animation: 'fadeIn 0.3s ease-out',
            }}
          >
            <div
              style={{
                background: 'linear-gradient(145deg, rgba(20,40,70,0.98), rgba(10,22,40,0.99))',
                border: '4px solid var(--gold)',
                padding: '32px 28px',
                maxWidth: '380px',
                width: '90%',
                textAlign: 'center',
                borderRadius: '20px',
                boxShadow: '0 0 50px rgba(255,215,0,0.3), inset 0 0 40px rgba(255,215,0,0.05)',
                animation: 'modalBounce 0.4s ease-out',
              }}
            >
              <div style={{ fontSize: '3.5rem', marginBottom: '18px', display: 'block', animation: 'emojiFloat 3s ease-in-out infinite' }}>
                💀
              </div>
              <h2 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '1.8rem',
                fontWeight: 900,
                color: 'var(--gold)',
                margin: '0 0 18px 0',
                textShadow: '0 0 20px rgba(255,215,0,0.5)',
                letterSpacing: '2px',
              }}>
                GAME OVER
              </h2>
              <div style={{
                background: 'rgba(0,0,0,0.5)',
                padding: '18px',
                marginBottom: '20px',
                borderRadius: '12px',
                border: '1px solid rgba(255,215,0,0.2)',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0', alignItems: 'center' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>⭐ Score</span>
                  <span style={{ color: 'var(--gold)', fontWeight: 900, fontSize: '1.3rem', textShadow: '0 0 10px rgba(255,215,0,0.5)' }}>{score}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: 'var(--cyan)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>✅ Acertos</span>
                  <span style={{ color: 'var(--green)', fontWeight: 900, fontSize: '1.3rem', textShadow: '0 0 10px rgba(0,255,136,0.5)' }}>{correct}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={restartGame}
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: 'linear-gradient(135deg, var(--green), #00CC66)',
                    color: '#000',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 0 20px rgba(0,255,136,0.4)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)', e.currentTarget.style.boxShadow = '0 0 25px rgba(0,255,136,0.6), 0 5px 15px rgba(0,255,136,0.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,136,0.4)')}
                >
                  🔄 TENTAR NOVAMENTE
                </button>
                <button
                  onClick={() => navigate('/')}
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: 'linear-gradient(135deg, #FFE566, var(--gold))',
                    color: '#000',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 0 20px rgba(255,215,0,0.4)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)', e.currentTarget.style.boxShadow = '0 0 25px rgba(255,215,0,0.6), 0 5px 15px rgba(255,215,0,0.3)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '0 0 20px rgba(255,215,0,0.4)')}
                >
                  📋 MENU
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
