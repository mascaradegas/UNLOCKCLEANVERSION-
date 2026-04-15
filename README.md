# UNLOCK 2026

Plataforma gamificada de aprendizado de inglês conversacional para falantes de português. Construída como app web com React, sem necessidade de backend.

## O que é

UNLOCK 2026 é um app de aprendizado de inglês com:

- **120+ lições interativas** organizadas em 9 módulos temáticos
- **3 mini-games** com mecânicas arcade (Word Drop, Word Match, Word Stack)
- **Repetição espaçada (SRS)** para fixação de vocabulário
- **Sistema de XP e níveis** (13 níveis, de Iniciante a Transcendente)
- **Conquistas e streaks** para manter consistência diária
- **TTS dual-layer** — áudios MP3 pré-gravados com fallback para a Web Speech API do navegador
- **100% offline** — todo o progresso fica salvo no localStorage

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + TypeScript 5.7 |
| Bundler | Vite 6 |
| Roteamento | React Router DOM 7 |
| Estado | Zustand 5 (com persist) |
| Estilo | Tailwind CSS 3.4 |
| Monorepo | npm workspaces |

## Estrutura

```
UNLOCKCLEANVERSION-/
└── UNLOCK_CLEAN_V2/
    ├── apps/
    │   └── web/              # Aplicação React principal
    │       ├── src/
    │       │   ├── components/   # Componentes reutilizáveis
    │       │   ├── pages/        # Rotas/telas
    │       │   ├── data/         # Dados das lições (lessons.ts)
    │       │   ├── stores/       # Estado global (Zustand)
    │       │   └── utils/        # TTS, sons, validação
    │       └── public/audio/en/  # Áudios MP3 pré-gravados
    └── packages/
        └── shared/           # Tipos e constantes compartilhados
```

## Como rodar

```bash
cd UNLOCK_CLEAN_V2
npm run install-all   # instala dependências do monorepo
npm run dev           # sobe o dev server na porta 3005
```

## Rotas principais

| Rota | Tela |
|------|------|
| `/` | Home / missão do dia |
| `/modules` | Catálogo de módulos |
| `/lesson/:id` | Player de lição |
| `/game/select/:lessonId` | Seleção de jogo |
| `/game/:mode/:lessonId` | Jogo |
| `/daily-drill` | Desafio diário |
| `/quickplay` | Jogo aleatório |
| `/dashboard` | Estatísticas |
| `/profile` | Perfil do usuário |

## Sistema de áudio

Por padrão o app usa a Web Speech API do navegador. Para ativar áudios pré-gravados com qualidade melhor (OpenAI TTS / ElevenLabs), veja `apps/web/public/audio/en/README.md`.
