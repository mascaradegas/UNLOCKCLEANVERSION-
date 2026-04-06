import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS, getModules } from '@/data/lessons';
import { BottomNav } from '@/components/layout/BottomNav';
import type { Lesson, Module } from '@unlock2026/shared';

type Filter = 'all' | 'incomplete' | 'complete' | 'favorites' | 'review';

export function ModuleBrowser() {
  const { lessonsCompleted, favorites } = useProgressStore();
  const modules = getModules();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Filter>('incomplete');

  const allLessons = LESSONS;
  const incompleteCount = allLessons.filter(l => !lessonsCompleted.includes(l.id)).length;
  const completeCount = allLessons.filter(l => lessonsCompleted.includes(l.id)).length;
  const favCount = allLessons.filter(l => (favorites || []).includes(l.id)).length;

  return (
    <div className="relative z-10 min-h-screen">
      {/* ═══ HEADER ═══ */}
      <header className="appbar" style={{ borderBottomColor: 'var(--cyan)' }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: '1.2rem' }}>←</span>
          <span className="logo-text" style={{ fontSize: '1rem' }}>UNLOCK</span>
        </Link>
        <div style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, fontSize: '1rem', color: 'var(--cyan)', textAlign: 'center', textShadow: '0 0 15px rgba(0,191,255,0.5)' }}>
          📚 MÓDULOS
        </div>
        <div style={{ width: 60 }} />
      </header>

      <main style={{ paddingTop: 80, position: 'relative', zIndex: 2 }}>
        {/* ═══ SEARCH + FILTERS ═══ */}
        <section className="search-section">
          <div className="search-box">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Buscar aulas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: 'var(--gray)', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
            )}
          </div>
          <div className="filter-tabs">
            {([
              ['all', `📚 Todas (${allLessons.length})`],
              ['incomplete', `⏳ Pendentes (${incompleteCount})`],
              ['complete', `✅ Concluídas (${completeCount})`],
              ['favorites', `⭐ Favoritas (${favCount})`],
            ] as [Filter, string][]).map(([key, label]) => (
              <button
                key={key}
                className={`filter-tab ${filter === key ? 'active' : ''}`}
                onClick={() => setFilter(key)}
              >
                {label}
              </button>
            ))}
          </div>
        </section>

        {/* ═══ MODULES ═══ */}
        {modules.map((mod) => (
          <ModuleSection
            key={mod.number}
            module={mod}
            completedIds={lessonsCompleted}
            favoriteIds={favorites || []}
            search={search}
            filter={filter}
          />
        ))}

        <div style={{ height: 90 }} />
      </main>

      <BottomNav active="modules" />
    </div>
  );
}

// ─── Module Section ──────────────────────────────────────────────────────

function ModuleSection({ module: mod, completedIds, favoriteIds, search, filter }: {
  module: Module;
  completedIds: string[];
  favoriteIds: string[];
  search: string;
  filter: Filter;
}) {
  const filteredLessons = useMemo(() => {
    let lessons = mod.lessons;
    if (search) {
      const q = search.toLowerCase();
      lessons = lessons.filter((l) =>
        l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q)
      );
    }
    switch (filter) {
      case 'complete': lessons = lessons.filter((l) => completedIds.includes(l.id)); break;
      case 'incomplete': lessons = lessons.filter((l) => !completedIds.includes(l.id)); break;
      case 'favorites': lessons = lessons.filter((l) => favoriteIds.includes(l.id)); break;
      default: break;
    }
    return lessons;
  }, [mod.lessons, search, filter, completedIds, favoriteIds]);

  if (filteredLessons.length === 0) return null;

  const completed = mod.lessons.filter((l) => completedIds.includes(l.id)).length;
  const total = mod.lessons.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <section className="module-section">
      <div className="module-header">
        <span className="module-number">MÓDULO {mod.number}</span>
        <span className="module-title">{mod.name}</span>
        <div className="module-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
          <span className="progress-text">{percent}%</span>
        </div>
      </div>
      <div className="lessons-grid">
        {filteredLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} isComplete={completedIds.includes(lesson.id)} />
        ))}
      </div>
    </section>
  );
}

// ─── Lesson Card ─────────────────────────────────────────────────────────

function LessonCard({ lesson, isComplete }: { lesson: Lesson; isComplete: boolean }) {
  return (
    <Link
      to={`/lesson/${lesson.id}`}
      className={`lesson-card ${isComplete ? 'done' : ''}`}
    >
      <div className={`status ${isComplete ? 'done' : ''}`}>
        <span style={{ fontSize: '0.55rem', lineHeight: 1 }}>{isComplete ? '✅' : '▶'}</span>
      </div>
      <span className="emoji">{lesson.emoji}</span>
      <div className="title">{lesson.title}</div>
      <div className="desc">{lesson.description}</div>

      <div className="options-overlay">
        <span className="overlay-btn review" onClick={(e) => { e.preventDefault(); window.location.href = `/lesson/${lesson.id}`; }}>
          📖 REVISAR
        </span>
        <span className="overlay-btn play" onClick={(e) => { e.preventDefault(); window.location.href = `/game/select/${lesson.id}`; }}>
          🎮 JOGAR
        </span>
      </div>
    </Link>
  );
}
