import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, useNavigate, Link, useSearchParams } from 'react-router-dom';
import { loadAllLessons, loadLessonById } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { SFX } from '@/utils/sounds';
import { matchAnswer, getDisplayAnswer, stripHtml } from '@/utils/matchAnswer';
import { SpeakButton } from '@/components/SpeakButton';
import type { Lesson } from '@unlock2026/shared';

function shuffle<T>(a: T[]): T[] { const b=[...a]; for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }

// ═══════════════════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════════════════

type Phase = 'choose' | 'type';

interface WordQuestion {
  pt: string;
  en: string;
  emoji: string;
  options: string[]; // 3 options (1 correct + 2 distractors)
  correctIndex: number;
}

// ═══════════════════════════════════════════════════════════════════════════
// Helper: Generate 3 options for a word
// ═══════════════════════════════════════════════════════════════════════════

function generateOptions(correctEn: string, lessonVocab: { en: string; pt: string }[], allVocab: { en: string; pt: string }[]): { options: string[]; correctIndex: number } {
  const correctDisplay = getDisplayAnswer(correctEn);
  const correctNorm = correctDisplay.toLowerCase().trim();

  // Get distractors from lesson vocab first, then all vocab
  const candidates = [
    ...shuffle(lessonVocab),
    ...shuffle(allVocab),
  ];

  const distractors: string[] = [];
  const seen = new Set<string>([correctNorm]);

  for (const c of candidates) {
    if (distractors.length >= 2) break;
    const display = getDisplayAnswer(c.en);
    const norm = display.toLowerCase().trim();
    if (!seen.has(norm) && norm.length > 0) {
      seen.add(norm);
      distractors.push(display);
    }
  }

  // Fallback distractors if not enough
  while (distractors.length < 2) {
    distractors.push(distractors.length === 0 ? '---' : '???');
  }

  // Shuffle options and find correct index
  const options = shuffle([correctDisplay, ...distractors]);
  const correctIndex = options.indexOf(correctDisplay);

  return { options, correctIndex };
}

// ═══════════════════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════════════════

