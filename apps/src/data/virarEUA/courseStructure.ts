export interface CourseModule {
  number: number;
  sysModule: number;
  title: string;
  emoji: string;
  color: string;
  description: string;
  lessons: { id: string; existing: boolean; title: string; emoji: string; description: string }[];
}

export const VIRAR_EUA_MODULES: CourseModule[] = [
  {
    number: 1,
    sysModule: 11,
    title: 'PRIMEIRAS 48 HORAS',
    emoji: '🆘✈️',
    color: 'cyan',
    description: 'Chegue preparado, não desesperado.',
    lessons: [
      { id: 'survival-phrases', existing: true, title: 'Survival Phrases', emoji: '🆘🗣️', description: 'Frases de sobrevivência' },
      { id: 'airport-arrival', existing: false, title: 'Airport & Arrival', emoji: '✈️🛬', description: 'Chegando nos EUA' },
      { id: 'hotel-arrival', existing: false, title: 'Hotel Check-In', emoji: '🏨🔑', description: 'Check-in no hotel' },
      { id: 'phone-internet', existing: true, title: 'Phone & Internet', emoji: '📱📶', description: 'Celular e internet' },
      { id: 'first-shopping', existing: false, title: 'First Shopping Trip', emoji: '🛒🇺🇸', description: 'Primeiras compras nos EUA' },
      { id: 'what-time', existing: true, title: 'What Time', emoji: '⏰❓', description: 'Perguntar que horas' },
      { id: 'months-seasons', existing: false, title: 'Months & Seasons', emoji: '📅🌸', description: 'Meses e estações' },
      { id: 'regular-verbs-ed', existing: true, title: 'Regular Verbs (-ED)', emoji: '✅➕', description: 'Verbos regulares no passado' },
      { id: 'why', existing: true, title: 'Why', emoji: '🤷❓', description: 'Perguntar por quê' },
      { id: 'which', existing: true, title: 'Which', emoji: '👆❓', description: 'Escolher opções' },
    ],
  },
  {
    number: 2,
    sysModule: 12,
    title: 'TRABALHO',
    emoji: '💼🔧',
    color: 'orange',
    description: 'O inglês que paga suas contas.',
    lessons: [
      { id: 'job-search', existing: false, title: 'Job Search', emoji: '🔍💼', description: 'Buscando emprego' },
      { id: 'job-interview', existing: false, title: 'Job Interview', emoji: '🤝💼', description: 'Entrevista de emprego' },
      { id: 'at-work-basic', existing: true, title: 'At Work (Basic)', emoji: '💼👔', description: 'Trabalho básico' },
      { id: 'safety-commands', existing: true, title: 'Safety Commands', emoji: '⚠️🦺', description: 'Comandos de segurança' },
      { id: 'asking-for-help', existing: true, title: 'Asking for Help', emoji: '🙋❓', description: 'Pedindo ajuda' },
      { id: 'work-schedule', existing: false, title: 'Work Schedule & Shifts', emoji: '🕒📋', description: 'Horários e turnos' },
      { id: 'pay-hours', existing: true, title: 'Pay & Hours', emoji: '💰⏰', description: 'Pagamento e horário' },
      { id: 'at-work-problems', existing: true, title: 'At Work (Problems)', emoji: '💼⚠️', description: 'Problemas no trabalho' },
      { id: 'reporting-tasks', existing: false, title: 'Reporting Tasks', emoji: '✅📋', description: 'Relatando o que foi feito' },
      { id: 'talking-to-boss', existing: true, title: 'Talking to the Boss', emoji: '🤝👔', description: 'Falando com o chefe' },
      { id: 'office-vocabulary', existing: false, title: 'Office Vocabulary', emoji: '🖥️📎', description: 'Vocabulário de escritório' },
      { id: 'meetings-presentations', existing: false, title: 'Meetings & Presentations', emoji: '📊👥', description: 'Reuniões e apresentações' },
    ],
  },
  {
    number: 3,
    sysModule: 13,
    title: 'COMIDA',
    emoji: '🍔🍳',
    color: 'green',
    description: 'Coma o que quiser, onde quiser.',
    lessons: [
      { id: 'restaurant-fastfood', existing: true, title: 'Restaurant & Fast Food', emoji: '🍔🍟', description: 'Restaurante e fast food' },
      { id: 'cooking-at-home', existing: false, title: 'Cooking at Home', emoji: '🍳🏠', description: 'Cozinhando em casa' },
      { id: 'coffee-shop', existing: true, title: 'Coffee Shop', emoji: '☕🏪', description: 'Cafeteria' },
      { id: 'ordering-food-basic', existing: true, title: 'Ordering Food (Basic)', emoji: '🍽️📋', description: 'Fazendo pedido' },
      { id: 'special-diets', existing: false, title: 'Special Diets & Allergies', emoji: '🥗⚠️', description: 'Dietas e restrições' },
      { id: 'local-markets', existing: false, title: 'Local Markets & Fairs', emoji: '🌽🛒', description: 'Feira e mercado local' },
      { id: 'at-the-bakery', existing: false, title: 'At the Bakery', emoji: '🍞🥐', description: 'Na padaria' },
      { id: 'at-the-butcher', existing: false, title: 'At the Butcher', emoji: '🥩🔪', description: 'No açougue' },
      { id: 'grocery-shopping', existing: true, title: 'Grocery Shopping', emoji: '🛒🥬', description: 'Supermercado avançado' },
      { id: 'ordering-food-problems', existing: true, title: 'Ordering Food (Problems)', emoji: '🍔❌', description: 'Problemas com pedido' },
      { id: 'cooking-vocabulary', existing: false, title: 'Cooking Vocabulary', emoji: '🍳📚', description: 'Vocabulário de cozinha' },
    ],
  },
  {
    number: 4,
    sysModule: 14,
    title: 'CASA',
    emoji: '🏠🛋️',
    color: 'purple',
    description: 'Viva com conforto e respeito.',
    lessons: [
      { id: 'household-chores', existing: false, title: 'Household Chores', emoji: '🧹🏠', description: 'Tarefas domésticas' },
      { id: 'home-repairs', existing: false, title: 'Home Repairs', emoji: '🔧🏠', description: 'Reparos na casa' },
      { id: 'moving-out', existing: false, title: 'Moving Out', emoji: '📦🚚', description: 'Mudança de casa' },
      { id: 'renting', existing: true, title: 'Renting an Apartment', emoji: '🏠📝', description: 'Alugando apartamento' },
      { id: 'apartment-problems', existing: false, title: 'Apartment Problems', emoji: '🏠⚠️', description: 'Problemas no apartamento' },
      { id: 'bills-utilities', existing: true, title: 'Bills & Utilities', emoji: '📄💡', description: 'Contas e serviços' },
      { id: 'house-furniture', existing: false, title: 'House Furniture', emoji: '🛋️🪑', description: 'Móveis da casa' },
      { id: 'household-appliances', existing: false, title: 'Household Appliances', emoji: '⚡🏠', description: 'Eletrodomésticos' },
      { id: 'talking-to-landlord', existing: false, title: 'Talking to Your Landlord', emoji: '🏠👤', description: 'Falando com o proprietário' },
      { id: 'neighbors-living', existing: true, title: 'Neighbors & Living', emoji: '🏘️👋', description: 'Vizinhos e moradia' },
    ],
  },
  {
    number: 5,
    sysModule: 15,
    title: 'DINHEIRO',
    emoji: '💰💳',
    color: 'gold',
    description: 'Não seja passado pra trás.',
    lessons: [
      { id: 'how-much', existing: true, title: 'How Much', emoji: '💰❓', description: 'Quanto custa' },
      { id: 'at-the-bank', existing: true, title: 'At the Bank', emoji: '🏦💳', description: 'No banco' },
      { id: 'paying-bills', existing: false, title: 'Paying Bills', emoji: '💳📄', description: 'Pagando contas' },
      { id: 'using-credit-debit', existing: false, title: 'Using Credit or Debit', emoji: '💳💵', description: 'Usando cartão' },
      { id: 'asking-for-change', existing: false, title: 'Asking for Change', emoji: '💵🔄', description: 'Pedindo troco' },
      { id: 'opening-bank-account', existing: false, title: 'Opening a Bank Account', emoji: '🏦📝', description: 'Abrindo conta no banco' },
      { id: 'tipping-paying', existing: true, title: 'Tipping & Paying', emoji: '💵💳', description: 'Gorjeta e pagamento' },
      { id: 'usps-mail', existing: true, title: 'USPS / Mail', emoji: '📬📦', description: 'Correios e envios' },
      { id: 'at-the-mall', existing: false, title: 'At the Mall', emoji: '🛍️🏬', description: 'No shopping' },
      { id: 'electronics-shopping', existing: false, title: 'Electronics Shopping', emoji: '💻📱', description: 'Comprando eletrônicos' },
    ],
  },
  {
    number: 6,
    sysModule: 16,
    title: 'LOCALIZAÇÃO',
    emoji: '📍🗺️',
    color: 'cyan',
    description: 'Ache e seja achado.',
    lessons: [
      { id: 'what-kind-type', existing: false, title: 'What Kind / What Type', emoji: '🔍❓', description: 'Que tipo é esse?' },
      { id: 'directions-basic', existing: true, title: 'Directions (Basic)', emoji: '🧭📍', description: 'Direções básicas' },
      { id: 'directions-street', existing: true, title: 'Directions (Street)', emoji: '🛣️🚗', description: 'Direções na rua' },
      { id: 'using-gps-maps', existing: false, title: 'Using GPS & Maps', emoji: '🗺️📍', description: 'Usando GPS e mapas' },
      { id: 'gas-station', existing: true, title: 'Gas Station', emoji: '⛽🚗', description: 'Posto de gasolina' },
      { id: 'asking-for-nearest', existing: false, title: 'Asking for the Nearest...', emoji: '📍❓', description: 'Onde fica o mais próximo' },
      { id: 'lost-and-found', existing: false, title: 'Lost and Found', emoji: '🔍📦', description: 'Achados e perdidos' },
    ],
  },
  {
    number: 7,
    sysModule: 17,
    title: 'TRANSPORTE',
    emoji: '🚗✈️',
    color: 'red',
    description: 'Vá pra qualquer lugar.',
    lessons: [
      { id: 'booking-flights', existing: false, title: 'Booking Flights', emoji: '✈️🎫', description: 'Comprando passagens aéreas' },
      { id: 'renting-cars', existing: false, title: 'Renting Cars', emoji: '🚗🔑', description: 'Alugando um carro' },
      { id: 'bus-transit', existing: true, title: 'Bus & Transit', emoji: '🚌🚇', description: 'Ônibus e transporte' },
      { id: 'traveling-by-bus', existing: false, title: 'Traveling by Bus', emoji: '🚌🚦', description: 'Viajando de ônibus' },
      { id: 'at-the-subway', existing: false, title: 'At the Subway', emoji: '🚇🎫', description: 'No metrô' },
      { id: 'at-the-train-station', existing: false, title: 'At the Train Station', emoji: '🚆🎫', description: 'Na estação de trem' },
      { id: 'traffic-road-signs', existing: false, title: 'Traffic & Road Signs', emoji: '🚦⚠️', description: 'Trânsito e placas' },
      { id: 'car-trouble', existing: true, title: 'Car Trouble', emoji: '🚗🔧', description: 'Problemas com carro' },
      { id: 'traveling-abroad', existing: false, title: 'Traveling Abroad', emoji: '🌍✈️', description: 'Viajando para fora' },
      { id: 'airport-advanced', existing: false, title: 'Airport Advanced', emoji: '✈️🏃', description: 'Situações avançadas no aeroporto' },
    ],
  },
  {
    number: 8,
    sysModule: 18,
    title: 'CONVERSAS',
    emoji: '💬🤝',
    color: 'purple',
    description: 'Conecte-se com pessoas.',
    lessons: [
      { id: 'how-to-describe', existing: false, title: 'How to Describe', emoji: '🗣️📝', description: 'Como descrever pessoas e coisas' },
      { id: 'weather', existing: true, title: 'Weather', emoji: '☀️🌧️', description: 'Clima e tempo' },
      { id: 'feelings-reactions', existing: true, title: 'Feelings & Reactions', emoji: '😊😤', description: 'Sentimentos e reações' },
      { id: 'asking-for-clarification', existing: false, title: 'Asking for Clarification', emoji: '🤔❓', description: 'Pedindo explicações' },
      { id: 'dating-relationships', existing: false, title: 'Dating & Relationships', emoji: '❤️💬', description: 'Relacionamentos e namoro' },
      { id: 'love-hate', existing: true, title: 'Love / Hate', emoji: '❤️💔', description: 'Gostar muito / Odiar' },
      { id: 'emotions', existing: true, title: 'Emotions', emoji: '😊😢', description: 'Sentimentos e emoções' },
      { id: 'small-talk', existing: true, title: 'Small Talk', emoji: '💬😊', description: 'Conversa informal' },
      { id: 'meeting-new-friends', existing: false, title: 'Meeting New Friends', emoji: '🤝😊', description: 'Fazendo novos amigos' },
      { id: 'hobbies', existing: true, title: 'Hobbies', emoji: '🎸🎮', description: 'O que você faz nas horas vagas' },
      { id: 'talking-about-your-day', existing: false, title: 'Talking About Your Day', emoji: '☀️💬', description: 'Falando sobre o seu dia' },
      { id: 'phone-calls-basic', existing: true, title: 'Phone Calls (Basic)', emoji: '📞👋', description: 'Ligações básicas' },
      { id: 'meeting-americans', existing: false, title: 'Meeting Americans', emoji: '🇺🇸🤝', description: 'Conhecendo americanos' },
    ],
  },
  {
    number: 9,
    sysModule: 19,
    title: 'EMERGÊNCIAS',
    emoji: '🚨🏥',
    color: 'red',
    description: 'Mantenha o controle quando tudo dá errado.',
    lessons: [
      { id: 'at-the-gym', existing: true, title: 'At the Gym', emoji: '💪🏋️', description: 'Na academia' },
      { id: 'emergency-911', existing: true, title: 'Emergency (911)', emoji: '🚨🆘', description: 'Emergência' },
      { id: 'at-doctor-symptoms', existing: true, title: 'At the Doctor (Symptoms)', emoji: '🏥🤒', description: 'Descrever sintomas' },
      { id: 'pharmacy-pickup', existing: true, title: 'Pharmacy Pickup', emoji: '💊🏪', description: 'Retirar na farmácia' },
      { id: 'health-body', existing: true, title: 'Health & Body', emoji: '🩺💊', description: 'Saúde e corpo' },
      { id: 'visiting-the-dentist', existing: false, title: 'Visiting the Dentist', emoji: '🦷😬', description: 'No dentista' },
      { id: 'calling-911-detailed', existing: false, title: 'Calling 911', emoji: '☎️🚨', description: 'Ligando para emergência' },
      { id: 'hospital-er', existing: true, title: 'Hospital & ER', emoji: '🏥🚑', description: 'Hospital e pronto-socorro' },
      { id: 'at-doctor-instructions', existing: true, title: 'At the Doctor (Instructions)', emoji: '🏥💊', description: 'Instruções médicas' },
      { id: 'weather-disasters', existing: false, title: 'Weather Disasters', emoji: '🌪️⛈️', description: 'Desastres climáticos' },
    ],
  },
  {
    number: 10,
    sysModule: 20,
    title: 'BUROCRACIA',
    emoji: '🏛️📋',
    color: 'gold',
    description: 'Resolva tudo sozinho.',
    lessons: [
      { id: 'attending-events', existing: false, title: 'Attending Events', emoji: '🎭🎫', description: 'Indo a eventos' },
      { id: 'discussing-age', existing: false, title: 'Discussing Age', emoji: '🎂❓', description: 'Falando de idade' },
      { id: 'going-to', existing: true, title: 'Going To', emoji: '🔮➡️', description: 'Futuro planejado' },
      { id: 'booking-hotels', existing: false, title: 'Booking Hotels', emoji: '🏨📱', description: 'Reservando hotel' },
      { id: 'hotel-problems', existing: false, title: 'Hotel Problems & Services', emoji: '🏨⚠️', description: 'Problemas no hotel' },
      { id: 'tourist-attractions', existing: false, title: 'Tourist Attractions', emoji: '🗽🎡', description: 'Atrações turísticas' },
      { id: 'music-concerts', existing: false, title: 'Music & Concerts', emoji: '🎵🎤', description: 'Música e shows' },
      { id: 'movies-series', existing: false, title: 'Movies & Series', emoji: '🎬📺', description: 'Filmes e séries' },
      { id: 'sports', existing: true, title: 'Sports', emoji: '⚽🏈', description: 'Esportes em inglês' },
      { id: 'at-the-stadium', existing: false, title: 'At the Stadium', emoji: '🏟️⚽', description: 'No estádio' },
      { id: 'parks-outdoors', existing: false, title: 'Parks & Outdoors', emoji: '🌳🏃', description: 'Parques e atividades ao ar livre' },
      { id: 'holidays-traditions', existing: false, title: 'Holidays & Traditions', emoji: '🎄🎉', description: 'Feriados e tradições' },
      { id: 'birthdays-celebrations', existing: false, title: 'Birthdays & Celebrations', emoji: '🎂🎉', description: 'Aniversários e festas' },
      { id: 'playing-instruments', existing: false, title: 'Playing Instruments', emoji: '🎸🎹', description: 'Tocando instrumentos' },
      { id: 'getting-drivers-license', existing: false, title: 'Getting a Driver's License', emoji: '🪪🚗', description: 'Tirando a carteira de motorista' },
    ],
  },
];

export const VIRAR_EUA_LESSON_IDS = VIRAR_EUA_MODULES.flatMap((m) => m.lessons.map((l) => l.id));

export function getVirarModule(moduleNumber: number): CourseModule | undefined {
  return VIRAR_EUA_MODULES.find((m) => m.number === moduleNumber);
}

export function getVirarLessonMeta(lessonId: string) {
  for (const mod of VIRAR_EUA_MODULES) {
    const lesson = mod.lessons.find((l) => l.id === lessonId);
    if (lesson) return { ...lesson, courseModule: mod.number, sysModule: mod.sysModule };
  }
  return undefined;
}
