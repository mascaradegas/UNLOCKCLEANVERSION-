# UNLOCK 2026

Plataforma gamificada de aprendizado de inglês conversacional para falantes de português.

---

## Stack atual

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + TypeScript 5.7 |
| Bundler | Vite 6 (porta 3000) |
| Roteamento | React Router DOM 7 |
| Estado | Zustand 5 (com `persist`) |
| Estilo | Tailwind CSS 3.4 |
| Shared | npm workspaces (`packages/shared`) |

> **Status:** SPA 100% client-side. Migração para full-stack (Node.js + PostgreSQL) planejada — ver [`REFACTOR_RESEARCH.md`](./REFACTOR_RESEARCH.md).

---

## Funcionalidades

- **120+ lições interativas** em 9 módulos temáticos (12 tipos de slide)
- **3 mini-games arcade** — Word Drop, Word Match, Word Stack
- **SRS (Spaced Repetition System)** — 6 níveis, intervalos [1, 3, 7, 14, 30, 90] dias
- **Sistema de XP e níveis** — 13 níveis (Iniciante → Transcendente)
- **Conquistas e streaks** para consistência diária
- **TTS dual-layer** — MP3 pré-gravado (500ms timeout) → fallback Web Speech API
- **Offline** — todo o progresso em localStorage via Zustand persist

---

## Estrutura

```
UNLOCK_CLEAN_V2/
├── src/                          # Aplicação React principal
│   ├── App.tsx                   # Rotas (lazy-loaded com Suspense)
│   ├── main.tsx                  # Bootstrap
│   ├── pages/
│   │   ├── Home.tsx              # / — missão do dia
│   │   ├── ModuleBrowser.tsx     # /modules
│   │   ├── LessonPlayer.tsx      # /lesson/:id
│   │   ├── Homework.tsx          # /homework/:id
│   │   ├── SelectMode.tsx        # /game/select/:lessonId
│   │   ├── GamePage.tsx          # /game/:mode/:lessonId
│   │   ├── QuickPlay.tsx         # /quickplay
│   │   ├── DailyDrill.tsx        # /daily-drill
│   │   ├── WarmUp.tsx            # /warmup/:mode/:lessonId
│   │   ├── Dashboard.tsx         # /dashboard
│   │   └── Profile.tsx           # /profile
│   ├── components/
│   │   ├── layout/               # Background, BottomNav, Header
│   │   ├── lessons/              # SlideRenderer (12 tipos)
│   │   ├── games/                # WordDrop, WordMatch, WordStack
│   │   ├── SpeakButton.tsx
│   │   ├── SpeakableText.tsx
│   │   └── SpeedControl.tsx
│   ├── data/
│   │   ├── lessons.ts            # Cache e carregamento async de lições
│   │   ├── lessonSummaries.ts    # Metadados leves (sync)
│   │   └── lessonModules/        # module1.ts … module9.ts
│   ├── stores/
│   │   └── progressStore.ts      # Store Zustand global (persistido)
│   ├── utils/
│   │   ├── tts.ts                # TTS: MP3 → fallback Web Speech API
│   │   ├── sounds.ts             # Efeitos sonoros via Web Audio API
│   │   └── matchAnswer.ts        # Validação fuzzy (Levenshtein ≤ 2)
│   └── styles/
│       └── globals.css
├── packages/
│   └── shared/
│       └── src/
│           ├── types.ts          # Tipos do domínio (Lesson, WordStats, etc.)
│           ├── constants.ts      # XP, SRS_INTERVALS, LEVELS, ACHIEVEMENTS
│           └── index.ts
├── public/
│   └── audio/en/                 # Áudios MP3 pré-gravados
├── scripts/
│   ├── validate-lessons.mjs
│   └── split-lessons-data.mjs
├── index.html
├── vite.config.js                # Porta 3000, aliases @/ e @unlock2026/shared
├── tailwind.config.ts
├── tsconfig.json
└── package.json                  # @unlock2026/web
```

---

## Rotas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | `Home` | Missão do dia + acesso rápido |
| `/modules` | `ModuleBrowser` | Catálogo com busca e filtros |
| `/lesson/:id` | `LessonPlayer` | Slides com navegação, favorito e XP |
| `/homework/:id` | `Homework` | Múltipla escolha → digitação (se errou) |
| `/game/select/:lessonId` | `SelectMode` | Escolha entre os 3 modos |
| `/game/:mode/:lessonId` | `GamePage` | Wrapper do jogo; `quickplay` é caso especial |
| `/quickplay` | `QuickPlay` | Lição virtual com palavras fracas |
| `/daily-drill` | `DailyDrill` | Fase 1 (3 jogos) + Fase 2 (lição, dever, revisão) |
| `/warmup/:mode/:lessonId` | `WarmUp` | Warmup (5 palavras) ou review (10, word-stack) |
| `/dashboard` | `Dashboard` | XP, nível, palavras prioritárias |
| `/profile` | `Profile` | Perfil e configurações |

---

## Como rodar

```bash
npm install          # instala dependências (workspaces)
npm run dev          # dev server na porta 3000
npm run build        # valida conteúdo + tsc + vite build
```

---

## Estado global (`progressStore.ts`)

Único store Zustand, persistido em `localStorage` como `unlock2026_progress`.

| Categoria | Métodos principais |
|-----------|--------------------|
| XP/Nível | `addXP(amount)` |
| Streak | `updateStreak()` |
| Lições | `completeLesson()`, `saveSlideProgress()`, `toggleFavorite()` |
| Jogos | `completeGame(id, mode, score, max)` |
| Palavras | `trackWord()`, `getWeakWords()`, `getWordsForReview()`, `getPriorityWords()` |
| Conquistas | `checkAchievements()` |
| Meta diária | `getDailyGoalStatus()` |

---

## Carregamento de lições

- **Metadados** (`LESSON_SUMMARIES`) — síncronos, sempre disponíveis
- **Conteúdo completo** (slides + vocab) — lazy-loaded por módulo com cache em `Map`

```ts
loadLessonById(id)          // → Promise<Lesson | undefined>
loadLessonsByModule(module) // → Promise<Lesson[]>
loadAllLessons()            // → Promise<Lesson[]>
```

---

## Sistema de TTS

1. Busca `/audio/en/{slug}.mp3` (timeout 500ms)
2. Fallback: `window.speechSynthesis` — Google US English / Microsoft Zira
3. Velocidade persiste em `unlock2026_tts_speed` (0.4× – 1.2×)

---

## Validação de respostas (`matchAnswer.ts`)

1. Exato normalizado (lowercase, sem pontuação)
2. Expansão de 69 contrações (`what's → what is`)
3. Levenshtein ≤ 1 (≤4 chars) ou ≤ 2 (>4 chars)

---

## Convenções

- **Sem backend agora** — dados novos vão para `progressStore` ou `lessonModules/`
- **Tipos em `packages/shared/src/types.ts`** — nunca duplicar em `src/`
- **Lições carregadas async** — usar `loadLessonById()`, não importar `module*.ts` direto
- **Tailwind com design tokens** — `unlock-gold`, `unlock-green` etc.; nunca hardcode hex
- **Rotas só em `App.tsx`** — não criar roteamento paralelo
- **`lessonId='quickplay'`** é caso especial em `GamePage` — lição vem de `location.state`
