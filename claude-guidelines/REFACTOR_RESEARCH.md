# Pesquisa de Arquitetura: Refatoração UNLOCK 2026 (com Backend)

> **Data**: 2026-04-14
> **Contexto**: Migração de SPA 100% client-side para arquitetura full-stack com backend dedicado
> **Perfil do engenheiro**: backend Python (Django/FastAPI), experiência com Vue, React+Vite, algum contato com Next.js e Node

---

## Sumário Executivo

O projeto migra de SPA pura (React + localStorage) para uma arquitetura full-stack onde:

- **Backend Node.js TypeScript** cuida de toda regra de negócio (User, Lesson, SRS, XP, Achievements)
- **Frontend React + Vite** consome a API e gerencia apenas UX e estado de sessão
- **PostgreSQL** como banco de dados
- **Docker Compose** para ambiente local reprodutível

### Decisões rápidas

| Camada | Decisão |
|--------|---------|
| **Arquitetura backend** | Layered Architecture (não Clean Arch completo) |
| **Framework HTTP** | Express + TypeScript |
| **ORM** | Prisma |
| **Validação** | Zod |
| **Auth** | JWT + Refresh Token |
| **Frontend** | React + Vite + React Router 7 (manter) |
| **Server state** | TanStack Query (React Query) |
| **Testes unitários** | Vitest (backend e frontend) |
| **Testes integração** | Vitest + Testcontainers (backend) / MSW (frontend) |
| **Testes E2E** | Playwright |
| **Lint** | ESLint + Prettier + TypeScript strict |

---

## Parte 1 — Arquitetura Backend

### 1.1 Clean Architecture vale a pena?

**Resposta curta: não para este projeto agora.**

Clean Architecture (Uncle Bob) brilha em sistemas com alto acoplamento a frameworks e necessidade de trocar persistência. Ela impõe 4 camadas (Entities → Use Cases → Interface Adapters → Frameworks) com inversão de dependência em todas as direções.

**Por que é overengineering aqui:**

1. O domínio é complexo mas bem-delimitado — 7 entidades (User, Lesson, Word, Game, DailyDrill, Achievement, Session) com regras conhecidas
2. Node.js é stateless por natureza; DI containers são cargo cult nesse ecossistema
3. Prisma já é type-safe o suficiente — um Repository em volta do Prisma adiciona indireção sem ganho
4. O engenheiro vem de Django, onde o padrão é Model + Service + View (Layered), não Enterprise Arch

**Quando promover para Clean Architecture:**
- Quando houver >15 use cases por entidade
- Quando precisar trocar o banco (ex: PostgreSQL → MongoDB)
- Quando o time crescer e precisar de boundaries explícitos entre times

**Recomendação: Layered Architecture simplificada** — mesma separação de concerns sem o overhead.

```
domain/      → entidades e value objects (sem framework)
services/    → lógica de negócio (SRS, XP, mastery, achievements)
controllers/ → handlers HTTP (parsing, status codes, responses)
routes/      → definição de endpoints
middleware/  → auth, validação, error handling, logging
lib/         → prisma client, jwt, logger, errors
```

**Analogia Python:**

| Django/FastAPI | Node.js (Layered) |
|---------------|------------------|
| `models.py` com métodos | `domain/` com classes |
| `services.py` | `services/` |
| View / APIView | `controllers/` |
| `urls.py` | `routes/` |
| Middleware | `middleware/` |
| Django ORM / SQLAlchemy | Prisma |

---

### 1.2 Framework HTTP: Express ✅

**Comparação:**

| | Express | Fastify | NestJS |
|---|---------|---------|--------|
| Curva de aprendizado | Baixa | Média | Alta |
| Tipagem TypeScript | Terceiros (`@types/express`) | Nativa | Nativa (decorators) |
| Performance | Suficiente | 2–3× melhor | Suficiente |
| Analogia Python | Flask/FastAPI sem opiniões | — | Spring Boot |
| Overhead | Mínimo | Mínimo | Alto |

**Por que não NestJS:** é o Spring Boot do Node — decorators, DI container, módulos. Ótimo para times Java migrando. Overengineering para este perfil e domínio.

**Por que não Fastify:** a diferença de performance não é relevante para ~100 req/s de um app educacional. Express tem ecossistema maior.

```typescript
// src/server.ts
import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';
import { router } from './routes';

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use('/api', authMiddleware);
app.use('/api', router);
app.use(errorHandler);

export default app;
```

