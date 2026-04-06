import { useState, useMemo, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS } from '@/data/lessons';
import type { Lesson, VocabularyItem } from '@unlock2026/shared';

// Ordem dos módulos e aulas (módulo = fase, alinhados)
const PHASE_MAP: Record<number, string[]> = {
  // 🆘 MÓDULO 1 — PRIMEIROS PASSOS (20 aulas)
  1: ['survival-phrases', 'is-are', 'want', 'need', 'what', 'where', 'who', 'how-much', 'can', 'have-to', 'need-to', 'imperative', 'open-close', 'phrasal-commands', 'at-work-basic', 'pay-hours', 'talking-to-boss', 'safety-commands', 'emergency-911', 'asking-for-help'],
  // 💬 MÓDULO 2 — MONTANDO FRASES (28 aulas)
  2: ['subject-pronouns', 'object-pronouns', 'possessive-adjectives', 'a-an', 'the', 'this', 'that', 'these-those', 'is-are-questions', 'is-are-negative', 'when', 'why', 'because', 'how', 'here-there-over', 'here', 'there', 'do-affirmative', 'do-questions', 'do-negative', 'does', 'has', 'like', 'love-hate', 'can-permission', 'go', 'come', 'get'],
  // ⚡ MÓDULO 3 — INGLÊS EM AÇÃO (28 aulas)
  3: ['have', 'make', 'take', 'put', 'give', 'tell-say', 'present-progressive', 'going-to', 'in-on-at-time', 'phone-calls-basic', 'phone-calls-problems', 'at-work-problems', 'in-on-at-place', 'directions-basic', 'directions-street', 'turn-left-right', 'stop-wait-go', 'to-from', 'pick-up-drop', 'hold-keep-move', 'bring-take', 'with-without', 'for', 'about', 'and', 'but', 'so-because', 'then'],
  // 🌍 MÓDULO 4 — VIDA REAL (36 aulas)
  4: ['there-is', 'there-are', 'there-is-are-questions', 'there-is-are-negative', 'some-any-a-lot', 'no-article', 'how-many', 'which', 'what-time', 'how-long', 'how-often', 'how-far', 'ordering-food-basic', 'ordering-food-problems', 'restaurant-fastfood', 'prices-money', 'tipping-paying', 'grocery-shopping', 'small-talk', 'apologies', 'feelings-reactions', 'injury-at-work', 'at-doctor-symptoms', 'at-doctor-instructions', 'hospital-er', 'health-body', 'car-accident', 'car-trouble', 'at-the-mechanic', 'gas-station', 'uber-rideshare', 'bus-transit', 'parking', 'neighbors-living', 'before-after', 'until'],
  // 📖 MÓDULO 5 — CONTANDO HISTÓRIAS (12 aulas)
  5: ['past-simple-intro', 'regular-verbs-ed', 'irregular-verbs-1', 'irregular-verbs-2', 'did', 'did-questions', 'didnt-negative', 'past-time-words', 'past-at-work', 'past-emergencies', 'past-story-basic', 'past-continuous'],
  // 🔮 MÓDULO 6 — FAZENDO PLANOS (32 aulas)
  6: ['if-basic', 'future-will', 'may-might', 'could', 'must-mustn-t', 'should-shouldn-t', 'would-should-could', 'conditional-type-1', 'at-the-bank', 'pharmacy-pickup', 'renting', 'bills-utilities', 'usps-mail', 'customer-service', 'returning-items', 'phone-internet', 'shopping-clothing', 'compliments', 'requests-formal', 'permission-asking', 'invitations', 'declining-politely', 'standing-up', 'kids-school', 'laundromat', 'getting-haircut', 'coffee-shop', 'at-the-gym', 'weather-dressed', 'contractions-informal', 'slang-words', 'exclamations'],
  // 🎓 MÓDULO 7 — SUBINDO DE NÍVEL (24 aulas)
  7: ['whose', 'possessive-s', 'count-nouns', 'non-count-nouns', 'present-perfect', 'present-perfect-continuous', 'comparatives', 'superlatives', 'verb-plus-ing', 'verb-plus-infinitive', 'verb-object-infinitive', 'phrasal-get', 'phrasal-put', 'phrasal-look', 'phrasal-give', 'phrasal-run', 'phrasal-break', 'however-but', 'although-though', 'unless-otherwise', 'meanwhile-then', 'conditional-type-2', 'question-tags', 'negative-questions'],
  // 🚀 MÓDULO 8 — FLUÊNCIA (29 aulas)
  8: ['future-continuous', 'past-perfect', 'future-shall', 'passive-voice', 'reported-speech', 'conditional-type-3', 'relative-clauses', 'moreover-furthermore', 'whereas-while', 'word-order-adverbs', 'colors', 'emotions', 'weather', 'professions', 'family-extended', 'appearance', 'personality', 'sports', 'hobbies', 'animals', 'countries-nationalities', 'synonyms-antonyms', 'homophones', 'homonyms', 'affixes', 'idioms-expressions', 'collocations', 'text-speak', 'word-families'],
};

