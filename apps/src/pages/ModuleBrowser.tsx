import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useProgressStore } from '@/stores/progressStore';
import { LESSONS, getModules } from '@/data/lessons';
import { BottomNav } from '@/components/layout/BottomNav';

type Filter = 'all' | 'incomplete' | 'complete' | 'favorites';

export function ModuleBrowser() {
  const { lessonsCompleted, favorites } = useProgressStore();
  const modules = getModules();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const allLessons = LESSONS;
  const incompleteCount = allLessons.filter(l => !lessonsCompleted.includes(l.id)).length;
  const completeCount = allLessons.filter(l => lessonsCompleted.includes(l.id)).length;
  const favCount = allLessons.filter(l => (favorites || []).includes(l.id)).length;

  const expandedLesson = expandedId ? LESSONS.find(l => l.id === expandedId) : null;

  useEffect(() => {
    if (!expandedId) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedId(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expandedId]);

  return (
    <div className="relative z-10 min-h-screen">
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
        <section className="search-section">
          <div className="search-box">
            <span>🔍</span>
            <input type="text" placeholder="Buscar aulas..." value={search} onChange={(e) => setSearch(e.target.value)} />
            {search && <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', color: 'var(--gray)', cursor: 'pointer', fontSize: '1rem' }}>✕</button>}
          </div>
          <div className="filter-tabs">
            {([
              ['all', `📚 Todas (${allLessons.length})`],
              ['incomplete', `⏳ Pendentes (${incompleteCount})`],
              ['complete', `✅ Concluídas (${completeCount})`],
              ['favorites', `⭐ Favoritas (${favCount})`],
            ] as [Filter, string][]).map(([key, label]) => (
              <button key={key} className={`filter-tab ${filter === key ? 'active' : ''}`} onClick={() => setFilter(key)}>{label}</button>
            ))}
          </div>
        </section>

        {modules.map((mod) => {
          let lessons = mod.lessons;
          if (search) {
            const q = search.toLowerCase();
            lessons = lessons.filter((l) => l.title.toLowerCase().includes(q) || l.description.toLowerCase().includes(q));
          }
          switch (filter) {
            case 'complete': lessons = lessons.filter((l) => lessonsCompleted.includes(l.id)); break;
            case 'incomplete': lessons = lessons.filter((l) => !lessonsCompleted.includes(l.id)); break;
            case 'favorites': lessons = lessons.filter((l) => (favorites || []).includes(l.id)); break;
          }
          if (lessons.length === 0) return null;

          const completed = mod.lessons.filter((l) => lessonsCompleted.includes(l.id)).length;
          const total = mod.lessons.length;
          const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <section className="module-section" key={mod.number}>
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
                {lessons.map((lesson) => {
                  const isComplete = lessonsCompleted.includes(lesson.id);
                  const isExpanded = expandedId === lesson.id;
                  return (
                    <div
                      key={lesson.id}
                      className={`lesson-card ${isComplete ? 'done' : ''}`}
                      style={{
                        borderColor: isExpanded ? 'var(--gold)' : undefined,
                        boxShadow: isExpanded ? '0 0 25px rgba(255,215,0,0.25)' : undefined,
                        position: 'relative',
                        zIndex: isExpanded ? 2 : 1,
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setExpandedId(isExpanded ? null : lesson.id);
                      }}
                    >
                      <div className={`status ${isComplete ? 'done' : ''}`}>
                        <span style={{ fontSize: '0.55rem', lineHeight: 1 }}>{isComplete ? '✅' : '▶'}</span>
                      </div>
                      <span className="emoji">{lesson.emoji}</span>
                      <div className="title">{lesson.title}</div>
                      <div className="desc">{lesson.description}</div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}

        <div style={{ height: 90 }} />
      </main>

      {expandedLesson && (
        <div
          className="m5-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`m5-modal-title-${expandedLesson.id}`}
          onClick={() => setExpandedId(null)}
        >
          <div className="m5-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="m5-modal-close"
              aria-label="Fechar seleção"
              onClick={() => setExpandedId(null)}
            >
              ✕
            </button>

            <div className="m5-modal-kicker">ESCOLHA COMO QUER TREINAR</div>

            <div className="m5-ex-header">
              <div className="m5-ex-emoji">{expandedLesson.emoji}</div>
              <div style={{ flex: 1 }}>
                <div className="m5-ex-title" id={`m5-modal-title-${expandedLesson.id}`}>
                  {expandedLesson.title}
                </div>
                <div className="m5-ex-desc">{expandedLesson.description}</div>
              </div>
            </div>

            <div className="m5-actions">
              <Link
                to={`/lesson/${expandedLesson.id}`}
                className="m5-action revisar"
                style={{ textDecoration: 'none' }}
              >
                <div className="m5-action-icon">📚</div>
                <span>REVISAR</span>
              </Link>

              <Link
                to={`/game/select/${expandedLesson.id}?returnTo=/modules`}
                className="m5-action jogar"
                style={{ textDecoration: 'none' }}
              >
                <div className="m5-action-icon">🎮</div>
                <span>JOGAR</span>
              </Link>

              <button
                type="button"
                className="m5-action drill"
                onClick={() => navigate(`/daily-drill?lessonId=${expandedLesson.id}`)}
              >
                <div className="m5-action-icon">🎯</div>
                <span>DRILL</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <BottomNav active="modules" />
    </div>
  );
}
