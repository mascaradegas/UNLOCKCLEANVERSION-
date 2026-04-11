import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
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

function getWordStackMaxScore(total: number) {
  if (total <= 0) return 0;
  return (total * 15) + ((total * (total - 1)) / 2) * 5;
}

export function WordStackGame({ lesson, onFinish, onSelectMode, backLabel }: Props) {
  const store = useProgressStore();
  const vocab = lesson.vocabulary || [];
  const [gameKey, setGameKey] = useState(0);
  const words = useMemo(() => shuffle(vocab).slice(0, Math.min(10, vocab.length)), [vocab, gameKey]);
  const startTime = useRef(Date.now());
  const answerStart = useRef(Date.now());
  const bestScore = store.getBestScore(lesson.id, 'word-stack');

  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(15);
  const [placed, setPlaced] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>([]);
  const [fb, setFb] = useState<'correct'|'wrong'|null>(null);
  const [showCorrect, setShowCorrect] = useState<string|null>(null);
  const [showTutorial, setShowTutorial] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [recordBeat, setRecordBeat] = useState(false);
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [screenShaking, setScreenShaking] = useState(false);
  const [comboMilestone, setComboMilestone] = useState<number | null>(null);
  const [feedbackAnnouncement, setFeedbackAnnouncement] = useState<'correct' | 'wrong' | 'timeout' | null>(null);

  interface Particle { id: number; emoji: string; x: number; y: number; tx: number; ty: number; color: string; }
  interface ScorePopup { id: number; text: string; x: number; y: number; color: string; }
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
  const particleIdRef = useRef(0);
  const popupIdRef = useRef(0);

  // Use ref to avoid stale closure in timer callback
  const handleSubmitRef = useRef<(timeout?: boolean) => void>(() => {});

  const word = words[idx];
  const total = words.length;

  useEffect(() => { if (!store.hasTutorialSeen('word-stack')) setShowTutorial(true); }, []);

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
        x,
        y,
        tx,
        ty,
        color,
      });
    }
    setParticles(current => [...current, ...newParticles]);
    setTimeout(() => {
      setParticles(current => current.filter(particle => !newParticles.some(next => next.id === particle.id)));
    }, 800);
  }, []);

  const spawnScorePopup = useCallback((x: number, y: number, text: string, color: string) => {
    const popup: ScorePopup = {
      id: popupIdRef.current++,
      text,
      x,
      y,
      color,
    };
    setScorePopups(current => [...current, popup]);
    setTimeout(() => {
      setScorePopups(current => current.filter(next => next.id !== popup.id));
    }, 1000);
  }, []);

  useEffect(() => {
    if (!word || gameOver) return;
    const enWords = getDisplayAnswer(word.en).toLowerCase().split(/\s+/);

    // Pool contains ONLY the words from the correct phrase (no distractors)
    setPool(shuffle(enWords));
    setPlaced([]);
    setTimer(15);
    setFb(null);
    setShowCorrect(null);
    setSelectedWordIndex(null);
    setFeedbackAnnouncement(null);
    answerStart.current = Date.now();
  }, [idx, word, gameOver, vocab]);

  // Timer - uses ref to avoid stale closure
  useEffect(() => {
    if (gameOver || paused || fb || showTutorial) return;
    const iv = setInterval(() => {
      setTimer(t => {
        if (t <= 0.1) { handleSubmitRef.current(true); return 15; }
        return t - 0.1;
      });
    }, 100);
    return () => clearInterval(iv);
  }, [idx, gameOver, paused, fb, showTutorial]);

  const addWord = (w: string, i: number) => {
    SFX.place();
    setPlaced(p => [...p, w]);
    setPool(p => { const n=[...p]; n.splice(i,1); return n; });
  };

  const undoWord = () => {
    if (placed.length === 0) return;
    const last = placed[placed.length - 1];
    setPlaced(p => p.slice(0, -1));
    setPool(p => [...p, last]);
  };

  const finishGame = useCallback((finalScore: number, totalCorrect: number, totalWrong: number) => {
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    const totalAttempts = totalCorrect + totalWrong;
    const acc = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
    const maxScore = getWordStackMaxScore(total);
    // completeGame already calls addXP, updateStreak, checkAchievements internally
    const result = store.completeGame(lesson.id, 'word-stack', finalScore, maxScore, {
      percent: maxScore > 0 ? Math.round((finalScore / maxScore) * 100) : 0,
      isPerfect: totalWrong === 0 && totalCorrect === total,
    });
    store.logSession({ type: 'word-stack', lessonId: lesson.id, score: finalScore, accuracy: acc, duration, wordsAttempted: totalAttempts });
    setXpGained(50 + (result.isPerfect ? 100 : 0));
    setRecordBeat(result.isNewBest);
    setGameOver(true);
    if (totalCorrect > totalWrong) SFX.victory(); else SFX.gameover();
  }, [store, lesson, total]);

  const handleSubmit = useCallback((timeout = false) => {
    if (fb || !word) return;
    const answer = placed.join(' ');
    const expected = getDisplayAnswer(word.en);
    // For word-stacking, use exact match since user taps pre-defined word tokens
    const isCorrect = answer.toLowerCase().trim() === expected.toLowerCase().trim();

    // Track word
    store.trackWord({
      en: word.en, pt: word.pt, emoji: word.emoji || '📝', correct: isCorrect,
      responseTime: Date.now() - answerStart.current, context: 'word-stack',
      lessonId: lesson.id, lessonTitle: lesson.title, lessonOrder: lesson.order, module: lesson.module,
    });

    if (isCorrect && !timeout) {
      setFb('correct'); SFX.correct();
      const newCombo = combo + 1;
      const pts = 15 + combo * 5;
      const newScore = score + pts;
      const effectX = window.innerWidth / 2;
      const effectY = window.innerHeight / 2;
      setScore(newScore); setCombo(newCombo);
      const newCorrect = correctCount + 1;
      setCorrectCount(newCorrect);
      spawnParticles(effectX, effectY, word.emoji || '✨', 'var(--green)');
      spawnScorePopup(effectX, effectY + 50, `+${pts}`, 'var(--green)');
      setFeedbackAnnouncement('correct');
      setTimeout(() => setFeedbackAnnouncement(null), 600);
      if (newCombo > 0 && newCombo % 3 === 0) SFX.combo();
      if (newCombo > 0 && newCombo % 3 === 0) {
        setComboMilestone(newCombo);
        setTimeout(() => setComboMilestone(null), 600);
      }
      setTimeout(() => {
        setFb(null);
        if (idx >= total - 1) { finishGame(newScore, newCorrect, wrongCount); } else { setIdx(i => i + 1); }
      }, 1000);
    } else {
      setFb('wrong'); SFX.wrong();
      setShowCorrect(getDisplayAnswer(word.en));
      const newLives = lives - 1;
      const effectX = window.innerWidth / 2;
      const effectY = window.innerHeight / 2;
      setLives(newLives); setCombo(0);
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      spawnParticles(effectX, effectY, timeout ? '⏰' : '💥', 'var(--red)');
      spawnScorePopup(effectX, effectY + 50, timeout ? 'TIME UP!' : 'MISS', 'var(--red)');
      setFeedbackAnnouncement(timeout ? 'timeout' : 'wrong');
      setTimeout(() => setFeedbackAnnouncement(null), 600);
      setScreenShaking(true);
      setTimeout(() => setScreenShaking(false), 400);
      setTimeout(() => {
        setFb(null); setShowCorrect(null);
        if (newLives <= 0) { finishGame(score, correctCount, newWrong); return; }
        if (idx >= total - 1) { finishGame(score, correctCount, newWrong); } else { setIdx(i => i + 1); }
      }, 1500);
    }
  }, [fb, word, placed, combo, score, lives, idx, total, correctCount, wrongCount, store, lesson, finishGame, spawnParticles, spawnScorePopup]);

  // Keep ref in sync so the timer always calls the latest handleSubmit
  useEffect(() => { handleSubmitRef.current = handleSubmit; }, [handleSubmit]);

  const resetGame = useCallback(() => {
    setIdx(0); setScore(0); setLives(3); setCombo(0);
    setCorrectCount(0); setWrongCount(0); setGameOver(false);
    setFb(null); setShowCorrect(null); setPlaced([]); setPool([]);
    setXpGained(0); setRecordBeat(false);
    setSelectedWordIndex(null);
    setParticles([]); setScorePopups([]); setScreenShaking(false); setComboMilestone(null); setFeedbackAnnouncement(null);
    startTime.current = Date.now();
    setGameKey(k => k + 1);
  }, []);

  // Keyboard Controls
  useEffect(() => {
    // Always attach listener, guard conditions inside handler
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameOver || paused || fb || showTutorial || !word) {
        return;
      }

      const key = e.key.toLowerCase();

      // Numbers 1-9: add word from pool by index
      if (/^[1-9]$/.test(key)) {
        const index = parseInt(key) - 1;
        if (index < pool.length && !fb && !paused) {
          e.preventDefault();
          addWord(pool[index], index);
        }
      }

      // Arrow Left/Up: go to beginning of pool
      if ((key === 'arrowleft' || key === 'arrowup') && pool.length > 0) {
        e.preventDefault();
        setSelectedWordIndex(0);
      }
      // Arrow Right/Down: go to next word (or first if at end)
      else if ((key === 'arrowright' || key === 'arrowdown') && pool.length > 0) {
        e.preventDefault();
        const current = selectedWordIndex ?? -1;
        const next = current + 1;
        setSelectedWordIndex(next < pool.length ? next : 0);
      }

      // Space: add selected word
      if (key === ' ' && selectedWordIndex !== null && !fb && !paused) {
        e.preventDefault();
        if (selectedWordIndex < pool.length) {
          addWord(pool[selectedWordIndex], selectedWordIndex);
          // Move to next word after adding
          setSelectedWordIndex(Math.min(selectedWordIndex, pool.length - 2));
        }
      }

      // Backspace or Z: undo last word
      if ((key === 'backspace' || key === 'z') && placed.length > 0 && !fb && !paused) {
        e.preventDefault();
        undoWord();
      }

      // Enter: submit answer
      if (key === 'enter' && placed.length > 0 && !fb && !paused) {
        e.preventDefault();
        handleSubmit(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameOver, paused, fb, showTutorial, word, pool, placed, selectedWordIndex, addWord, undoWord, handleSubmit]);

  // Tutorial
  if (showTutorial) {
    return (
      <div className="game-modal"><div className="game-modal-box">
        <div className="game-modal-icon">📚</div>
        <div className="game-modal-title">COMO JOGAR</div>
        <div style={{ textAlign:'left', padding:'0 10px', lineHeight:1.8, fontSize:'0.9rem' }}>
          <p>1️⃣ Leia a frase em <b style={{color:'var(--gold)'}}>português</b></p>
          <p>2️⃣ Toque nas palavras para montar a tradução em <b style={{color:'var(--green)'}}>inglês</b></p>
          <p>3️⃣ Monte a frase na <b style={{color:'var(--red)'}}>ordem certa</b> antes do tempo acabar.</p>
          <p style={{ marginTop:8, color:'var(--gray)', fontSize:'0.8rem' }}>Toque numa palavra colocada para removê-la</p>
        </div>
        <button className="game-modal-btn primary" onClick={() => { setShowTutorial(false); store.markTutorialSeen('word-stack'); }}>COMEÇAR! 🚀</button>
      </div></div>
    );
  }

  // Game Over
  if (gameOver) {
    const won = lives > 0;
    const acc = correctCount+wrongCount>0 ? Math.round((correctCount/(correctCount+wrongCount))*100) : 0;
    return (
      <div className="game-modal"><div className="game-modal-box">
        {recordBeat && <div className="game-record-alert">🏆 NOVO RECORDE!</div>}
        <div className="game-modal-icon">{won ? '🏆' : '💀'}</div>
        <div className="game-modal-title">{won ? 'FIM DE JOGO!' : 'GAME OVER!'}</div>
        <div className="game-modal-stats">
          {[['Pontuação',score],['Corretas',`${correctCount}/${total}`],['Precisão',`${acc}%`],['Vidas','❤️'.repeat(Math.max(lives,0))]].map(([k,v]) => (
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

  const recordPct = bestScore > 0 ? Math.min((score / bestScore) * 100, 100) : 0;

  return (
    <div className={`game-page ${screenShaking ? 'ws-screen-shake' : ''}`}>
      <button className="game-pause-btn" onClick={() => setPaused(!paused)}>{paused ? '▶️' : '⏸️'}</button>
      <div className="game-title-bar"><h1>📚 WORD STACK</h1></div>
      <div className="game-hud">
        {[{l:'PONTOS',v:score.toString()},{l:'VIDAS',v:'❤️'.repeat(Math.max(lives,0))},{l:'COMBO',v:`${combo}x`},{l:'CORRETAS',v:`${correctCount}/${total}`}].map(h => (
          <div className="hud-item" key={h.l}><div className="hud-label">{h.l}</div><div className="hud-value">{h.v}</div></div>
        ))}
      </div>
      <div className={`timer-neon ${timer <= 10 ? 'timer-warning' : ''}`} style={timer <= 10 ? { color: 'var(--red)', borderColor: 'var(--red)', boxShadow: '0 0 20px rgba(255,68,68,0.6)' } : undefined}>{Math.ceil(timer)}{timer <= 10 && timer > 0 ? ' ⚠️' : ''}</div>
      {bestScore > 0 && (
        <div className="game-record-bar"><div className="game-record-fill" style={{width:`${recordPct}%`}}/><div className="game-record-text">Recorde: {bestScore}</div></div>
      )}
      <div className="ws-target">
        <div className="ws-target-label">Traduza para inglês:</div>
        <div className="ws-target-emoji">{word?.emoji||'🎯'}</div>
        <div className="ws-target-text">{word?.pt}</div>
      </div>
      <div className={`ws-answer ${fb === 'correct' ? 'correct' : ''} ${fb === 'wrong' ? 'wrong' : ''}`}>
        {placed.length===0 && !showCorrect && <span style={{color:'var(--gray)',fontStyle:'italic'}}>Toque nas palavras abaixo...</span>}
        {showCorrect ? (
          <span style={{color:'var(--green)',fontFamily:'Orbitron',fontWeight:700}}>{showCorrect}</span>
        ) : (
          placed.map((w,i) => (
            <span key={i} className="ws-word-tag placed" onClick={() => { if(!fb){setPlaced(p=>p.filter((_,j)=>j!==i)); setPool(p=>[...p,w]);} }}>{w}</span>
          ))
        )}
      </div>
      <div className="ws-words-pool">
        {pool.map((w,i) => (
          <button key={`${w}-${i}`} className={`ws-word-tag ${selectedWordIndex === i ? 'highlighted' : ''}`} onClick={() => addWord(w,i)} disabled={!!fb||paused}>{w}</button>
        ))}
      </div>
      <div className="ws-controls">
        <button className="ws-ctrl-btn undo" onClick={undoWord} disabled={placed.length===0||!!fb}>↩ DESFAZER</button>
        <button className="ws-ctrl-btn submit" onClick={() => handleSubmit(false)} disabled={placed.length===0||!!fb}>ENVIAR ✓</button>
      </div>

      {particles.map(p => (
        <div
          key={p.id}
          className="ws-particle"
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

      {scorePopups.map(p => (
        <div
          key={p.id}
          className="ws-score-popup"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            color: p.color,
          }}
        >
          {p.text}
        </div>
      ))}

      {comboMilestone !== null && (
        <div className="ws-combo-milestone">
          <div className="ws-combo-text">{comboMilestone}x COMBO! 🔥</div>
        </div>
      )}

      {feedbackAnnouncement && (
        <div className={`ws-feedback-announcement ${feedbackAnnouncement}`}>
          <div className="ws-feedback-text">
            {feedbackAnnouncement === 'correct' ? 'NICE STACK!' : feedbackAnnouncement === 'timeout' ? 'TIME UP!' : 'WRONG ORDER!'}
          </div>
        </div>
      )}
    </div>
  );
}
