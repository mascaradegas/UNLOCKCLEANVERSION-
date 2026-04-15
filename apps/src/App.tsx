import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Background } from './components/layout/Background';

const Home = lazy(() => import('./pages/Home').then((module) => ({ default: module.Home })));
const ModuleBrowser = lazy(() => import('./pages/ModuleBrowser').then((module) => ({ default: module.ModuleBrowser })));
const LessonPlayer = lazy(() => import('./pages/LessonPlayer').then((module) => ({ default: module.LessonPlayer })));
const Dashboard = lazy(() => import('./pages/Dashboard').then((module) => ({ default: module.Dashboard })));
const Profile = lazy(() => import('./pages/Profile').then((module) => ({ default: module.Profile })));
const GamePage = lazy(() => import('./pages/GamePage').then((module) => ({ default: module.GamePage })));
const SelectMode = lazy(() => import('./pages/SelectMode').then((module) => ({ default: module.SelectMode })));
const QuickPlay = lazy(() => import('./pages/QuickPlay').then((module) => ({ default: module.QuickPlay })));
const DailyDrill = lazy(() => import('./pages/DailyDrill').then((module) => ({ default: module.DailyDrill })));
const WarmUp = lazy(() => import('./pages/WarmUp').then((module) => ({ default: module.WarmUp })));
const Homework = lazy(() => import('./pages/Homework').then((module) => ({ default: module.Homework })));

function RouteFallback() {
  return (
    <div
      className="relative z-10 min-h-screen"
      style={{ display: 'grid', placeItems: 'center', padding: 24 }}
    >
      <div
        style={{
          minWidth: 220,
          padding: '18px 24px',
          borderRadius: 14,
          border: '2px solid var(--cyan)',
          background: 'linear-gradient(180deg,rgba(20,40,80,0.95),rgba(10,22,40,0.98))',
          boxShadow: '0 0 24px rgba(0,191,255,0.18)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: 'Orbitron, sans-serif', fontWeight: 900, color: 'var(--cyan)', letterSpacing: 2 }}>
          LOADING
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Background />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<ModuleBrowser />} />
          <Route path="/lesson/:id" element={<LessonPlayer />} />
          <Route path="/homework/:id" element={<Homework />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/daily-drill" element={<DailyDrill />} />
          <Route path="/warmup/:mode/:lessonId" element={<WarmUp />} />
          <Route path="/quickplay" element={<QuickPlay />} />
          <Route path="/game/select/:lessonId" element={<SelectMode />} />
          <Route path="/game/:mode/:lessonId" element={<GamePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