---

### 1.3 ORM: Prisma ✅

**Comparação:**

| | Prisma | Drizzle | TypeORM | Knex |
|---|--------|---------|---------|------|
| Tipagem | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Migrations | Built-in | Built-in | Built-in | Build-in |
| Dev experience | Alto | Médio | Baixo | Médio |
| Analogia Python | Django ORM | SQLAlchemy Core | — | raw SQL builder |
| Curva para dev Python | Baixa | Média | Alta | Média |

**Por que Prisma:** schema como fonte de verdade, migrations automáticas, queries type-safe com autocompletar, seed nativo. É o mais próximo do Django ORM em termos de "escrever menos para fazer mais".

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id             String   @id @default(cuid())
  email          String   @unique
  password       String
  name           String
  xp             Int      @default(0)
  level          Int      @default(1)
  streak         Int      @default(0)
  longestStreak  Int      @default(0)
  lastActiveDate DateTime?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  wordStats        WordStats[]
  games            Game[]
  achievements     UserAchievement[]
  sessions         StudySession[]

  @@map("users")
}

model WordStats {
  id             String    @id @default(cuid())
  userId         String
  en             String
  pt             String
  emoji          String    @default("📝")
  lessonId       String?
  attempts       Int       @default(0)
  correct        Int       @default(0)
  totalResponseMs Int      @default(0)
  srsLevel       Int       @default(0)
  nextReview     DateTime  @default(now())
  lastSeen       DateTime?
  lastCorrect    DateTime?
  createdAt      DateTime  @default(now())
  updatedAt      DateTime  @updatedAt

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, en])
  @@map("word_stats")
}

model Game {
  id        String   @id @default(cuid())
  userId    String
  lessonId  String
  mode      String   // word-drop | word-match | word-stack
  score     Int
  maxScore  Int
  percent   Int
  isPerfect Boolean  @default(false)
  playedAt  DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("games")
}

model UserAchievement {
  id            String   @id @default(cuid())
  userId        String
  achievementId String
  unlockedAt    DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([userId, achievementId])
  @@map("user_achievements")
}

model StudySession {
  id        String   @id @default(cuid())
  userId    String
  type      String   // lesson | game | review | drill
  lessonId  String?
  score     Int?
  duration  Int?     // segundos
  startedAt DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@map("study_sessions")
}
```

---

### 1.4 Autenticação: JWT + Refresh Token

**Por que não OAuth:** o app é proprietário (usuários criados internamente). OAuth é para "login com Google/GitHub".

**Por que não sessions:** app vai ser consumido por SPA e potencialmente mobile. JWT stateless é o padrão.

**Fluxo:**
- Access token: 1h de validade
- Refresh token: 7d de validade, persistido no cliente
- Renovação automática no interceptor HTTP do frontend

```typescript
// src/lib/jwt.ts
import jwt from 'jsonwebtoken';

interface Payload { userId: string; email: string }

export function generateTokens(payload: Payload) {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '1h' });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET!, { expiresIn: '7d' });
  return { accessToken, refreshToken };
}

export function verifyToken(token: string): Payload {
  return jwt.verify(token, process.env.JWT_SECRET!) as Payload;
}
```

```typescript
// src/middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../lib/jwt';

declare global {
  namespace Express {
    interface Request { userId?: string }
  }
}

export function authMiddleware(req: Request, res: Response, next: NextFunction): void {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) { res.status(401).json({ error: 'No token' }); return; }

  try {
    const payload = verifyToken(token);
    req.userId = payload.userId;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
}
```

---

### 1.5 Exemplo de Service Layer

```typescript
// src/services/SRSService.ts
import { SRS_INTERVALS } from '@unlock2026/shared';

export class SRSService {
  calculateNextReview(currentLevel: number, isCorrect: boolean): Date {
    const newLevel = isCorrect
      ? Math.min(currentLevel + 1, SRS_INTERVALS.length - 1)
      : 0;
    const next = new Date();
    next.setDate(next.getDate() + SRS_INTERVALS[newLevel]);
    return next;
  }

  calculateNewLevel(current: number, isCorrect: boolean): number {
    return isCorrect ? Math.min(current + 1, SRS_INTERVALS.length - 1) : 0;
  }
}
```

```typescript
// src/services/WordService.ts
import { prisma } from '../lib/prisma';
import { SRSService } from './SRSService';
import { XP } from '@unlock2026/shared';

