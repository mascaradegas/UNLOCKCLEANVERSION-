# CLAUDE.md — UNLOCK 2026

Guia de referência do codebase para o assistente. Leia antes de qualquer modificação.

---

## Raiz do projeto

O código vive em `UNLOCK_CLEAN_V2/`. É um monorepo npm com dois workspaces:

- `apps` — aplicação React principal (Vite + React 19 + TypeScript)
- `packages/shared` — tipos e constantes compartilhados

Dev server roda na porta **3000** (vite.config.js). Os scripts do monorepo ficam no `UNLOCK_CLEAN_V2/package.json`.

---

## Mapa de arquivos

### Pontos de entrada
| Arquivo | Função |
|---------|--------|
| `apps/index.html` | HTML raiz |
| `apps/src/main.tsx` | Bootstrap do React |
| `apps/src/App.tsx` | Todas as rotas (lazy-loaded com Suspense) |

### Páginas (`apps/src/pages/`)
| Arquivo | Rota | Descrição |
|---------|------|-----------|
| `Home.tsx` | `/` | Missão do dia + acesso rápido a jogos; lesson determinística por data |
| `ModuleBrowser.tsx` | `/modules` | Catálogo com busca, filtros e modal de ação por lição |
| `LessonPlayer.tsx` | `/lesson/:id` | Slides da lição com navegação teclado/setas, favorito, XP |
| `Homework.tsx` | `/homework/:id` | Duas fases: múltipla escolha → digitação (só se errou) |
| `SelectMode.tsx` | `/game/select/:lessonId` | Escolha entre Word Drop, Word Match e Word Stack |
| `GamePage.tsx` | `/game/:mode/:lessonId` | Wrapper que monta o jogo; lessonId='quickplay' é caso especial |
| `QuickPlay.tsx` | `/quickplay` | Cria lição virtual com vocab de palavras fracas / módulos / tudo |
| `DailyDrill.tsx` | `/daily-drill` | Treino diário: Fase 1 (3 jogos) + Fase 2 (lição, dever, revisão) |
| `WarmUp.tsx` | `/warmup/:mode/:lessonId` | Modo warmup (5 palavras, digitação) ou review (10 palavras, word-stack) |
| `Dashboard.tsx` | `/dashboard` | Stats completas: foco do dia, meta, nível, palavras prioritárias |
| `Profile.tsx` | `/profile` | Perfil e configurações do usuário |

### Componentes (`apps/src/components/`)
| Arquivo | Descrição |
|---------|-----------|
| `lessons/SlideRenderer.tsx` | Switch por tipo de slide; renderiza todos os 12 tipos |
| `games/WordDrop.tsx` | Palavras caindo, 10 níveis de dificuldade, 30 acertos p/ vencer |
| `games/WordMatch.tsx` | Parear inglês com português |
| `games/WordStack.tsx` | Empilhar palavras na ordem certa |
| `SpeakButton.tsx` | Botão TTS com estado playing/parado; sizes sm/md/lg |
| `SpeakableText.tsx` | Texto clicável com TTS embutido |
| `SpeedControl.tsx` | Slider de velocidade da fala (0.4x–1.2x) |
| `layout/Background.tsx` | Fundo animado com 8 partículas |
| `layout/BottomNav.tsx` | 4 abas: Home, Modules, Dashboard, Profile |
| `layout/Header.tsx` | Cabeçalho genérico com botão de voltar |

### Dados
| Arquivo | Descrição |
|---------|-----------|
| `apps/src/data/lessons.ts` | Funções de carga e cache de lições (async, por módulo) |
| `apps/src/data/lessonSummaries.ts` | Array `LESSON_SUMMARIES` com metadados leves |
| `apps/src/data/lessonModules/module{1-9}.ts` | Conteúdo completo (slides + vocab) de cada módulo |

### Estado
| Arquivo | Descrição |
|---------|-----------|
| `apps/src/stores/progressStore.ts` | Único store global (Zustand + persist → localStorage) |

### Utilitários (`apps/src/utils/`)
| Arquivo | Descrição |
|---------|-----------|
| `tts.ts` | TTS dual-layer: MP3 (500ms timeout) → fallback Web Speech API |
| `sounds.ts` | Efeitos sonoros sintéticos via Web Audio API (10 funções) |
| `matchAnswer.ts` | Validação fuzzy: exato → contrações → Levenshtein ≤ 2 |

### Shared (`packages/shared/src/`)
| Arquivo | Descrição |
|---------|-----------|
| `types.ts` | Todos os tipos TypeScript do domínio |
| `constants.ts` | XP, níveis, SRS, conquistas, design tokens |
| `index.ts` | Re-exporta tudo |

