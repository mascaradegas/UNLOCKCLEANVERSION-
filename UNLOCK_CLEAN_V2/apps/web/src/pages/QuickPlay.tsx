import { useState, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LESSONS, getLessonsByModule } from '@/data/lessons';
import { MODULE_NAMES } from '@unlock2026/shared';
import { useProgressStore } from '@/stores/progressStore';
import type { Lesson, VocabularyItem } from '@unlock2026/shared';

type Source = 'weak' | 'all' | 'modules';
type Game = 'word-drop' | 'word-stack' | 'word-match';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function QuickPlay() {
  const navigate = useNavigate();
  const store = useProgressStore();
  const [source, setSource] = useState<Source>('all');
  const [game, setGame] = useState<Game>('word-drop');
  const [selectedModules, setSelectedModules] = useState<Set<number>>(new Set());

  // ─── Collect vocabulary based on source ────────────────────
  const allVocab = useMemo(() => {
    const out: VocabularyItem[] = [];
    LESSONS.forEach(lesson => {
      (lesson.vocabulary || []).forEach(item => {
        if (item?.en) out.push(item);
      });
    });
    return out;
  }, []);

  const weakWords = useMemo(() => {
    const weak = store.getWeakWords(999);
    const allTracked = store.getAllWords();
    // Use weak words if enough, else use all tracked words sorted by mastery
    const pool = weak.length >= 4 ? weak : allTracked;
    return pool.map(w => ({
      emoji: w.emoji || '🔹',
      en: w.en,
      pt: w.pt,
    } as VocabularyItem));
  }, [store]);

  const moduleVocab = useMemo(() => {
    if (selectedModules.size === 0) return [];
    const out: VocabularyItem[] = [];
    selectedModules.forEach(mod => {
      const lessons = getLessonsByModule(mod);
      lessons.forEach(lesson => {
        (lesson.vocabulary || []).forEach(item => {
          if (item?.en) out.push(item);
        });
      });
    });
    return out;
  }, [selectedModules]);

  // Current word count based on source
  const currentVocab = useMemo(() => {
    switch (source) {
      case 'weak': return weakWords;
      case 'modules': return moduleVocab;
      default: return allVocab;
    }
  }, [source, weakWords, moduleVocab, allVocab]);

  const wordCount = currentVocab.length;
  const cap = source === 'weak' ? 60 : 120;
  const displayCount = Math.min(wordCount, cap);

  // ─── Module toggle ─────────────────────────────────────────
  const toggleModule = (mod: number) => {
    setSelectedModules(prev => {
      const next = new Set(prev);
      if (next.has(mod)) next.delete(mod);
      else next.add(mod);
      return next;
    });
  };

  // ─── Start game ────────────────────────────────────────────
  const startGame = () => {
    if (wordCount < 4) return;

    const picked = shuffle(currentVocab).slice(0, cap);

    // Create a virtual lesson
    const virtualLesson: Lesson = {
      id: 'quickplay',
      title: 'Quick Play',
      emoji: '⚡',
      description: 'Modo Quick Play',
      module: 0,
      order: 0,
      slides: [],
      vocabulary: picked,
    };

    navigate(`/game/${game}/quickplay`, {
      state: { lesson: virtualLesson },
    });
  };

  // ─── Best score ────────────────────────────────────────────
  const bestScore = store.getBestScore('quickplay', game);

  // ─── Module list (all 16) ──────────────────────────────────
  const moduleNumbers = Object.keys(MODULE_NAMES).map(Number).sort((a, b) => a - b);

  return (
    <div className="relative z-10 min-h-screen" style={{ paddingTop: 20 }}>
      {/* Header */}
      <div style={{ padding: '0 20px', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 15 }}>
        <Link
          to="/"
          style={{
            padding: '12px 18px', borderRadius: 12,
            border: '2px solid rgba(255,255,255,0.15)', color: 'var(--white)',
            textDecoration: 'none', fontWeight: 600, background: 'rgba(255,255,255,0.08)',
          }}
        >
          ←
        </Link>
        <h1 style={{
          fontFamily: 'Orbitron', fontSize: '1.8rem', color: 'var(--orange)',
          textShadow: '0 0 20px rgba(255,140,0,0.5)',
        }}>
          ⚡ QUICKPLAY
        </h1>
      </div>

      <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 20px' }}>
        {/* Mode Info */}
        <div style={{
          background: 'linear-gradient(180deg, rgba(255,140,0,0.15), rgba(255,68,0,0.1))',
          border: '2px solid var(--orange)', borderRadius: 20, padding: 25,
          marginBottom: 20, textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'Orbitron', fontSize: '1.3rem', color: 'var(--gold)', marginBottom: 15 }}>
            🎮 MODO SURVIVAL
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 25, flexWrap: 'wrap' }}>
            {[
              { icon: '❤️❤️❤️', label: 'Vidas', value: '3 chances' },
              { icon: '🔁', label: 'Modo', value: 'Endless' },
              { icon: '🏆', label: 'Objetivo', value: 'High Score' },
            ].map(r => (
              <div key={r.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 }}>
                <span style={{ fontSize: '1.5rem' }}>{r.icon}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>{r.label}</span>
                <span style={{ fontFamily: 'Orbitron', fontSize: '0.9rem', color: 'var(--white)' }}>{r.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ FONTE DAS PALAVRAS ═══ */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16, padding: 20, marginBottom: 15,
        }}>
          <div style={{ fontFamily: 'Orbitron', fontSize: '0.9rem', color: 'var(--cyan)', marginBottom: 15 }}>
            📚 FONTE DAS PALAVRAS
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Palavras Fracas */}
            <SourceOption
              selected={source === 'weak'}
              onClick={() => setSource('weak')}
              icon="🎯"
              name="Palavras Fracas"
              desc="Fortaleça seu vocabulário!"
              count={weakWords.length}
              disabled={weakWords.length < 4}
              disabledLabel="🔒 Jogue aulas primeiro"
            />

            {/* Todas as Aulas */}
            <SourceOption
              selected={source === 'all'}
              onClick={() => setSource('all')}
              icon="🌍"
              name="Todas as Aulas"
              desc={`Mix de todas as ${LESSONS.length} aulas`}
              count={allVocab.length}
            />

            {/* Selecionar Módulos */}
            <SourceOption
              selected={source === 'modules'}
              onClick={() => setSource('modules')}
              icon="📂"
              name="Selecionar Módulos"
              desc="Escolha quais módulos praticar"
              count={moduleVocab.length}
            />
          </div>

          {/* Module grid - visible when "modules" is selected */}
          <div style={{
            maxHeight: source === 'modules' ? 500 : 0,
            overflow: 'hidden', transition: 'max-height 0.3s ease',
            marginTop: source === 'modules' ? 15 : 0,
          }}>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8,
            }}>
              {moduleNumbers.map(num => {
                const name = MODULE_NAMES[num] || `Módulo ${num}`;
                const emoji = name.match(/^(\S+)/)?.[1] || '📦';
                const label = name.replace(/^(\S+)\s*/, '');
                const isSelected = selectedModules.has(num);
                return (
                  <button
                    key={num}
                    onClick={() => toggleModule(num)}
                    style={{
                      padding: '12px 6px', borderRadius: 10, cursor: 'pointer',
                      textAlign: 'center', display: 'flex', flexDirection: 'column',
                      alignItems: 'center', gap: 4, border: '2px solid',
                      borderColor: isSelected ? 'var(--purple)' : 'rgba(255,255,255,0.1)',
                      background: isSelected ? 'rgba(155,109,255,0.2)' : 'rgba(255,255,255,0.03)',
                      transition: 'all 0.2s', color: 'var(--white)',
                    }}
                  >
                    <span style={{ fontSize: '1.3rem' }}>{emoji}</span>
                    <span style={{
                      fontSize: '0.6rem', fontWeight: 500,
                      color: isSelected ? 'var(--white)' : 'var(--gray)',
                      lineHeight: 1.2,
                    }}>
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ═══ ESCOLHA O JOGO ═══ */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: 16, padding: 20, marginBottom: 15,
        }}>
          <div style={{ fontFamily: 'Orbitron', fontSize: '0.9rem', color: 'var(--cyan)', marginBottom: 15 }}>
            🎯 ESCOLHA O JOGO
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
            {([
              { id: 'word-drop' as Game, icon: '⬇️', name: 'Word Drop' },
              { id: 'word-stack' as Game, icon: '📚', name: 'Word Stack', timer: true },
              { id: 'word-match' as Game, icon: '🔗', name: 'Word Match', timer: true },
            ]).map(g => (
              <button
                key={g.id}
                onClick={() => setGame(g.id)}
                style={{
                  padding: '18px 10px', borderRadius: 14, cursor: 'pointer',
                  textAlign: 'center', border: '2px solid',
                  borderColor: game === g.id ? 'var(--cyan)' : 'rgba(255,255,255,0.1)',
                  background: game === g.id ? 'rgba(0,191,255,0.15)' : 'rgba(255,255,255,0.03)',
                  color: 'var(--white)', transition: 'all 0.2s',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: 8 }}>{g.icon}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>{g.name}</div>
                {g.timer && (
                  <div style={{ fontSize: '0.65rem', color: 'var(--orange)', marginTop: 5 }}>⏱️ Timer</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ═══ JOGAR ═══ */}
        <button
          onClick={startGame}
          disabled={wordCount < 4}
          style={{
            width: '100%', padding: 18, borderRadius: 14,
            background: wordCount >= 4
              ? 'linear-gradient(180deg, var(--orange), #CC7000)'
              : 'rgba(255,255,255,0.1)',
            border: `3px solid ${wordCount >= 4 ? 'var(--orange)' : 'rgba(255,255,255,0.2)'}`,
            color: 'white', fontFamily: 'Orbitron', fontSize: '1.2rem',
            fontWeight: 700, cursor: wordCount >= 4 ? 'pointer' : 'not-allowed',
            textTransform: 'uppercase', letterSpacing: 2,
            opacity: wordCount >= 4 ? 1 : 0.5,
            transition: 'all 0.2s',
          }}
        >
          ⚡ JOGAR
        </button>

        {/* Info bar */}
        <div style={{
          textAlign: 'center', marginTop: 15, padding: 12,
          background: 'rgba(0,0,0,0.3)', borderRadius: 10,
          display: 'flex', justifyContent: 'center', gap: 20,
        }}>
          <span style={{ fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--gray)' }}>Palavras: </span>
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{displayCount}</span>
          </span>
          <span style={{ fontSize: '0.85rem' }}>
            <span style={{ color: 'var(--gray)' }}>Recorde: </span>
            <span style={{ color: 'var(--gold)', fontWeight: 600 }}>{bestScore}</span>
          </span>
        </div>

        <div style={{ height: 40 }} />
      </div>
    </div>
  );
}

// ─── Source Option Component ─────────────────────────────────────────────

function SourceOption({ selected, onClick, icon, name, desc, count, disabled, disabledLabel }: {
  selected: boolean;
  onClick: () => void;
  icon: string;
  name: string;
  desc: string;
  count: number;
  disabled?: boolean;
  disabledLabel?: string;
}) {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: 14,
        borderRadius: 12, cursor: disabled ? 'not-allowed' : 'pointer',
        border: '2px solid',
        borderColor: selected ? 'var(--green)' : 'rgba(255,255,255,0.1)',
        background: selected ? 'rgba(0,255,136,0.1)' : 'rgba(255,255,255,0.03)',
        opacity: disabled ? 0.5 : 1,
        transition: 'all 0.2s', width: '100%', textAlign: 'left',
        color: 'var(--white)', position: 'relative',
      }}
    >
      {/* Radio indicator */}
      <div style={{
        width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
        border: `2px solid ${selected ? 'var(--green)' : 'var(--gray)'}`,
        background: selected ? 'var(--green)' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '0.8rem', fontWeight: 'bold',
        color: selected ? 'var(--bg)' : 'transparent',
      }}>
        ✓
      </div>

      <span style={{ fontSize: '1.3rem' }}>{icon}</span>

      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{name}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>
          {disabled ? disabledLabel : desc}
        </div>
      </div>

      <span style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', color: 'var(--gold)' }}>
        {count}
      </span>
    </button>
  );
}
