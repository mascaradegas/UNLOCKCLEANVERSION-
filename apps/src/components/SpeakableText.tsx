import { useCallback } from 'react';
import { speak } from '@/utils/tts';

interface SpeakableTextProps {
  html: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * Renders HTML text where each word is clickable to hear its pronunciation.
 * Preserves HTML formatting (highlights, bold, etc).
 * 
 * Click a word → hear just that word
 * Works by wrapping each text word in a <span> with data-word attribute
 */
export function SpeakableText({ html, style, className }: SpeakableTextProps) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const word = target.getAttribute('data-word');
    if (word) {
      e.stopPropagation();
      speak(word);
    }
  }, []);

  // Process HTML: wrap each text word in a clickable span
  const processed = wrapWordsInHtml(html);

  return (
    <span
      onClick={handleClick}
      className={className}
      style={{ ...style, cursor: 'default' }}
      dangerouslySetInnerHTML={{ __html: processed }}
    />
  );
}

/**
 * Parse HTML string and wrap each visible word in a clickable span.
 * Preserves all HTML tags (spans, strong, etc).
 */
function wrapWordsInHtml(html: string): string {
  // Split into HTML tags and text segments
  const parts = html.split(/(<[^>]+>)/g);

  return parts.map(part => {
    // If it's an HTML tag, keep as-is
    if (part.startsWith('<')) return part;

    // It's text — wrap each word
    return part.replace(/(\S+)/g, (word) => {
      // Clean word for speech (remove punctuation for lookup)
      const clean = word.replace(/[^a-zA-Z0-9'''\-]/g, '');
      if (!clean) return word; // pure punctuation, don't wrap

      return `<span data-word="${clean}" style="cursor:pointer;border-radius:3px;transition:background 0.15s;padding:0 1px" onmouseover="this.style.background='rgba(0,191,255,0.15)'" onmouseout="this.style.background='transparent'">${word}</span>`;
    });
  }).join('');
}
