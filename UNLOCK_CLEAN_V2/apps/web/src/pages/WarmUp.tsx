import { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS } from '@/data/lessons';
import { SFX } from '@/utils/sounds';
import { getDisplayAnswer } from '@/utils/matchAnswer';
import { SpeakButton } from '@/components/SpeakButton';
import type { VocabularyItem } from '@unlock2026/shared';

// ═══════════════════════════════════════════════════════════════════════════
// Types
// ═══════════════════════════════════════════════════════════════════════════

interface DrillItem {
  en: string;
  pt: string;
  emoji: string;
  lessonId?: string;
  lessonTitle?: string;
  module?: number;
  order?: number;
}

type ResultStatus = 'correct' | 'wrong' | null;

// ═══════════════════════════════════════════════════════════════════════════
// Helpers
// ═══════════════════════════════════════════════════════════════════════════

function norm(s: string): string {
  return (s || '')
    .toLowerCase()
    .trim()
    .replace(/[\u2019']/g, "'")
    .replace(/[^a-z0-9\s'\-]/g, '')
    .replace(/\s+/g, ' ');
}

function levenshtein(a: string, b: string): number {
  const na = norm(a), nb = norm(b);
  const m = na.length, n = nb.length;
  if (!m) return n;
  if (!n) return m;
  const dp = new Array(n + 1).fill(0).map((_, j) => j);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (na[i - 1] === nb[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[n];
}

function isMatch(user: string, target: string): boolean {
  const u = norm(user);
  if (!u) return false;

  const targets = target.split('/').map(t => norm(t.trim())).filter(t => t);

  for (const t of targets) {
    if (!t) continue;
    if (u === t) return true;
    if (u.startsWith(t) && u.length <= t.length + 15) return true;
    if (t.startsWith(u) && t.length <= u.length + 10) return true;
    const maxTypos = Math.floor(Math.max(t.length, u.length) / 8) + 1;
    if (t.length >= 4 && u.length >= 4 && levenshtein(u, t) <= maxTypos) return true;
    const targetWords = t.split(' ').filter(w => w.length > 2);
    const userWords = u.split(' ');
    const keyWordsMatch = targetWords.every(tw =>
      userWords.some(uw => uw === tw || levenshtein(uw, tw) <= 1)
    );
    if (keyWordsMatch && targetWords.length >= 2) return true;
  }
  return false;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

const TOTAL_ITEMS_WARMUP = 5;
const TOTAL_ITEMS_REVIEW = 10;

// ═══════════════════════════════════════════════════════════════════════════
// Component
// ═══════════════════════════════════════════════════════════════════════════

export function WarmUp() {
  const { mode = 'warmup', lessonId } = useParams<{ mode: string; lessonId: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const returnTo = searchParams.get('returnTo') || '/daily-drill';
  const stepComplete = searchParams.get('stepComplete');

  const { trackWord, addXP, getWeakWords, getWordsForReview, logSession } = useProgressStore();

  // ─── Build items ──────────────────────────────────────────────────
  const items = useMemo<DrillItem[]>(() => {
    if (mode === 'review') {
      // REVIEW: If lessonId is specified, ONLY show words from that lesson
      // Otherwise pull from tracking — prioritize weak/due words from all lessons
      const combined: DrillItem[] = [];

      if (lessonId) {
        // LESSON-SPECIFIC REVIEW: Only words from this lesson
        const lesson = LESSONS.find(l => l.id === lessonId);
        if (lesson && lesson.vocabulary) {
          const lessonVocab: DrillItem[] = (lesson.vocabulary || []).map(w => ({
            en: w.en, pt: w.pt, emoji: w.emoji || lesson.emoji,
            lessonId: lesson.id, lessonTitle: lesson.title, module: lesson.module, order: lesson.order,
          }));

          // Shuffle and take up to TOTAL_ITEMS_REVIEW
          return pickRandom(lessonVocab, Math.min(TOTAL_ITEMS_REVIEW, lessonVocab.length));
        }
      } else {
        // GLOBAL REVIEW: Pull from tracking — prioritize weak/due words
        const weakWords = getWeakWords(20);
        const dueWords = getWordsForReview();

        // 60% weak words, 40% due words
        weakWords.slice(0, 6).forEach(w => combined.push({
          en: w.en, pt: w.pt, emoji: w.emoji,
          lessonId: w.lessonId || undefined,
          lessonTitle: w.lessonTitle,
          module: w.module,
          order: w.lessonOrder,
        }));
        dueWords.slice(0, 4).forEach(w => {
          if (!combined.some(c => c.en === w.en && c.pt === w.pt)) {
            combined.push({
              en: w.en, pt: w.pt, emoji: w.emoji,
              lessonId: w.lessonId || undefined,
              lessonTitle: w.lessonTitle,
              module: w.module,
              order: w.lessonOrder,
            });
          }
        });

        // Fill remaining from random lessons
        if (combined.length < TOTAL_ITEMS_REVIEW) {
          const allVocab: DrillItem[] = LESSONS.flatMap(l =>
            (l.vocabulary || []).map(w => ({
              en: w.en, pt: w.pt, emoji: w.emoji || l.emoji,
              lessonId: l.id, lessonTitle: l.title, module: l.module, order: l.order,
            }))
          );
          const existing = new Set(combined.map(c => `${c.en}|${c.pt}`));
          const extra = shuffle(allVocab.filter(v => !existing.has(`${v.en}|${v.pt}`))).slice(0, TOTAL_ITEMS_REVIEW - combined.length);
          combined.push(...extra);
        }

        return shuffle(combined).slice(0, TOTAL_ITEMS_REVIEW);
      }

      return combined;
    } else {
      // WARMUP: Pull from specific lesson
      let lesson = lessonId ? LESSONS.find(l => l.id === lessonId) : null;
      if (!lesson) lesson = LESSONS[0];

      const vocab = lesson?.vocabulary || [];
      return pickRandom(vocab, TOTAL_ITEMS_WARMUP).map(w => ({
        en: w.en, pt: w.pt,
        emoji: w.emoji || lesson?.emoji || '⚡',
        lessonId: lesson?.id,
        lessonTitle: lesson?.title,
        module: lesson?.module,
        order: lesson?.order,
      }));
    }
  }, [mode, lessonId]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── State ────────────────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<ResultStatus[]>(() => new Array(items.length).fill(null));
  const [correctCount, setCorrectCount] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [times, setTimes] = useState<number[]>([]);
  const [startedAt, setStartedAt] = useState(Date.now());

  // Card state
  const [flipped, setFlipped] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [correctionInput, setCorrectionInput] = useState('');
  const [shakeCorrection, setShakeCorrection] = useState(false);

  // Word Stack state (for review)
  const [placed, setPlaced] = useState<string[]>([]);
  const [pool, setPool] = useState<string[]>([]);

  // Finished & Intro
  const [finished, setFinished] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const answerInputRef = useRef<HTMLInputElement>(null);
  const correctionInputRef = useRef<HTMLInputElement>(null);

  const currentItem = items[currentIndex] || null;
  const isReview = mode === 'review';

  // Focus input on card show / Setup word pool for review
  useEffect(() => {
    if (isReview && currentItem?.en) {
      // For review: prepare word pool (use only first answer, not all options)
      const displayAnswer = getDisplayAnswer(currentItem.en);
      const words = displayAnswer.toLowerCase().split(/\s+/);
      setPool(shuffle(words));
      setPlaced([]);
    } else if (!flipped && !finished) {
      // For warmup: focus input
      setStartedAt(Date.now());
      setTimeout(() => answerInputRef.current?.focus(), 100);
    }
  }, [currentIndex, flipped, finished, isReview, currentItem?.en]);

  // ─── Actions ──────────────────────────────────────────────────────

  // Word Stack functions for Review
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

  const checkStackAnswer = useCallback(() => {
    if (!currentItem || flipped) return;
    const answer = placed.join(' ');
    const correct = answer.toLowerCase() === getDisplayAnswer(currentItem.en).toLowerCase();
    const responseMs = Date.now() - startedAt;

    // Update results
    const newResults = [...results];
    newResults[currentIndex] = correct ? 'correct' : 'wrong';
    setResults(newResults);
    setTimes(prev => [...prev, responseMs]);

    if (correct) {
      setCorrectCount(prev => prev + 1);
      setTotalXP(prev => prev + 10);
      addXP(10);
      SFX.correct();
    } else {
      SFX.wrong();
    }

    // Track word
    trackWord({
      en: currentItem.en,
      pt: currentItem.pt,
      emoji: currentItem.emoji,
      correct,
      responseTime: responseMs,
      context: mode,
      lessonId: currentItem.lessonId,
      lessonTitle: currentItem.lessonTitle,
      lessonOrder: currentItem.order,
      module: currentItem.module,
    });

    setIsCorrect(correct);
    setFlipped(true);
  }, [currentItem, flipped, placed, startedAt, results, currentIndex, mode, addXP, trackWord]);

  const checkAnswer = useCallback(() => {
    if (!currentItem || flipped) return;

    const answer = userAnswer.trim();
    const correct = isMatch(answer, currentItem.en);
    const responseMs = Date.now() - startedAt;

    // Update results
    const newResults = [...results];
    newResults[currentIndex] = correct ? 'correct' : 'wrong';
    setResults(newResults);
    setTimes(prev => [...prev, responseMs]);

    if (correct) {
      setCorrectCount(prev => prev + 1);
      setTotalXP(prev => prev + 10);
      addXP(10);
      SFX.correct();
    } else {
      SFX.wrong();
    }

    // Track word
    trackWord({
      en: currentItem.en,
      pt: currentItem.pt,
      emoji: currentItem.emoji,
      correct,
      responseTime: responseMs,
      context: mode,
      lessonId: currentItem.lessonId,
      lessonTitle: currentItem.lessonTitle,
      lessonOrder: currentItem.order,
      module: currentItem.module,
    });

    setIsCorrect(correct);
    setFlipped(true);

    // Focus correction input if wrong
    if (!correct) {
      setTimeout(() => correctionInputRef.current?.focus(), 600);
    }
  }, [currentItem, flipped, userAnswer, startedAt, results, currentIndex, mode, addXP, trackWord]);

  const confirmCorrection = useCallback(() => {
    if (!currentItem) return;
    const typed = correctionInput.trim();

    if (isMatch(typed, currentItem.en)) {
      // Correct correction
      trackWord({
        en: currentItem.en,
        pt: currentItem.pt,
        emoji: currentItem.emoji,
        correct: true,
        responseTime: 2000,
        context: mode,
        lessonId: currentItem.lessonId,
        lessonTitle: currentItem.lessonTitle,
        lessonOrder: currentItem.order,
        module: currentItem.module,
      });
      addXP(2);
      setTotalXP(prev => prev + 2);
      SFX.correct();
      goNext();
    } else {
      // Still wrong — shake
      setShakeCorrection(true);
      setTimeout(() => setShakeCorrection(false), 400);
      setCorrectionInput('');
      correctionInputRef.current?.focus();
      SFX.wrong();
    }
  }, [currentItem, correctionInput, mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const goNext = useCallback(() => {
    const nextIdx = currentIndex + 1;
    if (nextIdx >= items.length) {
      // Done!
      setFinished(true);
      SFX.victory();

      // Log session
      const avgTime = times.length ? Math.round(times.reduce((a, b) => a + b, 0) / times.length) : 0;
      logSession({
        type: mode === 'review' ? 'review' : 'warmup',
        lessonId: lessonId ?? undefined,
        score: correctCount,
        accuracy: items.length > 0 ? Math.round((correctCount / items.length) * 100) : 0,
        duration: Math.round((Date.now() - (startedAt - (times.reduce((a, b) => a + b, 0)))) / 1000),
        wordsAttempted: items.length,
      });
    } else {
      setCurrentIndex(nextIdx);
      setFlipped(false);
      setIsCorrect(false);
      setUserAnswer('');
      setCorrectionInput('');
    }
  }, [currentIndex, items.length, times, correctCount, mode, lessonId, logSession, startedAt]);

  const restart = useCallback(() => {
    setCurrentIndex(0);
    setResults(new Array(items.length).fill(null));
    setCorrectCount(0);
    setTotalXP(0);
    setTimes([]);
    setFlipped(false);
    setIsCorrect(false);
    setUserAnswer('');
    setCorrectionInput('');
    setFinished(false);
    setStartedAt(Date.now());
  }, [items.length]);

  const goBack = useCallback(() => {
    let path = returnTo;

    // Always accumulate current step when returning to daily-drill
    if (returnTo === '/daily-drill') {
      // If stepComplete already has steps, append current mode; otherwise just use current mode
      const stepsToMark = stepComplete ? `${stepComplete},${mode}` : mode;
      path = `${returnTo}?lessonId=${lessonId}&stepComplete=${stepsToMark}`;
    }

    navigate(path);
  }, [navigate, returnTo, stepComplete, mode, lessonId]);

  // Display answer (first option if multiple)
  const displayAnswer = currentItem?.en.includes('/')
    ? currentItem.en.split('/')[0].trim()
    : currentItem?.en || '';

  const avgTime = times.length
    ? Math.round((times.reduce((a, b) => a + b, 0) / times.length / 1000) * 10) / 10
    : 0;

  // ─── Render ───────────────────────────────────────────────────────

  return (
    <div className="relative z-10 min-h-screen">
      {/* Appbar */}
      <div className={`wu-appbar ${isReview ? 'wu-mode-review' : 'wu-mode-warmup'}`}>
        <div className="wu-brand">
          {isReview ? '🔄' : '⚡'}{' '}
          <span className="wu-brand-text">
            {isReview ? 'REVIEW' : 'WARM-UP'}
          </span>
          <span className="wu-brand-pt">{isReview ? 'revisão' : 'esquenta'}</span>
        </div>
        <button onClick={goBack} className="wu-close-btn">✕</button>
      </div>

      <div className="wu-main">
        {showIntro && !isReview ? (
          /* Warmup Intro Screen */
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '40px 20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>⚡</div>
            <h2 style={{
              fontFamily: 'Orbitron',
              fontSize: '1.8rem',
              fontWeight: 900,
              color: 'var(--green)',
              marginBottom: '12px'
            }}>WARM-UP</h2>
            <p style={{
              color: 'var(--gray)',
              fontSize: '1rem',
              marginBottom: '24px',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              🔥 Ative seu cérebro com as primeiras 5 palavras da aula!
            </p>
            <p style={{
              color: 'var(--gray)',
              fontSize: '0.9rem',
              marginBottom: '32px',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              Esse é um exercício rápido para preparar sua mente antes de aprender. Quanto mais rápido responder, melhor!
            </p>
            <div style={{
              background: 'rgba(0,255,136,0.1)',
              border: '2px solid rgba(0,255,136,0.3)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              <div style={{ color: 'var(--green)', fontWeight: 700, marginBottom: '8px' }}>💡 Como funciona</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                Veja a palavra em português no card e <strong>digite a resposta em inglês</strong>. Você tem <strong>5 palavras</strong> para praticar. Rápido e fácil!
              </div>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              style={{
                padding: '14px 40px',
                background: 'var(--green)',
                color: '#0a1628',
                border: 'none',
                borderRadius: '12px',
                fontFamily: 'Orbitron',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              ➡️ COMEÇAR
            </button>
          </div>
        ) : showIntro && isReview ? (
          /* Review Intro Screen */
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            padding: '40px 20px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔄</div>
            <h2 style={{
              fontFamily: 'Orbitron',
              fontSize: '1.8rem',
              fontWeight: 900,
              color: 'var(--cyan)',
              marginBottom: '12px'
            }}>REVIEW</h2>
            <p style={{
              color: 'var(--gray)',
              fontSize: '1rem',
              marginBottom: '24px',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              📚 Você vai praticar <strong>palavras que você errou</strong> em outras aulas.
            </p>
            <p style={{
              color: 'var(--gray)',
              fontSize: '0.9rem',
              marginBottom: '32px',
              maxWidth: '500px',
              lineHeight: '1.6'
            }}>
              Essa é uma técnica poderosa chamada <strong>Spaced Repetition</strong> — repetir o que é difícil ajuda a fixar na memória!
            </p>
            <div style={{
              background: 'rgba(0,191,255,0.1)',
              border: '2px solid rgba(0,191,255,0.3)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '32px',
              maxWidth: '500px'
            }}>
              <div style={{ color: 'var(--cyan)', fontWeight: 700, marginBottom: '8px' }}>💡 Como funciona</div>
              <div style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
                Você tem <strong>10 palavras</strong> para praticar. Clique nos blocos de palavras para montar a frase correta!
              </div>
            </div>
            <button
              onClick={() => setShowIntro(false)}
              style={{
                padding: '14px 40px',
                background: 'var(--cyan)',
                color: '#0a1628',
                border: 'none',
                borderRadius: '12px',
                fontFamily: 'Orbitron',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              ➡️ COMEÇAR
            </button>
          </div>
        ) : !finished ? (
          <>
            {/* Progress dots */}
            <div className="wu-progress-bar">
              {items.map((_, i) => (
                <div
                  key={i}
                  className={`wu-progress-dot ${
                    results[i] === 'correct' ? 'done' :
                    results[i] === 'wrong' ? 'wrong' :
                    i === currentIndex ? 'current' : ''
                  }`}
                />
              ))}
            </div>

            {/* Flashcard */}
            <div className={`wu-flashcard ${flipped ? 'flipped' : ''}`}>
              <div className="wu-flashcard-inner">
                {/* FRONT: Question */}
                <div className={`wu-card-face wu-card-front ${isReview ? 'review' : 'warmup'}`}>
                  <div className="wu-card-label">
                    COMO SE DIZ EM INGLÊS?
                    {isReview && <span className="wu-card-label-sub"> (palavras que você errou)</span>}
                  </div>
                  <div className="wu-card-prompt">
                    <span className="wu-card-emoji">{currentItem?.emoji || '🧠'}</span>
                    <span className="wu-card-prompt-text">{currentItem?.pt || 'Carregando...'}</span>
                  </div>
                  {currentItem?.lessonTitle && (
                    <div className="wu-card-meta">📍 {currentItem.lessonTitle}</div>
                  )}

                  {isReview ? (
                    /* REVIEW: Word Stack Format */
                    <div className="wu-input-area">
                      <label className="wu-input-label">🔤 Monte a resposta:</label>
                      {/* Placed words */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        minHeight: '50px',
                        padding: '12px',
                        background: 'rgba(255,255,255,0.03)',
                        borderRadius: '8px',
                        marginBottom: '12px',
                        border: '2px solid rgba(0,191,255,0.2)'
                      }}>
                        {placed.length === 0 && (
                          <div style={{ color: 'var(--gray)', opacity: 0.5, fontSize: '0.9rem', alignSelf: 'center' }}>
                            ← Clique nas palavras abaixo para montar
                          </div>
                        )}
                        {placed.map((word, i) => (
                          <button
                            key={i}
                            onClick={undoWord}
                            style={{
                              padding: '8px 12px',
                              background: 'var(--cyan)',
                              color: '#0a1628',
                              border: 'none',
                              borderRadius: '6px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                              transition: 'transform 0.2s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            title="Clique para remover"
                          >
                            {word}
                          </button>
                        ))}
                      </div>

                      {/* Word pool */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '12px'
                      }}>
                        {pool.map((word, i) => (
                          <button
                            key={i}
                            onClick={() => addWord(word, i)}
                            style={{
                              padding: '10px 16px',
                              background: 'rgba(0,255,136,0.15)',
                              color: 'var(--green)',
                              border: '2px solid var(--green)',
                              borderRadius: '8px',
                              fontWeight: 700,
                              cursor: 'pointer',
                              fontSize: '0.9rem',
                              transition: 'all 0.2s'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.background = 'rgba(0,255,136,0.3)';
                              e.currentTarget.style.transform = 'scale(1.08)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.background = 'rgba(0,255,136,0.15)';
                              e.currentTarget.style.transform = 'scale(1)';
                            }}
                          >
                            {word}
                          </button>
                        ))}
                      </div>

                      <button
                        className={`wu-btn-check review`}
                        onClick={checkStackAnswer}
                        disabled={placed.length === 0}
                        style={{
                          opacity: placed.length === 0 ? 0.5 : 1,
                          cursor: placed.length === 0 ? 'not-allowed' : 'pointer'
                        }}
                      >
                        CONFERIR
                      </button>
                    </div>
                  ) : (
                    /* WARMUP: Typing Format */
                    <div className="wu-input-area">
                      <label className="wu-input-label">✍️ Digite sua resposta:</label>
                      <input
                        ref={answerInputRef}
                        type="text"
                        className="wu-input"
                        placeholder="Type in English..."
                        value={userAnswer}
                        onChange={e => setUserAnswer(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') checkAnswer(); }}
                        autoComplete="off"
                      />
                      <button className="wu-btn-check warmup" onClick={checkAnswer}>
                        CONFERIR
                      </button>
                    </div>
                  )}
                </div>

                {/* BACK: Result */}
                <div className={`wu-card-face wu-card-back ${isCorrect ? 'correct' : 'wrong'}`}>
                  <div className="wu-result-icon">{isCorrect ? '✅' : '❌'}</div>
                  <div className={`wu-result-title ${isCorrect ? 'correct' : 'wrong'}`}>
                    {isCorrect ? 'CORRETO!' : 'QUASE!'}
                  </div>

                  {/* Your answer (only show if wrong) */}
                  {!isCorrect && (
                    <div className="wu-answer-box">
                      <div className="wu-answer-label">SUA RESPOSTA</div>
                      <div className="wu-answer-text wrong">{userAnswer || '(vazio)'}</div>
                    </div>
                  )}

                  <div className="wu-answer-box">
                    <div className="wu-answer-label">RESPOSTA CORRETA</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                      <SpeakButton text={displayAnswer} size="md" />
                      <div className="wu-answer-text correct">{displayAnswer}</div>
                    </div>
                  </div>

                  {/* Tip for wrong answers */}
                  {!isCorrect && (
                    <div className="wu-tip-box">
                      <span>💡</span>
                      <span className="wu-tip-text">
                        {currentItem?.en.includes('/')
                          ? `Digite "${displayAnswer}" (ou outra opção válida)`
                          : `Digite "${displayAnswer}" para memorizar!`}
                      </span>
                    </div>
                  )}

                  {/* If correct: Next button */}
                  {isCorrect && (
                    <div className="wu-next-area">
                      <button className="wu-btn-next" onClick={goNext}>PRÓXIMO →</button>
                    </div>
                  )}

                  {/* If wrong: Must type correct */}
                  {!isCorrect && (
                    <div className="wu-correction-area">
                      <label className="wu-correction-label">✍️ Agora digite o correto para continuar:</label>
                      <input
                        ref={correctionInputRef}
                        type="text"
                        className={`wu-correction-input ${shakeCorrection ? 'shake' : ''}`}
                        placeholder={displayAnswer}
                        value={correctionInput}
                        onChange={e => setCorrectionInput(e.target.value)}
                        onKeyDown={e => { if (e.key === 'Enter') confirmCorrection(); }}
                        autoComplete="off"
                      />
                      <button className="wu-btn-retry" onClick={confirmCorrection}>CONFIRMAR</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* ─── Results Screen ─────────────────────────────────────── */
          <div className="wu-results-card">
            <h2 className="wu-results-title">🎉 CONCLUÍDO!</h2>
            <div className="wu-results-subtitle">
              {isReview
                ? 'Review concluído! Palavras difíceis anotadas.'
                : 'Warm-up concluído! Pronto pra aula.'}
            </div>

            <div className="wu-stats-grid">
              <div className="wu-stat-box">
                <div className="wu-stat-value">{correctCount}/{items.length}</div>
                <div className="wu-stat-label">ACERTOS</div>
              </div>
              <div className="wu-stat-box">
                <div className="wu-stat-value">{avgTime}s</div>
                <div className="wu-stat-label">TEMPO MÉDIO</div>
              </div>
              <div className="wu-stat-box">
                <div className="wu-stat-value">+{totalXP}</div>
                <div className="wu-stat-label">XP GANHO</div>
              </div>
            </div>

            <button className="wu-btn-continue" onClick={goBack}>
              ➡️ CONTINUAR
            </button>
            <button className="wu-btn-secondary" onClick={restart}>
              🔄 Refazer
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