interface TrackAttemptParams {
  userId: string;
  en: string;
  pt: string;
  emoji?: string;
  lessonId?: string;
  correct: boolean;
  responseTime: number;
}

export class WordService {
  constructor(private srs: SRSService) {}

  async trackAttempt(params: TrackAttemptParams) {
    const { userId, en, pt, emoji = '📝', lessonId, correct, responseTime } = params;
    const now = new Date();

    const existing = await prisma.wordStats.findUnique({
      where: { userId_en: { userId, en } },
    });

    const currentLevel = existing?.srsLevel ?? 0;
    const newLevel = this.srs.calculateNewLevel(currentLevel, correct);
    const nextReview = this.srs.calculateNextReview(currentLevel, correct);

    return prisma.wordStats.upsert({
      where: { userId_en: { userId, en } },
      create: {
        userId, en, pt, emoji, lessonId,
        attempts: 1,
        correct: correct ? 1 : 0,
        totalResponseMs: responseTime,
        srsLevel: newLevel,
        nextReview,
        lastSeen: now,
        lastCorrect: correct ? now : null,
      },
      update: {
        attempts: { increment: 1 },
        correct: correct ? { increment: 1 } : undefined,
        totalResponseMs: { increment: responseTime },
        srsLevel: newLevel,
        nextReview,
        lastSeen: now,
        lastCorrect: correct ? now : undefined,
      },
    });
  }

  async getWordsForReview(userId: string) {
    return prisma.wordStats.findMany({
      where: { userId, nextReview: { lte: new Date() } },
      orderBy: { nextReview: 'asc' },
    });
  }

  async getPriorityWords(userId: string, limit = 20) {
    const words = await prisma.wordStats.findMany({ where: { userId } });

    return words
      .map((w) => {
        const mastery = w.attempts > 0 ? (w.correct / w.attempts) * 100 : 0;
        const isOverdue = w.nextReview <= new Date() ? 35 : 0;
        const errorWeight = w.attempts > 0 ? (1 - w.correct / w.attempts) * 35 : 0;
        const priority = isOverdue + errorWeight + (100 - mastery) * 0.3;
        return { ...w, priority };
      })
      .sort((a, b) => b.priority - a.priority)
      .slice(0, limit);
  }
}
```

```typescript
// src/controllers/WordController.ts
import { Request, Response } from 'express';
import { z } from 'zod';
import { WordService } from '../services/WordService';

const TrackAttemptSchema = z.object({
  en: z.string().min(1),
  pt: z.string().min(1),
  emoji: z.string().optional(),
  lessonId: z.string().optional(),
  correct: z.boolean(),
  responseTime: z.number().int().min(0),
});

export class WordController {
  constructor(private service: WordService) {}

  async trackAttempt(req: Request, res: Response): Promise<void> {
    const parse = TrackAttemptSchema.safeParse(req.body);
    if (!parse.success) {
      res.status(400).json({ error: 'Invalid request', details: parse.error.errors });
      return;
    }

    const result = await this.service.trackAttempt({
      userId: req.userId!,
      ...parse.data,
    });

    res.json({ success: true, data: result });
  }

