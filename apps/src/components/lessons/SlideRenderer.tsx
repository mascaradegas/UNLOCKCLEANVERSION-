import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type {
  Slide,
  TitleSlide,
  SituationSlide,
  SequenceStepSlide,
  RuleSlide,
  TipSlide,
  ExampleSlide,
  ExamplesSlide,
  ComparisonSlide,
  QuizSlide,
  FillBlankSlide,
  ListSlide,
} from '@unlock2026/shared';
import { SFX } from '@/utils/sounds';
import { SpeakButton } from '@/components/SpeakButton';
import { SpeakableText } from '@/components/SpeakableText';

interface SlideRendererProps {
  slide: Slide;
  lessonId?: string;
  lessonTitle?: string;
}

export function SlideRenderer({ slide, lessonId, lessonTitle }: SlideRendererProps) {
  const cardClass = 'cardClass' in slide && slide.cardClass ? slide.cardClass : '';

  switch (slide.type) {
    case 'title':
      return <TitleView slide={slide} lessonId={lessonId} />;
    case 'situation':
      return <SituationView slide={slide} />;
    case 'sequence-step':
      return <SequenceStepView slide={slide} />;
    case 'rule':
      return <RuleView slide={slide} cardClass={cardClass} />;
    case 'tip':
      return <TipView slide={slide} cardClass={cardClass} />;
    case 'example':
      return <ExampleView slide={slide} cardClass={cardClass} />;
    case 'examples':
      return <ExamplesView slide={slide} cardClass={cardClass} />;
    case 'comparison':
      return <ComparisonView slide={slide} cardClass={cardClass} />;
    case 'quiz':
      return <QuizView slide={slide} cardClass={cardClass} />;
    case 'fill-blank':
      return <FillBlankView slide={slide} cardClass={cardClass} />;
    case 'list':
      return <ListView slide={slide} cardClass={cardClass} />;
    case 'end':
      return <EndView lessonId={lessonId} lessonTitle={lessonTitle} />;
    default:
      return null;
  }
}

// ─── Title Slide ──────────────────────────────────────────────────────────

function TitleView({ slide, lessonId }: { slide: TitleSlide; lessonId?: string }) {
  const navigate = useNavigate();

  return (
    <div className="unlock-card unlock-card-gold" style={{ padding: '40px 28px', textAlign: 'center' }}>
      <div className="emoji-big" style={{ marginBottom: 16 }}>{slide.emoji}</div>
      <h1 className="slide-title-text" style={{ marginBottom: 10 }}>{slide.title}</h1>
      <p style={{ fontSize: '1.4rem', color: 'var(--gray)', marginBottom: 20 }}>{slide.subtitle}</p>
      {lessonId && (
        <button
          onClick={() => navigate(`/homework/${lessonId}`)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 28px', borderRadius: 12,
            background: 'linear-gradient(135deg, var(--cyan), #0090cc)',
            color: 'white', border: 'none',
            fontWeight: 900, fontSize: '1rem', cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0,191,255,0.3)',
          }}
        >
          📝 HOMEWORK
        </button>
      )}
    </div>
  );
}

// ─── Situation Slide ──────────────────────────────────────────────────────

function SituationView({ slide }: { slide: SituationSlide }) {
  const cardClass = slide.cardClass ? `unlock-card-${slide.cardClass}` : '';

  return (
    <div className={`slide-situation-box ${cardClass}`}>
      <div className="situation-header">🎬 SITUAÇÃO REAL</div>
      <div className="emoji-situation" style={{ marginBottom: 24 }}>{slide.emoji}</div>
      <div
        style={{
          fontSize: '1.85rem',
          lineHeight: 1.6,
          fontStyle: 'italic',
          color: 'var(--white)',
        }}
        dangerouslySetInnerHTML={{ __html: slide.text }}
      />
    </div>
  );
}

// ─── Sequence Step Slide ──────────────────────────────────────────────────

