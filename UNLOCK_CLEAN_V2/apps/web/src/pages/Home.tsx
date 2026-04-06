import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS, getModules } from '@/data/lessons';
import { LEVELS, getXPForNextLevel } from '@unlock2026/shared';
import { BottomNav } from '@/components/layout/BottomNav';

export function Home() {
  const { xp, level, streak, lessonsCompleted } = useProgressStore();
  const modules = getModules();

  const levelInfo = LEVELS[level - 1] || LEVELS[0];
  const nextLevelInfo = getXPForNextLevel(xp);
  const xpProgress = nextLevelInfo ? nextLevelInfo.progress : 100;

  const totalLessons = LESSONS.length;
  const completedCount = lessonsCompleted.length;
  const isFirstTime = completedCount === 0;

  // Today's mission: next uncompleted lesson
  const todayLesson = useMemo(() => {
    return LESSONS.find((l) => !lessonsCompleted.includes(l.id)) || LESSONS[0];
  }, [lessonsCompleted]);

  const todayModule = useMemo(() => {
    return modules.find((m) => m.number === todayLesson.module);
  }, [todayLesson, modules]);

  // Check if lesson was started (has slide progress)
  const lessonStarted = useMemo(() => {
    const store = useProgressStore.getState();
    return store.getSlideProgress(todayLesson.id) > 0;
  }, [todayLesson.id]);

  // Weekly live
  const weeklyLive = useMemo(() => {
    const now = new Date();
    const d = (6 - now.getDay() + 7) % 7;
    const tag = d === 0 ? 'HOJE' : d === 1 ? 'AMANHÃ' : 'SÁB';
    return { day: tag, time: '10:00 AM', topic: todayLesson.title };
  }, [todayLesson]);

  return (
    <div className="relative z-10 min-h-screen">

      {/* ═══ APPBAR ═══ */}
      <header className="v4-appbar">
        <div className="v4-app-logo">
          <span className="v4-logo-lock">🔓</span>
          <span className="v4-logo-name">UNLOCK 2026</span>
        </div>
        <Link to="/dashboard" className="v4-app-chips" style={{ textDecoration: 'none' }}>
          <div className="v4-ch v4-lv">
            <span>{levelInfo?.emoji || '🌱'}</span>
            <span className="v4-ch-v v4-gold">Lv.{level}</span>
            <div className="v4-ch-bar"><div className="v4-ch-fill" style={{ width: `${Math.min(xpProgress, 100)}%` }} /></div>
          </div>
          <div className="v4-ch v4-st"><span>🔥</span><span className="v4-ch-v v4-orange">{streak}</span></div>
          <div className="v4-ch v4-xpc"><span>⭐</span><span className="v4-ch-v v4-gold">{xp}</span></div>
        </Link>
      </header>

      {/* ═══ MAIN ═══ */}
      <main className="v4-content">

        {/* ── ONBOARDING BANNER (first time only) ── */}
        {isFirstTime && (
          <section className="v4-onboarding">
            <div className="v4-onboard-card">
              <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>👋</div>
              <div className="v4-onboard-title">Bem-vindo ao UNLOCK!</div>
              <div className="v4-onboard-sub">Sua primeira aula está pronta. Comece agora!</div>
              <Link to={`/lesson/${todayLesson.id}`} className="v4-onboard-btn" style={{ textDecoration: 'none' }}>
                ▶ INICIAR PRIMEIRA AULA
              </Link>
            </div>
          </section>
        )}

        {/* ── HERO ── */}
        {!isFirstTime && (
          <section className="v4-hero">
            <div className="v4-hero-icon">🗣️🔓</div>
            <h1 className="v4-hero-h">
              <span className="v4-h-unlock">UNLOCK</span>
              <span className="v4-h-year">2 0 2 6</span>
            </h1>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="v4-cta-section">
          <Link to="/daily-drill" className="v4-mega-btn" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="v4-mega-sweep" />
            <div className="v4-mega-content">
              <div className="v4-mega-play"><span>▶</span></div>
              <div>
                <div className="v4-mega-label">TREINO DO DIA</div>
                <div className="v4-mega-sub">~15 min</div>
              </div>
            </div>
          </Link>
        </section>

        {/* ── MOMENTUM ── */}
        <section className="v4-momentum">
          <div className="v4-mo-strip">
            <span>📚 <b>{completedCount}</b>/{totalLessons}</span>
            <span className="v4-mo-d">·</span>
            <span>🎖️ Lv.<b>{level}</b></span>
            <span className="v4-mo-d">·</span>
            <span>🔥 <b>{streak}</b> dias</span>
          </div>
        </section>

        {/* ── MISSION ── */}
        <section className="v4-mission-section">
          <Link to={`/lesson/${todayLesson.id}`} className="v4-mi-card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div className="v4-mi-top">
              <div className="v4-mi-tag"><span className="v4-mi-dot" />MISSÃO DE HOJE</div>
              <div className="v4-mi-time">⏱️ ~15 min</div>
            </div>
            <div className="v4-mi-body">
              <span className="v4-mi-emoji">{todayLesson.emoji}</span>
              <div className="v4-mi-info">
                <div className="v4-mi-mod">M{todayLesson.module} · {todayModule?.name?.toUpperCase() || ''}</div>
                <div className="v4-mi-title">{todayLesson.title}</div>
              </div>
              <div className="v4-mi-go-btn">
                {lessonStarted ? '↩ CONTINUAR' : '▶ COMEÇAR'}
              </div>
            </div>
          </Link>
        </section>

        {/* ── SECONDARY: only 2 buttons ── */}
        <section className="v4-tools-section">
          <div className="v4-tools-row" style={{ gridTemplateColumns: '1fr 1fr', display: 'grid' }}>
            <Link to="/quickplay" className="v4-tbtn v4-t-cyan" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="v4-t-ico">🎮</span><span className="v4-t-lbl">JOGAR LIVRE</span>
            </Link>
            <Link to="/modules" className="v4-tbtn v4-t-purple" style={{ textDecoration: 'none', color: 'inherit' }}>
              <span className="v4-t-ico">📚</span><span className="v4-t-lbl">MÓDULOS</span>
            </Link>
          </div>
        </section>

        {/* ── LIVE ── */}
        <section className="v4-live-section">
          <div className="v4-lv-bar">
            <span className="v4-lv-dot" />
            <span className="v4-lv-when">{weeklyLive.day} Live · {weeklyLive.time}</span>
            <span className="v4-lv-topic">{weeklyLive.topic}</span>
          </div>
        </section>

        <div style={{ height: 80 }} />
      </main>

      <BottomNav active="home" />
    </div>
  );
}
