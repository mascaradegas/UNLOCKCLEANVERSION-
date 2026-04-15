import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import type { Lesson } from '@unlock2026/shared';
import { useProgressStore } from '@/stores/progressStore';
import { SFX } from '@/utils/sounds';
import { getDisplayAnswer } from '@/utils/matchAnswer';

interface Props {
  lesson: Lesson;
  onFinish: () => void;
  onSelectMode: () => void;
  backLabel: string;
}

function shuffle<T>(a: T[]): T[] { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }

function getWordMatchMaxScore(totalMatches: number, waveBonusTotal: number) {
  if (totalMatches <= 0) return 0;
  return (totalMatches * 10) + ((totalMatches * (totalMatches - 1)) / 2) * 5 + waveBonusTotal;
}

export function WordMatchGame({ lesson, onFinish, onSelectMode, backLabel }: Props) {
  const store = useProgressStore();
  const vocab = lesson.vocabulary || [];
  const [gameKey, setGameKey] = useState(0);
  const [usedVocab, setUsedVocab] = useState<Set<string>>(new Set());

  // Only show 5 phrases at a time and keep both columns aligned to the same playable pairs.
  const pairs = useMemo(() => {
    const available = shuffle(vocab.filter(v => !usedVocab.has(v.en)));
    const nextPairs = [];
    const seenDisplayAnswers = new Set<string>();

    for (const item of available) {
      const displayAnswer = getDisplayAnswer(item.en).trim();
      if (!displayAnswer || seenDisplayAnswers.has(displayAnswer)) continue;
      seenDisplayAnswers.add(displayAnswer);
      nextPairs.push(item);
      if (nextPairs.length === 5) break;
    }

    return nextPairs;
  }, [vocab, usedVocab, gameKey]);

  const leftItems = useMemo(() => shuffle(pairs.map(p => ({ text: p.pt, id: p.en, emoji: p.emoji, pt: p.pt }))), [pairs]);
  const rightItems = useMemo(() => shuffle(pairs.map(p => ({ text: getDisplayAnswer(p.en), id: p.en }))), [pairs]);
  const startTime = useRef(Date.now());
  const answerStart = useRef(Date.now());
  const bestScore = store.getBestScore(lesson.id, 'word-match');

  const [selectedPtId, setSelectedPtId] = useState<string|null>(null);
  const [selectedEnId, setSelectedEnId] = useState<string|null>(null);
  const [selectedPtIndex, setSelectedPtIndex] = useState<number>(-1);
  const [selectedEnIndex, setSelectedEnIndex] = useState<number>(-1);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string,string]|null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(45); // More time per wave
  const [paused, setPaused] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [recordBeat, setRecordBeat] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [waveCount, setWaveCount] = useState(1);

  // Visual effects
  interface Particle { id: number; emoji: string; x: number; y: number; tx: number; ty: number; color: string; }
  interface ScorePopup { id: number; text: string; x: number; y: number; color: string; }
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
  const [screenShaking, setScreenShaking] = useState(false);
  const [showWaveTransition, setShowWaveTransition] = useState(false);
  const [waveToShow, setWaveToShow] = useState<number | null>(null);
  const [comboMilestone, setComboMilestone] = useState<number | null>(null);
  const particleIdRef = useRef(0);
  const popupIdRef = useRef(0);

  const finishedRef = useRef(false);
  const finishGameRef = useRef<(won: boolean) => void>(() => {});
  const processingRef = useRef(false);  // Prevent multiple checkMatch calls simultaneously
  const completedMatchesRef = useRef(0);
  const completedWaveBonusesRef = useRef(0);
  const [didWin, setDidWin] = useState(false);

  useEffect(() => { if (!store.hasTutorialSeen('word-match')) setShowTutorial(true); }, []);

  // Spawn particles on match/wrong
  const spawnParticles = useCallback((x: number, y: number, emoji: string, color: string) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const distance = 60 + Math.random() * 40;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance + Math.random() * 40;
      newParticles.push({
        id: particleIdRef.current++,
        emoji: emoji || '✨',
        x, y, tx, ty, color,
      });
    }
    setParticles(p => [...p, ...newParticles]);
    setTimeout(() => {
      setParticles(p => p.filter(pp => !newParticles.some(np => np.id === pp.id)));
    }, 800);
  }, []);

  // Spawn score popup
  const spawnScorePopup = useCallback((x: number, y: number, points: number, color: string) => {
    const popup: ScorePopup = {
      id: popupIdRef.current++,
      text: `+${points}`,
      x, y, color,
    };
    setScorePopups(p => [...p, popup]);
    setTimeout(() => {
      setScorePopups(p => p.filter(pp => pp.id !== popup.id));
    }, 1000);
  }, []);

  // Timer - uses ref to avoid stale closure
  useEffect(() => {
    if (gameOver || paused || showTutorial) return;
    const iv = setInterval(() => {
      setTimer(t => {
        if (t <= 0.1) { if (!finishedRef.current) finishGameRef.current(false); return 0; }
        return t - 0.1;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [gameOver, paused, showTutorial]);

  const finishGame = useCallback((won: boolean) => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    const totalAttempts = correctCount + wrongCount;
    const acc = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
    const totalMatches = completedMatchesRef.current + rightItems.length;
    const maxScore = getWordMatchMaxScore(totalMatches, completedWaveBonusesRef.current);
    // completeGame already calls addXP, updateStreak, checkAchievements internally
    const result = store.completeGame(lesson.id, 'word-match', score, maxScore, {
      percent: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
      isPerfect: won && wrongCount === 0 && correctCount === totalMatches,
    });
    store.logSession({
      type: 'word-match',
      lessonId: lesson.id,
      score,
      accuracy: acc,
      duration,
      wordsAttempted: totalAttempts,
    });
    setXpGained(50 + (result.isPerfect ? 100 : 0));
    setRecordBeat(result.isNewBest);
    setDidWin(won);
    setGameOver(true);
    if (won) SFX.victory(); else SFX.gameover();
  }, [correctCount, wrongCount, score, store, lesson, rightItems.length]);

  // Keep ref in sync
  useEffect(() => { finishGameRef.current = finishGame; }, [finishGame]);

  // Manual match check - only called when Space is pressed
  const checkMatch = useCallback(() => {
    if (processingRef.current) return;  // Prevent simultaneous processing
    if (!selectedPtId || !selectedEnId) return;
    processingRef.current = true;  // Mark as processing
    const ptItem = leftItems.find(l => l.id === selectedPtId);
    const enItem = rightItems.find(r => r.id === selectedEnId);
    const isMatch = !!ptItem && !!enItem && ptItem.id === enItem.id;
    const matchedPair = isMatch && ptItem ? pairs.find(p => p.en === ptItem.id) ?? null : null;

    if (isMatch && matchedPair) {
      // Correct match
      SFX.match();
      const points = 10 + combo * 5;
      setMatched(m => new Set([...m, selectedEnId]));
      setScore(s => s + points);
      const newCombo = combo + 1;
      setCombo(c => c + 1);
      setCorrectCount(c => c + 1);

      // Visual effects for correct match
      spawnParticles(window.innerWidth / 2, window.innerHeight / 2, '✨', 'var(--green)');
      spawnScorePopup(window.innerWidth / 2, window.innerHeight / 2 + 50, points, 'var(--green)');

      // Combo milestone effects (5x, 10x, 15x, 20x)
      if ((newCombo === 5 || newCombo === 10 || newCombo === 15 || newCombo === 20) && comboMilestone !== newCombo) {
        setComboMilestone(newCombo);
        setTimeout(() => setComboMilestone(null), 600);
      }
      // Track word
      store.trackWord({
        en: matchedPair.en, pt: matchedPair.pt, emoji: matchedPair.emoji || '📝', correct: true,
        responseTime: Date.now() - answerStart.current, context: 'word-match',
        lessonId: lesson.id, lessonTitle: lesson.title, lessonOrder: lesson.order, module: lesson.module,
      });
      setSelectedPtId(null); setSelectedEnId(null); setSelectedPtIndex(-1); setSelectedEnIndex(-1);
      answerStart.current = Date.now();
      processingRef.current = false;  // Reset processing flag
    } else if (ptItem && enItem) {
      // Wrong match
      SFX.wrong();
      setWrongPair([ptItem.id, enItem.id]);
      setLives(l => l - 1);
      setCombo(0);
      setWrongCount(w => w + 1);

      // Visual effects for wrong match
      spawnParticles(window.innerWidth / 2, window.innerHeight / 2, '💥', 'var(--red)');
      spawnScorePopup(window.innerWidth / 2, window.innerHeight / 2 + 50, -5, 'var(--red)');
      setScreenShaking(true);
      setTimeout(() => setScreenShaking(false), 400);
      // Track as wrong for pt item
      const pair = pairs.find(p => p.en === ptItem.id);
      if (pair) store.trackWord({
        en: pair.en, pt: pair.pt, emoji: pair.emoji || '📝', correct: false,
        responseTime: Date.now() - answerStart.current, context: 'word-match',
        lessonId: lesson.id, lessonTitle: lesson.title, lessonOrder: lesson.order, module: lesson.module,
      });
      setTimeout(() => {
        setWrongPair(null); setSelectedPtId(null); setSelectedEnId(null); setSelectedPtIndex(-1); setSelectedEnIndex(-1);
        answerStart.current = Date.now();
        processingRef.current = false;  // Reset processing flag
        if (lives <= 1 && !finishedRef.current) finishGameRef.current(false);
      }, 600);
    }
  }, [selectedPtId, selectedEnId, leftItems, rightItems, pairs, combo, store, lesson, spawnParticles, spawnScorePopup, comboMilestone, lives]);

  // Auto-confirm when both items are selected (via click or keyboard)
  useEffect(() => {
    if (selectedPtId && selectedEnId && !gameOver && !paused && !showTutorial) {
      const timeout = setTimeout(() => {
        checkMatch();
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [selectedPtId, selectedEnId, gameOver, paused, showTutorial, checkMatch]);

  // Wave check: when all current pairs matched, load next wave OR finish if no more vocab
  useEffect(() => {
    if (matched.size === rightItems.length && rightItems.length > 0 && !finishedRef.current) {
      // Check if there are more words to load
      const remaining = vocab.filter(v => !usedVocab.has(v.en) && !rightItems.some(r => r.id === v.en));

      if (remaining.length === 0) {
        // No more vocabulary - finish the game
        setTimeout(() => {
          finishGameRef.current(true);
        }, 500);
      } else {
        // Wave celebration effect
        const nextWave = waveCount + 1;
        setShowWaveTransition(true);
        setWaveToShow(nextWave);
        spawnParticles(window.innerWidth / 2, window.innerHeight / 2, '🌊', 'var(--cyan)');
        spawnScorePopup(window.innerWidth / 2, window.innerHeight / 2 - 100, 50, 'var(--gold)');

        // Load next wave after brief celebration
        setTimeout(() => {
          completedMatchesRef.current += rightItems.length;
          completedWaveBonusesRef.current += 50;
          const newUsed = new Set(usedVocab);
          pairs.forEach(p => newUsed.add(p.en));
          setUsedVocab(newUsed);
          setMatched(new Set());
          setSelectedPtId(null);
          setSelectedEnId(null);
          setSelectedPtIndex(-1);
          setSelectedEnIndex(-1);
          setWrongPair(null);
          // Add 10 seconds bonus for completing a wave
          setTimer(t => t + 10);
          // Award bonus points (50 per wave)
          setScore(s => s + 50);
          // Increment wave counter
          setWaveCount(w => w + 1);
          setShowWaveTransition(false);
        }, 800);
      }
    }
  }, [matched, rightItems.length, pairs, usedVocab, vocab, finishedRef]);

  const resetGame = useCallback(() => {
    setSelectedPtId(null); setSelectedEnId(null); setSelectedPtIndex(-1); setSelectedEnIndex(-1); setMatched(new Set()); setWrongPair(null);
    setScore(0); setLives(3); setCombo(0); setGameOver(false); setTimer(45); setCorrectCount(0); setWrongCount(0); setXpGained(0); setRecordBeat(false);
    setUsedVocab(new Set()); setWaveCount(1);
    setParticles([]); setScorePopups([]); setScreenShaking(false); setShowWaveTransition(false); setComboMilestone(null);
    setDidWin(false);
    finishedRef.current = false; startTime.current = Date.now(); answerStart.current = Date.now();
    completedMatchesRef.current = 0;
    completedWaveBonusesRef.current = 0;
    setGameKey(k => k + 1);
  }, []);

  // Keyboard Controls
  useEffect(() => {
    if (gameOver || paused || showTutorial) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const isUp = key === 'arrowup';
      const isDown = key === 'arrowdown';
      const isSpace = key === ' ';

      // Determine which column we're navigating in (based on which index is active)
      const inLeftColumn = selectedPtIndex >= 0 || (selectedPtIndex < 0 && selectedEnIndex < 0);

      // Arrow Up/Down: navigate within current column (don't select yet)
      if (isUp || isDown) {
        e.preventDefault();
        if (wrongPair) return;  // Don't navigate while showing wrong feedback

        if (inLeftColumn) {
          const unmatched = leftItems.filter(item => !matched.has(item.id));
          if (unmatched.length > 0) {
            let currentIndex = selectedPtIndex;
            if (currentIndex < 0) {
              currentIndex = 0;
            } else {
              currentIndex = isDown
                ? (currentIndex + 1) % unmatched.length
                : (currentIndex - 1 + unmatched.length) % unmatched.length;
            }
            setSelectedPtIndex(currentIndex);
            SFX.tick();
          }
        } else {
          const unmatched = rightItems.filter(item => !matched.has(item.id));
          if (unmatched.length > 0) {
            let currentIndex = selectedEnIndex;
            if (currentIndex < 0) {
              currentIndex = 0;
            } else {
              currentIndex = isDown
                ? (currentIndex + 1) % unmatched.length
                : (currentIndex - 1 + unmatched.length) % unmatched.length;
            }
            setSelectedEnIndex(currentIndex);
            SFX.tick();
          }
        }
      }

      // Arrow Left: switch to Portuguese column (remember last position in this column)
      if (key === 'arrowleft') {
        e.preventDefault();
        if (wrongPair) return;  // Don't switch while showing wrong feedback
        const unmatched = leftItems.filter(item => !matched.has(item.id));
        if (unmatched.length > 0) {
          // If we don't have a position saved in left column, use position from right column
          const idx = selectedPtIndex >= 0 ? selectedPtIndex : (selectedEnIndex >= 0 ? selectedEnIndex : 0);
          setSelectedPtIndex(Math.min(idx, unmatched.length - 1));
          setSelectedEnIndex(-1);  // Clear English navigation but NOT the selection
          SFX.tick();
        }
      }

      // Arrow Right: switch to English column (remember last position in this column)
      if (key === 'arrowright') {
        e.preventDefault();
        if (wrongPair) return;  // Don't switch while showing wrong feedback
        const unmatched = rightItems.filter(item => !matched.has(item.id));
        if (unmatched.length > 0) {
          // If we don't have a position saved in right column, use position from left column
          const idx = selectedEnIndex >= 0 ? selectedEnIndex : (selectedPtIndex >= 0 ? selectedPtIndex : 0);
          setSelectedEnIndex(Math.min(idx, unmatched.length - 1));
          setSelectedPtIndex(-1);  // Clear Portuguese navigation but NOT the selection
          SFX.tick();
        }
      }

      // Space: confirm selection for current column
        if (isSpace) {
          e.preventDefault();
          if (wrongPair) return;  // Don't select while showing wrong feedback

        if (inLeftColumn) {
          const unmatched = leftItems.filter(item => !matched.has(item.id));
          if (unmatched.length > 0 && selectedPtIndex >= 0 && selectedPtIndex < unmatched.length) {
            setSelectedPtId(unmatched[selectedPtIndex].id);
            SFX.match();
            answerStart.current = Date.now();
          }
        } else {
          const unmatched = rightItems.filter(item => !matched.has(item.id));
          if (unmatched.length > 0 && selectedEnIndex >= 0 && selectedEnIndex < unmatched.length) {
            setSelectedEnId(unmatched[selectedEnIndex].id);
            SFX.match();
          }
        }
      }

    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, paused, showTutorial, leftItems, rightItems, matched, selectedPtId, selectedEnId, selectedPtIndex, selectedEnIndex, wrongPair]);

  // Tutorial
  if (showTutorial) {
    return (
      <div className="game-modal"><div className="game-modal-box">
        <div className="game-modal-icon">🔗</div>
        <div className="game-modal-title">COMO JOGAR</div>
        <div style={{ textAlign:'left', padding:'0 10px', lineHeight:1.8, fontSize:'0.9rem' }}>
          <p>1️⃣ Clique uma palavra em <b style={{color:'var(--green)'}}>português</b> 🇧🇷</p>
          <p>2️⃣ Depois clique a tradução em <b style={{color:'var(--red)'}}>inglês</b> 🇺🇸</p>
          <p>3️⃣ Combine todos os pares antes do tempo acabar! 💣</p>
        </div>
        <button className="game-modal-btn primary" onClick={() => { setShowTutorial(false); store.markTutorialSeen('word-match'); }}>COMEÇAR! 🚀</button>
      </div></div>
    );
  }

  // Game Over
  if (gameOver) {
    const acc = correctCount+wrongCount>0 ? Math.round((correctCount/(correctCount+wrongCount))*100) : 0;
    return (
      <div className="game-modal"><div className="game-modal-box">
        {recordBeat && <div className="game-record-alert">🏆 NOVO RECORDE!</div>}
        <div className="game-modal-icon">{didWin ? '🏆' : '💀'}</div>
        <div className="game-modal-title">{didWin ? 'PARABÉNS!' : 'GAME OVER!'}</div>
        <div className="game-modal-stats">
          {[['Score',score],['Pares',`${correctCount}/${vocab.length}`],['Precisão',`${acc}%`],['Vidas','❤️'.repeat(Math.max(lives,0))]].map(([k,v]) => (
            <div className="game-modal-stat" key={k as string}><span className="k">{k}</span><span className="v">{v}</span></div>
          ))}
        </div>
        <div className="game-xp-gained">+{xpGained} XP ⚡</div>
        <button className="game-modal-btn primary" onClick={resetGame}>🔄 Jogar de Novo</button>
        <button className="game-modal-btn secondary" onClick={onSelectMode}>🎯 Outros Jogos</button>
        <button className="game-modal-btn secondary" onClick={onFinish}>↩ {backLabel}</button>
      </div></div>
    );
  }

  return (
    <div className={`game-page ${screenShaking ? 'wm-screen-shake' : ''}`}>
      <button className="game-pause-btn" onClick={() => setPaused(!paused)}>{paused ? '▶️' : '⏸️'}</button>
      <div className="game-title-bar" style={{ animation: combo > 0 && combo % 5 === 0 ? 'none' : 'none' }}><h1>🔗 WORD MATCH</h1></div>
      <div className="game-hud">
        {[{l:'SCORE',v:score.toString()},{l:'LIVES',v:'❤️'.repeat(Math.max(lives,0))},{l:'COMBO',v:`${combo}x`},{l:'PARES',v:`${matched.size}/${rightItems.length}`}].map(h => (
          <div className="hud-item" key={h.l}><div className="hud-label">{h.l}</div><div className="hud-value">{h.v}</div></div>
        ))}
      </div>
      <div className={`timer-neon ${timer <= 10 ? 'timer-warning' : ''}`} style={timer <= 10 ? { color: 'var(--red)', borderColor: 'var(--red)', boxShadow: '0 0 20px rgba(255,68,68,0.6)' } : undefined}>{Math.ceil(timer)}{timer <= 10 && timer > 0 ? ' ⚠️' : ''}</div>
      <div className="wm-cols">
        <div>
          <div className="wm-col-head pt">🇧🇷 PT</div>
          <div className="wm-col-sub">WAITING</div>
          {leftItems.map((item, idx) => {
            let cls = 'wm-btn';
            if (matched.has(item.id)) cls += ' matched';
            else if (item.id === selectedPtId) cls += ' selected';
            else if (selectedPtId === null && selectedPtIndex >= 0) {
              // Compare against the actual item at selectedPtIndex in the unmatched array
              const unmatched = leftItems.filter(i => !matched.has(i.id));
              if (selectedPtIndex < unmatched.length && unmatched[selectedPtIndex].id === item.id) {
                cls += ' highlighted';
              }
            }
            else if (wrongPair && wrongPair[0] === item.id) cls += ' wrong';
            return <button key={item.id} className={cls} disabled={matched.has(item.id)||paused||!!wrongPair} onClick={() => {
              if(!matched.has(item.id)&&!wrongPair){
                setSelectedPtId(item.id);
                setSelectedEnIndex(-1);
                SFX.match();
                answerStart.current=Date.now();
              }
            }}>{item.text.toUpperCase()}</button>;
          })}
        </div>
        <div>
          <div className="wm-col-head en">🇺🇸 EN</div>
          <div className="wm-col-sub">WAITING</div>
          {rightItems.map((item, idx) => {
            let cls = 'wm-btn';
            if (matched.has(item.id)) cls += ' matched';
            else if (item.id === selectedEnId) cls += ' selected';
            else if (selectedEnId === null && selectedEnIndex >= 0) {
              // Compare against the actual item at selectedEnIndex in the unmatched array
              const unmatched = rightItems.filter(i => !matched.has(i.id));
              if (selectedEnIndex < unmatched.length && unmatched[selectedEnIndex].id === item.id) {
                cls += ' highlighted';
              }
            }
            else if (wrongPair && wrongPair[1] === item.id) cls += ' wrong';
            return <button key={item.id} className={cls} disabled={matched.has(item.id)||paused||!!wrongPair} onClick={() => {
              if(!matched.has(item.id)&&!wrongPair){
                setSelectedEnId(item.id);
                setSelectedPtIndex(-1);
                SFX.match();
              }
            }}>{item.text.toUpperCase()}</button>;
          })}
        </div>
      </div>

      {/* Particle Effects */}
      {particles.map(p => (
        <div
          key={p.id}
          className="wm-particle"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            color: p.color,
          } as any}
        >
          {p.emoji}
        </div>
      ))}

      {/* Score Popups */}
      {scorePopups.map(p => (
        <div
          key={p.id}
          className="wm-score-popup"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
          }}
        >
          {p.text}
        </div>
      ))}

      {/* Wave Transition Announcement */}
      {showWaveTransition && waveToShow !== null && (
        <div className="wm-wave-announcement">
          <div className="wm-wave-text">WAVE {waveToShow}</div>
          <div style={{ fontSize: '1.2rem', color: 'var(--cyan)', marginTop: '12px' }}>+10 ⏱️ +50 ⭐</div>
        </div>
      )}

      {/* Combo Milestone */}
      {comboMilestone !== null && (
        <div className="wm-combo-milestone">
          <div className="wm-combo-text">{comboMilestone}x COMBO! 🔥</div>
        </div>
      )}

      {wrongPair && (
        <div className="wm-wrong-announcement">
          <div className="wm-wrong-text">WRONG MATCH!</div>
        </div>
      )}
    </div>
  );
}
