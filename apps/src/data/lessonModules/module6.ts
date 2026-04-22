import type { Lesson } from '@unlock2026/shared';

export const module6Lessons = [
  { id: 'if-basic', title: 'IF (Basic)', emoji: '🤔❓', description: 'Se (condição básica)', module: 6, order: 1,    slides: [
        { type: 'title', emoji: '🤔❓', title: 'IF (Basic)', subtitle: 'Se (condição simples)' },
        { type: 'situation', emoji: '🌧️', cardClass: 'purple', text: 'Você quer dizer:<br>"<strong>SE</strong> chover, eu fico em casa."<br><br>Como expressar condições?' },
        { type: 'rule', cardClass: 'cyan', text: 'Use <strong>IF</strong> para condições:', keyword: 'IF = se', keywordAfter: 'Se... então...' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>IF</strong> soa como "ÍF"<br><br>Curtinho e direto!' },
        { type: 'example', cardClass: 'cyan', emoji: '🌧️', question: "<span class='hl-cyan'>If</span> it rains, I'll stay home.", questionTr: 'Se chover, eu fico em casa.', answer: '(condição + resultado)', answerTr: 'IF + presente' },
        { type: 'example', cardClass: 'cyan', emoji: '📞', question: "<span class='hl-cyan'>If</span> you need help, call me.", questionTr: 'Se precisar de ajuda, me liga.', answer: '(oferta)', answerTr: 'Condição simples' },
        { type: 'example', cardClass: 'cyan', emoji: '⏰', question: "<span class='hl-cyan'>If</span> you're late, text me.", questionTr: 'Se você atrasar, me manda mensagem.', answer: '(instrução)', answerTr: 'Condição prática' },
        { type: 'examples', cardClass: 'cyan', title: '🤔 CONDIÇÕES COMUNS', items: [
          { emoji: '🔥', en: "<span class='hl-cyan'>If</span> it's hot, turn on the AC.", pt: 'Se estiver quente, liga o ar.' },
          { emoji: '❓', en: "<span class='hl-cyan'>If</span> you have questions, ask.", pt: 'Se tiver perguntas, pergunta.' },
          { emoji: '💵', en: "<span class='hl-cyan'>If</span> it's cheap, I'll buy it.", pt: 'Se for barato, eu compro.' },
          { emoji: '🆓', en: "<span class='hl-cyan'>If</span> you're free, let's go.", pt: 'Se você estiver livre, vamos.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'ESTRUTURA BÁSICA', text: '<strong>IF + presente</strong>, resultado<br><br>• If it rains, I stay home.<br>• If you want, I can help.<br><br>O IF vem com verbo no PRESENTE!' },
        { type: 'examples', cardClass: 'gold', title: '⚡ PADRÕES ÚTEIS', items: [
          { emoji: '❓', en: "<span class='hl-gold'>If</span> you want...", pt: 'Se você quiser...' },
          { emoji: '🆘', en: "<span class='hl-gold'>If</span> you need...", pt: 'Se você precisar...' },
          { emoji: '💭', en: "<span class='hl-gold'>If</span> you think...", pt: 'Se você achar...' },
          { emoji: '🤷', en: "<span class='hl-gold'>If</span> not...", pt: 'Se não...' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'ORDEM FLEXÍVEL', text: 'Duas formas corretas:<br><br>1. <strong>If</strong> you\'re hungry, eat.<br>2. Eat <strong>if</strong> you\'re hungry.<br><br>Vírgula só quando IF vem primeiro!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'If it will rain...', leftNote: 'Não use WILL com IF', right: 'If it rains...', rightNote: 'IF + presente', explanation: 'Com IF, use presente (não futuro!)' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Se chover, eu fico em casa" em inglês:', options: ['If it will rain, I stay home', 'If it rains, I stay home', 'If rain, I stay home'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Se você quiser" em inglês:', options: ['If you will want', 'If you wanting', 'If you want'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "_____ you need help, call me.", correctWord: 'If' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - IF (Basic)', items: [
          { emoji: '🤔', text: '<strong>IF</strong> = se (condição)' },
          { emoji: '📝', text: 'IF + presente (não futuro!)' },
          { emoji: '🔄', text: 'Ordem flexível (vírgula se IF primeiro)' },
          { emoji: '⚡', text: 'If you want, need, think...' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🌧️', pt: 'Se chover', en: 'If it rains' },
        { emoji: '📞', pt: 'Se precisar, me liga', en: 'If you need, call me' },
        { emoji: '❓', pt: 'Se você quiser', en: 'If you want' },
        { emoji: '🆘', pt: 'Se precisar de ajuda', en: 'If you need help' },
        { emoji: '🆓', pt: 'Se estiver livre', en: "If you're free" },
        { emoji: '🔥', pt: 'Se estiver quente', en: "If it's hot" },
        { emoji: '💵', pt: 'Se for barato', en: "If it's cheap" },
        { emoji: '⏰', pt: 'Se atrasar', en: "If you're late" },
        { emoji: '🤷', pt: 'Se não', en: 'If not' },
        { emoji: '✅', pt: 'Se possível', en: 'If possible' },
      ]
    },

  { id: 'future-will', title: 'FUTURE WILL', emoji: '🔮⚡', description: 'Futuro: decisões e promessas', module: 6, order: 2, slides: [    { type: 'title', emoji: '🔮⚡', title: 'FUTURE WITH WILL', subtitle: 'Decisões e promessas' },
      { type: 'situation', emoji: '📞', cardClass: 'purple', text: 'Seu chefe pede algo. Você quer mostrar que vai fazer:<br><br><strong>"I will finish today!"</strong><br>(Eu vou terminar hoje!)' },
      { type: 'rule', cardClass: 'cyan', text: 'Para decisões na hora, promessas e afirmações sobre o futuro:', keyword: 'WILL + VERB', keywordAfter: "I'll finish = Vou terminar" },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>WILL</strong> vira <strong>\'LL</strong> na fala:<br><br>\"I\'ll do it\" → \"ÁIL DÚ IT\"<br>\"He\'ll come\" → \"RÍL KÃM\"<br>\"We\'ll be there\" → \"UÍOL BI DÉR\"' },
      { type: 'example', cardClass: 'cyan', emoji: '✅', question: "I'll <span class='hl-cyan'>finish</span> today.", questionTr: 'Vou terminar hoje.', answer: "Promessa", answerTr: 'WILL + verbo' },
      { type: 'example', cardClass: 'cyan', emoji: '📞', question: "I'll <span class='hl-cyan'>call</span> you later.", questionTr: 'Vou te ligar depois.', answer: "Promessa", answerTr: 'WILL + verbo' },
      { type: 'example', cardClass: 'cyan', emoji: '🤝', question: "I'll <span class='hl-cyan'>help</span> you.", questionTr: 'Eu te ajudo.', answer: "Decisão na hora", answerTr: 'Oferecendo ajuda agora' },
      { type: 'examples', cardClass: 'cyan', title: '💼 PROMESSAS NO TRABALHO', items: [
        { emoji: '⏰', en: "I'll <span class='hl-cyan'>be there</span> at 8.", pt: 'Vou estar lá às 8.' },
        { emoji: '🔧', en: "I'll <span class='hl-cyan'>fix</span> it tomorrow.", pt: 'Vou consertar amanhã.' },
        { emoji: '📦', en: "We'll <span class='hl-cyan'>bring</span> the materials.", pt: 'Vamos trazer os materiais.' },
        { emoji: '✅', en: "I'll <span class='hl-cyan'>get it done</span>.", pt: 'Vou dar conta.' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '❌ NEGATIVO: WON\'T', items: [
        { emoji: '🙅', en: "I <span class='hl-purple'>won't</span> be late.", pt: 'Não vou me atrasar.' },
        { emoji: '⏰', en: "It <span class='hl-purple'>won't</span> take long.", pt: 'Não vai demorar.' },
        { emoji: '💸', en: "It <span class='hl-purple'>won't</span> cost much.", pt: 'Não vai custar muito.' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 WILL vs GOING TO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⚡', rightIcon: '📋', leftLabel: "WILL (na hora)", rightLabel: 'GOING TO (planejado)', left: "I'll <span class='hl-cyan'>help</span> you.", leftNote: 'Decidi agora', right: "I'm <span class='hl-purple'>going to</span> paint tomorrow.", rightNote: 'Já estava planejado', explanation: "WILL = decisão/promessa agora | GOING TO = plano" },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'No trabalho, <strong>WILL</strong> é a palavra da confiança:<br><br>\"I\'ll be there\" = Vou estar lá ✅<br>\"I\'ll finish it\" = Vou terminar ✅<br>\"I\'ll take care of it\" = Eu resolvo ✅<br><br>Mostra que você é confiável!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "I will to finish.", leftNote: 'Não usa TO depois de WILL', right: "I will finish.", rightNote: 'WILL + verbo direto', explanation: 'WILL + verbo <strong>sem TO</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Vou te ligar depois":', options: ["I'll call you later", "I will to call you later", "I going to call you"], correct: 0 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Não vai demorar":', options: ["It won't take long", "It will not to take long", "It don't will take long"], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I _____ be there at 8 AM.", correctWord: 'will' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - WILL', items: [
        { emoji: '⚡', text: "<strong>WILL + verbo</strong> (sem TO)" },
        { emoji: '🗣️', text: "Na fala: 'LL (I'll, he'll, we'll)" },
        { emoji: '🙅', text: "Negativo: WON'T (will not)" },
        { emoji: '💼', text: 'Use pra promessas e decisões no trabalho' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '✅', pt: 'Vou terminar hoje', en: "I'll finish today", level: 1 },
      { emoji: '📞', pt: 'Vou te ligar depois', en: "I'll call you later", level: 1 },
      { emoji: '🤝', pt: 'Eu te ajudo', en: "I'll help you", level: 1 },
      { emoji: '⏰', pt: 'Vou estar lá às 8', en: "I'll be there at 8", level: 1 },
      { emoji: '🔧', pt: 'Vou consertar amanhã', en: "I'll fix it tomorrow", level: 1 },
      { emoji: '📦', pt: 'Vamos trazer os materiais', en: "We'll bring the materials", level: 1 },
      { emoji: '✅', pt: 'Vou dar conta', en: "I'll get it done", level: 1 },
      { emoji: '🙅', pt: 'Não vou me atrasar', en: "I won't be late", level: 1 },
      { emoji: '⏳', pt: 'Não vai demorar', en: "It won't take long", level: 1 },
      { emoji: '💸', pt: 'Não vai custar muito', en: "It won't cost much", level: 1 },
      { emoji: '🚗', pt: 'Eu te dou uma carona', en: "I'll give you a ride", level: 1 },
      { emoji: '💰', pt: 'Eu pago', en: "I'll pay", level: 1 },
      { emoji: '📋', pt: 'Eu resolvo isso', en: "I'll take care of it", level: 1 },
      { emoji: '🔑', pt: 'Vou trancar a porta', en: "I'll lock the door", level: 1 },
      { emoji: '📱', pt: 'Vou te mandar mensagem', en: "I'll text you", level: 1 },
      { emoji: '🏠', pt: 'Vou pra casa', en: "I'll go home", level: 1 },
      { emoji: '🍽️', pt: 'Vou almoçar depois', en: "I'll have lunch later", level: 1 },
      { emoji: '⚡', pt: 'Vai ficar pronto rápido', en: "It'll be ready fast", level: 2 },
      { emoji: '❓', pt: 'Você vai estar lá?', en: "Will you be there?", level: 1 },
      { emoji: '🛠️', pt: 'Vou precisar de ferramentas', en: "I'll need tools", level: 1 }
    ] },

  { id: 'may-might', title: 'MAY / MIGHT', emoji: '🤔💭', description: 'Possibilidade e permissão', module: 6, order: 3, slides: [    { type: 'title', emoji: '🤔💭', title: 'MAY / MIGHT', subtitle: 'Talvez / Será que pode?' },
      { type: 'situation', emoji: '🌧️', cardClass: 'purple', text: 'Olha pro céu nublado. Você pensa:<br><br><strong>"It might rain today."</strong><br>(Talvez chova hoje.)<br><br>Não tem certeza, mas é possível.' },
      { type: 'rule', cardClass: 'cyan', text: '<strong>MAY / MIGHT</strong> = talvez, pode ser que<br><strong>MAY I</strong> = posso? (pedindo permissão educada)', keyword: 'MAY / MIGHT', keywordAfter: 'Possibilidade ou permissão educada' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>MAY</strong> → \"MÊI\"<br><strong>MIGHT</strong> → \"MÁIT\"<br><br>MAY e MIGHT significam quase a mesma coisa.<br>MIGHT é um pouquinho menos certo.' },
      { type: 'example', cardClass: 'cyan', emoji: '🌧️', question: "It <span class='hl-cyan'>might</span> rain today.", questionTr: 'Talvez chova hoje.', answer: "Possibilidade", answerTr: 'Não tenho certeza' },
      { type: 'example', cardClass: 'cyan', emoji: '⏰', question: "I <span class='hl-cyan'>may</span> be late.", questionTr: 'Talvez eu atrase.', answer: "Possibilidade", answerTr: 'É possível' },
      { type: 'example', cardClass: 'purple', emoji: '🚪', question: "<span class='hl-purple'>May</span> I come in?", questionTr: 'Posso entrar?', answer: "Permissão educada", answerTr: 'Pedindo permissão' },
      { type: 'examples', cardClass: 'cyan', title: '🤔 POSSIBILIDADE (TALVEZ)', items: [
        { emoji: '👷', en: "He <span class='hl-cyan'>might</span> come tomorrow.", pt: 'Ele talvez venha amanhã.' },
        { emoji: '💰', en: "They <span class='hl-cyan'>may</span> pay on Friday.", pt: 'Talvez paguem na sexta.' },
        { emoji: '🏠', en: "I <span class='hl-cyan'>might</span> move next month.", pt: 'Talvez eu me mude mês que vem.' },
        { emoji: '❄️', en: "It <span class='hl-cyan'>might</span> snow tonight.", pt: 'Talvez neve hoje à noite.' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '🤝 PERMISSÃO EDUCADA (MAY I)', items: [
        { emoji: '🚻', en: "<span class='hl-purple'>May</span> I use the bathroom?", pt: 'Posso usar o banheiro?' },
        { emoji: '💬', en: "<span class='hl-purple'>May</span> I ask a question?", pt: 'Posso fazer uma pergunta?' },
        { emoji: '📞', en: "<span class='hl-purple'>May</span> I make a call?", pt: 'Posso fazer uma ligação?' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 MAY vs CAN (permissão)', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🎩', rightIcon: '👋', leftLabel: 'MAY (formal)', rightLabel: 'CAN (informal)', left: "<span class='hl-cyan'>May</span> I sit here?", leftNote: 'Mais educado/formal', right: "<span class='hl-purple'>Can</span> I sit here?", rightNote: 'Mais casual', explanation: 'MAY = mais educado | CAN = dia a dia' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'No trabalho com o chefe ou em situações formais:<br>Use <strong>MAY I</strong> pra pedir permissão<br><br>No dia a dia com amigos:<br>Use <strong>CAN I</strong><br><br>Pra \"talvez\": <strong>MIGHT</strong> é o mais comum na fala!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "It might to rain.", leftNote: 'Não usa TO', right: "It might rain.", rightNote: 'MIGHT + verbo direto', explanation: 'MAY/MIGHT + verbo <strong>sem TO</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Talvez chova hoje":', options: ['It might to rain today', 'It might rain today', 'It might raining today'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pedindo permissão educada pro chefe:', options: ['Can I go?', 'May I go?', 'Must I go?'], correct: 1 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "It _____ snow tonight.", correctWord: 'might' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '🤔', text: '<strong>MAY / MIGHT</strong> = talvez' },
        { emoji: '🤝', text: '<strong>MAY I</strong> = posso? (educado)' },
        { emoji: '🔤', text: 'MAY/MIGHT + verbo sem TO' },
        { emoji: '💡', text: 'MIGHT é mais comum na fala do dia a dia' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🌧️', pt: 'Talvez chova hoje', en: "It might rain today", level: 1 },
      { emoji: '⏰', pt: 'Talvez eu atrase', en: "I may be late", level: 1 },
      { emoji: '🚪', pt: 'Posso entrar?', en: "May I come in?", level: 1 },
      { emoji: '👷', pt: 'Ele talvez venha amanhã', en: "He might come tomorrow", level: 1 },
      { emoji: '💰', pt: 'Talvez paguem na sexta', en: "They may pay on Friday", level: 1 },
      { emoji: '🏠', pt: 'Talvez eu me mude', en: "I might move next month", level: 1 },
      { emoji: '❄️', pt: 'Talvez neve hoje à noite', en: "It might snow tonight", level: 1 },
      { emoji: '🚻', pt: 'Posso usar o banheiro?', en: "May I use the bathroom?", level: 1 },
      { emoji: '💬', pt: 'Posso fazer uma pergunta?', en: "May I ask a question?", level: 1 },
      { emoji: '📞', pt: 'Posso fazer uma ligação?', en: "May I make a call?", level: 1 },
      { emoji: '🪑', pt: 'Posso sentar aqui?', en: "May I sit here?", level: 1 },
      { emoji: '🔧', pt: 'Talvez demore mais', en: "It might take longer", level: 1 },
      { emoji: '🚗', pt: 'Talvez ele não venha', en: "He might not come", level: 1 },
      { emoji: '🏥', pt: 'Talvez eu precise ir ao médico', en: "I might need to see a doctor", level: 2 },
      { emoji: '💼', pt: 'Talvez eu mude de emprego', en: "I might change jobs", level: 1 },
      { emoji: '🔑', pt: 'Posso pegar a chave?', en: "May I get the key?", level: 1 },
      { emoji: '🚶', pt: 'Posso sair mais cedo?', en: "May I leave early?", level: 1 },
      { emoji: '📋', pt: 'Talvez precise de mais tempo', en: "I might need more time", level: 1 },
      { emoji: '🤒', pt: 'Talvez eu esteja doente', en: "I might be sick", level: 1 },
      { emoji: '⚡', pt: 'Talvez a luz acabe', en: "The power might go out", level: 2 }
    ] },

  { id: 'could', title: 'COULD', emoji: '💭🔧', description: 'Possibilidade, habilidade passada, pedido educado', module: 6, order: 4, slides: [    { type: 'title', emoji: '💭🔧', title: 'COULD', subtitle: 'Podia / Poderia / Conseguia' },
      { type: 'situation', emoji: '🏗️', cardClass: 'purple', text: 'Precisa de ajuda no trabalho.<br>Quer pedir de forma educada:<br><br><strong>"Could you help me?"</strong><br>(Você poderia me ajudar?)' },
      { type: 'rule', cardClass: 'cyan', text: '<strong>COULD</strong> tem 3 usos:<br>1. Pedido educado: Could you help?<br>2. Passado de CAN: I could swim<br>3. Possibilidade: It could rain', keyword: 'COULD', keywordAfter: 'Poderia / Podia / Conseguia' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>COULD</strong> → \"KÚD\" (o L é mudo!)<br><strong>COULDN\'T</strong> → \"KÚDNT\"<br><br>Igual SHOULD, o L não se pronuncia!' },
      { type: 'example', cardClass: 'cyan', emoji: '🤝', question: "<span class='hl-cyan'>Could</span> you help me?", questionTr: 'Poderia me ajudar?', answer: "Pedido educado", answerTr: 'Mais suave que CAN' },
      { type: 'example', cardClass: 'cyan', emoji: '🏊', question: "I <span class='hl-cyan'>could</span> swim when I was young.", questionTr: 'Eu sabia nadar quando era jovem.', answer: "Habilidade no passado", answerTr: 'Conseguia antes' },
      { type: 'example', cardClass: 'cyan', emoji: '🌧️', question: "It <span class='hl-cyan'>could</span> rain later.", questionTr: 'Pode chover mais tarde.', answer: "Possibilidade", answerTr: 'Talvez aconteça' },
      { type: 'examples', cardClass: 'cyan', title: '🤝 PEDIDOS EDUCADOS', items: [
        { emoji: '🗣️', en: "<span class='hl-cyan'>Could</span> you speak slower?", pt: 'Poderia falar mais devagar?' },
        { emoji: '📝', en: "<span class='hl-cyan'>Could</span> you write it down?", pt: 'Poderia escrever?' },
        { emoji: '🔁', en: "<span class='hl-cyan'>Could</span> you repeat that?", pt: 'Poderia repetir?' },
        { emoji: '📍', en: "<span class='hl-cyan'>Could</span> you show me?", pt: 'Poderia me mostrar?' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '⏪ NO PASSADO (conseguia)', items: [
        { emoji: '🏃', en: "I <span class='hl-purple'>could</span> run fast.", pt: 'Eu conseguia correr rápido.' },
        { emoji: '🗣️', en: "I <span class='hl-purple'>couldn't</span> speak English.", pt: 'Eu não conseguia falar inglês.' },
        { emoji: '🏋️', en: "He <span class='hl-purple'>could</span> carry heavy things.", pt: 'Ele conseguia carregar coisas pesadas.' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 CAN vs COULD (pedido)', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '👋', rightIcon: '🎩', leftLabel: 'CAN (direto)', rightLabel: 'COULD (educado)', left: "<span class='hl-purple'>Can</span> you help?", leftNote: 'Mais direto/casual', right: "<span class='hl-cyan'>Could</span> you help?", rightNote: 'Mais educado', explanation: 'COULD = mais educado que CAN em pedidos' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'No trabalho, sempre prefira <strong>COULD</strong> quando pedir algo:<br><br>\"Could you help me?\" ✅ Educado<br>\"Can you help me?\" 😐 OK<br>\"Help me!\" ❌ Rude<br><br>COULD mostra respeito!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "Could you to help me?", leftNote: 'Não usa TO', right: "Could you help me?", rightNote: 'COULD + verbo direto', explanation: 'COULD + verbo <strong>sem TO</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pedido educado - "Poderia repetir?":', options: ['Could you repeat that?', 'Could you to repeat that?', 'Can you could repeat?'], correct: 0 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu não conseguia falar inglês":', options: ["I can't speak English", "I couldn't speak English", "I could not to speak English"], correct: 1 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "_____ you speak slower, please?", correctWord: 'Could' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '🤝', text: '<strong>COULD you...?</strong> = pedido educado' },
        { emoji: '⏪', text: '<strong>I COULD</strong> = eu conseguia (passado)' },
        { emoji: '💭', text: '<strong>IT COULD</strong> = pode ser que (possibilidade)' },
        { emoji: '🔤', text: 'O L é MUDO! Pronúncia: KÚD' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🤝', pt: 'Poderia me ajudar?', en: "Could you help me?", level: 1 },
      { emoji: '🗣️', pt: 'Poderia falar mais devagar?', en: "Could you speak slower?", level: 1 },
      { emoji: '📝', pt: 'Poderia escrever?', en: "Could you write it down?", level: 1 },
      { emoji: '🔁', pt: 'Poderia repetir?', en: "Could you repeat that?", level: 1 },
      { emoji: '📍', pt: 'Poderia me mostrar?', en: "Could you show me?", level: 1 },
      { emoji: '🏊', pt: 'Eu sabia nadar quando era jovem', en: "I could swim when I was young", level: 2 },
      { emoji: '🏃', pt: 'Eu conseguia correr rápido', en: "I could run fast", level: 1 },
      { emoji: '🗣️', pt: 'Eu não conseguia falar inglês', en: "I couldn't speak English", level: 1 },
      { emoji: '🏋️', pt: 'Ele conseguia carregar coisas pesadas', en: "He could carry heavy things", level: 1 },
      { emoji: '🌧️', pt: 'Pode chover mais tarde', en: "It could rain later", level: 1 },
      { emoji: '🚗', pt: 'Poderia me dar uma carona?', en: "Could you give me a ride?", level: 1 },
      { emoji: '💡', pt: 'Poderia acender a luz?', en: "Could you turn on the light?", level: 1 },
      { emoji: '🚪', pt: 'Poderia abrir a porta?', en: "Could you open the door?", level: 1 },
      { emoji: '📞', pt: 'Poderia ligar pra mim?', en: "Could you call me?", level: 1 },
      { emoji: '⏰', pt: 'Poderia esperar um minuto?', en: "Could you wait a minute?", level: 1 },
      { emoji: '🔇', pt: 'Eu não conseguia ouvir', en: "I couldn't hear", level: 1 },
      { emoji: '👀', pt: 'Eu não conseguia ver', en: "I couldn't see", level: 1 },
      { emoji: '😴', pt: 'Eu não conseguia dormir', en: "I couldn't sleep", level: 1 },
      { emoji: '🔑', pt: 'Eu não conseguia encontrar a chave', en: "I couldn't find the key", level: 1 },
      { emoji: '🚙', pt: 'Pode ser que ele atrase', en: "He could be late", level: 2 }
    ] },

  { id: 'must-mustn-t', title: "MUST / MUSTN'T", emoji: '⚠️🚫', description: 'Obrigação e proibição', module: 6, order: 5, slides: [
      { type: 'title', emoji: '⚠️🚫', title: "MUST / MUSTN'T", subtitle: 'Tem que / Não pode' },
      { type: 'situation', emoji: '🏗️', cardClass: 'purple', text: 'Primeiro dia na obra. O chefe aponta pro capacete:<br><br><strong>"You MUST wear a helmet!"</strong><br>(Você TEM QUE usar capacete!)<br><br>Segurança não é opcional!' },
      { type: 'rule', cardClass: 'cyan', text: '<strong>MUST</strong> = TEM QUE (obrigatório)<br><strong>MUSTN\'T</strong> = NÃO PODE (proibido)', keyword: 'MUST', keywordAfter: "Obrigação forte / Regra" },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>MUST</strong> → \"MÂST\"<br><strong>MUSTN\'T</strong> → \"MÂSNT\" (o T quase some)<br><br>É rápido! \"You mustn\'t\" → \"IU MÂSNT\"' },
      { type: 'example', cardClass: 'cyan', emoji: '⛑️', question: "You <span class='hl-cyan'>must</span> wear a helmet.", questionTr: 'Você tem que usar capacete.', answer: "Regra de segurança", answerTr: 'Obrigatório' },
      { type: 'example', cardClass: 'cyan', emoji: '🔒', question: "You <span class='hl-cyan'>must</span> lock the door.", questionTr: 'Você tem que trancar a porta.', answer: "Obrigação", answerTr: 'Tem que fazer' },
      { type: 'example', cardClass: 'red', emoji: '🚫', question: "You <span class='hl-red'>mustn't</span> touch that.", questionTr: 'Você não pode tocar nisso.', answer: "Proibição", answerTr: 'É proibido' },
      { type: 'examples', cardClass: 'cyan', title: '⛑️ REGRAS DE SEGURANÇA', items: [
        { emoji: '👢', en: "You <span class='hl-cyan'>must</span> wear safety boots.", pt: 'Tem que usar bota de segurança.' },
        { emoji: '🥽', en: "You <span class='hl-cyan'>must</span> wear safety glasses.", pt: 'Tem que usar óculos de proteção.' },
        { emoji: '🧤', en: "You <span class='hl-cyan'>must</span> wear gloves.", pt: 'Tem que usar luvas.' },
        { emoji: '📋', en: "You <span class='hl-cyan'>must</span> sign in every day.", pt: 'Tem que assinar presença todo dia.' }
      ]},
      { type: 'examples', cardClass: 'red', title: '🚫 PROIBIÇÕES NO TRABALHO', items: [
        { emoji: '📱', en: "You <span class='hl-red'>mustn't</span> use your phone.", pt: 'Não pode usar celular.' },
        { emoji: '🚬', en: "You <span class='hl-red'>mustn't</span> smoke here.", pt: 'Não pode fumar aqui.' },
        { emoji: '⚡', en: "You <span class='hl-red'>mustn't</span> touch the wires.", pt: 'Não pode tocar nos fios.' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 MUST vs HAVE TO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⚠️', rightIcon: '📋', leftLabel: 'MUST (mais forte)', rightLabel: 'HAVE TO (regra externa)', left: "You <span class='hl-cyan'>must</span> be careful!", leftNote: 'Eu estou mandando', right: "I <span class='hl-purple'>have to</span> work tomorrow.", rightNote: 'É a regra/situação', explanation: 'MUST = mais urgente/pessoal | HAVE TO = obrigação geral' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Na obra e no trabalho, quando ouvir <strong>MUST</strong> ou <strong>MUSTN\'T</strong>, é SÉRIO!<br><br>\"You must wear a helmet\" = Capacete É obrigatório<br>\"You mustn\'t go there\" = É PROIBIDO ir lá<br><br>Não é sugestão — é regra!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "You must to wear a helmet.", leftNote: 'Não usa TO', right: "You must wear a helmet.", rightNote: 'MUST + verbo direto', explanation: 'MUST + verbo <strong>sem TO</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Você tem que usar capacete":', options: ['You must to wear a helmet', 'You must wear a helmet', 'You must wearing a helmet'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Não pode fumar aqui":', options: ["You mustn't smoke here", "You don't must smoke here", "You must not to smoke here"], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "You _____ wear safety glasses.", correctWord: 'must' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '⚠️', text: '<strong>MUST</strong> = tem que (obrigatório)' },
        { emoji: '🚫', text: "<strong>MUSTN'T</strong> = não pode (proibido)" },
        { emoji: '🔤', text: 'MUST + verbo sem TO' },
        { emoji: '⛑️', text: 'Muito usado em regras de segurança' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '⛑️', pt: 'Tem que usar capacete', en: "You must wear a helmet", level: 1 },
      { emoji: '🔒', pt: 'Tem que trancar a porta', en: "You must lock the door", level: 1 },
      { emoji: '🚫', pt: 'Não pode tocar nisso', en: "You mustn't touch that", level: 1 },
      { emoji: '👢', pt: 'Tem que usar bota de segurança', en: "You must wear safety boots", level: 1 },
      { emoji: '🥽', pt: 'Tem que usar óculos de proteção', en: "You must wear safety glasses", level: 1 },
      { emoji: '🧤', pt: 'Tem que usar luvas', en: "You must wear gloves", level: 1 },
      { emoji: '📋', pt: 'Tem que assinar presença', en: "You must sign in every day", level: 1 },
      { emoji: '📱', pt: 'Não pode usar celular', en: "You mustn't use your phone", level: 1 },
      { emoji: '🚬', pt: 'Não pode fumar aqui', en: "You mustn't smoke here", level: 1 },
      { emoji: '⚡', pt: 'Não pode tocar nos fios', en: "You mustn't touch the wires", level: 1 },
      { emoji: '🚗', pt: 'Tem que ter carteira de motorista', en: "You must have a driver's license", level: 2 },
      { emoji: '⏰', pt: 'Tem que chegar no horário', en: "You must be on time", level: 1 },
      { emoji: '🆔', pt: 'Tem que ter documento', en: "You must have ID", level: 1 },
      { emoji: '🚧', pt: 'Não pode entrar ali', en: "You mustn't go in there", level: 1 },
      { emoji: '🍺', pt: 'Não pode beber no trabalho', en: "You mustn't drink at work", level: 1 },
      { emoji: '⚠️', pt: 'Tem que ter cuidado', en: "You must be careful", level: 1 },
      { emoji: '🔇', pt: 'Não pode fazer barulho', en: "You mustn't make noise", level: 1 },
      { emoji: '🅿️', pt: 'Não pode estacionar aqui', en: "You mustn't park here", level: 1 },
      { emoji: '📝', pt: 'Tem que preencher o formulário', en: "You must fill out the form", level: 2 },
      { emoji: '💪', pt: 'Tem que ser forte pra esse trabalho', en: "You must be strong for this job", level: 1 }
    ] },

  { id: 'would-should-could', title: 'WOULD / SHOULD / COULD', emoji: '🤔💬', description: 'Condicional básico', module: 6, order: 7,    slides: [
        { type: 'title', emoji: '🤔💬', title: 'WOULD / SHOULD / COULD', subtitle: 'Os 3 modais mais educados' },
        { type: 'situation', emoji: '🤵', cardClass: 'purple', text: 'Você está num restaurante chique.<br>Quer pedir café de forma <strong>EDUCADA</strong>.<br><br>Não diga "I want coffee!" 😬' },
        { type: 'rule', cardClass: 'cyan', text: '<strong>WOULD</strong> = gostaria (desejo educado)', keyword: 'WOULD', keywordAfter: 'Would you like...? / I would like...' },
        { type: 'rule', cardClass: 'green', text: '<strong>SHOULD</strong> = deveria (conselho)', keyword: 'SHOULD', keywordAfter: 'You should... / Should I...?' },
        { type: 'rule', cardClass: 'orange', text: '<strong>COULD</strong> = poderia (pedido educado)', keyword: 'COULD', keywordAfter: 'Could you...? / Could I...?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>WOULD</strong> = "UD" (o W é mudo!)<br><strong>SHOULD</strong> = "XÚUD"<br><strong>COULD</strong> = "CUD"' },
        { type: 'examples', cardClass: 'cyan', title: '☕ WOULD - DESEJOS EDUCADOS', items: [
          { emoji: '☕', en: '<span class="hl-cyan">Would</span> you like coffee?', pt: 'Gostaria de café?' },
          { emoji: '🍕', en: 'I <span class="hl-cyan">would</span> like pizza.', pt: 'Eu gostaria de pizza.' },
          { emoji: '🗣️', en: 'I <span class="hl-cyan">would</span> like to speak.', pt: 'Eu gostaria de falar.' },
          { emoji: '🪑', en: '<span class="hl-cyan">Would</span> you like to sit?', pt: 'Gostaria de sentar?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💡 SHOULD - CONSELHOS', items: [
          { emoji: '🏥', en: 'You <span class="hl-green">should</span> see a doctor.', pt: 'Você deveria ver um médico.' },
          { emoji: '💤', en: 'You <span class="hl-green">should</span> rest.', pt: 'Você deveria descansar.' },
          { emoji: '🏠', en: 'We <span class="hl-green">should</span> go now.', pt: 'Nós deveríamos ir agora.' },
          { emoji: '❓', en: '<span class="hl-green">Should</span> I call?', pt: 'Devo ligar?' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '🙏 COULD - PEDIDOS EDUCADOS', items: [
          { emoji: '🆘', en: '<span class="hl-orange">Could</span> you help me?', pt: 'Poderia me ajudar?' },
          { emoji: '🔄', en: '<span class="hl-orange">Could</span> you repeat?', pt: 'Poderia repetir?' },
          { emoji: '🐢', en: '<span class="hl-orange">Could</span> you speak slowly?', pt: 'Poderia falar devagar?' },
          { emoji: '🚪', en: '<span class="hl-orange">Could</span> I come in?', pt: 'Posso entrar?' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: "CONTRAÇÃO: I'D", text: "<strong>I would</strong> → <strong>I'd</strong><br><br>I'd like coffee. = I would like coffee.<br>Muito comum no dia a dia!" },
        { type: 'comparison', cardClass: 'cyan', title: '🎯 QUANDO USAR CADA UM?', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🙏', rightIcon: '💡', leftLabel: 'PEDIR/OFERECER', rightLabel: 'ACONSELHAR', left: '<span class="hl-cyan">Would</span> you like...?<br><span class="hl-orange">Could</span> you...?', leftNote: 'Educado, delicado', right: 'You <span class="hl-green">should</span>...', rightNote: 'Dar conselho', explanation: 'WOULD/COULD = pedidos | SHOULD = conselhos' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ MAIS EDUCADO', leftClass: 'wrong', rightClass: 'right', leftIcon: '😬', rightIcon: '🤵', leftLabel: 'DIRETO DEMAIS', rightLabel: 'EDUCADO', left: 'I want coffee.', leftNote: 'Pode soar rude', right: "I'd like coffee, please.", rightNote: 'Perfeito!', explanation: 'Use <strong>WOULD LIKE</strong> em vez de <strong>WANT</strong>' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Forma mais educada de pedir ajuda:', options: ['Help me!', 'Can you help?', 'Could you help me?'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Para dar um conselho, uso:', options: ['WOULD', 'SHOULD', 'COULD'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (gostaria de):', sentence: "I _____ like some water, please.", correctWord: 'would' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - WOULD/SHOULD/COULD', items: [
          { emoji: '☕', text: '<strong>WOULD</strong> = gostaria (I\'d like...)' },
          { emoji: '💡', text: '<strong>SHOULD</strong> = deveria (conselho)' },
          { emoji: '🙏', text: '<strong>COULD</strong> = poderia (pedido)' },
          { emoji: '🤵', text: 'Todos são mais educados que CAN/WANT' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '☕', pt: 'Gostaria de café?', en: 'Would you like coffee?' },
        { emoji: '🆘', pt: 'Poderia me ajudar?', en: 'Could you help me?' },
        { emoji: '💡', pt: 'Você deveria ir', en: 'You should go' },
        { emoji: '🍕', pt: 'Eu gostaria de pizza', en: 'I would like pizza' },
        { emoji: '🔄', pt: 'Poderia repetir?', en: 'Could you repeat?' },
        { emoji: '🏥', pt: 'Você deveria ver um médico', en: 'You should see a doctor' },
        { emoji: '🚪', pt: 'Poderia abrir a porta?', en: 'Could you open the door?' },
        { emoji: '🗣️', pt: 'Eu gostaria de falar', en: 'I would like to speak' },
        { emoji: '⏰', pt: 'Você deveria ir agora', en: 'You should go now' },
        { emoji: '🐢', pt: 'Poderia falar devagar?', en: 'Could you speak slowly?' },
      ]
    },

  { id: 'conditional-type-1', title: 'CONDITIONAL TYPE 1', emoji: '🔮✅', description: 'Se... vai acontecer', module: 6, order: 8, slides: [    { type: 'title', emoji: '🔮✅', title: 'IF... WILL (Condicional 1)', subtitle: 'Se... então vai...' },
      { type: 'situation', emoji: '🌧️', cardClass: 'purple', text: 'Olha pro céu. Vai chover.<br><br><strong>"If it rains, we won\'t work outside."</strong><br>(Se chover, não vamos trabalhar lá fora.)' },
      { type: 'rule', cardClass: 'cyan', text: 'Para situações <strong>reais/prováveis</strong>:<br><strong>IF</strong> + presente, <strong>WILL</strong> + verbo', keyword: 'IF + PRESENT, WILL', keywordAfter: 'Se chover, vou... = possibilidade real' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'ESTRUTURA', text: '<strong>IF</strong> + verbo no presente → resultado com <strong>WILL</strong><br><br>IF it rains → we\'ll stay inside<br>IF you work hard → you\'ll get paid more' },
      { type: 'example', cardClass: 'cyan', emoji: '🌧️', question: "<span class='hl-cyan'>If</span> it rains, we <span class='hl-cyan'>won't</span> work outside.", questionTr: 'Se chover, não vamos trabalhar lá fora.', answer: "IF + presente, WILL + verbo", answerTr: 'Situação provável' },
      { type: 'example', cardClass: 'cyan', emoji: '⏰', question: "<span class='hl-cyan'>If</span> you're late, the boss <span class='hl-cyan'>will</span> be angry.", questionTr: 'Se você atrasar, o chefe vai ficar bravo.', answer: "Consequência real", answerTr: 'Vai acontecer' },
      { type: 'example', cardClass: 'cyan', emoji: '💰', question: "<span class='hl-cyan'>If</span> I save money, I <span class='hl-cyan'>will</span> buy a car.", questionTr: 'Se eu economizar, vou comprar um carro.', answer: "Plano condicional", answerTr: 'Se A, então B' },
      { type: 'examples', cardClass: 'cyan', title: '👷 SITUAÇÕES DE TRABALHO', items: [
        { emoji: '🔧', en: "<span class='hl-cyan'>If</span> you need help, I'll come.", pt: 'Se precisar de ajuda, eu venho.' },
        { emoji: '📞', en: "<span class='hl-cyan'>If</span> he calls, tell him I left.", pt: 'Se ele ligar, diz que eu saí.' },
        { emoji: '✅', en: "<span class='hl-cyan'>If</span> we finish early, we'll go home.", pt: 'Se terminarmos cedo, vamos pra casa.' },
        { emoji: '💪', en: "<span class='hl-cyan'>If</span> you work hard, you'll succeed.", pt: 'Se trabalhar duro, vai ter sucesso.' }
      ]},
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Cuidado! Depois de IF, use o <strong>PRESENTE</strong> (não WILL):<br><br>\"If it <strong>rains</strong>...\" ✅<br>\"If it <strong>will rain</strong>...\" ❌<br><br>O WILL vai na <strong>segunda</strong> parte!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "If it will rain, we stay.", leftNote: 'WILL depois de IF', right: "If it rains, we'll stay.", rightNote: 'Presente depois de IF', explanation: 'IF + <strong>presente</strong> (não WILL!)' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Se chover, fico em casa":', options: ['If it will rain, I stay home', "If it rains, I'll stay home", "If it rains, I stay home"], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Se você atrasar, o chefe vai ficar bravo":', options: ["If you're late, the boss will be angry", "If you will be late, the boss is angry", "If you late, boss angry"], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "If you need help, I _____ come.", correctWord: 'will' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '🔮', text: 'IF + presente, WILL + verbo' },
        { emoji: '⚠️', text: 'Nunca WILL depois de IF!' },
        { emoji: '✅', text: 'Para situações reais/prováveis' },
        { emoji: '💡', text: 'Muito usado no trabalho' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🌧️', pt: 'Se chover, não vamos trabalhar fora', en: "If it rains, we won't work outside", level: 1 },
      { emoji: '⏰', pt: 'Se atrasar, o chefe vai ficar bravo', en: "If you're late, the boss will be angry", level: 1 },
      { emoji: '💰', pt: 'Se economizar, vou comprar um carro', en: "If I save money, I'll buy a car", level: 1 },
      { emoji: '🔧', pt: 'Se precisar de ajuda, eu venho', en: "If you need help, I'll come", level: 1 },
      { emoji: '📞', pt: 'Se ele ligar, diz que eu saí', en: "If he calls, tell him I left", level: 1 },
      { emoji: '✅', pt: 'Se terminarmos cedo, vamos embora', en: "If we finish early, we'll go home", level: 1 },
      { emoji: '🤒', pt: 'Se ficar doente, vou ao médico', en: "If I get sick, I'll go to the doctor", level: 1 },
      { emoji: '☀️', pt: 'Se fizer sol, trabalhamos fora', en: "If it's sunny, we'll work outside", level: 1 },
      { emoji: '💼', pt: 'Se conseguir emprego, mudo de casa', en: "If I get a job, I'll move", level: 1 },
      { emoji: '📱', pt: 'Se ligar, eu atendo', en: "If you call, I'll answer", level: 1 },
      { emoji: '🚗', pt: 'Se o carro quebrar, pego Uber', en: "If the car breaks down, I'll take an Uber", level: 1 },
      { emoji: '❄️', pt: 'Se nevar, fico em casa', en: "If it snows, I'll stay home", level: 1 },
      { emoji: '👷', pt: 'Se trabalhar bem, vão te chamar de novo', en: "If you work well, they'll call you again", level: 2 },
      { emoji: '🏠', pt: 'Se não pagar, perde o apartamento', en: "If you don't pay, you'll lose the apartment", level: 2 },
      { emoji: '💪', pt: 'Se trabalhar duro, vai ter sucesso', en: "If you work hard, you'll succeed", level: 1 },
      { emoji: '🔑', pt: 'Se encontrar a chave, te aviso', en: "If I find the key, I'll let you know", level: 1 },
      { emoji: '🍽️', pt: 'Se tiver fome, a gente para', en: "If you're hungry, we'll stop", level: 1 },
      { emoji: '⏳', pt: 'Se demorar, me liga', en: "If it takes long, call me", level: 1 },
      { emoji: '🚌', pt: 'Se perder o ônibus, pego o próximo', en: "If I miss the bus, I'll take the next one", level: 1 },
      { emoji: '🔧', pt: 'Se quebrar, eu conserto', en: "If it breaks, I'll fix it", level: 1 }
    ] },

  { id: 'should-shouldn-t', title: "SHOULD / SHOULDN'T", emoji: '👆💡', description: 'Conselho e recomendação', module: 6, order: 6, slides: [
      { type: 'title', emoji: '👆💡', title: "SHOULD / SHOULDN'T", subtitle: 'Deveria / Não deveria' },
      { type: 'situation', emoji: '🤒', cardClass: 'purple', text: 'Seu amigo está doente mas quer ir trabalhar.<br>Você aconselha:<br><br><strong>"You should stay home."</strong><br>(Você deveria ficar em casa.)' },
      { type: 'rule', cardClass: 'cyan', text: '<strong>SHOULD</strong> = deveria (conselho)<br><strong>SHOULDN\'T</strong> = não deveria', keyword: 'SHOULD', keywordAfter: 'Conselho / O certo a fazer' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>SHOULD</strong> → \"XÚUD\" (o L é mudo!)<br><strong>SHOULDN\'T</strong> → \"XÚDNT\"<br><br>Nunca pronuncie o L!<br>\"You should\" → \"IU XÚUD\"' },
      { type: 'example', cardClass: 'cyan', emoji: '🏥', question: "You <span class='hl-cyan'>should</span> see a doctor.", questionTr: 'Você deveria ir ao médico.', answer: "Conselho", answerTr: 'É o melhor a fazer' },
      { type: 'example', cardClass: 'cyan', emoji: '💰', question: "You <span class='hl-cyan'>should</span> save money.", questionTr: 'Você deveria economizar.', answer: "Conselho", answerTr: 'Recomendação' },
      { type: 'example', cardClass: 'red', emoji: '🍺', question: "You <span class='hl-red'>shouldn't</span> drink and drive.", questionTr: 'Não deveria beber e dirigir.', answer: "Conselho negativo", answerTr: 'Não é bom fazer isso' },
      { type: 'examples', cardClass: 'cyan', title: '💡 CONSELHOS ÚTEIS', items: [
        { emoji: '📄', en: "You <span class='hl-cyan'>should</span> get a contract.", pt: 'Deveria pedir um contrato.' },
        { emoji: '🗣️', en: "You <span class='hl-cyan'>should</span> learn English.", pt: 'Deveria aprender inglês.' },
        { emoji: '🏦', en: "You <span class='hl-cyan'>should</span> open a bank account.", pt: 'Deveria abrir uma conta no banco.' },
        { emoji: '👷', en: "You <span class='hl-cyan'>should</span> ask your boss.", pt: 'Deveria perguntar pro chefe.' }
      ]},
      { type: 'examples', cardClass: 'red', title: '🚫 O QUE NÃO DEVERIA', items: [
        { emoji: '💸', en: "You <span class='hl-red'>shouldn't</span> spend too much.", pt: 'Não deveria gastar demais.' },
        { emoji: '😴', en: "You <span class='hl-red'>shouldn't</span> sleep late.", pt: 'Não deveria dormir tarde.' },
        { emoji: '🤐', en: "You <span class='hl-red'>shouldn't</span> say that.", pt: 'Não deveria falar isso.' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 SHOULD vs MUST', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '💡', rightIcon: '⚠️', leftLabel: 'SHOULD (conselho)', rightLabel: 'MUST (obrigação)', left: "You <span class='hl-cyan'>should</span> wear a helmet.", leftNote: 'É uma boa ideia', right: "You <span class='hl-purple'>must</span> wear a helmet.", rightNote: 'É obrigatório!', explanation: 'SHOULD = conselho | MUST = obrigação/regra' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'PERGUNTANDO CONSELHO', text: '<strong>Should I...?</strong> = Eu deveria...?<br><br>\"Should I call the doctor?\"<br>\"Should I go to work?\"<br>\"Should I tell the boss?\"<br><br>Ótimo pra pedir opinião!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "You should to rest.", leftNote: 'Não usa TO', right: "You should rest.", rightNote: 'SHOULD + verbo direto', explanation: 'SHOULD + verbo <strong>sem TO</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Você deveria ir ao médico":', options: ['You should to see a doctor', 'You should see a doctor', 'You should seeing a doctor'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu deveria ligar pro chefe?":', options: ['Should I call the boss?', 'Do I should call the boss?', 'I should call the boss?'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "You _____ save money.", correctWord: 'should' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '💡', text: '<strong>SHOULD</strong> = deveria (conselho)' },
        { emoji: '🚫', text: "<strong>SHOULDN'T</strong> = não deveria" },
        { emoji: '❓', text: '<strong>SHOULD I...?</strong> = Eu deveria...?' },
        { emoji: '🔤', text: 'O L é MUDO! Pronúncia: XÚUD' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🏥', pt: 'Deveria ir ao médico', en: "You should see a doctor", level: 1 },
      { emoji: '💰', pt: 'Deveria economizar', en: "You should save money", level: 1 },
      { emoji: '🍺', pt: 'Não deveria beber e dirigir', en: "You shouldn't drink and drive", level: 1 },
      { emoji: '📄', pt: 'Deveria pedir um contrato', en: "You should get a contract", level: 1 },
      { emoji: '🗣️', pt: 'Deveria aprender inglês', en: "You should learn English", level: 1 },
      { emoji: '🏦', pt: 'Deveria abrir conta no banco', en: "You should open a bank account", level: 1 },
      { emoji: '👷', pt: 'Deveria perguntar pro chefe', en: "You should ask your boss", level: 1 },
      { emoji: '💸', pt: 'Não deveria gastar demais', en: "You shouldn't spend too much", level: 1 },
      { emoji: '😴', pt: 'Não deveria dormir tarde', en: "You shouldn't sleep late", level: 1 },
      { emoji: '🤐', pt: 'Não deveria falar isso', en: "You shouldn't say that", level: 1 },
      { emoji: '🏠', pt: 'Deveria ficar em casa', en: "You should stay home", level: 1 },
      { emoji: '🍎', pt: 'Deveria comer melhor', en: "You should eat better", level: 1 },
      { emoji: '📞', pt: 'Eu deveria ligar pro chefe?', en: "Should I call the boss?", level: 1 },
      { emoji: '🏥', pt: 'Eu deveria ir ao médico?', en: "Should I go to the doctor?", level: 1 },
      { emoji: '🤫', pt: 'Eu deveria contar pra ele?', en: "Should I tell him?", level: 1 },
      { emoji: '⏰', pt: 'Deveria chegar mais cedo', en: "You should arrive earlier", level: 1 },
      { emoji: '📱', pt: 'Não deveria usar celular dirigindo', en: "You shouldn't use your phone while driving", level: 2 },
      { emoji: '💪', pt: 'Deveria descansar mais', en: "You should rest more", level: 1 },
      { emoji: '🚗', pt: 'Deveria trocar o óleo', en: "You should change the oil", level: 2 },
      { emoji: '📝', pt: 'Deveria anotar isso', en: "You should write that down", level: 1 }
    ] },

  { id: 'at-the-bank', title: 'At the Bank', emoji: '🏦💳', description: 'No banco', module: 6, order: 9,    slides: [
        { type: 'title', emoji: '🏦💳', title: 'AT THE BANK', subtitle: 'No banco' },
        { type: 'situation', emoji: '🏦', cardClass: 'purple', text: 'Você precisa abrir uma conta bancária.<br>Ou fazer transações básicas.<br><br>O que falar no banco?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para abrir conta:', keyword: "I'D LIKE TO OPEN AN ACCOUNT", keywordAfter: 'Gostaria de abrir uma conta' },
        { type: 'example', cardClass: 'cyan', emoji: '🏦', question: "I'd like to <span class='hl-cyan'>open an account</span>.", questionTr: 'Gostaria de abrir uma conta.', answer: '(pedido formal)', answerTr: "I'D LIKE = gostaria" },
        { type: 'example', cardClass: 'cyan', emoji: '💵', question: "I'd like to <span class='hl-cyan'>make a deposit</span>.", questionTr: 'Gostaria de fazer um depósito.', answer: '(depositar dinheiro)', answerTr: 'DEPOSIT' },
        { type: 'example', cardClass: 'cyan', emoji: '💸', question: "I'd like to <span class='hl-cyan'>withdraw</span> $200.", questionTr: 'Gostaria de sacar $200.', answer: '(sacar dinheiro)', answerTr: 'WITHDRAW' },
        { type: 'examples', cardClass: 'cyan', title: '🏦 TRANSAÇÕES BÁSICAS', items: [
          { emoji: '💵', en: 'Make a <span class="hl-cyan">deposit</span>', pt: 'Fazer depósito' },
          { emoji: '💸', en: 'Make a <span class="hl-cyan">withdrawal</span>', pt: 'Fazer saque' },
          { emoji: '🔄', en: '<span class="hl-cyan">Transfer</span> money', pt: 'Transferir dinheiro' },
          { emoji: '💰', en: 'Check my <span class="hl-cyan">balance</span>', pt: 'Ver meu saldo' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📝 TIPOS DE CONTA', items: [
          { emoji: '💳', en: '<span class="hl-green">Checking account</span>', pt: 'Conta corrente' },
          { emoji: '🐷', en: '<span class="hl-green">Savings account</span>', pt: 'Conta poupança' },
          { emoji: '💳', en: '<span class="hl-green">Debit card</span>', pt: 'Cartão de débito' },
          { emoji: '💳', en: '<span class="hl-green">Credit card</span>', pt: 'Cartão de crédito' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'DOCUMENTOS NECESSÁRIOS', text: 'Para abrir conta, você precisa de:<br><br>• <strong>ID</strong> (identidade) - passaporte ou State ID<br>• <strong>SSN</strong> ou ITIN (se tiver)<br>• <strong>Proof of address</strong> (comprovante de endereço)' },
        { type: 'examples', cardClass: 'gold', title: '💬 PERGUNTAS DO BANCO', items: [
          { emoji: '🆔', en: 'Do you have <span class="hl-gold">ID</span>?', pt: 'Tem documento?' },
          { emoji: '📍', en: 'What\'s your <span class="hl-gold">address</span>?', pt: 'Qual seu endereço?' },
          { emoji: '💼', en: 'What\'s your <span class="hl-gold">occupation</span>?', pt: 'Qual sua profissão?' },
          { emoji: '💵', en: '<span class="hl-gold">Initial deposit</span>?', pt: 'Depósito inicial?' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Gostaria de abrir uma conta" em inglês:', options: ['I want to open an account', "I'd like to open an account", 'I need to make an account'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Conta corrente" em inglês:', options: ['Current account', 'Checking account', 'Running account'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I'd like to make a _____.", correctWord: 'deposit' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💵', text: '<strong>Deposit</strong> = depósito' },
          { emoji: '💸', text: '<strong>Withdrawal</strong> = saque' },
          { emoji: '💳', text: '<strong>Checking</strong> = conta corrente' },
          { emoji: '💰', text: '<strong>Balance</strong> = saldo' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏦', pt: 'Abrir uma conta', en: 'Open an account' },
        { emoji: '💵', pt: 'Fazer depósito', en: 'Make a deposit' },
        { emoji: '💸', pt: 'Fazer saque', en: 'Make a withdrawal' },
        { emoji: '🔄', pt: 'Transferir dinheiro', en: 'Transfer money' },
        { emoji: '💰', pt: 'Ver meu saldo', en: 'Check my balance' },
        { emoji: '💳', pt: 'Conta corrente', en: 'Checking account' },
        { emoji: '🐷', pt: 'Conta poupança', en: 'Savings account' },
        { emoji: '🆔', pt: 'Documento', en: 'ID' },
        { emoji: '📍', pt: 'Comprovante de endereço', en: 'Proof of address' },
        { emoji: '💵', pt: 'Depósito inicial', en: 'Initial deposit' },
      ]
    },

  { id: 'pharmacy-pickup', title: 'Pharmacy Pickup', emoji: '💊🏪', description: 'Retirar na farmácia', module: 6, order: 10,    slides: [
        { type: 'title', emoji: '💊🏪', title: 'PHARMACY PICKUP', subtitle: 'Retirar remédio na farmácia' },
        { type: 'situation', emoji: '💊', cardClass: 'purple', text: 'Você precisa retirar um remédio que o médico receitou.<br><br>Como funciona nos EUA?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para retirar remédio com receita:', keyword: "I'M HERE TO PICK UP A PRESCRIPTION", keywordAfter: 'Vim retirar uma receita' },
        { type: 'example', cardClass: 'cyan', emoji: '💊', question: "I'm here to <span class='hl-cyan'>pick up</span> a prescription.", questionTr: 'Vim retirar uma receita.', answer: '(PRESCRIPTION = receita)', answerTr: 'Receita médica' },
        { type: 'example', cardClass: 'cyan', emoji: '📋', question: "<span class='hl-cyan'>Under what name</span>?", questionTr: 'Em nome de quem?', answer: 'Under [seu nome].', answerTr: 'Sob o nome...' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: "<span class='hl-cyan'>Date of birth</span>?", questionTr: 'Data de nascimento?', answer: 'January 15, 1990.', answerTr: 'Verificação' },
        { type: 'examples', cardClass: 'cyan', title: '💊 NO BALCÃO', items: [
          { emoji: '📋', en: "I'm picking up for <span class='hl-cyan'>[name]</span>", pt: 'Vim retirar para [nome]' },
          { emoji: '⏰', en: "Is my <span class='hl-cyan'>prescription ready</span>?", pt: 'Minha receita está pronta?' },
          { emoji: '💵', en: "How much is my <span class='hl-cyan'>copay</span>?", pt: 'Quanto é o copay?' },
          { emoji: '🔄', en: "I need a <span class='hl-cyan'>refill</span>", pt: 'Preciso de refil (repetir)' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'COPAY', text: '<strong>Copay</strong> = parte que você paga<br>(o plano de saúde paga o resto)<br><br>Exemplo: Remédio custa $100<br>Plano paga: $85<br>Seu copay: $15' },
        { type: 'examples', cardClass: 'gold', title: '📋 PERGUNTAS DO FARMACÊUTICO', items: [
          { emoji: '📅', en: 'Date of <span class="hl-gold">birth</span>?', pt: 'Data de nascimento?' },
          { emoji: '📍', en: 'What\'s your <span class="hl-gold">address</span>?', pt: 'Qual seu endereço?' },
          { emoji: '📞', en: '<span class="hl-gold">Phone number</span>?', pt: 'Número de telefone?' },
          { emoji: '💳', en: 'Do you have <span class="hl-gold">insurance</span>?', pt: 'Tem plano de saúde?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💬 INSTRUÇÕES DO REMÉDIO', items: [
          { emoji: '💊', en: 'Take <span class="hl-green">twice a day</span>', pt: 'Tome duas vezes ao dia' },
          { emoji: '🍽️', en: 'Take <span class="hl-green">with food</span>', pt: 'Tome com comida' },
          { emoji: '🚫', en: '<span class="hl-green">Avoid</span> alcohol', pt: 'Evite álcool' },
          { emoji: '⚠️', en: 'May cause <span class="hl-green">drowsiness</span>', pt: 'Pode causar sonolência' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Vim retirar uma receita" em inglês:', options: ["I'm here to get a recipe", "I'm here to pick up a prescription", "I want to take a prescription"], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Preciso de refil" em inglês:', options: ['I need more', 'I need a refill', 'I need again'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "Is my prescription _____?", correctWord: 'ready' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💊', text: '<strong>Prescription</strong> = receita médica' },
          { emoji: '💵', text: '<strong>Copay</strong> = sua parte do pagamento' },
          { emoji: '🔄', text: '<strong>Refill</strong> = repetir receita' },
          { emoji: '📅', text: 'Verificam: nome, data de nascimento' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💊', pt: 'Vim retirar uma receita', en: "I'm here to pick up a prescription" },
        { emoji: '📋', pt: 'Em nome de quem?', en: 'Under what name?' },
        { emoji: '📅', pt: 'Data de nascimento', en: 'Date of birth' },
        { emoji: '⏰', pt: 'Minha receita está pronta?', en: 'Is my prescription ready?' },
        { emoji: '💵', pt: 'Quanto é o copay?', en: 'How much is my copay?' },
        { emoji: '🔄', pt: 'Preciso de refil', en: 'I need a refill' },
        { emoji: '💳', pt: 'Tem plano de saúde?', en: 'Do you have insurance?' },
        { emoji: '💊', pt: 'Tome duas vezes ao dia', en: 'Take twice a day' },
        { emoji: '🍽️', pt: 'Tome com comida', en: 'Take with food' },
        { emoji: '⚠️', pt: 'Pode causar sonolência', en: 'May cause drowsiness' },
      ]
    },

  { id: 'renting', title: 'Renting an Apartment', emoji: '🏠📝', description: 'Alugar apartamento', module: 6, order: 11,    slides: [
        { type: 'title', emoji: '🏠📝', title: 'RENTING AN APARTMENT', subtitle: 'Alugar um apartamento' },
        { type: 'situation', emoji: '🏠', cardClass: 'purple', text: 'Você está procurando apartamento pra alugar.<br><br>Vocabulário essencial de aluguel!' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar sobre aluguel:', keyword: "IS THIS APARTMENT AVAILABLE?", keywordAfter: 'Este apartamento está disponível?' },
        { type: 'example', cardClass: 'cyan', emoji: '🏠', question: "Is this apartment <span class='hl-cyan'>available</span>?", questionTr: 'Este apartamento está disponível?', answer: '(pergunta inicial)', answerTr: 'AVAILABLE = disponível' },
        { type: 'example', cardClass: 'cyan', emoji: '💵', question: "How much is the <span class='hl-cyan'>rent</span>?", questionTr: 'Quanto é o aluguel?', answer: '$1,500 a month.', answerTr: 'RENT = aluguel' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: "When can I <span class='hl-cyan'>move in</span>?", questionTr: 'Quando posso me mudar?', answer: 'Next month.', answerTr: 'MOVE IN = mudar pra' },
        { type: 'examples', cardClass: 'cyan', title: '❓ PERGUNTAS IMPORTANTES', items: [
          { emoji: '💵', en: "How much is the <span class='hl-cyan'>rent</span>?", pt: 'Quanto é o aluguel?' },
          { emoji: '💰', en: "How much is the <span class='hl-cyan'>deposit</span>?", pt: 'Quanto é o depósito?' },
          { emoji: '📦', en: 'Are <span class="hl-cyan">utilities</span> included?', pt: 'As contas estão inclusas?' },
          { emoji: '🐕', en: 'Are <span class="hl-cyan">pets</span> allowed?', pt: 'Pode ter animais?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📝 TERMOS DE ALUGUEL', items: [
          { emoji: '📋', en: '<span class="hl-green">Lease</span>', pt: 'Contrato de aluguel' },
          { emoji: '👤', en: '<span class="hl-green">Landlord</span>', pt: 'Proprietário / Senhorio' },
          { emoji: '👤', en: '<span class="hl-green">Tenant</span>', pt: 'Inquilino' },
          { emoji: '💰', en: '<span class="hl-green">Security deposit</span>', pt: 'Depósito de segurança' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'UTILITIES', text: '<strong>Utilities</strong> = contas básicas:<br><br>• <strong>Electricity</strong> - luz<br>• <strong>Water</strong> - água<br>• <strong>Gas</strong> - gás<br>• <strong>Internet</strong> - internet' },
        { type: 'examples', cardClass: 'gold', title: '🏠 SOBRE O APARTAMENTO', items: [
          { emoji: '🛏️', en: 'How many <span class="hl-gold">bedrooms</span>?', pt: 'Quantos quartos?' },
          { emoji: '🚿', en: 'How many <span class="hl-gold">bathrooms</span>?', pt: 'Quantos banheiros?' },
          { emoji: '🅿️', en: 'Is there <span class="hl-gold">parking</span>?', pt: 'Tem estacionamento?' },
          { emoji: '👕', en: 'Is there a <span class="hl-gold">washer/dryer</span>?', pt: 'Tem máquina de lavar?' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quanto é o aluguel?" em inglês:', options: ['How much is the rent?', 'How much is the rental?', 'How much costs the apartment?'], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Proprietário" em inglês:', options: ['Owner', 'Landlord', 'Property man'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "When can I _____ in?", correctWord: 'move' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💵', text: '<strong>Rent</strong> = aluguel' },
          { emoji: '📋', text: '<strong>Lease</strong> = contrato' },
          { emoji: '👤', text: '<strong>Landlord</strong> = proprietário' },
          { emoji: '📦', text: '<strong>Utilities</strong> = contas (luz, água...)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏠', pt: 'Está disponível?', en: 'Is it available?' },
        { emoji: '💵', pt: 'Quanto é o aluguel?', en: 'How much is the rent?' },
        { emoji: '💰', pt: 'Quanto é o depósito?', en: 'How much is the deposit?' },
        { emoji: '📦', pt: 'As contas estão inclusas?', en: 'Are utilities included?' },
        { emoji: '🐕', pt: 'Pode ter animais?', en: 'Are pets allowed?' },
        { emoji: '📋', pt: 'Contrato', en: 'Lease' },
        { emoji: '👤', pt: 'Proprietário', en: 'Landlord' },
        { emoji: '📅', pt: 'Quando posso me mudar?', en: 'When can I move in?' },
        { emoji: '🛏️', pt: 'Quantos quartos?', en: 'How many bedrooms?' },
        { emoji: '🅿️', pt: 'Tem estacionamento?', en: 'Is there parking?' },
      ]
    },

  { id: 'bills-utilities', title: 'Bills & Utilities', emoji: '📄💡', description: 'Contas e serviços', module: 6, order: 12,    slides: [
        { type: 'title', emoji: '📄💡', title: 'BILLS & UTILITIES', subtitle: 'Contas e serviços básicos' },
        { type: 'situation', emoji: '📄', cardClass: 'purple', text: 'Você precisa pagar suas contas.<br>Luz, água, internet...<br><br>Como lidar com isso nos EUA?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para pagar uma conta:', keyword: "I'D LIKE TO PAY MY BILL", keywordAfter: 'Gostaria de pagar minha conta' },
        { type: 'example', cardClass: 'cyan', emoji: '💡', question: "I'd like to pay my <span class='hl-cyan'>electric bill</span>.", questionTr: 'Gostaria de pagar minha conta de luz.', answer: '(ELECTRIC BILL)', answerTr: 'Conta de luz' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: "When is my bill <span class='hl-cyan'>due</span>?", questionTr: 'Quando vence minha conta?', answer: 'On the 15th.', answerTr: 'DUE = vencimento' },
        { type: 'example', cardClass: 'cyan', emoji: '💻', question: "Can I pay <span class='hl-cyan'>online</span>?", questionTr: 'Posso pagar online?', answer: 'Yes, on our website.', answerTr: 'Pagamento online' },
        { type: 'examples', cardClass: 'cyan', title: '📄 TIPOS DE CONTAS', items: [
          { emoji: '💡', en: '<span class="hl-cyan">Electric</span> bill', pt: 'Conta de luz' },
          { emoji: '💧', en: '<span class="hl-cyan">Water</span> bill', pt: 'Conta de água' },
          { emoji: '🔥', en: '<span class="hl-cyan">Gas</span> bill', pt: 'Conta de gás' },
          { emoji: '📶', en: '<span class="hl-cyan">Internet</span> bill', pt: 'Conta de internet' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📅 SOBRE VENCIMENTO', items: [
          { emoji: '📅', en: 'When is it <span class="hl-green">due</span>?', pt: 'Quando vence?' },
          { emoji: '⚠️', en: 'My bill is <span class="hl-green">past due</span>', pt: 'Minha conta está atrasada' },
          { emoji: '💸', en: "There's a <span class='hl-green'>late fee</span>", pt: 'Tem multa por atraso' },
          { emoji: '✅', en: 'Set up <span class="hl-green">autopay</span>', pt: 'Configurar débito automático' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'AUTOPAY', text: '<strong>Autopay</strong> = débito automático<br><br>A conta é paga automaticamente todo mês.<br>Muito útil pra não esquecer!' },
        { type: 'examples', cardClass: 'gold', title: '📞 PROBLEMAS COMUNS', items: [
          { emoji: '📄', en: "I didn't receive my <span class='hl-gold'>bill</span>", pt: 'Não recebi minha conta' },
          { emoji: '❓', en: "There's an <span class='hl-gold'>error</span> on my bill", pt: 'Tem um erro na minha conta' },
          { emoji: '📉', en: 'Why is my bill <span class="hl-gold">so high</span>?', pt: 'Por que minha conta está tão alta?' },
          { emoji: '🔌', en: 'My <span class="hl-gold">power is out</span>', pt: 'Minha luz caiu' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quando vence?" em inglês:', options: ['When expires?', 'When is it due?', 'When finishes?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Débito automático" em inglês:', options: ['Auto debit', 'Autopay', 'Automatic payment'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I'd like to pay my electric _____.", correctWord: 'bill' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '📄', text: '<strong>Bill</strong> = conta' },
          { emoji: '📅', text: '<strong>Due</strong> = vencimento' },
          { emoji: '💸', text: '<strong>Late fee</strong> = multa por atraso' },
          { emoji: '✅', text: '<strong>Autopay</strong> = débito automático' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💡', pt: 'Conta de luz', en: 'Electric bill' },
        { emoji: '💧', pt: 'Conta de água', en: 'Water bill' },
        { emoji: '🔥', pt: 'Conta de gás', en: 'Gas bill' },
        { emoji: '📶', pt: 'Conta de internet', en: 'Internet bill' },
        { emoji: '📅', pt: 'Quando vence?', en: 'When is it due?' },
        { emoji: '⚠️', pt: 'Conta atrasada', en: 'Past due' },
        { emoji: '💸', pt: 'Multa por atraso', en: 'Late fee' },
        { emoji: '✅', pt: 'Débito automático', en: 'Autopay' },
        { emoji: '🔌', pt: 'A luz caiu', en: 'The power is out' },
        { emoji: '📄', pt: 'Não recebi minha conta', en: "I didn't receive my bill" },
      ]
    },

  { id: 'usps-mail', title: 'USPS / Mail', emoji: '📬📦', description: 'Correios e envios', module: 6, order: 13,    slides: [
        { type: 'title', emoji: '📬📦', title: 'USPS / MAIL', subtitle: 'Correios e envios' },
        { type: 'situation', emoji: '📦', cardClass: 'purple', text: 'Você precisa enviar um pacote pro Brasil.<br>Ou pegar uma encomenda nos correios.<br><br>Vocabulário dos correios!' },
        { type: 'rule', cardClass: 'cyan', text: 'Para enviar algo:', keyword: "I'D LIKE TO SEND THIS TO...", keywordAfter: 'Gostaria de enviar isso para...' },
        { type: 'example', cardClass: 'cyan', emoji: '📦', question: "I'd like to <span class='hl-cyan'>send this</span> to Brazil.", questionTr: 'Gostaria de enviar isso pro Brasil.', answer: '(SEND = enviar)', answerTr: 'Enviar' },
        { type: 'example', cardClass: 'cyan', emoji: '📬', question: "I'm here to <span class='hl-cyan'>pick up a package</span>.", questionTr: 'Vim pegar uma encomenda.', answer: '(PACKAGE = pacote)', answerTr: 'Retirar' },
        { type: 'example', cardClass: 'cyan', emoji: '✉️', question: "How much to send this <span class='hl-cyan'>first class</span>?", questionTr: 'Quanto para enviar primeira classe?', answer: '(tipo de envio)', answerTr: 'Classe de envio' },
        { type: 'examples', cardClass: 'cyan', title: '📦 TIPOS DE ENVIO', items: [
          { emoji: '✉️', en: '<span class="hl-cyan">First Class</span>', pt: 'Primeira classe (básico)' },
          { emoji: '📦', en: '<span class="hl-cyan">Priority Mail</span>', pt: 'Prioritário (mais rápido)' },
          { emoji: '🚀', en: '<span class="hl-cyan">Express</span>', pt: 'Expresso (urgente)' },
          { emoji: '🌎', en: '<span class="hl-cyan">International</span>', pt: 'Internacional' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📬 PERGUNTAS COMUNS', items: [
          { emoji: '⏰', en: 'How long will it <span class="hl-green">take</span>?', pt: 'Quanto tempo leva?' },
          { emoji: '💵', en: 'How much is <span class="hl-green">shipping</span>?', pt: 'Quanto é o frete?' },
          { emoji: '🔍', en: 'Can I <span class="hl-green">track</span> it?', pt: 'Posso rastrear?' },
          { emoji: '📋', en: 'Do I need a <span class="hl-green">customs form</span>?', pt: 'Preciso de formulário alfandegário?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'TRACKING NUMBER', text: '<strong>Tracking number</strong> = número de rastreio<br><br>Guarde esse número para acompanhar sua encomenda online!' },
        { type: 'examples', cardClass: 'gold', title: '📄 VOCABULÁRIO DO CORREIO', items: [
          { emoji: '📦', en: '<span class="hl-gold">Package</span>', pt: 'Pacote / Encomenda' },
          { emoji: '✉️', en: '<span class="hl-gold">Envelope</span>', pt: 'Envelope' },
          { emoji: '📬', en: '<span class="hl-gold">Mailbox</span>', pt: 'Caixa de correio' },
          { emoji: '📮', en: '<span class="hl-gold">Stamp</span>', pt: 'Selo' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Vim pegar uma encomenda" em inglês:', options: ["I'm here to get a package", "I'm here to pick up a package", "I want to take a package"], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Número de rastreio" em inglês:', options: ['Track number', 'Tracking number', 'Following number'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I'd like to _____ this to Brazil.", correctWord: 'send' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '📦', text: '<strong>Package</strong> = pacote/encomenda' },
          { emoji: '💵', text: '<strong>Shipping</strong> = frete' },
          { emoji: '🔍', text: '<strong>Tracking number</strong> = rastreio' },
          { emoji: '📮', text: '<strong>Stamp</strong> = selo' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '📦', pt: 'Enviar isso para...', en: "I'd like to send this to..." },
        { emoji: '📬', pt: 'Vim pegar uma encomenda', en: "I'm here to pick up a package" },
        { emoji: '⏰', pt: 'Quanto tempo leva?', en: 'How long will it take?' },
        { emoji: '💵', pt: 'Quanto é o frete?', en: 'How much is shipping?' },
        { emoji: '🔍', pt: 'Posso rastrear?', en: 'Can I track it?' },
        { emoji: '📦', pt: 'Pacote', en: 'Package' },
        { emoji: '🔢', pt: 'Número de rastreio', en: 'Tracking number' },
        { emoji: '📮', pt: 'Selo', en: 'Stamp' },
        { emoji: '✉️', pt: 'Envelope', en: 'Envelope' },
        { emoji: '📋', pt: 'Formulário alfandegário', en: 'Customs form' },
      ]
    },

  { id: 'customer-service', title: 'Customer Service Complaints', emoji: '📞😤', description: 'Reclamações / Atendimento', module: 6, order: 14,    slides: [
        { type: 'title', emoji: '📞😤', title: 'CUSTOMER SERVICE', subtitle: 'Reclamações e atendimento' },
        { type: 'situation', emoji: '😤', cardClass: 'purple', text: 'Você comprou algo com defeito.<br>Ou o serviço foi ruim.<br><br>Como reclamar de forma educada?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para fazer uma reclamação educada:', keyword: "I HAVE A PROBLEM WITH... / I'D LIKE TO MAKE A COMPLAINT", keywordAfter: 'Tenho um problema com... / Gostaria de fazer uma reclamação' },
        { type: 'example', cardClass: 'cyan', emoji: '❌', question: "I have a <span class='hl-cyan'>problem</span> with my order.", questionTr: 'Tenho um problema com meu pedido.', answer: '(PROBLEM = problema)', answerTr: 'Início educado' },
        { type: 'example', cardClass: 'cyan', emoji: '🔄', question: "I'd like a <span class='hl-cyan'>refund</span>, please.", questionTr: 'Gostaria de reembolso, por favor.', answer: '(REFUND = reembolso)', answerTr: 'Pedir devolução' },
        { type: 'example', cardClass: 'cyan', emoji: '👤', question: "Can I speak to a <span class='hl-cyan'>manager</span>?", questionTr: 'Posso falar com um gerente?', answer: '(MANAGER = gerente)', answerTr: 'Escalar o problema' },
        { type: 'examples', cardClass: 'cyan', title: '❌ EXPLICANDO O PROBLEMA', items: [
          { emoji: '📦', en: "My order is <span class='hl-cyan'>wrong</span>", pt: 'Meu pedido está errado' },
          { emoji: '💔', en: "This is <span class='hl-cyan'>broken</span>", pt: 'Isso está quebrado' },
          { emoji: '❌', en: "This doesn't <span class='hl-cyan'>work</span>", pt: 'Isso não funciona' },
          { emoji: '📦', en: "I never received my <span class='hl-cyan'>order</span>", pt: 'Nunca recebi meu pedido' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💰 PEDINDO SOLUÇÃO', items: [
          { emoji: '💵', en: "I'd like a <span class='hl-green'>refund</span>", pt: 'Gostaria de reembolso' },
          { emoji: '🔄', en: "I'd like to <span class='hl-green'>exchange</span> this", pt: 'Gostaria de trocar' },
          { emoji: '🔧', en: "Can you <span class='hl-green'>fix</span> this?", pt: 'Pode consertar?' },
          { emoji: '💰', en: "Can I get a <span class='hl-green'>discount</span>?", pt: 'Posso ter desconto?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'SEJA EDUCADO', text: 'Mesmo com raiva, seja educado:<br><br>• <strong>I understand, but...</strong> - Eu entendo, mas...<br>• <strong>I appreciate your help</strong> - Agradeço sua ajuda<br>• <strong>Thank you for your time</strong> - Obrigado pelo tempo' },
        { type: 'examples', cardClass: 'gold', title: '👤 ESCALANDO O PROBLEMA', items: [
          { emoji: '👤', en: 'Can I speak to a <span class="hl-gold">manager</span>?', pt: 'Posso falar com um gerente?' },
          { emoji: '📝', en: "I'd like to file a <span class='hl-gold'>complaint</span>", pt: 'Gostaria de fazer uma reclamação' },
          { emoji: '📋', en: "What\'s your <span class='hl-gold'>name</span>?", pt: 'Qual seu nome?' },
          { emoji: '🔢', en: "What\'s the <span class='hl-gold'>case number</span>?", pt: 'Qual o número do caso?' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Gostaria de reembolso" em inglês:', options: ["I want my money", "I'd like a refund", 'Give me back my money'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Posso falar com um gerente?" em inglês:', options: ['Can I talk to the boss?', 'Can I speak to a manager?', 'I want to see your chief'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I have a _____ with my order.", correctWord: 'problem' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💵', text: '<strong>Refund</strong> = reembolso' },
          { emoji: '🔄', text: '<strong>Exchange</strong> = troca' },
          { emoji: '👤', text: '<strong>Manager</strong> = gerente' },
          { emoji: '📝', text: '<strong>Complaint</strong> = reclamação' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '❌', pt: 'Tenho um problema com...', en: 'I have a problem with...' },
        { emoji: '💵', pt: 'Gostaria de reembolso', en: "I'd like a refund" },
        { emoji: '🔄', pt: 'Gostaria de trocar', en: "I'd like to exchange this" },
        { emoji: '👤', pt: 'Posso falar com um gerente?', en: 'Can I speak to a manager?' },
        { emoji: '📦', pt: 'Meu pedido está errado', en: 'My order is wrong' },
        { emoji: '💔', pt: 'Isso está quebrado', en: 'This is broken' },
        { emoji: '❌', pt: 'Isso não funciona', en: "This doesn't work" },
        { emoji: '📝', pt: 'Fazer uma reclamação', en: 'File a complaint' },
        { emoji: '🔢', pt: 'Número do caso', en: 'Case number' },
        { emoji: '🙏', pt: 'Agradeço sua ajuda', en: 'I appreciate your help' },
      ]
    },

  { id: 'returning-items', title: 'Returning Items', emoji: '🔄📦', description: 'Devolver itens', module: 6, order: 15,    slides: [
        { type: 'title', emoji: '🔄📦', title: 'RETURNING ITEMS', subtitle: 'Devolver itens' },
        { type: 'situation', emoji: '❌', cardClass: 'purple', text: 'Você comprou uma camisa errada.<br>Precisa devolver ou trocar.<br><br>Como resolver?' },
        { type: 'rule', cardClass: 'cyan', text: 'Opções para problemas:', keyword: 'RETURN | EXCHANGE | REFUND', keywordAfter: 'Devolver, Trocar, Reembolso' },
        { type: 'tip', cardClass: 'gold', icon: '🧾', title: 'IMPORTANTE', text: 'Guarde o <strong>RECEIPT</strong> (recibo)!<br><br>Sem recibo, muitas lojas não aceitam devolução.' },
        { type: 'example', cardClass: 'red', emoji: '❌', question: "This <span class='hl-red'>doesn't work</span>. Can I return it?", questionTr: 'Isso não funciona. Posso devolver?', answer: '(RETURN = devolver)', answerTr: 'Não funcionou' },
        { type: 'example', cardClass: 'orange', emoji: '📏', question: "It\'s the <span class='hl-orange'>wrong size</span>. Can I exchange it?", questionTr: 'É o tamanho errado. Posso trocar?', answer: '(EXCHANGE = trocar)', answerTr: 'Tamanho errado' },
        { type: 'example', cardClass: 'cyan', emoji: '💰', question: "I'd like a <span class='hl-cyan'>refund</span>, please.", questionTr: 'Quero reembolso, por favor.', answer: '(REFUND = dinheiro de volta)', answerTr: 'Devolução' },
        { type: 'examples', cardClass: 'red', title: '❌ PROBLEMAS', items: [
          { emoji: '❌', en: "It <span class='hl-red'>doesn't work</span>", pt: 'Não funciona' },
          { emoji: '💔', en: "It\'s <span class='hl-red'>broken</span>", pt: 'Está quebrado' },
          { emoji: '📏', en: '<span class="hl-red">Wrong size</span>', pt: 'Tamanho errado' },
          { emoji: '🎨', en: '<span class="hl-red">Wrong color</span>', pt: 'Cor errada' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🔄 SOLUÇÕES', items: [
          { emoji: '🔄', en: 'Can I <span class="hl-cyan">return</span> it?', pt: 'Posso devolver?' },
          { emoji: '🔄', en: 'Can I <span class="hl-cyan">exchange</span> it?', pt: 'Posso trocar?' },
          { emoji: '💰', en: 'I want a <span class="hl-cyan">refund</span>', pt: 'Quero reembolso' },
          { emoji: '📏', en: 'Do you have a <span class="hl-cyan">different size</span>?', pt: 'Tem outro tamanho?' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '❓', title: 'PERGUNTAS ÚTEIS', text: "<strong>What\'s the return policy?</strong><br>Qual a política de devolução?<br><br><strong>How many days do I have?</strong><br>Quantos dias eu tenho?<br><br><strong>Do I need the receipt?</strong><br>Preciso do recibo?" },
        { type: 'comparison', cardClass: 'red', title: '⚠️ RETURN vs EXCHANGE vs REFUND', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🔄', rightIcon: '💰', leftLabel: 'TROCA', rightLabel: 'DINHEIRO', left: '<span class="hl-cyan">Exchange</span><br>Trocar por outro', leftNote: 'Leva outro item', right: '<span class="hl-green">Refund</span><br>Dinheiro de volta', rightNote: 'Devolve o dinheiro', explanation: 'Return = devolver | Exchange = trocar | Refund = reembolso' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Reembolso":', options: ['Return', 'Exchange', 'Refund'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Não funciona":', options: ["It doesn't work", "It\'s not working", 'Ambos funcionam'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Can I _____ this for a larger size?', correctWord: 'exchange' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - DEVOLUÇÃO', items: [
          { emoji: '🔄', text: '<strong>Return</strong> = devolver' },
          { emoji: '🔄', text: '<strong>Exchange</strong> = trocar' },
          { emoji: '💰', text: '<strong>Refund</strong> = reembolso' },
          { emoji: '🧾', text: '<strong>Receipt</strong> = recibo (guarde!)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🔄', pt: 'Quero devolver', en: 'I want to return this' }, { emoji: '❌', pt: 'Não funciona', en: "It doesn't work" },
        { emoji: '💔', pt: 'Está quebrado', en: "It\'s broken" }, { emoji: '📏', pt: 'Tamanho errado', en: 'Wrong size' },
        { emoji: '🎨', pt: 'Cor errada', en: 'Wrong color' }, { emoji: '🔄', pt: 'Posso trocar?', en: 'Can I exchange it?' },
        { emoji: '💰', pt: 'Quero reembolso', en: 'I want a refund' }, { emoji: '🧾', pt: 'Tenho o recibo', en: 'I have the receipt' },
        { emoji: '📅', pt: 'Comprei ontem', en: 'I bought it yesterday' }, { emoji: '⏰', pt: 'Qual a política de devolução?', en: "What\'s the return policy?" },
      ]
    },

  { id: 'phone-internet', title: 'Phone & Internet', emoji: '📱📶', description: 'Celular e internet', module: 6, order: 16,    slides: [
        { type: 'title', emoji: '📱📶', title: 'PHONE & INTERNET', subtitle: 'Celular e internet — Essencial nos EUA!' },
        { type: 'situation', emoji: '📱', cardClass: 'orange', text: 'Sua internet caiu, seu celular quebrou,<br>precisa de um plano mais barato...<br><br>Sem celular nos EUA = sem trabalho!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'CELULAR NOS EUA', text: '<strong>Planos baratos:</strong><br><br>• <strong>Mint Mobile</strong> = ~$15/mês<br>• <strong>T-Mobile Prepaid</strong> = ~$25/mês<br>• <strong>Cricket</strong> = ~$30/mês<br><br>Precisa de: número americano + chip<br>Walmart e Best Buy vendem chips!<br><br>"Prepaid" = pré-pago (sem contrato)' },
        { type: 'rule', cardClass: 'orange', text: 'Problemas com celular:', keyword: 'NOT WORKING / CRACKED / SLOW', keywordAfter: 'Não funciona / Quebrou / Lento' },
        { type: 'example', cardClass: 'orange', emoji: '📶', question: 'My internet is <span class="hl-orange">down</span>.', questionTr: 'Minha internet caiu.', answer: '"Have you tried restarting the router?"', answerTr: 'Já tentou reiniciar o roteador?' },
        { type: 'example', cardClass: 'red', emoji: '📱', question: 'My screen is <span class="hl-red">cracked</span>.', questionTr: 'Minha tela quebrou.', answer: '"We can fix it for $80."', answerTr: 'Podemos arrumar por $80.' },
        { type: 'example', cardClass: 'cyan', emoji: '💰', question: 'Do you have a <span class="hl-cyan">cheaper plan</span>?', questionTr: 'Tem plano mais barato?', answer: '"Our prepaid plan is $25/month."', answerTr: 'Nosso pré-pago é $25/mês.' },
        { type: 'examples', cardClass: 'orange', title: '📱 PROBLEMAS COMUNS', items: [
          { emoji: '🐌', en: 'The internet is <span class="hl-orange">slow</span>.', pt: 'A internet tá lenta.' },
          { emoji: '🔋', en: 'My phone <span class="hl-orange">died</span>.', pt: 'Meu celular descarregou.' },
          { emoji: '🔑', en: 'I forgot my <span class="hl-orange">password</span>.', pt: 'Esqueci minha senha.' },
          { emoji: '📵', en: 'I <span class="hl-orange">lost</span> my phone.', pt: 'Perdi meu celular.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '💳 PLANOS E DADOS', items: [
          { emoji: '📊', en: 'How much <span class="hl-cyan">data</span> do I have?', pt: 'Quanto de dados eu tenho?' },
          { emoji: '📞', en: '<span class="hl-cyan">Unlimited</span> calls and texts.', pt: 'Ligações e mensagens ilimitadas.' },
          { emoji: '💳', en: 'I need a <span class="hl-cyan">SIM card</span>.', pt: 'Preciso de chip.' },
          { emoji: '🔌', en: 'Do you have a <span class="hl-cyan">charger</span>?', pt: 'Tem carregador?' }
        ]},
        { type: 'quiz', cardClass: 'orange', question: '🎯 "Minha internet caiu" em inglês:', options: ['My internet fell', 'My internet is down', 'My internet broke'], correct: 1 },
        { type: 'fill-blank', cardClass: 'orange', prompt: '✍️ Complete:', sentence: 'My screen is _____.', correctWord: 'cracked' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '📶', text: '<strong>Internet is down</strong> = internet caiu' },
          { emoji: '📱', text: '<strong>Screen is cracked</strong> = tela quebrou' },
          { emoji: '💰', text: '<strong>Cheaper plan / Prepaid</strong> = pré-pago' },
          { emoji: '💳', text: '<strong>SIM card</strong> = chip' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '📶', pt: 'Minha internet caiu', en: 'My internet is down', level: 1 },
        { emoji: '🐌', pt: 'A internet tá lenta', en: 'The internet is slow', level: 1 },
        { emoji: '🔌', pt: 'Tem carregador?', en: 'Do you have a charger?', level: 1 },
        { emoji: '📱', pt: 'Minha tela quebrou', en: 'My screen is cracked', level: 1 },
        { emoji: '🔑', pt: 'Esqueci minha senha', en: 'I forgot my password', level: 1 },
        { emoji: '💰', pt: 'Tem plano mais barato?', en: 'Do you have a cheaper plan?', level: 1 },
        { emoji: '📞', pt: 'Ilimitado', en: 'Unlimited', level: 1 },
        { emoji: '💳', pt: 'Preciso de chip', en: 'I need a SIM card', level: 1 },
        { emoji: '📊', pt: 'Quanto de dados eu tenho?', en: 'How much data do I have?', level: 1 },
        { emoji: '🔋', pt: 'Meu celular descarregou', en: 'My phone died', level: 1 },
        { emoji: '📵', pt: 'Perdi meu celular', en: 'I lost my phone', level: 1 },
        { emoji: '📱', pt: 'Pode fazer ligação?', en: 'Can you make a call?', level: 1 }
      ]
    },

  { id: 'shopping-clothing', title: 'Shopping & Clothing', emoji: '🛍️👕', description: 'Compras e roupas', module: 6, order: 17,    slides: [
        { type: 'title', emoji: '🛍️👕', title: 'SHOPPING & CLOTHING', subtitle: 'Compras e roupas' },
        { type: 'situation', emoji: '🛍️', cardClass: 'purple', text: 'Você está na loja. Precisa achar o tamanho,<br>provar, pedir desconto, devolver...<br><br>Comprar nos EUA é FÁCIL com as frases certas!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'COMPRAS NOS EUA', text: '<strong>Coisas que brasileiros não sabem:</strong><br><br>• <strong>Tamanhos diferentes!</strong> S, M, L, XL<br>  (não é P, M, G, GG)<br>• Pode <strong>devolver</strong> quase TUDO em 30 dias!<br>  (guarde o recibo!)<br>• <strong>Tax</strong> não está incluso no preço!<br>  O preço na etiqueta + ~6% de imposto<br>• "Sales" = promoções (Black Friday, etc.)' },
        { type: 'rule', cardClass: 'purple', text: 'Na loja:', keyword: 'DO YOU HAVE / CAN I TRY / HOW MUCH', keywordAfter: 'Tem? / Posso provar? / Quanto?' },
        { type: 'example', cardClass: 'purple', emoji: '👕', question: 'Do you have this in <span class="hl-purple">medium</span>?', questionTr: 'Tem isso em M?', answer: '"Let me check." / "We\'re out."', answerTr: 'Vou ver. / Acabou.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚪', question: 'Where is the <span class="hl-cyan">fitting room</span>?', questionTr: 'Onde é o provador?', answer: '"Right over there."', answerTr: 'Ali.' },
        { type: 'example', cardClass: 'orange', emoji: '🔄', question: 'Can I <span class="hl-orange">return</span> this?', questionTr: 'Posso devolver?', answer: '"Do you have the receipt?"', answerTr: 'Tem o recibo?' },
        { type: 'examples', cardClass: 'purple', title: '👕 TAMANHO E ESTILO', items: [
          { emoji: '📏', en: "It\'s too <span class=\"hl-purple\">big</span>.", pt: 'Tá muito grande.' },
          { emoji: '📏', en: "It\'s too <span class=\"hl-purple\">small</span>.", pt: 'Tá muito pequeno.' },
          { emoji: '🎨', en: 'Do you have it in another <span class="hl-purple">color</span>?', pt: 'Tem em outra cor?' },
          { emoji: '💲', en: 'Is this on <span class="hl-purple">sale</span>?', pt: 'Isso tá em promoção?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💰 PAGANDO E DEVOLVENDO', items: [
          { emoji: '🧾', en: 'I need a <span class="hl-green">receipt</span>.', pt: 'Preciso de recibo.' },
          { emoji: '🔄', en: 'Can I <span class="hl-green">exchange</span> this?', pt: 'Posso trocar isso?' },
          { emoji: '💳', en: 'Do you take <span class="hl-green">Apple Pay</span>?', pt: 'Aceita Apple Pay?' },
          { emoji: '🔍', en: 'Can you help me <span class="hl-green">find</span> something?', pt: 'Pode me ajudar a achar algo?' }
        ]},
        { type: 'comparison', cardClass: 'purple', title: '🇧🇷 vs 🇺🇸 TAMANHOS', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'P, M, G, GG<br>36, 38, 40, 42', leftNote: 'Tamanhos BR', right: 'S, M, L, XL<br>4, 6, 8, 10', rightNote: 'Tamanhos US', explanation: 'S = Small (P), M = Medium (M), L = Large (G), XL = Extra Large (GG)' },
        { type: 'quiz', cardClass: 'purple', question: '🎯 O preço na etiqueta é $20. Você paga:', options: ['$20 exatos', '$20 + tax (imposto)', 'Depende da loja'], correct: 1 },
        { type: 'quiz', cardClass: 'purple', question: '🎯 "Posso devolver?" em inglês:', options: ['Can I give back?', 'Can I return this?', 'I want my money'], correct: 1 },
        { type: 'fill-blank', cardClass: 'purple', prompt: '✍️ Complete:', sentence: 'Do you have this in _____?', correctWord: 'medium' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '👕', text: '<strong>S, M, L, XL</strong> = tamanhos americanos' },
          { emoji: '🔄', text: '<strong>Return / Exchange</strong> = devolver / trocar' },
          { emoji: '🧾', text: '<strong>GUARDE O RECIBO</strong> sempre!' },
          { emoji: '💰', text: 'Tax NÃO está no preço da etiqueta!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '👕', pt: 'Tem isso em M?', en: 'Do you have this in medium?', level: 1 },
        { emoji: '🚪', pt: 'Onde é o provador?', en: 'Where is the fitting room?', level: 1 },
        { emoji: '📏', pt: 'Tá muito grande', en: "It\'s too big", level: 1 },
        { emoji: '📏', pt: 'Tá muito pequeno', en: "It\'s too small", level: 1 },
        { emoji: '💲', pt: 'Tá em promoção?', en: 'Is this on sale?', level: 1 },
        { emoji: '🎨', pt: 'Tem em outra cor?', en: 'Do you have it in another color?', level: 1 },
        { emoji: '🔄', pt: 'Posso devolver?', en: 'Can I return this?', level: 1 },
        { emoji: '🔄', pt: 'Posso trocar?', en: 'Can I exchange this?', level: 1 },
        { emoji: '🧾', pt: 'Preciso de recibo', en: 'I need a receipt', level: 1 },
        { emoji: '🛡️', pt: 'Tem garantia?', en: 'Is there a warranty?', level: 1 },
        { emoji: '🔍', pt: 'Pode me ajudar a achar?', en: 'Can you help me find something?', level: 1 },
        { emoji: '💳', pt: 'Aceita Apple Pay?', en: 'Do you take Apple Pay?', level: 1 },
        { emoji: '💰', pt: 'Tem desconto?', en: 'Is there a discount?', level: 1 },
        { emoji: '💵', pt: 'Quanto é esse?', en: 'How much is this?', level: 1 },
        { emoji: '🛒', pt: 'Tô só olhando', en: "I'm just looking", level: 1 }
      ]
    },

  { id: 'compliments', title: 'COMPLIMENTS', emoji: '👍💕', description: 'Elogios', module: 6, order: 18, slides: [    { type: 'title', emoji: '👍💕', title: 'COMPLIMENTS', subtitle: 'Elogios' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Elogios<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para COMPLIMENTS:', keyword: 'COMPLIMENTS', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">COMPLIMENTS</span>', questionTr: 'Elogios', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">COMPLIMENTS</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">COMPLIMENTS</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar COMPLIMENTS', leftNote: 'Contexto 1', right: 'Forma B de usar COMPLIMENTS', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar COMPLIMENTS<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar COMPLIMENTS', leftNote: 'Erro comum', right: 'Forma correta de usar COMPLIMENTS', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com COMPLIMENTS' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre COMPLIMENTS', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre COMPLIMENTS', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre COMPLIMENTS: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - COMPLIMENTS', items: [
        { emoji: '✅', text: '<strong>COMPLIMENTS</strong> é importante' },
        { emoji: '🎯', text: 'Use para Elogios' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'requests-formal', title: 'REQUESTS FORMAL', emoji: '🙏📋', description: 'Pedidos formais', module: 6, order: 19, slides: [    { type: 'title', emoji: '🙏📋', title: 'REQUESTS FORMAL', subtitle: 'Pedidos formais' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Pedidos formais<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para REQUESTS FORMAL:', keyword: 'REQUESTS FORMAL', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">REQUESTS FORMAL</span>', questionTr: 'Pedidos formais', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">REQUESTS FORMAL</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">REQUESTS FORMAL</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar REQUESTS FORMAL', leftNote: 'Contexto 1', right: 'Forma B de usar REQUESTS FORMAL', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar REQUESTS FORMAL<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar REQUESTS FORMAL', leftNote: 'Erro comum', right: 'Forma correta de usar REQUESTS FORMAL', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com REQUESTS FORMAL' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre REQUESTS FORMAL', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre REQUESTS FORMAL', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre REQUESTS FORMAL: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - REQUESTS FORMAL', items: [
        { emoji: '✅', text: '<strong>REQUESTS FORMAL</strong> é importante' },
        { emoji: '🎯', text: 'Use para Pedidos formais' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'permission-asking', title: 'PERMISSION ASKING', emoji: '❓✋', description: 'Pedindo permissão', module: 6, order: 20, slides: [    { type: 'title', emoji: '❓✋', title: 'PERMISSION ASKING', subtitle: 'Pedindo permissão' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Pedindo permissão<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para PERMISSION ASKING:', keyword: 'PERMISSION ASKING', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">PERMISSION ASKING</span>', questionTr: 'Pedindo permissão', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">PERMISSION ASKING</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">PERMISSION ASKING</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar PERMISSION ASKING', leftNote: 'Contexto 1', right: 'Forma B de usar PERMISSION ASKING', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar PERMISSION ASKING<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar PERMISSION ASKING', leftNote: 'Erro comum', right: 'Forma correta de usar PERMISSION ASKING', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com PERMISSION ASKING' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre PERMISSION ASKING', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre PERMISSION ASKING', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre PERMISSION ASKING: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PERMISSION ASKING', items: [
        { emoji: '✅', text: '<strong>PERMISSION ASKING</strong> é importante' },
        { emoji: '🎯', text: 'Use para Pedindo permissão' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'invitations', title: 'INVITATIONS', emoji: '🎉📧', description: 'Convites', module: 6, order: 21, slides: [    { type: 'title', emoji: '🎉📧', title: 'INVITATIONS', subtitle: 'Convites' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Convites<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para INVITATIONS:', keyword: 'INVITATIONS', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">INVITATIONS</span>', questionTr: 'Convites', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">INVITATIONS</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">INVITATIONS</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar INVITATIONS', leftNote: 'Contexto 1', right: 'Forma B de usar INVITATIONS', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar INVITATIONS<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar INVITATIONS', leftNote: 'Erro comum', right: 'Forma correta de usar INVITATIONS', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com INVITATIONS' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre INVITATIONS', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre INVITATIONS', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre INVITATIONS: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - INVITATIONS', items: [
        { emoji: '✅', text: '<strong>INVITATIONS</strong> é importante' },
        { emoji: '🎯', text: 'Use para Convites' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'declining-politely', title: 'DECLINING POLITELY', emoji: '🙅💬', description: 'Recusando cortesmente', module: 6, order: 22, slides: [    { type: 'title', emoji: '🙅💬', title: 'DECLINING POLITELY', subtitle: 'Recusando cortesmente' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Recusando cortesmente<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para DECLINING POLITELY:', keyword: 'DECLINING POLITELY', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">DECLINING POLITELY</span>', questionTr: 'Recusando cortesmente', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">DECLINING POLITELY</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">DECLINING POLITELY</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar DECLINING POLITELY', leftNote: 'Contexto 1', right: 'Forma B de usar DECLINING POLITELY', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar DECLINING POLITELY<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar DECLINING POLITELY', leftNote: 'Erro comum', right: 'Forma correta de usar DECLINING POLITELY', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com DECLINING POLITELY' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre DECLINING POLITELY', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre DECLINING POLITELY', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre DECLINING POLITELY: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - DECLINING POLITELY', items: [
        { emoji: '✅', text: '<strong>DECLINING POLITELY</strong> é importante' },
        { emoji: '🎯', text: 'Use para Recusando cortesmente' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Termo 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'standing-up', title: 'Standing Up for Yourself', emoji: '✊💪', description: 'Se defender', module: 6, order: 23,    slides: [
        { type: 'title', emoji: '✊💪', title: 'STANDING UP', subtitle: 'Se defender — Com inglês e com respeito!' },
        { type: 'situation', emoji: '✊', cardClass: 'red', text: 'Te cobraram a mais, fizeram o serviço errado,<br>não cumpriram o combinado...<br><br>Ser educado NÃO é ser trouxa!<br>Saiba se defender em inglês!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: '🇺🇸 COMO SE DEFENDER NOS EUA', text: '<strong>Americanos respeitam quem reclama com educação:</strong><br><br>1. Fale calmo e firme<br>2. Peça o <strong>manager</strong> se precisar<br>3. Diga especificamente o que tá errado<br>4. Peça <strong>solução</strong>, não briga<br>5. Ameace com <strong>review</strong> (avaliação online)<br><br>Google Review = arma poderosa!' },
        { type: 'rule', cardClass: 'red', text: 'Se defendendo:', keyword: "THAT'S NOT RIGHT / I WANT / MANAGER", keywordAfter: 'Não tá certo / Eu quero / Gerente' },
        { type: 'example', cardClass: 'red', emoji: '🙅', question: "That's <span class=\"hl-red\">not right</span>.", questionTr: 'Isso não tá certo.', answer: '(Firme mas educado)', answerTr: 'Funciona em QUALQUER situação.' },
        { type: 'example', cardClass: 'orange', emoji: '💰', question: "You're <span class=\"hl-orange\">overcharging</span> me.", questionTr: 'Tá me cobrando a mais.', answer: '"Let me check the price."', answerTr: 'Deixa eu verificar o preço.' },
        { type: 'example', cardClass: 'purple', emoji: '👔', question: 'Can I speak to the <span class="hl-purple">manager</span>?', questionTr: 'Posso falar com o gerente?', answer: '(A frase mais poderosa que existe!)', answerTr: 'Resolve 90% dos problemas.' },
        { type: 'examples', cardClass: 'red', title: '⚖️ RECLAMANDO COM CLASSE', items: [
          { emoji: '🏷️', en: 'The <span class="hl-red">price</span> is wrong.', pt: 'O preço tá errado.' },
          { emoji: '📝', en: 'That\'s <span class="hl-red">not</span> what we agreed.', pt: 'Não foi isso que combinamos.' },
          { emoji: '🔄', en: 'I want a <span class="hl-red">refund</span>.', pt: 'Quero meu dinheiro de volta.' },
          { emoji: '✍️', en: 'Can I get that in <span class="hl-red">writing</span>?', pt: 'Pode colocar por escrito?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💡 FRASES QUE RESOLVEM', items: [
          { emoji: '🤝', en: "Let's <span class=\"hl-green\">find a solution</span>.", pt: 'Vamos achar uma solução.' },
          { emoji: '💰', en: "That's <span class=\"hl-green\">not fair</span>.", pt: 'Isso não é justo.' },
          { emoji: '📋', en: 'I have <span class="hl-green">proof</span>.', pt: 'Tenho prova.' },
          { emoji: '⚖️', en: 'I know my <span class="hl-green">rights</span>.', pt: 'Sei dos meus direitos.' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'A ARMA SECRETA: REVIEW', text: 'Se nada funcionar, diga:<br><br><strong>"I\'ll leave a review."</strong><br>= Vou deixar uma avaliação.<br><br>Empresas nos EUA TEMEM reviews negativas.<br>Isso resolve muita coisa!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ COMO RECLAMAR', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'INEFICAZ', rightLabel: 'EFICAZ', left: 'Gritar, xingar, fazer escândalo', leftNote: 'Chamam a polícia', right: '"Can I speak to the manager?"<br>Calmo e firme', rightNote: 'RESOLVE o problema', explanation: 'Nos EUA, gritar = chamam a polícia. Calma + firmeza = resultado.' },
        { type: 'quiz', cardClass: 'red', question: '🎯 Te cobraram $50 a mais. O que dizer?', options: ["You're a thief!", "You're overcharging me.", "This is robbery!"], correct: 1 },
        { type: 'fill-blank', cardClass: 'red', prompt: '✍️ Complete:', sentence: 'Can I speak to the _____?', correctWord: 'manager' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🙅', text: "<strong>That's not right</strong> = funciona pra tudo" },
          { emoji: '👔', text: '<strong>Manager</strong> = frase mágica' },
          { emoji: '🔄', text: '<strong>Refund</strong> = reembolso' },
          { emoji: '⭐', text: '"I\'ll leave a review" = arma secreta!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🙅', pt: 'Isso não tá certo', en: "That's not right", level: 1 },
        { emoji: '💰', pt: 'Tá me cobrando a mais', en: "You're overcharging me", level: 1 },
        { emoji: '🏷️', pt: 'O preço tá errado', en: 'The price is wrong', level: 1 },
        { emoji: '👔', pt: 'Posso falar com o gerente?', en: 'Can I speak to the manager?', level: 1 },
        { emoji: '⚖️', pt: 'Sei dos meus direitos', en: 'I know my rights', level: 1 },
        { emoji: '📝', pt: 'Não foi isso que combinamos', en: "That's not what we agreed", level: 1 },
        { emoji: '🤝', pt: 'Vamos achar uma solução', en: "Let's find a solution", level: 1 },
        { emoji: '💰', pt: 'Isso não é justo', en: "That's not fair", level: 1 },
        { emoji: '✍️', pt: 'Pode colocar por escrito?', en: 'Can I get that in writing?', level: 1 },
        { emoji: '🔄', pt: 'Quero meu dinheiro de volta', en: 'I want a refund', level: 1 },
        { emoji: '📋', pt: 'Tenho prova', en: 'I have proof', level: 1 },
        { emoji: '⚖️', pt: 'Vou procurar meus direitos', en: "I'll look into my legal rights", level: 1 },
        { emoji: '🙅', pt: 'Discordo', en: 'I disagree', level: 1 },
        { emoji: '📝', pt: 'Você prometeu', en: 'You promised', level: 1 },
        { emoji: '⭐', pt: 'Vou deixar uma avaliação', en: "I'll leave a review", level: 1 }
      ]
    },

  { id: 'kids-school', title: 'Kids & School', emoji: '👧🏫', description: 'Filhos e escola', module: 6, order: 24,    slides: [
        { type: 'title', emoji: '👧🏫', title: 'KIDS & SCHOOL', subtitle: 'Filhos e escola — Por eles, você aprende!' },
        { type: 'situation', emoji: '👧', cardClass: 'purple', text: 'Seu filho está na escola americana.<br>A professora manda bilhete, tem reunião...<br>Tudo em inglês. Você PRECISA participar.<br><br>Pelos seus filhos!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'ESCOLA NOS EUA', text: '<strong>Coisas que brasileiros não sabem:</strong><br><br>• Escola pública é <strong>grátis</strong> pra TODOS os filhos<br>• Independente de status dos pais<br>• Muitas escolas têm programa <strong>ESL</strong><br>  (English as Second Language) pro seu filho<br>• Reunião de pais = <strong>parent-teacher conference</strong><br>• O ônibus escolar é GRÁTIS!' },
        { type: 'rule', cardClass: 'purple', text: 'Na escola dos filhos:', keyword: 'MY KID / PICK UP / HOMEWORK', keywordAfter: 'Meu filho / Buscar / Lição de casa' },
        { type: 'example', cardClass: 'purple', emoji: '🚗', question: "I'm here to <span class=\"hl-purple\">pick up</span> my kid.", questionTr: 'Vim buscar meu filho.', answer: '(PICK UP = buscar)', answerTr: 'Use todo dia!' },
        { type: 'example', cardClass: 'cyan', emoji: '🤒', question: "He's <span class=\"hl-cyan\">sick</span> today.", questionTr: 'Ele tá doente hoje.', answer: '(Ligue pra escola e avise!)', answerTr: 'Falta sem aviso = problema.' },
        { type: 'example', cardClass: 'green', emoji: '🗣️', question: "My kid doesn't speak <span class=\"hl-green\">English yet</span>.", questionTr: 'Meu filho não fala inglês ainda.', answer: '"We have ESL classes."', answerTr: 'A escola vai ajudar!' },
        { type: 'examples', cardClass: 'purple', title: '📚 FRASES NA ESCOLA', items: [
          { emoji: '📚', en: "What\'s the <span class=\"hl-purple\">homework</span>?", pt: 'Qual é a lição de casa?' },
          { emoji: '📅', en: 'When is the <span class="hl-purple">parent meeting</span>?', pt: 'Quando é a reunião de pais?' },
          { emoji: '🍽️', en: 'How much is <span class="hl-purple">lunch</span>?', pt: 'Quanto custa o almoço?' },
          { emoji: '🚌', en: 'What time does the <span class="hl-purple">bus</span> come?', pt: 'O ônibus passa que horas?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '👩‍🏫 COM A PROFESSORA', items: [
          { emoji: '👩‍🏫', en: 'Can I talk to the <span class="hl-green">teacher</span>?', pt: 'Posso falar com a professora?' },
          { emoji: '📊', en: 'Is she doing <span class="hl-green">well</span>?', pt: 'Ela tá indo bem?' },
          { emoji: '🤝', en: 'Did he make <span class="hl-green">friends</span>?', pt: 'Ele fez amigos?' },
          { emoji: '✍️', en: 'Do I need to <span class="hl-green">sign</span> anything?', pt: 'Preciso assinar algo?' }
        ]},
        { type: 'comparison', cardClass: 'purple', title: '🇧🇷 vs 🇺🇸 ESCOLA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Escola pública é mais simples<br>Uniforme obrigatório', leftNote: 'Diferente', right: 'Escola pública é BOA<br>Ônibus grátis, ESL, almoço barato', rightNote: 'Aproveite!', explanation: 'Escola pública nos EUA aceita TODOS os alunos. ESL ajuda seu filho a aprender inglês!' },
        { type: 'quiz', cardClass: 'purple', question: '🎯 "Vim buscar meu filho" em inglês:', options: ["I come get my kid", "I'm here to pick up my kid", "I take my son"], correct: 1 },
        { type: 'fill-blank', cardClass: 'purple', prompt: '✍️ Complete:', sentence: "What\'s the _____?", correctWord: 'homework' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🚗', text: '<strong>Pick up</strong> = buscar o filho' },
          { emoji: '📚', text: '<strong>Homework</strong> = lição de casa' },
          { emoji: '🏫', text: 'Escola pública = grátis pra TODOS!' },
          { emoji: '🗣️', text: '<strong>ESL</strong> = programa de inglês na escola' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🚗', pt: 'Vim buscar meu filho', en: "I'm here to pick up my kid", level: 1 },
        { emoji: '🤒', pt: 'Ele tá doente hoje', en: "He's sick today", level: 1 },
        { emoji: '❌', pt: 'Ela não vem amanhã', en: "She won't come tomorrow", level: 1 },
        { emoji: '📚', pt: 'Qual é a lição de casa?', en: "What\'s the homework?", level: 1 },
        { emoji: '📅', pt: 'Quando é a reunião de pais?', en: 'When is the parent meeting?', level: 1 },
        { emoji: '🗣️', pt: 'Meu filho não fala inglês ainda', en: "My kid doesn't speak English yet", level: 1 },
        { emoji: '📖', pt: 'Tem aula de inglês pra ele?', en: 'Is there an English class for him?', level: 1 },
        { emoji: '👕', pt: 'Ele precisa de uniforme?', en: 'Does he need a uniform?', level: 1 },
        { emoji: '🍽️', pt: 'Quanto custa o almoço?', en: 'How much is lunch?', level: 1 },
        { emoji: '🚌', pt: 'O ônibus escolar passa que horas?', en: 'What time does the school bus come?', level: 1 },
        { emoji: '👩‍🏫', pt: 'Posso falar com a professora?', en: 'Can I talk to the teacher?', level: 1 },
        { emoji: '🤝', pt: 'Ele fez amigos?', en: 'Did he make friends?', level: 1 },
        { emoji: '📊', pt: 'Ela tá indo bem na escola?', en: 'Is she doing well in school?', level: 1 },
        { emoji: '✍️', pt: 'Preciso assinar alguma coisa?', en: 'Do I need to sign anything?', level: 1 },
        { emoji: '📱', pt: 'Meu número é...', en: 'My number is...', level: 1 }
      ]
    },

  { id: 'laundromat', title: 'Laundromat', emoji: '🧺🧼', description: 'Lavanderia', module: 6, order: 25,    slides: [
        { type: 'title', emoji: '🧺🧼', title: 'LAUNDROMAT', subtitle: 'Na lavanderia — Roupas limpas sem stress!' },
        { type: 'situation', emoji: '🧺', cardClass: 'cyan', text: 'Você precisa lavar roupa na laundromat.<br>As máquinas pedem moedas (quarters),<br>tem opções de temperatura...<br><br>É simples quando você sabe o vocabulário!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'LAVANDERIA NOS EUA', text: '<strong>Self-service!</strong> Você mesmo lava.<br><br>• Precisa de <strong>quarters</strong> (moedas de 25 cents)<br>  Muitas têm máquina de troco<br>• <strong>Hot / Warm / Cold</strong> = Quente / Morno / Frio<br>• Não deixe roupa na máquina!<br>  (alguém pode tirar pra usar)' },
        { type: 'rule', cardClass: 'cyan', text: 'Na lavanderia:', keyword: 'QUARTERS / WASH / DRY', keywordAfter: 'Moedas / Lavar / Secar' },
        { type: 'example', cardClass: 'cyan', emoji: '🪙', question: 'Do you have <span class="hl-cyan">change</span> for quarters?', questionTr: 'Tem troco em moedas?', answer: '"There\'s a change machine."', answerTr: 'Tem máquina de troco.' },
        { type: 'example', cardClass: 'green', emoji: '🌡️', question: '<span class="hl-green">Cold</span> water, please.', questionTr: 'Água fria.', answer: '(Cold = protege as roupas)', answerTr: 'Maioria das roupas: água fria!' },
        { type: 'example', cardClass: 'orange', emoji: '👕', question: 'My clothes are still <span class="hl-orange">wet</span>.', questionTr: 'Minha roupa ainda tá molhada.', answer: '"Put it in the dryer again."', answerTr: 'Coloca na secadora de novo.' },
        { type: 'examples', cardClass: 'cyan', title: '🧺 FRASES ÚTEIS', items: [
          { emoji: '🕐', en: 'How long is the <span class="hl-cyan">cycle</span>?', pt: 'Quanto tempo dura o ciclo?' },
          { emoji: '🧼', en: 'I need <span class="hl-cyan">detergent</span>.', pt: 'Preciso de sabão.' },
          { emoji: '❌', en: 'This machine is <span class="hl-cyan">broken</span>.', pt: 'Essa máquina tá quebrada.' },
          { emoji: '🧺', en: 'Is this <span class="hl-cyan">machine available</span>?', pt: 'Essa máquina tá livre?' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Máquinas de lavanderia nos EUA usam:', options: ['Notas de dólar', 'Quarters (moedas de 25¢)', 'Cartão de crédito sempre'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'My clothes are still _____.', correctWord: 'wet' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🪙', text: '<strong>Quarters</strong> = moedas de 25¢ (essenciais!)' },
          { emoji: '🌡️', text: '<strong>Hot / Warm / Cold</strong> = temperatura' },
          { emoji: '🧼', text: '<strong>Detergent</strong> = sabão de roupa' },
          { emoji: '⏱️', text: 'Tire a roupa logo que acabar!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🪙', pt: 'Tem troco em moedas?', en: 'Do you have change for quarters?', level: 1 },
        { emoji: '🧼', pt: 'Preciso de sabão', en: 'I need detergent', level: 1 },
        { emoji: '🌡️', pt: 'Água fria / morna / quente', en: 'Cold / Warm / Hot water', level: 1 },
        { emoji: '🕐', pt: 'Quanto tempo dura?', en: 'How long is the cycle?', level: 1 },
        { emoji: '❌', pt: 'Essa máquina tá quebrada', en: 'This machine is broken', level: 1 },
        { emoji: '👕', pt: 'Minha roupa tá molhada ainda', en: 'My clothes are still wet', level: 1 },
        { emoji: '🧺', pt: 'Essa máquina tá livre?', en: 'Is this machine available?', level: 1 },
        { emoji: '🔄', pt: 'A secadora', en: 'The dryer', level: 1 },
        { emoji: '🧺', pt: 'A máquina de lavar', en: 'The washing machine', level: 1 },
        { emoji: '🪙', pt: 'Onde troco moedas?', en: 'Where can I get quarters?', level: 1 }
      ]
    },

  { id: 'getting-haircut', title: 'Getting a Haircut', emoji: '💇✂️', description: 'Cortando o cabelo', module: 6, order: 26,    slides: [
        { type: 'title', emoji: '💇✂️', title: 'GETTING A HAIRCUT', subtitle: 'Na barbearia — Sem perrengue no cabelo!' },
        { type: 'situation', emoji: '💇', cardClass: 'purple', text: 'Você entrou na barbearia americana.<br>O barbeiro pergunta o que você quer...<br>"What are we doing today?"<br><br>Não saia com corte errado!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'BARBEARIA NOS EUA', text: 'Diferenças importantes:<br><br>• Gorjeta é <strong>esperada</strong> (15-20%)<br>• Máquina usa <strong>números</strong>: #1, #2, #3...<br>  (quanto menor, mais curto)<br>• "Fade" = degradê<br>• Muitas pedem <strong>appointment</strong> (agendamento)<br>• Walk-in = sem agendamento' },
        { type: 'rule', cardClass: 'purple', text: 'Na barbearia:', keyword: 'TRIM / SHORT / NUMBER / FADE', keywordAfter: 'Aparar, Curto, Número, Degradê' },
        { type: 'example', cardClass: 'purple', emoji: '✂️', question: 'Just a <span class="hl-purple">trim</span>.', questionTr: 'Só aparar.', answer: '(TRIM = cortar pouquinho)', answerTr: 'Quando não quer mudar muito.' },
        { type: 'example', cardClass: 'cyan', emoji: '👈', question: '<span class="hl-cyan">Short on the sides</span>.', questionTr: 'Curto dos lados.', answer: '"How short? What number?"', answerTr: 'O barbeiro vai perguntar o número.' },
        { type: 'example', cardClass: 'orange', emoji: '🔢', question: 'Number <span class="hl-orange">two</span> clipper.', questionTr: 'Máquina número dois.', answer: '(#1 = quase careca, #4 = mais alto)', answerTr: 'O número define o tamanho!' },
        { type: 'examples', cardClass: 'purple', title: '✂️ FRASES ÚTEIS', items: [
          { emoji: '🙏', en: "<span class=\"hl-purple\">Don't cut</span> too much.", pt: 'Não corta muito.' },
          { emoji: '👍', en: 'That <span class="hl-purple">looks good</span>.', pt: 'Assim tá bom.' },
          { emoji: '🧔', en: '<span class="hl-purple">Trim</span> the beard too.', pt: 'Faz a barba também.' },
          { emoji: '📱', en: 'Can you do it <span class="hl-purple">like this</span>?', pt: 'Pode fazer assim? (mostra foto)' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '💰 PREÇO E AGENDA', items: [
          { emoji: '💰', en: 'How <span class="hl-cyan">much</span> is it?', pt: 'Quanto é?' },
          { emoji: '💵', en: 'Do you take <span class="hl-cyan">tips</span>?', pt: 'Aceita gorjeta?' },
          { emoji: '📅', en: 'Do I need an <span class="hl-cyan">appointment</span>?', pt: 'Preciso agendar?' },
          { emoji: '⏳', en: 'How long is the <span class="hl-cyan">wait</span>?', pt: 'Quanto tempo de espera?' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '💡', title: 'DICA: LEVE UMA FOTO!', text: 'A melhor forma de explicar o corte:<br><br>Mostra uma <strong>foto no celular</strong> e diz:<br>"Can you do it <strong>like this</strong>?"<br>= Pode fazer assim?<br><br>Vale mais que 1000 palavras!' },
        { type: 'quiz', cardClass: 'purple', question: '🎯 "Só aparar" em inglês:', options: ['Only cut little', 'Just a trim', 'Small cut please'], correct: 1 },
        { type: 'fill-blank', cardClass: 'purple', prompt: '✍️ Complete:', sentence: 'Short on the _____.', correctWord: 'sides' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '✂️', text: '<strong>Just a trim</strong> = só aparar' },
          { emoji: '🔢', text: '<strong>Number 2</strong> = tamanho da máquina' },
          { emoji: '📱', text: 'Leve FOTO do corte que quer!' },
          { emoji: '💵', text: 'Gorjeta: 15-20% do corte' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '✂️', pt: 'Quero cortar o cabelo', en: 'I want a haircut', level: 1 },
        { emoji: '✂️', pt: 'Só aparar', en: 'Just a trim', level: 1 },
        { emoji: '👈', pt: 'Curto dos lados', en: 'Short on the sides', level: 1 },
        { emoji: '🔢', pt: 'Máquina número dois', en: 'Number two clipper', level: 1 },
        { emoji: '🙏', pt: 'Não corta muito', en: "Don't cut too much", level: 1 },
        { emoji: '👍', pt: 'Assim tá bom', en: 'That looks good', level: 1 },
        { emoji: '🧔', pt: 'Faz a barba também', en: 'Trim the beard too', level: 1 },
        { emoji: '💰', pt: 'Quanto é?', en: 'How much is it?', level: 1 },
        { emoji: '💵', pt: 'Aceita gorjeta?', en: 'Do you take tips?', level: 1 },
        { emoji: '📅', pt: 'Preciso agendar?', en: 'Do I need an appointment?', level: 1 },
        { emoji: '⏳', pt: 'Quanto tempo de espera?', en: 'How long is the wait?', level: 1 },
        { emoji: '📱', pt: 'Pode fazer assim?', en: 'Can you do it like this?', level: 1 }
      ]
    },

  { id: 'coffee-shop', title: 'Coffee Shop', emoji: '☕🏪', description: 'Cafeteria', module: 6, order: 27,    slides: [
        { type: 'title', emoji: '☕🏪', title: 'COFFEE SHOP', subtitle: 'Na cafeteria — Dunkin\' e Starbucks' },
        { type: 'situation', emoji: '☕', cardClass: 'green', text: 'Você está no Dunkin\' ou Starbucks.<br>"What size?" "What\'s the name?"<br>O menu é confuso, a fila é grande...<br><br>Vamos simplificar!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'TAMANHOS NOS EUA', text: '<strong>Starbucks:</strong> Tall / Grande / Venti<br>(sim, "Grande" existe! mas é o médio 😅)<br><br><strong>Dunkin\' / outros:</strong> Small / Medium / Large<br><br><strong>Dica:</strong> Se não lembra, aponte e diga:<br>"This size" = Esse tamanho' },
        { type: 'rule', cardClass: 'green', text: 'Na cafeteria:', keyword: 'LARGE / SMALL / ICED / HOT', keywordAfter: 'Grande / Pequeno / Gelado / Quente' },
        { type: 'example', cardClass: 'green', emoji: '☕', question: 'A <span class="hl-green">large iced coffee</span>, please.', questionTr: 'Um café gelado grande, por favor.', answer: '"With milk?" / "Room for cream?"', answerTr: 'Com leite? Espaço pra creme?' },
        { type: 'example', cardClass: 'cyan', emoji: '🥛', question: 'With <span class="hl-cyan">milk</span>, no sugar.', questionTr: 'Com leite, sem açúcar.', answer: '(Fale tudo de uma vez!)', answerTr: 'Tamanho + tipo + customização.' },
        { type: 'examples', cardClass: 'green', title: '☕ PEDINDO', items: [
          { emoji: '📏', en: '<span class="hl-green">Large</span> or small?', pt: 'Grande ou pequeno?' },
          { emoji: '🧊', en: '<span class="hl-green">Iced</span>.', pt: 'Gelado.' },
          { emoji: '🔥', en: '<span class="hl-green">Hot</span>.', pt: 'Quente.' },
          { emoji: '📝', en: 'Can you put a <span class="hl-green">name</span>?', pt: 'Pode colocar nome?' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🪑 NO LOCAL', items: [
          { emoji: '🔌', en: 'Is there an <span class="hl-cyan">outlet</span>?', pt: 'Tem tomada?' },
          { emoji: '🪑', en: 'Can I <span class="hl-cyan">sit here</span>?', pt: 'Posso sentar aqui?' },
          { emoji: '🕐', en: 'What time do you <span class="hl-cyan">close</span>?', pt: 'Até que horas abre?' }
        ]},
        { type: 'quiz', cardClass: 'green', question: '🎯 "Café gelado grande com leite" em inglês:', options: ['Big cold coffee with milk', 'Large iced coffee with milk', 'Coffee ice large milk'], correct: 1 },
        { type: 'fill-blank', cardClass: 'green', prompt: '✍️ Complete:', sentence: 'A large _____ coffee, please.', correctWord: 'iced' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '☕', text: '<strong>Large / Small</strong> = tamanho' },
          { emoji: '🧊', text: '<strong>Iced / Hot</strong> = gelado / quente' },
          { emoji: '🥛', text: '<strong>With milk, no sugar</strong> = customização' },
          { emoji: '📝', text: '"Can you put a name?" = pra chamarem você' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '☕', pt: 'Um café, por favor', en: 'A coffee, please', level: 1 },
        { emoji: '📏', pt: 'Grande ou pequeno?', en: 'Large or small?', level: 1 },
        { emoji: '🥛', pt: 'Com leite', en: 'With milk', level: 1 },
        { emoji: '🚫', pt: 'Sem açúcar', en: 'No sugar', level: 1 },
        { emoji: '🧊', pt: 'Gelado', en: 'Iced', level: 1 },
        { emoji: '🔥', pt: 'Quente', en: 'Hot', level: 1 },
        { emoji: '📝', pt: 'Pode colocar nome?', en: 'Can you put a name?', level: 1 },
        { emoji: '🔌', pt: 'Tem tomada?', en: 'Is there an outlet?', level: 1 },
        { emoji: '🪑', pt: 'Posso sentar aqui?', en: 'Can I sit here?', level: 1 },
        { emoji: '🕐', pt: 'Até que horas abre?', en: 'What time do you close?', level: 1 }
      ]
    },

  { id: 'at-the-gym', title: 'At the Gym', emoji: '💪🏋️', description: 'Na academia', module: 6, order: 28,    slides: [
        { type: 'title', emoji: '💪🏋️', title: 'AT THE GYM', subtitle: 'Na academia' },
        { type: 'situation', emoji: '💪', cardClass: 'green', text: 'Você quer treinar, mas a academia<br>é toda em inglês. Inscrição, máquinas,<br>vestiário, regras...<br><br>Fique em forma E no inglês!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'ACADEMIA NOS EUA', text: '<strong>Cuidado com contratos!</strong><br><br>• Planet Fitness = mais barato (~$10/mês)<br>• Muitas pedem <strong>contrato anual</strong><br>• Pergunte: "Can I do <strong>month to month</strong>?"<br>  = Posso pagar mês a mês?<br>• "Cancel anytime" = cancela quando quiser<br>• LEIA o contrato antes de assinar!' },
        { type: 'rule', cardClass: 'green', text: 'Na academia:', keyword: 'MEMBERSHIP / DAY PASS / CANCEL', keywordAfter: 'Matrícula / Passe diário / Cancelar' },
        { type: 'example', cardClass: 'green', emoji: '💳', question: 'How much is a <span class="hl-green">membership</span>?', questionTr: 'Quanto é a matrícula?', answer: '"$10/month." / "$30/month."', answerTr: 'Depende da academia.' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: 'Do you have a <span class="hl-cyan">day pass</span>?', questionTr: 'Tem passe de um dia?', answer: '"Yes, $5 for the day."', answerTr: 'Pra experimentar antes de assinar.' },
        { type: 'example', cardClass: 'orange', emoji: '🏋️', question: 'Can you <span class="hl-orange">spot</span> me?', questionTr: 'Pode me dar segurança?', answer: '(SPOT = ajudar no peso)', answerTr: 'Comum no supino e agachamento.' },
        { type: 'examples', cardClass: 'green', title: '🏋️ NO TREINO', items: [
          { emoji: '🔄', en: 'How many <span class="hl-green">sets</span>?', pt: 'Quantas séries?' },
          { emoji: '🚿', en: 'Where is the <span class="hl-green">locker room</span>?', pt: 'Onde é o vestiário?' },
          { emoji: '🧴', en: 'Do you have <span class="hl-green">towels</span>?', pt: 'Tem toalha?' },
          { emoji: '❌', en: 'Can I <span class="hl-green">cancel</span> anytime?', pt: 'Posso cancelar quando quiser?' }
        ]},
        { type: 'quiz', cardClass: 'green', question: '🎯 "Pode me dar segurança no peso" em inglês:', options: ['Can you help my weight?', 'Can you spot me?', 'Can you hold for me?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'green', prompt: '✍️ Complete:', sentence: 'How much is a _____?', correctWord: 'membership' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💳', text: '<strong>Membership</strong> = matrícula/mensalidade' },
          { emoji: '📅', text: '<strong>Day pass</strong> = passe diário' },
          { emoji: '🏋️', text: '<strong>Spot me</strong> = dar segurança no peso' },
          { emoji: '⚠️', text: 'Pergunte sobre cancelamento ANTES!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '💳', pt: 'Quanto é a matrícula?', en: 'How much is a membership?', level: 1 },
        { emoji: '📅', pt: 'Tem passe diário?', en: 'Do you have a day pass?', level: 1 },
        { emoji: '🚿', pt: 'Onde é o vestiário?', en: 'Where is the locker room?', level: 1 },
        { emoji: '🏋️', pt: 'Como usa essa máquina?', en: 'How do I use this machine?', level: 1 },
        { emoji: '🔄', pt: 'Quantas séries?', en: 'How many sets?', level: 1 },
        { emoji: '🏋️', pt: 'Pode me dar segurança?', en: 'Can you spot me?', level: 1 },
        { emoji: '🧴', pt: 'Tem toalha?', en: 'Do you have towels?', level: 1 },
        { emoji: '🕐', pt: 'Que horas fecha?', en: 'What time do you close?', level: 1 },
        { emoji: '❌', pt: 'Posso cancelar quando quiser?', en: 'Can I cancel anytime?', level: 1 },
        { emoji: '📋', pt: 'Posso pagar mês a mês?', en: 'Can I do month to month?', level: 1 }
      ]
    },

  { id: 'weather-dressed', title: 'Weather & Getting Dressed', emoji: '🌤️🧥', description: 'Clima e roupas', module: 6, order: 29,    slides: [
        { type: 'title', emoji: '🌤️🧥', title: 'WEATHER & DRESSED', subtitle: 'Clima e como se vestir' },
        { type: 'situation', emoji: '🌤️', cardClass: 'cyan', text: 'Massachusetts tem INVERNO de verdade. ❄️<br>Neve, gelo, temperaturas negativas...<br><br>Saber falar sobre clima é essencial<br>pro trabalho e pro dia a dia!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'CLIMA EM MASSACHUSETTS', text: '<strong>Inverno (Dec-Mar):</strong> Neve, frio intenso 🥶<br>"Bundle up!" = Se agasalhe!<br><br><strong>Verão (Jun-Aug):</strong> Quente e úmido 🥵<br><br><strong>Temperatura nos EUA = Fahrenheit!</strong><br>32°F = 0°C (congela)<br>70°F = 21°C (agradável)<br>90°F = 32°C (quente!)' },
        { type: 'rule', cardClass: 'cyan', text: 'Falando sobre clima:', keyword: "IT'S COLD / IT'S HOT / SLIPPERY", keywordAfter: 'Tá frio / Tá quente / Escorregadio' },
        { type: 'example', cardClass: 'cyan', emoji: '🥶', question: "It\'s <span class=\"hl-cyan\">freezing</span> today!", questionTr: 'Tá congelando hoje!', answer: '(FREEZING = frio extremo)', answerTr: 'Usado quando tá MUITO frio.' },
        { type: 'example', cardClass: 'orange', emoji: '🌧️', question: "It\'s going to <span class=\"hl-orange\">rain</span>.", questionTr: 'Vai chover.', answer: '"Bring an umbrella."', answerTr: 'Leva um guarda-chuva.' },
        { type: 'example', cardClass: 'red', emoji: '⚠️', question: "It\'s <span class=\"hl-red\">slippery</span> outside.", questionTr: 'Tá escorregadio lá fora.', answer: '(Gelo no chão = PERIGOSO)', answerTr: 'Cuidado andando e dirigindo!' },
        { type: 'examples', cardClass: 'cyan', title: '🌡️ SOBRE O CLIMA', items: [
          { emoji: '🥵', en: "It\'s really <span class=\"hl-cyan\">hot</span>.", pt: 'Tá muito quente.' },
          { emoji: '❄️', en: "It\'s <span class=\"hl-cyan\">snowing</span>.", pt: 'Tá nevando.' },
          { emoji: '🧥', en: 'Bring a <span class="hl-cyan">jacket</span>.', pt: 'Leva uma jaqueta.' },
          { emoji: '☂️', en: 'Do you have an <span class="hl-cyan">umbrella</span>?', pt: 'Tem guarda-chuva?' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '🏠 EM CASA', items: [
          { emoji: '🌡️', en: 'Turn on the <span class="hl-orange">heater</span>.', pt: 'Liga o aquecedor.' },
          { emoji: '❄️', en: 'Turn on the <span class="hl-orange">AC</span>.', pt: 'Liga o ar condicionado.' },
          { emoji: '🧤', en: "I don't have <span class=\"hl-orange\">gloves</span>.", pt: 'Não tenho luvas.' },
          { emoji: '🧣', en: "I need a <span class=\"hl-orange\">scarf</span>.", pt: 'Preciso de cachecol.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🌡️ FAHRENHEIT vs CELSIUS', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'CELSIUS', rightLabel: 'FAHRENHEIT', left: '0°C = congela<br>25°C = agradável<br>35°C = muito quente', leftNote: 'Brasil usa', right: '32°F = congela<br>77°F = agradável<br>95°F = muito quente', rightNote: 'EUA usa', explanation: 'Dica rápida: F = (C × 1.8) + 32. Ou use o Google! 😄' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tá escorregadio lá fora" em inglês:', options: ["It\'s dangerous outside", "It\'s slippery outside", "The floor is ice"], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "It\'s _____ today! Bring a jacket.", correctWord: 'cold' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🥶', text: '<strong>Freezing</strong> = muito frio (abaixo de 0)' },
          { emoji: '⚠️', text: '<strong>Slippery</strong> = escorregadio (gelo!)' },
          { emoji: '🌡️', text: 'EUA usa <strong>Fahrenheit</strong>, não Celsius!' },
          { emoji: '🧥', text: 'MA no inverno: casaco GROSSO!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🥶', pt: 'Tá muito frio', en: "It\'s really cold", level: 1 },
        { emoji: '🥵', pt: 'Tá muito quente', en: "It\'s really hot", level: 1 },
        { emoji: '🌧️', pt: 'Vai chover', en: "It\'s going to rain", level: 1 },
        { emoji: '❄️', pt: 'Tá nevando', en: "It\'s snowing", level: 1 },
        { emoji: '🧥', pt: 'Leva uma jaqueta', en: 'Bring a jacket', level: 1 },
        { emoji: '⚠️', pt: 'Tá escorregadio', en: "It\'s slippery", level: 1 },
        { emoji: '☂️', pt: 'Tem guarda-chuva?', en: 'Do you have an umbrella?', level: 1 },
        { emoji: '🌡️', pt: 'Liga o aquecedor', en: 'Turn on the heater', level: 1 },
        { emoji: '❄️', pt: 'Liga o ar condicionado', en: 'Turn on the AC', level: 1 },
        { emoji: '🥶', pt: 'Tá congelando', en: "It\'s freezing", level: 1 }
      ]
    },

  { id: 'contractions-informal', title: 'CONTRACTIONS (INFORMAL)', emoji: '🔤✂️', description: 'Gonna, wanna, gotta...', module: 6, order: 30, slides: [    { type: 'title', emoji: '🔤✂️', title: 'CONTRACTIONS', subtitle: 'Gonna, Wanna, Gotta...' },
      { type: 'situation', emoji: '🏃', cardClass: 'purple', text: 'Seu amigo fala rápido:<br><br><strong>"I gotta go. I\'m gonna be late!"</strong><br>(Tenho que ir. Vou atrasar!)' },
      { type: 'rule', cardClass: 'cyan', text: 'Na fala rápida, americanos contraem tudo:<br><strong>GONNA</strong> = going to<br><strong>WANNA</strong> = want to<br><strong>GOTTA</strong> = got to / have to', keyword: 'GONNA / WANNA / GOTTA', keywordAfter: 'Contrações da fala do dia a dia' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'AS PRINCIPAIS', text: '<strong>GONNA</strong> (gâna) = going to → vou<br><strong>WANNA</strong> (uâna) = want to → quero<br><strong>GOTTA</strong> (gâra) = got to → tenho que<br><strong>KINDA</strong> (kainda) = kind of → meio que<br><strong>LEMME</strong> (lêmi) = let me → deixa eu' },
      { type: 'example', cardClass: 'cyan', emoji: '🏃', question: "I'm <span class='hl-cyan'>gonna</span> go home.", questionTr: 'Vou pra casa.', answer: "GONNA = going to", answerTr: 'Vou fazer' },
      { type: 'example', cardClass: 'cyan', emoji: '🍕', question: "I <span class='hl-cyan'>wanna</span> eat.", questionTr: 'Quero comer.', answer: "WANNA = want to", answerTr: 'Quero' },
      { type: 'example', cardClass: 'cyan', emoji: '⏰', question: "I <span class='hl-cyan'>gotta</span> go.", questionTr: 'Tenho que ir.', answer: "GOTTA = got to", answerTr: 'Tenho que' },
      { type: 'examples', cardClass: 'cyan', title: '💬 NA FALA DO DIA A DIA', items: [
        { emoji: '📞', en: "I'm <span class='hl-cyan'>gonna</span> call him.", pt: 'Vou ligar pra ele.' },
        { emoji: '🍔', en: "You <span class='hl-cyan'>wanna</span> grab lunch?", pt: 'Quer almoçar?' },
        { emoji: '💪', en: "I <span class='hl-cyan'>gotta</span> work.", pt: 'Tenho que trabalhar.' },
        { emoji: '🤔', en: "It\'s <span class='hl-cyan'>kinda</span> far.", pt: 'É meio longe.' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '✂️ MAIS CONTRAÇÕES', items: [
        { emoji: '🗣️', en: "<span class='hl-purple'>Lemme</span> see = Let me see", pt: 'Deixa eu ver' },
        { emoji: '🤷', en: "<span class='hl-purple'>Dunno</span> = Don't know", pt: 'Não sei' },
        { emoji: '📍', en: "<span class='hl-purple'>Outta</span> = Out of", pt: 'Fora de' },
        { emoji: '👉', en: "<span class='hl-purple'>Gimme</span> = Give me", pt: 'Me dá' }
      ]},
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Essas contrações são <strong>só pra fala</strong>!<br><br>Texto/E-mail formal: \"I\'m going to...\" ✅<br>Conversa com amigo: \"I\'m gonna...\" ✅<br><br>Não escreva GONNA em documentos oficiais!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ FORMAL vs INFORMAL', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🎩', rightIcon: '👋', leftLabel: 'FORMAL', rightLabel: 'INFORMAL', left: "I'm <span class='hl-cyan'>going to</span> work.", leftNote: 'E-mail, documento', right: "I'm <span class='hl-purple'>gonna</span> work.", rightNote: 'Fala, texto pro amigo', explanation: 'Mesmo significado, contexto diferente' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quero comer" (informal):', options: ['I want to eat', 'I wanna eat', 'As duas estão certas'], correct: 2 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 GONNA = ?', options: ['Got to', 'Going to', 'Want to'], correct: 1 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I _____ go now. See you later!", correctWord: 'gotta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '🏃', text: 'GONNA = going to (vou)' },
        { emoji: '🍕', text: 'WANNA = want to (quero)' },
        { emoji: '💪', text: 'GOTTA = got to (tenho que)' },
        { emoji: '⚠️', text: 'Só pra fala! Não use em textos formais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🏃', pt: 'Vou pra casa', en: "I'm gonna go home", level: 1 },
      { emoji: '🍕', pt: 'Quero comer', en: "I wanna eat", level: 1 },
      { emoji: '⏰', pt: 'Tenho que ir', en: "I gotta go", level: 1 },
      { emoji: '📞', pt: 'Vou ligar pra ele', en: "I'm gonna call him", level: 1 },
      { emoji: '🍔', pt: 'Quer almoçar?', en: "You wanna grab lunch?", level: 1 },
      { emoji: '💪', pt: 'Tenho que trabalhar', en: "I gotta work", level: 1 },
      { emoji: '🤔', pt: 'É meio longe', en: "It\'s kinda far", level: 1 },
      { emoji: '🗣️', pt: 'Deixa eu ver', en: "Lemme see", level: 1 },
      { emoji: '🤷', pt: 'Não sei', en: "I dunno", level: 1 },
      { emoji: '👉', pt: 'Me dá', en: "Gimme", level: 1 },
      { emoji: '📱', pt: 'Vou te mandar', en: "I'm gonna send you", level: 1 },
      { emoji: '🏠', pt: 'Quer vir?', en: "You wanna come?", level: 1 },
      { emoji: '🔧', pt: 'Tenho que consertar', en: "I gotta fix this", level: 1 },
      { emoji: '😴', pt: 'Vou dormir', en: "I'm gonna sleep", level: 1 },
      { emoji: '🍳', pt: 'Quer comer alguma coisa?', en: "Wanna eat something?", level: 1 },
      { emoji: '💰', pt: 'Tenho que pagar', en: "I gotta pay", level: 1 },
      { emoji: '🤔', pt: 'É meio difícil', en: "It\'s kinda hard", level: 1 },
      { emoji: '👀', pt: 'Deixa eu pensar', en: "Lemme think", level: 1 },
      { emoji: '🎯', pt: 'O que vai fazer?', en: "What are you gonna do?", level: 1 },
      { emoji: '🚗', pt: 'Tenho que ir embora', en: "I gotta leave", level: 1 }
    ] },

  { id: 'slang-words', title: 'SLANG WORDS', emoji: '🤙💬', description: 'Gírias americanas', module: 6, order: 31, slides: [    { type: 'title', emoji: '🤙💬', title: 'SLANG', subtitle: 'Gírias que americanos usam todo dia' },
      { type: 'situation', emoji: '👷', cardClass: 'purple', text: 'Seu colega americano fala:<br><br><strong>"Dude, that\'s awesome!"</strong><br>(Cara, isso é demais!)' },
      { type: 'rule', cardClass: 'cyan', text: 'Gírias essenciais que você vai ouvir <strong>todo dia</strong>:', keyword: 'EVERYDAY SLANG', keywordAfter: 'Dude, cool, awesome, chill...' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'TOP 10 GÍRIAS', text: '<strong>Dude</strong> = Cara<br><strong>Cool</strong> = Legal<br><strong>Awesome</strong> = Demais/Incrível<br><strong>Chill</strong> = Relaxar/Tranquilo<br><strong>Hang out</strong> = Sair/Ficar junto' },
      { type: 'example', cardClass: 'cyan', emoji: '😎', question: "That's <span class='hl-cyan'>awesome</span>!", questionTr: 'Isso é demais!', answer: "Awesome = incrível", answerTr: 'Muito positivo' },
      { type: 'example', cardClass: 'cyan', emoji: '👍', question: "That's <span class='hl-cyan'>cool</span>.", questionTr: 'Legal.', answer: "Cool = legal", answerTr: 'Aprovação' },
      { type: 'example', cardClass: 'cyan', emoji: '🛋️', question: "Let's just <span class='hl-cyan'>chill</span>.", questionTr: 'Vamos só relaxar.', answer: "Chill = relaxar", answerTr: 'Descansar' },
      { type: 'examples', cardClass: 'cyan', title: '🤙 GÍRIAS POSITIVAS', items: [
        { emoji: '🔥', en: "<span class='hl-cyan'>Fire</span> = Muito bom", pt: '"That food is fire!" = A comida é demais!' },
        { emoji: '💯', en: "<span class='hl-cyan'>Bet</span> = Beleza/Combinado", pt: '"Bet!" = Fechado!' },
        { emoji: '🤙', en: "<span class='hl-cyan'>No cap</span> = Sem mentira", pt: '"No cap, it was crazy"' },
        { emoji: '💪', en: "<span class='hl-cyan'>Legit</span> = De verdade/Legítimo", pt: '"That\'s legit!" = É real!' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '😤 GÍRIAS NEGATIVAS', items: [
        { emoji: '😒', en: "<span class='hl-purple'>That sucks</span> = Isso é ruim", pt: 'Isso é uma droga' },
        { emoji: '🤮', en: "<span class='hl-purple'>Sketchy</span> = Suspeito", pt: 'Duvidoso/Estranho' },
        { emoji: '😤', en: "<span class='hl-purple'>Bummed</span> = Chateado", pt: 'Desanimado' }
      ]},
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'As 3 gírias que resolvem tudo:<br><br><strong>\"Cool!\"</strong> = OK, legal, entendi ✅<br><strong>\"Awesome!\"</strong> = Que bom! Demais! ✅<br><strong>\"That sucks\"</strong> = Que ruim ❌<br><br>Com essas 3, você se vira!' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Cara, isso é demais!":', options: ['Man, that is good!', 'Dude, that\'s awesome!', 'Boy, that is nice!'], correct: 1 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "That's _____! I love it!", correctWord: 'awesome' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '😎', text: 'Cool / Awesome = legal / demais' },
        { emoji: '👤', text: 'Dude / Bro = cara / mano' },
        { emoji: '🛋️', text: 'Chill = relaxar | Hang out = sair junto' },
        { emoji: '😒', text: 'That sucks = isso é ruim' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '😎', pt: 'Demais/Incrível', en: "Awesome", level: 1 },
      { emoji: '👍', pt: 'Legal', en: "Cool", level: 1 },
      { emoji: '👤', pt: 'Cara', en: "Dude", level: 1 },
      { emoji: '🛋️', pt: 'Relaxar', en: "Chill", level: 1 },
      { emoji: '👫', pt: 'Sair/Ficar junto', en: "Hang out", level: 1 },
      { emoji: '😒', pt: 'É ruim / É uma droga', en: "That sucks", level: 1 },
      { emoji: '🔥', pt: 'Muito bom', en: "Fire", level: 1 },
      { emoji: '💯', pt: 'Beleza/Combinado', en: "Bet", level: 1 },
      { emoji: '💪', pt: 'De verdade/Real', en: "Legit", level: 1 },
      { emoji: '🤮', pt: 'Suspeito/Estranho', en: "Sketchy", level: 2 },
      { emoji: '😤', pt: 'Chateado', en: "Bummed", level: 2 },
      { emoji: '👋', pt: 'Mano/Irmão', en: "Bro", level: 1 },
      { emoji: '💰', pt: 'Dinheiro (gíria)', en: "Buck (dollar)", level: 1 },
      { emoji: '🤣', pt: 'Engraçado demais', en: "Hilarious", level: 1 },
      { emoji: '😎', pt: 'Massa!', en: "Sick! (positive slang)", level: 2 },
      { emoji: '🏠', pt: 'Vamos sair?', en: "Wanna hang out?", level: 1 },
      { emoji: '🍕', pt: 'Que saco', en: "That sucks", level: 1 },
      { emoji: '✅', pt: 'Tá bom, beleza', en: "Sounds good / Bet", level: 1 },
      { emoji: '🤙', pt: 'De boa', en: "No worries", level: 1 },
      { emoji: '👊', pt: 'Valeu, cara', en: "Thanks, dude", level: 1 }
    ] },

  { id: 'exclamations', title: 'EXCLAMATIONS', emoji: '😲❗', description: 'Expressões de surpresa e reação', module: 6, order: 32, slides: [    { type: 'title', emoji: '😲❗', title: 'EXCLAMATIONS', subtitle: 'Expressões de reação' },
      { type: 'situation', emoji: '😲', cardClass: 'purple', text: 'Você vê algo incrível e reage:<br><br><strong>"Oh my God! No way!"</strong><br>(Meu Deus! Não acredito!)' },
      { type: 'rule', cardClass: 'cyan', text: 'Exclamações são reações automáticas a situações:', keyword: 'REACTIONS', keywordAfter: 'Wow! Oh no! Really? Come on!' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'REAÇÕES POSITIVAS', text: '<strong>Wow!</strong> = Uau!<br><strong>Awesome!</strong> = Demais!<br><strong>No way!</strong> = Não acredito!<br><strong>Really?!</strong> = Sério?!<br><strong>That\'s amazing!</strong> = Incrível!' },
      { type: 'example', cardClass: 'cyan', emoji: '😲', question: "<span class='hl-cyan'>Wow</span>! That's beautiful!", questionTr: 'Uau! Que lindo!', answer: "WOW = surpresa positiva", answerTr: 'Admiração' },
      { type: 'example', cardClass: 'cyan', emoji: '😱', question: "<span class='hl-cyan'>Oh no</span>! I forgot!", questionTr: 'Ah não! Esqueci!', answer: "OH NO = surpresa negativa", answerTr: 'Problema' },
      { type: 'example', cardClass: 'cyan', emoji: '😤', question: "<span class='hl-cyan'>Come on</span>! Hurry up!", questionTr: 'Anda logo! Se apresse!', answer: "COME ON = impaciência", answerTr: 'Apressando' },
      { type: 'examples', cardClass: 'cyan', title: '😲 SURPRESA', items: [
        { emoji: '🤯', en: "<span class='hl-cyan'>No way!</span>", pt: 'Não acredito!' },
        { emoji: '😮', en: "<span class='hl-cyan'>Seriously?!</span>", pt: 'Sério?!' },
        { emoji: '🤩', en: "<span class='hl-cyan'>That's incredible!</span>", pt: 'Isso é incrível!' },
        { emoji: '😲', en: "<span class='hl-cyan'>Are you kidding me?!</span>", pt: 'Tá brincando comigo?!' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '😤 FRUSTRAÇÃO', items: [
        { emoji: '🤦', en: "<span class='hl-purple'>Oh man!</span>", pt: 'Ah cara!' },
        { emoji: '😡', en: "<span class='hl-purple'>Give me a break!</span>", pt: 'Me poupe! / Pelo amor de Deus!' },
        { emoji: '😤', en: "<span class='hl-purple'>What the heck?!</span>", pt: 'Que diabos?!' },
        { emoji: '🙄', en: "<span class='hl-purple'>Whatever.</span>", pt: 'Tanto faz.' }
      ]},
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'As 5 reações mais universais:<br><br><strong>Wow!</strong> → impressionado<br><strong>Oh no!</strong> → algo ruim<br><strong>Really?</strong> → surpresa<br><strong>Come on!</strong> → vamos lá / anda logo<br><strong>Whatever.</strong> → tanto faz' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Reação de surpresa positiva:', options: ['Oh no!', 'Wow!', 'Whatever.'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tá brincando comigo?!":', options: ['Are you kidding me?!', 'Are you playing me?!', 'Are you joking at me?!'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "Oh _____! I forgot my wallet!", correctWord: 'no' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
        { emoji: '🤩', text: 'Wow! / Awesome! / No way! (positivo)' },
        { emoji: '😱', text: 'Oh no! / Oh man! (negativo)' },
        { emoji: '🤔', text: 'Really? / Seriously? (surpresa)' },
        { emoji: '😤', text: 'Come on! / Whatever. (impaciência)' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '🤩', pt: 'Uau!', en: "Wow!", level: 1 },
      { emoji: '😱', pt: 'Ah não!', en: "Oh no!", level: 1 },
      { emoji: '😤', pt: 'Anda logo!', en: "Come on!", level: 1 },
      { emoji: '🤯', pt: 'Não acredito!', en: "No way!", level: 1 },
      { emoji: '😮', pt: 'Sério?!', en: "Really?! / Seriously?!", level: 1 },
      { emoji: '🤩', pt: 'Incrível!', en: "That's amazing!", level: 1 },
      { emoji: '😲', pt: 'Tá brincando comigo?!', en: "Are you kidding me?!", level: 1 },
      { emoji: '🤦', pt: 'Ah cara!', en: "Oh man!", level: 1 },
      { emoji: '😡', pt: 'Me poupe!', en: "Give me a break!", level: 1 },
      { emoji: '🙄', pt: 'Tanto faz', en: "Whatever", level: 1 },
      { emoji: '😱', pt: 'Meu Deus!', en: "Oh my God!", level: 1 },
      { emoji: '👏', pt: 'Muito bom!', en: "Well done!", level: 1 },
      { emoji: '🎉', pt: 'Boa!', en: "Nice! / Great!", level: 1 },
      { emoji: '😬', pt: 'Ops!', en: "Oops!", level: 1 },
      { emoji: '🤔', pt: 'Hmm, deixa eu pensar', en: "Hmm, let me think", level: 1 },
      { emoji: '😤', pt: 'Que saco!', en: "Ugh! / That sucks!", level: 1 },
      { emoji: '😅', pt: 'Ainda bem!', en: "Thank God! / What a relief!", level: 1 },
      { emoji: '😮', pt: 'Jura?!', en: "For real?!", level: 1 },
      { emoji: '💪', pt: 'Vamos lá!', en: "Let's go!", level: 1 },
      { emoji: '✌️', pt: 'De boa!', en: "It\'s all good!", level: 1 }
    ] }
] as Lesson[];
