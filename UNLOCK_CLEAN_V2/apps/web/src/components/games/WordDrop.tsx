import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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

interface Props {
  lesson: Lesson;
  onFinish: () => void;
  onSelectMode: () => void;
  backLabel: string;
}

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
const WORD_DROP_TARGET_CORRECT = 30;
const BLOCK_START_Y = 18;
const BLOCK_SPEED_MIN = 0.85;
const BLOCK_SPEED_VARIANCE = 0.25;
const WORD_DROP_SPAWN_INTERVAL_MS = 2200;
const WORD_DROP_LEVEL_STARTS = [0, 5, 10, 14, 18, 21, 24, 26, 28, 30] as const;
const WORD_DROP_LEVELS = [
  { fallMultiplier: 0.3, spawnMultiplier: 0.58, maxActiveBlocks: 2 },
  { fallMultiplier: 0.38, spawnMultiplier: 0.66, maxActiveBlocks: 2 },
  { fallMultiplier: 0.46, spawnMultiplier: 0.74, maxActiveBlocks: 3 },
  { fallMultiplier: 0.56, spawnMultiplier: 0.82, maxActiveBlocks: 3 },
  { fallMultiplier: 0.68, spawnMultiplier: 0.9, maxActiveBlocks: 4 },
  { fallMultiplier: 0.8, spawnMultiplier: 0.99, maxActiveBlocks: 5 },
  { fallMultiplier: 0.94, spawnMultiplier: 1.08, maxActiveBlocks: 5 },
  { fallMultiplier: 1.08, spawnMultiplier: 1.18, maxActiveBlocks: 6 },
  { fallMultiplier: 1.22, spawnMultiplier: 1.29, maxActiveBlocks: 6 },
  { fallMultiplier: 1.38, spawnMultiplier: 1.42, maxActiveBlocks: 7 },
] as const;

function getWordDropLevelTone(level: number) {
  const ratio = (level - 1) / Math.max(WORD_DROP_LEVELS.length - 1, 1);
  const start = { r: 0, g: 255, b: 136 };
  const end = { r: 255, g: 107, b: 107 };
  const r = Math.round(start.r + ((end.r - start.r) * ratio));
  const g = Math.round(start.g + ((end.g - start.g) * ratio));
  const b = Math.round(start.b + ((end.b - start.b) * ratio));

  return {
    border: `rgba(${r}, ${g}, ${b}, 0.55)`,
    background: `rgba(${r}, ${g}, ${b}, 0.12)`,
    text: `rgb(${r}, ${g}, ${b})`,
    glow: `0 0 18px rgba(${r}, ${g}, ${b}, 0.18)`,
  };
}

function getWordDropPercent(correct: number) {
  return Math.max(0, Math.min(100, Math.round((correct / WORD_DROP_TARGET_CORRECT) * 100)));
}

function getWordDropDifficulty(correctCount: number) {
  let levelIndex = 0;
  for (let i = WORD_DROP_LEVEL_STARTS.length - 1; i >= 0; i--) {
    if (correctCount >= WORD_DROP_LEVEL_STARTS[i]) {
      levelIndex = i;
      break;
    }
  }

  const level = levelIndex + 1;
  const config = WORD_DROP_LEVELS[levelIndex];
  const currentLevelStart = WORD_DROP_LEVEL_STARTS[levelIndex];
  const nextLevelAt = levelIndex < WORD_DROP_LEVEL_STARTS.length - 1
    ? WORD_DROP_LEVEL_STARTS[levelIndex + 1]
    : null;
  const progressWithinLevel = nextLevelAt === null
    ? 1
    : Math.max(0, Math.min(1, (correctCount - currentLevelStart) / (nextLevelAt - currentLevelStart)));

  return {
    level,
    nextLevelAt,
    progressWithinLevel,
    ...config,
  };
}

