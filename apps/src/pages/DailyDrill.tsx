import { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS } from '@/data/lessons';
import type { LessonSummary } from '@/data/lessons';
import { BottomNav } from '@/components/layout/BottomNav';

// Game modes = Phase 1 (primary)
const GAME_STEPS = [
  { key: 'word-drop', name: 'WORD DROP', emoji: '🧱', desc: 'Rápido e instintivo — reaja sem pensar' },
  { key: 'word-match', name: 'WORD MATCH', emoji: '🎯', desc: 'Associação e compreensão' },
  { key: 'word-stack', name: 'WORD STACK', emoji: '⚡', desc: 'Monte a frase certa' },
];

// Fix steps = Phase 2 (optional deepening)
const FIX_STEPS = [
  { key: 'lesson', name: 'AULA', emoji: '📚', desc: 'Slides com exemplos práticos' },
  { key: 'homework', name: 'TAREFA', emoji: '📝', desc: 'Exercícios pra praticar' },
  { key: 'review', name: 'REVISÃO', emoji: '🔄', desc: 'Flashcards das palavras difíceis' },
];

export function DailyDrill() {
  const navigate = useNavigate();
  const store = useProgressStore();
  const { lessonsCompleted } = store;
  const [showPicker, setShowPicker] = useState(false);
  const [searchParams] = useSearchParams();

  // Get lesson from URL or pick random
  const initialLessonId = searchParams.get('lessonId');
  const defaultLesson = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    return LESSONS[seed % LESSONS.length];
  }, []);

  const [selectedLesson, setSelectedLesson] = useState<LessonSummary>(() => {
    if (initialLessonId) {
      return LESSONS.find(l => l.id === initialLessonId) || defaultLesson;
    }
    return defaultLesson;
  });

  // Track completed steps
  const [doneSteps, setDoneSteps] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const saved = store.drillProgress?.[selectedLesson.id];
      setDoneSteps(saved || {});
    } catch {
      setDoneSteps({});
    }
  }, [selectedLesson.id, store.drillProgress]);

  // Auto-mark returning from game/lesson
  useEffect(() => {
    const stepComplete = searchParams.get('stepComplete');
    if (stepComplete) {
      const steps = stepComplete.split(',').map(s => s.trim()).filter(Boolean);
      const next = { ...doneSteps };
      let changed = false;
      for (const step of steps) {
        if (!next[step]) { next[step] = true; changed = true; }
      }
      if (changed) {
        setDoneSteps(next);
        store.setDrillProgress(selectedLesson.id, next);
        navigate(`/daily-drill?lessonId=${selectedLesson.id}`, { replace: true });
      }
    }
  }, [searchParams]);

  const markDone = (key: string) => {
    const next = { ...doneSteps, [key]: true };
    setDoneSteps(next);
    store.setDrillProgress(selectedLesson.id, next);
  };

  const gamesDone = GAME_STEPS.filter(s => doneSteps[s.key]).length;
  const fixDone = FIX_STEPS.filter(s => doneSteps[s.key]).length;

  // Find first incomplete game step
  const nextGame = GAME_STEPS.find(s => !doneSteps[s.key]);

  const playGame = (mode: string) => {
    markDone(mode);
    navigate(`/game/${mode}/${selectedLesson.id}?returnTo=/daily-drill&stepComplete=${mode}&lessonId=${selectedLesson.id}`);
  };

  const goToFix = (key: string) => {
    markDone(key);
    const lid = selectedLesson.id;
    switch (key) {
      case 'lesson':
        navigate(`/lesson/${lid}?returnTo=/daily-drill&stepComplete=lesson&lessonId=${lid}`);
        break;
      case 'homework':
        navigate(`/homework/${lid}?returnTo=/daily-drill&stepComplete=homework&lessonId=${lid}`);
        break;
      case 'review':
        navigate(`/warmup/review/${lid}?returnTo=/daily-drill&stepComplete=review&lessonId=${lid}`);
        break;
    }
  };

  const resetSession = () => {
    setDoneSteps({});
    store.setDrillProgress(selectedLesson.id, {});
  };

  return (
    <div className="relative z-10 min-h-screen">

      {/* ═══ TOP ═══ */}
      <header className="v4-appbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '1.2rem' }}>🎯</span>
          <div>
            <div className="d5-title">TREINO DO DIA</div>
            <div className="d5-sub">daily drill</div>
          </div>
        </div>
        <div className="h5-chips">
          <div className="h5-chip"><span>🔥</span> {store.streak}</div>
          <div className="h5-chip"><span>⭐</span> {store.xp}</div>
        </div>
      </header>

      <main className="v4-content">

        {/* ── CURRENT LESSON ── */}
        <div className="d5-lesson">
          <div className="d5-lesson-emoji">{selectedLesson.emoji}</div>
          <div className="d5-lesson-info">
            <div className="d5-lesson-tag">SITUAÇÃO ALEATÓRIA</div>
            <div className="d5-lesson-title">{selectedLesson.title}</div>
            <div className="d5-lesson-swap" onClick={() => setShowPicker(true)}>▼ Trocar situação</div>
          </div>
        </div>

        {/* ═══ PHASE 1: JOGAR ═══ */}
        <div className="d5-phase">
          <div className="d5-phase-label primary">
            <div className="d5-phase-num">1</div>
            JOGAR — TREINO ATIVO
          </div>
          <div>
            {GAME_STEPS.map((step) => {
              const isDone = !!doneSteps[step.key];
              const isNext = !isDone && nextGame?.key === step.key;
              const isLocked = !isDone && !isNext;
              return (
                <div
                  key={step.key}
                  className={`d5-step ${isDone ? 'done' : isNext ? 'active' : 'locked'}`}
                  onClick={() => !isLocked && playGame(step.key)}
                >
                  <div className="d5-step-icon">{step.emoji}</div>
                  <div className="d5-step-info">
                    <div className="d5-step-name">{step.name}</div>
                    <div className="d5-step-desc">{step.desc}</div>
                  </div>
                  <div className={`d5-badge ${isDone ? 'check' : isNext ? 'go' : 'wait'}`}>
                    {isDone ? '✅ FEITO' : isNext ? '▶ JOGAR' : 'PRÓXIMO'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── PROGRESS BAR ── */}
        <div className="d5-progress">
          <div className="d5-progress-bar">
            <div className="d5-progress-fill" style={{ width: `${(gamesDone / 3) * 100}%` }} />
          </div>
          <div className="d5-progress-text">{gamesDone}/3 jogos</div>
        </div>

        {/* ═══ PHASE 2: FIXAR (optional) ═══ */}
        <div className="d5-phase">
          <div className="d5-phase-label secondary">
            <div className="d5-phase-num">2</div>
            FIXAR — SE QUISER IR MAIS FUNDO
          </div>
          <div>
            {FIX_STEPS.map((step) => {
              const isDone = !!doneSteps[step.key];
              return (
                <div
                  key={step.key}
                  className="d5-fix"
                  onClick={() => goToFix(step.key)}
                >
                  <div className="d5-fix-icon">{step.emoji}</div>
                  <div className="d5-fix-info">
                    <div className="d5-fix-name">{step.name}</div>
                    <div className="d5-fix-desc">{step.desc}</div>
                  </div>
                  <div className={`d5-fix-badge ${isDone ? 'done' : ''}`}>
                    {isDone ? '✅ FEITO' : 'OPCIONAL'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── RESET ── */}
        <div style={{ padding: '14px var(--v4-px)', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={resetSession}
            style={{ background: 'rgba(0,191,255,0.12)', color: 'var(--white)', border: '1.5px solid rgba(0,191,255,0.25)', borderRadius: 10, padding: '8px 14px', fontWeight: 800, fontSize: '0.75rem', cursor: 'pointer' }}
          >
            🔄 Reiniciar sessão
          </button>
        </div>

        {/* ── CELEBRATION ── */}
        {gamesDone === 3 && (
          <div style={{ margin: '0 var(--v4-px) 20px', background: 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(0,255,136,0.12))', border: '2px solid var(--gold)', borderRadius: 14, padding: 18, textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>🏆</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.1rem', color: 'var(--gold)', marginBottom: 4 }}>TREINO COMPLETO!</div>
            <div style={{ color: 'var(--gray)', fontWeight: 600, fontSize: '0.85rem', marginBottom: 12 }}>
              {fixDone > 0 ? 'Você foi além! Sessão dominada.' : 'Quer fixar mais? Tente a Fase 2 acima.'}
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="drill-btn" onClick={() => setShowPicker(true)}>📚 OUTRA SITUAÇÃO</button>
              <Link to="/" className="drill-btn" style={{ textDecoration: 'none', background: 'rgba(0,191,255,0.18)', color: 'var(--white)', border: '2px solid rgba(0,191,255,0.35)', boxShadow: 'none' }}>🏠 INÍCIO</Link>
            </div>
          </div>
        )}

        <div style={{ height: 80 }} />
      </main>

      <BottomNav active="home" />

      {/* ═══ LESSON PICKER MODAL ═══ */}
      {showPicker && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.95)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowPicker(false); }}
        >
          <div style={{ background: 'rgba(15,30,55,0.95)', border: '3px solid var(--cyan)', borderRadius: 18, padding: 24, maxWidth: 500, width: '100%', maxHeight: '80vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 0 60px rgba(0,191,255,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.1rem', color: 'var(--cyan)' }}>📚 ESCOLHER SITUAÇÃO</div>
              <button onClick={() => setShowPicker(false)} style={{ background: 'none', border: 'none', color: 'var(--gray)', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {LESSONS.map(l => (
                <div
                  key={l.id}
                  onClick={() => { setSelectedLesson(l); setShowPicker(false); setDoneSteps({}); store.setDrillProgress(l.id, {}); }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: 12,
                    background: l.id === selectedLesson.id ? 'rgba(0,255,136,0.1)' : 'rgba(10,22,40,0.6)',
                    border: `2px solid ${l.id === selectedLesson.id ? 'var(--green)' : 'rgba(0,191,255,0.2)'}`,
                    borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s',
                  }}
                >
                  <span style={{ fontSize: '1.4rem' }}>{l.emoji}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{l.title}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '0.8rem', fontWeight: 600 }}>{l.description}</div>
                  </div>
                  {lessonsCompleted.includes(l.id) && <span style={{ color: 'var(--green)', fontWeight: 900 }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
