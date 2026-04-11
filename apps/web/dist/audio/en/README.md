# 🔊 Audio Files — UNLOCK 2026

## Current: Web Speech API (browser TTS)
Works automatically, zero files needed.

## Upgrade: Drop MP3 files here
The system auto-detects MP3s and uses them instead of browser TTS.

### File naming convention:
Each phrase → slug → `.mp3`

Examples:
- "Where is the bathroom?" → `where-is-the-bathroom.mp3`
- "How much is this?" → `how-much-is-this.mp3`
- "I need help" → `i-need-help.mp3`

### Generating with AI (recommended):

**Option A — OpenAI TTS (~$0.015/1000 chars, best value)**
```bash
curl https://api.openai.com/v1/audio/speech \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"tts-1","voice":"nova","input":"Where is the bathroom?"}' \
  --output audio/en/where-is-the-bathroom.mp3
```
Voices: alloy, echo, fable, onyx, nova (female), shimmer

**Option B — ElevenLabs (free tier 10k chars/month, most natural)**
https://elevenlabs.io/ — use the web UI or API

**Option C — Batch generate all phrases**
Extract all EN phrases from lessons.ts and generate in bulk:
```bash
node -e "
  const fs = require('fs');
  const data = fs.readFileSync('src/data/lessons.ts','utf8');
  const phrases = [...data.matchAll(/en: '([^']+)'/g)].map(m=>m[1]);
  const unique = [...new Set(phrases)];
  fs.writeFileSync('phrases.txt', unique.join('\n'));
  console.log(unique.length + ' unique phrases');
"
# Then batch with any TTS API
```
