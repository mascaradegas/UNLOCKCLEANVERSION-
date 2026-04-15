import { Link } from 'react-router-dom';

type NavTab = 'home' | 'modules' | 'stats' | 'profile';

const TABS: { key: NavTab; emoji: string; label: string; to: string }[] = [
  { key: 'home', emoji: '🏠', label: 'INÍCIO', to: '/' },
  { key: 'modules', emoji: '📚', label: 'MÓDULOS', to: '/modules' },
  { key: 'stats', emoji: '📊', label: 'PROGRESSO', to: '/dashboard' },
  { key: 'profile', emoji: '👤', label: 'PERFIL', to: '/profile' },
];

interface BottomNavProps {
  active?: NavTab;
}

export function BottomNav({ active = 'home' }: BottomNavProps) {
  return (
    <nav className="bottom-nav">
      {TABS.map((tab) => (
        <Link
          key={tab.key}
          to={tab.to}
          className={`nav-item ${tab.key === active ? 'active' : ''}`}
          style={{ textDecoration: 'none' }}
        >
          <span>{tab.emoji}</span>
          <span className="nav-label">{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}