### Configuração
| Arquivo | Descrição |
|---------|-----------|
| `UNLOCK_CLEAN_V2/package.json` | Scripts do monorepo |
| `apps/vite.config.js` | Porta 3000, aliases `@` e `@unlock2026/shared` |
| `apps/tailwind.config.ts` | Design tokens: cores `unlock.*`, fontes Orbitron/Inter |
| `apps/tsconfig.json` | Strict mode, ES2020, paths `@/*` e `@unlock2026/shared` |

---

## Tipos principais (`packages/shared/src/types.ts`)

```ts
// Slide: union discriminada com 12 tipos
type SlideType = 'title' | 'situation' | 'sequence-step' | 'rule' | 'tip'
               | 'example' | 'examples' | 'comparison' | 'quiz' | 'fill-blank'
               | 'list' | 'end'

// Lição completa (carregada async)
interface Lesson {
  id: string; title: string; emoji: string; description: string
  module: number; order: number
  slides: Slide[]
  vocabulary: VocabularyItem[]  // { emoji, pt, en, level? }
}

// Tracking de palavra (SRS)
interface WordStats {
  en: string; pt: string; emoji: string; lessonId: string
  attempts: number; correct: number; totalResponseMs: number
  srsLevel: number           // 0–5, indexa SRS_INTERVALS
  nextReview: string         // ISO date
  lastSeen: string; lastCorrect: string
  history: WordAttempt[]     // últimas 50 tentativas
}

// Progresso completo do usuário (persiste em localStorage)
interface UserProgress {
  id: string; name: string; avatar: string; plan: Plan
  xp: number; level: number
  streak: number; longestStreak: number; lastActiveDate: string
  lessonsCompleted: string[]
  lessonsInProgress: Record<string, number>   // lessonId → slideIndex
  favorites: string[]
  gamesCompleted: GameResult[]
  gamesBestScores: Record<string, number>     // "lessonId_mode" → score
  wordStats: Record<string, WordStats>        // wordId → stats
  achievements: string[]
  sessions: StudySession[]
  drillProgress: Record<string, Record<string, boolean>>
  settings: { dailyGoal: number; notifications: boolean; soundEffects: boolean }
  // ... sync, onboarding, analytics
}
```

---

## Constantes principais (`packages/shared/src/constants.ts`)

```ts
XP = {
  LESSON_COMPLETE: 100, LESSON_SLIDE_VIEW: 2,
  GAME_COMPLETE: 50, GAME_PERFECT: 100,
  WORD_CORRECT: 5, STREAK_BONUS: 25, ACHIEVEMENT_UNLOCK: 50,
  REVIEW_COMPLETE: 30
}

SRS_INTERVALS = [1, 3, 7, 14, 30, 90]  // dias entre revisões por nível

LEVELS = 13  // Iniciante (0 XP) → Transcendente (50.000 XP)

// Helpers exportados:
calculateLevel(xp)           // → number
getLevelInfo(level)          // → LevelInfo
getXPForNextLevel(xp)        // → { needed, total, progress% }
getMasteryLevel(mastery%)    // → MasteryInfo { level, label, color }
```

---

## Arquitetura de estado (`progressStore.ts`)

Único store global, persistido em `localStorage` como `unlock2026_progress` (v2).

### Métodos principais

| Categoria | Método | Retorno |
|-----------|--------|---------|
| XP | `addXP(amount)` | `{ xp, level, leveledUp }` |
| Streak | `updateStreak()` | `{ streak, isNew }` |
| Lições | `completeLesson(id)` | `boolean` (false se já completa) |
| Lições | `saveSlideProgress(id, idx)` / `getSlideProgress(id)` | — / `number` |
| Lições | `toggleFavorite(id)` | `boolean` (novo estado) |
| Jogos | `completeGame(id, mode, score, max)` | `{ percent, isPerfect, isNewBest }` |
| Palavras | `trackWord({en, pt, correct, responseTime, ...})` | `WordStats` |
| Palavras | `getWeakWords(limit)` | `WordStats[]` por erro desc |
| Palavras | `getWordsForReview()` | palavras com `nextReview <= now` |
| Palavras | `getPriorityWords(limit)` | pontuadas: isDue(35pt)+mastery+erro |
| Palavras | `getWordCounts()` | `{ total, critical, weak, learning, strong, mastered, forReview }` |
| Sessions | `logSession({type, lessonId?, score?, duration?})` | — |
| Drill | `setDrillProgress(lessonId, steps{})` | — |
| Meta | `getDailyGoalStatus()` | `{ minutesToday, goalMinutes, progress%, completed }` |
| Conquistas | `checkAchievements()` | `string[]` (IDs recém-desbloqueados) |
| Sync | `exportForSync()` / `importFromSync(data)` | — |
| Reset | `reset()` | — |

### Mastery de palavra

```
mastery = (correct / attempts) * 100
  × 0.9 se avgResponseTime > 5000ms
  × 0.8 se lastSeen > 30 dias
  × 0.9 se lastSeen > 14 dias
```

