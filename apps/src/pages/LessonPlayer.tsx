import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { loadLessonById, loadNextLesson } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { SlideRenderer } from '@/components/lessons/SlideRenderer';
import { SpeedControl } from '@/components/SpeedControl';
import { XP } from '@unlock2026/shared';
import { SFX } from '@/utils/sounds';
import type { Lesson } from '@unlock2026/shared';

export function LessonPlayer() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const returnTo = searchParams.get('returnTo');
  const nextStep = searchParams.get('nextStep');
  const store = useProgressStore();
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [nextLesson, setNextLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const savedIndex = id ? store.getSlideProgress(id) : 0;
  const [currentSlide, setCurrentSlide] = useState(savedIndex);
  const [showComplete, setShowComplete] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [showIntro, setShowIntro] = useState(savedIndex === 0);
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  useEffect(() => {
    let active = true;
    if (!id) {
      setLesson(null);
      setNextLesson(null);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setIsLoading(true);
    Promise.all([loadLessonById(id), loadNextLesson(id)]).then(([loadedLesson, loadedNextLesson]) => {
      if (!active) return;
      setLesson(loadedLesson ?? null);
      setNextLesson(loadedNextLesson ?? null);
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [id]);

  useEffect(() => {
    if (!isLoading && !lesson) {
      navigate('/', { replace: true });
    }
  }, [isLoading, lesson, navigate]);

  const slides = lesson?.slides ?? [];
  const total = slides.length;
  const slide = slides[currentSlide];
  const isFav = lesson ? store.favorites.includes(lesson.id) : false;
  const progress = total > 1 ? Math.round((currentSlide / (total - 1)) * 100) : 0;

  const handleComplete = useCallback(() => {
    if (!lesson || showComplete) return;
    const wasAlreadyComplete = store.isLessonComplete(lesson.id);
    setAlreadyDone(wasAlreadyComplete);

    // Complete the lesson (returns false if already done)
    store.completeLesson(lesson.id);

    // Award XP (less for repeat completions)
    const xp = wasAlreadyComplete ? 25 : XP.LESSON_COMPLETE;
    store.addXP(xp);
    setXpGained(xp);

    // Track vocabulary as "seen" if first time
    if (!wasAlreadyComplete && lesson.vocabulary) {
      lesson.vocabulary.forEach(v => {
        store.trackWord({
          en: v.en, pt: v.pt, emoji: v.emoji || '📝',
          correct: true, responseTime: 0, context: 'lesson',
          lessonId: lesson.id, lessonTitle: lesson.title,
          lessonOrder: lesson.order, module: lesson.module,
        });
      });
    }

    // Log session & update streak
    store.logSession({ type: 'lesson', lessonId: lesson.id });
    store.updateStreak();
    store.checkAchievements();

    SFX.victory();
    setShowComplete(true);
  }, [showComplete, store, lesson]);

  const goNext = useCallback(() => {
    if (!lesson) return;
    if (currentSlide < total - 1) {
      const n = currentSlide + 1;
      setCurrentSlide(n);
      store.saveSlideProgress(lesson.id, n);
      // Add slide view XP
      store.addXP(XP.LESSON_SLIDE_VIEW);
    } else {
      // Last slide — trigger completion
      handleComplete();
    }
  }, [currentSlide, total, lesson, store, handleComplete]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (showComplete) return;
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [goNext, goPrev, showComplete]);

  if (isLoading) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="game-back-btn">Carregando aula...</div>
      </div>
    );
  }

  if (!lesson) return null;

  // Intro screen
  if (showIntro) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(0,191,255,0.05), rgba(0,255,136,0.05))' }}>
        <div style={{ padding: '20px', maxWidth: 550, width: '100%' }}>
          <div style={{ background: 'linear-gradient(145deg, rgba(30,30,50,0.95), rgba(15,15,30,0.98))', border: '3px solid var(--cyan)', borderRadius: 16, padding: '40px 30px', textAlign: 'center', boxShadow: '0 0 40px rgba(0,191,255,0.25)' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>📚</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.5rem', color: 'var(--cyan)', marginBottom: 8 }}>LIÇÃO</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--gold)', textShadow: '2px 2px 0 #8B6914', marginBottom: 20 }}>{lesson?.title}</div>

            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '20px 16px', marginBottom: 24, textAlign: 'left' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--gray)', lineHeight: '1.6', marginBottom: 12 }}>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>🎓</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Aprenda com Exemplos</div>
                    <div>Veja exemplos práticos de como usar as palavras e expressões em contexto real.</div>
                  </div>
                </div>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>⌨️</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Navegação Fácil</div>
                    <div>Use as setas do teclado (← →), barra de espaço ou os botões para avançar nos slides.</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>⚡</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Ganhe XP</div>
                    <div>Complete a lição para ganhar XP e avançar para o próximo passo: Homework!</div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => setShowIntro(false)}
              style={{ width: '100%', padding: '14px 24px', background: 'var(--cyan)', color: '#000', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(0,191,255,0.3)' }}>
              COMEÇAR LIÇÃO ▶
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 min-h-screen flex flex-col" style={{ paddingTop: 10 }}>
      {/* Header bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 20px' }}>
        <button onClick={() => setShowExitConfirm(true)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 10, border: '2px solid var(--green)', color: 'var(--green)', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.8rem', background: 'rgba(0,255,136,0.08)', cursor: 'pointer' }}>
          ← VOLTAR
        </button>
        <div style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.9rem', color: 'var(--gold)', textShadow: '1px 1px 0 #8B6914', padding: '6px 16px', border: '2px solid var(--gold)', borderRadius: 10, background: 'rgba(255,215,0,0.08)' }}>
          {lesson.title}
        </div>
        <button onClick={() => store.toggleFavorite(lesson.id)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>
          {isFav ? '❤️' : '🤍'}
        </button>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
          <div style={{ flex: 1, height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
            <div style={{ height: '100%', borderRadius: 4, width: `${progress}%`, background: 'linear-gradient(90deg, var(--green), var(--cyan))', boxShadow: '0 0 10px var(--green)', transition: 'width 0.3s' }} />
          </div>
          <span style={{ fontFamily: 'Orbitron', fontSize: '0.75rem', fontWeight: 700, color: 'var(--gray)' }}>
            {currentSlide + 1}/{total}
          </span>
        </div>
        <SpeedControl compact />
      </div>

      {/* Slide */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 20px 0' }}>
        <div style={{ width: '100%', maxWidth: 650 }} key={currentSlide}>
          <SlideRenderer slide={slide} lessonId={lesson.id} lessonTitle={lesson.title} />
        </div>
      </div>

      {/* Nav arrows */}
      <div className="nav-arrows">
        <button className="nav-arrow" onClick={goPrev} disabled={currentSlide === 0}>◀</button>
        <span className="nav-counter">{currentSlide + 1} / {total}</span>
        <button className="nav-arrow" onClick={() => goNext()} disabled={showComplete}>
          {currentSlide >= total - 1 ? '✓' : '▶'}
        </button>
      </div>

      {/* Completion Modal */}
      {showComplete && (
        <div className="lesson-complete-modal">
          <div className="lesson-complete-box">
            <div style={{ fontSize: '3.5rem', marginBottom: 8 }}>🎉</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.3rem', color: 'var(--green)', marginBottom: 4 }}>
              {alreadyDone ? 'AULA REVISADA!' : 'AULA COMPLETA!'}
            </div>
            <div style={{ color: 'var(--gray)', fontSize: '0.9rem', marginBottom: 12 }}>
              {lesson.title}
            </div>
            <div className="game-xp-gained">+{xpGained} XP ⚡</div>
            {lesson.vocabulary && lesson.vocabulary.length > 0 && (
              <div style={{ fontSize: '0.85rem', color: 'var(--cyan)', margin: '8px 0' }}>
                📝 {lesson.vocabulary.length} palavras {alreadyDone ? 'revisadas' : 'aprendidas'}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
              {/* Daily Drill Flow: Next step is Homework */}
              {returnTo === '/daily-drill' && nextStep === 'homework' ? (
                <>
                  <button onClick={() => navigate(`/homework/${lesson.id}?returnTo=/daily-drill&stepComplete=lesson&lessonId=${lesson.id}`)}
                    style={{ padding: '12px', background: 'var(--gold)', color: '#0a1628', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                    📝 CONTINUAR COM HOMEWORK
                  </button>
                  <button onClick={() => navigate('/daily-drill?stepComplete=lesson')}
                    style={{ padding: '10px', background: 'none', color: 'var(--gray)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', cursor: 'pointer' }}>
                    🎯 Voltar ao Daily Drill
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate(`/homework/${lesson.id}`)}
                    style={{ padding: '12px', background: 'var(--gold)', color: '#0a1628', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                    📝 FAZER HOMEWORK
                  </button>
                  <button onClick={() => navigate(`/game/select/${lesson.id}`)}
                    style={{ padding: '12px', background: 'rgba(0,255,136,0.12)', color: 'var(--green)', borderRadius: 12, border: '2px solid var(--green)', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                    🎮 JOGAR AGORA
                  </button>
                  {nextLesson && (
                    <button onClick={() => { setShowComplete(false); setCurrentSlide(0); navigate(`/lesson/${nextLesson.id}`); }}
                      style={{ padding: '12px', background: 'rgba(0,191,255,0.12)', color: 'var(--cyan)', borderRadius: 12, border: '2px solid var(--cyan)', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer' }}>
                      ▶ PRÓXIMA AULA
                    </button>
                  )}
                  <button onClick={() => navigate('/')}
                    style={{ padding: '10px', background: 'none', color: 'var(--gray)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.8rem', cursor: 'pointer' }}>
                    📚 Menu Principal
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(10,22,40,0.92)', zIndex: 300, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: 'rgba(15,30,55,0.98)', border: '3px solid var(--orange)', borderRadius: 18, padding: 28, maxWidth: 380, width: '100%', textAlign: 'center', boxShadow: '0 0 40px rgba(255,140,0,0.2)' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>⚠️</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1rem', color: 'var(--orange)', marginBottom: 8 }}>SAIR DA AULA?</div>
            <div style={{ color: 'var(--gray)', fontSize: '0.88rem', fontWeight: 600, marginBottom: 20, lineHeight: 1.5 }}>
              Seu progresso nesta aula não será salvo.
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setShowExitConfirm(false)}
                style={{ flex: 1, padding: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--white)', borderRadius: 12, border: '2px solid rgba(255,255,255,0.1)', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                CONTINUAR AULA
              </button>
              <button onClick={() => navigate(returnTo || '/')}
                style={{ flex: 1, padding: '12px', background: 'var(--orange)', color: '#000', borderRadius: 12, border: 'none', fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer' }}>
                SIM, SAIR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