function SequenceStepView({ slide }: { slide: SequenceStepSlide }) {
  const [showBreakdown, setShowBreakdown] = useState(false);

  return (
    <div className="sequence-step-card">
      {/* Progress dots */}
      <div className="sequence-progress">
        <span style={{ marginRight: 10 }}>Passo {slide.stepNumber} de {slide.totalSteps}</span>
        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: slide.totalSteps }, (_, i) => (
            <div
              key={i}
              style={{
                width: i + 1 === slide.stepNumber ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i + 1 <= slide.stepNumber
                  ? 'var(--cyan)'
                  : 'rgba(255,255,255,0.15)',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="step-content">
        {/* Emoji large */}
        <div className="sequence-emoji">{slide.emoji}</div>

        {/* English phrase - main + TTS controls */}
        <div
          style={{
            fontSize: '2.2rem',
            fontWeight: 800,
            color: 'var(--cyan)',
            lineHeight: 1.3,
            marginBottom: 12,
            textAlign: 'center',
          }}
          dangerouslySetInnerHTML={{ __html: slide.english }}
        />

        {/* TTS Controls row */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: 10, marginBottom: 20, flexWrap: 'wrap',
        }}>
          {/* Normal speed EN */}
          <SpeakButton text={slide.english} lang="en" size="lg" />
          {/* Slow speed EN */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Use Web Speech API at slower rate
              if ('speechSynthesis' in window) {
                speechSynthesis.cancel();
                const u = new SpeechSynthesisUtterance(slide.english.replace(/<[^>]*>/g, ''));
                u.lang = 'en-US';
                u.rate = 0.55;
                u.pitch = 1;
                speechSynthesis.speak(u);
              }
            }}
            title="Ouvir devagar"
            style={{
              background: 'rgba(255,215,0,0.1)',
              border: '1.5px solid rgba(255,215,0,0.3)',
              borderRadius: 8,
              color: 'var(--gold)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '8px 12px',
              fontSize: '0.9rem',
              fontWeight: 700,
              gap: 4,
              transition: 'all 0.2s',
            }}
          >
            🐢 Devagar
          </button>
          {/* PT translation audio */}
          {slide.portuguese && (
            <SpeakButton text={slide.portuguese} lang="pt" size="lg" style={{
              background: 'rgba(155,109,255,0.1)',
              border: '1.5px solid rgba(155,109,255,0.3)',
              color: 'var(--purple)',
            }} />
          )}
        </div>

        {/* Portuguese translation */}
        {slide.portuguese && (
          <div
            style={{
              fontSize: '1.55rem',
              color: 'var(--gray)',
              marginBottom: 20,
              fontStyle: 'italic',
              padding: '12px 16px',
              borderLeft: '3px solid rgba(0,191,255,0.4)',
              background: 'rgba(0,191,255,0.04)',
              borderRadius: '0 8px 8px 0',
            }}
            dangerouslySetInnerHTML={{ __html: slide.portuguese }}
          />
        )}

        {/* Breakdown explanation - tap to reveal */}
        {slide.breakdown && (
          <>
            {!showBreakdown ? (
              <button
                onClick={() => setShowBreakdown(true)}
                style={{
                  width: '100%',
                  padding: '14px 20px',
                  background: 'rgba(255,215,0,0.06)',
                  border: '1.5px dashed rgba(255,215,0,0.3)',
                  borderRadius: 10,
                  color: 'var(--gold)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.2s',
                  marginTop: 8,
                }}
              >
                📚 Toque para ver a explicação
              </button>
            ) : (
              <div className="sequence-breakdown" style={{ animation: 'stepSlideIn 0.3s ease' }}>
                <div style={{
                  fontSize: '0.9rem', color: 'var(--gold)', fontWeight: 700,
                  marginBottom: 8, textTransform: 'uppercase', letterSpacing: 1,
                }}>
                  📚 EXPLICAÇÃO
                </div>
                <div
                  style={{
                    fontSize: '1.35rem',
                    color: 'var(--white)',
                    lineHeight: 1.7,
                  }}
                  dangerouslySetInnerHTML={{ __html: slide.breakdown }}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Rule Slide ───────────────────────────────────────────────────────────

function RuleView({ slide, cardClass }: { slide: RuleSlide; cardClass: string }) {
  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px', textAlign: 'center' }}>
      <div
        style={{ fontSize: '1.9rem', lineHeight: 1.7, marginBottom: 14 }}
        dangerouslySetInnerHTML={{ __html: slide.text }}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '14px 0' }}>
        <SpeakButton text={slide.keyword} size="md" />
        <div className="slide-keyword">{slide.keyword}</div>
      </div>
      {slide.keywordAfter && (
        <p style={{ fontSize: '1.6rem', color: 'var(--gray)', marginTop: 8 }}>{slide.keywordAfter}</p>
      )}
    </div>
  );
}

// ─── Tip Slide ────────────────────────────────────────────────────────────

function TipView({ slide, cardClass }: { slide: TipSlide; cardClass: string }) {
  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px' }}>
      <div className="slide-tip-box">
        <span className="slide-tip-icon">{slide.icon}</span>
        <div style={{ flex: 1 }}>
          <div style={{
            fontWeight: 700, color: 'var(--gold)', fontSize: '1.7rem',
            marginBottom: 12, textTransform: 'uppercase' as const, letterSpacing: 1,
          }}>
            {slide.title}
          </div>
          <div
            style={{ fontSize: '1.9rem', lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{ __html: slide.text }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Example Slide (single) ──────────────────────────────────────────────

function ExampleView({ slide, cardClass }: { slide: ExampleSlide; cardClass: string }) {
  return (
    <div
      className={`unlock-card unlock-card-${cardClass}`}
      style={{ padding: '28px 24px' }}
    >
      <div className="emoji-big" style={{ marginBottom: 12 }}>{slide.emoji}</div>

      <div className="slide-example-box" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <SpeakButton text={slide.question} size="md" />
          <SpeakableText html={slide.question} style={{ fontSize: '2.1rem', fontWeight: 600, flex: 1 }} />
        </div>
        <div style={{ fontSize: '1.5rem', color: 'var(--gray)' }}>{slide.questionTr}</div>
        {slide.questionUse && (
          <div style={{ fontSize: '1.25rem', color: 'var(--gray)', marginTop: 6 }} dangerouslySetInnerHTML={{ __html: '💡 ' + slide.questionUse }} />
        )}
      </div>

      <div className="slide-example-box response">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <SpeakButton text={slide.answer} size="md" />
          <SpeakableText html={slide.answer} style={{ fontSize: '2.1rem', fontWeight: 600, color: 'var(--green)', flex: 1 }} />
        </div>
        <div style={{ fontSize: '1.5rem', color: 'var(--gray)' }}>{slide.answerTr}</div>
        {slide.answerUse && (
          <div style={{ fontSize: '1.25rem', color: 'var(--gray)', marginTop: 6 }} dangerouslySetInnerHTML={{ __html: '💡 ' + slide.answerUse }} />
        )}
      </div>
    </div>
  );
}

// ─── Examples Slide (multi) ──────────────────────────────────────────────
function ExamplesView({ slide, cardClass }: { slide: ExamplesSlide; cardClass: string }) {
  return (
    <div
      className={`unlock-card unlock-card-${cardClass}`}
      style={{ padding: '28px 24px' }}
    >
      <h3 style={{
        fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.1rem',
        color: 'var(--gold)', marginBottom: 16,
      }}>
        {slide.title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {slide.items.map((item, i) => (
          <div key={i} className="slide-example-row">
            <span style={{ fontSize: '2.4rem', flexShrink: 0 }}>{item.emoji}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <SpeakButton text={item.en} size="sm" />
                <SpeakableText html={item.en} style={{ fontSize: '1.75rem', fontWeight: 600, flex: 1 }} />
              </div>
              <div style={{ fontSize: '1.35rem', color: 'var(--gray)' }} dangerouslySetInnerHTML={{ __html: item.pt }} />
              {item.use && (
                <div style={{ fontSize: '1.2rem', color: 'var(--gray)', marginTop: 4 }} dangerouslySetInnerHTML={{ __html: '💡 ' + item.use }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Comparison Slide ────────────────────────────────────────────────────

function ComparisonView({ slide, cardClass }: { slide: ComparisonSlide; cardClass: string }) {
  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px' }}>
      <h3 style={{
        fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.1rem',
        color: 'var(--gold)', textAlign: 'center', marginBottom: 16,
      }}>
        {slide.title}
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        {/* Left box */}
        <div className={`compare-box ${slide.leftClass}`}>
          <div style={{
            fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase' as const,
            letterSpacing: 2, marginBottom: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            color: slide.leftClass === 'wrong' ? 'var(--red)' :
                   slide.leftClass === 'left-side' ? 'var(--cyan)' : 'var(--gray)',
          }}>
            <span style={{ fontSize: '1.6rem' }}>{slide.leftIcon}</span>
            {slide.leftLabel}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
            <SpeakButton text={slide.left} size="sm" />
            <SpeakableText html={slide.left} style={{ fontSize: '1.6rem', fontWeight: 600 }} />
          </div>
          <div style={{ fontSize: '1.1rem', color: 'var(--gray)', marginTop: 8 }}>{slide.leftNote}</div>
        </div>

        {/* Right box */}
        <div className={`compare-box ${slide.rightClass}`}>
          <div style={{
            fontSize: '1.1rem', fontWeight: 700, textTransform: 'uppercase' as const,
            letterSpacing: 2, marginBottom: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            color: slide.rightClass === 'right' ? 'var(--green)' :
                   slide.rightClass === 'right-side' ? 'var(--purple)' : 'var(--gray)',
          }}>
            <span style={{ fontSize: '1.6rem' }}>{slide.rightIcon}</span>
            {slide.rightLabel}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center' }}>
            <SpeakButton text={slide.right} size="sm" />
            <SpeakableText html={slide.right} style={{ fontSize: '1.6rem', fontWeight: 600 }} />
          </div>
          <div style={{ fontSize: '1.1rem', color: 'var(--gray)', marginTop: 8 }}>{slide.rightNote}</div>
        </div>
      </div>

      {slide.explanation && (
        <div
          style={{ textAlign: 'center', fontSize: '1.3rem', color: 'var(--white)', lineHeight: 1.6 }}
          dangerouslySetInnerHTML={{ __html: slide.explanation }}
        />
      )}
    </div>
  );
}

// ─── Quiz Slide ──────────────────────────────────────────────────────────

function QuizView({ slide, cardClass }: { slide: QuizSlide; cardClass: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const isCorrect = selected === slide.correct;

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    if (i === slide.correct) SFX.correct();
    else SFX.wrong();
  };

  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px' }}>
      <h3
        style={{ fontSize: '1.6rem', fontWeight: 600, textAlign: 'center', marginBottom: 18 }}
        dangerouslySetInnerHTML={{ __html: slide.question }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {slide.options.map((opt, i) => {
          let cls = 'slide-quiz-option';
          if (selected !== null) {
            if (i === slide.correct) cls += ' correct';
            else if (i === selected && !isCorrect) cls += ' wrong';
            else cls += ' dimmed';
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              className={cls}
              disabled={selected !== null}
            >
              <span style={{ fontFamily: 'Orbitron', fontWeight: 700, fontSize: '0.85rem', opacity: 0.5 }}>
                {String.fromCharCode(65 + i)})
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {selected !== null && (
        <div style={{
          textAlign: 'center', marginTop: 16, fontSize: '1.3rem', fontWeight: 900,
          color: isCorrect ? 'var(--green)' : 'var(--red)',
        }}>
          {isCorrect ? '✅ Correto!' : `❌ Resposta: ${slide.options[slide.correct]}`}
        </div>
      )}
    </div>
  );
}

// ─── Fill-in-the-Blank Slide ─────────────────────────────────────────────

function FillBlankView({ slide, cardClass }: { slide: FillBlankSlide; cardClass: string }) {
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const isCorrect = answer.trim().toLowerCase() === slide.correctWord.toLowerCase();

  const handleSubmit = () => {
    if (!answer.trim()) return;
    setSubmitted(true);
    if (isCorrect) SFX.correct();
    else SFX.wrong();
  };

  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px', textAlign: 'center' }}>
      <p style={{ fontSize: '1.6rem', marginBottom: 8 }}>{slide.prompt}</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 24 }}>
        <SpeakButton text={slide.sentence.replace('_____', slide.correctWord)} size="md" />
        <p style={{ fontSize: '2.2rem', fontWeight: 600, margin: 0 }}>
          {slide.sentence.replace('_____', submitted ? slide.correctWord : '_____')}
        </p>
      </div>

      {!submitted ? (
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Digite aqui..."
            style={{
              padding: '14px 20px', borderRadius: 12,
              background: 'rgba(0,191,255,0.08)', border: '2px solid rgba(0,191,255,0.35)',
              color: 'var(--white)', textAlign: 'center', fontSize: '1.2rem',
              fontWeight: 700, outline: 'none', width: 200,
            }}
            autoFocus
          />
          <button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            style={{
              padding: '14px 24px', borderRadius: 12,
              background: answer.trim() ? 'linear-gradient(135deg, var(--cyan), var(--green))' : 'rgba(255,255,255,0.1)',
              color: answer.trim() ? '#0a1628' : 'var(--gray)',
              border: 'none', fontWeight: 900, fontSize: '1rem', cursor: answer.trim() ? 'pointer' : 'default',
            }}
          >
            Verificar
          </button>
        </div>
      ) : (
        <div style={{
          fontSize: '1.3rem', fontWeight: 900,
          color: isCorrect ? 'var(--green)' : 'var(--red)',
        }}>
          {isCorrect ? '✅ Correto!' : `❌ Resposta: ${slide.correctWord}`}
        </div>
      )}
    </div>
  );
}

// ─── List Slide ──────────────────────────────────────────────────────────

function ListView({ slide, cardClass }: { slide: ListSlide; cardClass: string }) {
  return (
    <div className={`unlock-card unlock-card-${cardClass}`} style={{ padding: '28px 24px' }}>
      <h3 style={{
        fontFamily: 'Orbitron, sans-serif', fontWeight: 700, fontSize: '1.1rem',
        color: 'var(--gold)', marginBottom: 14,
      }}>
        {slide.title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {slide.items.map((item, i) => (
          <div key={i} className="slide-list-item">
            <span style={{ fontSize: '2.2rem', flexShrink: 0 }}>{item.emoji}</span>
            <div
              style={{ fontSize: '1.6rem' }}
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── End Slide (AULA COMPLETA) ───────────────────────────────────────────

function EndView({ lessonId, lessonTitle }: { lessonId?: string; lessonTitle?: string }) {
  const navigate = useNavigate();

  return (
    <div className="unlock-card unlock-card-gold" style={{ padding: '40px 28px', textAlign: 'center' }}>
      <div className="emoji-big" style={{ marginBottom: 16 }}>🎉</div>
      <h1 className="slide-title-text" style={{ marginBottom: 10 }}>AULA COMPLETA!</h1>
      <p style={{ fontSize: '1.4rem', color: 'var(--gray)', marginBottom: 24 }}>
        Você terminou a aula de <strong style={{ color: 'var(--white)' }}>{lessonTitle || ''}</strong>
      </p>
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        {lessonId && (
          <button
            onClick={() => navigate(`/homework/${lessonId}`)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 24px', borderRadius: 12,
              background: 'linear-gradient(135deg, var(--cyan), #0090cc)',
              color: 'white', border: 'none',
              fontWeight: 900, fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0,191,255,0.3)',
            }}
          >
            📝 HOMEWORK
          </button>
        )}
        {lessonId && (
          <button
            onClick={() => navigate(`/game/select/${lessonId}`)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 24px', borderRadius: 12,
              background: 'linear-gradient(135deg, var(--green), #00cc6a)',
              color: '#0a1628', border: 'none',
              fontWeight: 900, fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 0 20px rgba(0,255,136,0.3)',
            }}
          >
            🎮 TREINAR
          </button>
        )}
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 24px', borderRadius: 12,
            background: 'linear-gradient(135deg, var(--gold), var(--orange))',
            color: '#0a1628', border: 'none',
            fontWeight: 900, fontSize: '1rem', cursor: 'pointer',
            boxShadow: '0 0 20px rgba(255,215,0,0.3)',
          }}
        >
          📚 MAIS AULAS
        </button>
      </div>
    </div>
  );
}
