import { useState, useCallback } from 'react';
import { speak, stop } from '@/utils/tts';

interface SpeakButtonProps {
  text: string;
  lang?: 'en' | 'pt';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
  className?: string;
}

const SIZES = {
  sm: { fontSize: '0.9rem', padding: '4px 6px', minWidth: 28 },
  md: { fontSize: '1.2rem', padding: '6px 8px', minWidth: 34 },
  lg: { fontSize: '1.6rem', padding: '8px 10px', minWidth: 42 },
};

export function SpeakButton({ text, lang = 'en', size = 'md', style, className }: SpeakButtonProps) {
  const [playing, setPlaying] = useState(false);

  const handleClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (playing) {
      stop();
      setPlaying(false);
      return;
    }

    setPlaying(true);

    // Web Speech API fires end event
    if ('speechSynthesis' in window) {
      const checkDone = setInterval(() => {
        if (!speechSynthesis.speaking) {
          setPlaying(false);
          clearInterval(checkDone);
        }
      }, 200);
      // Safety timeout
      setTimeout(() => { setPlaying(false); clearInterval(checkDone); }, 8000);
    }

    await speak(text, lang);
    // Short phrases end quickly
    setTimeout(() => setPlaying(false), 1500);
  }, [text, lang, playing]);

  const sizeStyle = SIZES[size];

  return (
    <button
      onClick={handleClick}
      className={className}
      title={playing ? 'Parar' : `Ouvir pronúncia${lang === 'en' ? '' : ' (PT)'}`}
      aria-label={`Ouvir: ${text}`}
      style={{
        background: playing ? 'rgba(0,191,255,0.2)' : 'rgba(255,255,255,0.06)',
        border: playing ? '1.5px solid var(--cyan)' : '1.5px solid rgba(255,255,255,0.12)',
        borderRadius: 8,
        color: playing ? 'var(--cyan)' : 'rgba(255,255,255,0.5)',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s',
        flexShrink: 0,
        lineHeight: 1,
        ...sizeStyle,
        ...style,
      }}
    >
      {playing ? '⏹' : '🔊'}
    </button>
  );
}