export function WordDropGame({ lesson, onFinish, onSelectMode, backLabel }: Props) {
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
  }, [lesson.id, lesson.vocabulary]);

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
  const [loseEffectActive, setLoseEffectActive] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [recordBeat, setRecordBeat] = useState(false);

  // Refs
  const arenaRef = useRef<HTMLDivElement>(null);
  const gameLoopRef = useRef<number | null>(null);
  const blockIdRef = useRef(0);
  const wordIndexRef = useRef(0);
  const lastSpawnRef = useRef(0);
  const blocksRef = useRef<Block[]>([]);
  const startTimeRef = useRef(Date.now());
  const finishedRef = useRef(false);

  const bestScore = store.getBestScore(lesson.id, 'word-drop');

  const getArenaDimensions = useCallback(() => {
    if (!arenaRef.current) return { height: 450, width: 400 };
    return {
      height: arenaRef.current.offsetHeight,
      width: arenaRef.current.offsetWidth,
    };
  }, []);

  const difficultyState = useMemo(() => getWordDropDifficulty(correct), [correct]);
  const difficultyTone = useMemo(
    () => getWordDropLevelTone(difficultyState.level),
    [difficultyState.level],
  );

  const createBlock = useCallback((arenaWidth: number): Block | null => {
    if (vocab.length === 0) {
      return null;
    }

    const word = vocab[wordIndexRef.current % vocab.length];
    wordIndexRef.current++;

    const numLanes = 3;
    const laneWidth = arenaWidth / numLanes;
    const lane = blockIdRef.current % numLanes;
    const laneCenter = lane * laneWidth + laneWidth / 2;
    const x = Math.max(5, Math.min(arenaWidth - 75, laneCenter - 30 + (Math.random() - 0.5) * 30));

    return {
      id: blockIdRef.current++,
      word,
      y: BLOCK_START_Y,
      x,
      speed: BLOCK_SPEED_MIN + Math.random() * BLOCK_SPEED_VARIANCE,
    };
  }, [vocab]);

  const getPriorityBlock = useCallback((blockList: Block[]) => {
    if (blockList.length === 0) {
      return null;
    }

    const arena = getArenaDimensions();
    const floorY = arena.height - FLOOR_MARGIN;
    const answerZone = floorY - ANSWER_ZONE_OFFSET;
    const eligible = blockList.filter(b => b.y >= answerZone);

    if (eligible.length > 0) {
      return eligible.reduce((a, b) => (a.y > b.y ? a : b));
    }

    return blockList.reduce((a, b) => (a.y > b.y ? a : b));
  }, [getArenaDimensions]);

  const buildOptionsForWord = useCallback((targetEn: string) => {
    const correctOption = getDisplayAnswer(targetEn);
    const wrongOptions = vocab
      .filter(w => w.en !== targetEn)
      .map(w => getDisplayAnswer(w.en))
      .filter((opt, idx, arr) => arr.indexOf(opt) === idx)
      .filter(opt => opt !== correctOption);

    if (wrongOptions.length < 2) {
      console.warn('⚠️ Not enough unique wrong options. Available:', wrongOptions.length);
    }

    return shuffle([correctOption, ...shuffle(wrongOptions).slice(0, 2)]);
  }, [vocab]);

  // Keep blocksRef in sync with blocks state
  useEffect(() => {
    blocksRef.current = blocks;
  }, [blocks]);

  // Auto-select block
  useEffect(() => {
    if (blocks.length === 0) {
      setSelectedBlockId(null);
      setOptions([]);
      return;
    }

    if (answering) {
      return;
    }

    console.log('🎯 Auto-select effect running. Blocks:', blocks.length);
    console.log('📦 Block positions:', blocks.map(b => ({ id: b.id, y: b.y, word: b.word.pt })));

    const pick = getPriorityBlock(blocks);

    if (pick && (pick.id !== selectedBlockId || options.length === 0)) {
      if (pick.id !== selectedBlockId) {
        setSelectedBlockId(pick.id);
        setSelectedOptionIndex(null);
      }

      const nextOptions = buildOptionsForWord(pick.word.en);
      console.log('🔤 Options generated:', nextOptions, 'for word:', pick.word.pt);
      setOptions(nextOptions);
    }
  }, [blocks, answering, getPriorityBlock, selectedBlockId, options.length, buildOptionsForWord]);

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

      const remainingBlocks = blocks.filter(bl => bl.id !== blockIdToRemove);
      const nextBlock = getPriorityBlock(remainingBlocks);

      // Remove block immediately, show feedback after
      setBlocks(b => {
        const filtered = b.filter(bl => bl.id !== blockIdToRemove);
        console.log('🗑️ Removing block ID:', blockIdToRemove, 'Blocks before:', b.length, 'after:', filtered.length);
        return filtered;
      });

      if (nextBlock) {
        setSelectedBlockId(nextBlock.id);
        setOptions(buildOptionsForWord(nextBlock.word.en));
      } else {
        setSelectedBlockId(null);
        setOptions([]);
      }
      setSelectedOptionIndex(null);

      setTimeout(() => {
        console.log('⏱️ Feedback timeout reached');
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
        const activeBlocks = blocksRef.current;
        const nextBlock = getPriorityBlock(activeBlocks);

        if (nextBlock) {
          setSelectedBlockId(nextBlock.id);
          setOptions(buildOptionsForWord(nextBlock.word.en));
        } else {
          setSelectedBlockId(null);
          setOptions([]);
        }

        setSelectedOptionIndex(null);
        setAnswering(false);
        setFeedbackBlockId(null);
        setFeedbackResult(null);
      }, FEEDBACK_DELAY_WRONG);
    }
  }, [selectedBlockId, blocks, answering, store, lesson, combo, getPriorityBlock, buildOptionsForWord]);

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
  }, [gameStarted, gameOver, paused, answering, options, selectedOptionIndex, handleAnswer]);


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

      const difficulty = getWordDropDifficulty(correct);

      // Apply gravity
      let updated = currentBlocks.map(b => ({
        ...b,
        y: b.y + (b.speed * difficulty.fallMultiplier),
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

      // Spawn logic: keep spawning on a fixed cadence until the stage cap is reached
      if (lastSpawnRef.current === 0) {
        lastSpawnRef.current = now;
      }

      const timeSinceLastSpawn = now - lastSpawnRef.current;

      // If no blocks on screen, spawn immediately. Otherwise keep stacking
      // until the stage cap is reached.
      let shouldSpawn = false;
      if (updated.length === 0) {
        shouldSpawn = true;
      } else if (updated.length < difficulty.maxActiveBlocks) {
        shouldSpawn = timeSinceLastSpawn >= (WORD_DROP_SPAWN_INTERVAL_MS / difficulty.spawnMultiplier);
      }

      if (shouldSpawn && vocab.length > 0) {
        const block = createBlock(arena.width);
        if (block) {
          updated = [...updated, block];
          lastSpawnRef.current = now;
        }
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
  }, [gameOver, gameStarted, paused, correct, vocab, getArenaDimensions, createBlock]);

  // Game Over
  const finishGame = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;

    const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
    const totalAttempts = correct + wrong;
    const accuracy = totalAttempts > 0 ? Math.round((correct / totalAttempts) * 100) : 0;
    const result = store.completeGame(
      lesson.id,
      'word-drop',
      score,
      Math.max(WORD_DROP_TARGET_CORRECT * 10, score, 1),
      {
        percent: getWordDropPercent(correct),
        isPerfect: false,
      },
    );

    store.logSession({
      type: 'word-drop',
      lessonId: lesson.id,
      score,
      accuracy,
      duration,
      wordsAttempted: totalAttempts,
    });

    setXpGained(50 + (result.isPerfect ? 100 : 0));
    setRecordBeat(result.isNewBest);
    setGameOver(true);
    SFX.gameover();
  }, [correct, lesson.id, score, store, wrong]);

  useEffect(() => {
    if (lives <= 0) {
      finishGame();
    }
  }, [finishGame, lives]);

  // Handle Answer


  const startGame = useCallback(() => {
    console.log('🎮 START clicked');
    console.log('Arena ref:', arenaRef.current);
    console.log('Arena dimensions:', getArenaDimensions());
    console.log('Vocab:', vocab.length, 'words');

    if (vocab.length === 0) {
      return;
    }

    const arena = getArenaDimensions();
    const initialBlock = createBlock(arena.width);
    const now = Date.now();

    startTimeRef.current = Date.now();
    finishedRef.current = false;
    lastSpawnRef.current = now;
    setPaused(false);
    setBlocks(initialBlock ? [initialBlock] : []);
    blocksRef.current = initialBlock ? [initialBlock] : [];
    setGameStarted(true);
  }, [createBlock, getArenaDimensions, vocab]);

  useEffect(() => {
    if (gameStarted || gameOver || vocab.length === 0) return;
    startGame();
  }, [gameStarted, gameOver, startGame, vocab.length]);

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
    setPaused(false);
    setSelectedOptionIndex(null);
    setXpGained(0);
    setRecordBeat(false);

    // Reset refs
    blockIdRef.current = 0;
    wordIndexRef.current = 0;
    lastSpawnRef.current = 0;
    blocksRef.current = [];
    startTimeRef.current = Date.now();
    finishedRef.current = false;
  }, []);

  const backButtonLabel = backLabel.toUpperCase();
  const recordPct = bestScore > 0 ? Math.min((score / bestScore) * 100, 100) : 0;
  const selectedBlock = selectedBlockId !== null ? blocks.find(b => b.id === selectedBlockId) ?? null : null;
  const waitingForFirstBlock = gameStarted && blocks.length === 0 && !gameOver;

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
          <div
            style={{
              marginTop: 10,
              marginInline: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              gap: 8,
              padding: '10px 14px',
              minWidth: '210px',
              borderRadius: 16,
              border: `2px solid ${difficultyTone.border}`,
              background: difficultyTone.background,
              color: difficultyTone.text,
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '1px',
              boxShadow: difficultyTone.glow,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
              <span>⚙️ NÍVEL {difficultyState.level}/10</span>
              <span style={{ opacity: 0.8, fontSize: '0.66rem' }}>
                {difficultyState.nextLevelAt === null
                  ? 'MAX'
                  : `PRÓX. ${difficultyState.nextLevelAt}`}
              </span>
            </div>
            <div
              style={{
                width: '100%',
                height: '8px',
                borderRadius: 999,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  width: `${difficultyState.progressWithinLevel * 100}%`,
                  height: '100%',
                  borderRadius: 999,
                  background: difficultyTone.text,
                  boxShadow: difficultyTone.glow,
                  transition: 'width 0.25s ease-out',
                }}
              />
            </div>
          </div>
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

        {bestScore > 0 && (
          <div className="game-record-bar">
            <div className="game-record-fill" style={{ width: `${recordPct}%` }} />
            <div className="game-record-text">Recorde: {bestScore}</div>
          </div>
        )}

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
          {waitingForFirstBlock && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
                color: 'var(--cyan)',
                fontFamily: 'Orbitron, sans-serif',
                fontWeight: 700,
                letterSpacing: '1px',
                background: 'linear-gradient(180deg, rgba(10,22,40,0.15), rgba(10,22,40,0.05))',
              }}
            >
              <div style={{ fontSize: '1.4rem' }}>🧱</div>
              <div style={{ fontSize: '0.8rem' }}>CARREGANDO PRIMEIRO BLOCO...</div>
            </div>
          )}

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
              color: selectedBlock ? 'var(--gold)' : waitingForFirstBlock ? 'var(--cyan)' : 'var(--gray)',
              fontFamily: 'Orbitron, sans-serif',
              wordBreak: 'break-word',
              textShadow: selectedBlock ? '0 0 10px rgba(255,215,0,0.4)' : waitingForFirstBlock ? '0 0 10px rgba(0,191,255,0.35)' : 'none',
              minHeight: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {selectedBlock ? selectedBlock.word.pt : waitingForFirstBlock ? 'Carregando primeiro bloco...' : '- Aguardando seleção -'}
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
            disabled={gameStarted && !gameOver}
            style={{
              flex: 1,
              padding: '14px',
              background: gameStarted && !gameOver ?
                'linear-gradient(180deg, rgba(100,100,100,0.3), rgba(80,80,80,0.2))' :
                'linear-gradient(135deg, #FFE566, #FFD700)',
              color: gameStarted && !gameOver ? 'var(--gray)' : '#000',
              fontFamily: 'Orbitron, sans-serif',
              fontWeight: 900,
              fontSize: '0.95rem',
              letterSpacing: '1px',
              border: gameStarted && !gameOver ? '2px solid rgba(255,255,255,0.1)' : 'none',
              cursor: gameStarted && !gameOver ? 'not-allowed' : 'pointer',
              borderRadius: '10px',
              transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              boxShadow: gameStarted && !gameOver ? 'none' : '0 0 20px rgba(255,215,0,0.4), 0 5px 15px rgba(255,215,0,0.2)',
              transform: gameStarted && !gameOver ? 'none' : 'translateY(0)',
            }}
            onMouseEnter={(e) => !(gameStarted && !gameOver) && (e.currentTarget.style.transform = 'translateY(-3px)', e.currentTarget.style.boxShadow = '0 0 25px rgba(255,215,0,0.5), 0 8px 20px rgba(255,215,0,0.3)')}
            onMouseLeave={(e) => !(gameStarted && !gameOver) && (e.currentTarget.style.transform = 'translateY(0)', e.currentTarget.style.boxShadow = '0 0 20px rgba(255,215,0,0.4), 0 5px 15px rgba(255,215,0,0.2)')}
          >
            {gameStarted && !gameOver ? '🟢 EM ANDAMENTO' : '🚀 INICIAR'}
          </button>
          <button
            onClick={onFinish}
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
            ↩ {backButtonLabel}
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
              {recordBeat && (
                <div className="game-record-alert" style={{ marginBottom: 12 }}>
                  🏆 NOVO RECORDE!
                </div>
              )}
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
              <div className="game-xp-gained" style={{ marginBottom: 16 }}>+{xpGained} XP ⚡</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={restartGame}
                  style={{
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
                  onClick={onSelectMode}
                  style={{
                    padding: '14px',
                    background: 'rgba(0,191,255,0.12)',
                    color: 'var(--cyan)',
                    fontFamily: 'Orbitron, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.9rem',
                    letterSpacing: '1px',
                    border: '2px solid var(--cyan)',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: '0 0 20px rgba(0,191,255,0.2)',
                  }}
                >
                  🎯 OUTROS JOGOS
                </button>
                <button
                  onClick={onFinish}
                  style={{
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
                  ↩ {backButtonLabel}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
