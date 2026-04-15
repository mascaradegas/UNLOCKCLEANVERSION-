import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { useProgressStore } from '@/stores/progressStore';
import { getLevelInfo, getXPForNextLevel } from '@unlock2026/shared';
import { LESSONS, getModules } from '@/data/lessons';
import { SpeedControl } from '@/components/SpeedControl';

const AVATARS = ['🧑‍🎓', '👨‍💻', '👩‍💼', '🦸', '🧙', '🧑‍🚀', '🎅', '🤠', '🦊', '🐻', '🐺', '🦅', '🔥', '⭐', '💎', '🎯'];
const DAILY_GOALS = [10, 15, 20, 30];

export function Profile() {
  const store = useProgressStore();
  const levelInfo = getLevelInfo(store.level);
  const nextLevel = getXPForNextLevel(store.xp);
  const wordCounts = store.getWordCounts();
  const achievements = store.getAchievements();
  const unlockedAchievements = achievements.filter((achievement) => achievement.unlocked);
  const nextAchievement = achievements.find((achievement) => !achievement.unlocked) || null;
  const reviewWords = useMemo(() => store.getWordsForReview().slice(0, 5), [store.wordStats]);
  const weakWords = useMemo(() => store.getWeakWords(5), [store.wordStats]);
  const dailyGoal = useMemo(
    () => store.getDailyGoalStatus(),
    [store.sessions, store.settings.dailyGoal],
  );

  const [draftName, setDraftName] = useState(store.name || '');
  const [isEditingName, setIsEditingName] = useState(false);
  const [showAvatars, setShowAvatars] = useState(false);
  const [showUtilities, setShowUtilities] = useState(false);
  const [importText, setImportText] = useState('');

  const joinedDate = useMemo(
    () => new Date(store.createdAt).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' }),
    [store.createdAt],
  );

  const hours = Math.floor(store.totalTimeSpent / 3600);
  const minutes = Math.floor((store.totalTimeSpent % 3600) / 60);
  const timeStr = hours > 0 ? `${hours}h ${minutes}min` : `${minutes}min`;

  const completion = useMemo(() => {
    const totalLessons = LESSONS.length;
    const completedLessons = store.lessonsCompleted.length;
    const pct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
    return { totalLessons, completedLessons, pct };
  }, [store.lessonsCompleted]);

  const moduleCompletion = useMemo(() => {
    const modules = getModules();
    const completedModules = modules.filter((module) =>
      module.lessons.every((lesson) => store.lessonsCompleted.includes(lesson.id)),
    ).length;

    return {
      totalModules: modules.length,
      completedModules,
    };
  }, [store.lessonsCompleted]);

  const sessionsThisWeek = useMemo(() => {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 6);
    return store.sessions.filter((session) => new Date(session.date) >= weekAgo);
  }, [store.sessions]);

  const activeDaysThisWeek = useMemo(() => {
    return new Set(sessionsThisWeek.map((session) => session.date.split('T')[0])).size;
  }, [sessionsThisWeek]);

  const heatmap = useMemo(() => {
    const days: { date: string; count: number }[] = [];
    for (let i = 29; i >= 0; i -= 1) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const count = store.sessions.filter((session) => session.date.startsWith(dateStr)).length;
      days.push({ date: dateStr, count });
    }
    return days;
  }, [store.sessions]);

  const focusLessons = useMemo(() => {
    const sourceWords = reviewWords.length > 0 ? reviewWords : weakWords;
    const grouped = new Map<string, {
      lessonId: string | null;
      title: string;
      emoji: string;
      count: number;
    }>();

    sourceWords.forEach((word) => {
      const lessonId = word.lessonId || word.lastLessonId || null;
      const lessonSummary = lessonId ? LESSONS.find((lesson) => lesson.id === lessonId) : null;
      const key = lessonId || `${word.lessonTitle || word.lastLessonTitle || 'sem-aula'}`;
      const existing = grouped.get(key);

      if (existing) {
        existing.count += 1;
        return;
      }

      grouped.set(key, {
        lessonId,
        title: lessonSummary?.title || word.lessonTitle || word.lastLessonTitle || 'Sem aula vinculada',
        emoji: lessonSummary?.emoji || word.emoji || '📚',
        count: 1,
      });
    });

    return [...grouped.values()]
      .sort((a, b) => b.count - a.count || a.title.localeCompare(b.title))
      .slice(0, 4);
  }, [reviewWords, weakWords]);

  const nextLesson = useMemo(
    () => LESSONS.find((lesson) => !store.lessonsCompleted.includes(lesson.id)) || null,
    [store.lessonsCompleted],
  );

  const xpProgress = nextLevel ? (nextLevel.progress ?? 0) : 100;
  const ringCircumference = 2 * Math.PI * 52;
  const ringOffset = ringCircumference - (ringCircumference * xpProgress) / 100;

  const profileMood = store.streak >= 7
    ? 'Você está mantendo um ritmo forte.'
    : store.streak >= 3
      ? 'Você está criando constância.'
      : completion.completedLessons > 0
        ? 'Seu progresso já está aparecendo.'
        : 'Seu progresso está começando agora.';

  const saveName = () => {
    const trimmed = draftName.trim();
    store.setProfile({ name: trimmed });
    setDraftName(trimmed);
    setIsEditingName(false);
  };

  const exportData = () => {
    const data = JSON.stringify(store.exportForSync(), null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `unlock2026-backup-${new Date().toISOString().split('T')[0]}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const importData = () => {
    try {
      store.importFromSync(JSON.parse(importText));
      setImportText('');
      setShowUtilities(false);
      window.alert('✅ Dados importados');
    } catch {
      window.alert('❌ JSON inválido');
    }
  };

  return (
    <div className="relative z-10 min-h-screen pb-20">
      <Header title="👤 Perfil" backTo="/" />

      <div className="max-w-4xl mx-auto px-5 space-y-6">
        <div className="unlock-card unlock-card-purple p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
              <button
                onClick={() => setShowAvatars((current) => !current)}
                style={{
                  fontSize: '4rem',
                  lineHeight: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '2px solid rgba(255,255,255,0.08)',
                  borderRadius: 22,
                  padding: '14px 18px',
                  cursor: 'pointer',
                  boxShadow: '0 0 24px rgba(155,109,255,0.15)',
                }}
              >
                {store.avatar}
              </button>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                  <span
                    style={{
                      padding: '5px 10px',
                      borderRadius: 999,
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'var(--gray)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                    }}
                  >
                    desde {joinedDate}
                  </span>
                  <span
                    style={{
                      padding: '5px 10px',
                      borderRadius: 999,
                      border: '1px solid rgba(255,215,0,0.25)',
                      color: 'var(--gold)',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                    }}
                  >
                    {store.plan}
                  </span>
                </div>

                {isEditingName ? (
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                    <input
                      value={draftName}
                      onChange={(event) => setDraftName(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') saveName();
                        if (event.key === 'Escape') {
                          setDraftName(store.name || '');
                          setIsEditingName(false);
                        }
                      }}
                      placeholder="Seu nome"
                      style={{
                        minWidth: 220,
                        padding: '10px 12px',
                        borderRadius: 12,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        color: 'white',
                        outline: 'none',
                      }}
                    />
                    <button onClick={saveName} style={smallButton('var(--green)', 'rgba(0,255,136,0.12)')}>
                      Salvar
                    </button>
                    <button
                      onClick={() => {
                        setDraftName(store.name || '');
                        setIsEditingName(false);
                      }}
                      style={smallButton('var(--gray)', 'rgba(255,255,255,0.06)')}
                    >
                      Cancelar
                    </button>
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h2 style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--white)', margin: 0 }}>
                      {store.name || 'Estudante'}
                    </h2>
                    <button onClick={() => setIsEditingName(true)} style={ghostButton()}>
                      Editar nome
                    </button>
                  </div>
                )}

                <div style={{ fontSize: '1rem', color: 'var(--gold)', fontFamily: 'Orbitron', fontWeight: 800 }}>
                  {levelInfo.emoji} {levelInfo.title} • Nível {store.level}
                </div>
                <p style={{ color: 'var(--gray)', marginTop: 10, maxWidth: 520, lineHeight: 1.6 }}>
                  {profileMood}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 md:max-w-[280px]">
              <ProfilePill emoji="🔥" value={`${store.streak}`} label="streak atual" color="var(--red)" />
              <ProfilePill emoji="✅" value={`${wordCounts.mastered}`} label="palavras dominadas" color="var(--green)" />
              <ProfilePill emoji="📚" value={`${completion.completedLessons}`} label="aulas completas" color="var(--cyan)" />
              <ProfilePill emoji="🏆" value={`${unlockedAchievements.length}`} label="conquistas" color="var(--gold)" />
            </div>
          </div>

          {showAvatars && (
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginBottom: 10 }}>
                Escolha um avatar.
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {AVATARS.map((avatar) => (
                  <button
                    key={avatar}
                    onClick={() => store.setProfile({ avatar })}
                    style={{
                      fontSize: '1.7rem',
                      background: avatar === store.avatar ? 'rgba(255,215,0,0.18)' : 'rgba(255,255,255,0.05)',
                      border: avatar === store.avatar ? '2px solid var(--gold)' : '2px solid transparent',
                      borderRadius: 12,
                      padding: '6px 10px',
                      cursor: 'pointer',
                    }}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="unlock-card p-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <svg width="124" height="124" viewBox="0 0 124 124" style={{ flexShrink: 0 }}>
                <circle cx="62" cy="62" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10" />
                <circle
                  cx="62"
                  cy="62"
                  r="52"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="10"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={ringOffset}
                  strokeLinecap="round"
                  transform="rotate(-90 62 62)"
                  style={{ transition: 'stroke-dashoffset 0.5s' }}
                />
                <text x="62" y="58" textAnchor="middle" fill="var(--gold)" fontFamily="Orbitron" fontSize="18" fontWeight="700">
                  {store.xp}
                </text>
                <text x="62" y="79" textAnchor="middle" fill="var(--gray)" fontSize="11">
                  XP
                </text>
              </svg>

              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--gold)', marginBottom: 6 }}>
                  Progresso
                </div>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, color: 'var(--white)', marginBottom: 10 }}>
                  Seu avanço até agora
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 14px' }}>
                  <JourneyMetric label="Curso" value={`${completion.pct}%`} />
                  <JourneyMetric label="Módulos fechados" value={`${moduleCompletion.completedModules}/${moduleCompletion.totalModules}`} />
                  <JourneyMetric label="Tempo investido" value={timeStr} />
                  <JourneyMetric label="Próximo nível" value={nextLevel ? `${nextLevel.needed} XP` : 'MAX'} />
                </div>
              </div>
            </div>
          </div>

          <div className="unlock-card unlock-card-cyan p-6">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              <div>
                <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: 6 }}>
                  Revisão
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: 'var(--white)', marginBottom: 8 }}>
                  {reviewWords.length > 0 ? 'O que você vai revisar agora' : 'Seu próximo passo'}
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--gray)', lineHeight: 1.6, margin: 0 }}>
                  {reviewWords.length > 0
                    ? `Escolha uma aula abaixo para revisar as frases pendentes dela.`
                    : nextLesson
                      ? `Próxima aula: ${nextLesson.title}.`
                      : 'Vale fazer um treino livre agora.'}
                </p>
              </div>
              <Link to="/dashboard" style={smallLinkButton()}>
                Ver dashboard
              </Link>
            </div>

            {reviewWords.length > 0 && (
              <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
                {focusLessons.map((lesson) => {
                  const content = (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <div>
                        <div style={{ color: 'var(--white)', fontSize: '0.92rem', fontWeight: 800 }}>
                          {lesson.emoji} {lesson.title}
                        </div>
                        <div style={{ color: 'var(--gray)', fontSize: '0.78rem', marginTop: 3 }}>
                          {lesson.count > 1 ? `${lesson.count} frases pendentes` : '1 frase pendente'}
                        </div>
                      </div>
                      <div style={{ color: 'var(--cyan)', fontSize: '0.76rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
                        Abrir revisão →
                      </div>
                    </div>
                  );

                  const styles = {
                    padding: '12px 14px',
                    borderRadius: 14,
                    border: '1px solid rgba(0,191,255,0.24)',
                    background: 'rgba(0,191,255,0.09)',
                    textDecoration: 'none',
                  } as const;

                  return lesson.lessonId ? (
                    <Link
                      key={lesson.lessonId}
                      to={`/warmup/review/${lesson.lessonId}?returnTo=/profile`}
                      style={styles}
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={lesson.title} style={styles}>
                      {content}
                    </div>
                  );
                })}
              </div>
            )}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
              {reviewWords.length > 0 ? (
                <Link to="/daily-drill" style={ctaButton('var(--cyan)', 'rgba(0,191,255,0.12)')}>
                  Revisar tudo no Daily Drill
                </Link>
              ) : nextLesson ? (
                <Link to={`/lesson/${nextLesson.id}?returnTo=/profile`} style={ctaButton('var(--gold)', 'rgba(255,215,0,0.12)')}>
                  Ir para próxima aula
                </Link>
              ) : (
                <Link to="/quickplay" style={ctaButton('var(--green)', 'rgba(0,255,136,0.12)')}>
                  Entrar no Quick Play
                </Link>
              )}
              <Link to="/dashboard" style={ctaButton('var(--white)', 'rgba(255,255,255,0.06)')}>
                Abrir visão completa
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="unlock-card p-6">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--green)' }}>Ritmo</div>
                <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--white)' }}>
                  Sua atividade nos últimos 30 dias
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Orbitron', color: 'var(--green)', fontWeight: 800 }}>{activeDaysThisWeek} dias</div>
                <div style={{ color: 'var(--gray)', fontSize: '0.72rem' }}>ativos nesta semana</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 5 }}>
              {heatmap.map((day, index) => {
                const intensity = day.count === 0 ? 0 : day.count <= 1 ? 1 : day.count <= 3 ? 2 : 3;
                const background = [
                  'rgba(255,255,255,0.05)',
                  'rgba(0,255,136,0.18)',
                  'rgba(0,255,136,0.4)',
                  'rgba(0,255,136,0.75)',
                ][intensity];

                return (
                  <div
                    key={`${day.date}-${index}`}
                    title={`${day.date}: ${day.count} sessões`}
                    style={{
                      aspectRatio: '1',
                      borderRadius: 6,
                      background,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.58rem',
                      color: 'var(--gray)',
                    }}
                  >
                    {new Date(day.date).getDate()}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, gap: 12, flexWrap: 'wrap' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)' }}>
                {sessionsThisWeek.length} sessões nos últimos 7 dias
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', color: 'var(--gray)' }}>
                <span>menos</span>
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    style={{
                      width: 12,
                      height: 12,
                      borderRadius: 3,
                      background: [
                        'rgba(255,255,255,0.05)',
                        'rgba(0,255,136,0.18)',
                        'rgba(0,255,136,0.4)',
                        'rgba(0,255,136,0.75)',
                      ][index],
                    }}
                  />
                ))}
                <span>mais</span>
              </div>
            </div>
          </div>

          <div className="unlock-card p-6">
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--gold)', marginBottom: 6 }}>
              Coleção
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--white)', marginBottom: 10 }}>
              Seus destaques
            </div>

            <div className="grid grid-cols-3 gap-3">
              <HighlightCard emoji="🔥" value={`${store.longestStreak}d`} label="melhor streak" />
              <HighlightCard emoji="⭐" value={`${unlockedAchievements.length}`} label="desbloqueadas" />
              <HighlightCard emoji="❤️" value={`${store.favorites.length}`} label="favoritas" />
            </div>

            <div style={{ marginTop: 16 }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--gray)', marginBottom: 10 }}>Conquistas em destaque</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {unlockedAchievements.slice(0, 6).map((achievement) => (
                  <span
                    key={achievement.id}
                    title={achievement.desc}
                    style={{
                      padding: '9px 12px',
                      borderRadius: 12,
                      background: 'rgba(255,215,0,0.08)',
                      border: '1px solid rgba(255,215,0,0.25)',
                      color: 'var(--gold)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                    }}
                  >
                    {achievement.emoji} {achievement.title}
                  </span>
                ))}
                {unlockedAchievements.length === 0 && (
                  <div style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>
                    Sua coleção começa a aparecer conforme você estuda e joga.
                  </div>
                )}
              </div>
            </div>

            {nextAchievement && (
              <div
                style={{
                  marginTop: 16,
                  padding: '14px 16px',
                  borderRadius: 14,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div style={{ fontSize: '0.74rem', color: 'var(--gray)', marginBottom: 5 }}>Próxima conquista</div>
                <div style={{ fontWeight: 800, color: 'var(--white)' }}>
                  {nextAchievement.emoji} {nextAchievement.title}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--gray)', marginTop: 5 }}>
                  {nextAchievement.desc}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="unlock-card p-6">
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--cyan)', marginBottom: 6 }}>
              Preferências
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--white)', marginBottom: 12 }}>
              Ajustes do app
            </div>

            <div style={{ marginBottom: 18 }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginBottom: 10 }}>Meta diária</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {DAILY_GOALS.map((goal) => (
                  <button
                    key={goal}
                    onClick={() => store.updateSettings({ dailyGoal: goal })}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 999,
                      border: goal === store.settings.dailyGoal ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.08)',
                      background: goal === store.settings.dailyGoal ? 'rgba(255,215,0,0.12)' : 'rgba(255,255,255,0.03)',
                      color: goal === store.settings.dailyGoal ? 'var(--gold)' : 'var(--white)',
                      fontWeight: 800,
                      cursor: 'pointer',
                    }}
                  >
                    {goal} min
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <ToggleRow
                label="Efeitos sonoros"
                value={store.settings.soundEffects}
                onToggle={() => store.updateSettings({ soundEffects: !store.settings.soundEffects })}
              />
              <ToggleRow
                label="Notificações"
                value={store.settings.notifications}
                onToggle={() => store.updateSettings({ notifications: !store.settings.notifications })}
              />
            </div>

            <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginBottom: 10 }}>Velocidade da voz</div>
              <SpeedControl />
            </div>
          </div>

          <div className="unlock-card p-6">
            <div style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--green)', marginBottom: 6 }}>
              Utilidades
            </div>
            <div style={{ fontSize: '1.15rem', fontWeight: 900, color: 'var(--white)', marginBottom: 10 }}>
              Backup de dados
            </div>
            <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.55, marginBottom: 14 }}>
              Exporte ou importe seu progresso quando precisar.
            </p>

            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button onClick={exportData} style={ctaButton('var(--green)', 'rgba(0,255,136,0.12)')}>
                Exportar backup
              </button>
              <button
                onClick={() => setShowUtilities((current) => !current)}
                style={ctaButton('var(--cyan)', 'rgba(0,191,255,0.12)')}
              >
                {showUtilities ? 'Fechar importação' : 'Importar backup'}
              </button>
            </div>

            {showUtilities && (
              <div style={{ marginTop: 14 }}>
                <textarea
                  value={importText}
                  onChange={(event) => setImportText(event.target.value)}
                  placeholder="Cole aqui o JSON do backup"
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 12,
                    padding: 12,
                    color: 'white',
                    fontSize: '0.84rem',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
                <button onClick={importData} style={{ ...ctaButton('var(--gold)', 'rgba(255,215,0,0.12)'), marginTop: 10 }}>
                  Confirmar importação
                </button>
              </div>
            )}

            <div style={{ marginTop: 20, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <button
                onClick={() => {
                  if (window.confirm('⚠️ Isso vai apagar TODO seu progresso. Tem certeza?')) {
                    store.reset();
                  }
                }}
                style={{
                  border: 'none',
                  background: 'none',
                  color: 'rgba(255,68,68,0.85)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                Resetar progresso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfilePill({
  emoji,
  value,
  label,
  color,
}: {
  emoji: string;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div
      style={{
        minWidth: 120,
        padding: '10px 12px',
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ fontSize: '1rem', marginBottom: 3 }}>{emoji}</div>
      <div style={{ color, fontFamily: 'Orbitron', fontWeight: 800 }}>{value}</div>
      <div style={{ fontSize: '0.68rem', color: 'var(--gray)' }}>{label}</div>
    </div>
  );
}

function JourneyMetric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: '0.68rem', color: 'var(--gray)', marginBottom: 3 }}>{label}</div>
      <div style={{ color: 'var(--white)', fontWeight: 800 }}>{value}</div>
    </div>
  );
}

function HighlightCard({
  emoji,
  value,
  label,
}: {
  emoji: string;
  value: string;
  label: string;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        padding: '12px 10px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '1.25rem', marginBottom: 4 }}>{emoji}</div>
      <div style={{ fontFamily: 'Orbitron', fontSize: '0.95rem', fontWeight: 800, color: 'var(--gold)' }}>{value}</div>
      <div style={{ fontSize: '0.68rem', color: 'var(--gray)', marginTop: 2 }}>{label}</div>
    </div>
  );
}

function ToggleRow({
  label,
  value,
  onToggle,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      style={{
        width: '100%',
        padding: '12px 14px',
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(255,255,255,0.03)',
        color: 'var(--white)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontWeight: 700 }}>{label}</span>
      <span
        style={{
          padding: '6px 10px',
          borderRadius: 999,
          background: value ? 'rgba(0,255,136,0.14)' : 'rgba(255,255,255,0.06)',
          color: value ? 'var(--green)' : 'var(--gray)',
          fontSize: '0.74rem',
          fontWeight: 800,
        }}
      >
        {value ? 'ATIVADO' : 'DESATIVADO'}
      </span>
    </button>
  );
}

function ghostButton() {
  return {
    padding: '7px 10px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.04)',
    color: 'var(--gray)',
    fontSize: '0.74rem',
    fontWeight: 700,
    cursor: 'pointer',
  } as const;
}

function smallButton(color: string, background: string) {
  return {
    padding: '10px 12px',
    borderRadius: 12,
    border: `1px solid ${color}`,
    background,
    color,
    fontWeight: 800,
    cursor: 'pointer',
  } as const;
}

function ctaButton(color: string, background: string) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '11px 14px',
    borderRadius: 12,
    border: `2px solid ${color}`,
    background,
    color,
    textDecoration: 'none',
    fontWeight: 800,
    fontSize: '0.82rem',
    cursor: 'pointer',
  } as const;
}

function smallLinkButton() {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px 10px',
    borderRadius: 999,
    border: '1px solid rgba(255,255,255,0.1)',
    background: 'rgba(255,255,255,0.04)',
    color: 'var(--gray)',
    textDecoration: 'none',
    fontSize: '0.74rem',
    fontWeight: 700,
  } as const;
}
