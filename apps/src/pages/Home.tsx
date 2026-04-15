import { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS } from '@/data/lessons';
import { LEVELS } from '@unlock2026/shared';
import { BottomNav } from '@/components/layout/BottomNav';

export function Home() {
  const { xp, level, streak, lessonsCompleted } = useProgressStore();
  const navigate = useNavigate();

  const totalLessons = LESSONS.length;
  const completedCount = lessonsCompleted.length;

  // Random lesson for "Treino do Dia" — use date as seed for consistent daily pick
  const todayLesson = useMemo(() => {
    const today = new Date();
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const idx = seed % LESSONS.length;
    return LESSONS[idx];
  }, []);

  const goToDrill = () => {
    navigate(`/daily-drill?lessonId=${todayLesson.id}`);
  };

  const goToGame = (mode: string) => {
    navigate(`/game/${mode}/${todayLesson.id}?returnTo=/`);
  };

  return (
    <div className="relative z-10 min-h-screen">

      {/* ═══ TOPBAR ═══ */}
      <header className="v4-appbar">
        <div className="h5-brand">
          <span className="h5-brand-icon">🗣️🔓</span>
          <span className="h5-brand-name">UNLOCK</span>
        </div>
        <Link to="/dashboard" className="h5-chips" style={{ textDecoration: 'none' }}>
          <div className="h5-chip"><span>🔥</span> {streak}</div>
          <div className="h5-chip"><span>⭐</span> {xp}</div>
          <div className="h5-chip"><span>🎖️</span> Lv.{level}</div>
        </Link>
      </header>

      {/* ═══ MAIN ═══ */}
      <main className="v4-content">

        {/* ── HERO: UNLOCK identity ── */}
        <section className="h5-hero">
          <div className="h5-hero-lock">🗣️🔓</div>
          <h1 className="h5-hero-title">
            UNLOCK
            <span className="h5-hero-year">2 0 2 6</span>
          </h1>
        </section>

        {/* ── TREINO DO DIA (random lesson) ── */}
        <section className="h5-sit" style={{ margin: '0 var(--v4-px)' }}>
          <div className="h5-sit-inner">
            <div className="h5-sit-tag">TREINO DO DIA</div>
            <div className="h5-sit-emoji">{todayLesson.emoji}</div>
            <h2 className="h5-sit-title">{todayLesson.title}</h2>
            <p className="h5-sit-desc">{todayLesson.description}</p>
          </div>
          <div className="h5-cta-wrap">
            <button className="h5-cta" onClick={goToDrill}>
              <span>▶</span> COMEÇAR TREINO
            </button>
          </div>
        </section>

        {/* ── GAME MODES (direct play with today's lesson) ── */}
        <div className="h5-label">TREINO DIRETO</div>
        <section className="h5-games">
          <div className="h5-game" onClick={() => goToGame('word-drop')}>
            <div className="h5-game-icon">🧱</div>
            <div className="h5-game-name">WORD DROP</div>
            <div className="h5-game-desc">Rápido</div>
          </div>
          <div className="h5-game" onClick={() => goToGame('word-match')}>
            <div className="h5-game-icon">🎯</div>
            <div className="h5-game-name">WORD MATCH</div>
            <div className="h5-game-desc">Associação</div>
          </div>
          <div className="h5-game" onClick={() => goToGame('word-stack')}>
            <div className="h5-game-icon">⚡</div>
            <div className="h5-game-name">WORD STACK</div>
            <div className="h5-game-desc">Monta frase</div>
          </div>
        </section>

        {/* ── REVISÃO full row ── */}
        <div className="h5-rev">
          <Link to="/quickplay" className="h5-rev-btn" style={{ textDecoration: 'none' }}>
            🔁 REVISÃO — PALAVRAS FRACAS
          </Link>
        </div>

        {/* ── WHATSAPP ── */}
        <div className="h5-wa">
          <div className="h5-wa-icon">💬</div>
          <div style={{ flex: 1 }}>
            <div className="h5-wa-title">TREINO REAL NO WHATSAPP</div>
            <div className="h5-wa-sub">Responda áudios e treine fala.</div>
          </div>
          <div style={{ color: 'var(--cyan)', opacity: 0.4, fontSize: '1rem' }}>›</div>
        </div>

        {/* ── STREAK BAR ── */}
        <div className="h5-streak">
          <div className="h5-sk">🔥 <b>{streak}</b> dias</div>
          <div className="h5-sk">📚 <b>{completedCount}</b> situações</div>
          <div className="h5-sk">🎖️ Lv.<b>{level}</b></div>
        </div>

        <div style={{ height: 80 }} />
      </main>

      <BottomNav active="home" />
    </div>
  );
}
