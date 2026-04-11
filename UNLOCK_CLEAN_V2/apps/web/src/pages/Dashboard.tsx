import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { Header } from '@/components/layout/Header';
import { getLevelInfo, getMasteryLevel, getXPForNextLevel } from '@unlock2026/shared';
import { LESSONS } from '@/data/lessons';

export function Dashboard() {
  const store = useProgressStore();
  const levelInfo = getLevelInfo(store.level);
  const nextLevel = getXPForNextLevel(store.xp);
  const wordCounts = store.getWordCounts();
  const completionPercent = LESSONS.length > 0
    ? Math.round((store.lessonsCompleted.length / LESSONS.length) * 100)
    : 0;
  const activeWords = wordCounts.learning + wordCounts.weak + wordCounts.critical;
  const priorityWords = useMemo(() => store.getPriorityWords(8), [store.wordStats]);
  const dailyGoal = useMemo(
    () => store.getDailyGoalStatus(),
    [store.sessions, store.settings.dailyGoal],
  );
  const nextLesson = useMemo(
    () => LESSONS.find((lesson) => !store.lessonsCompleted.includes(lesson.id)) || null,
    [store.lessonsCompleted],
  );

  const primaryAction = wordCounts.forReview > 0
    ? {
      to: '/daily-drill',
      label: 'Revisar agora',
      hint: `${wordCounts.forReview} palavras prontas para revisão`,
      tone: 'var(--cyan)',
      background: 'rgba(0,191,255,0.12)',
    }
    : nextLesson
      ? {
        to: `/lesson/${nextLesson.id}?returnTo=/dashboard`,
        label: 'Ir para próxima aula',
        hint: nextLesson.title,
        tone: 'var(--gold)',
        background: 'rgba(255,215,0,0.12)',
      }
      : {
        to: '/quickplay',
        label: 'Entrar no Quick Play',
        hint: 'Treino livre',
        tone: 'var(--green)',
        background: 'rgba(0,255,136,0.12)',
      };

  return (
    <div className="relative z-10 min-h-screen pb-20">
      <Header title="📊 Dashboard" backTo="/" />

      <div className="max-w-4xl mx-auto px-5 space-y-6">
        <div className="unlock-card unlock-card-cyan p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: 8 }}>
                FOCO DO DIA
              </div>
              <h2 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--white)', margin: 0 }}>
                {wordCounts.forReview > 0 ? 'Revise suas palavras mais urgentes' : 'Seu próximo passo já está definido'}
              </h2>
              <p style={{ color: 'var(--gray)', fontSize: '0.92rem', lineHeight: 1.6, marginTop: 10, maxWidth: 520 }}>
                {wordCounts.forReview > 0
                  ? `Você tem ${wordCounts.forReview} palavras prontas para revisão.`
                  : nextLesson
                    ? `A próxima aula pronta é ${nextLesson.title}.`
                    : 'Se quiser manter o ritmo, faça um treino livre.'}
              </p>
            </div>

            <div style={{ minWidth: 220 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--gray)', marginBottom: 8 }}>
                <span>Meta diária</span>
                <span>{dailyGoal.minutesToday}/{dailyGoal.goalMinutes} min</span>
              </div>
              <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${dailyGoal.progress}%`,
                    borderRadius: 999,
                    background: 'var(--cyan)',
                    transition: 'width 0.4s ease',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.76rem', color: dailyGoal.completed ? 'var(--green)' : 'var(--gold)', marginTop: 8 }}>
                {dailyGoal.completed ? 'Meta concluída hoje' : `${dailyGoal.remainingMinutes} min restantes`}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-5">
            <TopStat label="Nível" value={`${store.level}`} sub={levelInfo.title} />
            <TopStat label="XP" value={`${store.xp}`} sub={nextLevel ? `${nextLevel.needed} para subir` : 'MAX'} />
            <TopStat label="Streak" value={`${store.streak}`} sub={`Recorde ${store.longestStreak}`} />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
            <Link
              to={primaryAction.to}
              style={{
                padding: '12px 16px',
                borderRadius: 14,
                border: `2px solid ${primaryAction.tone}`,
                background: primaryAction.background,
                color: primaryAction.tone,
                textDecoration: 'none',
                fontWeight: 800,
              }}
            >
              {primaryAction.label}
            </Link>
            <Link
              to="/profile"
              style={{
                padding: '12px 16px',
                borderRadius: 14,
                border: '2px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                color: 'var(--white)',
                textDecoration: 'none',
                fontWeight: 800,
              }}
            >
              Ver perfil
            </Link>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="unlock-card p-6">
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--gold)', marginBottom: 6 }}>
              PROGRESSO
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--white)' }}>
              Seu avanço até agora
            </div>
            <div style={{ fontSize: '0.86rem', color: 'var(--gray)', marginTop: 8, lineHeight: 1.55 }}>
              Aqui você bate o olho e entende como está indo no curso.
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
              <ProgressStat
                label="Aulas"
                value={`${store.lessonsCompleted.length}/${LESSONS.length}`}
                sub={`${completionPercent}% do curso`}
                tone="var(--gold)"
              />
              <ProgressStat
                label="Dominadas"
                value={`${wordCounts.mastered}`}
                sub="palavras firmes"
                tone="var(--green)"
              />
              <ProgressStat
                label="Revisão"
                value={`${wordCounts.forReview}`}
                sub="prontas agora"
                tone="var(--red)"
              />
              <ProgressStat
                label="Em treino"
                value={`${activeWords}`}
                sub="ainda evoluindo"
                tone="var(--cyan)"
              />
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.8rem', marginBottom: 8 }}>
                <span style={{ color: 'var(--gray)' }}>Progresso do curso</span>
                <span style={{ color: 'var(--white)', fontWeight: 800 }}>{completionPercent}%</span>
              </div>
              <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${completionPercent}%`,
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, var(--gold), #ffe680)',
                    transition: 'width 0.35s ease',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginTop: 8 }}>
                {nextLesson
                  ? `Próxima aula: ${nextLesson.title}`
                  : 'Você já concluiu todas as aulas disponíveis.'}
              </div>
            </div>
          </div>

          <div className="unlock-card unlock-card-gold p-6">
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--gold)', marginBottom: 6 }}>
              NÍVEL
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  display: 'grid',
                  placeItems: 'center',
                  background: 'rgba(255,215,0,0.12)',
                  border: '1px solid rgba(255,215,0,0.25)',
                  fontSize: '1.8rem',
                }}
              >
                {levelInfo.emoji}
              </div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 900, color: 'var(--white)' }}>
                  {levelInfo.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray)', marginTop: 4 }}>
                  Nível {store.level}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, fontSize: '0.8rem', marginBottom: 8 }}>
                <span style={{ color: 'var(--gray)' }}>XP para o próximo nível</span>
                <span style={{ color: 'var(--white)', fontWeight: 800 }}>
                  {nextLevel ? `${nextLevel.progress}%` : 'MAX'}
                </span>
              </div>
              <div style={{ height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.08)', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${nextLevel ? nextLevel.progress : 100}%`,
                    height: '100%',
                    borderRadius: 999,
                    background: 'linear-gradient(90deg, var(--gold), var(--cyan))',
                    transition: 'width 0.35s ease',
                  }}
                />
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginTop: 8 }}>
                {nextLevel
                  ? `${nextLevel.needed} XP para subir`
                  : 'Você já está no nível máximo atual.'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <ProgressStat
                label="Sessões"
                value={`${store.sessionsCount}`}
                sub="total jogado"
                tone="var(--cyan)"
              />
              <ProgressStat
                label="Tempo"
                value={`${Math.round(store.totalTimeSpent / 60)} min`}
                sub="estudados"
                tone="var(--green)"
              />
            </div>
          </div>
        </div>

        <div className="unlock-card p-6">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
            <div>
              <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--red)', marginBottom: 6 }}>
                PALAVRAS EM FOCO
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--white)' }}>
                O que mais precisa da sua atenção
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Orbitron', color: 'var(--gold)', fontWeight: 800 }}>
                {wordCounts.forReview}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--gray)' }}>para revisar</div>
            </div>
          </div>

          {priorityWords.length > 0 ? (
            <div className="space-y-3">
              {priorityWords.map((word) => {
                const masteryInfo = getMasteryLevel(word.mastery);
                return (
                  <div
                    key={`${word.en}-${word.pt}`}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 14,
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'flex-start' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                          <span style={{ fontSize: '1.2rem' }}>{word.emoji}</span>
                          <span style={{ fontWeight: 800, color: 'var(--white)' }}>{word.en}</span>
                          <span style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>({word.pt})</span>
                        </div>
                        <div style={{ fontSize: '0.76rem', color: 'var(--gray)', marginTop: 6 }}>
                          {word.lessonTitle || 'Sem aula vinculada'}
                          {word.isDue ? ' • revisar agora' : ' • ainda praticando'}
                        </div>
                      </div>
                      <span
                        style={{
                          padding: '6px 10px',
                          borderRadius: 999,
                          background: `${masteryInfo.color}22`,
                          border: `1px solid ${masteryInfo.color}55`,
                          color: masteryInfo.color,
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {masteryInfo.label}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <FocusMetric label="Domínio" value={`${word.mastery}%`} tone={masteryInfo.color} />
                      <FocusMetric label="Erro" value={`${Math.round(word.errorRate * 100)}%`} tone="var(--red)" />
                      <FocusMetric label="Tempo" value={`${(word.avgResponseMs / 1000).toFixed(1)}s`} tone="var(--cyan)" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="Ainda sem palavras em foco"
              body="Quando você estudar e jogar mais, o dashboard vai mostrar aqui as palavras que mais precisam de revisão."
            />
          )}
        </div>
      </div>
    </div>
  );
}

function TopStat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div
      style={{
        padding: '12px 14px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: '0.7rem', color: 'var(--gray)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontFamily: 'Orbitron', fontWeight: 800, fontSize: '1rem', color: 'var(--gold)' }}>{value}</div>
      <div style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: 3 }}>{sub}</div>
    </div>
  );
}

function ProgressStat({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  tone: string;
}) {
  return (
    <div
      style={{
        padding: '12px 14px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: '0.7rem', color: 'var(--gray)', marginBottom: 4 }}>{label}</div>
      <div style={{ fontFamily: 'Orbitron', fontWeight: 800, fontSize: '1rem', color: tone }}>{value}</div>
      <div style={{ fontSize: '0.72rem', color: 'var(--gray)', marginTop: 3 }}>{sub}</div>
    </div>
  );
}

function FocusMetric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: string;
}) {
  return (
    <div
      style={{
        padding: '8px 10px',
        borderRadius: 10,
        background: 'rgba(255,255,255,0.03)',
      }}
    >
      <div style={{ fontSize: '0.68rem', color: 'var(--gray)', marginBottom: 3 }}>{label}</div>
      <div style={{ fontSize: '0.84rem', fontWeight: 800, color: tone }}>{value}</div>
    </div>
  );
}

function EmptyState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        padding: '20px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div style={{ fontWeight: 800, color: 'var(--white)', marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: '0.85rem', color: 'var(--gray)', lineHeight: 1.55 }}>{body}</div>
    </div>
  );
}
