import { useEffect } from 'react';
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import { getLessonById } from '@/data/lessons';
import { WordDropGame } from '@/components/games/WordDrop';
import { WordMatchGame } from '@/components/games/WordMatch';
import { WordStackGame } from '@/components/games/WordStack';
import type { GameMode, Lesson } from '@unlock2026/shared';

export function GamePage() {
  const { mode, lessonId } = useParams<{ mode: string; lessonId: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Support quickplay/boss: virtual lesson passed via location state
  const isQuickPlay = lessonId === 'quickplay';
  const stateLesson = (location.state as { lesson?: Lesson; returnTo?: string })?.lesson;
  const returnTo = (location.state as { returnTo?: string })?.returnTo;
  const lesson = isQuickPlay ? stateLesson : (lessonId ? getLessonById(lessonId) : undefined);

  useEffect(() => {
    console.log('📖 [GamePage] lessonId:', lessonId, 'isQuickPlay:', isQuickPlay);
    console.log('📖 [GamePage] lesson found:', !!lesson);
    if (lesson) {
      console.log('📖 [GamePage] lesson.vocabulary length:', lesson.vocabulary?.length || 0);
    }
  }, [lessonId, lesson, isQuickPlay]);

  if (!lesson || !mode) {
    console.warn('❌ [GamePage] No lesson or mode found. Redirecting.');
    navigate(isQuickPlay ? (returnTo || '/quickplay') : '/', { replace: true });
    return null;
  }

  const backPath = returnTo || (isQuickPlay ? '/quickplay' : `/game/select/${lesson.id}`);
  const backLabel = returnTo === '/daily-drill' ? 'Treino do Dia' : (isQuickPlay ? 'Jogar Livre' : 'Voltar');
  const handleFinish = () => navigate(backPath);

  return (
    <div className="relative z-10 min-h-screen" style={{ paddingTop: 10 }}>
      <div style={{ padding: '0 20px', marginBottom: 10 }}>
        <Link to={backPath} className="game-back-btn">← {backLabel}</Link>
      </div>
      {mode === 'word-drop' && <WordDropGame lesson={lesson} onFinish={handleFinish} />}
      {mode === 'word-match' && <WordMatchGame lesson={lesson} onFinish={handleFinish} />}
      {mode === 'word-stack' && <WordStackGame lesson={lesson} onFinish={handleFinish} />}
    </div>
  );
}