  async getForReview(req: Request, res: Response): Promise<void> {
    const words = await this.service.getWordsForReview(req.userId!);
    res.json({ success: true, data: words });
  }
}
```

---

## Parte 2 — Estrutura do Monorepo

```
UNLOCK_CLEAN_V2/
├── apps/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── domain/               # Entidades e value objects (sem framework)
│   │   │   │   ├── User.ts
│   │   │   │   ├── Word.ts
│   │   │   │   └── Game.ts
│   │   │   ├── services/             # Lógica de negócio
│   │   │   │   ├── SRSService.ts
│   │   │   │   ├── WordService.ts
│   │   │   │   ├── GameService.ts
│   │   │   │   ├── UserService.ts
│   │   │   │   ├── XPService.ts
│   │   │   │   ├── AchievementService.ts
│   │   │   │   └── DailyDrillService.ts
│   │   │   ├── controllers/          # HTTP handlers
│   │   │   │   ├── AuthController.ts
│   │   │   │   ├── UserController.ts
│   │   │   │   ├── WordController.ts
│   │   │   │   ├── GameController.ts
│   │   │   │   └── DailyDrillController.ts
│   │   │   ├── routes/               # Definição de endpoints
│   │   │   │   ├── index.ts
│   │   │   │   ├── auth.ts
│   │   │   │   ├── users.ts
│   │   │   │   ├── words.ts
│   │   │   │   └── games.ts
│   │   │   ├── middleware/
│   │   │   │   ├── auth.ts
│   │   │   │   ├── errorHandler.ts
│   │   │   │   └── requestLogger.ts
│   │   │   └── lib/
│   │   │       ├── prisma.ts         # Prisma client singleton
│   │   │       ├── jwt.ts
│   │   │       ├── logger.ts
│   │   │       └── errors.ts         # AppError, NotFoundError, etc.
│   │   ├── prisma/
│   │   │   ├── schema.prisma
│   │   │   ├── seed.ts
│   │   │   └── migrations/           # Auto-geradas
│   │   ├── __tests__/
│   │   │   ├── unit/
│   │   │   │   ├── SRSService.test.ts
│   │   │   │   └── WordService.test.ts
│   │   │   └── integration/
│   │   │       ├── words.test.ts
│   │   │       └── games.test.ts
│   │   ├── Dockerfile
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vitest.config.ts
│   │   ├── .eslintrc.json
│   │   └── .env.example
│   │
│   └── frontend/                     # React + Vite (src/ atual)
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   ├── pages/
│       │   ├── components/
│       │   ├── stores/               # Zustand: apenas UI state
│       │   ├── hooks/                # TanStack Query + lógica de negócio
│       │   │   ├── useWords.ts
│       │   │   ├── useProgress.ts
│       │   │   └── useAuth.ts
│       │   ├── data/                 # Dados das lições (mantidos no client)
│       │   ├── utils/
│       │   └── __tests__/
│       │       ├── mocks/
│       │       │   ├── handlers.ts   # MSW handlers
│       │       │   └── server.ts
│       │       └── setup.ts
│       ├── e2e/                      # Playwright
│       │   └── lessonFlow.spec.ts
│       ├── vite.config.js
│       ├── vitest.config.ts
│       ├── playwright.config.ts
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── shared/                       # Tipos e constantes compartilhados
│       └── src/
│           ├── types.ts              # User, Lesson, WordStats, Game, etc.
│           ├── constants.ts          # XP, SRS_INTERVALS, LEVELS, ACHIEVEMENTS
│           └── index.ts
│
├── scripts/
│   └── validate-lessons.mjs
├── docker-compose.yml
├── .env.example
└── package.json                      # Scripts do monorepo
```

---

## Parte 3 — Docker Setup

```yaml
# docker-compose.yml
version: '3.9'

services:
  postgres:
    image: postgres:16-alpine
    container_name: unlock_postgres
    environment:
      POSTGRES_DB: unlock_dev
      POSTGRES_USER: dev_user
      POSTGRES_PASSWORD: dev_password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U dev_user"]
      interval: 10s
      timeout: 5s
      retries: 5

  backend:
    build:
      context: .
      dockerfile: apps/backend/Dockerfile
    container_name: unlock_backend
    environment:
      NODE_ENV: development
      DATABASE_URL: postgresql://dev_user:dev_password@postgres:5432/unlock_dev
      JWT_SECRET: dev-secret-change-in-prod
      REFRESH_SECRET: dev-refresh-secret-change-in-prod
      CORS_ORIGIN: http://localhost:3000
      PORT: 3001
    ports:
      - "3001:3001"
    volumes:
      - ./apps/backend/src:/app/apps/backend/src     # hot reload
      - ./apps/backend/prisma:/app/apps/backend/prisma
    depends_on:
      postgres:
        condition: service_healthy
    command: npm run dev

  frontend:
    build:
      context: .
      dockerfile: apps/frontend/Dockerfile.dev
    container_name: unlock_frontend
    environment:
      VITE_API_URL: http://localhost:3001/api
    ports:
      - "3000:3000"
    volumes:
      - ./apps/frontend/src:/app/apps/frontend/src   # hot reload
    depends_on:
      - backend

volumes:
  postgres_data:
