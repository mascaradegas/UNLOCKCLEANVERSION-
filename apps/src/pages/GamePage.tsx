import { Suspense, lazy, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, useSearchParams } from 'react-router-dom';
import { loadLessonById } from '@/data/lessons';
import type { Lesson } from '@unlock2026/shared';

const WordDropGame = lazy(() => import('@/components/games/WordDrop').then((module) => ({ default: module.WordDropGame })));
const WordMatchGame = lazy(() => import('@/components/games/WordMatch').then((module) => ({ default: module.WordMatchGame })));
const WordStackGame = lazy(() => import('@/components/games/WordStack').then((module) => ({ default: module.WordStackGame })));

interface GameRouteState {
  lesson?: Lesson;
  returnTo?: string;
}

function withQuery(path: string, params: URLSearchParams) {
  const query = params.toString();
  return query ? `${path}?${query}` : path;
}

function GameFallback() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh', padding: 24 }}>
      <div
        style={{
          minWidth: 220,
          padding: '18px 24px',
          borderRadius: 14,
          border: '2px solid var(--cyan)',
          background: 'linear-gradient(180deg,rgba(20,40,80,0.95),rgba(10,22,40,0.98))',
          boxShadow: '0 0 24px rgba(0,191,255,0.18)',
          textAlign: 'center',
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 900,
          color: 'var(--cyan)',
          letterSpacing: 2,
        }}
      >
        LOADING GAME
      </div>
    </div>
  );
}

export function GamePage() {
  const { mode, lessonId } = useParams<{ mode: string; lessonId: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Support quickplay/boss: virtual lesson passed via location state
  const isQuickPlay = lessonId === 'quickplay';
  const routeState = (location.state as GameRouteState | null) ?? null;
  const stateLesson = routeState?.lesson;
  const queryReturnTo = searchParams.get('returnTo') || undefined;
  const queryLessonId = searchParams.get('lessonId') || undefined;
  const stepComplete = searchParams.get('stepComplete') || undefined;
  const returnTo = routeState?.returnTo || queryReturnTo;
  const [lesson, setLesson] = useState<Lesson | undefined>(isQuickPlay ? stateLesson : undefined);
  const [isLoading, setIsLoading] = useState(!isQuickPlay);

  useEffect(() => {
    let active = true;

    if (isQuickPlay) {
      setLesson(stateLesson);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    if (!lessonId) {
      setLesson(undefined);
      setIsLoading(false);
      return () => {
        active = false;
      };
    }

    setIsLoading(true);
    loadLessonById(lessonId).then((loadedLesson) => {
      if (!active) return;
      setLesson(loadedLesson);
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [isQuickPlay, lessonId, stateLesson]);

  useEffect(() => {
    if (isLoading) return;
    if (lesson && mode) return;
    navigate(isQuickPlay ? (returnTo || '/quickplay') : '/', { replace: true });
  }, [isLoading, isQuickPlay, lesson, mode, navigate, returnTo]);

  if (isLoading) {
    return (
      <div className="relative z-10 min-h-screen" style={{ paddingTop: 10 }}>
        <div style={{ padding: '0 20px', marginBottom: 10 }}>
          <Link to={returnTo || (isQuickPlay ? '/quickplay' : '/')} className="game-back-btn">← Carregando</Link>
        </div>
        <GameFallback />
      </div>
    );
  }

  if (!lesson || !mode) {
    return null;
  }

  const backPath = (() => {
    if (!returnTo) {
      return isQuickPlay ? '/quickplay' : `/game/select/${lesson.id}`;
    }

    const params = new URLSearchParams();
    if (returnTo === '/daily-drill') {
      params.set('lessonId', queryLessonId || lesson.id);
      if (stepComplete) params.set('stepComplete', stepComplete);
    }

    return withQuery(returnTo, params);
  })();

  const selectModePath = (() => {
    const basePath = `/game/select/${lesson.id}`;
    const params = new URLSearchParams();

    if (returnTo) {
      params.set('returnTo', returnTo);
      if (returnTo === '/daily-drill') {
        params.set('lessonId', queryLessonId || lesson.id);
      }
    }

    return withQuery(basePath, params);
  })();

  const backLabel = returnTo === '/daily-drill' ? 'Treino do Dia' : (isQuickPlay ? 'Jogar Livre' : 'Voltar');
  const handleFinish = () => navigate(backPath);
  const handleSelectMode = () =>
    navigate(selectModePath, {
      state: stateLesson ? { lesson: stateLesson, returnTo } : undefined,
    });

  return (
    <div className="relative z-10 min-h-screen" style={{ paddingTop: 10 }}>
      <div style={{ padding: '0 20px', marginBottom: 10 }}>
        <Link to={backPath} className="game-back-btn">← {backLabel}</Link>
      </div>
      <Suspense fallback={<GameFallback />}>
        {mode === 'word-drop' && (
          <WordDropGame
            lesson={lesson}
            onFinish={handleFinish}
            onSelectMode={handleSelectMode}
            backLabel={backLabel}
          />
        )}
        {mode === 'word-match' && (
          <WordMatchGame
            lesson={lesson}
            onFinish={handleFinish}
            onSelectMode={handleSelectMode}
            backLabel={backLabel}
          />
        )}
        {mode === 'word-stack' && (
          <WordStackGame
            lesson={lesson}
            onFinish={handleFinish}
            onSelectMode={handleSelectMode}
            backLabel={backLabel}
          />
        )}
      </Suspense>
    </div>
  );
}
