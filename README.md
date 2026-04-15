# UNLOCK 2026

Plataforma de aprendizado de inglês conversacional com mini-games, sistema de revisão espaçada e trilhas de conteúdo organizadas em módulos temáticos. Funciona 100% no navegador, sem necessidade de conta ou servidor.

---

## Como rodar

Você precisa ter o **[Node.js](https://nodejs.org/)** instalado (versão 18 ou superior).

```bash
# 1. Clone o repositório
git clone <url-do-repositorio>
cd UNLOCK_CLEAN_V2

# 2. Instale as dependências
npm run install-all

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Abra o navegador em **http://localhost:3000**. O app carrega na hora — nenhuma conta ou configuração extra é necessária.

Para gerar a versão final para produção:

```bash
npm run build
```

---

## O que é o projeto

- **9 módulos** com 120+ lições interativas (slides, exemplos, quizzes)
- **3 mini-games** — Word Drop, Word Match, Word Stack
- **Revisão espaçada (SRS)** — o app lembra quais palavras você está esquecendo
- **Daily Drill** — treino diário guiado com jogos + lição + dever
- **Progressão** — XP, níveis, conquistas e sequência de dias (streak)
- **Offline** — todo o progresso é salvo no próprio navegador (localStorage)

---

## Estrutura do projeto

```
UNLOCK_CLEAN_V2/
├── apps/                    # Aplicação React (tudo que o usuário vê)
│   ├── src/
│   │   ├── App.tsx          # Todas as rotas da aplicação
│   │   ├── pages/           # Uma pasta = uma tela
│   │   ├── components/      # Componentes reutilizáveis (games, slides, layout)
│   │   ├── data/            # Conteúdo das lições (módulo 1–9)
│   │   ├── stores/          # Estado global do usuário (progressStore.ts)
│   │   └── utils/           # TTS, sons, validação de respostas
│   └── public/audio/en/     # Áudios MP3 pré-gravados (opcional)
├── packages/shared/src/
│   ├── types.ts             # Todos os tipos TypeScript do domínio
│   └── constants.ts         # XP, níveis, intervalos SRS, conquistas
└── scripts/                 # Scripts de validação e organização de lições
```

---

## Convenções essenciais

### Onde colocar cada coisa

| O quê | Onde |
|-------|------|
| Novo tipo TypeScript | `packages/shared/src/types.ts` |
| Nova constante global | `packages/shared/src/constants.ts` |
| Nova rota | Apenas em `apps/src/App.tsx` |
| Dados de lição nova | `apps/src/data/lessonModules/module{N}.ts` |
| Estado do usuário | `apps/src/stores/progressStore.ts` |
| Guias e docs gerados por IA | `claude-guidelines/` (não na raiz) |

### Regras que não podem ser quebradas

- **Sem backend** — não há servidor. Dados novos vão para `progressStore` ou `lessonModules/`.
- **Tipos nunca duplicados** — se o tipo já existe em `packages/shared/src/types.ts`, use-o. Não crie uma cópia em `apps/`.
- **Lições carregadas async** — sempre use `loadLessonById(id)` da `data/lessons.ts`. Nunca importe `module*.ts` diretamente em componentes.
- **Cores via design tokens** — use `unlock-gold`, `unlock-green`, etc. definidos no Tailwind. Nunca escreva cores hex no JSX.
- **`lessonId='quickplay'` é especial** — em `GamePage`, quando o lessonId é `'quickplay'`, a lição vem de `location.state`, não de uma carga async.

### Estilo de código

- TypeScript com strict mode habilitado
- Componentes React com props tipadas (sem `any`)
- Estado global apenas via Zustand (`progressStore`) — sem Context API para estado de usuário
- Mutações no store são seguras dentro de `set()` (Immer está ativo)

---

## Trabalhando com IA (Claude / Codex)

O arquivo `CLAUDE.md` na raiz contém o mapa completo do projeto para assistentes de IA. Se você for usar Claude Code ou Codex para contribuir, eles lerão esse arquivo automaticamente.

**Dicas ao pedir ajuda à IA:**

- Informe a rota ou página afetada (ex: `/homework/:id` → `Homework.tsx`)
- Mencione se a mudança envolve estado (`progressStore`), tipos (`types.ts`) ou conteúdo de lição (`lessonModules/`)
- Peça para a IA ler o arquivo antes de modificar — ela tem acesso ao `CLAUDE.md` com o mapa completo

---

## Scripts disponíveis

```bash
npm run dev           # Servidor de desenvolvimento (porta 3000)
npm run build         # Build de produção (valida + compila + empacota)
npm run install-all   # Instala dependências do monorepo completo
npm run organize      # Reorganiza lessonSummaries.ts automaticamente
```
