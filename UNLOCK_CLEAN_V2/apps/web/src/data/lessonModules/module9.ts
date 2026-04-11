import type { Lesson } from '@unlock2026/shared';

export const module9Lessons = [
  { id: 'construction-site', title: 'CONSTRUCTION SITE', emoji: '🏗️👷', description: 'Canteiro de obras', module: 9, order: 1,    slides: [
        { type: 'title', emoji: '🏗️👷', title: 'CONSTRUCTION SITE', subtitle: 'Canteiro de obras — vocabulario essencial' },
        { type: 'situation', emoji: '😰', cardClass: 'cyan', text: 'Primeiro dia na obra. O contractor fala rápido. Você precisa perguntar onde colocar coisas, avisar que acabou, pedir material. Essas frases são o básico que todo trabalhador de construcao precisa.' },
        { type: 'sequence-step', stepNumber: 1, totalSteps: 5, emoji: '🏗️', english: 'Where do I start?', portuguese: 'Onde eu começo?', breakdown: '<strong>WHERE DO I START</strong> = onde eu começo. Pergunta essencial no primeiro dia.' },
        { type: 'sequence-step', stepNumber: 2, totalSteps: 5, emoji: '👷', english: 'Start in the kitchen. The tile goes here.', portuguese: 'Começa na cozinha. O azulejo vai aqui.', breakdown: 'Repita em voz alta 3 vezes. A repetição é o que fixa a frase na memória.' },
        { type: 'sequence-step', stepNumber: 3, totalSteps: 5, emoji: '🔧', english: 'How many boxes?', portuguese: 'Quantos?', breakdown: '<strong>HOW MANY</strong> = quantos. Use com coisas contáveis (boxes, tiles, hours).' },
        { type: 'sequence-step', stepNumber: 4, totalSteps: 5, emoji: '✅', english: 'Use 10 boxes. And don\'t forget the grout.', portuguese: '10 caixas.', breakdown: '<strong>DON\'T FORGET</strong> = não esquece. Lembrete importante.' },
        { type: 'sequence-step', stepNumber: 5, totalSteps: 5, emoji: '🏗️', english: 'Got it.', portuguese: 'Entendi.', breakdown: '<strong>GOT IT</strong> = entendi. Resposta rápida — muito melhor que "I understand".' },
        { type: 'examples', cardClass: 'purple', title: '🔧 FERRAMENTAS ESSENCIAIS', revealOnHover: true, items: [
          { emoji: '📋', en: 'hammer', pt: 'martelo' },
          { emoji: '💬', en: 'drill', pt: 'furadeira/parafusadeira' },
          { emoji: '🔑', en: 'saw', pt: 'serra' },
          { emoji: '⚡', en: 'tape measure', pt: 'trena' },
          { emoji: '🎯', en: 'level', pt: 'nível' },
          { emoji: '📦', en: 'screwdriver', pt: 'chave de fenda' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🔧 MATERIAIS', revealOnHover: true, items: [
          { emoji: '📋', en: 'tile', pt: 'azulejo/piso' },
          { emoji: '💬', en: 'grout', pt: 'rejunte' },
          { emoji: '🔑', en: 'cement / mortar', pt: 'cimento/argamassa' },
          { emoji: '⚡', en: 'drywall', pt: 'gesso/drywall' },
          { emoji: '🎯', en: 'lumber / wood', pt: 'madeira' },
          { emoji: '📦', en: 'paint', pt: 'tinta' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '💬 FRASES NA OBRA', revealOnHover: true, items: [
          { emoji: '📋', en: 'Where do I put this?', pt: 'Onde coloco isso?' },
          { emoji: '💬', en: 'I need more tile.', pt: 'Preciso de mais piso.' },
          { emoji: '🔑', en: 'I\'m done with this area.', pt: 'Terminei essa area.' },
          { emoji: '⚡', en: 'Is this level?', pt: 'Isso ta nivelado?' },
          { emoji: '🎯', en: 'We need more material.', pt: 'Precisamos de mais material.' },
          { emoji: '📦', en: 'The drill is broken.', pt: 'A furadeira ta quebrada.' }
        ]},
        { type: 'examples', cardClass: 'gold', title: '📦 MEDIDAS (NOS EUA)', revealOnHover: true, items: [
          { emoji: '📋', en: 'Cut it to 4 feet.', pt: 'Corta com 4 pés.' },
          { emoji: '💬', en: 'It\'s 6 inches short.', pt: 'Ta faltando 6 polegadas.' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Como se diz "Martelo" em inglês?', options: ['Hammer', 'Drill', 'Saw'], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 O que significa "Tape measure"?', options: ['Chave de fenda', 'Nivel', 'Trena'], correct: 2 },
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Na obra, saiba o vocabulário das ferramentas:<br><br>🔨 <strong>Hammer</strong> = martelo<br>📏 <strong>Tape measure</strong> = trena<br>🧱 <strong>Tile</strong> = azulejo<br>⬜ <strong>Grout</strong> = rejunte<br>📐 <strong>Level</strong> = nível' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Give me the thing', leftNote: '', right: 'Give me the level', rightNote: 'Em inglês, seja específico. Aprenda os nomes.', explanation: '' },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a frase:', sentence: 'Don\'t forget the _____.', correctWord: 'grout' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - CONSTRUCTION SITE', items: [
          { emoji: '✅', text: 'Vocabulário de ferramentas e materiais' },
          { emoji: '✅', text: 'Frases com o contractor' },
          { emoji: '✅', text: 'Entender instruções na obra' },
          { emoji: '✅', text: 'Perguntar sobre quantidade' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '📋', pt: 'Martelo', en: 'Hammer', level: 1 },
        { emoji: '📋', pt: 'Furadeira', en: 'Drill', level: 1 },
        { emoji: '📋', pt: 'Serra', en: 'Saw', level: 1 },
        { emoji: '📋', pt: 'Trena', en: 'Tape measure', level: 1 },
        { emoji: '📋', pt: 'Nivel', en: 'Level', level: 1 },
        { emoji: '📋', pt: 'Chave de fenda', en: 'Screwdriver', level: 1 },
        { emoji: '🧱', pt: 'Azulejo/Piso', en: 'Tile', level: 1 },
        { emoji: '🧱', pt: 'Rejunte', en: 'Grout', level: 1 },
        { emoji: '📋', pt: 'Cimento', en: 'Cement / Mortar', level: 1 },
        { emoji: '📋', pt: 'Madeira', en: 'Lumber / Wood', level: 1 },
        { emoji: '📋', pt: 'Tinta', en: 'Paint', level: 1 },
        { emoji: '📋', pt: 'Drywall', en: 'Drywall', level: 1 },
        { emoji: '📍', pt: 'Onde coloco isso?', en: 'Where do I put this?', level: 1 },
        { emoji: '💡', pt: 'Preciso de mais material', en: 'I need more material', level: 1 },
        { emoji: '📋', pt: 'Terminei essa area', en: 'I\'m done with this area', level: 1 },
        { emoji: '❓', pt: 'Ta nivelado?', en: 'Is this level?', level: 1 },
        { emoji: '📋', pt: 'Ta quebrado', en: 'It\'s broken', level: 1 },
        { emoji: '📋', pt: 'Corta aqui', en: 'Cut here / Cut it here', level: 1 },
        { emoji: '📋', pt: 'Mede isso', en: 'Measure this', level: 1 },
        { emoji: '📋', pt: 'Levanta', en: 'Lift it up', level: 1 },
        { emoji: '📋', pt: 'Abaixa', en: 'Put it down', level: 1 },
        { emoji: '📋', pt: 'Carrega no caminhão', en: 'Load it on the truck', level: 1 },
        { emoji: '📋', pt: 'Limpa a area', en: 'Clean up the area', level: 1 },
        { emoji: '⚠️', pt: 'Cuidado!', en: 'Watch out! / Be careful!', level: 1 },
        { emoji: '📋', pt: '4 pés', en: '4 feet', level: 1 },
        { emoji: '📋', pt: '6 polegadas', en: '6 inches', level: 1 },
        { emoji: '📋', pt: 'Coloca o colete', en: 'Put on your vest', level: 1 }
      ]
    },

  { id: 'hardware-store', title: 'Hardware Store', emoji: '🔧🏪', description: 'Loja de ferramentas', module: 9, order: 2,    slides: [
        { type: 'title', emoji: '🔧🏪', title: 'HARDWARE STORE', subtitle: 'Loja de ferramentas' },
        { type: 'situation', emoji: '🔨', cardClass: 'purple', text: 'Você precisa de um martelo.<br>Vai à Home Depot ou Lowe\'s.<br><br>Como pedir o que você precisa?' },
        { type: 'rule', cardClass: 'cyan', text: 'Frases úteis na loja de ferramentas:', keyword: 'DO YOU HAVE...? | I NEED...', keywordAfter: 'Perguntar e pedir!' },
        { type: 'tip', cardClass: 'gold', icon: '🔨', title: 'FERRAMENTAS COMUNS', text: '<strong>Hammer</strong> = Martelo<br><strong>Screwdriver</strong> = Chave de fenda<br><strong>Wrench</strong> = Chave inglesa<br><strong>Drill</strong> = Furadeira' },
        { type: 'example', cardClass: 'cyan', emoji: '🔨', question: "Do you have a <span class='hl-cyan'>hammer</span>?", questionTr: 'Você tem martelo?', answer: '(DO YOU HAVE = vocês têm)', answerTr: 'Perguntando' },
        { type: 'example', cardClass: 'green', emoji: '🪛', question: "I'm looking for a <span class='hl-green'>screwdriver</span>.", questionTr: 'Estou procurando chave de fenda.', answer: "(I'M LOOKING FOR = estou procurando)", answerTr: 'Buscando' },
        { type: 'example', cardClass: 'orange', emoji: '📍', question: "Where can I find <span class='hl-orange'>nails</span>?", questionTr: 'Onde posso encontrar pregos?', answer: '(WHERE CAN I FIND = onde encontro)', answerTr: 'Localizando' },
        { type: 'examples', cardClass: 'cyan', title: '🔨 FERRAMENTAS', items: [
          { emoji: '🔨', en: '<span class="hl-cyan">Hammer</span>', pt: 'Martelo' },
          { emoji: '🪛', en: '<span class="hl-cyan">Screwdriver</span>', pt: 'Chave de fenda' },
          { emoji: '🔧', en: '<span class="hl-cyan">Wrench</span>', pt: 'Chave inglesa' },
          { emoji: '🔩', en: '<span class="hl-cyan">Drill</span>', pt: 'Furadeira' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📍 MATERIAIS', items: [
          { emoji: '📍', en: '<span class="hl-green">Nails</span>', pt: 'Pregos' },
          { emoji: '🔩', en: '<span class="hl-green">Screws</span>', pt: 'Parafusos' },
          { emoji: '💡', en: '<span class="hl-green">Light bulb</span>', pt: 'Lâmpada' },
          { emoji: '🔌', en: '<span class="hl-green">Extension cord</span>', pt: 'Extensão' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '❓', title: 'PERGUNTAS ÚTEIS', text: '<strong>Where is the... aisle?</strong><br>Onde é o corredor de...?<br><br><strong>Do you have this in a different size?</strong><br>Tem isso em outro tamanho?' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ CUIDADO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'PORTUGUÊS', rightLabel: 'INGLÊS', left: 'Chave de fenda', leftNote: 'Tradução literal não funciona', right: '<span class="hl-cyan">Screwdriver</span>', rightNote: 'Ferramenta de parafusar', explanation: 'Aprenda os nomes específicos!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Chave de fenda":', options: ['Key of crack', 'Screwdriver', 'Screw key'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Pregos":', options: ['Nails', 'Screws', 'Pins'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I'm _____ for a hammer.", correctWord: 'looking' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - FERRAMENTAS', items: [
          { emoji: '🔨', text: '<strong>Hammer</strong> = martelo' },
          { emoji: '🪛', text: '<strong>Screwdriver</strong> = chave de fenda' },
          { emoji: '🔧', text: '<strong>Wrench</strong> = chave inglesa' },
          { emoji: '📍', text: '<strong>Nails</strong> = pregos' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🔨', pt: 'Martelo', en: 'Hammer' }, { emoji: '🪛', pt: 'Chave de fenda', en: 'Screwdriver' },
        { emoji: '🔧', pt: 'Chave inglesa', en: 'Wrench' }, { emoji: '📍', pt: 'Pregos', en: 'Nails' },
        { emoji: '🔩', pt: 'Parafusos', en: 'Screws' }, { emoji: '🪚', pt: 'Serra', en: 'Saw' },
        { emoji: '📏', pt: 'Fita métrica', en: 'Tape measure' }, { emoji: '🧰', pt: 'Caixa de ferramentas', en: 'Toolbox' },
        { emoji: '💡', pt: 'Lâmpada', en: 'Light bulb' }, { emoji: '🔌', pt: 'Extensão', en: 'Extension cord' },
      ]
    },

  { id: 'materials-supplies', title: 'Materials & Supplies', emoji: '📦🛒', description: 'Materiais e suprimentos', module: 9, order: 3,    slides: [
        { type: 'title', emoji: '📦🛒', title: 'MATERIALS & SUPPLIES', subtitle: 'Materiais e suprimentos' },
        { type: 'situation', emoji: '🪵', cardClass: 'purple', text: 'Você está fazendo um projeto.<br>Precisa de madeira, tinta, cola...<br><br>Vocabulário de materiais!' },
        { type: 'rule', cardClass: 'cyan', text: 'Materiais básicos:', keyword: 'WOOD | METAL | PLASTIC | GLASS', keywordAfter: 'Madeira, Metal, Plástico, Vidro' },
        { type: 'example', cardClass: 'cyan', emoji: '🪵', question: "I need some <span class='hl-cyan'>wood</span>.", questionTr: 'Preciso de madeira.', answer: '(WOOD = madeira)', answerTr: 'Material' },
        { type: 'example', cardClass: 'green', emoji: '🎨', question: "Do you have <span class='hl-green'>paint</span>?", questionTr: 'Vocês têm tinta?', answer: '(PAINT = tinta)', answerTr: 'Material' },
        { type: 'example', cardClass: 'orange', emoji: '🧪', question: "I need some <span class='hl-orange'>glue</span>.", questionTr: 'Preciso de cola.', answer: '(GLUE = cola)', answerTr: 'Suprimento' },
        { type: 'examples', cardClass: 'cyan', title: '🏗️ MATERIAIS', items: [
          { emoji: '🪵', en: '<span class="hl-cyan">Wood</span>', pt: 'Madeira' },
          { emoji: '🔩', en: '<span class="hl-cyan">Metal</span>', pt: 'Metal' },
          { emoji: '🧴', en: '<span class="hl-cyan">Plastic</span>', pt: 'Plástico' },
          { emoji: '🪟', en: '<span class="hl-cyan">Glass</span>', pt: 'Vidro' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🎨 SUPRIMENTOS', items: [
          { emoji: '🎨', en: '<span class="hl-green">Paint</span>', pt: 'Tinta' },
          { emoji: '🧪', en: '<span class="hl-green">Glue</span>', pt: 'Cola' },
          { emoji: '🧷', en: '<span class="hl-green">Tape</span>', pt: 'Fita' },
          { emoji: '🧵', en: '<span class="hl-green">Rope</span>', pt: 'Corda' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '📦 MAIS ITENS', items: [
          { emoji: '📦', en: '<span class="hl-orange">Cardboard</span>', pt: 'Papelão' },
          { emoji: '🧻', en: '<span class="hl-orange">Paper</span>', pt: 'Papel' },
          { emoji: '🧱', en: '<span class="hl-orange">Brick</span>', pt: 'Tijolo' },
          { emoji: '🏗️', en: '<span class="hl-orange">Concrete</span>', pt: 'Concreto' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '📏', title: 'MEDIDAS', text: '<strong>How much do you need?</strong><br>Quanto você precisa?<br><br><strong>I need 10 feet of...</strong><br>Preciso de 10 pés de...<br><br>1 foot ≈ 30cm' },
        { type: 'tip', cardClass: 'purple', icon: '🎨', title: 'CORES DE TINTA', text: '<strong>What color paint?</strong><br>Que cor de tinta?<br><br>White, Black, Blue, Red, Green, Yellow, Brown, Gray...' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Cola":', options: ['Glue', 'Stick', 'Paste'], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Madeira":', options: ['Tree', 'Wood', 'Wooden'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'I need some _____ to fix this.', correctWord: 'glue' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - MATERIAIS', items: [
          { emoji: '🪵', text: '<strong>Wood</strong> = madeira' },
          { emoji: '🎨', text: '<strong>Paint</strong> = tinta' },
          { emoji: '🧪', text: '<strong>Glue</strong> = cola' },
          { emoji: '🧷', text: '<strong>Tape</strong> = fita' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🪵', pt: 'Madeira', en: 'Wood' }, { emoji: '🔩', pt: 'Metal', en: 'Metal' },
        { emoji: '🧴', pt: 'Plástico', en: 'Plastic' }, { emoji: '🪟', pt: 'Vidro', en: 'Glass' },
        { emoji: '🎨', pt: 'Tinta', en: 'Paint' }, { emoji: '📦', pt: 'Papelão', en: 'Cardboard' },
        { emoji: '🧻', pt: 'Papel', en: 'Paper' }, { emoji: '🧷', pt: 'Fita', en: 'Tape' },
        { emoji: '🧪', pt: 'Cola', en: 'Glue' }, { emoji: '🧵', pt: 'Corda', en: 'Rope' },
      ]
    },

  { id: 'tile-flooring', title: 'Tile & Flooring', emoji: '🪨🔨', description: 'Piso e revestimento', module: 9, order: 4,    slides: [
        { type: 'title', emoji: '🪨🔨', title: 'TILE & FLOORING', subtitle: 'O vocabulário do piso e revestimento' },
        { type: 'situation', emoji: '🪨', cardClass: 'purple', text: 'Você trabalha com piso. O contractor americano<br>fala "thinset", "grout", "spacers"...<br><br>Essas palavras NÃO existem no inglês de escola.<br>Mas são o PÃO DE CADA DIA do tile!' },
        { type: 'tip', cardClass: 'gold', icon: '🔑', title: 'VOCABULÁRIO-CHAVE DO TILE', text: '<strong>Thinset / Mortar</strong> = Argamassa<br><strong>Grout</strong> = Rejunte<br><strong>Spacers</strong> = Espaçadores<br><strong>Level</strong> = Nivelado<br><strong>Blade</strong> = Disco da serra<br><br>Decore esses 5 e você já entende 80% da obra!' },
        { type: 'rule', cardClass: 'cyan', text: 'Frases mais usadas no tile:', keyword: 'MEASURE / CUT / LEVEL / DRY', keywordAfter: 'Medir, Cortar, Nivelar, Secar' },
        { type: 'example', cardClass: 'cyan', emoji: '📏', question: 'I need to <span class="hl-cyan">measure</span>.', questionTr: 'Preciso medir.', answer: '"Measure twice, cut once!"', answerTr: 'Mede 2x, corta 1! (ditado americano)' },
        { type: 'example', cardClass: 'orange', emoji: '✂️', question: '<span class="hl-orange">Cut</span> here.', questionTr: 'Corta aqui.', answer: '"How big?" / "What angle?"', answerTr: 'Que tamanho? / Que ângulo?' },
        { type: 'example', cardClass: 'green', emoji: '📐', question: 'Is it <span class="hl-green">level</span>?', questionTr: 'Tá nivelado?', answer: '"Yes." / "No, fix it."', answerTr: 'Sim. / Não, arruma.' },
        { type: 'examples', cardClass: 'cyan', title: '🪨 MATERIAL E PROCESSO', items: [
          { emoji: '🪣', en: 'Spread the <span class="hl-cyan">thinset</span>.', pt: 'Passa a argamassa.' },
          { emoji: '➕', en: 'I need <span class="hl-cyan">spacers</span>.', pt: 'Preciso de espaçadores.' },
          { emoji: '🪣', en: 'Time for the <span class="hl-cyan">grout</span>.', pt: 'Hora do rejunte.' },
          { emoji: '🔄', en: 'I need to <span class="hl-cyan">replace</span> this one.', pt: 'Preciso trocar esse.' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '⚠️ PROBLEMAS COMUNS', items: [
          { emoji: '💔', en: 'The tile <span class="hl-orange">cracked</span>.', pt: 'O piso rachou.' },
          { emoji: '🪚', en: 'The saw has no <span class="hl-orange">blade</span>.', pt: 'A serra tá sem disco.' },
          { emoji: '📊', en: 'How much more do we <span class="hl-orange">need</span>?', pt: 'Quanto de material falta?' },
          { emoji: '🔄', en: 'The client wants to <span class="hl-orange">change</span>.', pt: 'O cliente quer mudar.' }
        ]},
        { type: 'tip', cardClass: 'red', icon: '🚫', title: 'SEGURANÇA NO TILE', text: '<strong>"Don\'t step there!"</strong> = Não pisa aí!<br>(quando o piso tá secando)<br><br><strong>"Careful, it\'s sharp!"</strong> = Cuidado, tá afiado!<br>(perto da serra ou piso cortado)<br><br>Se alguém falar isso pra VOCÊ → PARA na hora!' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA DO TILE', text: '<strong>Thinset</strong> → "TIN-sét" (o TH vira T, tá ok)<br><strong>Grout</strong> → "GRÁUT" (rima com "out")<br><strong>Level</strong> → "LÉ-vól"<br><strong>Blade</strong> → "BLÉID"<br><strong>Measure</strong> → "MÉ-jur"' },
        { type: 'comparison', cardClass: 'cyan', title: '🇧🇷 vs 🇺🇸 TERMOS DO TILE', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Argamassa<br>Rejunte<br>Espaçador', leftNote: 'Termos brasileiros', right: 'Thinset / Mortar<br>Grout<br>Spacers', rightNote: 'Termos americanos', explanation: 'Não tente traduzir — decore os termos americanos direto!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 O contractor fala "Apply the thinset." O que ele quer?', options: ['Limpar o piso', 'Passar a argamassa', 'Cortar o piso'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Como pedir espaçadores?', options: ['I need spacers', 'I need separators', 'I need gaps'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'The tile _____. I need to replace it.', correctWord: 'cracked' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - TILE', items: [
          { emoji: '🪣', text: '<strong>Thinset / Mortar</strong> = argamassa' },
          { emoji: '🪣', text: '<strong>Grout</strong> = rejunte' },
          { emoji: '📐', text: '<strong>Level</strong> = nivelado' },
          { emoji: '📏', text: '<strong>Measure twice, cut once!</strong>' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '📏', pt: 'Preciso medir', en: 'I need to measure', level: 1 },
        { emoji: '📐', pt: 'Qual o tamanho do piso?', en: 'What size is the tile?', level: 1 },
        { emoji: '✂️', pt: 'Corta aqui', en: 'Cut here', level: 1 },
        { emoji: '🪣', pt: 'Passa a argamassa', en: 'Spread the thinset', level: 1 },
        { emoji: '➕', pt: 'Preciso de espaçador', en: 'I need spacers', level: 1 },
        { emoji: '🪣', pt: 'O rejunte', en: 'The grout', level: 1 },
        { emoji: '📐', pt: 'Tá nivelado?', en: 'Is it level?', level: 1 },
        { emoji: '🪨', pt: 'Preciso de mais piso', en: 'I need more tile', level: 1 },
        { emoji: '✂️', pt: 'Onde corto?', en: 'Where do I cut?', level: 1 },
        { emoji: '🪚', pt: 'A serra tá sem disco', en: 'The saw has no blade', level: 1 },
        { emoji: '🪚', pt: 'Posso usar a serra?', en: 'Can I use the saw?', level: 1 },
        { emoji: '💔', pt: 'O piso rachou', en: 'The tile cracked', level: 1 },
        { emoji: '🔄', pt: 'Preciso trocar esse', en: 'I need to replace this one', level: 1 },
        { emoji: '📊', pt: 'Quanto de material falta?', en: 'How much more do we need?', level: 1 },
        { emoji: '🎨', pt: 'Qual padrão?', en: 'What pattern?', level: 1 },
        { emoji: '🏁', pt: 'Começo por onde?', en: 'Where do I start?', level: 1 },
        { emoji: '🔄', pt: 'O cliente quer mudar', en: 'The client wants to change', level: 1 },
        { emoji: '⏱️', pt: 'Quanto tempo pra secar?', en: 'How long to dry?', level: 1 },
        { emoji: '🚫', pt: 'Não pisa aí', en: "Don't step there", level: 1 },
        { emoji: '⚠️', pt: 'Cuidado, tá afiado', en: "Careful, it's sharp", level: 1 }
      ]
    },

  { id: 'landscaping-yard', title: 'Landscaping & Yard', emoji: '🌿🏡', description: 'Jardinagem e quintal', module: 9, order: 5,    slides: [
        { type: 'title', emoji: '🌿🏡', title: 'LANDSCAPING & YARD', subtitle: 'Jardinagem e quintal' },
        { type: 'situation', emoji: '🌿', cardClass: 'purple', text: 'Você faz landscaping na casa de um americano.<br>Ele aponta pro jardim e fala rápido...<br>"Mow the lawn", "pull the weeds"...<br><br>Vocabulário que NENHUM curso ensina!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'CULTURA AMERICANA: O JARDIM', text: 'Nos EUA, o <strong>jardim é sagrado!</strong> 🏡<br><br>Americanos gastam em média <strong>$500/mês</strong> com lawn care.<br>Se fizer um bom trabalho, te indicam pros vizinhos.<br><br><strong>Word of mouth</strong> (boca a boca) é TUDO nesse mercado!' },
        { type: 'rule', cardClass: 'green', text: 'Frases essenciais de landscaping:', keyword: 'MOW / TRIM / PLANT / WEED', keywordAfter: 'Cortar grama, Podar, Plantar, Tirar mato' },
        { type: 'example', cardClass: 'green', emoji: '🌱', question: '<span class="hl-green">Mow</span> the lawn.', questionTr: 'Corta a grama.', answer: '(MOW = cortar com máquina)', answerTr: '"Cut the grass" também funciona.' },
        { type: 'example', cardClass: 'cyan', emoji: '🌿', question: 'Remove these <span class="hl-cyan">weeds</span>.', questionTr: 'Tira esse mato.', answer: '(WEEDS = mato, erva daninha)', answerTr: '"Pull the weeds" = arrancar o mato' },
        { type: 'example', cardClass: 'orange', emoji: '✂️', question: 'Can you <span class="hl-orange">trim</span> this tree?', questionTr: 'Pode podar essa árvore?', answer: '(TRIM = podar, aparar)', answerTr: 'Também serve pra cerca e arbusto.' },
        { type: 'examples', cardClass: 'green', title: '🛠️ EQUIPAMENTO E MATERIAL', items: [
          { emoji: '🍃', en: 'I need the <span class="hl-green">blower</span>.', pt: 'Preciso do soprador.' },
          { emoji: '💦', en: 'The <span class="hl-green">hose</span> is leaking.', pt: 'A mangueira tá furada.' },
          { emoji: '🚰', en: 'Where do I turn on the <span class="hl-green">water</span>?', pt: 'Onde ligo a água?' },
          { emoji: '🧪', en: 'I need <span class="hl-green">fertilizer</span>.', pt: 'Preciso de fertilizante.' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '❓ PERGUNTAS PRO CLIENTE', items: [
          { emoji: '🌺', en: '<span class="hl-orange">Plant</span> here?', pt: 'Planta aqui?' },
          { emoji: '🪴', en: 'How much <span class="hl-orange">soil</span>?', pt: 'Quanto de terra?' },
          { emoji: '🐕', en: 'Does the dog <span class="hl-orange">bite</span>?', pt: 'O cachorro é bravo?' },
          { emoji: '🔒', en: 'The gate is <span class="hl-orange">locked</span>.', pt: 'O portão tá trancado.' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>Mow</strong> → "MÔU" (rima com "go")<br><strong>Lawn</strong> → "LÓN" (rima com "on")<br><strong>Weed</strong> → "UÍID" (i longo)<br><strong>Trim</strong> → "TRIM" (como "trip" com M)<br><strong>Blower</strong> → "BLÔU-ur"' },
        { type: 'comparison', cardClass: 'green', title: '🇧🇷 vs 🇺🇸 JARDIM', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: '"Corta a grama"<br>Uma frase só, simples', leftNote: 'Genérico', right: '"Mow the lawn"<br>(com máquina, específico)', rightNote: 'Termo profissional', explanation: '"Cut the grass" funciona no dia a dia, mas "mow" é mais profissional.' },
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'DICA DE NEGÓCIO', text: '<strong>Brasileiros dominam o landscaping nos EUA!</strong><br><br>Trabalho bem feito → indicação pros vizinhos.<br>Aprenda a falar: "Here\'s my card."<br>= Aqui está meu cartão.<br><br>"I can come every week."<br>= Posso vir toda semana.' },
        { type: 'quiz', cardClass: 'green', question: '🎯 "Cortar a grama" em inglês profissional:', options: ['Cut the green', 'Mow the lawn', 'Trim the garden'], correct: 1 },
        { type: 'quiz', cardClass: 'green', question: '🎯 O cliente aponta pro mato e diz "Pull the weeds." O que fazer?', options: ['Regar as plantas', 'Arrancar o mato', 'Podar a árvore'], correct: 1 },
        { type: 'fill-blank', cardClass: 'green', prompt: '✍️ Complete:', sentence: 'Can you _____ this tree?', correctWord: 'trim' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🌱', text: '<strong>Mow the lawn</strong> = cortar a grama' },
          { emoji: '🌿', text: '<strong>Weeds</strong> = mato / erva daninha' },
          { emoji: '✂️', text: '<strong>Trim</strong> = podar, aparar' },
          { emoji: '💡', text: 'Boca a boca é TUDO nesse mercado!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🌱', pt: 'Corta a grama', en: 'Mow the lawn', level: 1 },
        { emoji: '🗑️', pt: 'Onde jogo o lixo?', en: 'Where do I throw the trash?', level: 1 },
        { emoji: '🍃', pt: 'Preciso do soprador', en: 'I need the blower', level: 1 },
        { emoji: '💦', pt: 'A mangueira tá furada', en: 'The hose is leaking', level: 1 },
        { emoji: '🚰', pt: 'Onde ligo a água?', en: 'Where do I turn on the water?', level: 1 },
        { emoji: '🌺', pt: 'Planta aqui?', en: 'Plant here?', level: 1 },
        { emoji: '🪴', pt: 'Quanto de terra?', en: 'How much soil?', level: 1 },
        { emoji: '🌿', pt: 'Tira esse mato', en: 'Remove these weeds', level: 1 },
        { emoji: '⚙️', pt: 'Posso usar a máquina?', en: 'Can I use the machine?', level: 1 },
        { emoji: '🔒', pt: 'O portão tá trancado', en: 'The gate is locked', level: 1 },
        { emoji: '🐕', pt: 'O cachorro é bravo?', en: 'Does the dog bite?', level: 1 },
        { emoji: '🌳', pt: 'Cuidado com a raiz', en: 'Watch out for the root', level: 1 },
        { emoji: '🧹', pt: 'Limpa a calçada', en: 'Clean the sidewalk', level: 1 },
        { emoji: '💦', pt: 'O irrigador quebrou', en: 'The sprinkler broke', level: 1 },
        { emoji: '🧪', pt: 'Preciso de fertilizante', en: 'I need fertilizer', level: 1 },
        { emoji: '✂️', pt: 'Pode podar essa árvore?', en: 'Can you trim this tree?', level: 1 },
        { emoji: '🚪', pt: 'Onde é a entrada dos fundos?', en: 'Where is the back entrance?', level: 1 },
        { emoji: '🔌', pt: 'Tem tomada aqui fora?', en: 'Is there an outlet outside?', level: 1 }
      ]
    },

  { id: 'painting', title: 'Painting', emoji: '🎨🖌️', description: 'Pintura', module: 9, order: 6,    slides: [
        { type: 'title', emoji: '🎨🖌️', title: 'PAINTING', subtitle: 'Pintura — O vocabulário do pintor profissional' },
        { type: 'situation', emoji: '🎨', cardClass: 'purple', text: 'Pintar casa nos EUA paga BEM.<br>Mas você precisa saber pedir material,<br>falar sobre demãos e preparação.<br><br>Profissionalismo começa no vocabulário!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'DICA DE PROFISSIONAL', text: 'Nos EUA, pintor <strong>prepara</strong> a parede ANTES:<br><br>1. <strong>Sand</strong> = Lixar<br>2. <strong>Tape</strong> = Colocar fita (masking tape)<br>3. <strong>Cover the floor</strong> = Cobrir o chão<br>4. <strong>Prime</strong> = Passar primer<br><br>Cliente vê preparação → confia em você!' },
        { type: 'rule', cardClass: 'purple', text: 'Vocabulário de pintura:', keyword: 'COAT / BRUSH / ROLLER / DRY', keywordAfter: 'Demão, Pincel, Rolo, Secar' },
        { type: 'example', cardClass: 'purple', emoji: '1️⃣', question: '<span class="hl-purple">First coat</span>.', questionTr: 'Primeira demão.', answer: '"Let it dry, then second coat."', answerTr: 'Deixa secar, depois segunda demão.' },
        { type: 'example', cardClass: 'cyan', emoji: '🎨', question: 'What <span class="hl-cyan">color</span>?', questionTr: 'Que cor?', answer: '"The client chose beige."', answerTr: 'O cliente escolheu bege.' },
        { type: 'example', cardClass: 'orange', emoji: '🪣', question: "We're <span class=\"hl-orange\">out of</span> paint.", questionTr: 'A tinta acabou.', answer: '(OUT OF = acabou, ficou sem)', answerTr: 'Funciona pra qualquer material!' },
        { type: 'examples', cardClass: 'purple', title: '🖌️ FERRAMENTAS E MATERIAIS', items: [
          { emoji: '🖌️', en: 'I need a <span class="hl-purple">roller</span>.', pt: 'Preciso de rolo.' },
          { emoji: '🖌️', en: 'I need a <span class="hl-purple">brush</span>.', pt: 'Preciso de pincel.' },
          { emoji: '📎', en: 'I need <span class="hl-purple">tape</span>.', pt: 'Preciso de fita.' },
          { emoji: '🪣', en: '<span class="hl-purple">Paint can</span> / Bucket.', pt: 'Lata / Balde de tinta.' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📋 PROCESSO DE PINTURA', items: [
          { emoji: '📄', en: '<span class="hl-green">Sand</span> it first.', pt: 'Lixa antes.' },
          { emoji: '📰', en: '<span class="hl-green">Cover</span> the floor.', pt: 'Cobre o chão.' },
          { emoji: '📎', en: '<span class="hl-green">Remove</span> the tape.', pt: 'Tira a fita.' },
          { emoji: '👆', en: 'Is it <span class="hl-green">dry</span>?', pt: 'Tá seco?' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>Coat</strong> → "CÔUT" (rima com "boat")<br><strong>Roller</strong> → "RÔU-lur"<br><strong>Brush</strong> → "BRÁSH"<br><strong>Sand</strong> → "SÉND" (lixar)<br><strong>Dry</strong> → "DRÁI"' },
        { type: 'comparison', cardClass: 'purple', title: '🇧🇷 vs 🇺🇸 PINTURA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'PORTUGUÊS', rightLabel: 'INGLÊS', left: '"Primeira demão"<br>Uma expressão', leftNote: 'Uma frase', right: '"First coat"<br>Coat = camada', rightNote: 'COAT = demão', explanation: '"Second coat" = segunda demão. Simples!' },
        { type: 'quiz', cardClass: 'purple', question: '🎯 O cliente pergunta "Is it dry?" Ele quer saber:', options: ['Se tá limpo', 'Se tá seco', 'Se tá pronto'], correct: 1 },
        { type: 'quiz', cardClass: 'purple', question: '🎯 "A tinta acabou" em inglês:', options: ["We're out of paint", 'The paint is over', 'No more the paint'], correct: 0 },
        { type: 'fill-blank', cardClass: 'purple', prompt: '✍️ Complete:', sentence: "We're _____ of paint.", correctWord: 'out' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PINTURA', items: [
          { emoji: '1️⃣', text: '<strong>First coat</strong> = primeira demão' },
          { emoji: '🖌️', text: '<strong>Roller</strong> = rolo / <strong>Brush</strong> = pincel' },
          { emoji: '🪣', text: "<strong>We're out of...</strong> = acabou o..." },
          { emoji: '⭐', text: 'Preparação mostra PROFISSIONALISMO!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🎨', pt: 'Que cor?', en: 'What color?', level: 1 },
        { emoji: '📎', pt: 'Preciso de fita', en: 'I need tape', level: 1 },
        { emoji: '1️⃣', pt: 'Primeira demão', en: 'First coat', level: 1 },
        { emoji: '2️⃣', pt: 'Segunda demão', en: 'Second coat', level: 1 },
        { emoji: '👆', pt: 'Tá seco?', en: 'Is it dry?', level: 1 },
        { emoji: '🖌️', pt: 'Preciso de rolo', en: 'I need a roller', level: 1 },
        { emoji: '🖌️', pt: 'Preciso de pincel', en: 'I need a brush', level: 1 },
        { emoji: '📰', pt: 'Cobre o chão', en: 'Cover the floor', level: 1 },
        { emoji: '📎', pt: 'Tira a fita', en: 'Remove the tape', level: 1 },
        { emoji: '💧', pt: 'Tá escorrendo', en: "It\'s dripping", level: 1 },
        { emoji: '🪣', pt: 'A tinta acabou', en: "We're out of paint", level: 1 },
        { emoji: '🪣', pt: 'Lata de tinta', en: 'Paint can', level: 1 },
        { emoji: '📄', pt: 'Lixa antes', en: 'Sand it first', level: 1 },
        { emoji: '🧱', pt: 'Tem que preparar a parede', en: 'You have to prep the wall', level: 1 },
        { emoji: '📊', pt: 'Quanto de tinta precisa?', en: 'How much paint do we need?', level: 1 }
      ]
    },

  { id: 'cleaning-jobs', title: 'Cleaning Jobs', emoji: '🧹✨', description: 'Trabalho de limpeza', module: 9, order: 7,    slides: [
        { type: 'title', emoji: '🧹✨', title: 'CLEANING JOBS', subtitle: 'Trabalho de limpeza — Kit de sobrevivência' },
        { type: 'situation', emoji: '🧹', cardClass: 'purple', text: 'Limpeza residencial é um dos trabalhos<br>mais comuns pra brasileiras nos EUA.<br>A dona da casa explica em inglês rápido...<br><br>Essas frases são seu KIT DE SOBREVIVÊNCIA!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'DIFERENÇAS CULTURAIS', text: '🇧🇷 No Brasil: a patroa fica em casa e vai mostrando<br>🇺🇸 Nos EUA: o cliente geralmente <strong>SAI de casa</strong><br><br>Ela deixa instruções por <strong>texto</strong> ou papel.<br>Se tiver dúvida, manda mensagem ANTES de fazer.<br><br>"Should I clean under the bed?"<br>= Limpo embaixo da cama?' },
        { type: 'rule', cardClass: 'cyan', text: 'As ferramentas de limpeza:', keyword: 'VACUUM / MOP / BROOM / SUPPLIES', keywordAfter: 'Aspirador, Esfregão, Vassoura, Materiais' },
        { type: 'example', cardClass: 'cyan', emoji: '🧴', question: 'Where are the cleaning <span class="hl-cyan">supplies</span>?', questionTr: 'Onde é o material de limpeza?', answer: '"Under the sink." / "In the closet."', answerTr: 'Embaixo da pia. / No armário.' },
        { type: 'example', cardClass: 'green', emoji: '✅', question: 'This area is <span class="hl-green">done</span>.', questionTr: 'Essa área tá pronta.', answer: '(DONE = pronto, acabado)', answerTr: 'Use pra cada cômodo que terminar.' },
        { type: 'example', cardClass: 'orange', emoji: '♻️', question: '<span class="hl-orange">Recycling</span> or regular trash?', questionTr: 'Reciclável ou lixo normal?', answer: '(Pergunta IMPORTANTE nos EUA!)', answerTr: 'Americanos separam lixo. Pergunte!' },
        { type: 'examples', cardClass: 'cyan', title: '🧹 FERRAMENTAS', items: [
          { emoji: '🧹', en: '<span class="hl-cyan">Vacuum</span>', pt: 'Aspirador' },
          { emoji: '🧹', en: '<span class="hl-cyan">Mop</span>', pt: 'Esfregão' },
          { emoji: '🧹', en: '<span class="hl-cyan">Broom</span>', pt: 'Vassoura' },
          { emoji: '🪣', en: '<span class="hl-cyan">Bucket</span>', pt: 'Balde' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '❓ PERGUNTAS ÚTEIS', items: [
          { emoji: '🪑', en: 'Can I <span class="hl-orange">move</span> the furniture?', pt: 'Posso mover os móveis?' },
          { emoji: '⚠️', en: 'Are you <span class="hl-orange">allergic</span> to any product?', pt: 'Tem alergia a algum produto?' },
          { emoji: '❓', en: 'What part is <span class="hl-orange">left</span> to clean?', pt: 'Falta limpar qual parte?' },
          { emoji: '🗑️', en: "We're <span class=\"hl-orange\">out of</span> trash bags.", pt: 'Acabou o saco de lixo.' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>Vacuum</strong> → "VÉ-quium"<br><strong>Mop</strong> → "MÓP"<br><strong>Broom</strong> → "BRUUM"<br><strong>Supplies</strong> → "su-PLÁIS"<br><strong>Bleach</strong> → "BLÍITCH" (água sanitária)' },
        { type: 'comparison', cardClass: 'cyan', title: '💰 TIPOS DE LIMPEZA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🧹', rightIcon: '✨', leftLabel: 'REGULAR CLEANING', rightLabel: 'DEEP CLEANING', left: 'Limpeza normal<br>Semanal ou quinzenal', leftNote: '$100-200', right: 'Faxina pesada<br>Dentro de armários, atrás de móveis', rightNote: '$200-400+', explanation: '"Deep cleaning" = faxina pesada. Cobra MAIS! Avise o preço antes.' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 A cliente sai de casa e você tem dúvida. O que faz?', options: ['Faz do seu jeito', 'Manda mensagem perguntando', 'Espera ela voltar'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Aspirador" em inglês:', options: ['Aspirator', 'Vacuum', 'Cleaner machine'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Where are the cleaning _____?', correctWord: 'supplies' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🧹', text: '<strong>Vacuum</strong> = aspirador' },
          { emoji: '🧹', text: '<strong>Mop</strong> = esfregão / <strong>Broom</strong> = vassoura' },
          { emoji: '♻️', text: 'Nos EUA, separe o lixo reciclável!' },
          { emoji: '💰', text: '<strong>Deep cleaning</strong> = faxina (cobra mais!)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🧴', pt: 'Onde é o material de limpeza?', en: 'Where are the cleaning supplies?', level: 1 },
        { emoji: '🧻', pt: 'Preciso de pano', en: 'I need a cloth', level: 1 },
        { emoji: '🪣', pt: 'Balde', en: 'Bucket', level: 1 },
        { emoji: '🧹', pt: 'Vassoura', en: 'Broom', level: 1 },
        { emoji: '🧹', pt: 'Aspirador', en: 'Vacuum', level: 1 },
        { emoji: '🧹', pt: 'Esfregão', en: 'Mop', level: 1 },
        { emoji: '🧴', pt: 'Produto de limpeza', en: 'Cleaning product', level: 1 },
        { emoji: '✅', pt: 'Essa área tá pronta', en: 'This area is done', level: 1 },
        { emoji: '❓', pt: 'Falta limpar qual parte?', en: 'What part is left to clean?', level: 1 },
        { emoji: '♻️', pt: 'Reciclável ou normal?', en: 'Recycling or regular trash?', level: 1 },
        { emoji: '🗑️', pt: 'Acabou o saco de lixo', en: "We're out of trash bags", level: 1 },
        { emoji: '⚠️', pt: 'Tem alergia a algum produto?', en: 'Are you allergic to any product?', level: 1 },
        { emoji: '🪑', pt: 'Posso mover os móveis?', en: 'Can I move the furniture?', level: 1 },
        { emoji: '👕', pt: 'Onde penduro as roupas?', en: 'Where do I hang the clothes?', level: 1 },
        { emoji: '🧺', pt: 'A máquina de lavar acabou', en: 'The washing machine is done', level: 1 },
        { emoji: '💧', pt: 'Cuidado, chão molhado', en: 'Careful, wet floor', level: 1 }
      ]
    },

  { id: 'traffic-stop-basic', title: 'Traffic Stop (Basic)', emoji: '🚔🚗', description: 'Parada policial - básico', module: 9, order: 8,    slides: [
        { type: 'title', emoji: '🚔🚗', title: 'TRAFFIC STOP', subtitle: 'Parada policial - básico' },
        { type: 'situation', emoji: '🚔', cardClass: 'red', text: 'Luzes vermelhas e azuis atrás de você.<br>Você está sendo parado pela polícia.<br><br>O que fazer? O que dizer?' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: 'REGRA #1 - SEGURANÇA', text: '<strong>MÃOS NO VOLANTE!</strong><br><br>1. Encoste o carro<br>2. Desligue o motor<br>3. Mãos no volante<br>4. NÃO mexe em NADA até o policial pedir' },
        { type: 'rule', cardClass: 'cyan', text: 'O policial vai pedir 3 documentos:', keyword: 'LICENSE | REGISTRATION | INSURANCE', keywordAfter: 'Carteira | Documento do carro | Seguro' },
        { type: 'example', cardClass: 'orange', emoji: '👮', question: '"License and registration, please."', questionTr: 'Carteira e documento do carro.', answer: '"Here you go, officer."', answerTr: 'Aqui está, oficial.' },
        { type: 'example', cardClass: 'cyan', emoji: '📄', question: '"Here\'s my <span class=\'hl-cyan\'>license</span>."', questionTr: 'Aqui está minha carteira.', answer: '(LICENSE = carteira)', answerTr: 'Entregue com calma' },
        { type: 'example', cardClass: 'green', emoji: '📋', question: '"And the <span class=\'hl-green\'>registration</span>."', questionTr: 'E o documento do carro.', answer: '(REGISTRATION)', answerTr: 'Documento do veículo' },
        { type: 'examples', cardClass: 'cyan', title: '📄 DOCUMENTOS', items: [
          { emoji: '📄', en: '<span class="hl-cyan">License</span>', pt: 'Carteira de motorista' },
          { emoji: '📋', en: '<span class="hl-cyan">Registration</span>', pt: 'Documento do carro' },
          { emoji: '📝', en: '<span class="hl-cyan">Insurance</span>', pt: 'Seguro' },
          { emoji: '🪪', en: '<span class="hl-cyan">ID</span>', pt: 'Identidade' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🗣️ O QUE DIZER', items: [
          { emoji: '👮', en: 'Here you go, <span class="hl-green">officer</span>.', pt: 'Aqui está, oficial.' },
          { emoji: '🙏', en: "I'm sorry, <span class='hl-green'>officer</span>.", pt: 'Desculpa, oficial.' },
          { emoji: '✅', en: 'Yes, <span class="hl-green">officer</span>.', pt: 'Sim, oficial.' },
          { emoji: '❓', en: 'No, <span class="hl-green">officer</span>.', pt: 'Não, oficial.' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'ANTES DE PEGAR DOCUMENTOS', text: '<strong>AVISE o policial!</strong><br><br>"My documents are in the glove box.<br>Can I reach for them?"<br><br>Meus documentos estão no porta-luvas.<br>Posso pegar?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'RESULTADOS POSSÍVEIS', text: '<strong>Just a warning</strong> = Só um aviso (ótimo!)<br><strong>A ticket</strong> = Uma multa<br><strong>Sign here</strong> = Assina aqui' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ IMPORTANTE', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Mexer no porta-luvas<br>sem avisar', leftNote: 'PERIGOSO!', right: '"Can I reach for<br>my documents?"', rightNote: 'Avise primeiro!', explanation: 'SEMPRE avise antes de mexer em algo!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Se perguntarem "Do you know why I pulled you over?":', options: ['Explique tudo', 'Diga "No, officer"', 'Fique em silêncio'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Carteira de motorista":', options: ['Driver license', 'License', 'Ambos'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Here you go, _____.', correctWord: 'officer' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PARADA', items: [
          { emoji: '🖐️', text: '<strong>MÃOS NO VOLANTE</strong> - sempre!' },
          { emoji: '📄', text: '<strong>License</strong> = carteira' },
          { emoji: '📋', text: '<strong>Registration</strong> = documento' },
          { emoji: '👮', text: 'Use <strong>officer</strong> = oficial' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '📄', pt: 'Carteira de motorista', en: 'License' }, { emoji: '📋', pt: 'Documento do carro', en: 'Registration' },
        { emoji: '📝', pt: 'Seguro', en: 'Insurance' }, { emoji: '👮', pt: 'Aqui está, oficial', en: 'Here you go, officer' },
        { emoji: '🙏', pt: 'Desculpa, oficial', en: "I'm sorry, officer" }, { emoji: '❓', pt: 'Não, oficial', en: 'No, officer' },
        { emoji: '⚠️', pt: 'Só um aviso', en: 'Just a warning' }, { emoji: '💸', pt: 'Uma multa', en: 'A ticket' },
        { emoji: '✍️', pt: 'Assina aqui', en: 'Sign here' }, { emoji: '🚗', pt: 'Pode ir', en: 'You can go' },
      ]
    },

  { id: 'traffic-stop-questions', title: 'Traffic Stop (Questions)', emoji: '🚔❓', description: 'Perguntas do policial', module: 9, order: 9,    slides: [
        { type: 'title', emoji: '🚔❓', title: 'POLICE QUESTIONS', subtitle: 'Perguntas comuns do policial' },
        { type: 'situation', emoji: '👮', cardClass: 'purple', text: 'O policial pergunta:<br>"Where are you coming from?"<br><br>Como responder às perguntas?' },
        { type: 'rule', cardClass: 'cyan', text: 'Perguntas comuns que você vai ouvir:', keyword: 'Where...? | Do you know...?', keywordAfter: 'Respostas curtas e educadas!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'DICA DE OURO', text: 'Respostas <strong>curtas e educadas</strong>:<br><br>- "From work, officer."<br>- "Home, officer."<br>- "No, officer."<br><br>Não precisa explicar demais!' },
        { type: 'example', cardClass: 'cyan', emoji: '❓', question: '"Where are you <span class=\'hl-cyan\'>coming from</span>?"', questionTr: 'De onde você está vindo?', answer: '"From work, officer."', answerTr: 'Do trabalho, oficial.' },
        { type: 'example', cardClass: 'cyan', emoji: '❓', question: '"Where are you <span class=\'hl-cyan\'>going</span>?"', questionTr: 'Pra onde você está indo?', answer: '"Home, officer."', answerTr: 'Pra casa, oficial.' },
        { type: 'example', cardClass: 'orange', emoji: '🍺', question: '"Have you been <span class=\'hl-orange\'>drinking</span>?"', questionTr: 'Você bebeu?', answer: '"No, officer."', answerTr: 'Não, oficial.' },
        { type: 'examples', cardClass: 'cyan', title: '❓ PERGUNTAS COMUNS', items: [
          { emoji: '📍', en: '"Where are you <span class="hl-cyan">coming from</span>?"', pt: 'De onde você está vindo?' },
          { emoji: '🏠', en: '"Where are you <span class="hl-cyan">going</span>?"', pt: 'Pra onde você está indo?' },
          { emoji: '🚗', en: '"Do you know how <span class="hl-cyan">fast</span> you were going?"', pt: 'Sabe a que velocidade estava?' },
          { emoji: '❓', en: '"Do you know <span class="hl-cyan">why</span> I pulled you over?"', pt: 'Sabe por que te parei?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '✅ RESPOSTAS BOAS', items: [
          { emoji: '💼', en: '"From <span class="hl-green">work</span>, officer."', pt: 'Do trabalho, oficial.' },
          { emoji: '🏠', en: '"<span class="hl-green">Home</span>, officer."', pt: 'Pra casa, oficial.' },
          { emoji: '❌', en: '"<span class="hl-green">No</span>, officer."', pt: 'Não, oficial.' },
          { emoji: '🤷', en: '"I\'m <span class="hl-green">not sure</span>, officer."', pt: 'Não tenho certeza, oficial.' }
        ]},
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: 'VOCÊ BEBEU?', text: 'Se perguntarem "Have you been drinking?"<br><br><strong>Se NÃO bebeu:</strong><br>"No, officer."<br><br><strong>Se bebeu (mesmo pouco):</strong><br>Você tem direito de não responder.' },
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'VELOCIDADE', text: '"Do you know how fast you were going?"<br><br>Respostas seguras:<br>- "No, officer."<br>- "I\'m not sure, officer."<br><br>Evite admitir excesso de velocidade!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ MELHOR RESPOSTA', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'DEMAIS', rightLabel: 'CERTO', left: '"I was at my friend\'s<br>house all night..."', leftNote: 'Muita informação', right: '"From a friend\'s house,<br>officer."', rightNote: 'Curto e direto', explanation: 'Não dê mais informação do que precisa!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "De onde você está vindo?":', options: ['Where you come?', 'Where are you coming from?', 'From where you come?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Você bebeu?":', options: ['Did you drink?', 'Have you been drinking?', 'Are you drinking?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Where are you _____ to?', correctWord: 'going' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PERGUNTAS', items: [
          { emoji: '📍', text: '"Where are you coming from?"' },
          { emoji: '🏠', text: '"Where are you going?"' },
          { emoji: '🚗', text: '"Do you know how fast...?"' },
          { emoji: '💡', text: 'Respostas curtas + "officer"' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '❓', pt: 'De onde você está vindo?', en: 'Where are you coming from?' }, { emoji: '❓', pt: 'Pra onde você está indo?', en: 'Where are you going?' },
        { emoji: '❓', pt: 'Você bebeu?', en: 'Have you been drinking?' }, { emoji: '❓', pt: 'Você sabe a que velocidade estava?', en: 'Do you know how fast you were going?' },
        { emoji: '🏠', pt: 'Pra casa', en: 'Home' }, { emoji: '💼', pt: 'Do trabalho', en: 'From work' },
        { emoji: '❌', pt: 'Não, oficial', en: 'No, officer' }, { emoji: '🤷', pt: 'Não tenho certeza', en: "I'm not sure" },
        { emoji: '🙏', pt: 'Desculpa', en: "I'm sorry / Sorry / I am sorry" }, { emoji: '✅', pt: 'Sim, oficial', en: 'Yes, officer' },
      ]
    },

  { id: 'police-expanded', title: 'Police (Expanded)', emoji: '👮🚔', description: 'Interação com polícia', module: 9, order: 10,    slides: [
        { type: 'title', emoji: '👮🚔', title: 'POLICE (EXPANDED)', subtitle: 'Interação com polícia — Seus direitos' },
        { type: 'situation', emoji: '👮', cardClass: 'purple', text: 'A polícia te parou ou você precisa<br>reportar algo. Calma é ESSENCIAL.<br>Saber suas frases pode mudar TUDO.<br><br>Direitos + Inglês = Proteção!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 SEUS DIREITOS NOS EUA', text: '<strong>TODO mundo tem direitos nos EUA:</strong><br><br>1. Direito a <strong>intérprete</strong> (interpreter)<br>2. Direito a ficar em <strong>silêncio</strong><br>3. Direito a um <strong>advogado</strong> (lawyer)<br>4. Direito a fazer <strong>uma ligação</strong><br><br>Não importa seu status. A lei protege TODOS.' },
        { type: 'rule', cardClass: 'purple', text: 'Frases com a polícia:', keyword: 'I NEED / I DIDN\'T / CAN I', keywordAfter: 'Preciso / Eu não fiz / Posso' },
        { type: 'example', cardClass: 'purple', emoji: '🌐', question: 'I need an <span class="hl-purple">interpreter</span>.', questionTr: 'Preciso de intérprete.', answer: '(Seu DIREITO! Peça sempre que precisar)', answerTr: 'Eles TÊM que providenciar.' },
        { type: 'example', cardClass: 'red', emoji: '🙅', question: "I <span class=\"hl-red\">didn't</span> do anything.", questionTr: 'Eu não fiz nada.', answer: '(Fique calmo ao dizer)', answerTr: 'Tom calmo, sem gritar.' },
        { type: 'example', cardClass: 'cyan', emoji: '📄', question: 'My <span class="hl-cyan">documents</span> are right here.', questionTr: 'Meus documentos estão aqui.', answer: '(Mostre com calma, sem movimentos rápidos)', answerTr: 'Sempre avise antes de pegar.' },
        { type: 'examples', cardClass: 'purple', title: '🗣️ FRASES ESSENCIAIS', items: [
          { emoji: '🗣️', en: "I <span class=\"hl-purple\">don't understand</span> English well.", pt: 'Não entendo inglês muito bem.' },
          { emoji: '📞', en: 'Can I <span class="hl-purple">call</span> someone?', pt: 'Posso ligar pra alguém?' },
          { emoji: '❓', en: "What\'s the <span class=\"hl-purple\">problem</span>?", pt: 'Qual é o problema?' },
          { emoji: '🚶', en: 'Am I <span class="hl-purple">free to go</span>?', pt: 'Posso ir embora?' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📋 REPORTANDO ALGO', items: [
          { emoji: '📱', en: 'Someone <span class="hl-cyan">stole</span> my phone.', pt: 'Roubaram meu celular.' },
          { emoji: '👛', en: 'Someone <span class="hl-cyan">stole</span> my wallet.', pt: 'Roubaram minha carteira.' },
          { emoji: '🏠', en: 'My house was <span class="hl-cyan">broken into</span>.', pt: 'Minha casa foi arrombada.' },
          { emoji: '📋', en: 'I need to file a <span class="hl-cyan">police report</span>.', pt: 'Preciso fazer boletim.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '💡', title: 'CALMA É SUA MELHOR ARMA', text: '<strong>NUNCA faça:</strong><br>• Movimentos rápidos<br>• Grite ou discuta<br>• Corra<br>• Toque no policial<br><br><strong>SEMPRE faça:</strong><br>• Fale devagar e calmo<br>• Mãos visíveis<br>• Peça intérprete se precisar<br>• Coopere' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ NUNCA vs SEMPRE', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'NUNCA', rightLabel: 'SEMPRE', left: 'Gritar, correr, discutir<br>Fazer movimentos rápidos', leftNote: 'PERIGOSO!', right: 'Falar calmo, mãos visíveis<br>Pedir intérprete', rightNote: 'SEGURO', explanation: 'Calma e cooperação protegem você. Depois resolva com advogado.' },
        { type: 'quiz', cardClass: 'purple', question: '🎯 Você tem direito a intérprete nos EUA?', options: ['Só se for cidadão', 'Sim, todos têm esse direito', 'Não, tem que falar inglês'], correct: 1 },
        { type: 'quiz', cardClass: 'purple', question: '🎯 "Roubaram meu celular" em inglês:', options: ['They robbed my phone', 'Someone stole my phone', 'My phone was robbery'], correct: 1 },
        { type: 'fill-blank', cardClass: 'purple', prompt: '✍️ Complete:', sentence: 'I need an _____.', correctWord: 'interpreter' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - POLÍCIA', items: [
          { emoji: '🌐', text: '<strong>I need an interpreter</strong> = Seu DIREITO!' },
          { emoji: '🙅', text: '<strong>Fique calmo</strong> = Mãos visíveis, voz baixa' },
          { emoji: '📋', text: '<strong>Police report</strong> = boletim de ocorrência' },
          { emoji: '⚠️', text: 'Não importa seu status. A lei protege TODOS.' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🙅', pt: 'Eu não fiz nada', en: "I didn't do anything", level: 1 },
        { emoji: '🗣️', pt: 'Não entendo inglês muito bem', en: "I don't understand English very well", level: 1 },
        { emoji: '🌐', pt: 'Preciso de intérprete', en: 'I need an interpreter', level: 1 },
        { emoji: '📞', pt: 'Posso ligar pra alguém?', en: 'Can I call someone?', level: 1 },
        { emoji: '❓', pt: 'Qual é o problema?', en: "What\'s the problem?", level: 1 },
        { emoji: '📄', pt: 'Meus documentos estão aqui', en: 'My documents are right here', level: 1 },
        { emoji: '🏠', pt: 'Moro nesse endereço', en: 'I live at this address', level: 1 },
        { emoji: '💼', pt: 'Trabalho nessa empresa', en: 'I work at this company', level: 1 },
        { emoji: '📱', pt: 'Roubaram meu celular', en: 'Someone stole my phone', level: 1 },
        { emoji: '👛', pt: 'Roubaram minha carteira', en: 'Someone stole my wallet', level: 1 },
        { emoji: '🚶', pt: 'Posso ir embora?', en: 'Am I free to go?', level: 1 },
        { emoji: '🤷', pt: 'Não sei o que aconteceu', en: "I don't know what happened", level: 1 },
        { emoji: '👀', pt: 'Eu vi o que aconteceu', en: 'I saw what happened', level: 1 },
        { emoji: '👊', pt: 'Ele me bateu', en: 'He hit me', level: 1 },
        { emoji: '🏠', pt: 'Minha casa foi arrombada', en: 'My house was broken into', level: 1 },
        { emoji: '📋', pt: 'Preciso fazer boletim', en: 'I need to file a police report', level: 1 }
      ]
    }
] as Lesson[];