---

## Carregamento de lições (`data/lessons.ts`)

**LessonSummary vs Lesson:** summaries são metadados leves (sem slides/vocab), carregados sincronamente. O conteúdo completo é lazy-loaded por módulo.

```ts
// Sync (metadados)
LESSONS                          // LessonSummary[] — sempre disponível
getLessonSummaryById(id)
getLessonsByModule(module)
getModules()                     // → ModuleSummary[] agrupados

// Async (conteúdo completo, com cache)
loadLessonById(id)               // → Promise<Lesson | undefined>
loadLessonsByModule(module)      // → Promise<Lesson[]>
loadAllLessons()                 // → Promise<Lesson[]>
loadLessonVocabulary(id)         // → Promise<VocabularyItem[]>
loadNextLesson(currentId)        // → Promise<Lesson | undefined>
```

Módulos ficam em `data/lessonModules/module{1-9}.ts`, cada um exporta `module{N}Lessons: Lesson[]`.

---

## Sistema de TTS (`utils/tts.ts`)

1. Busca `/audio/en/{slug}.mp3` (timeout 500ms)
2. Fallback: `window.speechSynthesis` — prefere Google US English, Microsoft Zira
3. Velocidade: `getSpeechRate()` / `setSpeechRate()` — persiste em `unlock2026_tts_speed`

```ts
speak(text, lang?: 'en' | 'pt')  // async
stop()
isTTSAvailable()                  // → boolean
```

Para áudios pré-gravados: ver `apps/public/audio/en/README.md`.

---

## Validação de respostas (`utils/matchAnswer.ts`)

```ts
matchAnswer(userAnswer, correctEn)  // → { isCorrect, matchedAnswer, matchType }
isAnswerCorrect(userAnswer, correctEn)  // → boolean
```

Estratégia em ordem:
1. Exato normalizado (lowercase, sem pontuação)
2. Expansão de 69 contrações (`what's → what is`)
3. Levenshtein ≤ 1 (≤4 chars) ou ≤ 2 (>4 chars)

Suporta múltiplas respostas válidas separadas por ` / `.

---

## Fluxo do Daily Drill

```
DailyDrill
  └─ Fase 1 (Jogos): word-drop → word-match → word-stack
       └─ Cada jogo retorna com ?returnTo=/daily-drill&stepComplete=<mode>
  └─ Fase 2 (Aprofundar): lesson → homework → review (opcional)
       └─ stepComplete acumula: "step1,step2"
```

---

## Fluxo de jogos (QuickPlay)

```
QuickPlay
  ├─ fonte: palavras fracas (≤60) | todos os módulos (≤120) | módulos selecionados
  └─ cria lição virtual → navega para /game/{mode}/quickplay com state={lesson}
     └─ GamePage detecta lessonId='quickplay', pega lição do location.state
```

---

## Scripts disponíveis

```bash
# A partir de UNLOCK_CLEAN_V2/
npm run dev             # dev server porta 3000
npm run build           # validate:content + tsc + vite build
npm run install-all     # instala tudo (raiz + web)
npm run organize        # reorganiza lessons.ts automaticamente
npm run organize:manual
```

---

## Arquivos gerados pelo assistente

Todo arquivo `.md` gerado pelo assistente (guias, pesquisas, sugestões de implementação, mapeamentos, decisões de arquitetura, etc.) deve ser criado em `claude-guidelines/`, **não na raiz do projeto**.

**Exceções** — ficam onde o ecossistema espera:
- `README.md` — raiz do projeto
- `CLAUDE.md` — raiz do projeto
- Arquivos dentro de `.claude/` (skills, agentes, hooks)

**Exemplos corretos:**
```
claude-guidelines/REFACTOR_RESEARCH.md   ✅
claude-guidelines/api-design.md          ✅
claude-guidelines/migration-plan.md      ✅
REFACTOR_RESEARCH.md                     ❌ (raiz)
```

---

## Convenções e cuidados

- **Sem backend** — dados novos vão para `progressStore` ou `lessonModules/`
- **Tipos globais em `packages/shared/src/types.ts`** — nunca duplicar em `apps/`
- **Lições são carregadas async** — use `loadLessonById()`, não acesse `module*.ts` direto
- **Tailwind com design tokens** — cores `unlock-gold`, `unlock-green` etc.; nunca hardcode
- **Rotas só em `App.tsx`** — não criar roteamento paralelo
- **Zustand com immer** — mutações dentro de `set()` são seguras
- **lessonId='quickplay'** é caso especial em GamePage — lição vem de `location.state`
- **stepComplete no Daily Drill** acumula como string CSV — cuidado ao parsear
- **SpeakButton** tem timeout de 8s + 1.5s para frases curtas