```

```dockerfile
# apps/backend/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
COPY packages/ ./packages/
COPY apps/backend/ ./apps/backend/
RUN npm ci
WORKDIR /app/apps/backend
RUN npx prisma generate
EXPOSE 3001
CMD ["npm", "run", "dev"]
```

```bash
# Comandos do dia-a-dia
docker compose up -d                                    # sobe tudo
docker exec unlock_backend npx prisma migrate dev       # rodar migrations
docker exec unlock_backend npm run db:seed              # seed de dados
docker compose logs -f backend                          # logs do backend
docker compose down -v                                  # destrói tudo (inclusive DB)
```

```env
# .env.example (raiz)
DATABASE_URL=postgresql://dev_user:dev_password@localhost:5432/unlock_dev
JWT_SECRET=dev-secret-change-in-prod
REFRESH_SECRET=dev-refresh-secret-change-in-prod
PORT=3001
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
LOG_LEVEL=debug
```

---

## Parte 4 — Lint

### Backend (`apps/backend/.eslintrc.json`)

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "plugins": ["@typescript-eslint", "import"],
  "rules": {
    "@typescript-eslint/explicit-function-return-types": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always"
      }
    ]
  }
}
```

### Frontend (`apps/frontend/.eslintrc.json`)

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "ecmaVersion": 2022, "sourceType": "module" },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended"
  ],
  "plugins": ["@typescript-eslint", "react-hooks"],
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

