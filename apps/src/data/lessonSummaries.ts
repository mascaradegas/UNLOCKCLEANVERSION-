import type { Lesson } from '@unlock2026/shared';

export type LessonSummary = Pick<Lesson, 'id' | 'title' | 'emoji' | 'description' | 'module' | 'order'> & {
  vocabularyCount: number;
};

export const LESSON_SUMMARIES: LessonSummary[] = [
  {
    "id": "survival-phrases",
    "title": "SURVIVAL PHRASES",
    "emoji": "🆘🗣️",
    "description": "Frases de sobrevivência",
    "module": 1,
    "order": 1,
    "vocabularyCount": 25
  },
  {
    "id": "is-are",
    "title": "IS / ARE",
    "emoji": "✅🔵",
    "description": "Ser / Estar",
    "module": 1,
    "order": 2,
    "vocabularyCount": 25
  },
  {
    "id": "want",
    "title": "WANT",
    "emoji": "💭✨",
    "description": "Querer",
    "module": 1,
    "order": 3,
    "vocabularyCount": 25
  },
  {
    "id": "need",
    "title": "NEED",
    "emoji": "💡❗",
    "description": "Precisar",
    "module": 1,
    "order": 4,
    "vocabularyCount": 25
  },
  {
    "id": "what",
    "title": "WHAT",
    "emoji": "❓🤔",
    "description": "Perguntar \"o que\" / \"qual\"",
    "module": 1,
    "order": 5,
    "vocabularyCount": 25
  },
  {
    "id": "where",
    "title": "WHERE",
    "emoji": "📍❓",
    "description": "Perguntar sobre lugares",
    "module": 1,
    "order": 6,
    "vocabularyCount": 25
  },
  {
    "id": "who",
    "title": "WHO",
    "emoji": "👤❓",
    "description": "Perguntar sobre pessoas",
    "module": 1,
    "order": 7,
    "vocabularyCount": 24
  },
  {
    "id": "how-much",
    "title": "HOW MUCH",
    "emoji": "💰❓",
    "description": "Quanto",
    "module": 1,
    "order": 8,
    "vocabularyCount": 25
  },
  {
    "id": "can",
    "title": "CAN",
    "emoji": "💪✅",
    "description": "Poder / Conseguir",
    "module": 1,
    "order": 9,
    "vocabularyCount": 25
  },
  {
    "id": "have-to",
    "title": "HAVE TO",
    "emoji": "✋📝",
    "description": "Ter que",
    "module": 1,
    "order": 10,
    "vocabularyCount": 25
  },
  {
    "id": "need-to",
    "title": "NEED TO",
    "emoji": "⚡📝",
    "description": "Precisar fazer",
    "module": 1,
    "order": 11,
    "vocabularyCount": 25
  },
  {
    "id": "imperative",
    "title": "IMPERATIVE",
    "emoji": "📢👆",
    "description": "Comandos",
    "module": 1,
    "order": 12,
    "vocabularyCount": 25
  },
  {
    "id": "open-close",
    "title": "OPEN / CLOSE",
    "emoji": "🚪🔒",
    "description": "Abre / Fecha",
    "module": 1,
    "order": 13,
    "vocabularyCount": 10
  },
  {
    "id": "phrasal-commands",
    "title": "PHRASAL COMMANDS",
    "emoji": "📝📢",
    "description": "Fill out, turn off...",
    "module": 1,
    "order": 14,
    "vocabularyCount": 25
  },
  {
    "id": "at-work-basic",
    "title": "AT WORK (Basic)",
    "emoji": "💼👔",
    "description": "Trabalho",
    "module": 1,
    "order": 15,
    "vocabularyCount": 25
  },
  {
    "id": "pay-hours",
    "title": "PAY & HOURS",
    "emoji": "💰⏰",
    "description": "Pagamento e horário",
    "module": 1,
    "order": 16,
    "vocabularyCount": 25
  },
  {
    "id": "talking-to-boss",
    "title": "TALKING TO THE BOSS",
    "emoji": "🤝👔",
    "description": "Falando com o chefe / contractor",
    "module": 1,
    "order": 17,
    "vocabularyCount": 25
  },
  {
    "id": "safety-commands",
    "title": "SAFETY COMMANDS",
    "emoji": "⚠️🦺",
    "description": "Comandos de segurança",
    "module": 1,
    "order": 18,
    "vocabularyCount": 25
  },
  {
    "id": "emergency-911",
    "title": "EMERGENCY (911)",
    "emoji": "🚨🆘",
    "description": "Emergência",
    "module": 1,
    "order": 19,
    "vocabularyCount": 25
  },
  {
    "id": "asking-for-help",
    "title": "ASKING FOR HELP",
    "emoji": "🙋❓",
    "description": "Pedindo ajuda",
    "module": 1,
    "order": 20,
    "vocabularyCount": 25
  },
  {
    "id": "subject-pronouns",
    "title": "Subject Pronouns",
    "emoji": "👤📝",
    "description": "I, you, he, she...",
    "module": 2,
    "order": 1,
    "vocabularyCount": 9
  },
  {
    "id": "object-pronouns",
    "title": "Object Pronouns",
    "emoji": "👤➡️",
    "description": "me, you, him, her...",
    "module": 2,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "possessive-adjectives",
    "title": "Possessive Adjectives",
    "emoji": "👤📦",
    "description": "my, your, his, her...",
    "module": 2,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "a-an",
    "title": "A / AN",
    "emoji": "1️⃣📝",
    "description": "Artigos indefinidos",
    "module": 2,
    "order": 4,
    "vocabularyCount": 10
  },
  {
    "id": "the",
    "title": "THE",
    "emoji": "☝️📝",
    "description": "Artigo definido",
    "module": 2,
    "order": 5,
    "vocabularyCount": 10
  },
  {
    "id": "this",
    "title": "THIS",
    "emoji": "👆📍",
    "description": "Isto/Este (perto)",
    "module": 2,
    "order": 6,
    "vocabularyCount": 8
  },
  {
    "id": "that",
    "title": "THAT",
    "emoji": "👉📍",
    "description": "Aquilo/Aquele (longe)",
    "module": 2,
    "order": 7,
    "vocabularyCount": 9
  },
  {
    "id": "these-those",
    "title": "THESE / THOSE",
    "emoji": "👆👉",
    "description": "Plural (perto/longe)",
    "module": 2,
    "order": 8,
    "vocabularyCount": 10
  },
  {
    "id": "is-are-questions",
    "title": "IS / ARE (Questions)",
    "emoji": "❓🔵",
    "description": "Perguntas com IS/ARE",
    "module": 2,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "is-are-negative",
    "title": "IS / ARE (Negative)",
    "emoji": "❌🔵",
    "description": "Negação com IS/ARE",
    "module": 2,
    "order": 10,
    "vocabularyCount": 10
  },
  {
    "id": "when",
    "title": "WHEN",
    "emoji": "⏰❓",
    "description": "Perguntar tempo",
    "module": 2,
    "order": 11,
    "vocabularyCount": 21
  },
  {
    "id": "why",
    "title": "WHY",
    "emoji": "🤷❓",
    "description": "Perguntar \"por quê\"",
    "module": 2,
    "order": 12,
    "vocabularyCount": 10
  },
  {
    "id": "because",
    "title": "BECAUSE",
    "emoji": "💡➡️",
    "description": "Responder \"porque\"",
    "module": 2,
    "order": 13,
    "vocabularyCount": 10
  },
  {
    "id": "how",
    "title": "HOW",
    "emoji": "🔧❓",
    "description": "Perguntar \"como\"",
    "module": 2,
    "order": 14,
    "vocabularyCount": 10
  },
  {
    "id": "here-there-over",
    "title": "HERE / THERE / OVER THERE",
    "emoji": "📍👉🏔️",
    "description": "Aqui / Ali / Lá",
    "module": 2,
    "order": 15,
    "vocabularyCount": 10
  },
  {
    "id": "here",
    "title": "HERE",
    "emoji": "📍✅",
    "description": "Aqui (perto)",
    "module": 2,
    "order": 16,
    "vocabularyCount": 10
  },
  {
    "id": "there",
    "title": "THERE",
    "emoji": "📍➡️",
    "description": "Ali/Lá (longe)",
    "module": 2,
    "order": 17,
    "vocabularyCount": 10
  },
  {
    "id": "do-affirmative",
    "title": "DO (Affirmative)",
    "emoji": "✅📝",
    "description": "Fazer (afirmação)",
    "module": 2,
    "order": 18,
    "vocabularyCount": 10
  },
  {
    "id": "do-questions",
    "title": "DO (Questions)",
    "emoji": "❓📝",
    "description": "Perguntas com DO",
    "module": 2,
    "order": 19,
    "vocabularyCount": 10
  },
  {
    "id": "do-negative",
    "title": "DO (Negative)",
    "emoji": "❌📝",
    "description": "Negação com DO",
    "module": 2,
    "order": 20,
    "vocabularyCount": 10
  },
  {
    "id": "does",
    "title": "DOES",
    "emoji": "👤📝",
    "description": "Terceira pessoa (he/she/it)",
    "module": 2,
    "order": 21,
    "vocabularyCount": 10
  },
  {
    "id": "has",
    "title": "HAS",
    "emoji": "👤📦",
    "description": "Ter (he/she/it)",
    "module": 2,
    "order": 22,
    "vocabularyCount": 10
  },
  {
    "id": "like",
    "title": "LIKE",
    "emoji": "❤️👍",
    "description": "Gostar",
    "module": 2,
    "order": 23,
    "vocabularyCount": 10
  },
  {
    "id": "love-hate",
    "title": "LOVE / HATE",
    "emoji": "❤️💔",
    "description": "Gostar muito/Odiar",
    "module": 2,
    "order": 24,
    "vocabularyCount": 10
  },
  {
    "id": "can-permission",
    "title": "CAN (Permission)",
    "emoji": "🙋✅",
    "description": "Posso? (permissão)",
    "module": 2,
    "order": 25,
    "vocabularyCount": 10
  },
  {
    "id": "go",
    "title": "GO",
    "emoji": "🚶➡️",
    "description": "Ir",
    "module": 2,
    "order": 26,
    "vocabularyCount": 10
  },
  {
    "id": "come",
    "title": "COME",
    "emoji": "🚶⬅️",
    "description": "Vir",
    "module": 2,
    "order": 27,
    "vocabularyCount": 10
  },
  {
    "id": "get",
    "title": "GET",
    "emoji": "🎯📦",
    "description": "Pegar/Obter/Ficar",
    "module": 2,
    "order": 28,
    "vocabularyCount": 10
  },
  {
    "id": "have",
    "title": "HAVE",
    "emoji": "✋📦",
    "description": "Ter (I/you/we/they)",
    "module": 3,
    "order": 1,
    "vocabularyCount": 10
  },
  {
    "id": "make",
    "title": "MAKE",
    "emoji": "🛠️✨",
    "description": "Fazer/Criar/Produzir",
    "module": 3,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "take",
    "title": "TAKE",
    "emoji": "✋📦",
    "description": "Pegar/Levar/Tomar",
    "module": 3,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "put",
    "title": "PUT",
    "emoji": "📍⬇️",
    "description": "Colocar/Pôr",
    "module": 3,
    "order": 4,
    "vocabularyCount": 10
  },
  {
    "id": "give",
    "title": "GIVE",
    "emoji": "🎁➡️",
    "description": "Dar/Entregar",
    "module": 3,
    "order": 5,
    "vocabularyCount": 10
  },
  {
    "id": "tell-say",
    "title": "TELL vs SAY",
    "emoji": "🗣️💬",
    "description": "Diferença entre TELL e SAY",
    "module": 3,
    "order": 6,
    "vocabularyCount": 10
  },
  {
    "id": "present-progressive",
    "title": "PRESENT PROGRESSIVE",
    "emoji": "🔄⏳",
    "description": "Ação contínua no presente",
    "module": 3,
    "order": 7,
    "vocabularyCount": 23
  },
  {
    "id": "going-to",
    "title": "GOING TO",
    "emoji": "🔮➡️",
    "description": "Futuro planejado",
    "module": 3,
    "order": 8,
    "vocabularyCount": 10
  },
  {
    "id": "in-on-at-time",
    "title": "IN / ON / AT (Time)",
    "emoji": "⏰📅",
    "description": "Preposições de tempo",
    "module": 3,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "phone-calls-basic",
    "title": "Phone Calls (Basic)",
    "emoji": "📞👋",
    "description": "Ligações - básico",
    "module": 3,
    "order": 10,
    "vocabularyCount": 10
  },
  {
    "id": "phone-calls-problems",
    "title": "Phone Calls (Problems)",
    "emoji": "📞❌",
    "description": "Problemas na ligação",
    "module": 3,
    "order": 11,
    "vocabularyCount": 10
  },
  {
    "id": "at-work-problems",
    "title": "At Work (Problems)",
    "emoji": "💼⚠️",
    "description": "Problemas no trabalho",
    "module": 3,
    "order": 12,
    "vocabularyCount": 10
  },
  {
    "id": "in-on-at-place",
    "title": "IN / ON / AT (Place)",
    "emoji": "📍🗺️",
    "description": "Preposições de lugar",
    "module": 3,
    "order": 13,
    "vocabularyCount": 10
  },
  {
    "id": "directions-basic",
    "title": "DIRECTIONS (Basic)",
    "emoji": "🧭📍",
    "description": "Direções básicas",
    "module": 3,
    "order": 14,
    "vocabularyCount": 10
  },
  {
    "id": "directions-street",
    "title": "DIRECTIONS (Street)",
    "emoji": "🛣️🚗",
    "description": "Direções na rua",
    "module": 3,
    "order": 15,
    "vocabularyCount": 10
  },
  {
    "id": "turn-left-right",
    "title": "TURN LEFT / RIGHT",
    "emoji": "⬅️➡️",
    "description": "Vira à esquerda/direita",
    "module": 3,
    "order": 16,
    "vocabularyCount": 10
  },
  {
    "id": "stop-wait-go",
    "title": "STOP / WAIT / GO",
    "emoji": "🛑⏳🚦",
    "description": "Para / Espera / Vai",
    "module": 3,
    "order": 17,
    "vocabularyCount": 10
  },
  {
    "id": "to-from",
    "title": "TO / FROM",
    "emoji": "➡️⬅️",
    "description": "Para / De",
    "module": 3,
    "order": 18,
    "vocabularyCount": 10
  },
  {
    "id": "pick-up-drop",
    "title": "PICK UP / DROP / PUT DOWN",
    "emoji": "✋⬇️",
    "description": "Pega / Larga / Coloca",
    "module": 3,
    "order": 19,
    "vocabularyCount": 10
  },
  {
    "id": "hold-keep-move",
    "title": "HOLD / KEEP / MOVE",
    "emoji": "✊📍🏃",
    "description": "Segura / Mantém / Move",
    "module": 3,
    "order": 20,
    "vocabularyCount": 10
  },
  {
    "id": "bring-take",
    "title": "BRING / TAKE",
    "emoji": "⬅️➡️📦",
    "description": "Trazer / Levar",
    "module": 3,
    "order": 21,
    "vocabularyCount": 10
  },
  {
    "id": "with-without",
    "title": "WITH / WITHOUT",
    "emoji": "🤝❌",
    "description": "Com / Sem",
    "module": 3,
    "order": 22,
    "vocabularyCount": 10
  },
  {
    "id": "for",
    "title": "FOR",
    "emoji": "⏱️🎯",
    "description": "Duração / Propósito",
    "module": 3,
    "order": 23,
    "vocabularyCount": 10
  },
  {
    "id": "about",
    "title": "ABOUT",
    "emoji": "💬📝",
    "description": "Sobre",
    "module": 3,
    "order": 24,
    "vocabularyCount": 10
  },
  {
    "id": "and",
    "title": "AND",
    "emoji": "➕🔗",
    "description": "E (conectar)",
    "module": 3,
    "order": 25,
    "vocabularyCount": 10
  },
  {
    "id": "but",
    "title": "BUT",
    "emoji": "↩️🔗",
    "description": "Mas (contraste)",
    "module": 3,
    "order": 26,
    "vocabularyCount": 10
  },
  {
    "id": "so-because",
    "title": "SO / BECAUSE",
    "emoji": "➡️💡",
    "description": "Então / Porque",
    "module": 3,
    "order": 27,
    "vocabularyCount": 10
  },
  {
    "id": "then",
    "title": "THEN",
    "emoji": "➡️⏭️",
    "description": "Então / Depois",
    "module": 3,
    "order": 28,
    "vocabularyCount": 10
  },
  {
    "id": "there-is",
    "title": "THERE IS",
    "emoji": "📍1️⃣",
    "description": "Existe (singular)",
    "module": 4,
    "order": 1,
    "vocabularyCount": 10
  },
  {
    "id": "there-are",
    "title": "THERE ARE",
    "emoji": "📍🔢",
    "description": "Existem (plural)",
    "module": 4,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "there-is-are-questions",
    "title": "THERE IS / ARE (Questions)",
    "emoji": "❓📍",
    "description": "Perguntas com There is/are",
    "module": 4,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "there-is-are-negative",
    "title": "THERE IS / ARE (Negative)",
    "emoji": "❌📍",
    "description": "Negação com There is/are",
    "module": 4,
    "order": 4,
    "vocabularyCount": 10
  },
  {
    "id": "some-any-a-lot",
    "title": "Some / Any / A lot of",
    "emoji": "📊📦",
    "description": "Quantificadores",
    "module": 4,
    "order": 5,
    "vocabularyCount": 10
  },
  {
    "id": "no-article",
    "title": "No Article",
    "emoji": "❌📝",
    "description": "Quando não usar artigo",
    "module": 4,
    "order": 6,
    "vocabularyCount": 8
  },
  {
    "id": "how-many",
    "title": "HOW MANY",
    "emoji": "🔢❓",
    "description": "Quantos (contável)",
    "module": 4,
    "order": 7,
    "vocabularyCount": 25
  },
  {
    "id": "which",
    "title": "WHICH",
    "emoji": "👆❓",
    "description": "Escolher opções",
    "module": 4,
    "order": 8,
    "vocabularyCount": 10
  },
  {
    "id": "what-time",
    "title": "WHAT TIME",
    "emoji": "⏰❓",
    "description": "Perguntar que horas",
    "module": 4,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "how-long",
    "title": "HOW LONG",
    "emoji": "⏱️❓",
    "description": "Quanto tempo / Qual o tamanho",
    "module": 4,
    "order": 10,
    "vocabularyCount": 10
  },
  {
    "id": "how-often",
    "title": "HOW OFTEN",
    "emoji": "🔄❓",
    "description": "Com que frequência",
    "module": 4,
    "order": 11,
    "vocabularyCount": 10
  },
  {
    "id": "how-far",
    "title": "HOW FAR",
    "emoji": "📍❓",
    "description": "A que distância / Quão longe",
    "module": 4,
    "order": 12,
    "vocabularyCount": 10
  },
  {
    "id": "ordering-food-basic",
    "title": "Ordering Food (Basic)",
    "emoji": "🍔🍟",
    "description": "Pedir comida - básico",
    "module": 4,
    "order": 13,
    "vocabularyCount": 10
  },
  {
    "id": "ordering-food-problems",
    "title": "Ordering Food (Problems)",
    "emoji": "🍔❌",
    "description": "Problemas com pedido",
    "module": 4,
    "order": 14,
    "vocabularyCount": 10
  },
  {
    "id": "restaurant-fastfood",
    "title": "Restaurant & Fast Food",
    "emoji": "🍔🍟",
    "description": "Restaurante e fast food",
    "module": 4,
    "order": 15,
    "vocabularyCount": 20
  },
  {
    "id": "prices-money",
    "title": "Prices & Money",
    "emoji": "💰💵",
    "description": "Preços e dinheiro",
    "module": 4,
    "order": 16,
    "vocabularyCount": 10
  },
  {
    "id": "tipping-paying",
    "title": "Tipping & Paying",
    "emoji": "💵💳",
    "description": "Gorjeta e pagamento",
    "module": 4,
    "order": 17,
    "vocabularyCount": 10
  },
  {
    "id": "grocery-shopping",
    "title": "Grocery Shopping",
    "emoji": "🛒🥬",
    "description": "Compras no mercado",
    "module": 4,
    "order": 18,
    "vocabularyCount": 10
  },
  {
    "id": "small-talk",
    "title": "SMALL TALK",
    "emoji": "💬😊",
    "description": "Conversa informal",
    "module": 4,
    "order": 19,
    "vocabularyCount": 27
  },
  {
    "id": "apologies",
    "title": "APOLOGIES",
    "emoji": "😔🙏",
    "description": "Desculpas",
    "module": 4,
    "order": 20,
    "vocabularyCount": 27
  },
  {
    "id": "feelings-reactions",
    "title": "Feelings & Reactions",
    "emoji": "😊😤",
    "description": "Sentimentos e reações",
    "module": 4,
    "order": 21,
    "vocabularyCount": 20
  },
  {
    "id": "injury-at-work",
    "title": "Injury at Work",
    "emoji": "🤕🏗️",
    "description": "Acidente no trabalho",
    "module": 4,
    "order": 22,
    "vocabularyCount": 15
  },
  {
    "id": "at-doctor-symptoms",
    "title": "At the Doctor (Symptoms)",
    "emoji": "🏥🤒",
    "description": "Descrever sintomas",
    "module": 4,
    "order": 23,
    "vocabularyCount": 10
  },
  {
    "id": "at-doctor-instructions",
    "title": "At the Doctor (Instructions)",
    "emoji": "🏥💊",
    "description": "Entender instruções médicas",
    "module": 4,
    "order": 24,
    "vocabularyCount": 10
  },
  {
    "id": "hospital-er",
    "title": "Hospital & ER",
    "emoji": "🏥🚑",
    "description": "Hospital e pronto-socorro",
    "module": 4,
    "order": 25,
    "vocabularyCount": 25
  },
  {
    "id": "health-body",
    "title": "Health & Body",
    "emoji": "🩺💊",
    "description": "Saúde e corpo",
    "module": 4,
    "order": 26,
    "vocabularyCount": 15
  },
  {
    "id": "car-accident",
    "title": "Car Accident",
    "emoji": "🚗💥",
    "description": "Acidente de carro",
    "module": 4,
    "order": 27,
    "vocabularyCount": 20
  },
  {
    "id": "car-trouble",
    "title": "Car Trouble",
    "emoji": "🚗🔧",
    "description": "Problemas com carro",
    "module": 4,
    "order": 28,
    "vocabularyCount": 15
  },
  {
    "id": "at-the-mechanic",
    "title": "At the Mechanic",
    "emoji": "🔧🚗",
    "description": "Na oficina mecânica",
    "module": 4,
    "order": 29,
    "vocabularyCount": 15
  },
  {
    "id": "gas-station",
    "title": "Gas Station",
    "emoji": "⛽🚗",
    "description": "Posto de gasolina",
    "module": 4,
    "order": 30,
    "vocabularyCount": 10
  },
  {
    "id": "uber-rideshare",
    "title": "Uber / Rideshare",
    "emoji": "🚗📱",
    "description": "Uber e carona por app",
    "module": 4,
    "order": 31,
    "vocabularyCount": 10
  },
  {
    "id": "bus-transit",
    "title": "Bus & Transit",
    "emoji": "🚌🚇",
    "description": "Ônibus e transporte",
    "module": 4,
    "order": 32,
    "vocabularyCount": 12
  },
  {
    "id": "parking",
    "title": "Parking",
    "emoji": "🅿️🚗",
    "description": "Estacionamento",
    "module": 4,
    "order": 33,
    "vocabularyCount": 10
  },
  {
    "id": "neighbors-living",
    "title": "Neighbors & Living",
    "emoji": "🏘️👋",
    "description": "Vizinhos e moradia",
    "module": 4,
    "order": 34,
    "vocabularyCount": 18
  },
  {
    "id": "before-after",
    "title": "BEFORE / AFTER",
    "emoji": "⏪⏩",
    "description": "Antes / Depois",
    "module": 4,
    "order": 35,
    "vocabularyCount": 10
  },
  {
    "id": "until",
    "title": "UNTIL",
    "emoji": "⏳➡️",
    "description": "Até (tempo)",
    "module": 4,
    "order": 36,
    "vocabularyCount": 10
  },
  {
    "id": "past-simple-intro",
    "title": "PAST SIMPLE (Intro)",
    "emoji": "⏪📚",
    "description": "Passado simples - introdução",
    "module": 5,
    "order": 1,
    "vocabularyCount": 10
  },
  {
    "id": "regular-verbs-ed",
    "title": "Regular Verbs (-ED)",
    "emoji": "✅➕",
    "description": "Verbos regulares",
    "module": 5,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "irregular-verbs-1",
    "title": "Irregular Verbs 1",
    "emoji": "❌🔄",
    "description": "go, do, see",
    "module": 5,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "irregular-verbs-2",
    "title": "Irregular Verbs 2",
    "emoji": "❌🔄",
    "description": "eat, have, make",
    "module": 5,
    "order": 4,
    "vocabularyCount": 10
  },
  {
    "id": "did",
    "title": "DID",
    "emoji": "⏪📝",
    "description": "Passado (auxiliar)",
    "module": 5,
    "order": 5,
    "vocabularyCount": 10
  },
  {
    "id": "did-questions",
    "title": "DID (Questions)",
    "emoji": "❓⏪",
    "description": "Perguntas no passado",
    "module": 5,
    "order": 6,
    "vocabularyCount": 10
  },
  {
    "id": "past-time-words",
    "title": "Past + Time Words",
    "emoji": "📅⏪",
    "description": "yesterday, last...",
    "module": 5,
    "order": 7,
    "vocabularyCount": 10
  },
  {
    "id": "past-at-work",
    "title": "Past at Work",
    "emoji": "💼⏪",
    "description": "Passado no trabalho",
    "module": 5,
    "order": 8,
    "vocabularyCount": 10
  },
  {
    "id": "past-emergencies",
    "title": "Past in Emergencies",
    "emoji": "🚨⏪",
    "description": "Passado em emergências",
    "module": 5,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "past-story-basic",
    "title": "Past Story (Basic)",
    "emoji": "📖⏪",
    "description": "Contar algo simples",
    "module": 5,
    "order": 10,
    "vocabularyCount": 10
  },
  {
    "id": "past-continuous",
    "title": "PAST CONTINUOUS",
    "emoji": "⏸️📖",
    "description": "Ação contínua no passado",
    "module": 5,
    "order": 11,
    "vocabularyCount": 20
  },
  {
    "id": "didnt-negative",
    "title": "DIDN'T (Negative)",
    "emoji": "❌⏪",
    "description": "Negação no passado",
    "module": 5,
    "order": 12,
    "vocabularyCount": 10
  },
  {
    "id": "if-basic",
    "title": "IF (Basic)",
    "emoji": "🤔❓",
    "description": "Se (condição básica)",
    "module": 6,
    "order": 1,
    "vocabularyCount": 10
  },
  {
    "id": "future-will",
    "title": "FUTURE WILL",
    "emoji": "🔮⚡",
    "description": "Futuro: decisões e promessas",
    "module": 6,
    "order": 2,
    "vocabularyCount": 20
  },
  {
    "id": "may-might",
    "title": "MAY / MIGHT",
    "emoji": "🤔💭",
    "description": "Possibilidade e permissão",
    "module": 6,
    "order": 3,
    "vocabularyCount": 20
  },
  {
    "id": "could",
    "title": "COULD",
    "emoji": "💭🔧",
    "description": "Possibilidade, habilidade passada, pedido educado",
    "module": 6,
    "order": 4,
    "vocabularyCount": 20
  },
  {
    "id": "must-mustn-t",
    "title": "MUST / MUSTN'T",
    "emoji": "⚠️🚫",
    "description": "Obrigação e proibição",
    "module": 6,
    "order": 5,
    "vocabularyCount": 20
  },
  {
    "id": "would-should-could",
    "title": "WOULD / SHOULD / COULD",
    "emoji": "🤔💬",
    "description": "Condicional básico",
    "module": 6,
    "order": 7,
    "vocabularyCount": 10
  },
  {
    "id": "conditional-type-1",
    "title": "CONDITIONAL TYPE 1",
    "emoji": "🔮✅",
    "description": "Se... vai acontecer",
    "module": 6,
    "order": 8,
    "vocabularyCount": 20
  },
  {
    "id": "should-shouldn-t",
    "title": "SHOULD / SHOULDN'T",
    "emoji": "👆💡",
    "description": "Conselho e recomendação",
    "module": 6,
    "order": 6,
    "vocabularyCount": 20
  },
  {
    "id": "at-the-bank",
    "title": "At the Bank",
    "emoji": "🏦💳",
    "description": "No banco",
    "module": 6,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "pharmacy-pickup",
    "title": "Pharmacy Pickup",
    "emoji": "💊🏪",
    "description": "Retirar na farmácia",
    "module": 6,
    "order": 10,
    "vocabularyCount": 10
  },
  {
    "id": "renting",
    "title": "Renting an Apartment",
    "emoji": "🏠📝",
    "description": "Alugar apartamento",
    "module": 6,
    "order": 11,
    "vocabularyCount": 10
  },
  {
    "id": "bills-utilities",
    "title": "Bills & Utilities",
    "emoji": "📄💡",
    "description": "Contas e serviços",
    "module": 6,
    "order": 12,
    "vocabularyCount": 10
  },
  {
    "id": "usps-mail",
    "title": "USPS / Mail",
    "emoji": "📬📦",
    "description": "Correios e envios",
    "module": 6,
    "order": 13,
    "vocabularyCount": 10
  },
  {
    "id": "customer-service",
    "title": "Customer Service Complaints",
    "emoji": "📞😤",
    "description": "Reclamações / Atendimento",
    "module": 6,
    "order": 14,
    "vocabularyCount": 10
  },
  {
    "id": "returning-items",
    "title": "Returning Items",
    "emoji": "🔄📦",
    "description": "Devolver itens",
    "module": 6,
    "order": 15,
    "vocabularyCount": 10
  },
  {
    "id": "phone-internet",
    "title": "Phone & Internet",
    "emoji": "📱📶",
    "description": "Celular e internet",
    "module": 6,
    "order": 16,
    "vocabularyCount": 12
  },
  {
    "id": "shopping-clothing",
    "title": "Shopping & Clothing",
    "emoji": "🛍️👕",
    "description": "Compras e roupas",
    "module": 6,
    "order": 17,
    "vocabularyCount": 15
  },
  {
    "id": "compliments",
    "title": "COMPLIMENTS",
    "emoji": "👍💕",
    "description": "Elogios",
    "module": 6,
    "order": 18,
    "vocabularyCount": 27
  },
  {
    "id": "requests-formal",
    "title": "REQUESTS FORMAL",
    "emoji": "🙏📋",
    "description": "Pedidos formais",
    "module": 6,
    "order": 19,
    "vocabularyCount": 27
  },
  {
    "id": "permission-asking",
    "title": "PERMISSION ASKING",
    "emoji": "❓✋",
    "description": "Pedindo permissão",
    "module": 6,
    "order": 20,
    "vocabularyCount": 27
  },
  {
    "id": "invitations",
    "title": "INVITATIONS",
    "emoji": "🎉📧",
    "description": "Convites",
    "module": 6,
    "order": 21,
    "vocabularyCount": 27
  },
  {
    "id": "declining-politely",
    "title": "DECLINING POLITELY",
    "emoji": "🙅💬",
    "description": "Recusando cortesmente",
    "module": 6,
    "order": 22,
    "vocabularyCount": 27
  },
  {
    "id": "standing-up",
    "title": "Standing Up for Yourself",
    "emoji": "✊💪",
    "description": "Se defender",
    "module": 6,
    "order": 23,
    "vocabularyCount": 15
  },
  {
    "id": "kids-school",
    "title": "Kids & School",
    "emoji": "👧🏫",
    "description": "Filhos e escola",
    "module": 6,
    "order": 24,
    "vocabularyCount": 15
  },
  {
    "id": "laundromat",
    "title": "Laundromat",
    "emoji": "🧺🧼",
    "description": "Lavanderia",
    "module": 6,
    "order": 25,
    "vocabularyCount": 10
  },
  {
    "id": "getting-haircut",
    "title": "Getting a Haircut",
    "emoji": "💇✂️",
    "description": "Cortando o cabelo",
    "module": 6,
    "order": 26,
    "vocabularyCount": 12
  },
  {
    "id": "coffee-shop",
    "title": "Coffee Shop",
    "emoji": "☕🏪",
    "description": "Cafeteria",
    "module": 6,
    "order": 27,
    "vocabularyCount": 10
  },
  {
    "id": "at-the-gym",
    "title": "At the Gym",
    "emoji": "💪🏋️",
    "description": "Na academia",
    "module": 6,
    "order": 28,
    "vocabularyCount": 10
  },
  {
    "id": "weather-dressed",
    "title": "Weather & Getting Dressed",
    "emoji": "🌤️🧥",
    "description": "Clima e roupas",
    "module": 6,
    "order": 29,
    "vocabularyCount": 10
  },
  {
    "id": "contractions-informal",
    "title": "CONTRACTIONS (INFORMAL)",
    "emoji": "🔤✂️",
    "description": "Gonna, wanna, gotta...",
    "module": 6,
    "order": 30,
    "vocabularyCount": 20
  },
  {
    "id": "slang-words",
    "title": "SLANG WORDS",
    "emoji": "🤙💬",
    "description": "Gírias americanas",
    "module": 6,
    "order": 31,
    "vocabularyCount": 20
  },
  {
    "id": "exclamations",
    "title": "EXCLAMATIONS",
    "emoji": "😲❗",
    "description": "Expressões de surpresa e reação",
    "module": 6,
    "order": 32,
    "vocabularyCount": 20
  },
  {
    "id": "whose",
    "title": "WHOSE",
    "emoji": "👤❓",
    "description": "Perguntar de quem é",
    "module": 7,
    "order": 1,
    "vocabularyCount": 25
  },
  {
    "id": "count-nouns",
    "title": "Count Nouns",
    "emoji": "🔢📦",
    "description": "Substantivos contáveis",
    "module": 7,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "possessive-s",
    "title": "Possessive 'S",
    "emoji": "👤✨",
    "description": "John's car",
    "module": 7,
    "order": 4,
    "vocabularyCount": 10
  },
  {
    "id": "non-count-nouns",
    "title": "Non-Count Nouns",
    "emoji": "💧📦",
    "description": "Substantivos incontáveis",
    "module": 7,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "present-perfect",
    "title": "PRESENT PERFECT",
    "emoji": "✅📋",
    "description": "Experiência e resultado",
    "module": 7,
    "order": 5,
    "vocabularyCount": 20
  },
  {
    "id": "present-perfect-continuous",
    "title": "PRESENT PERFECT CONTINUOUS",
    "emoji": "🔄✅",
    "description": "Ação contínua até agora",
    "module": 7,
    "order": 6,
    "vocabularyCount": 20
  },
  {
    "id": "comparatives",
    "title": "COMPARATIVES",
    "emoji": "⚖️📊",
    "description": "Comparando coisas",
    "module": 7,
    "order": 7,
    "vocabularyCount": 20
  },
  {
    "id": "superlatives",
    "title": "SUPERLATIVES",
    "emoji": "🏆👑",
    "description": "O mais... de todos",
    "module": 7,
    "order": 8,
    "vocabularyCount": 20
  },
  {
    "id": "verb-plus-ing",
    "title": "VERB + ING",
    "emoji": "🔤🔄",
    "description": "Verbos seguidos de -ING",
    "module": 7,
    "order": 9,
    "vocabularyCount": 20
  },
  {
    "id": "verb-plus-infinitive",
    "title": "VERB + TO + INFINITIVE",
    "emoji": "🔤➡️",
    "description": "Verbos seguidos de TO",
    "module": 7,
    "order": 10,
    "vocabularyCount": 20
  },
  {
    "id": "verb-object-infinitive",
    "title": "VERB + OBJECT + TO",
    "emoji": "🔤👤➡️",
    "description": "Pedir alguém pra fazer algo",
    "module": 7,
    "order": 11,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-get",
    "title": "PHRASAL GET",
    "emoji": "🔄📦",
    "description": "GET UP / GET IN / GET OUT",
    "module": 7,
    "order": 12,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-put",
    "title": "PHRASAL PUT",
    "emoji": "📥🔄",
    "description": "PUT ON / PUT DOWN / PUT AWAY",
    "module": 7,
    "order": 13,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-look",
    "title": "PHRASAL LOOK",
    "emoji": "👀🔄",
    "description": "LOOK FOR / LOOK UP / LOOK OUT",
    "module": 7,
    "order": 14,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-give",
    "title": "PHRASAL GIVE",
    "emoji": "🤲🔄",
    "description": "GIVE UP / GIVE BACK / GIVE AWAY",
    "module": 7,
    "order": 15,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-run",
    "title": "PHRASAL RUN",
    "emoji": "🏃🔄",
    "description": "RUN OUT / RUN INTO / RUN OVER",
    "module": 7,
    "order": 16,
    "vocabularyCount": 20
  },
  {
    "id": "phrasal-break",
    "title": "PHRASAL BREAK",
    "emoji": "💥🔄",
    "description": "BREAK DOWN / BREAK UP / BREAK IN",
    "module": 7,
    "order": 17,
    "vocabularyCount": 20
  },
  {
    "id": "however-but",
    "title": "HOWEVER / BUT",
    "emoji": "🔀❌",
    "description": "Mas / Porém / Entretanto",
    "module": 7,
    "order": 18,
    "vocabularyCount": 20
  },
  {
    "id": "although-though",
    "title": "ALTHOUGH / THOUGH",
    "emoji": "🤷‍♂️🔄",
    "description": "Embora / Apesar de",
    "module": 7,
    "order": 19,
    "vocabularyCount": 20
  },
  {
    "id": "unless-otherwise",
    "title": "UNLESS / OTHERWISE",
    "emoji": "⚠️🔄",
    "description": "A menos que / Senão",
    "module": 7,
    "order": 20,
    "vocabularyCount": 20
  },
  {
    "id": "meanwhile-then",
    "title": "MEANWHILE / THEN",
    "emoji": "⏰➡️",
    "description": "Enquanto isso / Então",
    "module": 7,
    "order": 21,
    "vocabularyCount": 20
  },
  {
    "id": "conditional-type-2",
    "title": "CONDITIONAL TYPE 2",
    "emoji": "💭🤔",
    "description": "Se eu pudesse / Se eu fosse",
    "module": 7,
    "order": 22,
    "vocabularyCount": 20
  },
  {
    "id": "question-tags",
    "title": "QUESTION TAGS",
    "emoji": "❓🏷️",
    "description": "Né? / Não é?",
    "module": 7,
    "order": 23,
    "vocabularyCount": 20
  },
  {
    "id": "negative-questions",
    "title": "NEGATIVE QUESTIONS",
    "emoji": "❓🚫",
    "description": "Você não...? / Não é...?",
    "module": 7,
    "order": 24,
    "vocabularyCount": 20
  },
  {
    "id": "future-continuous",
    "title": "FUTURE CONTINUOUS",
    "emoji": "🔮🔄",
    "description": "Ação em andamento no futuro",
    "module": 8,
    "order": 1,
    "vocabularyCount": 20
  },
  {
    "id": "past-perfect",
    "title": "PAST PERFECT",
    "emoji": "⏪✅",
    "description": "Antes de outro evento no passado",
    "module": 8,
    "order": 2,
    "vocabularyCount": 20
  },
  {
    "id": "future-shall",
    "title": "FUTURE SHALL",
    "emoji": "🤝🔮",
    "description": "Ofertas e sugestões educadas",
    "module": 8,
    "order": 3,
    "vocabularyCount": 20
  },
  {
    "id": "passive-voice",
    "title": "PASSIVE VOICE",
    "emoji": "🔄📋",
    "description": "Foi feito / Está sendo feito",
    "module": 8,
    "order": 4,
    "vocabularyCount": 20
  },
  {
    "id": "reported-speech",
    "title": "REPORTED SPEECH",
    "emoji": "🗣️💬",
    "description": "Ele disse que...",
    "module": 8,
    "order": 5,
    "vocabularyCount": 20
  },
  {
    "id": "conditional-type-3",
    "title": "CONDITIONAL TYPE 3",
    "emoji": "😔⏪",
    "description": "Se eu tivesse feito...",
    "module": 8,
    "order": 6,
    "vocabularyCount": 20
  },
  {
    "id": "relative-clauses",
    "title": "RELATIVE CLAUSES",
    "emoji": "🔗📝",
    "description": "Que / Quem / Onde",
    "module": 8,
    "order": 7,
    "vocabularyCount": 20
  },
  {
    "id": "moreover-furthermore",
    "title": "MOREOVER / FURTHERMORE",
    "emoji": "➕📝",
    "description": "Além disso / Ademais",
    "module": 8,
    "order": 8,
    "vocabularyCount": 20
  },
  {
    "id": "whereas-while",
    "title": "WHEREAS / WHILE",
    "emoji": "⚖️🔄",
    "description": "Enquanto que / Ao passo que",
    "module": 8,
    "order": 9,
    "vocabularyCount": 20
  },
  {
    "id": "word-order-adverbs",
    "title": "WORD ORDER ADVERBS",
    "emoji": "📐📝",
    "description": "Ordem de palavras",
    "module": 8,
    "order": 10,
    "vocabularyCount": 27
  },
  {
    "id": "colors",
    "title": "COLORS",
    "emoji": "🎨🌈",
    "description": "Cores em inglês",
    "module": 8,
    "order": 11,
    "vocabularyCount": 20
  },
  {
    "id": "emotions",
    "title": "EMOTIONS",
    "emoji": "😊😢",
    "description": "Sentimentos e emoções",
    "module": 8,
    "order": 12,
    "vocabularyCount": 20
  },
  {
    "id": "weather",
    "title": "WEATHER",
    "emoji": "☀️🌧️",
    "description": "Clima e tempo",
    "module": 8,
    "order": 13,
    "vocabularyCount": 20
  },
  {
    "id": "professions",
    "title": "PROFESSIONS",
    "emoji": "👷‍♂️👩‍⚕️",
    "description": "Profissões em inglês",
    "module": 8,
    "order": 14,
    "vocabularyCount": 20
  },
  {
    "id": "family-extended",
    "title": "FAMILY (EXTENDED)",
    "emoji": "👨‍👩‍👧‍👦🏠",
    "description": "Família extensa",
    "module": 8,
    "order": 15,
    "vocabularyCount": 20
  },
  {
    "id": "appearance",
    "title": "APPEARANCE",
    "emoji": "👤🪞",
    "description": "Aparência física",
    "module": 8,
    "order": 16,
    "vocabularyCount": 20
  },
  {
    "id": "personality",
    "title": "PERSONALITY",
    "emoji": "😊🧠",
    "description": "Personalidade e caráter",
    "module": 8,
    "order": 17,
    "vocabularyCount": 20
  },
  {
    "id": "sports",
    "title": "SPORTS",
    "emoji": "⚽🏈",
    "description": "Esportes em inglês",
    "module": 8,
    "order": 18,
    "vocabularyCount": 20
  },
  {
    "id": "hobbies",
    "title": "HOBBIES",
    "emoji": "🎸🎮",
    "description": "O que você faz nas horas vagas?",
    "module": 8,
    "order": 19,
    "vocabularyCount": 20
  },
  {
    "id": "animals",
    "title": "ANIMALS",
    "emoji": "🐕🐈",
    "description": "Animais em inglês",
    "module": 8,
    "order": 20,
    "vocabularyCount": 20
  },
  {
    "id": "countries-nationalities",
    "title": "COUNTRIES & NATIONALITIES",
    "emoji": "🌎🏳️",
    "description": "Países e nacionalidades",
    "module": 8,
    "order": 21,
    "vocabularyCount": 20
  },
  {
    "id": "synonyms-antonyms",
    "title": "SYNONYMS ANTONYMS",
    "emoji": "🔄↔️",
    "description": "Sinônimos e antônimos",
    "module": 8,
    "order": 22,
    "vocabularyCount": 27
  },
  {
    "id": "homophones",
    "title": "HOMOPHONES",
    "emoji": "👂🔄",
    "description": "Homofonos",
    "module": 8,
    "order": 23,
    "vocabularyCount": 27
  },
  {
    "id": "homonyms",
    "title": "HOMONYMS",
    "emoji": "📖🔄",
    "description": "Homônimos",
    "module": 8,
    "order": 24,
    "vocabularyCount": 27
  },
  {
    "id": "affixes",
    "title": "AFFIXES",
    "emoji": "🔗📝",
    "description": "Prefixos e sufixos",
    "module": 8,
    "order": 25,
    "vocabularyCount": 27
  },
  {
    "id": "idioms-expressions",
    "title": "IDIOMS EXPRESSIONS",
    "emoji": "🎭💡",
    "description": "Idiomas e expressões",
    "module": 8,
    "order": 26,
    "vocabularyCount": 27
  },
  {
    "id": "collocations",
    "title": "COLLOCATIONS",
    "emoji": "🔗🎯",
    "description": "Colocações",
    "module": 8,
    "order": 27,
    "vocabularyCount": 27
  },
  {
    "id": "text-speak",
    "title": "TEXT SPEAK",
    "emoji": "📱💬",
    "description": "Abreviações de texto",
    "module": 8,
    "order": 28,
    "vocabularyCount": 20
  },
  {
    "id": "word-families",
    "title": "WORD FAMILIES",
    "emoji": "👨‍👩‍👧📚",
    "description": "Famílias de palavras",
    "module": 8,
    "order": 29,
    "vocabularyCount": 27
  },
  {
    "id": "construction-site",
    "title": "CONSTRUCTION SITE",
    "emoji": "🏗️👷",
    "description": "Canteiro de obras",
    "module": 9,
    "order": 1,
    "vocabularyCount": 27
  },
  {
    "id": "hardware-store",
    "title": "Hardware Store",
    "emoji": "🔧🏪",
    "description": "Loja de ferramentas",
    "module": 9,
    "order": 2,
    "vocabularyCount": 10
  },
  {
    "id": "materials-supplies",
    "title": "Materials & Supplies",
    "emoji": "📦🛒",
    "description": "Materiais e suprimentos",
    "module": 9,
    "order": 3,
    "vocabularyCount": 10
  },
  {
    "id": "tile-flooring",
    "title": "Tile & Flooring",
    "emoji": "🪨🔨",
    "description": "Piso e revestimento",
    "module": 9,
    "order": 4,
    "vocabularyCount": 20
  },
  {
    "id": "landscaping-yard",
    "title": "Landscaping & Yard",
    "emoji": "🌿🏡",
    "description": "Jardinagem e quintal",
    "module": 9,
    "order": 5,
    "vocabularyCount": 18
  },
  {
    "id": "painting",
    "title": "Painting",
    "emoji": "🎨🖌️",
    "description": "Pintura",
    "module": 9,
    "order": 6,
    "vocabularyCount": 15
  },
  {
    "id": "cleaning-jobs",
    "title": "Cleaning Jobs",
    "emoji": "🧹✨",
    "description": "Trabalho de limpeza",
    "module": 9,
    "order": 7,
    "vocabularyCount": 16
  },
  {
    "id": "traffic-stop-basic",
    "title": "Traffic Stop (Basic)",
    "emoji": "🚔🚗",
    "description": "Parada policial - básico",
    "module": 9,
    "order": 8,
    "vocabularyCount": 10
  },
  {
    "id": "traffic-stop-questions",
    "title": "Traffic Stop (Questions)",
    "emoji": "🚔❓",
    "description": "Perguntas do policial",
    "module": 9,
    "order": 9,
    "vocabularyCount": 10
  },
  {
    "id": "police-expanded",
    "title": "Police (Expanded)",
    "emoji": "👮🚔",
    "description": "Interação com polícia",
    "module": 9,
    "order": 10,
    "vocabularyCount": 16
  }
  // ── CURSO: Mínimo para se Virar nos EUA (módulos 11-20) ──────────────────────
  {
    "id": "airport-arrival",
    "title": "Airport & Arrival",
    "emoji": "✈️🛬",
    "description": "Chegando nos EUA",
    "module": 11,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "hotel-arrival",
    "title": "Hotel Check-In",
    "emoji": "🏨🔑",
    "description": "Check-in no hotel",
    "module": 11,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "first-shopping",
    "title": "First Shopping Trip",
    "emoji": "🛒🇺🇸",
    "description": "Primeiras compras nos EUA",
    "module": 11,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "months-seasons",
    "title": "Months & Seasons",
    "emoji": "📅🌸",
    "description": "Meses e estações",
    "module": 11,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "job-search",
    "title": "Job Search",
    "emoji": "🔍💼",
    "description": "Buscando emprego",
    "module": 12,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "job-interview",
    "title": "Job Interview",
    "emoji": "🤝💼",
    "description": "Entrevista de emprego",
    "module": 12,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "work-schedule",
    "title": "Work Schedule & Shifts",
    "emoji": "🕒📋",
    "description": "Horários e turnos",
    "module": 12,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "reporting-tasks",
    "title": "Reporting Tasks",
    "emoji": "✅📋",
    "description": "Relatando o que foi feito",
    "module": 12,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "office-vocabulary",
    "title": "Office Vocabulary",
    "emoji": "🖥️📎",
    "description": "Vocabulário de escritório",
    "module": 12,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "meetings-presentations",
    "title": "Meetings & Presentations",
    "emoji": "📊👥",
    "description": "Reuniões e apresentações",
    "module": 12,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "cooking-at-home",
    "title": "Cooking at Home",
    "emoji": "🍳🏠",
    "description": "Cozinhando em casa",
    "module": 13,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "special-diets",
    "title": "Special Diets & Allergies",
    "emoji": "🥗⚠️",
    "description": "Dietas e restrições",
    "module": 13,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "local-markets",
    "title": "Local Markets & Fairs",
    "emoji": "🌽🛒",
    "description": "Feira e mercado local",
    "module": 13,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-bakery",
    "title": "At the Bakery",
    "emoji": "🍞🥐",
    "description": "Na padaria",
    "module": 13,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-butcher",
    "title": "At the Butcher",
    "emoji": "🥩🔪",
    "description": "No açougue",
    "module": 13,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "cooking-vocabulary",
    "title": "Cooking Vocabulary",
    "emoji": "🍳📚",
    "description": "Vocabulário de cozinha",
    "module": 13,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "household-chores",
    "title": "Household Chores",
    "emoji": "🧹🏠",
    "description": "Tarefas domésticas",
    "module": 14,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "home-repairs",
    "title": "Home Repairs",
    "emoji": "🔧🏠",
    "description": "Reparos na casa",
    "module": 14,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "moving-out",
    "title": "Moving Out",
    "emoji": "📦🚚",
    "description": "Mudança de casa",
    "module": 14,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "apartment-problems",
    "title": "Apartment Problems",
    "emoji": "🏠⚠️",
    "description": "Problemas no apartamento",
    "module": 14,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "house-furniture",
    "title": "House Furniture",
    "emoji": "🛋️🪑",
    "description": "Móveis da casa",
    "module": 14,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "household-appliances",
    "title": "Household Appliances",
    "emoji": "⚡🏠",
    "description": "Eletrodomésticos",
    "module": 14,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "talking-to-landlord",
    "title": "Talking to Your Landlord",
    "emoji": "🏠👤",
    "description": "Falando com o proprietário",
    "module": 14,
    "order": 7,
    "vocabularyCount": 0
  },
  {
    "id": "paying-bills",
    "title": "Paying Bills",
    "emoji": "💳📄",
    "description": "Pagando contas",
    "module": 15,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "using-credit-debit",
    "title": "Using Credit or Debit",
    "emoji": "💳💵",
    "description": "Usando cartão",
    "module": 15,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "asking-for-change",
    "title": "Asking for Change",
    "emoji": "💵🔄",
    "description": "Pedindo troco",
    "module": 15,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "opening-bank-account",
    "title": "Opening a Bank Account",
    "emoji": "🏦📝",
    "description": "Abrindo conta no banco",
    "module": 15,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-mall",
    "title": "At the Mall",
    "emoji": "🛍️🏬",
    "description": "No shopping",
    "module": 15,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "electronics-shopping",
    "title": "Electronics Shopping",
    "emoji": "💻📱",
    "description": "Comprando eletrônicos",
    "module": 15,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "what-kind-type",
    "title": "What Kind / What Type",
    "emoji": "🔍❓",
    "description": "Que tipo é esse?",
    "module": 16,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "using-gps-maps",
    "title": "Using GPS & Maps",
    "emoji": "🗺️📍",
    "description": "Usando GPS e mapas",
    "module": 16,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "asking-for-nearest",
    "title": "Asking for the Nearest...",
    "emoji": "📍❓",
    "description": "Onde fica o mais próximo",
    "module": 16,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "lost-and-found",
    "title": "Lost and Found",
    "emoji": "🔍📦",
    "description": "Achados e perdidos",
    "module": 16,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "booking-flights",
    "title": "Booking Flights",
    "emoji": "✈️🎫",
    "description": "Comprando passagens aéreas",
    "module": 17,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "renting-cars",
    "title": "Renting Cars",
    "emoji": "🚗🔑",
    "description": "Alugando um carro",
    "module": 17,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "traveling-by-bus",
    "title": "Traveling by Bus",
    "emoji": "🚌🚦",
    "description": "Viajando de ônibus",
    "module": 17,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-subway",
    "title": "At the Subway",
    "emoji": "🚇🎫",
    "description": "No metrô",
    "module": 17,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-train-station",
    "title": "At the Train Station",
    "emoji": "🚆🎫",
    "description": "Na estação de trem",
    "module": 17,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "traffic-road-signs",
    "title": "Traffic & Road Signs",
    "emoji": "🚦⚠️",
    "description": "Trânsito e placas",
    "module": 17,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "traveling-abroad",
    "title": "Traveling Abroad",
    "emoji": "🌍✈️",
    "description": "Viajando para fora",
    "module": 17,
    "order": 7,
    "vocabularyCount": 0
  },
  {
    "id": "airport-advanced",
    "title": "Airport Advanced",
    "emoji": "✈️🏃",
    "description": "Situações avançadas no aeroporto",
    "module": 17,
    "order": 8,
    "vocabularyCount": 0
  },
  {
    "id": "how-to-describe",
    "title": "How to Describe",
    "emoji": "🗣️📝",
    "description": "Como descrever pessoas e coisas",
    "module": 18,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "asking-for-clarification",
    "title": "Asking for Clarification",
    "emoji": "🤔❓",
    "description": "Pedindo explicações",
    "module": 18,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "dating-relationships",
    "title": "Dating & Relationships",
    "emoji": "❤️💬",
    "description": "Relacionamentos e namoro",
    "module": 18,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "meeting-new-friends",
    "title": "Meeting New Friends",
    "emoji": "🤝😊",
    "description": "Fazendo novos amigos",
    "module": 18,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "talking-about-your-day",
    "title": "Talking About Your Day",
    "emoji": "☀️💬",
    "description": "Falando sobre o seu dia",
    "module": 18,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "meeting-americans",
    "title": "Meeting Americans",
    "emoji": "🇺🇸🤝",
    "description": "Conhecendo americanos",
    "module": 18,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "visiting-the-dentist",
    "title": "Visiting the Dentist",
    "emoji": "🦷😬",
    "description": "No dentista",
    "module": 19,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "calling-911-detailed",
    "title": "Calling 911",
    "emoji": "☎️🚨",
    "description": "Ligando para emergência",
    "module": 19,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "weather-disasters",
    "title": "Weather Disasters",
    "emoji": "🌪️⛈️",
    "description": "Desastres climáticos",
    "module": 19,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "attending-events",
    "title": "Attending Events",
    "emoji": "🎭🎫",
    "description": "Indo a eventos",
    "module": 20,
    "order": 1,
    "vocabularyCount": 0
  },
  {
    "id": "discussing-age",
    "title": "Discussing Age",
    "emoji": "🎂❓",
    "description": "Falando de idade",
    "module": 20,
    "order": 2,
    "vocabularyCount": 0
  },
  {
    "id": "booking-hotels",
    "title": "Booking Hotels",
    "emoji": "🏨📱",
    "description": "Reservando hotel",
    "module": 20,
    "order": 3,
    "vocabularyCount": 0
  },
  {
    "id": "hotel-problems",
    "title": "Hotel Problems & Services",
    "emoji": "🏨⚠️",
    "description": "Problemas no hotel",
    "module": 20,
    "order": 4,
    "vocabularyCount": 0
  },
  {
    "id": "tourist-attractions",
    "title": "Tourist Attractions",
    "emoji": "🗽🎡",
    "description": "Atrações turísticas",
    "module": 20,
    "order": 5,
    "vocabularyCount": 0
  },
  {
    "id": "music-concerts",
    "title": "Music & Concerts",
    "emoji": "🎵🎤",
    "description": "Música e shows",
    "module": 20,
    "order": 6,
    "vocabularyCount": 0
  },
  {
    "id": "movies-series",
    "title": "Movies & Series",
    "emoji": "🎬📺",
    "description": "Filmes e séries",
    "module": 20,
    "order": 7,
    "vocabularyCount": 0
  },
  {
    "id": "at-the-stadium",
    "title": "At the Stadium",
    "emoji": "🏟️⚽",
    "description": "No estádio",
    "module": 20,
    "order": 8,
    "vocabularyCount": 0
  },
  {
    "id": "parks-outdoors",
    "title": "Parks & Outdoors",
    "emoji": "🌳🏃",
    "description": "Parques e atividades ao ar livre",
    "module": 20,
    "order": 9,
    "vocabularyCount": 0
  },
  {
    "id": "holidays-traditions",
    "title": "Holidays & Traditions",
    "emoji": "🎄🎉",
    "description": "Feriados e tradições",
    "module": 20,
    "order": 10,
    "vocabularyCount": 0
  },
  {
    "id": "birthdays-celebrations",
    "title": "Birthdays & Celebrations",
    "emoji": "🎂🎉",
    "description": "Aniversários e festas",
    "module": 20,
    "order": 11,
    "vocabularyCount": 0
  },
  {
    "id": "playing-instruments",
    "title": "Playing Instruments",
    "emoji": "🎸🎹",
    "description": "Tocando instrumentos",
    "module": 20,
    "order": 12,
    "vocabularyCount": 0
  },
  {
    "id": "getting-drivers-license",
    "title": "Getting a Driver's License",
    "emoji": "🪪🚗",
    "description": "Tirando a carteira de motorista",
    "module": 20,
    "order": 13,
    "vocabularyCount": 0
  },
];