const STEPS = [
  { key: 'lesson', name: 'AULA', namePt: 'slides', emoji: '📚', desc: 'Aprenda com exemplos práticos' },
  { key: 'homework', name: 'TAREFA', namePt: 'exercícios', emoji: '📝', desc: 'Pratique o que aprendeu' },
  { key: 'review', name: 'REVISÃO', namePt: 'flashcards', emoji: '🔄', desc: 'Fixe as palavras difíceis' },
  { key: 'boss', name: 'DESAFIO FINAL', namePt: 'boss run', emoji: '🎮', desc: 'Jogue com tudo que aprendeu!' },
];

export function DailyDrill() {
  const navigate = useNavigate();
  const store = useProgressStore();
  const { lessonsCompleted } = store;
  const [showPicker, setShowPicker] = useState(false);
  const [showBossIntro, setShowBossIntro] = useState(false);
  const [confirmSwitch, setConfirmSwitch] = useState<Lesson | null>(null);
  const [searchParams] = useSearchParams();

  // Build ordered lesson list based on PHASE_MAP sequence
  const orderedLessons = useMemo(() => {
    const orderedIds = Object.values(PHASE_MAP).flat();
    const mapped = orderedIds
      .map(id => LESSONS.find(l => l.id === id))
      .filter(Boolean) as typeof LESSONS;
    // Append any lessons not in PHASE_MAP at the end
    const inMap = new Set(orderedIds);
    const extras = LESSONS.filter(l => !inMap.has(l.id));
    return [...mapped, ...extras];
  }, []);

  // Find next uncompleted lesson (following PHASE_MAP order)
  const currentLesson = useMemo(() => {
    const next = orderedLessons.find(l => !lessonsCompleted.includes(l.id));
    return next || orderedLessons[0];
  }, [lessonsCompleted, orderedLessons]);

  // Preserve lesson from URL if navigating back from a step
  const lessonIdFromUrl = searchParams.get('lessonId');
  const initialLesson = lessonIdFromUrl
    ? LESSONS.find(l => l.id === lessonIdFromUrl) || currentLesson
    : currentLesson;

  const [selectedLesson, setSelectedLesson] = useState<Lesson>(initialLesson);

  // Track which steps are done (stored in progressStore for persistence)
  const [doneSteps, setDoneSteps] = useState<Record<string, boolean>>({});

  // Load drill progress when lesson changes
  useEffect(() => {
    try {
      const saved = store.drillProgress?.[selectedLesson.id];
      setDoneSteps(saved || {});
    } catch {
      setDoneSteps({});
    }
  }, [selectedLesson.id, store.drillProgress]);

  // Auto-mark step as done and auto-continue to next step
  useEffect(() => {
    const stepCompleteParam = searchParams.get('stepComplete');
    if (stepCompleteParam) {
      // Handle both single step and comma-separated steps (e.g., "lesson,warmup")
      const stepsToComplete = stepCompleteParam.split(',').map(s => s.trim()).filter(Boolean);
      let hasChanges = false;
      const next = { ...doneSteps };

      for (const step of stepsToComplete) {
        if (!next[step]) {
          next[step] = true;
          hasChanges = true;
        }
      }

      if (hasChanges) {
        setDoneSteps(next);
        store.setDrillProgress(selectedLesson.id, next);

        // Find the next incomplete step in the sequence (exclude boss)
        const autoSteps = STEPS.filter(s => s.key !== 'boss'); // lesson, homework, review
        const nextIncompleteStep = autoSteps.find(s => !next[s.key]);

        if (nextIncompleteStep) {
          const id = selectedLesson.id;
          let nextUrl = '';

          // Build URL for next step
          switch (nextIncompleteStep.key) {
            case 'lesson':
              nextUrl = `/lesson/${id}?returnTo=/daily-drill&nextStep=homework&lessonId=${id}`;
              break;
            case 'homework':
              nextUrl = `/homework/${id}?returnTo=/daily-drill&stepComplete=lesson&lessonId=${id}`;
              break;
            case 'review':
              nextUrl = `/warmup/review/${id}?returnTo=/daily-drill&stepComplete=lesson,homework&lessonId=${id}`;
              break;
          }

          if (nextUrl) {
            navigate(nextUrl, { replace: true });
          } else {
            navigate(`/daily-drill`, { replace: true });
          }
        } else {
          // All auto steps (lesson, warmup, homework, review) are done
          // Stay on daily drill, boss run is manual
          navigate(`/daily-drill`, { replace: true });
        }
      }
    }
  }, [searchParams, navigate, selectedLesson.id, doneSteps]);

  const doneCount = STEPS.filter(s => doneSteps[s.key]).length;
  const pct = Math.round((doneCount / STEPS.length) * 100);

  const markDone = (step: string) => {
    const next = { ...doneSteps, [step]: true };
    setDoneSteps(next);
    store.setDrillProgress(selectedLesson.id, next);
  };

  const resetSession = () => {
    setDoneSteps({});
    store.setDrillProgress(selectedLesson.id, {});
  };

  const getLink = (step: string) => {
    const id = selectedLesson.id;
    switch (step) {
      case 'lesson': return `/lesson/${id}?returnTo=/daily-drill&nextStep=homework&lessonId=${id}`;
      case 'homework': return `/homework/${id}?returnTo=/daily-drill&stepComplete=lesson&lessonId=${id}`;
      case 'review': return `/warmup/review/${id}?returnTo=/daily-drill&stepComplete=lesson,homework&lessonId=${id}`;
      default: return '/';
    }
  };

  // Boss Run: 60% current lesson vocab + 40% weak/other words
  const executeBossRun = () => {
    markDone('boss');

    // 1. Get current lesson vocabulary
    const currentVocab = selectedLesson.vocabulary || [];

    // 2. For BOSS RUN: Use ONLY vocabulary from the current lesson (nao coloca de outra aula)
    const targetTotal = 120;

    // Shuffle and pick current vocab only
    const shuffledCurrent = [...currentVocab];
    for (let i = shuffledCurrent.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCurrent[i], shuffledCurrent[j]] = [shuffledCurrent[j], shuffledCurrent[i]];
    }
    const picked = shuffledCurrent.slice(0, Math.max(4, Math.min(targetTotal, shuffledCurrent.length)));

    console.log(`🎮 [BOSS RUN] Creating with ${picked.length} words from current lesson:`, {
      currentLessonWords: picked.length,
      totalTarget: targetTotal,
      uniqueWords: new Set(picked.map(w => w.en)).size,
    });

    const virtualLesson: Lesson = {
      id: `boss-${selectedLesson.id}`,
      title: `Boss Run: ${selectedLesson.title}`,
      emoji: '🎮',
      description: `${picked.length} palavras da aula atual`,
      module: selectedLesson.module,
      order: selectedLesson.order,
      slides: [],
      vocabulary: picked,
    };

    navigate('/game/word-drop/quickplay', {
      state: { lesson: virtualLesson, returnTo: '/daily-drill' },
    });
  };

  const startBossRun = () => {
    setShowBossIntro(true);
  };

  return (
    <div className="relative z-10 min-h-screen">
      {/* Appbar */}
      <div className="drill-appbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: '1.6rem' }}>🎯</span>
          <div className="drill-brand">
            TREINO DO DIA <span style={{ fontSize: '0.6em', opacity: 0.7, fontFamily: 'Inter', fontWeight: 500 }}>daily drill</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <Link to="/" style={{ color: 'var(--white)', textDecoration: 'none', fontWeight: 900, opacity: 0.9 }}>🏠 Início</Link>
          <Link to="/profile" style={{ color: 'var(--white)', textDecoration: 'none', fontWeight: 900, opacity: 0.9 }}>👤 Perfil</Link>
        </div>
      </div>

      <div className="drill-page">
        <div className="drill-hero">
          {/* Aula X de Y header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 14, padding: '8px 16px', background: 'rgba(0,191,255,0.08)', border: '1px solid rgba(0,191,255,0.2)', borderRadius: 10 }}>
            <span style={{ fontFamily: 'Orbitron', fontSize: '0.75rem', fontWeight: 700, color: 'var(--cyan)', letterSpacing: 1 }}>
              AULA {orderedLessons.findIndex(l => l.id === selectedLesson.id) + 1} DE {orderedLessons.length}
            </span>
          </div>

          {/* Visual step tracker */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {STEPS.map((s, i) => (
              <div key={s.key} style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4
              }}>
                <div style={{
                  width: '100%', height: 6, borderRadius: 3,
                  background: doneSteps[s.key] ? 'var(--green)' : 'rgba(255,255,255,0.08)',
                  boxShadow: doneSteps[s.key] ? '0 0 8px rgba(0,255,136,0.4)' : 'none',
                  transition: 'all 0.3s'
                }} />
                <span style={{ fontSize: '0.55rem', fontFamily: 'Orbitron', fontWeight: 700, color: doneSteps[s.key] ? 'var(--green)' : 'var(--gray)', letterSpacing: 0.5 }}>
                  {doneSteps[s.key] ? '✅' : s.emoji} {s.name}
                </span>
              </div>
            ))}
          </div>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', padding: 8, margin: -8, borderRadius: 12, transition: 'background 0.2s' }}
                 onClick={() => setShowPicker(true)}>
              <div style={{ fontSize: '2rem' }}>{selectedLesson.emoji}</div>
              <div>
                <h1 style={{ fontFamily: 'Orbitron', fontSize: '1.15rem', letterSpacing: 2 }}>{selectedLesson.title}</h1>
                <div style={{ fontSize: '0.75rem', color: 'var(--cyan)', fontWeight: 600, marginTop: 2 }}>▼ Toque para trocar</div>
              </div>
            </div>
            <div className="drill-pill" style={{
              background: doneCount === STEPS.length ? 'rgba(0,255,136,0.2)' : 'rgba(0,191,255,0.15)',
              borderColor: doneCount === STEPS.length ? 'var(--green)' : 'rgba(0,191,255,0.35)',
              color: doneCount === STEPS.length ? 'var(--green)' : 'var(--white)'
            }}>
              {doneCount === STEPS.length ? '✓ COMPLETO' : `${pct}% • ${doneCount} de ${STEPS.length}`}
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{
            marginTop: 14,
            height: '8px',
            background: 'rgba(0,191,255,0.1)',
            border: `2px solid ${doneCount === STEPS.length ? 'var(--green)' : 'rgba(0,191,255,0.3)'}`,
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: doneCount === STEPS.length ? '0 0 15px rgba(0,255,136,0.4)' : 'none',
            transition: 'all 0.3s ease'
          }}>
            <div style={{
              height: '100%',
              background: doneCount === STEPS.length ? 'linear-gradient(90deg, var(--green), #00ff88)' : 'linear-gradient(90deg, var(--cyan), var(--green))',
              width: `${pct}%`,
              transition: 'width 0.4s ease, background 0.3s ease',
              boxShadow: doneCount === STEPS.length ? '0 0 10px rgba(0,255,136,0.8)' : 'none'
            }} />
          </div>

          {/* Steps */}
          <div style={{ marginTop: 14, display: 'grid', gap: 10 }}>
            {STEPS.map(s => {
              const isDone = !!doneSteps[s.key];
              return (
                <div className="drill-step" key={s.key}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                    <div className="drill-step-emoji">{s.emoji}</div>
                    <div>
                      <div className="drill-step-name">
                        {s.name} <span className="drill-step-name-pt">{s.namePt}</span>
                      </div>
                      <div className="drill-step-desc">
                        {s.key === 'boss'
                          ? `Active Recall — palavras fracas + aulas 1-${Math.min(LESSONS.findIndex(l => l.id === selectedLesson.id) + 1, LESSONS.length)}`
                          : s.desc}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div className={`drill-badge ${isDone ? 'done' : ''}`}>{isDone ? '✅ FEITO' : '⏳ PENDENTE'}</div>
                    <button className="drill-btn" style={{
                      background: isDone ? 'rgba(0,255,136,0.2)' : undefined,
                      borderColor: isDone ? 'var(--green)' : undefined,
                      color: isDone ? 'var(--green)' : undefined
                    }} onClick={() => {
                      if (s.key === 'boss') {
                        startBossRun();
                      } else {
                        markDone(s.key);
                        navigate(getLink(s.key));
                      }
                    }}>
                      {isDone ? '↩ REFAZER' : '▶ COMEÇAR'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div style={{ marginTop: 14, display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ color: 'var(--gray)', fontWeight: 600, fontSize: '0.88rem' }}>
              {doneCount === 4 ? '🎉 Sessão completa! Escolha outra aula.' : 'Complete os 4 passos para dominar esta aula.'}
            </div>
            <button style={{ background: 'rgba(0,191,255,0.18)', color: 'var(--white)', border: '2px solid rgba(0,191,255,0.35)', borderRadius: 12, padding: '10px 14px', fontWeight: 900, cursor: 'pointer', fontSize: '0.8rem' }}
                    onClick={resetSession}>🔄 Reiniciar sessão</button>
          </div>

          {/* Celebration */}
          {doneCount === 4 && (
            <div style={{ marginTop: 14, background: 'linear-gradient(135deg,rgba(255,215,0,0.12),rgba(0,255,136,0.12))', border: '2px solid var(--gold)', borderRadius: 14, padding: 18, textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 6 }}>🏆</div>
              <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.2rem', color: 'var(--gold)', marginBottom: 4 }}>SESSÃO COMPLETA!</div>
              <div style={{ color: 'var(--gray)', fontWeight: 600, fontSize: '0.88rem', marginBottom: 12 }}>Você dominou esta aula. Quer treinar outra?</div>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="drill-btn" onClick={() => setShowPicker(true)}>📚 OUTRA AULA</button>
                <Link to={`/game/select/${selectedLesson.id}`} className="drill-btn" style={{ textDecoration: 'none', background: 'rgba(0,191,255,0.18)', color: 'var(--white)', border: '2px solid rgba(0,191,255,0.35)', boxShadow: 'none' }}>🎮 JOGAR</Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lesson Picker Modal */}
      {showPicker && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.95)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
             onClick={(e) => { if (e.target === e.currentTarget) setShowPicker(false); }}>
          <div style={{ background: 'rgba(15,30,55,0.95)', border: '3px solid var(--cyan)', borderRadius: 18, padding: 24, maxWidth: 500, width: '100%', maxHeight: '80vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 0 60px rgba(0,191,255,0.25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.1rem', color: 'var(--cyan)' }}>📚 ESCOLHER AULA</div>
              <button onClick={() => setShowPicker(false)} style={{ background: 'none', border: 'none', color: 'var(--gray)', fontSize: '1.5rem', cursor: 'pointer' }}>✕</button>
            </div>
            <div style={{ overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {orderedLessons.map(l => (
                <div key={l.id} onClick={() => {
                    if (l.id === selectedLesson.id) { setShowPicker(false); return; }
                    const hasProgress = Object.values(doneSteps).some(Boolean);
                    if (hasProgress) {
                      setConfirmSwitch(l);
                    } else {
                      setSelectedLesson(l); setShowPicker(false); setDoneSteps({});
                    }
                  }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, padding: 12,
                    background: l.id === selectedLesson.id ? 'rgba(0,255,136,0.1)' : 'rgba(10,22,40,0.6)',
                    border: `2px solid ${l.id === selectedLesson.id ? 'var(--green)' : 'rgba(0,191,255,0.2)'}`,
                    borderRadius: 12, cursor: 'pointer', transition: 'all 0.2s',
                  }}>
                  <span style={{ fontSize: '1.4rem' }}>{l.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>{l.title}</div>
                    <div style={{ color: 'var(--gray)', fontSize: '0.8rem', fontWeight: 600 }}>
                      {(() => {
                        const phase = Object.entries(PHASE_MAP).find(([_, ids]) => ids.includes(l.id));
                        if (phase) {
                          const [phaseNum, phaseIds] = phase;
                          const position = phaseIds.indexOf(l.id) + 1;
                          return `Fase ${phaseNum} • ${position}/${phaseIds.length}`;
                        }
                        return `Módulo ${l.module} • Aula ${l.order}`;
                      })()}
                    </div>
                  </div>
                  {lessonsCompleted.includes(l.id) && <span style={{ color: 'var(--green)', fontWeight: 900 }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Boss Run Intro Modal */}
      {showBossIntro && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.95)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: 'linear-gradient(145deg, rgba(30,30,50,0.95), rgba(15,15,30,0.98))', border: '3px solid var(--red)', borderRadius: 18, padding: '40px 30px', maxWidth: 550, width: '100%', textAlign: 'center', boxShadow: '0 0 60px rgba(255,68,68,0.3)' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>🎮</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.5rem', color: 'var(--red)', marginBottom: 8 }}>BOSS RUN</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', textShadow: '2px 2px 0 #8B6914', marginBottom: 20 }}>Desafio Final</div>

            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '20px 16px', marginBottom: 24, textAlign: 'left' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--gray)', lineHeight: '1.6', marginBottom: 12 }}>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>🎯</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Teste Tudo</div>
                    <div>Misturamos as palavras desta aula com palavras fracas de outras aulas. Um desafio verdadeiro!</div>
                  </div>
                </div>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>📊</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>60% Aula + 40% Weak</div>
                    <div>60% das palavras vêm desta aula, 40% de palavras difíceis que você viu antes. Revisão de verdade!</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>💪</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Active Recall</div>
                    <div>Você precisa LEMBRAR as palavras sem dicas. Recupere na memória o que aprendeu. Isso funciona!</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={() => setShowBossIntro(false)}
                style={{ flex: 1, padding: '12px 24px', background: 'rgba(255,255,255,0.05)', color: 'var(--gray)', borderRadius: 12, border: '2px solid rgba(255,255,255,0.1)', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
                VOLTAR
              </button>
              <button onClick={executeBossRun}
                style={{ flex: 1, padding: '12px 24px', background: 'var(--red)', color: 'white', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,68,68,0.4)' }}>
                COMEÇAR DESAFIO 🚀
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Confirm Switch Modal */}
      {confirmSwitch && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.95)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: 'rgba(15,30,55,0.95)', border: '3px solid var(--orange)', borderRadius: 18, padding: 28, maxWidth: 400, width: '100%', textAlign: 'center', boxShadow: '0 0 40px rgba(255,140,0,0.2)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.1rem', color: 'var(--orange)', marginBottom: 8 }}>TROCAR DE AULA?</div>
            <div style={{ color: 'var(--gray)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 20, lineHeight: 1.5 }}>
              Tem certeza? Seu progresso desta aula será perdido.
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setConfirmSwitch(null)}
                style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: 12, border: '2px solid rgba(255,255,255,0.1)', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                CANCELAR
              </button>
              <button onClick={() => {
                  setSelectedLesson(confirmSwitch);
                  setDoneSteps({});
                  store.setDrillProgress(confirmSwitch.id, {});
                  setConfirmSwitch(null);
                  setShowPicker(false);
                }}
                style={{ flex: 1, padding: '12px', background: 'var(--orange)', color: '#000', borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                SIM, TROCAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