### `.prettierrc.json` (compartilhado)

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2
}
```

### Pre-commit com Husky + lint-staged

```bash
npm install -D husky lint-staged
npx husky init
```

```json
// package.json (raiz)
{
  "lint-staged": {
    "apps/backend/src/**/*.ts": ["eslint --fix", "prettier --write"],
    "apps/frontend/src/**/*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

---

## Parte 5 — Frontend: React + Vite (manter)

### Por que manter React + Vite

Com backend, o argumento muda — mas a conclusão não.

| Aspecto | Sem backend | Com backend |
|---------|------------|------------|
| Estado | Zustand + localStorage | TanStack Query (server) + Zustand (UI) |
| Auth | Não tinha | JWT interceptor no axios |
| Real-time | Não tinha | WebSocket / SSE (futuro) |
| Deploy | SPA estática | SPA estática (backend separado) |

O frontend continua sendo uma SPA altamente interativa com games que renderizam >60fps. Vite é ideal para isso. Nada muda arquiteturalmente.

**O que muda na prática:**

```typescript
// Antes: Zustand persist
const { trackWord } = useProgressStore();
trackWord({ en: 'hello', pt: 'olá', correct: true, responseTime: 2000 });

// Depois: TanStack Query mutation
const trackMutation = useMutation({
  mutationFn: (params: TrackWordParams) =>
    api.post('/api/words/track', params).then(r => r.data),
  onMutate: (params) => {
    // Optimistic update local (feedback imediato)
    progressStore.getState().optimisticTrackWord(params);
  },
  onSuccess: (serverData) => {
    queryClient.invalidateQueries({ queryKey: ['words'] });
  },
});
```

### Por que não Next.js (mesmo com backend)

Next.js traz valor quando o frontend precisa de SSR para SEO ou quando o backend é interno (Route Handlers). Neste caso:

- O app é autenticado — bots não acessam conteúdo relevante
- O backend já é separado — Route Handlers seriam duplicação
- Web Audio API, animações de jogo e localStorage são client-only de qualquer forma
- Migração custaria 1–2 semanas sem ganho mensurável

### Por que não Vue 3

O dev tem experiência com Vue, mas:
- O projeto já está em React (reescrever seria desperdício)
- Ecossistema de games e animações é maior em React
- TanStack Query tem suporte React-first

### Roadmap de evolução

**2026 (agora):** React + Vite + React Router 7 + TanStack Query + Zustand

**2027+ (quando backend estiver maduro):** considerar Remix — React Router 7 já é a base. Loaders/actions substituem TanStack Query + fetch sem mudar os componentes React.

---

## Parte 6 — Estratégia de Testes

### 6.1 Ferramentas escolhidas

| Camada | Ferramenta | Por quê |
|--------|-----------|---------|
| Unit (backend + frontend) | **Vitest** | 3–5× mais rápido que Jest; ESM nativo; mesma API |
| Integração backend | **Vitest + Testcontainers** | PostgreSQL real em container; zero mock de DB |
| Integração frontend | **Vitest + MSW** | Intercepta HTTP sem mockar TanStack Query |
| E2E | **Playwright** | Multi-browser, open-source, async/await nativo |
| Coverage | **@vitest/coverage-v8** | Nativo no Vitest, integra com CI |

**Vitest vs Jest:** Vitest é drop-in replacement (mesma API: `describe`, `it`, `expect`, `vi`). Use Vitest — Jest só vale se já houver investimento pesado em configuração existente.

**Playwright vs Cypress:** Playwright é 100% open-source, suporta Safari nativo, tem API mais moderna (async/await em vez de command queue), e não requer conta para CI.

---

### 6.2 Testes unitários — Backend

```typescript
// apps/backend/vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json-summary', 'html'],
      thresholds: { lines: 80, functions: 85, branches: 75 },
      exclude: ['node_modules/', 'dist/', 'prisma/'],
    },
  },
});
```

```typescript
// apps/backend/__tests__/unit/SRSService.test.ts
import { describe, it, expect } from 'vitest';
import { SRSService } from '@/services/SRSService';
import { SRS_INTERVALS } from '@unlock2026/shared';

describe('SRSService', () => {
  const srs = new SRSService();

  describe('calculateNewLevel', () => {
    it('increments level on correct answer', () => {
      expect(srs.calculateNewLevel(1, true)).toBe(2);
      expect(srs.calculateNewLevel(4, true)).toBe(5);
    });

    it('caps level at SRS_INTERVALS.length - 1', () => {
      const max = SRS_INTERVALS.length - 1;
      expect(srs.calculateNewLevel(max, true)).toBe(max);
    });

    it('resets level to 0 on wrong answer', () => {
      expect(srs.calculateNewLevel(4, false)).toBe(0);
      expect(srs.calculateNewLevel(1, false)).toBe(0);
    });
  });

  describe('calculateNextReview', () => {
    it('schedules next review based on new level', () => {
      const result = srs.calculateNextReview(0, true); // level 0 → 1
      const expectedDays = SRS_INTERVALS[1];
      const diff = Math.round(
        (result.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );
      expect(diff).toBe(expectedDays);
    });

    it('schedules review in 1 day on wrong answer', () => {
      const result = srs.calculateNextReview(4, false); // reset to 0
      const diff = Math.round(
        (result.getTime() - Date.now()) / (1000 * 60 * 60 * 24)
      );
      expect(diff).toBe(SRS_INTERVALS[0]); // 1 day
    });
  });
});
```

---

### 6.3 Testes de integração — Backend com Testcontainers

```typescript
// apps/backend/__tests__/integration/words.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { PostgreSqlContainer } from '@testcontainers/postgresql';
import request from 'supertest';
import app from '@/server';

let stopContainer: () => Promise<void>;

beforeAll(async () => {
  const container = await new PostgreSqlContainer().start();
  process.env.DATABASE_URL = container.getConnectionUri();

  // Rodar migrations no container de teste
  const { execSync } = await import('child_process');
  execSync('npx prisma migrate deploy', { env: process.env });

  stopContainer = () => container.stop();
});

afterAll(() => stopContainer());

describe('POST /api/words/track', () => {
  it('should track a word attempt', async () => {
    // Criar usuário primeiro
    const authRes = await request(app)
      .post('/api/auth/register')
      .send({ email: 'test@test.com', password: 'Pass123!', name: 'Test' });

    const { accessToken } = authRes.body.data.tokens;

    const res = await request(app)
      .post('/api/words/track')
      .set('Authorization', `Bearer ${accessToken}`)
      .send({ en: 'hello', pt: 'olá', correct: true, responseTime: 2000 });

    expect(res.status).toBe(200);
    expect(res.body.data).toMatchObject({
      en: 'hello',
      pt: 'olá',
      attempts: 1,
      correct: 1,
      srsLevel: 1,
    });
  });

  it('should return 401 without token', async () => {
    const res = await request(app)
      .post('/api/words/track')
      .send({ en: 'hello', pt: 'olá', correct: true, responseTime: 2000 });

    expect(res.status).toBe(401);
  });
});
```

---

### 6.4 Testes de componente — Frontend com MSW

```typescript
// apps/frontend/src/__tests__/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/words/track', async ({ request }) => {
    const body = await request.json() as { correct: boolean };
    return HttpResponse.json({
      en: 'hello', pt: 'olá', attempts: 1,
      correct: body.correct ? 1 : 0,
      srsLevel: body.correct ? 1 : 0,
    });
  }),

  http.get('/api/progress', () => {
    return HttpResponse.json({
      xp: 1250, level: 5, streak: 12,
      lessonsCompleted: ['lesson-1'],
    });
  }),
];
```

```typescript
// apps/frontend/src/__tests__/setup.ts
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import '@testing-library/jest-dom';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => { cleanup(); server.resetHandlers(); });
afterAll(() => server.close());
```

---

### 6.5 Testes E2E — Playwright

```typescript
// apps/frontend/playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  timeout: 15_000,
  retries: 1,
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: [
    { command: 'npm run dev --prefix apps/backend', port: 3001 },
    { command: 'npm run dev --prefix apps/frontend', port: 3000, reuseExistingServer: true },
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
  ],
});
```

```typescript
// apps/frontend/e2e/lessonFlow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Lesson → Game flow', () => {
  test.beforeEach(async ({ page }) => {
    // Registrar e logar usuário de teste
    await page.goto('/');
    // ... setup de auth
  });

  test('should complete lesson and earn XP', async ({ page }) => {
    await page.goto('/modules');
    await page.click('[data-lesson-id="lesson-1"]');
    await page.click('text=Play Lesson');
    await page.waitForURL('**/lesson/**');

    // Navegar todos os slides
    while (await page.locator('button:has-text("Next")').isVisible()) {
      await page.click('button:has-text("Next")');
    }

    await expect(page.locator('text=Lesson Complete')).toBeVisible();
  });
});
```

---

### 6.6 Pipeline CI/CD (GitHub Actions)

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: cd apps/backend && npm run lint
      - run: cd apps/backend && npm run type-check
      - run: cd apps/backend && npm run test:coverage
        env:
          DATABASE_URL: postgresql://postgres:password@localhost:5432/unlock_test
      - uses: codecov/codecov-action@v3
        with: { files: ./apps/backend/coverage/coverage-final.json }

  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: cd apps/frontend && npm run lint
      - run: cd apps/frontend && npm run type-check
      - run: cd apps/frontend && npm run test:coverage
      - run: npm run build

  e2e:
    runs-on: ubuntu-latest
    needs: [backend, frontend]
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test --project=chromium
      - uses: actions/upload-artifact@v3
        if: failure()
        with: { name: playwright-report, path: playwright-report/ }
```

---

## Parte 7 — Roadmap de Migração

### Fase 1 — Setup de infraestrutura (1 semana)
- [ ] Criar `apps/backend/` com Express + Prisma + TypeScript
- [ ] Docker Compose com PostgreSQL + backend + frontend
- [ ] Schema Prisma: User, WordStats, Game, UserAchievement, StudySession
- [ ] Auth: registro, login, refresh token
- [ ] CI: lint + type-check no backend

### Fase 2 — Core do backend (2 semanas)
- [ ] `SRSService` + testes unitários
- [ ] `WordService.trackAttempt()` + `getForReview()` + `getPriorityWords()`
- [ ] `GameService.recordResult()` — grava jogo, atualiza palavras, premia XP
- [ ] `UserService.addXP()` com cálculo de level
- [ ] Testes de integração com Testcontainers

### Fase 3 — Integração frontend (1 semana)
- [ ] Instalar TanStack Query no frontend
- [ ] Substituir `progressStore.trackWord()` por mutation da API
- [ ] Substituir `getWeakWords()` / `getWordsForReview()` por queries da API
- [ ] Setup MSW para testes de componente
- [ ] Manter `progressStore` apenas para UI state local (animações, toasts, etc.)

### Fase 4 — Qualidade e polish (1 semana)
- [ ] ESLint + Prettier + Husky em ambos
- [ ] Coverage gates no CI (80% geral, 90%+ em services/)
- [ ] Setup Playwright + 3 testes E2E críticos
- [ ] Documentar endpoints (OpenAPI/Swagger ou README)

---

## Referências

- **Clean Architecture** — Robert C. Martin (Uncle Bob)
- **Patterns of Enterprise Application Architecture** — Martin Fowler (Service Layer, Repository)
- **Domain-Driven Design** — Eric Evans
- **Effective TypeScript** — Dan Vanderkam
- **Prisma Docs** — schema, migrations, relations
- **TanStack Query Docs** — mutations, optimistic updates, offline sync
- **Playwright Docs** — webServer, fixtures, multi-project
- **Testcontainers for Node.js** — PostgreSQL integration testing