export function Homework() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const store = useProgressStore();
  const returnTo = searchParams.get('returnTo') || '/';
  const stepComplete = searchParams.get('stepComplete');
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [allLessons, setAllLessons] = useState<Lesson[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;
    if (!id) {
      setLesson(null);
      setAllLessons([]);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setIsLoading(true);
    Promise.all([loadLessonById(id), loadAllLessons()]).then(([loadedLesson, loadedLessons]) => {
      if (!active) return;
      setLesson(loadedLesson ?? null);
      setAllLessons(loadedLessons);
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

  const vocab = lesson?.vocabulary || [];

  // Build all vocab pool for distractors
  const allVocab = useMemo(() => 
    allLessons.flatMap(l => (l.vocabulary || []).map(w => ({ en: w.en, pt: w.pt }))),
    [allLessons]
  );

  // Build 10 questions with 3 options each
  const questions = useMemo<WordQuestion[]>(() => {
    const picked = shuffle(vocab).slice(0, Math.min(10, vocab.length));
    return picked.map(w => {
      const { options, correctIndex } = generateOptions(w.en, vocab, allVocab);
      return {
        pt: w.pt,
        en: w.en,
        emoji: w.emoji || '📝',
        options,
        correctIndex,
      };
    });
  }, [vocab, allVocab]);

  const startTime = useRef(Date.now());
  const questionStart = useRef(Date.now());

  // State
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>('choose');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [choiceCorrect, setChoiceCorrect] = useState<boolean | null>(null);
  const [typeInput, setTypeInput] = useState('');
  const [typeShake, setTypeShake] = useState(false);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [done, setDone] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const typeInputRef = useRef<HTMLInputElement>(null);

  const question = questions[idx];
  const total = questions.length;
  const correctAnswer = question ? getDisplayAnswer(question.en) : '';

  // Focus type input when entering type phase
  useEffect(() => {
    if (phase === 'type') {
      setTimeout(() => typeInputRef.current?.focus(), 100);
    }
  }, [phase]);

  // ─── Finish ─────────────────────────────────────────────────────
  const finishHomework = useCallback(() => {
    if (!lesson) return;
    const duration = Math.round((Date.now() - startTime.current) / 1000);
    const totalAttempts = correctCount + wrongCount;
    const acc = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;
    const xp = 50 + (acc === 100 ? 100 : 0);
    store.addXP(xp);
    store.logSession({ type: 'homework', lessonId: lesson.id, score, accuracy: acc, duration, wordsAttempted: totalAttempts });
    store.updateStreak();
    store.checkAchievements();
    setXpGained(xp);
    setDone(true);
    SFX.victory();
  }, [correctCount, wrongCount, score, store, lesson]);

  // ─── Step 1: Choose option ──────────────────────────────────────
  const handleChoose = useCallback((optionIdx: number) => {
    if (phase !== 'choose' || !question || !lesson) return;

    const isCorrect = optionIdx === question.correctIndex;
    const responseTime = Date.now() - questionStart.current;

    setSelectedOption(optionIdx);
    setChoiceCorrect(isCorrect);

    // Track word
    store.trackWord({
      en: question.en, pt: question.pt, emoji: question.emoji, correct: isCorrect,
      responseTime, context: 'homework',
      lessonId: lesson.id, lessonTitle: lesson.title, lessonOrder: lesson.order, module: lesson.module,
    });

    if (isCorrect) {
      setCorrectCount(c => c + 1);
      setScore(s => s + 15);
      SFX.correct();
    } else {
      setWrongCount(w => w + 1);
      SFX.wrong();
    }

    // Move to type phase after a brief delay
    setTimeout(() => {
      setPhase('type');
    }, 800);
  }, [phase, question, store, lesson]);

  // ─── Step 2: Type correct answer ────────────────────────────────
  const handleType = useCallback(() => {
    if (phase !== 'type' || !question) return;
    const typed = typeInput.trim();
    if (!typed) return;

    const { isCorrect } = matchAnswer(typed, question.en);

    if (isCorrect) {
      SFX.correct();
      // Move to next question
      const nextIdx = idx + 1;
      if (nextIdx >= total) {
        setTimeout(() => finishHomework(), 300);
      } else {
        setIdx(nextIdx);
        setPhase('choose');
        setSelectedOption(null);
        setChoiceCorrect(null);
        setTypeInput('');
        questionStart.current = Date.now();
      }
    } else {
      // Shake and clear
      setTypeShake(true);
      setTimeout(() => setTypeShake(false), 400);
      setTypeInput('');
      typeInputRef.current?.focus();
      SFX.wrong();
    }
  }, [phase, question, typeInput, idx, total, finishHomework]);

  if (isLoading) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="game-back-btn">Carregando homework...</div>
      </div>
    );
  }

  if (!lesson) return null;

  // ─── Intro screen ───────────────────────────────────────────────
  if (showIntro) {
    return (
      <div className="relative z-10 min-h-screen flex items-center justify-center pb-20" style={{ background: 'linear-gradient(135deg, rgba(0,191,255,0.05), rgba(0,255,136,0.05))' }}>
        <div style={{ padding: '20px', maxWidth: 550, width: '100%' }}>
          <div style={{ background: 'linear-gradient(145deg, rgba(30,30,50,0.95), rgba(15,15,30,0.98))', border: '3px solid var(--gold)', borderRadius: 16, padding: '40px 30px', textAlign: 'center', boxShadow: '0 0 40px rgba(255,215,0,0.25)' }}>
            <div style={{ fontSize: '4rem', marginBottom: 16 }}>📝</div>
            <div style={{ fontFamily: 'Orbitron', fontWeight: 900, fontSize: '1.5rem', color: 'var(--gold)', marginBottom: 8 }}>HOMEWORK</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--cyan)', marginBottom: 20 }}>Pratique o que aprendeu</div>

            <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: '20px 16px', marginBottom: 24, textAlign: 'left' }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--gray)', lineHeight: '1.6', marginBottom: 12 }}>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>🎯</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Escolha a Resposta</div>
                    <div>Veja a palavra em português e escolha a tradução correta entre 3 opções em inglês.</div>
                  </div>
                </div>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>✍️</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Digite para Fixar</div>
                    <div>Depois de escolher, você precisa <strong>digitar a resposta correta</strong> para avançar. Isso ajuda a memorizar!</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <span style={{ fontSize: '1.3rem', marginTop: -2 }}>💰</span>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>Ganhe XP</div>
                    <div>Complete com 100% de acerto na escolha para ganhar XP extra!</div>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={() => setShowIntro(false)}
              style={{ width: '100%', padding: '14px 24px', background: 'var(--gold)', color: '#0a1628', borderRadius: 12, border: 'none', fontFamily: 'Orbitron', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 0 20px rgba(255,215,0,0.3)' }}>
              COMEÇAR HOMEWORK ▶
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Done screen ────────────────────────────────────────────────
  if (done) {
    const acc = correctCount+wrongCount>0 ? Math.round((correctCount/(correctCount+wrongCount))*100) : 0;
    const nextPath = returnTo === '/daily-drill'
      ? `${returnTo}?lessonId=${lesson.id}&stepComplete=${stepComplete ? `${stepComplete},homework` : 'homework'}`
      : returnTo;

    return (
      <div className="relative z-10 min-h-screen pb-20">
        <div style={{ padding: '20px' }}>
          <div className="game-modal-box" style={{ margin: '40px auto' }}>
            <div className="game-modal-icon">📝</div>
            <div className="game-modal-title">HOMEWORK COMPLETO!</div>
            <div className="game-modal-stats">
              {[['Score',score],['Acertos',`${correctCount}/${total}`],['Precisão',`${acc}%`]].map(([k,v]) => (
                <div className="game-modal-stat" key={k as string}><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
            <div className="game-xp-gained">+{xpGained} XP ⚡</div>
            <button className="game-modal-btn primary" onClick={() => navigate(`/game/select/${lesson.id}`)}>🎮 Jogar Agora</button>
            {returnTo === '/daily-drill' ? (
              <button className="game-modal-btn secondary" onClick={() => navigate(nextPath)}>🎯 Voltar ao Daily Drill</button>
            ) : (
              <button className="game-modal-btn secondary" onClick={() => navigate(`/daily-drill`)}>🎯 Daily Drill</button>
            )}
            <button className="game-modal-btn secondary" onClick={() => navigate('/')}>📚 Menu</button>
          </div>
        </div>
      </div>
    );
  }

  // ─── Main game screen ───────────────────────────────────────────
  return (
    <div className="relative z-10 min-h-screen pb-20">
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 20px' }}>
        <Link to={`/lesson/${lesson.id}`} style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'8px 16px', borderRadius:10, border:'2px solid var(--green)', color:'var(--green)', fontFamily:'Orbitron', fontWeight:700, fontSize:'0.8rem', textDecoration:'none', background:'rgba(0,255,136,0.08)' }}>← VOLTAR</Link>
        <div style={{ fontFamily:'Orbitron', fontWeight:700, fontSize:'0.85rem', color:'var(--gold)' }}>📝 HOMEWORK</div>
        <div style={{ fontFamily:'Orbitron', fontSize:'0.75rem', color:'var(--gray)' }}>{idx+1}/{total}</div>
      </div>

      {/* Progress bar */}
      <div style={{ padding:'0 20px', marginBottom:16 }}>
        <div style={{ height:6, borderRadius:3, background:'rgba(255,255,255,0.08)', overflow:'hidden' }}>
          <div style={{ height:'100%', borderRadius:3, width:`${((idx)/total)*100}%`, background:'linear-gradient(90deg, var(--green), var(--cyan))', transition:'width 0.3s' }} />
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display:'flex', justifyContent:'center', gap:20, marginBottom:20, fontFamily:'Orbitron', fontSize:'0.75rem' }}>
        <span style={{ color:'var(--gold)' }}>⚡ {score}</span>
        <span style={{ color:'var(--green)' }}>✓ {correctCount}</span>
        <span style={{ color:'var(--red)' }}>✗ {wrongCount}</span>
      </div>

      {/* Card */}
      <div style={{ padding:'0 20px' }}>
        <div style={{
          background:'linear-gradient(145deg, rgba(30,30,50,0.95), rgba(15,15,30,0.98))',
          border: choiceCorrect === true ? '3px solid var(--green)' : choiceCorrect === false ? '3px solid var(--red)' : '3px solid var(--cyan)',
          borderRadius:16, padding:'30px 20px', textAlign:'center', minHeight:180,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12,
          boxShadow: choiceCorrect === true ? '0 0 30px rgba(0,255,136,0.3)' : choiceCorrect === false ? '0 0 30px rgba(255,68,68,0.3)' : '0 0 20px rgba(0,200,255,0.15)',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}>
          <div style={{ fontSize:'3rem' }}>{question?.emoji || '📝'}</div>
          <div style={{ fontFamily:'Orbitron', fontSize:'1.4rem', fontWeight:900, color:'var(--gold)', textShadow:'2px 2px 0 #8B6914' }}>
            {question?.pt}
          </div>
          <div style={{ fontSize:'0.85rem', color:'var(--gray)', marginTop:4 }}>
            {phase === 'choose' ? '🇧🇷 FASE 1 de 2: Escolha a tradução correta' : '✍️ FASE 2 de 2: Digite a resposta correta'}
          </div>
        </div>

        {/* PHASE 1: Multiple Choice */}
        {phase === 'choose' && question && (
          <div style={{ marginTop:16, display:'flex', flexDirection:'column', gap:10 }}>
            {question.options.map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrectOpt = i === question.correctIndex;
              const showResult = selectedOption !== null;

              let bg = 'rgba(255,255,255,0.05)';
              let border = '2px solid rgba(255,255,255,0.15)';
              let color = 'white';
              let shadow = 'none';

              if (showResult) {
                if (isCorrectOpt) {
                  bg = 'rgba(0,255,136,0.15)';
                  border = '3px solid var(--green)';
                  color = 'var(--green)';
                  shadow = '0 0 15px rgba(0,255,136,0.2)';
                } else if (isSelected && !isCorrectOpt) {
                  bg = 'rgba(255,68,68,0.15)';
                  border = '3px solid var(--red)';
                  color = 'var(--red)';
                  shadow = '0 0 15px rgba(255,68,68,0.2)';
                } else {
                  bg = 'rgba(255,255,255,0.02)';
                  border = '2px solid rgba(255,255,255,0.08)';
                  color = 'rgba(255,255,255,0.3)';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleChoose(i)}
                  disabled={selectedOption !== null}
                  style={{
                    width:'100%', padding:'16px 20px', fontSize:'1.1rem', fontWeight:700,
                    fontFamily:'Inter, sans-serif', background:bg, border, color,
                    borderRadius:12, cursor: selectedOption !== null ? 'default' : 'pointer',
                    transition:'all 0.2s', textAlign:'left', boxShadow: shadow,
                    display:'flex', alignItems:'center', gap:12,
                  }}
                >
                  <span style={{
                    width:32, height:32, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                    background: showResult && isCorrectOpt ? 'var(--green)' : showResult && isSelected && !isCorrectOpt ? 'var(--red)' : 'rgba(255,255,255,0.1)',
                    color: showResult && (isCorrectOpt || (isSelected && !isCorrectOpt)) ? '#0a1628' : 'var(--gray)',
                    fontFamily:'Orbitron', fontWeight:900, fontSize:'0.8rem', flexShrink:0,
                  }}>
                    {showResult && isCorrectOpt ? '✓' : showResult && isSelected && !isCorrectOpt ? '✗' : String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}

            {/* Feedback text */}
            {selectedOption !== null && (
              <div style={{ textAlign:'center', marginTop:4, fontFamily:'Orbitron', fontWeight:700, fontSize:'1rem' }}>
                {choiceCorrect
                  ? <span style={{ color:'var(--green)' }}>✓ CORRETO!</span>
                  : <span style={{ color:'var(--red)' }}>✗ ERRADO!</span>
                }
              </div>
            )}
          </div>
        )}

        {/* PHASE 2: Type correct answer */}
        {phase === 'type' && question && (
          <div style={{ marginTop:16 }}>
            {/* Show what was chosen vs correct */}
            {choiceCorrect === false && (
              <div style={{ marginBottom:12, padding:'10px 14px', background:'rgba(255,68,68,0.08)', border:'1px solid rgba(255,68,68,0.2)', borderRadius:10, textAlign:'center' }}>
                <span style={{ fontSize:'0.8rem', color:'var(--red)' }}>Você escolheu: </span>
                <span style={{ fontSize:'0.85rem', color:'var(--red)', fontWeight:700, textDecoration:'line-through' }}>
                  {selectedOption !== null ? question.options[selectedOption] : ''}
                </span>
              </div>
            )}

            <div style={{ marginBottom:12, padding:'10px 14px', background:'rgba(0,255,136,0.08)', border:'1px solid rgba(0,255,136,0.2)', borderRadius:10, textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', gap:8 }}>
              <SpeakButton text={correctAnswer} size="md" />
              <div>
                <span style={{ fontSize:'0.8rem', color:'var(--green)' }}>Resposta correta: </span>
                <span style={{ fontSize:'0.95rem', color:'var(--green)', fontWeight:700 }}>{correctAnswer}</span>
              </div>
            </div>

            <div style={{ marginTop:12, fontSize:'0.85rem', color:'var(--cyan)', fontWeight:600, textAlign:'center', marginBottom:8 }}>
              ✍️ Digite "{correctAnswer}" para continuar:
            </div>

            <input
              ref={typeInputRef}
              type="text"
              value={typeInput}
              onChange={e => setTypeInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && typeInput.trim()) handleType(); }}
              placeholder={correctAnswer}
              className={typeShake ? 'shake' : ''}
              style={{
                width:'100%', padding:'14px 18px', fontSize:'1.1rem', fontFamily:'Inter, sans-serif',
                background:'rgba(255,255,255,0.05)', border:'2px solid rgba(0,255,136,0.3)',
                borderRadius:12, color:'white', outline:'none', boxSizing:'border-box',
                transition:'all 0.2s',
              }}
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />

            <button onClick={handleType} disabled={!typeInput.trim()}
              style={{
                width:'100%', marginTop:12, padding:'14px', 
                background: typeInput.trim() ? 'var(--green)' : 'rgba(255,255,255,0.05)',
                color: typeInput.trim() ? '#0a1628' : 'var(--gray)', borderRadius:12, border:'none',
                fontFamily:'Orbitron', fontWeight:700, fontSize:'0.95rem', 
                cursor: typeInput.trim() ? 'pointer' : 'default',
                transition: 'all 0.2s',
              }}>
              CONFIRMAR ✓
            </button>
          </div>
        )}
      </div>

      {/* Shake animation */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-6px); }
          80% { transform: translateX(6px); }
        }
        .shake {
          animation: shake 0.4s ease-in-out;
          border-color: var(--red) !important;
        }
      `}</style>
    </div>
  );
}
