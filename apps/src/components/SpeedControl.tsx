import { useState, useCallback } from 'react';
import { getSpeechRate, setSpeechRate, getSpeedConfig, speak } from '@/utils/tts';

interface SpeedControlProps {
  compact?: boolean;
}

const LABELS: Record<string, string> = {
  '0.4': '🐢 Muito lento',
  '0.5': '🐢 Lento',
  '0.6': '🚶 Devagar',
  '0.7': '🚶 Moderado',
  '0.85': '🏃 Normal',
  '1.0': '🏃 Rápido',
  '1.2': '⚡ Nativo',
};

function getLabel(rate: number): string {
  // Find closest label
  const keys = Object.keys(LABELS).map(Number);
  let closest = keys[0];
  for (const k of keys) {
    if (Math.abs(k - rate) < Math.abs(closest - rate)) closest = k;
  }
  return LABELS[String(closest)] || `${rate.toFixed(2)}x`;
}

export function SpeedControl({ compact }: SpeedControlProps) {
  const config = getSpeedConfig();
  const [rate, setRate] = useState(getSpeechRate());

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setRate(val);
    setSpeechRate(val);
  }, []);

  const handleTest = useCallback(() => {
    speak('How are you doing today?');
  }, []);

  if (compact) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '6px 12px', borderRadius: 10,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>🐢</span>
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={rate}
          onChange={handleChange}
          style={{ flex: 1, height: 4, accentColor: 'var(--cyan)', cursor: 'pointer' }}
        />
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>⚡</span>
        <span style={{
          fontSize: 11, fontWeight: 700, color: 'var(--cyan)',
          minWidth: 36, textAlign: 'center',
        }}>
          {rate.toFixed(2)}x
        </span>
        <button
          onClick={handleTest}
          style={{
            background: 'rgba(0,191,255,0.12)', border: '1px solid rgba(0,191,255,0.25)',
            borderRadius: 6, padding: '3px 8px', fontSize: 11, color: 'var(--cyan)',
            cursor: 'pointer', fontWeight: 600,
          }}
        >
          🔊 Testar
        </button>
      </div>
    );
  }

  return (
    <div style={{
      padding: '14px 18px', borderRadius: 12,
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)' }}>
          🔊 Velocidade da pronúncia
        </span>
        <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--cyan)' }}>
          {getLabel(rate)}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 16 }}>🐢</span>
        <input
          type="range"
          min={config.min}
          max={config.max}
          step={config.step}
          value={rate}
          onChange={handleChange}
          style={{
            flex: 1, height: 6, accentColor: 'var(--cyan)', cursor: 'pointer',
            borderRadius: 3,
          }}
        />
        <span style={{ fontSize: 16 }}>⚡</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Lento ({config.min}x)</span>
        <button
          onClick={handleTest}
          style={{
            background: 'rgba(0,191,255,0.12)', border: '1px solid rgba(0,191,255,0.25)',
            borderRadius: 8, padding: '5px 14px', fontSize: 12, color: 'var(--cyan)',
            cursor: 'pointer', fontWeight: 700,
          }}
        >
          🔊 Testar voz
        </button>
        <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>Rápido ({config.max}x)</span>
      </div>
    </div>
  );
}
