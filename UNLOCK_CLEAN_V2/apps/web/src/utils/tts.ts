/**
 * UNLOCK 2026 — Text-to-Speech System
 * 
 * Abstraction layer that supports:
 * 1. Pre-recorded MP3 files (highest quality — drop files in /audio/)
 * 2. Web Speech API fallback (free, works offline)
 * 
 * UPGRADE PATH:
 * ─────────────
 * To upgrade to AI voices (ElevenLabs, OpenAI TTS, Google Cloud TTS):
 * 
 * 1. Generate MP3s with any TTS API for each phrase
 * 2. Name them by hash: /audio/en/{hash}.mp3
 * 3. The system auto-detects and uses the MP3 instead of browser TTS
 * 
 * Example batch script (OpenAI TTS — ~$0.015 per 1000 chars):
 *   curl https://api.openai.com/v1/audio/speech \
 *     -H "Authorization: Bearer $KEY" \
 *     -d '{"model":"tts-1","voice":"nova","input":"Where is the bathroom?"}' \
 *     --output audio/en/where-is-the-bathroom.mp3
 * 
 * Or ElevenLabs (free tier = 10k chars/month, very natural):
 *   https://elevenlabs.io/
 */

// ─── Config ─────────────────────────────────────────────────────────────

const AUDIO_BASE_PATH = '/audio/en/';
const DEFAULT_RATE = 0.85;
const PREFERRED_VOICE_NAMES = [
  'Google US English',          // Chrome — best quality
  'Microsoft Zira',             // Edge/Windows
  'Samantha',                   // Safari/macOS
  'Alex',                       // macOS fallback
  'Google UK English Female',   // Chrome alt
];

// ─── Speed control (persisted in localStorage) ──────────────────────────

const SPEED_KEY = 'unlock2026_tts_speed';
const SPEED_MIN = 0.4;
const SPEED_MAX = 1.2;
const SPEED_STEP = 0.05;

let _speechRate = DEFAULT_RATE;

// Load saved speed
if (typeof localStorage !== 'undefined') {
  const saved = localStorage.getItem(SPEED_KEY);
  if (saved) _speechRate = Math.max(SPEED_MIN, Math.min(SPEED_MAX, parseFloat(saved)));
}

export function getSpeechRate(): number { return _speechRate; }
export function setSpeechRate(rate: number): void {
  _speechRate = Math.max(SPEED_MIN, Math.min(SPEED_MAX, rate));
  if (typeof localStorage !== 'undefined') localStorage.setItem(SPEED_KEY, String(_speechRate));
}
export function getSpeedConfig() { return { min: SPEED_MIN, max: SPEED_MAX, step: SPEED_STEP, default: DEFAULT_RATE }; }

// ─── State ──────────────────────────────────────────────────────────────

let currentUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoice: SpeechSynthesisVoice | null = null;
let voicesLoaded = false;

// ─── Helpers ────────────────────────────────────────────────────────────

function stripHtml(s: string): string {
  return s.replace(/<[^>]*>/g, '').trim();
}

function textToSlug(text: string): string {
  return stripHtml(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60);
}

// ─── Voice selection ────────────────────────────────────────────────────

function getBestVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice && voicesLoaded) return cachedVoice;

  const voices = speechSynthesis.getVoices();
  if (voices.length === 0) return null;

  voicesLoaded = true;

  // Try preferred voices first
  for (const name of PREFERRED_VOICE_NAMES) {
    const v = voices.find(v => v.name === name);
    if (v) { cachedVoice = v; return v; }
  }

  // Fallback: any English voice
  const enVoice = voices.find(v => v.lang.startsWith('en') && !v.localService) 
    || voices.find(v => v.lang.startsWith('en'));
  
  if (enVoice) { cachedVoice = enVoice; return enVoice; }

  cachedVoice = voices[0];
  return voices[0];
}

// Pre-load voices (Chrome loads them async)
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => { voicesLoaded = false; cachedVoice = null; };
  // Trigger initial load
  speechSynthesis.getVoices();
}

// ─── Try MP3 first ──────────────────────────────────────────────────────

function tryPlayMP3(text: string): Promise<boolean> {
  return new Promise((resolve) => {
    const slug = textToSlug(text);
    const url = AUDIO_BASE_PATH + slug + '.mp3';
    
    const audio = new Audio();
    audio.src = url;
    
    audio.oncanplaythrough = () => {
      audio.play().then(() => resolve(true)).catch(() => resolve(false));
    };
    
    audio.onerror = () => resolve(false);
    
    // Timeout: don't wait forever for MP3
    setTimeout(() => resolve(false), 500);
  });
}

// ─── Main speak function ────────────────────────────────────────────────

export async function speak(text: string, lang: 'en' | 'pt' = 'en'): Promise<void> {
  if (!text) return;

  const clean = stripHtml(text);
  if (!clean) return;

  // Stop any current speech
  stop();

  // 1. Try pre-recorded MP3 first (only for English)
  if (lang === 'en') {
    const played = await tryPlayMP3(clean);
    if (played) return;
  }

  // 2. Fallback to Web Speech API
  if (!('speechSynthesis' in window)) return;

  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
  utterance.rate = _speechRate;
  utterance.pitch = 1;
  utterance.volume = 1;

  const voice = getBestVoice();
  if (voice && lang === 'en') utterance.voice = voice;

  currentUtterance = utterance;
  speechSynthesis.speak(utterance);
}

// ─── Stop ───────────────────────────────────────────────────────────────

export function stop(): void {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
  currentUtterance = null;
}

// ─── Convenience: check if TTS is available ─────────────────────────────

export function isTTSAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}
