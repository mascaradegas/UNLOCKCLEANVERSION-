import type { Lesson } from '@unlock2026/shared';

export const module4Lessons = [
  { id: 'there-is', title: 'THERE IS', emoji: '📍1️⃣', description: 'Existe (singular)', module: 4, order: 1,    slides: [
        { type: 'title', emoji: '📍1️⃣', title: 'THERE IS', subtitle: 'Tem / Existe (uma coisa)' },
        { type: 'situation', emoji: '🗺️', cardClass: 'purple', text: 'Você está perdido.<br>Pergunta se <strong>TEM</strong> um banco por perto.<br><br>Como dizer que EXISTE algo?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para dizer que <strong>UMA COISA</strong> existe ou tem:', keyword: 'THERE IS', keywordAfter: 'Tem / Existe (singular)' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA E CONTRAÇÃO', text: '<strong>THERE IS</strong> soa como "DÉR IZ"<br><br>Contração: <strong>There\'s</strong> = "DÉRZ"<br>"There\'s a bank here."' },
        { type: 'example', cardClass: 'cyan', emoji: '🏦', question: '<span class="hl-cyan">There is</span> a bank here.', questionTr: 'Tem um banco aqui.', answer: '(uma coisa)', answerTr: 'Singular' },
        { type: 'example', cardClass: 'cyan', emoji: '🚗', question: '<span class="hl-cyan">There\'s</span> a car outside.', questionTr: 'Tem um carro lá fora.', answer: '(contração)', answerTr: 'There\'s' },
        { type: 'example', cardClass: 'cyan', emoji: '⚠️', question: '<span class="hl-cyan">There is</span> a problem.', questionTr: 'Tem um problema.', answer: '(uma coisa)', answerTr: 'Singular' },
        { type: 'examples', cardClass: 'cyan', title: '📍 THERE IS - EXEMPLOS', items: [
          { emoji: '🚻', en: '<span class="hl-cyan">There\'s</span> a bathroom over there.', pt: 'Tem um banheiro ali.' },
          { emoji: '🍕', en: '<span class="hl-cyan">There\'s</span> pizza in the kitchen.', pt: 'Tem pizza na cozinha.' },
          { emoji: '👤', en: '<span class="hl-cyan">There\'s</span> someone at the door.', pt: 'Tem alguém na porta.' },
          { emoji: '🎁', en: '<span class="hl-cyan">There\'s</span> a surprise for you.', pt: 'Tem uma surpresa pra você.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'THERE IS vs HAVE', text: 'Em português usamos "ter" para tudo.<br>Em inglês:<br><br><strong>THERE IS</strong> = existe/tem (em um lugar)<br><strong>HAVE</strong> = possuo/tenho (eu tenho)' },
        { type: 'comparison', cardClass: 'cyan', title: '📍 THERE IS vs I HAVE', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '📍', rightIcon: '👤', leftLabel: 'THERE IS (existe)', rightLabel: 'I HAVE (possuo)', left: '<span class="hl-cyan">There is</span> a car outside.', leftNote: 'Existe um carro (no lugar)', right: '<span class="hl-purple">I have</span> a car.', rightNote: 'Eu possuo um carro', explanation: '<strong>THERE IS</strong> = existência | <strong>HAVE</strong> = posse' },
        { type: 'examples', cardClass: 'purple', title: '❓ PERGUNTAS E NEGAÇÕES', items: [
          { emoji: '❓', en: '<span class="hl-purple">Is there</span> a bathroom here?', pt: 'Tem banheiro aqui?' },
          { emoji: '❓', en: '<span class="hl-purple">Is there</span> a problem?', pt: 'Tem algum problema?' },
          { emoji: '❌', en: '<span class="hl-red">There isn\'t</span> time.', pt: 'Não tem tempo.' },
          { emoji: '❌', en: '<span class="hl-red">There\'s no</span> problem.', pt: 'Não tem problema.' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Have a problem.', leftNote: 'Tradução literal do português', right: 'There is a problem.', rightNote: 'Correto em inglês', explanation: '"Tem um problema" = <strong>There is</strong> (não Have)' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tem um banco aqui" em inglês:', options: ['Have a bank here', 'There is a bank here', 'It has a bank here'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta: "Tem banheiro aqui?"', options: ['There is a bathroom?', 'Is there a bathroom?', 'Has a bathroom?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: '_____ a message for you.', correctWord: 'There is' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - THERE IS', items: [
          { emoji: '1️⃣', text: '<strong>THERE IS</strong> = tem/existe (singular)' },
          { emoji: '⚡', text: 'Contração: <strong>There\'s</strong>' },
          { emoji: '❓', text: 'Pergunta: <strong>Is there...?</strong>' },
          { emoji: '⚠️', text: 'Não confunda com HAVE!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏦', pt: 'Tem um banco aqui', en: "There is a bank here / There's a bank here" },
        { emoji: '🚗', pt: 'Tem um carro lá fora', en: 'There is a car outside' },
        { emoji: '⚠️', pt: 'Tem um problema', en: 'There is a problem' },
        { emoji: '📞', pt: 'Tem uma mensagem', en: 'There is a message' },
        { emoji: '🚻', pt: 'Tem um banheiro ali', en: 'There is a bathroom over there' },
        { emoji: '🍕', pt: 'Tem pizza na cozinha', en: 'There is pizza in the kitchen' },
        { emoji: '👤', pt: 'Tem alguém aqui', en: 'There is someone here' },
        { emoji: '🐕', pt: 'Tem um cachorro no quintal', en: 'There is a dog in the yard' },
        { emoji: '📦', pt: 'Tem uma caixa na mesa', en: 'There is a box on the table' },
        { emoji: '🎁', pt: 'Tem uma surpresa pra você', en: 'There is a surprise for you' },
      ]
    },

  { id: 'there-are', title: 'THERE ARE', emoji: '📍🔢', description: 'Existem (plural)', module: 4, order: 2,    slides: [
        { type: 'title', emoji: '📍🔢', title: 'THERE ARE', subtitle: 'Tem / Existem (várias coisas)' },
        { type: 'situation', emoji: '🛒', cardClass: 'purple', text: 'Você está no mercado.<br>Tem <strong>VÁRIAS</strong> opções de frutas.<br><br>Como dizer que existem várias coisas?' },
        { type: 'rule', cardClass: 'green', text: 'Para dizer que <strong>VÁRIAS COISAS</strong> existem:', keyword: 'THERE ARE', keywordAfter: 'Tem / Existem (plural)' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>THERE ARE</strong> soa como "DÉR ÁR"<br><br>No dia a dia vira: <strong>"There\'re"</strong> (DÉRR)' },
        { type: 'example', cardClass: 'green', emoji: '🚗', question: '<span class="hl-green">There are</span> many cars.', questionTr: 'Tem muitos carros.', answer: '(plural)', answerTr: 'Várias coisas' },
        { type: 'example', cardClass: 'green', emoji: '👥', question: '<span class="hl-green">There are</span> 3 people here.', questionTr: 'Tem 3 pessoas aqui.', answer: '(número)', answerTr: 'Quantidade específica' },
        { type: 'example', cardClass: 'green', emoji: '🍎', question: '<span class="hl-green">There are</span> apples in the fridge.', questionTr: 'Tem maçãs na geladeira.', answer: '(plural)', answerTr: 'Várias' },
        { type: 'examples', cardClass: 'green', title: '📍 THERE ARE - EXEMPLOS', items: [
          { emoji: '🪑', en: '<span class="hl-green">There are</span> two chairs.', pt: 'Tem duas cadeiras.' },
          { emoji: '📚', en: '<span class="hl-green">There are</span> many books.', pt: 'Tem muitos livros.' },
          { emoji: '🏪', en: '<span class="hl-green">There are</span> stores nearby.', pt: 'Tem lojas perto.' },
          { emoji: '⚠️', en: '<span class="hl-green">There are</span> some problems.', pt: 'Tem alguns problemas.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '1️⃣ THERE IS vs THERE ARE 🔢', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '🔢', leftLabel: 'THERE IS (singular)', rightLabel: 'THERE ARE (plural)', left: '<span class="hl-cyan">There is</span> a car.', leftNote: 'UM carro', right: '<span class="hl-green">There are</span> cars.', rightNote: 'VÁRIOS carros', explanation: 'Uma coisa = <strong>IS</strong> | Várias = <strong>ARE</strong>' },
        { type: 'examples', cardClass: 'purple', title: '❓ PERGUNTAS E NEGAÇÕES', items: [
          { emoji: '❓', en: '<span class="hl-purple">Are there</span> any questions?', pt: 'Tem alguma pergunta?' },
          { emoji: '❓', en: '<span class="hl-purple">Are there</span> seats available?', pt: 'Tem lugares disponíveis?' },
          { emoji: '❌', en: '<span class="hl-red">There aren\'t</span> any problems.', pt: 'Não tem nenhum problema.' },
          { emoji: '❌', en: '<span class="hl-red">There are no</span> tickets left.', pt: 'Não tem mais ingressos.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA: ANY', text: 'Em perguntas e negações, use <strong>ANY</strong>:<br><br>Are there <strong>any</strong> questions?<br>There aren\'t <strong>any</strong> seats.' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'There is two chairs.', leftNote: 'IS com plural não funciona', right: 'There are two chairs.', rightNote: 'ARE para plural', explanation: 'Número > 1 = sempre <strong>THERE ARE</strong>' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tem duas cadeiras" em inglês:', options: ['There is two chairs', 'There are two chairs', 'Have two chairs'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta: "Tem vagas?"', options: ['There are seats?', 'Are there seats?', 'Has seats?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: '_____ many people at the party.', correctWord: 'There are' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - THERE ARE', items: [
          { emoji: '🔢', text: '<strong>THERE ARE</strong> = tem/existem (plural)' },
          { emoji: '❓', text: 'Pergunta: <strong>Are there...?</strong>' },
          { emoji: '❌', text: 'Negação: <strong>There aren\'t</strong>' },
          { emoji: '💡', text: 'Use ANY em perguntas/negações' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🚗', pt: 'Tem muitos carros', en: 'There are many cars' },
        { emoji: '👥', pt: 'Tem 3 pessoas aqui', en: 'There are 3 people here' },
        { emoji: '🪑', pt: 'Tem duas cadeiras', en: 'There are two chairs' },
        { emoji: '📚', pt: 'Tem vários livros', en: 'There are several books' },
        { emoji: '🌳', pt: 'Tem árvores no parque', en: 'There are trees in the park' },
        { emoji: '🏪', pt: 'Tem lojas perto daqui', en: 'There are stores nearby' },
        { emoji: '⚠️', pt: 'Tem alguns problemas', en: 'There are some problems' },
        { emoji: '🍎', pt: 'Tem maçãs na geladeira', en: 'There are apples in the fridge' },
        { emoji: '📧', pt: 'Tem mensagens novas', en: 'There are new messages' },
        { emoji: '🎁', pt: 'Tem presentes na árvore', en: 'There are gifts on the tree' },
      ]
    },

  { id: 'there-is-are-questions', title: 'THERE IS / ARE (Questions)', emoji: '❓📍', description: 'Perguntas com There is/are', module: 4, order: 3,    slides: [
        { type: 'title', emoji: '❓📍', title: 'THERE IS / ARE (Questions)', subtitle: 'Perguntar se existe / Tem...?' },
        { type: 'situation', emoji: '🏨', cardClass: 'purple', text: 'Você chegou num hotel.<br>Quer saber se <strong>TEM</strong> Wi-Fi, se <strong>TEM</strong> café da manhã...<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar se algo <strong>EXISTE</strong>, inverta a ordem:', keyword: 'IS THERE...? / ARE THERE...?', keywordAfter: 'Tem...? / Existe...?' },
        { type: 'tip', cardClass: 'orange', icon: '🔄', title: 'A REGRA DA INVERSÃO', text: 'Afirmação: <strong>There is</strong> a bathroom.<br>Pergunta: <strong>Is there</strong> a bathroom?<br><br>Só inverte!' },
        { type: 'example', cardClass: 'cyan', emoji: '📶', question: '<span class="hl-cyan">Is there</span> Wi-Fi here?', questionTr: 'Tem Wi-Fi aqui?', answer: 'Yes, there is.', answerTr: 'Sim, tem.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚻', question: '<span class="hl-cyan">Is there</span> a bathroom nearby?', questionTr: 'Tem banheiro por perto?', answer: "Yes, it's over there.", answerTr: 'Sim, é ali.' },
        { type: 'example', cardClass: 'green', emoji: '🪑', question: '<span class="hl-green">Are there</span> any chairs?', questionTr: 'Tem cadeiras?', answer: 'Yes, there are three.', answerTr: 'Sim, tem três.' },
        { type: 'examples', cardClass: 'cyan', title: '❓ IS THERE (singular)', items: [
          { emoji: '🏧', en: '<span class="hl-cyan">Is there</span> an ATM nearby?', pt: 'Tem caixa eletrônico por perto?' },
          { emoji: '🍽️', en: '<span class="hl-cyan">Is there</span> a restaurant here?', pt: 'Tem restaurante aqui?' },
          { emoji: '🅿️', en: '<span class="hl-cyan">Is there</span> parking?', pt: 'Tem estacionamento?' },
          { emoji: '❓', en: '<span class="hl-cyan">Is there</span> a problem?', pt: 'Tem algum problema?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '❓ ARE THERE (plural)', items: [
          { emoji: '🛏️', en: '<span class="hl-green">Are there</span> any rooms available?', pt: 'Tem quartos disponíveis?' },
          { emoji: '🚌', en: '<span class="hl-green">Are there</span> any buses to downtown?', pt: 'Tem ônibus pro centro?' },
          { emoji: '👥', en: '<span class="hl-green">Are there</span> many people?', pt: 'Tem muita gente?' },
          { emoji: '📋', en: '<span class="hl-green">Are there</span> any questions?', pt: 'Tem alguma pergunta?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'RESPOSTAS CURTAS', text: '<strong>Singular:</strong><br>Yes, there is. / No, there isn\'t.<br><br><strong>Plural:</strong><br>Yes, there are. / No, there aren\'t.' },
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'ANY EM PERGUNTAS', text: 'Use <strong>ANY</strong> em perguntas:<br><br>• Is there <strong>any</strong> water?<br>• Are there <strong>any</strong> chairs?<br><br>ANY = algum/alguma/alguns' },
        { type: 'comparison', cardClass: 'cyan', title: '🔄 AFIRMAÇÃO vs PERGUNTA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '✅', rightIcon: '❓', leftLabel: 'AFIRMAÇÃO', rightLabel: 'PERGUNTA', left: '<span class="hl-cyan">There is</span> a problem.', leftNote: 'Tem um problema.', right: '<span class="hl-purple">Is there</span> a problem?', rightNote: 'Tem um problema?', explanation: 'Pergunta = inverte a ordem!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Have Wi-Fi here?', leftNote: 'Tradução literal de "tem"', right: 'Is there Wi-Fi here?', rightNote: 'Forma correta', explanation: 'Para "tem/existe", use IS THERE / ARE THERE!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tem banheiro aqui?" em inglês:', options: ['Have bathroom here?', 'Is there a bathroom here?', 'There is bathroom?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tem quartos disponíveis?" em inglês:', options: ['Is there rooms?', 'Are there any rooms available?', 'Have rooms available?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ a supermarket nearby?', correctWord: 'Is there' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - IS/ARE THERE...?', items: [
          { emoji: '❓', text: 'Pergunta = inverte: <strong>IS THERE...? / ARE THERE...?</strong>' },
          { emoji: '1️⃣', text: 'IS THERE = singular (um/uma)' },
          { emoji: '🔢', text: 'ARE THERE = plural (alguns/várias)' },
          { emoji: '📝', text: 'Use ANY em perguntas' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '📶', pt: 'Tem Wi-Fi aqui?', en: 'Is there Wi-Fi here?' },
        { emoji: '🚻', pt: 'Tem banheiro?', en: 'Is there a bathroom?' },
        { emoji: '🏧', pt: 'Tem caixa eletrônico?', en: 'Is there an ATM?' },
        { emoji: '🍽️', pt: 'Tem restaurante?', en: 'Is there a restaurant?' },
        { emoji: '🅿️', pt: 'Tem estacionamento?', en: 'Is there parking?' },
        { emoji: '🛏️', pt: 'Tem quartos?', en: 'Are there any rooms?' },
        { emoji: '🚌', pt: 'Tem ônibus?', en: 'Are there any buses?' },
        { emoji: '👥', pt: 'Tem muita gente?', en: 'Are there many people?' },
        { emoji: '✅', pt: 'Sim, tem', en: 'Yes, there is / Yes, there are' },
        { emoji: '❌', pt: 'Não, não tem', en: "No, there isn't / No, there aren't" },
      ]
    },

  { id: 'there-is-are-negative', title: 'THERE IS / ARE (Negative)', emoji: '❌📍', description: 'Negação com There is/are', module: 4, order: 4,    slides: [
        { type: 'title', emoji: '❌📍', title: 'THERE IS / ARE (Negative)', subtitle: 'Não tem / Não existe' },
        { type: 'situation', emoji: '🛒', cardClass: 'purple', text: 'Você foi ao mercado.<br>Procurou leite, mas <strong>NÃO TEM</strong> mais.<br><br>Como dizer isso?' },
        { type: 'rule', cardClass: 'red', text: 'Para dizer que algo <strong>NÃO EXISTE</strong>:', keyword: "THERE ISN'T / THERE AREN'T", keywordAfter: 'Não tem / Não existe' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>THERE ISN\'T</strong> = "DÉR ÍZENT"<br><strong>THERE AREN\'T</strong> = "DÉR ÁRENT"<br><br>Contrações são mais naturais!' },
        { type: 'example', cardClass: 'red', emoji: '🥛', question: '<span class="hl-red">There isn\'t</span> any milk.', questionTr: 'Não tem leite.', answer: '(singular / incontável)', answerTr: 'ISN\'T' },
        { type: 'example', cardClass: 'red', emoji: '🪑', question: '<span class="hl-red">There aren\'t</span> any chairs.', questionTr: 'Não tem cadeiras.', answer: '(plural)', answerTr: 'AREN\'T' },
        { type: 'example', cardClass: 'red', emoji: '❓', question: '<span class="hl-red">There\'s no</span> problem.', questionTr: 'Não tem problema.', answer: '(alternativa com NO)', answerTr: 'Também correto!' },
        { type: 'examples', cardClass: 'red', title: "❌ THERE ISN'T (singular)", items: [
          { emoji: '⏰', en: "<span class='hl-red'>There isn't</span> enough time.", pt: 'Não tem tempo suficiente.' },
          { emoji: '🅿️', en: "<span class='hl-red'>There isn't</span> parking here.", pt: 'Não tem estacionamento aqui.' },
          { emoji: '📶', en: "<span class='hl-red'>There isn't</span> any Wi-Fi.", pt: 'Não tem Wi-Fi.' },
          { emoji: '💧', en: "<span class='hl-red'>There isn't</span> any water.", pt: 'Não tem água.' }
        ]},
        { type: 'examples', cardClass: 'red', title: "❌ THERE AREN'T (plural)", items: [
          { emoji: '🛏️', en: "<span class='hl-red'>There aren't</span> any rooms.", pt: 'Não tem quartos.' },
          { emoji: '🚌', en: "<span class='hl-red'>There aren't</span> any buses.", pt: 'Não tem ônibus.' },
          { emoji: '👥', en: "<span class='hl-red'>There aren't</span> many people.", pt: 'Não tem muita gente.' },
          { emoji: '🪑', en: "<span class='hl-red'>There aren't</span> enough chairs.", pt: 'Não tem cadeiras suficientes.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'DUAS FORMAS DE NEGAR', text: 'Ambas estão corretas:<br><br>1. There <strong>isn\'t any</strong> milk.<br>2. There\'s <strong>no</strong> milk.<br><br>A segunda é mais enfática!' },
        { type: 'examples', cardClass: 'gold', title: '🔄 ISN\'T ANY vs NO', items: [
          { emoji: '🥛', en: "There <span class='hl-gold'>isn't any</span> milk. = There's <span class='hl-gold'>no</span> milk.", pt: 'Não tem leite.' },
          { emoji: '⏰', en: "There <span class='hl-gold'>isn't any</span> time. = There's <span class='hl-gold'>no</span> time.", pt: 'Não tem tempo.' },
          { emoji: '💵', en: "There <span class='hl-gold'>isn't any</span> money. = There's <span class='hl-gold'>no</span> money.", pt: 'Não tem dinheiro.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '✅ AFIRMATIVO vs ❌ NEGATIVO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '✅', rightIcon: '❌', leftLabel: 'AFIRMATIVO', rightLabel: 'NEGATIVO', left: '<span class="hl-green">There is</span> milk.', leftNote: 'Tem leite.', right: '<span class="hl-red">There isn\'t</span> any milk.', rightNote: 'Não tem leite.', explanation: 'Adicione NOT (contraído) + ANY para negar' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "There aren't no chairs.", leftNote: 'Dupla negação', right: "There aren't any chairs.", rightNote: 'Uma negação só', explanation: 'Em inglês, <strong>não</strong> use dupla negação!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Não tem leite" em inglês:', options: ["There isn't any milk", "There aren't milk", "There no have milk"], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Não tem quartos disponíveis" em inglês:', options: ["There isn't rooms", "There aren't any rooms available", "There no are rooms"], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (negativo):', sentence: "_____ any parking here.", correctWord: "There isn't" },
        { type: 'list', cardClass: 'gold', title: "📝 RESUMO - THERE ISN'T / AREN'T", items: [
          { emoji: '1️⃣', text: "<strong>THERE ISN'T</strong> = não tem (singular)" },
          { emoji: '🔢', text: "<strong>THERE AREN'T</strong> = não tem (plural)" },
          { emoji: '📝', text: "Use ANY após ISN'T/AREN'T" },
          { emoji: '⚡', text: "Alternativa: There's NO + substantivo" }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🥛', pt: 'Não tem leite', en: "There isn't any milk" },
        { emoji: '⏰', pt: 'Não tem tempo', en: "There isn't enough time" },
        { emoji: '📶', pt: 'Não tem Wi-Fi', en: "There isn't any Wi-Fi" },
        { emoji: '🅿️', pt: 'Não tem estacionamento', en: "There isn't parking" },
        { emoji: '🛏️', pt: 'Não tem quartos', en: "There aren't any rooms" },
        { emoji: '🚌', pt: 'Não tem ônibus', en: "There aren't any buses" },
        { emoji: '👥', pt: 'Não tem muita gente', en: "There aren't many people" },
        { emoji: '❌', pt: 'Não tem problema', en: "There's no problem" },
        { emoji: '💵', pt: 'Não tem dinheiro', en: "There's no money" },
        { emoji: '🪑', pt: 'Não tem cadeiras suficientes', en: "There aren't enough chairs" },
      ]
    },

  { id: 'some-any-a-lot', title: 'Some / Any / A lot of', emoji: '📊📦', description: 'Quantificadores', module: 4, order: 5,    slides: [
        { type: 'title', emoji: '📊📦', title: 'SOME / ANY / A LOT OF', subtitle: 'Falar de quantidades' },
        { type: 'situation', emoji: '🍎', cardClass: 'purple', text: 'Você quer dizer que tem ALGUMAS maçãs:<br>"Eu tenho <strong>ALGUMAS</strong> maçãs."<br><br>Quando usar SOME, ANY ou A LOT OF?' },
        { type: 'rule', cardClass: 'green', text: '<strong>SOME</strong> = alguns/algum (frases <strong>AFIRMATIVAS</strong>):', keyword: 'SOME', keywordAfter: 'I have SOME apples.' },
        { type: 'rule', cardClass: 'orange', text: '<strong>ANY</strong> = algum/nenhum (<strong>PERGUNTAS e NEGATIVAS</strong>):', keyword: 'ANY', keywordAfter: 'Do you have ANY? / I don\'t have ANY.' },
        { type: 'rule', cardClass: 'cyan', text: '<strong>A LOT OF</strong> = muito/muitos (<strong>QUALQUER FRASE</strong>):', keyword: 'A LOT OF', keywordAfter: 'I have A LOT OF books.' },
        { type: 'example', cardClass: 'green', emoji: '🍎', question: 'I have <span class="hl-green">some</span> apples.', questionTr: 'Eu tenho algumas maçãs.', answer: '(afirmativo)', answerTr: 'SOME em afirmativa' },
        { type: 'example', cardClass: 'orange', emoji: '❓', question: 'Do you have <span class="hl-orange">any</span> money?', questionTr: 'Você tem algum dinheiro?', answer: '(pergunta)', answerTr: 'ANY em pergunta' },
        { type: 'example', cardClass: 'red', emoji: '❌', question: "I don't have <span class='hl-red'>any</span> problems.", questionTr: 'Eu não tenho nenhum problema.', answer: '(negativo)', answerTr: 'ANY em negativa' },
        { type: 'examples', cardClass: 'green', title: '✅ SOME - AFIRMATIVAS', items: [
          { emoji: '🍎', en: 'I have <span class="hl-green">some</span> apples.', pt: 'Eu tenho algumas maçãs.' },
          { emoji: '💧', en: 'I need <span class="hl-green">some</span> water.', pt: 'Eu preciso de um pouco de água.' },
          { emoji: '💰', en: 'I have <span class="hl-green">some</span> money.', pt: 'Eu tenho algum dinheiro.' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '❓ ANY - PERGUNTAS', items: [
          { emoji: '❓', en: 'Do you have <span class="hl-orange">any</span> questions?', pt: 'Você tem alguma pergunta?' },
          { emoji: '❓', en: 'Is there <span class="hl-orange">any</span> coffee?', pt: 'Tem algum café?' },
          { emoji: '❓', en: 'Are there <span class="hl-orange">any</span> problems?', pt: 'Tem algum problema?' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📊 A LOT OF - MUITOS', items: [
          { emoji: '📚', en: 'I have <span class="hl-cyan">a lot of</span> books.', pt: 'Eu tenho muitos livros.' },
          { emoji: '💰', en: 'He has <span class="hl-cyan">a lot of</span> money.', pt: 'Ele tem muito dinheiro.' },
          { emoji: '👥', en: 'There are <span class="hl-cyan">a lot of</span> people.', pt: 'Tem muitas pessoas.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'SOME EM OFERTAS', text: 'Exceção! Use SOME em perguntas que são <strong>ofertas</strong>:<br><br>Would you like <strong>some</strong> coffee?<br>Quer um café?<br><br>(Porque você espera "sim"!)' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Do you have <span class="hl-red">some</span> money?', leftNote: 'Pergunta normal', right: 'Do you have <span class="hl-green">any</span> money?', rightNote: 'ANY em perguntas', explanation: 'Perguntas normais = ANY!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Em perguntas, use:', options: ['some', 'any', 'a lot'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quer um pouco de café?" (oferta):', options: ['Do you want any coffee?', 'Would you like some coffee?', 'You want coffee?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (negativa):', sentence: "I don't have _____ time.", correctWord: 'any' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - QUANTIFICADORES', items: [
          { emoji: '✅', text: '<strong>SOME</strong> = afirmativas + ofertas' },
          { emoji: '❓', text: '<strong>ANY</strong> = perguntas + negativas' },
          { emoji: '📊', text: '<strong>A LOT OF</strong> = muito (qualquer frase)' },
          { emoji: '☕', text: 'Ofertas: Would you like some...?' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🍎', pt: 'Eu tenho algumas maçãs', en: 'I have some apples' }, { emoji: '💧', pt: 'Eu preciso de um pouco de água', en: 'I need some water' },
        { emoji: '❓', pt: 'Você tem algum dinheiro?', en: 'Do you have any money?' }, { emoji: '❌', pt: 'Eu não tenho nenhum problema', en: "I don't have any problems" },
        { emoji: '📚', pt: 'Eu tenho muitos livros', en: 'I have a lot of books' }, { emoji: '💰', pt: 'Ele tem muito dinheiro', en: 'He has a lot of money' },
        { emoji: '☕', pt: 'Quer um pouco de café?', en: 'Would you like some coffee?' }, { emoji: '❓', pt: 'Tem alguma pergunta?', en: 'Are there any questions?' },
        { emoji: '👥', pt: 'Tem muitas pessoas', en: 'There are a lot of people' }, { emoji: '⏰', pt: 'Eu não tenho muito tempo', en: "I don't have a lot of time" },
      ]
    },

  { id: 'no-article', title: 'No Article', emoji: '❌📝', description: 'Quando não usar artigo', module: 4, order: 6,    slides: [
        { type: 'title', emoji: '❌📝', title: 'NO ARTICLE', subtitle: 'Quando NÃO usar artigo' },
        { type: 'situation', emoji: '☕', cardClass: 'purple', text: 'Você quer dizer que gosta de café EM GERAL:<br>"Eu gosto de café."<br><br>Precisa de artigo?' },
        { type: 'rule', cardClass: 'red', text: 'Sem artigo quando falar de coisas <strong>EM GERAL</strong>:', keyword: 'SEM ARTIGO', keywordAfter: 'Generalizações, nomes, refeições...' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'QUANDO NÃO USAR', text: '1️⃣ Coisas em geral: I like coffee<br>2️⃣ Nomes próprios: Maria is here<br>3️⃣ Refeições: after dinner<br>4️⃣ Esportes: I play soccer' },
        { type: 'example', cardClass: 'red', emoji: '☕', question: 'I like coffee.', questionTr: 'Eu gosto de café.', answer: '(café em geral)', answerTr: 'Sem artigo!' },
        { type: 'example', cardClass: 'red', emoji: '🎵', question: 'I like music.', questionTr: 'Eu gosto de música.', answer: '(música em geral)', answerTr: 'Sem artigo!' },
        { type: 'example', cardClass: 'red', emoji: '🍽️', question: 'I had dinner.', questionTr: 'Eu jantei.', answer: '(refeição)', answerTr: 'Sem artigo!' },
        { type: 'examples', cardClass: 'red', title: '❌ SEM ARTIGO - GERAIS', items: [
          { emoji: '🍕', en: 'I love pizza.', pt: 'Eu amo pizza. (em geral)' },
          { emoji: '⚽', en: 'I play soccer.', pt: 'Eu jogo futebol.' },
          { emoji: '🎶', en: 'She studies music.', pt: 'Ela estuda música.' },
          { emoji: '📚', en: 'Education is important.', pt: 'Educação é importante.' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '❌ SEM ARTIGO - LUGARES/REFEIÇÕES', items: [
          { emoji: '🏠', en: 'I\'m at home.', pt: 'Estou em casa.' },
          { emoji: '💼', en: 'I\'m at work.', pt: 'Estou no trabalho.' },
          { emoji: '🍳', en: 'I have breakfast at 7.', pt: 'Tomo café às 7.' },
          { emoji: '🛌', en: 'I\'m going to bed.', pt: 'Vou dormir.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '📋 GERAL vs ESPECÍFICO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🌍', rightIcon: '☝️', leftLabel: 'GERAL (sem artigo)', rightLabel: 'ESPECÍFICO (com THE)', left: 'I like coffee.', leftNote: 'Café em geral', right: 'I like <span class="hl-green">the</span> coffee here.', rightNote: 'ESSE café específico', explanation: 'Geral = sem artigo | Específico = THE' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I like <span class="hl-red">the</span> music.', leftNote: 'Tradução literal', right: 'I like music.', rightNote: 'Música em geral', explanation: 'Em geral = SEM artigo!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu gosto de música" (em geral):', options: ['I like the music', 'I like music', 'I like a music'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Educação é importante":', options: ['The education is important', 'Education is important', 'A education is important'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (sem artigo se for geral):', sentence: 'I play _____ soccer every day.', correctWord: '' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - SEM ARTIGO', items: [
          { emoji: '🌍', text: 'Coisas em GERAL: I like coffee' },
          { emoji: '👤', text: 'Nomes: Maria, Brazil' },
          { emoji: '🍽️', text: 'Refeições: breakfast, lunch, dinner' },
          { emoji: '⚽', text: 'Esportes: soccer, tennis' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '☕', pt: 'Eu gosto de café', en: 'I like coffee' }, { emoji: '🎵', pt: 'Eu gosto de música', en: 'I like music' },
        { emoji: '🏠', pt: 'Estou em casa', en: "I'm at home" }, { emoji: '💼', pt: 'Estou no trabalho', en: "I'm at work" },
        { emoji: '🍳', pt: 'Café da manhã', en: 'Breakfast' }, { emoji: '🥗', pt: 'Almoço', en: 'Lunch' },
        { emoji: '🍝', pt: 'Jantar', en: 'Dinner' }, { emoji: '⚽', pt: 'Eu jogo futebol', en: 'I play soccer' },
      ]
    },

  { id: 'how-many', title: 'HOW MANY', emoji: '🔢❓', description: 'Quantos (contável)', module: 4, order: 7,    slides: [
        { type: 'title', emoji: '🔢❓', title: 'HOW MANY', subtitle: 'Quantos (coisas contáveis)' },
        { type: 'situation', emoji: '🍎', cardClass: 'purple', text: 'Você vai fazer uma festa.<br>Precisa saber <strong>QUANTAS</strong> pessoas vão.<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar quantidade de coisas que <strong>DÁ PRA CONTAR</strong>:', keyword: 'HOW MANY', keywordAfter: 'Quantos? Quantas?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>HOW MANY</strong> soa como "RÁU MÉNI"<br><br>MANY rima com "penny"' },
        { type: 'example', cardClass: 'cyan', emoji: '👥', question: '<span class="hl-cyan">How many</span> people are coming?', questionTr: 'Quantas pessoas vêm?', questionUse: 'Contável: pessoas, coisas que dá pra contar.', answer: 'About ten.', answerTr: 'Umas dez.' , answerUse: 'About = aproximadamente. Use pra não ser exato.' },
        { type: 'example', cardClass: 'cyan', emoji: '🍎', question: '<span class="hl-cyan">How many</span> apples do you want?', questionTr: 'Quantas maçãs você quer?', questionUse: 'No mercado/feira. HOW MANY + substantivo plural.', answer: 'Three, please.', answerTr: 'Três, por favor.' , answerUse: 'Número + please = educado. "Three, please."' },
        { type: 'example', cardClass: 'cyan', emoji: '👶', question: '<span class="hl-cyan">How many</span> kids do you have?', questionTr: 'Quantos filhos você tem?', questionUse: 'Conhecendo alguém. Kids = filhos (informal).', answer: 'Two boys.', answerTr: 'Dois meninos.' , answerUse: 'Pode detalhar: two boys / one girl / three kids.' },
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'COMO SABER SE É CONTÁVEL?', text: 'Pergunte: "Posso colocar um número na frente?"<br><br>✅ 3 apples, 5 people → CONTÁVEL<br>❌ 3 waters, 5 moneys → INCONTÁVEL' },
        { type: 'list', cardClass: 'cyan', title: '🔢 COISAS CONTÁVEIS (use HOW MANY)', items: [
          { emoji: '👥', text: '<strong>people</strong> - pessoas (1, 2, 3...)' },
          { emoji: '🚗', text: '<strong>cars</strong> - carros' },
          { emoji: '📅', text: '<strong>days</strong> - dias' },
          { emoji: '🏠', text: '<strong>rooms</strong> - quartos' },
          { emoji: '📚', text: '<strong>books</strong> - livros' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🎯 PERGUNTAS COMUNS', items: [
          { emoji: '⏰', en: '<span class="hl-cyan">How many</span> hours?', pt: 'Quantas horas?' , use: 'Pergunta rápida sobre duração em horas.' },
          { emoji: '📅', en: '<span class="hl-cyan">How many</span> days?', pt: 'Quantos dias?' , use: 'Perguntando quantidade de dias.' },
          { emoji: '🏠', en: '<span class="hl-cyan">How many</span> rooms does it have?', pt: 'Quantos quartos tem?' , use: 'Pra apartamento/casa. DOES porque "it" é 3ª pessoa.' },
          { emoji: '👶', en: '<span class="hl-cyan">How many</span> brothers do you have?', pt: 'Quantos irmãos você tem?' , use: 'Conhecendo a família de alguém.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🔢 HOW MANY vs HOW MUCH (de novo!)', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🍎', rightIcon: '💧', leftLabel: 'HOW MANY (contável)', rightLabel: 'HOW MUCH (incontável)', left: '<span class="hl-cyan">How many</span> bottles?', leftNote: '1 garrafa, 2 garrafas, 3...', right: '<span class="hl-purple">How much</span> water?', rightNote: 'Não conta "águas"', explanation: 'Se tem plural com S → <strong>HOW MANY</strong>' },
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'TRUQUE RÁPIDO', text: 'A palavra tem <strong>S</strong> no final?<br><br>• apple<strong>S</strong> → HOW MANY<br>• car<strong>S</strong> → HOW MANY<br>• water (sem S) → HOW MUCH' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'How much people?', leftNote: 'People é contável!', right: 'How many people?', rightNote: 'Correto!', explanation: '<strong>People</strong> são contáveis (1 pessoa, 2 pessoas...)' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quantos irmãos você tem?" em inglês:', options: ['How much brothers?', 'How many brothers?', 'How brothers?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Para perguntar quantidade de CARROS:', options: ['How much cars?', 'How many cars?', 'How cars many?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (perguntando sobre pessoas):', sentence: '_____ people are here?', correctWord: 'How many' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - HOW MANY', items: [
          { emoji: '🔢', text: '<strong>HOW MANY</strong> = quantos/quantas' },
          { emoji: '✅', text: 'Use para coisas contáveis (com número)' },
          { emoji: '⚡', text: 'Truque: tem S no final? → HOW MANY' },
          { emoji: '👥', text: 'People, cars, days, hours = MANY' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '👥', pt: 'Quantas pessoas?', en: 'How many people?' },
        { emoji: '🍎', pt: 'Quantas maçãs?', en: 'How many apples?' },
        { emoji: '📅', pt: 'Quantos dias?', en: 'How many days?' },
        { emoji: '🚗', pt: 'Quantos carros?', en: 'How many cars?' },
        { emoji: '👶', pt: 'Quantos filhos?', en: 'How many kids?' },
        { emoji: '🏠', pt: 'Quantos quartos?', en: 'How many rooms?' },
        { emoji: '📚', pt: 'Quantos livros?', en: 'How many books?' },
        { emoji: '⏰', pt: 'Quantas horas?', en: 'How many hours?' },
        { emoji: '🎂', pt: 'Quantos anos você tem?', en: 'How old are you?' },
        { emoji: '🪑', pt: 'Quantas cadeiras?', en: 'How many chairs?' },
        { emoji: '👥', pt: 'Quantas pessoas?', en: 'How many people?', level: 1 },
        { emoji: '🍎', pt: 'Quantas maçãs?', en: 'How many apples?', level: 1 },
        { emoji: '📅', pt: 'Quantos dias?', en: 'How many days?', level: 1 },
        { emoji: '🚗', pt: 'Quantos carros?', en: 'How many cars?', level: 1 },
        { emoji: '👶', pt: 'Quantos filhos?', en: 'How many children?', level: 1 },
        { emoji: '🏠', pt: 'Quantos quartos?', en: 'How many rooms?', level: 1 },
        { emoji: '📱', pt: 'Quantos telefones?', en: 'How many phones?', level: 1 },
        { emoji: '💼', pt: 'Quantas horas?', en: 'How many hours?', level: 1 },
        { emoji: '📚', pt: 'Quantos livros?', en: 'How many books?', level: 1 },
        { emoji: '✈️', pt: 'Quantas vezes?', en: 'How many times?', level: 1 },
        { emoji: '🎂', pt: 'Quantos anos?', en: 'How many years?', level: 2 },
        { emoji: '🍕', pt: 'Quantas fatias?', en: 'How many slices?', level: 2 },
        { emoji: '💰', pt: 'Quantos dólares?', en: 'How many dollars?', level: 2 },
        { emoji: '🚌', pt: 'Quantos ônibus?', en: 'How many buses?', level: 2 },
        { emoji: '🗓️', pt: 'Quantas semanas?', en: 'How many weeks?', level: 2 },
      ]
    },

  { id: 'which', title: 'WHICH', emoji: '👆❓', description: 'Escolher opções', module: 4, order: 8, slides: [
        { type: 'title', emoji: '👆❓', title: 'WHICH', subtitle: 'Escolher entre opções' },
        { type: 'situation', emoji: '👕', cardClass: 'purple', text: 'Você está numa loja.<br>O vendedor mostra duas camisas.<br>Ele pergunta: <strong>QUAL</strong> você quer?<br><br>Como ele faz essa pergunta?' },
        { type: 'rule', cardClass: 'cyan', text: 'Quando tem <strong>OPÇÕES ESPECÍFICAS</strong> para escolher:', keyword: 'WHICH', keywordAfter: 'Escolha entre opções limitadas!' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>WHICH</strong> soa como "UÍTCH"<br><br>Parece "witch" (bruxa), mas o contexto diferencia!' },
        { type: 'example', cardClass: 'cyan', emoji: '🚗', question: '<span class="hl-cyan">Which</span> car is yours?', questionTr: 'Qual carro é o seu?', questionUse: 'Use quando está escolhendo entre opções visíveis.', answer: 'The red one.', answerTr: 'O vermelho.' , answerUse: 'Padrão: <strong>The + cor + one</strong> (the red one, the blue one).' },
        { type: 'example', cardClass: 'cyan', emoji: '📱', question: '<span class="hl-cyan">Which</span> one do you want?', questionTr: 'Qual você quer?', questionUse: 'Use quando existem opções na frente (este ou aquele).', answer: 'This one.', answerTr: 'Este aqui.' , answerUse: 'Resposta curta: <strong>This one</strong> (perto) / <strong>That one</strong> (longe).' },
        { type: 'example', cardClass: 'cyan', emoji: '🛣️', question: '<span class="hl-cyan">Which</span> way?', questionTr: 'Qual caminho?', questionUse: 'Muito usada quando está perdido. Pergunta rápida!', answer: 'Turn left.', answerTr: 'Vira à esquerda.' , answerUse: 'Turn left = vira à esquerda. Turn right = vira à direita.' },
        { type: 'examples', cardClass: 'cyan', title: '👆 ESCOLHAS COMUNS', items: [
          { emoji: '🚪', en: '<span class="hl-cyan">Which</span> door?', pt: 'Qual porta?' , use: 'Pergunta curta! Quando as opções são óbvias, não precisa de frase completa.' },
          { emoji: '📚', en: '<span class="hl-cyan">Which</span> book do you recommend?', pt: 'Qual livro você recomenda?' , use: 'Recommend = recomendar. Boa pra pedir sugestão.' },
          { emoji: '🍕', en: '<span class="hl-cyan">Which</span> flavor do you want?', pt: 'Qual sabor você quer?' , use: 'Use quando há sabores/opções limitadas (menu).' },
          { emoji: '👕', en: '<span class="hl-cyan">Which</span> size is this?', pt: 'Qual tamanho é esse?' , use: 'Na loja de roupas. Sizes: S (small), M (medium), L (large), XL.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🤔 WHICH vs WHAT', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '👆', rightIcon: '❓', leftLabel: 'WHICH (limitado)', rightLabel: 'WHAT (aberto)', left: '<span class="hl-cyan">Which</span> color? Red or blue?', leftNote: 'Opções específicas (2-3 escolhas)', right: '<span class="hl-purple">What</span> color do you like?', rightNote: 'Qualquer cor possível', explanation: '<strong>WHICH</strong> = escolha limitada | <strong>WHAT</strong> = pergunta aberta' },
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'QUANDO USAR WHICH', text: 'Use <strong>WHICH</strong> quando:<br><br>• Tem 2-5 opções visíveis<br>• Está apontando para coisas<br>• As opções são conhecidas' },
        { type: 'examples', cardClass: 'green', title: '✅ WHICH ONE / WHICH ONES', items: [
          { emoji: '👆', en: '<span class="hl-cyan">Which one</span> is better?', pt: 'Qual é melhor? (singular)' , use: 'ONE = singular. Comparando dois itens.' },
          { emoji: '👆', en: '<span class="hl-cyan">Which ones</span> do you want?', pt: 'Quais você quer? (plural)' , use: 'ONES = plural. Escolhendo vários de um grupo.' },
          { emoji: '🍎', en: 'I like this one. <span class="hl-cyan">Which one</span> do you like?', pt: 'Eu gosto deste. Qual você gosta?' , use: 'Apontando pra opções. Responda: "This one" ou "That one".' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Which is your favorite color?', leftNote: 'Pergunta aberta demais', right: 'What is your favorite color?', rightNote: 'WHAT para perguntas abertas', explanation: 'Se não há opções específicas, use <strong>WHAT</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Para escolher entre opções específicas:', options: ['WHAT', 'WHICH', 'WHO'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Vendedor mostra 3 camisas: "_____ one do you want?"', options: ['What', 'Which', 'Who'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (escolhendo entre 2 carros):', sentence: '_____ car is yours?', correctWord: 'Which' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - WHICH', items: [
          { emoji: '👆', text: '<strong>WHICH</strong> = qual (entre opções)' },
          { emoji: '🔢', text: 'Use quando tem opções limitadas' },
          { emoji: '🗣️', text: 'Pronúncia: "UÍTCH"' },
          { emoji: '💡', text: 'WHICH ONE = qual (singular)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🚗', pt: 'Qual carro é o seu?', en: 'Which car is yours?', level: 1 },
        { emoji: '📱', pt: 'Qual você quer?', en: 'Which one do you want?', level: 2 },
        { emoji: '🛣️', pt: 'Qual caminho?', en: 'Which way?', level: 1 },
        { emoji: '🚪', pt: 'Qual porta?', en: 'Which door?', level: 1 },
        { emoji: '📚', pt: 'Qual livro?', en: 'Which book?', level: 1 },
        { emoji: '🎬', pt: 'Qual filme você prefere?', en: 'Which movie do you prefer?', level: 2 },
        { emoji: '🍕', pt: 'Qual sabor?', en: 'Which flavor?', level: 1 },
        { emoji: '👕', pt: 'Qual tamanho?', en: 'Which size?', level: 1 },
        { emoji: '🎨', pt: 'Qual cor?', en: 'Which color?', level: 1 },
        { emoji: '📅', pt: 'Qual dia?', en: 'Which day?', level: 1 },
      ]
    },

  { id: 'what-time', title: 'WHAT TIME', emoji: '⏰❓', description: 'Perguntar que horas', module: 4, order: 9,    slides: [
        { type: 'title', emoji: '⏰❓', title: 'WHAT TIME', subtitle: 'Perguntar sobre horários' },
        { type: 'situation', emoji: '😰', cardClass: 'purple', text: 'Você está no ponto de ônibus.<br>Não sabe <strong>QUE HORAS</strong> o ônibus passa.<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar sobre <strong>HORÁRIOS</strong>:', keyword: 'WHAT TIME', keywordAfter: 'Que horas...? / A que horas...?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>WHAT TIME</strong> soa como "UÓT TÁIM"<br><br>Fala rápido, quase junto: "uót-táim"' },
        { type: 'example', cardClass: 'cyan', emoji: '⏰', question: '<span class="hl-cyan">What time</span> is it?', questionTr: 'Que horas são?', questionUse: 'A pergunta mais básica de horário.', answer: "It\'s 3 o\'clock.", answerTr: 'São 3 horas.' , answerUse: 'Resposta: <strong>It\'s</strong> + hora. O\'clock = horas cheias.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚌', question: '<span class="hl-cyan">What time</span> does the bus come?', questionTr: 'Que horas o ônibus vem?', questionUse: 'Pra transporte público. DOES porque "the bus" é 3ª pessoa.', answer: 'At 7:30.', answerTr: 'Às 7:30.' , answerUse: '<strong>At</strong> + horário. At 7:30 = às 7:30.' },
        { type: 'example', cardClass: 'cyan', emoji: '🏢', question: '<span class="hl-cyan">What time</span> do you start work?', questionTr: 'Que horas você começa a trabalhar?', questionUse: 'Pergunta comum no trabalho. DO porque "you" = 2ª pessoa.', answer: 'At 8 AM.', answerTr: 'Às 8 da manhã.' , answerUse: 'AM = manhã (ante meridiem). PM = tarde/noite.' },
        { type: 'examples', cardClass: 'cyan', title: '📚 PERGUNTAS ESSENCIAIS', items: [
          { emoji: '🛫', en: '<span class="hl-cyan">What time</span> is the flight?', pt: 'Que horas é o voo?' , use: 'No aeroporto. Flight = voo.' },
          { emoji: '🍽️', en: '<span class="hl-cyan">What time</span> is dinner?', pt: 'Que horas é o jantar?' , use: 'Dinner = jantar. Lunch = almoço. Breakfast = café da manhã.' },
          { emoji: '🏪', en: '<span class="hl-cyan">What time</span> does it open?', pt: 'Que horas abre?' , use: 'Pra lojas/estabelecimentos. DOES + open (base).' },
          { emoji: '🔒', en: '<span class="hl-cyan">What time</span> does it close?', pt: 'Que horas fecha?' , use: 'Close = fechar. "What time does the store close?"' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'RESPONDENDO HORÁRIOS', text: 'Use <strong>AT</strong> + horário:<br><br>• At 5 o\'clock<br>• At 7:30 (seven thirty)<br>• At noon (meio-dia)<br>• At midnight (meia-noite)' },
        { type: 'examples', cardClass: 'green', title: '🕐 COMO DIZER AS HORAS', items: [
          { emoji: '🕐', en: "It\'s <span class='hl-green'>one o\'clock</span>", pt: 'É uma hora' , use: '"O\'clock" só se usa com horas cheias (1, 2, 3...).' },
          { emoji: '🕝', en: "It\'s <span class='hl-green'>2:30</span> (two thirty)", pt: 'São 2:30' , use: 'Diga o número + minutos: 2:30 = two thirty.' },
          { emoji: '🕘', en: "It\'s <span class='hl-green'>9:15</span> (nine fifteen)", pt: 'São 9:15' , use: '9:15 = nine fifteen. Simples: número + minutos.' },
          { emoji: '🕚', en: "It\'s <span class='hl-green'>11:45</span> (eleven forty-five)", pt: 'São 11:45' , use: '11:45 = eleven forty-five. Ou: quarter to twelve.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'AM vs PM', text: '<strong>AM</strong> = manhã (0h - 12h)<br><strong>PM</strong> = tarde/noite (12h - 24h)<br><br>8 AM = 8 da manhã<br>8 PM = 8 da noite' },
        { type: 'comparison', cardClass: 'cyan', title: '⏰ WHAT TIME vs WHEN', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⏰', rightIcon: '📅', leftLabel: 'WHAT TIME (horário específico)', rightLabel: 'WHEN (mais geral)', left: '<span class="hl-cyan">What time</span> is the meeting?', leftNote: 'Quer saber a hora exata', right: '<span class="hl-purple">When</span> is the meeting?', rightNote: 'Pode ser dia, hora, etc.', explanation: '<strong>WHAT TIME</strong> = hora específica | <strong>WHEN</strong> = mais aberto' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'What hour is it?', leftNote: 'Tradução literal do português', right: 'What time is it?', rightNote: 'Forma correta em inglês', explanation: 'Em inglês usamos <strong>TIME</strong>, não "hour" para perguntar!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Que horas são?" em inglês:', options: ['What hour is it?', 'What time is it?', 'Which time is it?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Que horas abre?" em inglês:', options: ['What time opens?', 'What time does it open?', 'What time it opens?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ does the bus come?', correctWord: 'What time' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - WHAT TIME', items: [
          { emoji: '⏰', text: '<strong>WHAT TIME</strong> = que horas' },
          { emoji: '🎯', text: 'Use para horários específicos' },
          { emoji: '📍', text: 'Responda com AT + horário' },
          { emoji: '☀️', text: 'AM = manhã | PM = tarde/noite' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '⏰', pt: 'Que horas são?', en: 'What time is it?', level: 1 },
        { emoji: '🚌', pt: 'Que horas o ônibus vem?', en: 'What time does the bus come?', level: 2 },
        { emoji: '🏪', pt: 'Que horas abre?', en: 'What time does it open?', level: 2 },
        { emoji: '🔒', pt: 'Que horas fecha?', en: 'What time does it close?', level: 2 },
        { emoji: '🏢', pt: 'Que horas você começa?', en: 'What time do you start?', level: 2 },
        { emoji: '🏠', pt: 'Que horas você chega em casa?', en: 'What time do you get home?', level: 2 },
        { emoji: '🛫', pt: 'Que horas é o voo?', en: 'What time is the flight?', level: 2 },
        { emoji: '🍽️', pt: 'Que horas é o jantar?', en: 'What time is dinner?', level: 1 },
        { emoji: '😴', pt: 'Que horas você acorda?', en: 'What time do you wake up?', level: 2 },
        { emoji: '🛏️', pt: 'Que horas você dorme?', en: 'What time do you go to bed?', level: 2 },
      ]
    },

  { id: 'how-long', title: 'HOW LONG', emoji: '⏱️❓', description: 'Quanto tempo / Qual o tamanho', module: 4, order: 10,    slides: [
        { type: 'title', emoji: '⏱️❓', title: 'HOW LONG', subtitle: 'Quanto tempo / Qual o comprimento' },
        { type: 'situation', emoji: '🚗', cardClass: 'purple', text: 'Você vai pegar um Uber.<br>Quer saber <strong>QUANTO TEMPO</strong> demora até chegar.<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar sobre <strong>DURAÇÃO</strong> ou <strong>COMPRIMENTO</strong>:', keyword: 'HOW LONG', keywordAfter: 'Quanto tempo...? / Qual o tamanho...?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>HOW LONG</strong> soa como "RÁU LÓNG"<br><br>O "O" de LONG é aberto, como "ó"' },
        { type: 'example', cardClass: 'cyan', emoji: '⏱️', question: '<span class="hl-cyan">How long</span> does it take?', questionTr: 'Quanto tempo leva?', questionUse: 'Pergunta clássica de duração. Essencial no dia a dia.', answer: 'About 20 minutes.', answerTr: 'Uns 20 minutos.' , answerUse: 'Responda com minutes / hours / days.' },
        { type: 'example', cardClass: 'cyan', emoji: '🏠', question: '<span class="hl-cyan">How long</span> have you lived here?', questionTr: 'Há quanto tempo você mora aqui?', questionUse: 'Duração até agora (present perfect: have + lived).', answer: 'For 3 years.', answerTr: 'Há 3 anos.' , answerUse: '<strong>For</strong> + período = há/faz (For 3 years = há 3 anos).' },
        { type: 'example', cardClass: 'cyan', emoji: '📏', question: '<span class="hl-cyan">How long</span> is the table?', questionTr: 'Qual o comprimento da mesa?', questionUse: 'HOW LONG também = comprimento físico (não só tempo!).', answer: '6 feet.', answerTr: '6 pés (≈1,8m).' , answerUse: 'Feet = pés (medida americana). 1 foot ≈ 30cm.' },
        { type: 'examples', cardClass: 'cyan', title: '⏱️ QUANTO TEMPO...?', items: [
          { emoji: '✈️', en: '<span class="hl-cyan">How long</span> is the flight?', pt: 'Quanto tempo dura o voo?' , use: 'Perguntando duração do voo.' },
          { emoji: '🎬', en: '<span class="hl-cyan">How long</span> is the movie?', pt: 'Quanto tempo dura o filme?' , use: 'Perguntando duração do filme. Responda em horas/minutos.' },
          { emoji: '🚌', en: '<span class="hl-cyan">How long</span> is the wait?', pt: 'Quanto tempo de espera?' , use: 'Na fila, no consultório, no restaurante...' },
          { emoji: '💼', en: '<span class="hl-cyan">How long</span> have you worked here?', pt: 'Há quanto tempo trabalha aqui?' , use: 'HAVE + past participle = tempo até agora (present perfect).' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'FRASE ESSENCIAL', text: 'A pergunta mais útil no dia a dia:<br><br><strong style="font-size:1.3rem">"How long does it take?"</strong><br><br>= Quanto tempo leva/demora?' },
        { type: 'examples', cardClass: 'green', title: '📏 COMPRIMENTO / TAMANHO', items: [
          { emoji: '📏', en: '<span class="hl-green">How long</span> is the rope?', pt: 'Qual o comprimento da corda?' , use: 'Aqui HOW LONG = comprimento físico, não tempo!' },
          { emoji: '🛣️', en: '<span class="hl-green">How long</span> is the road?', pt: 'Qual o comprimento da estrada?' , use: 'Distância da estrada. Responda em miles/km.' },
          { emoji: '🐍', en: '<span class="hl-green">How long</span> is the snake?', pt: 'Qual o tamanho da cobra?' , use: 'Tamanho físico de algo. Responda em feet/meters.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'RESPONDENDO', text: 'Para TEMPO:<br>• <strong>For</strong> + período (for 2 hours)<br>• <strong>About</strong> + tempo (about 30 minutes)<br><br>Para TAMANHO:<br>• Número + unidade (10 feet, 3 meters)' },
        { type: 'comparison', cardClass: 'cyan', title: '⏱️ HOW LONG vs HOW MUCH TIME', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⏱️', rightIcon: '⏰', leftLabel: 'HOW LONG (natural)', rightLabel: 'HOW MUCH TIME (ok)', left: '<span class="hl-cyan">How long</span> does it take?', leftNote: 'Forma mais comum/natural', right: '<span class="hl-purple">How much time</span> do we have?', rightNote: 'Também correto', explanation: 'Ambos funcionam, mas <strong>HOW LONG</strong> é mais usado!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'How long time does it take?', leftNote: 'Redundante', right: 'How long does it take?', rightNote: 'LONG já inclui "tempo"', explanation: 'Não precisa de "time" depois de HOW LONG!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quanto tempo leva?" em inglês:', options: ['How much long?', 'How long does it take?', 'How time is it?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Há quanto tempo você trabalha aqui?" em inglês:', options: ['How long you work here?', 'How long time do you work?', 'How long have you worked here?'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ is the flight?', correctWord: 'How long' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - HOW LONG', items: [
          { emoji: '⏱️', text: '<strong>HOW LONG</strong> = quanto tempo / comprimento' },
          { emoji: '🎯', text: 'Essencial: "How long does it take?"' },
          { emoji: '✅', text: 'Responda: for + período ou about + tempo' },
          { emoji: '⚠️', text: 'Não use "time" depois de HOW LONG' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '⏱️', pt: 'Quanto tempo leva?', en: 'How long does it take? / How long will it take?', level: 2 },
        { emoji: '✈️', pt: 'Quanto tempo dura o voo?', en: 'How long is the flight?', level: 2 },
        { emoji: '🎬', pt: 'Quanto tempo dura o filme?', en: 'How long is the movie?', level: 2 },
        { emoji: '🚌', pt: 'Quanto tempo de espera?', en: 'How long is the wait?', level: 2 },
        { emoji: '🏠', pt: 'Há quanto tempo você mora aqui?', en: 'How long have you lived here?', level: 2 },
        { emoji: '💼', pt: 'Há quanto tempo trabalha aqui?', en: 'How long have you worked here?', level: 2 },
        { emoji: '📏', pt: 'Qual o comprimento?', en: 'How long is it?', level: 1 },
        { emoji: '🚗', pt: 'Quanto tempo de carro?', en: 'How long by car?', level: 1 },
        { emoji: '🚶', pt: 'Quanto tempo a pé?', en: 'How long on foot?', level: 1 },
        { emoji: '⏰', pt: 'Uns 20 minutos', en: 'About 20 minutes', level: 1 },
      ]
    },

  { id: 'how-often', title: 'HOW OFTEN', emoji: '🔄❓', description: 'Com que frequência', module: 4, order: 11,    slides: [
        { type: 'title', emoji: '🔄❓', title: 'HOW OFTEN', subtitle: 'Perguntar sobre frequência' },
        { type: 'situation', emoji: '🏋️', cardClass: 'purple', text: 'Você conhece alguém na academia.<br>Quer saber <strong>COM QUE FREQUÊNCIA</strong> ele vai malhar.<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar <strong>COM QUE FREQUÊNCIA</strong> algo acontece:', keyword: 'HOW OFTEN', keywordAfter: 'Com que frequência...? / Quantas vezes...?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>HOW OFTEN</strong> soa como "RÁU ÓFEN"<br><br>O "T" de OFTEN pode ser mudo ou pronunciado.' },
        { type: 'example', cardClass: 'cyan', emoji: '🏋️', question: '<span class="hl-cyan">How often</span> do you go to the gym?', questionTr: 'Com que frequência você vai à academia?', questionUse: 'Frequência de hábitos/rotina.', answer: 'Three times a week.', answerTr: 'Três vezes por semana.' , answerUse: 'Padrão: <strong>X times a day/week/month</strong>.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚌', question: '<span class="hl-cyan">How often</span> does the bus come?', questionTr: 'De quanto em quanto tempo o ônibus passa?', questionUse: 'Frequência de eventos/serviços. DOES pra "the bus".', answer: 'Every 15 minutes.', answerTr: 'A cada 15 minutos.' , answerUse: '<strong>Every</strong> + tempo = a cada (every 15 minutes).' },
        { type: 'example', cardClass: 'cyan', emoji: '👨‍👩‍👧', question: '<span class="hl-cyan">How often</span> do you see your family?', questionTr: 'Com que frequência você vê sua família?', questionUse: 'Pergunta pessoal. Muito comum entre brasileiros nos EUA.', answer: 'Once a month.', answerTr: 'Uma vez por mês.' , answerUse: 'Once = uma vez. Twice = duas. Three times = três.' },
        { type: 'examples', cardClass: 'cyan', title: '📚 PERGUNTAS COMUNS', items: [
          { emoji: '🍽️', en: '<span class="hl-cyan">How often</span> do you eat out?', pt: 'Com que frequência você come fora?' , use: 'Eat out = comer fora. Hábito comum nos EUA.' },
          { emoji: '✈️', en: '<span class="hl-cyan">How often</span> do you travel?', pt: 'Com que frequência você viaja?' , use: 'Perguntando frequência de viagens.' },
          { emoji: '🧹', en: '<span class="hl-cyan">How often</span> do you clean?', pt: 'Com que frequência você limpa?' , use: 'Pergunta comum em serviços de limpeza/cleaning.' },
          { emoji: '💊', en: '<span class="hl-cyan">How often</span> should I take this?', pt: 'Com que frequência devo tomar isso?' , use: 'Na farmácia/médico. Should = deveria.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'COMO RESPONDER', text: 'Palavras de frequência:<br><br>• <strong>Always</strong> - sempre (100%)<br>• <strong>Usually</strong> - geralmente (80%)<br>• <strong>Sometimes</strong> - às vezes (50%)<br>• <strong>Rarely</strong> - raramente (20%)<br>• <strong>Never</strong> - nunca (0%)' },
        { type: 'examples', cardClass: 'green', title: '🔢 OUTRAS RESPOSTAS', items: [
          { emoji: '1️⃣', en: '<span class="hl-green">Once</span> a week', pt: 'Uma vez por semana' , use: 'Once = uma vez. Once a week = uma vez por semana.' },
          { emoji: '2️⃣', en: '<span class="hl-green">Twice</span> a month', pt: 'Duas vezes por mês' , use: 'Twice = duas vezes. Só existe pra 1 (once) e 2 (twice).' },
          { emoji: '3️⃣', en: '<span class="hl-green">Three times</span> a day', pt: 'Três vezes por dia' , use: 'A partir de 3, use: number + times.' },
          { emoji: '⏰', en: '<span class="hl-green">Every</span> 2 hours', pt: 'A cada 2 horas' , use: 'Every = cada/todo. Every day, every week, every 2 hours.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'ONCE, TWICE, THREE TIMES', text: '• <strong>Once</strong> = uma vez<br>• <strong>Twice</strong> = duas vezes<br>• <strong>Three times</strong> = três vezes<br>• <strong>Four times</strong>... e assim por diante' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'How many times often you go?', leftNote: 'Misturando estruturas', right: 'How often do you go?', rightNote: 'Forma correta', explanation: 'Use <strong>HOW OFTEN</strong> ou <strong>HOW MANY TIMES</strong>, não os dois!' },
        { type: 'comparison', cardClass: 'cyan', title: '🔄 HOW OFTEN vs HOW MANY TIMES', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🔄', rightIcon: '🔢', leftLabel: 'HOW OFTEN (geral)', rightLabel: 'HOW MANY TIMES (específico)', left: '<span class="hl-cyan">How often</span> do you exercise?', leftNote: 'Frequência habitual', right: '<span class="hl-purple">How many times</span> did you call?', rightNote: 'Número específico de vezes', explanation: '<strong>HOW OFTEN</strong> = hábito | <strong>HOW MANY TIMES</strong> = contagem' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Com que frequência você vai ao médico?" em inglês:', options: ['How many times you go to the doctor?', 'How often do you go to the doctor?', 'How frequent go you to doctor?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Como dizer "duas vezes por semana":', options: ['Two times a week', 'Twice a week', 'Ambos estão corretos'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ do you work out?', correctWord: 'How often' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - HOW OFTEN', items: [
          { emoji: '🔄', text: '<strong>HOW OFTEN</strong> = com que frequência' },
          { emoji: '🔢', text: 'Once, twice, three times...' },
          { emoji: '📊', text: 'Always, usually, sometimes, never' },
          { emoji: '⏰', text: 'Every + período (every day, every week)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏋️', pt: 'Com que frequência você malha?', en: 'How often do you work out?' },
        { emoji: '🚌', pt: 'De quanto em quanto tempo?', en: 'How often does it come?' },
        { emoji: '🍽️', pt: 'Com que frequência você come fora?', en: 'How often do you eat out?' },
        { emoji: '1️⃣', pt: 'Uma vez por semana', en: 'Once a week' },
        { emoji: '2️⃣', pt: 'Duas vezes por mês', en: 'Twice a month' },
        { emoji: '3️⃣', pt: 'Três vezes por dia', en: 'Three times a day' },
        { emoji: '⏰', pt: 'A cada 2 horas', en: 'Every 2 hours' },
        { emoji: '📅', pt: 'Todo dia', en: 'Every day' },
        { emoji: '✅', pt: 'Sempre', en: 'Always' },
        { emoji: '❌', pt: 'Nunca', en: 'Never' },
      ]
    },

  { id: 'how-far', title: 'HOW FAR', emoji: '📍❓', description: 'A que distância / Quão longe', module: 4, order: 12,    slides: [
        { type: 'title', emoji: '📍❓', title: 'HOW FAR', subtitle: 'Perguntar sobre distância' },
        { type: 'situation', emoji: '🏨', cardClass: 'purple', text: 'Você está no hotel.<br>Quer ir até a praia, mas não sabe <strong>QUÃO LONGE</strong> fica.<br><br>Como perguntar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar sobre <strong>DISTÂNCIA</strong>:', keyword: 'HOW FAR', keywordAfter: 'Quão longe...? / A que distância...?' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>HOW FAR</strong> soa como "RÁU FÁR"<br><br>O "A" de FAR é aberto, como em "car".' },
        { type: 'example', cardClass: 'cyan', emoji: '🏖️', question: '<span class="hl-cyan">How far</span> is the beach?', questionTr: 'Quão longe fica a praia?', questionUse: 'Distância até um lugar. Resposta em miles (EUA).', answer: 'About 2 miles.', answerTr: 'Uns 2 milhas (≈3km).' , answerUse: 'Miles = milhas. 1 mile ≈ 1.6 km. About = aproximadamente.' },
        { type: 'example', cardClass: 'cyan', emoji: '🏢', question: '<span class="hl-cyan">How far</span> is the office from here?', questionTr: 'A que distância fica o escritório daqui?', questionUse: '"From here" = daqui. Sempre no final da pergunta.', answer: '10 minutes by car.', answerTr: '10 minutos de carro.' , answerUse: '<strong>By car</strong> = de carro. By bus / by train / on foot.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚶', question: '<span class="hl-cyan">How far</span> can you walk?', questionTr: 'Até onde você consegue andar?', questionUse: 'CAN = conseguir/poder. Perguntando capacidade.', answer: 'A few blocks.', answerTr: 'Algumas quadras.' , answerUse: 'A few blocks = algumas quadras. Block = quarteirão.' },
        { type: 'examples', cardClass: 'cyan', title: '📚 PERGUNTAS COMUNS', items: [
          { emoji: '🛒', en: '<span class="hl-cyan">How far</span> is the supermarket?', pt: 'Quão longe é o supermercado?' , use: 'Perguntando distância até o mercado.' },
          { emoji: '🏥', en: '<span class="hl-cyan">How far</span> is the hospital?', pt: 'Quão longe é o hospital?' , use: 'Em emergência. Responda em miles ou minutes.' },
          { emoji: '✈️', en: '<span class="hl-cyan">How far</span> is New York from here?', pt: 'Quão longe fica NY daqui?' , use: '"From here" = daqui. Sempre no final.' },
          { emoji: '🚗', en: '<span class="hl-cyan">How far</span> did you drive?', pt: 'Quanto você dirigiu?' , use: 'Distância percorrida. DID + drive (base).' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'RESPONDENDO DISTÂNCIA', text: 'Nos EUA, distância é em <strong>MILES</strong>:<br><br>• 1 mile ≈ 1.6 km<br>• 5 miles ≈ 8 km<br><br>Ou em tempo: "10 minutes away"' },
        { type: 'examples', cardClass: 'green', title: '📏 FORMAS DE RESPONDER', items: [
          { emoji: '📏', en: "It\'s <span class='hl-green'>2 miles</span> away", pt: 'Fica a 2 milhas' , use: 'Miles = milhas (1 mile ≈ 1.6 km). Away = de distância.' },
          { emoji: '⏱️', en: "It\'s <span class='hl-green'>10 minutes</span> from here", pt: 'Fica a 10 min daqui' , use: 'Americanos medem distância em minutos, não km!' },
          { emoji: '🚶', en: "It\'s <span class='hl-green'>walking distance</span>", pt: 'Dá pra ir a pé' , use: 'Walking distance = perto o suficiente pra ir a pé.' },
          { emoji: '🏠', en: "It\'s <span class='hl-green'>right around the corner</span>", pt: 'É logo ali na esquina' , use: '"Logo ali na esquina" — expressão muito usada.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '⚡', title: 'EXPRESSÕES ÚTEIS', text: '• <strong>Not far</strong> = não é longe<br>• <strong>Pretty far</strong> = bem longe<br>• <strong>Too far to walk</strong> = longe demais pra ir a pé<br>• <strong>Close by</strong> = pertinho' },
        { type: 'comparison', cardClass: 'cyan', title: '📍 HOW FAR vs HOW LONG', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '📍', rightIcon: '⏱️', leftLabel: 'HOW FAR (distância)', rightLabel: 'HOW LONG (tempo)', left: '<span class="hl-cyan">How far</span> is it?', leftNote: 'Quantos km/milhas?', right: '<span class="hl-purple">How long</span> does it take?', rightNote: 'Quantos minutos/horas?', explanation: '<strong>FAR</strong> = distância | <strong>LONG</strong> = tempo' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'How much far is it?', leftNote: 'Misturando estruturas', right: 'How far is it?', rightNote: 'Forma correta', explanation: 'Não use "much" com HOW FAR!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Quão longe fica o aeroporto?" em inglês:', options: ['How long is the airport?', 'How far is the airport?', 'How much far is the airport?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Dá pra ir a pé" em inglês:', options: ['It\'s walk distance', 'It\'s walking distance', 'It\'s far to walk'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ is the beach from here?', correctWord: 'How far' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - HOW FAR', items: [
          { emoji: '📍', text: '<strong>HOW FAR</strong> = quão longe / a que distância' },
          { emoji: '🇺🇸', text: 'Nos EUA: distância em MILES (1 mi ≈ 1.6 km)' },
          { emoji: '⏱️', text: 'Pode responder em tempo: "10 minutes away"' },
          { emoji: '🚶', text: 'Walking distance = dá pra ir a pé' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏖️', pt: 'Quão longe fica a praia?', en: 'How far is the beach?', level: 2 },
        { emoji: '🏢', pt: 'A que distância fica daqui?', en: 'How far is it from here?', level: 2 },
        { emoji: '🛒', pt: 'Quão longe é o mercado?', en: 'How far is the supermarket?', level: 2 },
        { emoji: '📏', pt: 'Fica a 2 milhas', en: "It\'s 2 miles away" },
        { emoji: '⏱️', pt: 'Fica a 10 minutos daqui', en: "It\'s 10 minutes from here" },
        { emoji: '🚶', pt: 'Dá pra ir a pé', en: "It\'s walking distance" },
        { emoji: '🏠', pt: 'É logo ali', en: "It\'s right around the corner" },
        { emoji: '❌', pt: 'É longe demais', en: "It\'s too far" },
        { emoji: '✅', pt: 'Não é longe', en: "It\'s not far" },
        { emoji: '📍', pt: 'É pertinho', en: "It\'s close by" },
      ]
    },

  { id: 'ordering-food-basic', title: 'Ordering Food (Basic)', emoji: '🍔🍟', description: 'Pedir comida - básico', module: 4, order: 13,    slides: [
        { type: 'title', emoji: '🍔🍟', title: 'ORDERING FOOD', subtitle: 'Pedir comida - básico' },
        { type: 'situation', emoji: '🍔', cardClass: 'purple', text: 'Você está num fast food.<br>O atendente pergunta: "What can I get you?"<br><br>Como pedir comida?' },
        { type: 'rule', cardClass: 'cyan', text: 'Formas de pedir comida:', keyword: "I'll have... | Can I get...?", keywordAfter: 'Ambas são educadas!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'FRASES ESSENCIAIS', text: "<strong>I'll have...</strong> = Vou querer...<br><strong>Can I get...?</strong> = Posso pegar...?<br><strong>I'd like...</strong> = Eu gostaria de..." },
        { type: 'example', cardClass: 'cyan', emoji: '🍔', question: "<span class='hl-cyan'>I'll have</span> a burger, please.", questionTr: 'Vou querer um hambúrguer, por favor.', answer: "(I'll have = vou querer)", answerTr: 'Muito comum!' },
        { type: 'example', cardClass: 'cyan', emoji: '🍟', question: "<span class='hl-cyan'>Can I get</span> fries with that?", questionTr: 'Posso pegar batata com isso?', answer: '(Can I get = posso pegar)', answerTr: 'Informal' },
        { type: 'example', cardClass: 'green', emoji: '🥤', question: "<span class='hl-green'>And</span> a Coke, please.", questionTr: 'E uma Coca, por favor.', answer: '(adicionar item)', answerTr: 'Use AND' },
        { type: 'examples', cardClass: 'cyan', title: '🍔 PEDINDO', items: [
          { emoji: '🍔', en: "<span class='hl-cyan'>I'll have</span> a burger", pt: 'Vou querer um hambúrguer' },
          { emoji: '🍟', en: "<span class='hl-cyan'>With fries</span>", pt: 'Com batata frita' },
          { emoji: '🥤', en: "<span class='hl-cyan'>And a Coke</span>", pt: 'E uma Coca' },
          { emoji: '🧀', en: "<span class='hl-cyan'>With cheese</span>, please", pt: 'Com queijo, por favor' }
        ]},
        { type: 'rule', cardClass: 'orange', text: 'PERGUNTA IMPORTANTE:', keyword: 'FOR HERE or TO GO?', keywordAfter: 'Pra comer aqui ou pra levar?' },
        { type: 'examples', cardClass: 'orange', title: '📦 AQUI OU LEVAR?', items: [
          { emoji: '🪑', en: '<span class="hl-orange">For here</span>', pt: 'Pra comer aqui' },
          { emoji: '📦', en: '<span class="hl-orange">To go</span>', pt: 'Pra levar' },
          { emoji: '🚗', en: 'To go, please', pt: 'Pra levar, por favor' },
          { emoji: '🪑', en: "For here, please", pt: 'Pra comer aqui, por favor' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💰', title: 'PAGANDO', text: '<strong>How much is it?</strong><br>Quanto é?<br><br><strong>Can I pay with card?</strong><br>Posso pagar com cartão?<br><br><strong>Keep the change.</strong><br>Fica com o troco.' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ CUIDADO', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I <span class="hl-red">want</span> a burger.', leftNote: 'Soa rude', right: "<span class='hl-green'>I'll have</span> a burger.", rightNote: 'Educado', explanation: "I'll have é mais educado que I want" },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Pra levar":', options: ['For here', 'To go', 'Take away'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Vou querer um hambúrguer":', options: ['I want a burger', "I'll have a burger", 'Give me a burger'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "_____ a coffee, please.", correctWord: "I'll have" },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PEDIR COMIDA', items: [
          { emoji: '🍔', text: "<strong>I'll have...</strong> = Vou querer..." },
          { emoji: '❓', text: '<strong>Can I get...?</strong> = Posso pegar...?' },
          { emoji: '🪑', text: '<strong>For here</strong> = Pra comer aqui' },
          { emoji: '📦', text: '<strong>To go</strong> = Pra levar' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🍔', pt: 'Vou querer um hambúrguer', en: "I'll have a burger" }, { emoji: '🍟', pt: 'Com batata frita', en: 'With fries' },
        { emoji: '🥤', pt: 'E uma Coca', en: 'And a Coke' }, { emoji: '📦', pt: 'Pra levar', en: 'To go' },
        { emoji: '🪑', pt: 'Pra comer aqui', en: 'For here' }, { emoji: '💵', pt: 'Quanto é?', en: 'How much is it?' },
        { emoji: '🧾', pt: 'A conta, por favor', en: 'The check, please' }, { emoji: '💳', pt: 'Posso pagar com cartão?', en: 'Can I pay with card? / Can I pay by card? / Can I use a card?' },
        { emoji: '🙏', pt: 'Obrigado', en: 'Thank you / Thanks / Thank you very much' }, { emoji: '➕', pt: 'Mais alguma coisa?', en: 'Anything else?' },
      ]
    },

  { id: 'ordering-food-problems', title: 'Ordering Food (Problems)', emoji: '🍔❌', description: 'Problemas com pedido', module: 4, order: 14,    slides: [
        { type: 'title', emoji: '🍔❌', title: 'FOOD PROBLEMS', subtitle: 'Problemas com pedido' },
        { type: 'situation', emoji: '😕', cardClass: 'purple', text: 'Você pediu um hambúrguer SEM cebola.<br>Chegou COM cebola.<br><br>Como reclamar educadamente?' },
        { type: 'rule', cardClass: 'red', text: 'Quando algo está errado:', keyword: "This isn't what I ordered.", keywordAfter: 'Isso não é o que eu pedi.' },
        { type: 'example', cardClass: 'red', emoji: '❌', question: "<span class='hl-red'>This isn't</span> what I ordered.", questionTr: 'Isso não é o que eu pedi.', answer: '(reclamação educada)', answerTr: 'Direto ao ponto' },
        { type: 'example', cardClass: 'orange', emoji: '🧅', question: "I ordered <span class='hl-orange'>without</span> onions.", questionTr: 'Eu pedi sem cebola.', answer: '(explicando o erro)', answerTr: 'Especificando' },
        { type: 'example', cardClass: 'cyan', emoji: '🔄', question: "<span class='hl-cyan'>Can I get</span> a new one?", questionTr: 'Posso pegar outro?', answer: '(pedindo substituição)', answerTr: 'Solução' },
        { type: 'examples', cardClass: 'red', title: '❌ PROBLEMAS', items: [
          { emoji: '❌', en: "<span class='hl-red'>This isn't</span> what I ordered", pt: 'Não é o que eu pedi' },
          { emoji: '🥶', en: "<span class='hl-red'>It\'s cold</span>", pt: 'Está frio' },
          { emoji: '😕', en: "<span class='hl-red'>Something's wrong</span> with this", pt: 'Tem algo errado com isso' },
          { emoji: '⏰', en: "I've been <span class='hl-red'>waiting</span> for a long time", pt: 'Estou esperando há muito tempo' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🔄 SOLUÇÕES', items: [
          { emoji: '🔄', en: '<span class="hl-cyan">Can I get a new one?</span>', pt: 'Posso pegar outro?' },
          { emoji: '💰', en: '<span class="hl-cyan">Can I get a refund?</span>', pt: 'Posso ter reembolso?' },
          { emoji: '🔧', en: '<span class="hl-cyan">Can you fix this?</span>', pt: 'Pode arrumar isso?' },
          { emoji: '👨‍💼', en: '<span class="hl-cyan">Can I speak to the manager?</span>', pt: 'Posso falar com o gerente?' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '🗣️', title: 'SEJA EDUCADO', text: 'Mesmo reclamando, seja educado:<br><br><strong>Excuse me...</strong> (Com licença...)<br><strong>I\'m sorry, but...</strong> (Desculpa, mas...)<br><strong>...please.</strong> (...por favor.)' },
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'ESPECIFICANDO', text: 'Diga exatamente o que está errado:<br><br><strong>I ordered it without...</strong><br>Eu pedi sem...<br><br><strong>I asked for...</strong><br>Eu pedi...' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ TOM', leftClass: 'wrong', rightClass: 'right', leftIcon: '😠', rightIcon: '😊', leftLabel: 'RUDE', rightLabel: 'EDUCADO', left: 'This is <span class="hl-red">wrong</span>! Fix it!', leftNote: 'Agressivo', right: "Excuse me, <span class='hl-green'>this isn't</span> what I ordered.", rightNote: 'Educado', explanation: 'Seja firme, mas educado!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Isso não é o que eu pedi":', options: ["This isn't my order", "This isn't what I ordered", 'This is wrong order'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu pedi sem cebola":', options: ['I ordered no onions', 'I ordered without onions', 'I ask without onions'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Can I _____ a new one?', correctWord: 'get' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PROBLEMAS', items: [
          { emoji: '❌', text: "<strong>This isn't what I ordered</strong>" },
          { emoji: '🧅', text: '<strong>I ordered without...</strong> = Pedi sem...' },
          { emoji: '🔄', text: '<strong>Can I get a new one?</strong>' },
          { emoji: '👨‍💼', text: '<strong>Can I speak to the manager?</strong>' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '❌', pt: 'Não é o que eu pedi', en: "This isn't what I ordered" }, { emoji: '🥶', pt: 'Está frio', en: "It\'s cold" },
        { emoji: '🔥', pt: 'Está muito quente', en: "It\'s too hot" }, { emoji: '😕', pt: 'Está errado', en: "It\'s wrong" },
        { emoji: '🔄', pt: 'Posso trocar?', en: 'Can I exchange it?' }, { emoji: '💰', pt: 'Quero meu dinheiro de volta', en: 'I want my money back' },
        { emoji: '👨‍💼', pt: 'Posso falar com o gerente?', en: 'Can I speak to the manager?' }, { emoji: '⏰', pt: 'Estou esperando há muito tempo', en: "I've been waiting for a long time" },
        { emoji: '📝', pt: 'Eu pedi sem cebola', en: 'I ordered without onions' }, { emoji: '🤢', pt: 'Não está bom', en: "It doesn't taste right" },
      ]
    },

  { id: 'restaurant-fastfood', title: 'Restaurant & Fast Food', emoji: '🍔🍟', description: 'Restaurante e fast food', module: 4, order: 15,    slides: [
        { type: 'title', emoji: '🍔🍟', title: 'RESTAURANT & FAST FOOD', subtitle: 'No restaurante — Peça sem medo!' },
        { type: 'situation', emoji: '🍔', cardClass: 'orange', text: "Você está no McDonald's, Chipotle, Subway...<br>O atendente fala rápido: \"For here or to go?\"<br>\"What size?\" \"Anything else?\"<br><br>Hora de comer SEM passar vergonha!" },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'CULTURA DE RESTAURANTE NOS EUA', text: '<strong>Coisas que brasileiros não sabem:</strong><br><br>• "For here or to go?" = Comer aqui ou levar?<br>  (perguntam em TODO fast food)<br>• Refill grátis na maioria dos restaurantes<br>• Gorjeta de <strong>18-20%</strong> em restaurante com garçom<br>• Fast food = sem gorjeta<br>• "Check" = conta (não "bill" igual na Europa)' },
        { type: 'rule', cardClass: 'orange', text: 'Pedindo comida:', keyword: 'FOR HERE / TO GO / NO / EXTRA', keywordAfter: 'Aqui / Levar / Sem / Extra' },
        { type: 'example', cardClass: 'orange', emoji: '📦', question: '<span class="hl-orange">To go</span>.', questionTr: 'Pra levar.', answer: '"For here or to go?"', answerTr: 'A primeira pergunta que fazem!' },
        { type: 'example', cardClass: 'cyan', emoji: '🧅', question: '<span class="hl-cyan">No</span> onions.', questionTr: 'Sem cebola.', answer: '"No tomatoes." / "No pickles."', answerTr: 'NO + item = sem esse item.' },
        { type: 'example', cardClass: 'green', emoji: '🧀', question: '<span class="hl-green">Extra</span> cheese.', questionTr: 'Extra queijo.', answer: '"Anything else?"', answerTr: 'O atendente pergunta isso.' },
        { type: 'examples', cardClass: 'orange', title: '🍔 PEDINDO', items: [
          { emoji: '🪑', en: '<span class="hl-orange">Table for two</span>.', pt: 'Mesa pra dois.' },
          { emoji: '✅', en: '<span class="hl-orange">With everything</span>.', pt: 'Com tudo.' },
          { emoji: '💧', en: 'More <span class="hl-orange">water</span>, please.', pt: 'Mais água, por favor.' },
          { emoji: '⭐', en: "What\'s the <span class=\"hl-orange\">special</span> today?", pt: 'Qual é o especial do dia?' }
        ]},
        { type: 'examples', cardClass: 'red', title: '⚠️ PROBLEMAS COM PEDIDO', items: [
          { emoji: '❌', en: 'The <span class="hl-red">order</span> is wrong.', pt: 'O pedido tá errado.' },
          { emoji: '🙅', en: "This is <span class=\"hl-red\">not</span> what I ordered.", pt: 'Não é isso que eu pedi.' },
          { emoji: '🔍', en: "There's a <span class=\"hl-red\">missing</span> item.", pt: 'Falta um item.' },
          { emoji: '🔄', en: 'Can you <span class="hl-red">change</span> it?', pt: 'Pode trocar?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💰 PAGANDO', items: [
          { emoji: '🧾', en: 'The <span class="hl-green">check</span>, please.', pt: 'A conta, por favor.' },
          { emoji: '➗', en: 'Can you <span class="hl-green">split</span> the check?', pt: 'Pode dividir a conta?' },
          { emoji: '📶', en: 'Do you have <span class="hl-green">Wi-Fi</span>?', pt: 'Tem Wi-Fi?' },
          { emoji: '🥗', en: 'Any <span class="hl-green">vegetarian</span> options?', pt: 'Tem opção vegetariana?' }
        ]},
        { type: 'comparison', cardClass: 'orange', title: '🇧🇷 vs 🇺🇸 RESTAURANTE', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: '"A conta" / "Fecha a conta"<br>Gorjeta opcional (10%)', leftNote: 'Mais tranquilo', right: '"The check, please"<br>Gorjeta ESPERADA (18-20%)', rightNote: 'Gorjeta é regra!', explanation: 'Em restaurante com garçom, 18-20% de gorjeta. Fast food = sem gorjeta.' },
        { type: 'quiz', cardClass: 'orange', question: '🎯 "For here or to go?" significa:', options: ['Quanto custa?', 'Comer aqui ou levar?', 'O que vai pedir?'], correct: 1 },
        { type: 'quiz', cardClass: 'orange', question: '🎯 Como pedir "sem cebola":', options: ['Without the onion', 'No onions', 'Delete onion'], correct: 1 },
        { type: 'fill-blank', cardClass: 'orange', prompt: '✍️ Complete:', sentence: 'The _____, please.', correctWord: 'check' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '📦', text: '<strong>To go</strong> = levar / <strong>For here</strong> = comer aqui' },
          { emoji: '🧅', text: '<strong>No onions</strong> = sem cebola' },
          { emoji: '🧾', text: '<strong>The check</strong> = a conta' },
          { emoji: '💵', text: 'Gorjeta 18-20% com garçom!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🪑', pt: 'Mesa pra dois', en: 'Table for two', level: 1 },
        { emoji: '📦', pt: 'Pra levar', en: 'To go', level: 1 },
        { emoji: '🪑', pt: 'Pra comer aqui', en: 'For here', level: 1 },
        { emoji: '🧅', pt: 'Sem cebola', en: 'No onions', level: 1 },
        { emoji: '🍅', pt: 'Sem tomate', en: 'No tomatoes', level: 1 },
        { emoji: '🧀', pt: 'Extra queijo', en: 'Extra cheese', level: 1 },
        { emoji: '✅', pt: 'Com tudo', en: 'With everything', level: 1 },
        { emoji: '❌', pt: 'O pedido tá errado', en: 'The order is wrong', level: 1 },
        { emoji: '🔍', pt: 'Falta um item', en: "There's a missing item", level: 1 },
        { emoji: '🙅', pt: 'Não é o que eu pedi', en: 'This is not what I ordered', level: 1 },
        { emoji: '🔄', pt: 'Pode trocar?', en: 'Can you change it?', level: 1 },
        { emoji: '🧾', pt: 'A conta, por favor', en: 'The check, please', level: 1 },
        { emoji: '➗', pt: 'Pode dividir a conta?', en: 'Can you split the check?', level: 1 },
        { emoji: '💵', pt: 'Aceita gorjeta em dinheiro?', en: 'Do you take cash tips?', level: 1 },
        { emoji: '📶', pt: 'Tem Wi-Fi?', en: 'Do you have Wi-Fi?', level: 1 },
        { emoji: '🔑', pt: 'Qual é a senha do Wi-Fi?', en: "What\'s the Wi-Fi password?", level: 1 },
        { emoji: '💧', pt: 'Mais água, por favor', en: 'More water, please', level: 1 },
        { emoji: '🔁', pt: 'Pode repetir o pedido?', en: 'Can you repeat the order?', level: 1 },
        { emoji: '🥗', pt: 'Tem opção vegetariana?', en: 'Do you have a vegetarian option?', level: 1 },
        { emoji: '⭐', pt: 'Qual é o especial do dia?', en: "What\'s the special today?", level: 1 }
      ]
    },

  { id: 'prices-money', title: 'Prices & Money', emoji: '💰💵', description: 'Preços e dinheiro', module: 4, order: 16,    slides: [
        { type: 'title', emoji: '💰💵', title: 'PRICES & MONEY', subtitle: 'Preços e dinheiro' },
        { type: 'situation', emoji: '💵', cardClass: 'purple', text: 'Você quer saber o preço.<br>Quer pagar com cartão.<br><br>Como falar de dinheiro?' },
        { type: 'rule', cardClass: 'cyan', text: 'Perguntas essenciais:', keyword: 'HOW MUCH...? | CAN I PAY...?', keywordAfter: 'Quanto custa? | Posso pagar?' },
        { type: 'example', cardClass: 'cyan', emoji: '💵', question: "<span class='hl-cyan'>How much</span> is this?", questionTr: 'Quanto custa isso?', answer: "(It\'s $20.)", answerTr: 'São $20.' },
        { type: 'example', cardClass: 'green', emoji: '💳', question: "Can I pay with <span class='hl-green'>card</span>?", questionTr: 'Posso pagar com cartão?', answer: '(Yes, of course.)', answerTr: 'Sim, claro.' },
        { type: 'example', cardClass: 'orange', emoji: '🔄', question: "Can I have my <span class='hl-orange'>change</span>?", questionTr: 'Pode me dar meu troco?', answer: '(CHANGE = troco)', answerTr: 'Dinheiro de volta' },
        { type: 'examples', cardClass: 'cyan', title: '💵 PERGUNTAS', items: [
          { emoji: '💵', en: '<span class="hl-cyan">How much</span> is this?', pt: 'Quanto custa isso?' },
          { emoji: '💵', en: '<span class="hl-cyan">How much</span> are these?', pt: 'Quanto custam esses?' },
          { emoji: '💰', en: "What\'s the <span class='hl-cyan'>total</span>?", pt: 'Qual o total?' },
          { emoji: '🏷️', en: 'Is there a <span class="hl-cyan">discount</span>?', pt: 'Tem desconto?' }
        ]},
        { type: 'examples', cardClass: 'green', title: '💳 PAGAMENTO', items: [
          { emoji: '💳', en: 'Can I pay with <span class="hl-green">card</span>?', pt: 'Posso pagar com cartão?' },
          { emoji: '💵', en: 'Do you accept <span class="hl-green">cash</span>?', pt: 'Aceita dinheiro?' },
          { emoji: '📱', en: 'Can I use <span class="hl-green">Apple Pay</span>?', pt: 'Posso usar Apple Pay?' },
          { emoji: '🧾', en: 'Can I have a <span class="hl-green">receipt</span>?', pt: 'Pode me dar o recibo?' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '💵', title: 'DINHEIRO NOS EUA', text: '<strong>Dollar</strong> = dólar ($)<br><strong>Cent</strong> = centavo (¢)<br><br>$10.50 = "ten dollars and fifty cents"<br>ou "ten fifty"' },
        { type: 'tip', cardClass: 'purple', icon: '🏷️', title: 'PREÇOS', text: '<strong>Expensive</strong> = caro<br><strong>Cheap</strong> = barato<br><strong>On sale</strong> = em promoção<br><strong>Free</strong> = grátis' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: '<span class="hl-red">How many</span> costs this?', leftNote: 'How many = quantidade', right: '<span class="hl-green">How much</span> is this?', rightNote: 'How much = preço', explanation: 'MUCH para preço, MANY para quantidade!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Troco":', options: ['Rest', 'Change', 'Return'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Em promoção":', options: ['On sale', 'In sale', 'At sale'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'How _____ is this shirt?', correctWord: 'much' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - DINHEIRO', items: [
          { emoji: '💵', text: '<strong>How much is this?</strong> = Quanto custa?' },
          { emoji: '💳', text: '<strong>Can I pay with card?</strong>' },
          { emoji: '🔄', text: '<strong>Change</strong> = troco' },
          { emoji: '🧾', text: '<strong>Receipt</strong> = recibo' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💵', pt: 'Quanto custa?', en: 'How much is this?' }, { emoji: '💳', pt: 'Posso pagar com cartão?', en: 'Can I pay with card? / Can I pay by card? / Can I use a card?' },
        { emoji: '💵', pt: 'Aceita dinheiro?', en: 'Do you accept cash?' }, { emoji: '🔄', pt: 'Troco', en: 'Change' },
        { emoji: '🧾', pt: 'Recibo', en: 'Receipt' }, { emoji: '💰', pt: 'Total', en: 'Total' },
        { emoji: '🏷️', pt: 'Desconto', en: 'Discount' }, { emoji: '💸', pt: 'Caro', en: 'Expensive' },
        { emoji: '🏷️', pt: 'Barato', en: 'Cheap' }, { emoji: '🆓', pt: 'Grátis', en: 'Free' },
      ]
    },

  { id: 'tipping-paying', title: 'Tipping & Paying', emoji: '💵💳', description: 'Gorjeta e pagamento', module: 4, order: 17,    slides: [
        { type: 'title', emoji: '💵💳', title: 'TIPPING & PAYING', subtitle: 'Gorjeta e pagamento — Regra dos EUA!' },
        { type: 'situation', emoji: '💵', cardClass: 'gold', text: 'A maquininha mostra: 18%, 20%, 25%...<br>Você fica confuso. Dar ou não dar gorjeta?<br><br>Gorjeta nos EUA é OBRIGATÓRIA em muitos lugares!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 CULTURA DA GORJETA', text: '<strong>Onde dar gorjeta (e quanto):</strong><br><br>🍽️ Restaurante com garçom: <strong>18-20%</strong><br>💇 Barbeiro/cabeleireiro: <strong>15-20%</strong><br>🚕 Uber/Taxi: <strong>10-15%</strong><br>🛎️ Hotel (bagagem): <strong>$1-2 por mala</strong><br>☕ Cafeteria/fast food: <strong>opcional</strong><br><br>❌ Não precisa: fast food, lojas, médico' },
        { type: 'rule', cardClass: 'gold', text: 'Pagando:', keyword: 'TIP / DEBIT / CREDIT / SPLIT', keywordAfter: 'Gorjeta / Débito / Crédito / Dividir' },
        { type: 'example', cardClass: 'gold', emoji: '💵', question: 'Is the <span class="hl-gold">tip</span> included?', questionTr: 'A gorjeta tá incluída?', answer: '"No." (Na maioria dos casos)', answerTr: 'Geralmente NÃO está incluída.' },
        { type: 'example', cardClass: 'cyan', emoji: '💳', question: 'My card was <span class="hl-cyan">declined</span>.', questionTr: 'Meu cartão foi recusado.', answer: '"Try another card."', answerTr: 'Tenta outro cartão.' },
        { type: 'example', cardClass: 'green', emoji: '📱', question: 'Do you take <span class="hl-green">Venmo</span>?', questionTr: 'Aceita Venmo?', answer: '"Yes!" / "Cash only."', answerTr: 'Sim! / Só dinheiro.' },
        { type: 'examples', cardClass: 'gold', title: '💰 FORMAS DE PAGAMENTO', items: [
          { emoji: '📱', en: 'Do you take <span class="hl-gold">Apple Pay</span>?', pt: 'Aceita Apple Pay?' },
          { emoji: '💵', en: 'Can I pay <span class="hl-gold">cash</span>?', pt: 'Posso pagar em dinheiro?' },
          { emoji: '🧾', en: 'I need a <span class="hl-gold">receipt</span>.', pt: 'Preciso de recibo.' },
          { emoji: '➗', en: 'Can you <span class="hl-gold">split</span> it?', pt: 'Pode dividir?' }
        ]},
        { type: 'comparison', cardClass: 'gold', title: '🇧🇷 vs 🇺🇸 GORJETA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: '10% já incluído na conta<br>Opcional pagar', leftNote: 'Tranquilo', right: '18-20% você adiciona<br>ESPERADO (quase obrigatório)', rightNote: 'Não pagar = mal visto', explanation: 'Garçons nos EUA ganham salário BAIXO. A gorjeta é a renda principal deles.' },
        { type: 'quiz', cardClass: 'gold', question: '🎯 Conta de $50 no restaurante. Gorjeta de 20%:', options: ['$5', '$8', '$10'], correct: 2 },
        { type: 'fill-blank', cardClass: 'gold', prompt: '✍️ Complete:', sentence: 'Is the _____ included?', correctWord: 'tip' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🍽️', text: 'Restaurante: <strong>18-20%</strong> de gorjeta' },
          { emoji: '💳', text: '<strong>Declined</strong> = cartão recusado' },
          { emoji: '📱', text: 'Venmo e Zelle são muito usados' },
          { emoji: '💡', text: 'Fast food e lojas = sem gorjeta!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '💵', pt: 'A gorjeta tá incluída?', en: 'Is the tip included?', level: 1 },
        { emoji: '💰', pt: 'Quanto de gorjeta?', en: 'How much should I tip?', level: 1 },
        { emoji: '📱', pt: 'Aceita Venmo?', en: 'Do you take Venmo?', level: 1 },
        { emoji: '📱', pt: 'Aceita Apple Pay?', en: 'Do you take Apple Pay?', level: 1 },
        { emoji: '💳', pt: 'Meu cartão foi recusado', en: 'My card was declined', level: 1 },
        { emoji: '💸', pt: 'Tem taxa?', en: 'Is there a fee?', level: 1 },
        { emoji: '🧾', pt: 'Preciso do recibo', en: 'I need the receipt', level: 1 },
        { emoji: '💵', pt: 'Posso pagar em dinheiro?', en: 'Can I pay cash?', level: 1 },
        { emoji: '➗', pt: 'Pode dividir?', en: 'Can you split it?', level: 1 },
        { emoji: '💰', pt: 'Tem troco de $20?', en: 'Do you have change for a twenty?', level: 1 }
      ]
    },

  { id: 'grocery-shopping', title: 'Grocery Shopping', emoji: '🛒🥬', description: 'Compras no mercado', module: 4, order: 18,    slides: [
        { type: 'title', emoji: '🛒🥬', title: 'GROCERY SHOPPING', subtitle: 'Compras no supermercado' },
        { type: 'situation', emoji: '🛒', cardClass: 'purple', text: 'Você está no supermercado americano.<br>Precisa encontrar produtos e pedir ajuda.<br><br>Vocabulário essencial!' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar onde está algo:', keyword: "WHERE IS THE...? / WHERE CAN I FIND...?", keywordAfter: 'Onde fica...? / Onde encontro...?' },
        { type: 'example', cardClass: 'cyan', emoji: '🥛', question: "<span class='hl-cyan'>Where is the</span> milk?", questionTr: 'Onde fica o leite?', answer: 'Aisle 5.', answerTr: 'Corredor 5.' },
        { type: 'example', cardClass: 'cyan', emoji: '🍞', question: "<span class='hl-cyan'>Where can I find</span> bread?", questionTr: 'Onde eu encontro pão?', answer: "It\'s in the back.", answerTr: 'É lá no fundo.' },
        { type: 'examples', cardClass: 'cyan', title: '📍 LOCALIZANDO PRODUTOS', items: [
          { emoji: '🔢', en: '<span class="hl-cyan">Aisle</span> 3', pt: 'Corredor 3' },
          { emoji: '⬅️', en: "It\'s on the <span class='hl-cyan'>left</span>", pt: 'É na esquerda' },
          { emoji: '🔙', en: "It\'s in the <span class='hl-cyan'>back</span>", pt: 'É lá no fundo' },
          { emoji: '🚪', en: 'Near the <span class="hl-cyan">entrance</span>', pt: 'Perto da entrada' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🏷️ NO CAIXA', items: [
          { emoji: '💳', en: 'Credit or <span class="hl-green">debit</span>?', pt: 'Crédito ou débito?' },
          { emoji: '🛍️', en: 'Do you need a <span class="hl-green">bag</span>?', pt: 'Precisa de sacola?' },
          { emoji: '📱', en: 'Do you have a <span class="hl-green">rewards card</span>?', pt: 'Tem cartão fidelidade?' },
          { emoji: '🧾', en: 'Do you want the <span class="hl-green">receipt</span>?', pt: 'Quer o recibo?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'SELF-CHECKOUT', text: 'Caixa automático:<br><br>• <strong>Scan your items</strong> - Escaneie seus itens<br>• <strong>Place item in bag</strong> - Coloque na sacola<br>• <strong>Pay now</strong> - Pagar agora<br>• <strong>Print receipt</strong> - Imprimir recibo' },
        { type: 'examples', cardClass: 'gold', title: '🥬 SEÇÕES DO MERCADO', items: [
          { emoji: '🥬', en: '<span class="hl-gold">Produce</span>', pt: 'Hortifruti' },
          { emoji: '🥩', en: '<span class="hl-gold">Meat / Deli</span>', pt: 'Carnes / Frios' },
          { emoji: '🥛', en: '<span class="hl-gold">Dairy</span>', pt: 'Laticínios' },
          { emoji: '❄️', en: '<span class="hl-gold">Frozen foods</span>', pt: 'Congelados' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Onde fica o leite?" em inglês:', options: ['Where is milk?', 'Where is the milk?', 'Where has the milk?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Corredor 5" em inglês:', options: ['Corridor 5', 'Aisle 5', 'Line 5'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "Where can I _____ the bread?", correctWord: 'find' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '❓', text: '<strong>Where is the...?</strong> = Onde fica...?' },
          { emoji: '🔢', text: '<strong>Aisle</strong> = corredor' },
          { emoji: '🛍️', text: '<strong>Bag</strong> = sacola' },
          { emoji: '🧾', text: '<strong>Receipt</strong> = recibo' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🛒', pt: 'Onde fica o leite?', en: 'Where is the milk?' },
        { emoji: '🔢', pt: 'Corredor 5', en: 'Aisle 5' },
        { emoji: '🔙', pt: 'Lá no fundo', en: "It\'s in the back" },
        { emoji: '💳', pt: 'Crédito ou débito?', en: 'Credit or debit?' },
        { emoji: '🛍️', pt: 'Precisa de sacola?', en: 'Do you need a bag?' },
        { emoji: '🧾', pt: 'Quer o recibo?', en: 'Do you want the receipt?' },
        { emoji: '🥬', pt: 'Hortifruti', en: 'Produce' },
        { emoji: '🥩', pt: 'Carnes', en: 'Meat' },
        { emoji: '🥛', pt: 'Laticínios', en: 'Dairy' },
        { emoji: '❄️', pt: 'Congelados', en: 'Frozen foods' },
      ]
    },

  { id: 'small-talk', title: 'SMALL TALK', emoji: '💬😊', description: 'Conversa informal', module: 4, order: 19, slides: [    { type: 'title', emoji: '💬😊', title: 'SMALL TALK', subtitle: 'Conversa informal' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Conversa informal<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para SMALL TALK:', keyword: 'SMALL TALK', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">SMALL TALK</span>', questionTr: 'Conversa informal', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">SMALL TALK</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">SMALL TALK</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar SMALL TALK', leftNote: 'Contexto 1', right: 'Forma B de usar SMALL TALK', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar SMALL TALK<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar SMALL TALK', leftNote: 'Erro comum', right: 'Forma correta de usar SMALL TALK', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com SMALL TALK' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre SMALL TALK', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre SMALL TALK', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre SMALL TALK: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - SMALL TALK', items: [
        { emoji: '✅', text: '<strong>SMALL TALK</strong> é importante' },
        { emoji: '🎯', text: 'Use para Conversa informal' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'apologies', title: 'APOLOGIES', emoji: '😔🙏', description: 'Desculpas', module: 4, order: 20, slides: [    { type: 'title', emoji: '😔🙏', title: 'APOLOGIES', subtitle: 'Desculpas' },
      { type: 'situation', emoji: '💭', cardClass: 'purple', text: 'Situação: Desculpas<br><br>Como você expressa isso em inglês?' },
      { type: 'rule', cardClass: 'cyan', text: 'Regra gramatical para APOLOGIES:', keyword: 'APOLOGIES', keywordAfter: 'Padrão essencial' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: 'Dica de pronúncia para esta lição' },
      { type: 'example', cardClass: 'cyan', emoji: '📚', question: 'Exemplo 1 em <span class="hl-cyan">APOLOGIES</span>', questionTr: 'Desculpas', answer: 'Resposta', answerTr: 'Tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '🎯', question: 'Exemplo 2 em <span class="hl-cyan">APOLOGIES</span>', questionTr: 'Contexto prático', answer: 'Outra resposta', answerTr: 'Outra tradução' },
      { type: 'example', cardClass: 'cyan', emoji: '✨', question: 'Exemplo 3 em <span class="hl-cyan">APOLOGIES</span>', questionTr: 'Mais um contexto', answer: 'Mais uma resposta', answerTr: 'Mais uma tradução' },
      { type: 'examples', cardClass: 'cyan', title: '📚 MAIS EXEMPLOS', revealOnHover: true, items: [
        { emoji: '📌', en: 'Exemplo adicional 1', pt: 'Tradução 1' },
        { emoji: '📌', en: 'Exemplo adicional 2', pt: 'Tradução 2' },
        { emoji: '📌', en: 'Exemplo adicional 3', pt: 'Tradução 3' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 COMPARAÇÃO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '1️⃣', rightIcon: '2️⃣', leftLabel: 'OPÇÃO 1', rightLabel: 'OPÇÃO 2', left: 'Forma A de usar APOLOGIES', leftNote: 'Contexto 1', right: 'Forma B de usar APOLOGIES', rightNote: 'Contexto 2', explanation: 'Diferença importante entre as formas' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Dica essencial para dominar APOLOGIES<br><br>Esta é a chave para usar corretamente!' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Forma errada de usar APOLOGIES', leftNote: 'Erro comum', right: 'Forma correta de usar APOLOGIES', rightNote: 'Forma apropriada', explanation: 'Nunca faça o erro comum com APOLOGIES' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Pergunta sobre APOLOGIES', options: ['Opção A', 'Opção B', 'Opção C'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 Outra pergunta sobre APOLOGIES', options: ['Resposta A', 'Resposta B', 'Resposta C'], correct: 0 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Complete a frase sobre APOLOGIES: _____', correctWord: 'resposta' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - APOLOGIES', items: [
        { emoji: '✅', text: '<strong>APOLOGIES</strong> é importante' },
        { emoji: '🎯', text: 'Use para Desculpas' },
        { emoji: '🗣️', text: 'Pronuncia-se corretamente' },
        { emoji: '💡', text: 'Pratique com exemplos reais' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '📚', pt: 'Termo 1', en: 'Term 1', level: 1 }, { emoji: '🎯', pt: 'Termo 2', en: 'Term 2', level: 1 }, { emoji: '✨', pt: 'Termo 3', en: 'Term 3', level: 1 }, { emoji: '🔥', pt: 'Termo 4', en: 'Term 4', level: 1 }, { emoji: '⭐', pt: 'Termo 5', en: 'Term 5', level: 1 }, { emoji: '💡', pt: 'Termo 6', en: 'Term 6', level: 2 }, { emoji: '🎨', pt: 'Termo 7', en: 'Term 7', level: 2 }, { emoji: '🎭', pt: 'Termo 8', en: 'Term 8', level: 1 }, { emoji: '🎪', pt: 'Termo 9', en: 'Term 9', level: 1 }, { emoji: '🎬', pt: 'Termo 10', en: 'Term 10', level: 2 }, { emoji: '🎤', pt: 'Termo 11', en: 'Term 11', level: 1 }, { emoji: '🎮', pt: 'Termo 12', en: 'Term 12', level: 1 }, { emoji: '🎲', pt: 'Termo 13', en: 'Term 13', level: 1 }, { emoji: '🎯', pt: 'Termo 14', en: 'Term 14', level: 2 }, { emoji: '🎳', pt: 'Termo 15', en: 'Term 15', level: 1 }, { emoji: '🎸', pt: 'Termo 16', en: 'Term 16', level: 1 }, { emoji: '🎺', pt: 'Termo 17', en: 'Term 17', level: 2 }, { emoji: '🎻', pt: 'Termo 18', en: 'Term 18', level: 1 }, { emoji: '🥁', pt: 'Termo 19', en: 'Term 19', level: 1 }, { emoji: '🎼', pt: 'Termo 20', en: 'Term 20', level: 2 }, { emoji: '🎵', pt: 'Termo 21', en: 'Term 21', level: 1 }, { emoji: '🎶', pt: 'Termo 22', en: 'Term 22', level: 1 }, { emoji: '📚', pt: 'Termo 23', en: 'Term 23', level: 1 }, { emoji: '📖', pt: 'Termo 24', en: 'Term 24', level: 2 }, { emoji: '📝', pt: 'Termo 25', en: 'Term 25', level: 1 }, { emoji: '✏️', pt: 'Termo 26', en: 'Term 26', level: 1 }, { emoji: '🖊️', pt: 'Termo 27', en: 'Term 27', level: 2 }] },

  { id: 'feelings-reactions', title: 'Feelings & Reactions', emoji: '😊😤', description: 'Sentimentos e reações', module: 4, order: 21,    slides: [
        { type: 'title', emoji: '😊😤', title: 'FEELINGS & REACTIONS', subtitle: 'Sentimentos e reações — Expresse-se!' },
        { type: 'situation', emoji: '😊', cardClass: 'green', text: 'Tô cansado, tô com fome, tô perdido...<br>Saber dizer COMO VOCÊ SE SENTE<br>é o básico do básico!<br><br>A fórmula mágica: I\'M + SENTIMENTO' },
        { type: 'rule', cardClass: 'green', text: 'A fórmula é sempre a mesma:', keyword: "I'M + SENTIMENTO", keywordAfter: "I'm tired, I'm hungry, I'm lost..." },
        { type: 'tip', cardClass: 'gold', icon: '💡', title: 'A FÓRMULA MÁGICA', text: 'Em português: "Tô com fome", "Tô cansado"<br>Em inglês: <strong>I\'M + adjetivo</strong><br><br>Tô cansado = I\'m <strong>tired</strong><br>Tô com fome = I\'m <strong>hungry</strong><br>Tô perdido = I\'m <strong>lost</strong><br><br>Essa estrutura funciona pra TUDO!' },
        { type: 'example', cardClass: 'green', emoji: '😴', question: "I'm <span class=\"hl-green\">tired</span>.", questionTr: 'Tô cansado.', answer: '(A frase mais útil do mundo!)', answerTr: 'Use depois de um dia de trabalho.' },
        { type: 'example', cardClass: 'cyan', emoji: '🍽️', question: "I'm <span class=\"hl-cyan\">hungry</span>.", questionTr: 'Tô com fome.', answer: '"Let\'s eat!" / "Grab some food?"', answerTr: 'Bora comer?' },
        { type: 'example', cardClass: 'orange', emoji: '🗺️', question: "I'm <span class=\"hl-orange\">lost</span>.", questionTr: 'Tô perdido.', answer: '"Where are you trying to go?"', answerTr: 'Pra onde você tá tentando ir?' },
        { type: 'examples', cardClass: 'green', title: '😊 SENTIMENTOS DO DIA A DIA', items: [
          { emoji: '💧', en: "I'm <span class=\"hl-green\">thirsty</span>.", pt: 'Tô com sede.' },
          { emoji: '⏰', en: "I'm <span class=\"hl-green\">late</span>.", pt: 'Tô atrasado.' },
          { emoji: '📋', en: "I'm <span class=\"hl-green\">busy</span>.", pt: 'Tô ocupado.' },
          { emoji: '😊', en: "I'm <span class=\"hl-green\">fine</span>.", pt: 'Tô de boa.' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '😤 SENTIMENTOS MAIS FORTES', items: [
          { emoji: '😤', en: "I'm <span class=\"hl-orange\">stressed</span>.", pt: 'Tô estressado.' },
          { emoji: '😟', en: "I'm <span class=\"hl-orange\">worried</span>.", pt: 'Tô preocupado.' },
          { emoji: '🤒', en: "I'm <span class=\"hl-orange\">sick</span>.", pt: 'Tô doente.' },
          { emoji: '💔', en: 'I <span class="hl-orange">miss</span> my family.', pt: 'Tô com saudade da família.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🗣️ REAÇÕES DO DIA A DIA', items: [
          { emoji: '😤', en: "That <span class=\"hl-cyan\">sucks</span>.", pt: 'Que saco.' },
          { emoji: '😎', en: "That's <span class=\"hl-cyan\">awesome</span>!", pt: 'Que legal!' },
          { emoji: '🙏', en: '<span class="hl-cyan">Appreciate it</span>!', pt: 'Valeu!' },
          { emoji: '🤝', en: "We're <span class=\"hl-cyan\">good</span>.", pt: 'Tamo junto.' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'SAUDADE NÃO TEM TRADUÇÃO', text: '<strong>"Saudade" não existe em inglês!</strong><br><br>O mais perto:<br>• "I <strong>miss</strong> my family" = sinto falta<br>• "I\'m <strong>homesick</strong>" = com saudade de casa<br><br>Americanos vão entender! ❤️' },
        { type: 'quiz', cardClass: 'green', question: '🎯 "Tô com fome" em inglês:', options: ["I have hungry", "I'm hungry", "I'm with hunger"], correct: 1 },
        { type: 'quiz', cardClass: 'green', question: '🎯 "Tô com saudade da família":', options: ["I have saudade", "I miss my family", "I'm saudade"], correct: 1 },
        { type: 'fill-blank', cardClass: 'green', prompt: '✍️ Complete:', sentence: "I'm _____ . I need to eat.", correctWord: 'hungry' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '💡', text: "<strong>I'm + sentimento</strong> = fórmula mágica" },
          { emoji: '😴', text: '<strong>Tired</strong> / <strong>Hungry</strong> / <strong>Lost</strong>' },
          { emoji: '💔', text: '<strong>I miss...</strong> = sinto falta / saudade' },
          { emoji: '😎', text: "<strong>That's awesome!</strong> = Que legal!" }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '😴', pt: 'Tô cansado', en: "I'm tired", level: 1 },
        { emoji: '🍽️', pt: 'Tô com fome', en: "I'm hungry", level: 1 },
        { emoji: '💧', pt: 'Tô com sede', en: "I'm thirsty", level: 1 },
        { emoji: '🗺️', pt: 'Tô perdido', en: "I'm lost", level: 1 },
        { emoji: '⏰', pt: 'Tô atrasado', en: "I'm late", level: 1 },
        { emoji: '📋', pt: 'Tô ocupado', en: "I'm busy", level: 1 },
        { emoji: '😊', pt: 'Tô de boa', en: "I'm fine", level: 1 },
        { emoji: '😤', pt: 'Tô estressado', en: "I'm stressed", level: 1 },
        { emoji: '😟', pt: 'Tô preocupado', en: "I'm worried", level: 1 },
        { emoji: '🤒', pt: 'Tô doente', en: "I'm sick", level: 1 },
        { emoji: '💔', pt: 'Tô com saudade', en: 'I miss home', level: 1 },
        { emoji: '🏃', pt: 'Tô com pressa', en: "I'm in a hurry", level: 1 },
        { emoji: '🤔', pt: 'Tô confuso', en: "I'm confused", level: 1 },
        { emoji: '😐', pt: 'Tô entediado', en: "I'm bored", level: 1 },
        { emoji: '😰', pt: 'Tô nervoso', en: "I'm nervous", level: 1 },
        { emoji: '😁', pt: 'Tô animado', en: "I'm excited", level: 1 },
        { emoji: '😤', pt: 'Que saco', en: 'That sucks', level: 1 },
        { emoji: '😎', pt: 'Que legal!', en: "That's awesome!", level: 1 },
        { emoji: '🙏', pt: 'Valeu!', en: 'Appreciate it!', level: 1 },
        { emoji: '🤝', pt: 'Tamo junto', en: "We're good", level: 1 }
      ]
    },

  { id: 'injury-at-work', title: 'Injury at Work', emoji: '🤕🏗️', description: 'Acidente no trabalho', module: 4, order: 22,    slides: [
        { type: 'title', emoji: '🤕🏗️', title: 'INJURY AT WORK', subtitle: 'Acidente no trabalho — Saiba se proteger' },
        { type: 'situation', emoji: '🤕', cardClass: 'red', text: 'Você se machucou na obra.<br>Caiu, cortou, bateu a cabeça...<br>Precisa comunicar e pedir ajuda RÁPIDO.<br><br>Sua segurança em PRIMEIRO LUGAR!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 SEUS DIREITOS - ACIDENTE DE TRABALHO', text: '<strong>Nos EUA, acidente de trabalho tem cobertura!</strong><br><br>Se machucar trabalhando → <strong>Worker\'s Comp</strong><br>(Compensação do Trabalhador)<br><br>1. SEMPRE avise o chefe na hora<br>2. Peça pra ir ao médico<br>3. Diga: "It was a <strong>work accident</strong>"<br>4. Guarde provas (fotos, mensagens)<br><br>Isso vale MESMO sem documentos!' },
        { type: 'rule', cardClass: 'red', text: 'Reportando um acidente:', keyword: 'I GOT HURT / I CAN\'T / I NEED', keywordAfter: 'Me machuquei / Não consigo / Preciso' },
        { type: 'example', cardClass: 'red', emoji: '🤕', question: 'I <span class="hl-red">got hurt</span>.', questionTr: 'Me machuquei.', answer: '(Avise IMEDIATAMENTE!)', answerTr: 'Não espere, fale na hora.' },
        { type: 'example', cardClass: 'orange', emoji: '🪜', question: 'I <span class="hl-orange">fell off</span> the ladder.', questionTr: 'Caí da escada.', answer: '(Descreva O QUE aconteceu)', answerTr: 'Fell off = caiu de cima de algo.' },
        { type: 'example', cardClass: 'cyan', emoji: '⚠️', question: 'It was a <span class="hl-cyan">work accident</span>.', questionTr: 'Foi acidente de trabalho.', answer: '(FALE isso no hospital!)', answerTr: 'Muda como a conta é paga.' },
        { type: 'examples', cardClass: 'red', title: '🩹 DESCREVENDO A LESÃO', items: [
          { emoji: '✋', en: 'I <span class="hl-red">cut</span> my hand.', pt: 'Cortei a mão.' },
          { emoji: '😵', en: 'Something <span class="hl-red">hit</span> my head.', pt: 'Algo bateu na minha cabeça.' },
          { emoji: '💪', en: "I <span class=\"hl-red\">can't move</span> my arm.", pt: 'Não consigo mover o braço.' },
          { emoji: '👁️', en: 'Something got in my <span class="hl-red">eye</span>.', pt: 'Entrou algo no meu olho.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🏥 PEDINDO AJUDA', items: [
          { emoji: '🧊', en: 'I need <span class="hl-cyan">ice</span>.', pt: 'Preciso de gelo.' },
          { emoji: '🩹', en: 'I need a <span class="hl-cyan">bandage</span>.', pt: 'Preciso de curativo.' },
          { emoji: '🏥', en: 'I need to see a <span class="hl-cyan">doctor</span>.', pt: 'Preciso ir ao médico.' },
          { emoji: '🩹', en: 'Do you have a <span class="hl-cyan">first aid kit</span>?', pt: 'Tem kit de primeiro socorro?' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '😵 SINTOMAS IMPORTANTES', items: [
          { emoji: '😵‍💫', en: "I'm <span class=\"hl-orange\">dizzy</span>.", pt: 'Tô tonto.' },
          { emoji: '🤢', en: 'I feel <span class="hl-orange">nauseous</span>.', pt: 'Tô enjoado.' },
          { emoji: '🛑', en: "I <span class=\"hl-orange\">can't keep</span> working.", pt: 'Não posso continuar.' },
          { emoji: '🪑', en: 'I need to <span class="hl-orange">sit down</span>.', pt: 'Preciso sentar.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '💡', title: 'WORKER\'S COMP - COMO FUNCIONA', text: '<strong>Worker\'s Comp paga:</strong><br>• Conta do hospital<br>• Salário enquanto se recupera<br>• Remédios<br><br><strong>O que fazer:</strong><br>1. Avise o chefe POR ESCRITO (texto serve)<br>2. No hospital diga: "work injury"<br>3. Guarde TUDO: fotos, mensagens, recibos' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ CERTO vs ERRADO', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Ficar quieto com medo<br>de perder o trabalho', leftNote: 'Perigoso pra saúde!', right: '"I got hurt. It was a<br>work accident."', rightNote: 'Protege seus direitos', explanation: 'Se machucar e NÃO reportar, você perde o direito a Worker\'s Comp!' },
        { type: 'quiz', cardClass: 'red', question: '🎯 Você se machucou na obra. O que fazer PRIMEIRO?', options: ['Esconder pra não perder o job', 'Avisar o chefe imediatamente', 'Ir embora sem falar nada'], correct: 1 },
        { type: 'quiz', cardClass: 'red', question: '🎯 No hospital, diga:', options: ["I fell at home", "It was a work accident", "I don't know what happened"], correct: 1 },
        { type: 'fill-blank', cardClass: 'red', prompt: '✍️ Complete:', sentence: 'I _____ hurt at work.', correctWord: 'got' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🤕', text: '<strong>I got hurt</strong> = Avise NA HORA!' },
          { emoji: '⚠️', text: "<strong>It was a work accident</strong> = Fale no hospital!" },
          { emoji: '📋', text: "<strong>Worker's Comp</strong> = seu DIREITO" },
          { emoji: '📸', text: 'Guarde TUDO: fotos, mensagens, recibos' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🤕', pt: 'Me machuquei', en: 'I got hurt', level: 1 },
        { emoji: '🪜', pt: 'Caí da escada', en: 'I fell off the ladder', level: 1 },
        { emoji: '✋', pt: 'Cortei a mão', en: 'I cut my hand', level: 1 },
        { emoji: '😵', pt: 'Algo bateu na minha cabeça', en: 'Something hit my head', level: 1 },
        { emoji: '💪', pt: 'Não consigo mover o braço', en: "I can't move my arm", level: 1 },
        { emoji: '🧊', pt: 'Preciso de gelo', en: 'I need ice', level: 1 },
        { emoji: '🩹', pt: 'Preciso de curativo', en: 'I need a bandage', level: 1 },
        { emoji: '🏥', pt: 'Preciso ir ao médico', en: 'I need to see a doctor', level: 1 },
        { emoji: '⚠️', pt: 'Foi acidente de trabalho', en: 'It was a work accident', level: 1 },
        { emoji: '🩹', pt: 'Tem kit de primeiro socorro?', en: 'Do you have a first aid kit?', level: 1 },
        { emoji: '🛑', pt: 'Não posso continuar trabalhando', en: "I can't keep working", level: 1 },
        { emoji: '👁️', pt: 'Entrou algo no meu olho', en: 'Something got in my eye', level: 1 },
        { emoji: '😵‍💫', pt: 'Tô tonto', en: "I'm dizzy", level: 1 },
        { emoji: '🤢', pt: 'Tô enjoado', en: 'I feel nauseous', level: 1 },
        { emoji: '🪑', pt: 'Preciso sentar', en: 'I need to sit down', level: 1 }
      ]
    },

  { id: 'at-doctor-symptoms', title: 'At the Doctor (Symptoms)', emoji: '🏥🤒', description: 'Descrever sintomas', module: 4, order: 23,    slides: [
        { type: 'title', emoji: '🏥🤒', title: 'AT THE DOCTOR', subtitle: 'Descrever seus sintomas' },
        { type: 'situation', emoji: '🤒', cardClass: 'purple', text: 'Você está no médico.<br>Ele pergunta: "What\'s wrong?"<br><br>Como explicar o que você sente?' },
        { type: 'rule', cardClass: 'cyan', text: 'Três formas de descrever sintomas:', keyword: 'I have... | I feel... | My ___ hurts', keywordAfter: 'Depende do sintoma!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'QUANDO USAR', text: '<strong>I have...</strong> = para condições<br>→ headache, fever, cold<br><br><strong>I feel...</strong> = para sensações<br>→ dizzy, nauseous, tired<br><br><strong>My ___ hurts</strong> = para dor em parte do corpo<br>→ My leg hurts.' },
        { type: 'example', cardClass: 'cyan', emoji: '🤕', question: 'I <span class="hl-cyan">have</span> a headache.', questionTr: 'Estou com dor de cabeça.', answer: '(I HAVE + condição)', answerTr: 'Headache = dor de cabeça' },
        { type: 'example', cardClass: 'green', emoji: '😵', question: 'I <span class="hl-green">feel</span> dizzy.', questionTr: 'Estou tonto.', answer: '(I FEEL + sensação)', answerTr: 'Dizzy = tonto' },
        { type: 'example', cardClass: 'orange', emoji: '🦵', question: 'My leg <span class="hl-orange">hurts</span>.', questionTr: 'Minha perna dói.', answer: '(PARTE + hurts)', answerTr: 'Hurts = dói' },
        { type: 'examples', cardClass: 'cyan', title: '🤒 I HAVE... (condições)', items: [
          { emoji: '🤕', en: 'I have a <span class="hl-cyan">headache</span>', pt: 'Estou com dor de cabeça' },
          { emoji: '🤒', en: 'I have a <span class="hl-cyan">fever</span>', pt: 'Estou com febre' },
          { emoji: '🤧', en: 'I have a <span class="hl-cyan">cold</span>', pt: 'Estou resfriado' },
          { emoji: '😷', en: 'I have a <span class="hl-cyan">cough</span>', pt: 'Estou com tosse' }
        ]},
        { type: 'examples', cardClass: 'green', title: '😵 I FEEL... (sensações)', items: [
          { emoji: '😵', en: 'I feel <span class="hl-green">dizzy</span>', pt: 'Estou tonto' },
          { emoji: '🤢', en: 'I feel <span class="hl-green">nauseous</span>', pt: 'Estou enjoado' },
          { emoji: '😴', en: 'I feel <span class="hl-green">tired</span>', pt: 'Estou cansado' },
          { emoji: '🥵', en: 'I feel <span class="hl-green">weak</span>', pt: 'Estou fraco' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '🦵 MY ___ HURTS (dor)', items: [
          { emoji: '🦵', en: 'My <span class="hl-orange">leg</span> hurts', pt: 'Minha perna dói' },
          { emoji: '💪', en: 'My <span class="hl-orange">arm</span> hurts', pt: 'Meu braço dói' },
          { emoji: '🫁', en: 'My <span class="hl-orange">chest</span> hurts', pt: 'Meu peito dói' },
          { emoji: '🦷', en: 'My <span class="hl-orange">tooth</span> hurts', pt: 'Meu dente dói' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>HURTS</strong> = "RÉRTs"<br><strong>FEVER</strong> = "FÍVER"<br><strong>HEADACHE</strong> = "RÉDÊIK"<br><strong>NAUSEOUS</strong> = "NÓ-SHES"' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I <span class="hl-red">am fever</span>.', leftNote: 'Fever não é adjetivo', right: 'I <span class="hl-green">have a fever</span>.', rightNote: 'I HAVE a fever', explanation: 'Fever usa HAVE, não AM!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Estou com febre":', options: ['I am fever', 'I have a fever', 'I feel fever'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Minha cabeça dói":', options: ['My head hurts', 'I have headache', 'I hurt head'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'I _____ dizzy and nauseous.', correctWord: 'feel' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - SINTOMAS', items: [
          { emoji: '🤒', text: '<strong>I have...</strong> = condições (fever, cold)' },
          { emoji: '😵', text: '<strong>I feel...</strong> = sensações (dizzy, tired)' },
          { emoji: '🦵', text: '<strong>My ___ hurts</strong> = dor (leg, head)' },
          { emoji: '⚠️', text: 'Fever usa HAVE, não AM!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🤕', pt: 'Dor de cabeça', en: 'I have a headache' }, { emoji: '🤒', pt: 'Febre', en: 'I have a fever' },
        { emoji: '🤧', pt: 'Resfriado', en: 'I have a cold' }, { emoji: '😵', pt: 'Estou tonto', en: 'I feel dizzy' },
        { emoji: '🤢', pt: 'Estou enjoado', en: 'I feel nauseous' }, { emoji: '🦵', pt: 'Minha perna dói', en: 'My leg hurts' },
        { emoji: '🫁', pt: 'Dor no peito', en: 'Chest pain' }, { emoji: '😴', pt: 'Estou cansado', en: "I'm tired" },
        { emoji: '🤕', pt: 'Estou com dor', en: "I'm in pain" }, { emoji: '🤮', pt: 'Estou vomitando', en: "I'm vomiting" },
      ]
    },

  { id: 'at-doctor-instructions', title: 'At the Doctor (Instructions)', emoji: '🏥💊', description: 'Entender instruções médicas', module: 4, order: 24,    slides: [
        { type: 'title', emoji: '🏥💊', title: 'DOCTOR INSTRUCTIONS', subtitle: 'Entender o que o médico diz' },
        { type: 'situation', emoji: '👨‍⚕️', cardClass: 'purple', text: 'O médico te dá um remédio e diz:<br>"Take this <strong>twice a day</strong>."<br><br>Você entendeu?' },
        { type: 'rule', cardClass: 'cyan', text: 'Instruções comuns do médico:', keyword: 'Take... | Rest | Drink water', keywordAfter: 'Tome... | Descanse | Beba água' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'FREQUÊNCIA', text: '<strong>Once a day</strong> = Uma vez ao dia<br><strong>Twice a day</strong> = Duas vezes ao dia<br><strong>Three times a day</strong> = Três vezes ao dia<br><strong>Every 8 hours</strong> = A cada 8 horas' },
        { type: 'example', cardClass: 'cyan', emoji: '💊', question: 'Take this <span class="hl-cyan">twice a day</span>.', questionTr: 'Tome isso duas vezes ao dia.', answer: '(TWICE = duas vezes)', answerTr: 'Frequência' },
        { type: 'example', cardClass: 'cyan', emoji: '😴', question: 'You need to <span class="hl-cyan">rest</span>.', questionTr: 'Você precisa descansar.', answer: '(REST = descansar)', answerTr: 'Instrução' },
        { type: 'example', cardClass: 'green', emoji: '💧', question: 'Drink <span class="hl-green">plenty of water</span>.', questionTr: 'Beba bastante água.', answer: '(PLENTY OF = bastante)', answerTr: 'Conselho' },
        { type: 'examples', cardClass: 'cyan', title: '💊 MEDICAÇÃO', items: [
          { emoji: '💊', en: 'Take this <span class="hl-cyan">twice a day</span>', pt: 'Tome isso duas vezes ao dia' },
          { emoji: '💊', en: 'Take <span class="hl-cyan">with food</span>', pt: 'Tome com comida' },
          { emoji: '💊', en: 'Take <span class="hl-cyan">before meals</span>', pt: 'Tome antes das refeições' },
          { emoji: '💊', en: 'Take <span class="hl-cyan">after meals</span>', pt: 'Tome depois das refeições' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🩺 INSTRUÇÕES GERAIS', items: [
          { emoji: '😴', en: '<span class="hl-green">Get some rest</span>', pt: 'Descanse' },
          { emoji: '💧', en: '<span class="hl-green">Drink plenty of water</span>', pt: 'Beba bastante água' },
          { emoji: '🍎', en: '<span class="hl-green">Eat well</span>', pt: 'Coma bem' },
          { emoji: '📅', en: '<span class="hl-green">Come back in two weeks</span>', pt: 'Volte em duas semanas' }
        ]},
        { type: 'examples', cardClass: 'red', title: '🚫 EVITE', items: [
          { emoji: '🍺', en: '<span class="hl-red">Avoid</span> alcohol', pt: 'Evite álcool' },
          { emoji: '🏃', en: "<span class='hl-red'>Don't</span> exercise heavily", pt: 'Não faça exercício pesado' },
          { emoji: '🚗', en: "<span class='hl-red'>Don't</span> drive", pt: 'Não dirija' },
          { emoji: '☀️', en: '<span class="hl-red">Avoid</span> the sun', pt: 'Evite o sol' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '🆘', title: 'EMERGÊNCIA', text: '<strong>Go to the ER if...</strong><br>Vá à emergência se...<br><br><strong>Call me if it gets worse.</strong><br>Me liga se piorar.<br><br><strong>Call 911.</strong><br>Ligue 911.' },
        { type: 'tip', cardClass: 'orange', icon: '❓', title: 'NÃO ENTENDEU?', text: '<strong>Can you repeat that?</strong><br>Pode repetir?<br><br><strong>Can you write it down?</strong><br>Pode escrever?<br><br><strong>How do you spell that?</strong><br>Como escreve?' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Duas vezes ao dia":', options: ['Two times a day', 'Twice a day', 'Ambos estão corretos'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tome com comida":', options: ['Take with food', 'Take after food', 'Take in food'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Drink _____ of water every day.', correctWord: 'plenty' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - INSTRUÇÕES', items: [
          { emoji: '💊', text: '<strong>Twice a day</strong> = duas vezes ao dia' },
          { emoji: '😴', text: '<strong>Get some rest</strong> = descanse' },
          { emoji: '💧', text: '<strong>Plenty of water</strong> = bastante água' },
          { emoji: '🚫', text: '<strong>Avoid...</strong> = evite...' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💊', pt: 'Tome duas vezes ao dia', en: 'Take it twice a day' }, { emoji: '💧', pt: 'Beba bastante água', en: 'Drink plenty of water' },
        { emoji: '😴', pt: 'Descanse', en: 'Get some rest' }, { emoji: '🩺', pt: 'Volte em duas semanas', en: 'Come back in two weeks' },
        { emoji: '📋', pt: 'Faça estes exames', en: 'Take these tests' }, { emoji: '🍎', pt: 'Coma bem', en: 'Eat well' },
        { emoji: '🚫', pt: 'Evite álcool', en: 'Avoid alcohol' }, { emoji: '🏃', pt: 'Não faça exercício pesado', en: "Don't exercise heavily" },
        { emoji: '📞', pt: 'Me liga se piorar', en: 'Call me if it gets worse' }, { emoji: '🆘', pt: 'Vá à emergência se...', en: 'Go to the ER if...' },
      ]
    },

  { id: 'hospital-er', title: 'Hospital & ER', emoji: '🏥🚑', description: 'Hospital e pronto-socorro', module: 4, order: 25,    slides: [
        { type: 'title', emoji: '🏥🚑', title: 'HOSPITAL & ER', subtitle: 'Hospital e pronto-socorro' },
        { type: 'situation', emoji: '🏥', cardClass: 'red', text: 'Você está no pronto-socorro (ER = Emergency Room).<br>Precisa explicar o que aconteceu,<br>descrever a dor e entender o médico.<br><br>Sua saúde em PRIMEIRO LUGAR!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 COMO FUNCIONA O ER NOS EUA', text: '<strong>Regra #1:</strong> O ER NÃO pode recusar atendimento,<br>mesmo sem seguro ou documento!<br><br><strong>Regra #2:</strong> Vão perguntar:<br>• "What happened?" = O que aconteceu?<br>• "Where does it hurt?" = Onde dói?<br>• "Any allergies?" = Alguma alergia?<br><br>Responda mesmo com inglês básico!' },
        { type: 'rule', cardClass: 'red', text: 'Frases essenciais no hospital:', keyword: 'IT HURTS / I NEED / I\'M ALLERGIC TO', keywordAfter: 'Dói / Preciso / Sou alérgico a' },
        { type: 'example', cardClass: 'red', emoji: '🚨', question: "It\'s an <span class=\"hl-red\">emergency</span>!", questionTr: 'É uma emergência!', answer: '(Fale isso e você será atendido rápido)', answerTr: 'Urgência = prioridade.' },
        { type: 'example', cardClass: 'cyan', emoji: '😫', question: "I'm in a lot of <span class=\"hl-cyan\">pain</span>.", questionTr: 'Tô com muita dor.', answer: '"Where does it hurt?"', answerTr: 'Onde dói? (o médico vai perguntar)' },
        { type: 'example', cardClass: 'green', emoji: '⚠️', question: "I'm <span class=\"hl-green\">allergic</span> to...", questionTr: 'Sou alérgico a...', answer: '(Fale ANTES de tomar qualquer remédio!)', answerTr: 'Penicilina, dipirona, etc.' },
        { type: 'examples', cardClass: 'red', title: '🩺 DESCREVENDO O PROBLEMA', items: [
          { emoji: '🩸', en: "I'm <span class=\"hl-red\">bleeding</span>.", pt: 'Estou sangrando.' },
          { emoji: '🦴', en: 'I <span class="hl-red">broke</span> my arm.', pt: 'Quebrei o braço.' },
          { emoji: '🦶', en: 'I <span class="hl-red">sprained</span> my ankle.', pt: 'Torci o tornozelo.' },
          { emoji: '🩹', en: 'I <span class="hl-red">cut</span> my finger.', pt: 'Cortei meu dedo.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '💰 SEGURO E PAGAMENTO', items: [
          { emoji: '📋', en: "I <span class=\"hl-cyan\">don't have</span> insurance.", pt: 'Não tenho seguro.' },
          { emoji: '💰', en: 'How much will it <span class="hl-cyan">cost</span>?', pt: 'Quanto vai custar?' },
          { emoji: '💳', en: 'Can I pay in <span class="hl-cyan">installments</span>?', pt: 'Posso pagar parcelado?' },
          { emoji: '📝', en: 'I need a doctor\'s <span class="hl-cyan">note</span>.', pt: 'Preciso de atestado.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '💡', title: 'HOSPITAL SEM SEGURO', text: '<strong>Não deixe de ir ao ER por medo de custo!</strong><br><br>1. Eles NÃO podem recusar<br>2. Peça o <strong>"financial assistance"</strong><br>   = Assistência financeira<br>3. Peça <strong>"payment plan"</strong><br>   = Plano de pagamento parcelado<br>4. Muitos hospitais dão até 80% de desconto' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA MÉDICA', text: '<strong>Emergency</strong> → "i-MÉR-jen-si"<br><strong>Allergic</strong> → "a-LÉR-jik"<br><strong>Pain</strong> → "PÊIN"<br><strong>Bleeding</strong> → "BLÍI-ding"<br><strong>Stitches</strong> → "STÍ-tches" (pontos)' },
        { type: 'comparison', cardClass: 'red', title: '🇧🇷 vs 🇺🇸 HOSPITAL', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'SUS: atendimento grátis<br>Demora mas não paga', leftNote: 'Público', right: 'ER: atende todos, mas<br>manda a conta depois', rightNote: 'CARO mas negociável', explanation: 'SEMPRE peça financial assistance e payment plan!' },
        { type: 'quiz', cardClass: 'red', question: '🎯 Você não tem seguro saúde. O ER pode te recusar?', options: ['Sim, sem seguro não atende', 'Não, ER atende todos', 'Depende do hospital'], correct: 1 },
        { type: 'quiz', cardClass: 'red', question: '🎯 "Preciso de atestado" em inglês:', options: ['I need a paper from doctor', "I need a doctor's note", 'I need medical certificate'], correct: 1 },
        { type: 'fill-blank', cardClass: 'red', prompt: '✍️ Complete:', sentence: "I'm _____ to penicillin.", correctWord: 'allergic' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - HOSPITAL', items: [
          { emoji: '🚨', text: '<strong>ER não pode recusar ninguém!</strong>' },
          { emoji: '⚠️', text: "<strong>I'm allergic to...</strong> = FALE ANTES!" },
          { emoji: '💰', text: '<strong>Payment plan</strong> = parcelamento' },
          { emoji: '📝', text: "<strong>Doctor's note</strong> = atestado" }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🚨', pt: 'É urgente', en: "It\'s an emergency", level: 1 },
        { emoji: '🩸', pt: 'Estou sangrando', en: "I'm bleeding", level: 1 },
        { emoji: '🦴', pt: 'Quebrei o braço', en: 'I broke my arm', level: 1 },
        { emoji: '🦶', pt: 'Torci o tornozelo', en: 'I sprained my ankle', level: 1 },
        { emoji: '🩹', pt: 'Cortei meu dedo', en: 'I cut my finger', level: 1 },
        { emoji: '⬇️', pt: 'Caí', en: 'I fell', level: 1 },
        { emoji: '😫', pt: 'Tô com muita dor', en: "I'm in a lot of pain", level: 1 },
        { emoji: '👆', pt: 'Onde dói? — Aqui', en: 'Where does it hurt? — Here', level: 1 },
        { emoji: '⚠️', pt: 'Sou alérgico a...', en: "I'm allergic to...", level: 1 },
        { emoji: '💊', pt: 'Tomo remédio pra...', en: 'I take medicine for...', level: 1 },
        { emoji: '📋', pt: 'Não tenho seguro saúde', en: "I don't have health insurance", level: 1 },
        { emoji: '💰', pt: 'Quanto vai custar?', en: 'How much will it cost?', level: 1 },
        { emoji: '💳', pt: 'Posso pagar parcelado?', en: 'Can I pay in installments?', level: 1 },
        { emoji: '⏳', pt: 'Quanto tempo de espera?', en: 'How long is the wait?', level: 1 },
        { emoji: '🩻', pt: 'Preciso de raio-x', en: 'I need an x-ray', level: 1 },
        { emoji: '🪡', pt: 'Preciso de ponto', en: 'I need stitches', level: 1 },
        { emoji: '😰', pt: 'É grave?', en: 'Is it serious?', level: 1 },
        { emoji: '💼', pt: 'Quando posso voltar a trabalhar?', en: 'When can I go back to work?', level: 1 },
        { emoji: '📝', pt: 'Preciso de atestado', en: "I need a doctor's note", level: 1 },
        { emoji: '🤒', pt: 'Meu filho tá doente', en: 'My kid is sick', level: 1 },
        { emoji: '🤰', pt: 'Ela tá grávida', en: "She's pregnant", level: 1 },
        { emoji: '💊', pt: 'Onde é a farmácia mais perto?', en: 'Where is the nearest pharmacy?', level: 1 },
        { emoji: '🚑', pt: 'Preciso de ambulância', en: 'I need an ambulance', level: 1 },
        { emoji: '😵', pt: 'Ele desmaiou', en: 'He passed out', level: 1 },
        { emoji: '😤', pt: 'Não consigo respirar', en: "I can't breathe", level: 1 }
      ]
    },

  { id: 'health-body', title: 'Health & Body', emoji: '🩺💊', description: 'Saúde e corpo', module: 4, order: 26,    slides: [
        { type: 'title', emoji: '🩺💊', title: 'HEALTH & BODY', subtitle: 'Saúde e corpo — Cuide de você!' },
        { type: 'situation', emoji: '🩺', cardClass: 'green', text: 'Você não tá se sentindo bem.<br>Dor de dente, dor nas costas, gripe...<br>Precisa ir ao médico ou farmácia.<br><br>Saber descrever a dor = atendimento melhor!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'SAÚDE NOS EUA', text: '<strong>Opções sem seguro saúde:</strong><br><br>• <strong>Urgent Care</strong> = pronto-atendimento (mais barato que ER)<br>• <strong>Walk-in clinic</strong> = sem agendamento<br>  (CVS MinuteClinic, Walgreens)<br>• <strong>Community Health Center</strong> = atende TODOS<br>  cobra pelo que você pode pagar<br>• Farmácia = muitos remédios sem receita' },
        { type: 'rule', cardClass: 'green', text: 'Descrevendo sintomas:', keyword: 'MY... HURTS / I HAVE / I NEED', keywordAfter: 'Meu... dói / Tenho / Preciso' },
        { type: 'example', cardClass: 'green', emoji: '🦷', question: 'My <span class="hl-green">tooth</span> hurts.', questionTr: 'Meu dente dói.', answer: '"How long?" / "How bad?"', answerTr: 'Há quanto tempo? / Quão forte?' },
        { type: 'example', cardClass: 'cyan', emoji: '🤒', question: 'I have the <span class="hl-cyan">flu</span>.', questionTr: 'Tô gripado.', answer: '"Get some rest."', answerTr: 'Descansa.' },
        { type: 'example', cardClass: 'orange', emoji: '💊', question: 'I need a <span class="hl-orange">prescription</span>.', questionTr: 'Preciso de receita médica.', answer: '(Muitos remédios precisam de receita nos EUA)', answerTr: 'Diferente do Brasil!' },
        { type: 'examples', cardClass: 'green', title: '🤕 DORES E SINTOMAS', items: [
          { emoji: '🦴', en: 'My <span class="hl-green">back</span> hurts.', pt: 'Minhas costas doem.' },
          { emoji: '🦵', en: 'I hurt my <span class="hl-green">knee</span>.', pt: 'Machuquei o joelho.' },
          { emoji: '🤧', en: 'I have <span class="hl-green">allergies</span>.', pt: 'Tenho alergia.' },
          { emoji: '🤢', en: 'I have a <span class="hl-green">stomachache</span>.', pt: 'Dor de barriga / estômago.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '🏥 NO MÉDICO / FARMÁCIA', items: [
          { emoji: '📅', en: 'Do I need an <span class="hl-cyan">appointment</span>?', pt: 'Preciso agendar?' },
          { emoji: '🚶', en: 'Do you take <span class="hl-cyan">walk-ins</span>?', pt: 'Atende sem hora marcada?' },
          { emoji: '📋', en: 'I have / don\'t have <span class="hl-cyan">insurance</span>.', pt: 'Tenho / Não tenho seguro.' },
          { emoji: '🩸', en: 'I need a <span class="hl-cyan">blood test</span>.', pt: 'Preciso fazer exame de sangue.' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💊', title: 'FARMÁCIA NOS EUA', text: '<strong>CVS e Walgreens</strong> = farmácia + mini-clínica<br><br>Remédios SEM receita (over the counter):<br>• <strong>Tylenol</strong> = paracetamol<br>• <strong>Advil / Motrin</strong> = ibuprofeno<br>• <strong>Benadryl</strong> = alergia<br><br>⚠️ <strong>Dipirona NÃO existe nos EUA!</strong><br>Use Tylenol no lugar.' },
        { type: 'comparison', cardClass: 'green', title: '🇧🇷 vs 🇺🇸 SAÚDE', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Dipirona pra tudo<br>Compra antibiótico fácil', leftNote: 'Mais flexível', right: 'Tylenol / Advil<br>Antibiótico SÓ com receita', rightNote: 'Mais controlado', explanation: 'Dipirona é PROIBIDA nos EUA! Use Tylenol (paracetamol) ou Advil (ibuprofeno).' },
        { type: 'quiz', cardClass: 'green', question: '🎯 Dipirona nos EUA:', options: ['Compra na farmácia normal', 'Não existe! Use Tylenol', 'Precisa de receita'], correct: 1 },
        { type: 'quiz', cardClass: 'green', question: '🎯 "Meu dente dói" em inglês:', options: ['My tooth pains', 'My tooth hurts', 'I have tooth ache'], correct: 1 },
        { type: 'fill-blank', cardClass: 'green', prompt: '✍️ Complete:', sentence: 'My back _____.', correctWord: 'hurts' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🦷', text: '<strong>My... hurts</strong> = Meu... dói' },
          { emoji: '💊', text: '<strong>Tylenol</strong> = paracetamol (substitui dipirona)' },
          { emoji: '🏥', text: '<strong>Urgent Care</strong> = mais barato que ER' },
          { emoji: '📋', text: '<strong>Walk-in</strong> = sem agendamento' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🦷', pt: 'Dor de dente', en: 'My tooth hurts', level: 1 },
        { emoji: '🦴', pt: 'Dor nas costas', en: 'My back hurts', level: 1 },
        { emoji: '🤧', pt: 'Tenho alergia', en: 'I have allergies', level: 1 },
        { emoji: '🤒', pt: 'Tô gripado', en: 'I have the flu', level: 1 },
        { emoji: '🤢', pt: 'Dor de barriga', en: 'I have a stomachache', level: 1 },
        { emoji: '🦵', pt: 'Machuquei o joelho', en: 'I hurt my knee', level: 1 },
        { emoji: '👂', pt: 'Dor de ouvido', en: 'I have an earache', level: 1 },
        { emoji: '👓', pt: 'Preciso de óculos', en: 'I need glasses', level: 1 },
        { emoji: '😴', pt: 'Não consigo dormir', en: "I can't sleep", level: 1 },
        { emoji: '📅', pt: 'Preciso agendar consulta', en: 'I need to make an appointment', level: 1 },
        { emoji: '🚶', pt: 'Atende sem hora marcada?', en: 'Do you take walk-ins?', level: 1 },
        { emoji: '📋', pt: 'Não tenho seguro saúde', en: "I don't have insurance", level: 1 },
        { emoji: '💊', pt: 'Preciso de receita', en: 'I need a prescription', level: 1 },
        { emoji: '🩸', pt: 'Exame de sangue', en: 'Blood test', level: 1 },
        { emoji: '🤰', pt: 'Estou grávida', en: "I'm pregnant", level: 1 }
      ]
    },

  { id: 'car-accident', title: 'Car Accident', emoji: '🚗💥', description: 'Acidente de carro', module: 4, order: 27,    slides: [
        { type: 'title', emoji: '🚗💥', title: 'CAR ACCIDENT', subtitle: 'Acidente de carro — O que dizer e fazer' },
        { type: 'situation', emoji: '🚗', cardClass: 'red', text: 'Alguém bateu no seu carro. 😱<br>Você precisa falar com o outro motorista,<br>com a polícia e com o seguro.<br><br>CALMA! Vamos te preparar.' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 O QUE FAZER PRIMEIRO', text: '<strong>PASSO A PASSO nos EUA:</strong><br><br>1. <strong>Pare o carro</strong> — não saia do local!<br>2. <strong>Ligue 911</strong> se alguém se machucou<br>3. <strong>Tire fotos</strong> de TUDO<br>4. <strong>Troque informações</strong> com o outro motorista<br>5. <strong>NÃO admita culpa!</strong> Mesmo se achar que foi você.' },
        { type: 'rule', cardClass: 'red', text: 'Frases essenciais no acidente:', keyword: "IT WASN'T MY FAULT / I NEED / ARE YOU OK?", keywordAfter: 'Não foi minha culpa / Preciso / Você tá bem?' },
        { type: 'example', cardClass: 'red', emoji: '🙅', question: "It <span class=\"hl-red\">wasn't my fault</span>.", questionTr: 'Não foi minha culpa.', answer: '(NUNCA admita culpa no local!)', answerTr: 'Deixe o seguro resolver.' },
        { type: 'example', cardClass: 'cyan', emoji: '📄', question: "What\'s your <span class=\"hl-cyan\">insurance</span>?", questionTr: 'Qual seu seguro?', answer: '"State Farm." / "Geico." / "Progressive."', answerTr: 'Nome da seguradora.' },
        { type: 'example', cardClass: 'green', emoji: '📸', question: 'Can I take a <span class="hl-green">picture</span>?', questionTr: 'Posso tirar foto?', answer: '(SEMPRE tire fotos de tudo!)', answerTr: 'Danos, placas, local, tudo.' },
        { type: 'examples', cardClass: 'red', title: '🚗 NO LOCAL DO ACIDENTE', items: [
          { emoji: '🤕', en: 'Is anyone <span class="hl-red">hurt</span>?', pt: 'Alguém se machucou?' },
          { emoji: '👍', en: "I'm <span class=\"hl-red\">okay</span>.", pt: 'Eu tô bem.' },
          { emoji: '🚦', en: 'He ran the <span class="hl-red">red light</span>.', pt: 'Ele avançou o sinal.' },
          { emoji: '👀', en: 'Is there a <span class="hl-red">witness</span>?', pt: 'Tem testemunha?' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📋 DEPOIS DO ACIDENTE', items: [
          { emoji: '📋', en: 'I need the <span class="hl-cyan">police report</span>.', pt: 'Preciso do boletim.' },
          { emoji: '🚛', en: 'I need a <span class="hl-cyan">tow truck</span>.', pt: 'Preciso de guincho.' },
          { emoji: '💰', en: 'How much will it <span class="hl-cyan">cost</span>?', pt: 'Quanto vai custar?' },
          { emoji: '🚗', en: 'I need a <span class="hl-cyan">rental car</span>.', pt: 'Preciso de carro alugado.' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '💡', title: 'DICA IMPORTANTÍSSIMA', text: 'Nos EUA, mesmo batida LEVE → troque informações!<br><br>Pegue do outro motorista:<br>• <strong>Name</strong> = Nome<br>• <strong>Phone number</strong> = Telefone<br>• <strong>Insurance info</strong> = Dados do seguro<br>• <strong>License plate</strong> = Placa do carro<br><br>Tire foto de TUDO!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ NUNCA FAÇA ISSO', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: '"Sorry, it was my fault"<br>Admitir culpa no local', leftNote: 'O seguro pode negar!', right: '"I need the police report"<br>Deixe o seguro resolver', rightNote: 'Proteja seus direitos', explanation: 'Nos EUA, admitir culpa pode ser usado CONTRA você pelo seguro.' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA DE EMERGÊNCIA', text: '<strong>Fault</strong> → "FÓLT" (culpa)<br><strong>Insurance</strong> → "in-CHÚR-ens"<br><strong>Witness</strong> → "UÍT-ness"<br><strong>Tow truck</strong> → "TÔU trâk" (guincho)<br><strong>Police report</strong> → "po-LÍIS ri-PORT"' },
        { type: 'quiz', cardClass: 'red', question: '🎯 Bateram no seu carro. Primeiro passo:', options: ['Sair gritando', 'Parar, tirar fotos, trocar informações', 'Ir embora rápido'], correct: 1 },
        { type: 'quiz', cardClass: 'red', question: '🎯 "Não foi minha culpa" em inglês:', options: ["It wasn't my fault", "It\'s not my guilty", 'I no have fault'], correct: 0 },
        { type: 'fill-blank', cardClass: 'red', prompt: '✍️ Complete:', sentence: "It wasn't my _____.", correctWord: 'fault' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - ACIDENTE', items: [
          { emoji: '🙅', text: "<strong>It wasn't my fault</strong> = Não admita culpa!" },
          { emoji: '📸', text: '<strong>Tire fotos</strong> de TUDO' },
          { emoji: '📄', text: '<strong>Insurance</strong> = seguro. Troque dados!' },
          { emoji: '📋', text: '<strong>Police report</strong> = boletim de ocorrência' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🚗', pt: 'Bateram no meu carro', en: 'Someone hit my car', level: 1 },
        { emoji: '🙅', pt: 'Não foi minha culpa', en: "It wasn't my fault", level: 1 },
        { emoji: '🚦', pt: 'Ele avançou o sinal', en: 'He ran the red light', level: 1 },
        { emoji: '📋', pt: 'Preciso do boletim', en: 'I need the police report', level: 1 },
        { emoji: '📄', pt: 'Qual seu seguro?', en: "What\'s your insurance?", level: 1 },
        { emoji: '📸', pt: 'Posso tirar foto?', en: 'Can I take a picture?', level: 1 },
        { emoji: '👀', pt: 'Tem testemunha?', en: 'Is there a witness?', level: 1 },
        { emoji: '🔑', pt: 'Meu carro não liga', en: "My car won't start", level: 1 },
        { emoji: '🚛', pt: 'Preciso de guincho', en: 'I need a tow truck', level: 1 },
        { emoji: '🤕', pt: 'Alguém se machucou?', en: 'Is anyone hurt?', level: 1 },
        { emoji: '👍', pt: 'Eu tô bem', en: "I'm okay", level: 1 },
        { emoji: '🏥', pt: 'Preciso ir ao hospital', en: 'I need to go to the hospital', level: 1 },
        { emoji: '😣', pt: 'Meu pescoço dói', en: 'My neck hurts', level: 1 },
        { emoji: '😣', pt: 'Minhas costas doem', en: 'My back hurts', level: 1 },
        { emoji: '📞', pt: 'Ligue para o seguro', en: 'Call the insurance', level: 1 },
        { emoji: '🔧', pt: 'Onde fica a oficina?', en: 'Where is the repair shop?', level: 1 },
        { emoji: '💰', pt: 'Quanto vai custar?', en: 'How much will it cost?', level: 1 },
        { emoji: '⏱️', pt: 'Quanto tempo pra arrumar?', en: 'How long to fix it?', level: 1 },
        { emoji: '🚗', pt: 'Preciso de carro alugado', en: 'I need a rental car', level: 1 },
        { emoji: '💨', pt: 'O airbag abriu', en: 'The airbag deployed', level: 1 }
      ]
    },

  { id: 'car-trouble', title: 'Car Trouble', emoji: '🚗🔧', description: 'Problemas com carro', module: 4, order: 28,    slides: [
        { type: 'title', emoji: '🚗🔧', title: 'CAR TROUBLE', subtitle: 'Problemas com carro — Não entre em pânico!' },
        { type: 'situation', emoji: '🚗', cardClass: 'orange', text: 'Seu carro parou no meio da estrada. 😰<br>Bateria morta, pneu furado, motor esquentando...<br><br>Você precisa pedir ajuda em inglês.<br>NÃO entre em pânico!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 SEGURANÇA NA ESTRADA', text: '<strong>Se o carro parar na estrada:</strong><br><br>1. Ligue o <strong>pisca-alerta</strong> (hazard lights)<br>2. Encoste na lateral (shoulder)<br>3. Ligue pro <strong>roadside assistance</strong><br>   (AAA, seguro do carro, ou 911)<br>4. Fique DENTRO do carro se for estrada rápida' },
        { type: 'rule', cardClass: 'orange', text: 'Descrevendo o problema:', keyword: 'BROKE DOWN / FLAT TIRE / WON\'T START', keywordAfter: 'Quebrou / Pneu furado / Não liga' },
        { type: 'example', cardClass: 'orange', emoji: '🚗', question: 'My car <span class="hl-orange">broke down</span>.', questionTr: 'Meu carro quebrou.', answer: '(BROKE DOWN = parou de funcionar)', answerTr: 'Frase #1 mais importante!' },
        { type: 'example', cardClass: 'cyan', emoji: '🛞', question: 'I got a <span class="hl-cyan">flat tire</span>.', questionTr: 'Furou o pneu.', answer: '(FLAT TIRE = pneu furado)', answerTr: 'Não é "broken tire"!' },
        { type: 'example', cardClass: 'red', emoji: '🔋', question: 'The <span class="hl-red">battery</span> died.', questionTr: 'A bateria morreu.', answer: '"Can you give me a jump?"', answerTr: 'Pode me dar uma chupeta?' },
        { type: 'examples', cardClass: 'orange', title: '🔧 DESCREVENDO PROBLEMAS', items: [
          { emoji: '🔊', en: "It\'s making a <span class=\"hl-orange\">weird noise</span>.", pt: 'Tá fazendo barulho estranho.' },
          { emoji: '🌡️', en: 'The engine is <span class="hl-orange">overheating</span>.', pt: 'O motor tá esquentando.' },
          { emoji: '⛽', en: 'I ran <span class="hl-orange">out of gas</span>.', pt: 'Acabou a gasolina.' },
          { emoji: '🛑', en: 'The <span class="hl-orange">brakes</span> are bad.', pt: 'O freio tá ruim.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📞 PEDINDO AJUDA', items: [
          { emoji: '💰', en: 'How much to <span class="hl-cyan">fix</span> it?', pt: 'Quanto pra arrumar?' },
          { emoji: '🔩', en: 'Do you have the <span class="hl-cyan">part</span>?', pt: 'Você tem a peça?' },
          { emoji: '📅', en: 'When will it be <span class="hl-cyan">ready</span>?', pt: 'Quando fica pronto?' },
          { emoji: '🔒', en: 'I <span class="hl-cyan">locked myself out</span>.', pt: 'Travei a chave dentro.' }
        ]},
        { type: 'tip', cardClass: 'purple', icon: '💡', title: 'CHUPETA = JUMP START', text: 'No Brasil: "chupeta"<br>Nos EUA: <strong>"jump start"</strong> ou <strong>"a jump"</strong><br><br>"Can you give me a <strong>jump</strong>?"<br>= Pode me dar uma chupeta?<br><br>"Do you have <strong>jumper cables</strong>?"<br>= Tem cabo de chupeta?' },
        { type: 'comparison', cardClass: 'orange', title: '🇧🇷 vs 🇺🇸 TERMOS DO CARRO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Pneu furado<br>Chupeta<br>Guincho', leftNote: 'Termos BR', right: 'Flat tire<br>Jump start<br>Tow truck', rightNote: 'Termos US', explanation: 'Não traduza literalmente! "Flat tire", não "hole tire".' },
        { type: 'quiz', cardClass: 'orange', question: '🎯 Seu pneu furou. Como dizer?', options: ['My tire is broken', 'I got a flat tire', 'My tire has a hole'], correct: 1 },
        { type: 'quiz', cardClass: 'orange', question: '🎯 A bateria morreu. Como pedir chupeta?', options: ['Can you give me a jump?', 'Can you push my battery?', 'Battery help please?'], correct: 0 },
        { type: 'fill-blank', cardClass: 'orange', prompt: '✍️ Complete:', sentence: 'My car _____ down.', correctWord: 'broke' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🚗', text: '<strong>Broke down</strong> = carro quebrou' },
          { emoji: '🛞', text: '<strong>Flat tire</strong> = pneu furado' },
          { emoji: '🔋', text: '<strong>Jump start</strong> = chupeta na bateria' },
          { emoji: '⚠️', text: 'Ligue pisca-alerta e encoste!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🚗', pt: 'Meu carro quebrou', en: 'My car broke down', level: 1 },
        { emoji: '🛞', pt: 'Furou o pneu', en: 'I got a flat tire', level: 1 },
        { emoji: '🔋', pt: 'A bateria morreu', en: 'The battery died', level: 1 },
        { emoji: '🔊', pt: 'Tá fazendo barulho estranho', en: "It\'s making a weird noise", level: 1 },
        { emoji: '🌡️', pt: 'O motor tá esquentando', en: 'The engine is overheating', level: 1 },
        { emoji: '⛽', pt: 'Acabou a gasolina', en: 'I ran out of gas', level: 1 },
        { emoji: '🛑', pt: 'O freio tá ruim', en: 'The brakes are bad', level: 1 },
        { emoji: '❄️', pt: 'O ar não funciona', en: "The AC doesn't work", level: 1 },
        { emoji: '⚠️', pt: 'A luz do painel acendeu', en: 'The dashboard light came on', level: 1 },
        { emoji: '💰', pt: 'Quanto pra arrumar?', en: 'How much to fix it?', level: 1 },
        { emoji: '🔩', pt: 'Tem a peça?', en: 'Do you have the part?', level: 1 },
        { emoji: '📅', pt: 'Quando fica pronto?', en: 'When will it be ready?', level: 1 },
        { emoji: '🪑', pt: 'Posso esperar aqui?', en: 'Can I wait here?', level: 1 },
        { emoji: '📱', pt: 'Tem Uber perto?', en: 'Is there an Uber nearby?', level: 1 },
        { emoji: '🔒', pt: 'Travei a chave dentro', en: 'I locked myself out', level: 1 }
      ]
    },

  { id: 'at-the-mechanic', title: 'At the Mechanic', emoji: '🔧🚗', description: 'Na oficina mecânica', module: 4, order: 29,    slides: [
        { type: 'title', emoji: '🔧🚗', title: 'AT THE MECHANIC', subtitle: 'Na oficina mecânica' },
        { type: 'situation', emoji: '🔧', cardClass: 'orange', text: 'Seu carro tá com problema.<br>Você leva na oficina e o mecânico fala:<br>"It needs new brakes."<br><br>Entenda o que precisa e quanto vai custar!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'OFICINA NOS EUA', text: '<strong>Dicas importantes:</strong><br><br>• SEMPRE peça um <strong>estimate</strong> (orçamento) ANTES<br>• Pergunte: "Is it safe to drive?"<br>  = É seguro dirigir?<br>• Pesquise preços online antes de ir<br>• AutoZone e O\'Reilly checam bateria GRÁTIS' },
        { type: 'rule', cardClass: 'orange', text: 'Na oficina:', keyword: 'HOW MUCH / HOW LONG / IS IT SAFE', keywordAfter: 'Quanto custa / Quanto tempo / É seguro' },
        { type: 'example', cardClass: 'orange', emoji: '🛢️', question: 'I need an <span class="hl-orange">oil change</span>.', questionTr: 'Preciso trocar o óleo.', answer: '"$40-80 depending on the oil."', answerTr: 'O serviço mais comum.' },
        { type: 'example', cardClass: 'cyan', emoji: '🛞', question: 'The tires are <span class="hl-cyan">worn out</span>.', questionTr: 'Os pneus estão gastos.', answer: '"You need new ones."', answerTr: 'Precisa de pneus novos.' },
        { type: 'example', cardClass: 'red', emoji: '⚠️', question: 'The <span class="hl-red">check engine</span> light is on.', questionTr: 'A luz do motor acendeu.', answer: '"Let me run a diagnostic."', answerTr: 'Vou fazer diagnóstico.' },
        { type: 'examples', cardClass: 'orange', title: '🔧 PROBLEMAS COMUNS', items: [
          { emoji: '🛞', en: 'I need an <span class="hl-orange">alignment</span>.', pt: 'Preciso de alinhamento.' },
          { emoji: '🚗', en: 'The car is <span class="hl-orange">pulling</span> to the right.', pt: 'O carro puxa pra direita.' },
          { emoji: '🔋', en: 'I need a new <span class="hl-orange">battery</span>.', pt: 'Preciso de bateria nova.' },
          { emoji: '🛑', en: 'The <span class="hl-orange">brakes</span> are squeaking.', pt: 'O freio tá fazendo barulho.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '💰 NEGOCIANDO', items: [
          { emoji: '💰', en: 'Can I get an <span class="hl-cyan">estimate</span>?', pt: 'Pode fazer um orçamento?' },
          { emoji: '📅', en: 'When will it be <span class="hl-cyan">ready</span>?', pt: 'Quando fica pronto?' },
          { emoji: '🛡️', en: 'Is there a <span class="hl-cyan">warranty</span>?', pt: 'Tem garantia?' },
          { emoji: '📋', en: 'Do I need a state <span class="hl-cyan">inspection</span>?', pt: 'Preciso fazer inspeção?' }
        ]},
        { type: 'comparison', cardClass: 'orange', title: '🇧🇷 vs 🇺🇸 OFICINA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Mecânico de confiança<br>Preço na conversa', leftNote: 'Informal', right: 'Cadeia grande (Midas, Jiffy Lube)<br>Estimate por escrito', rightNote: 'Mais formal', explanation: 'Nos EUA, SEMPRE peça estimate antes. Se não pedir, a conta pode surpreender!' },
        { type: 'quiz', cardClass: 'orange', question: '🎯 "Preciso trocar o óleo" em inglês:', options: ['I need to change the oil', 'I need an oil change', 'Ambos funcionam!'], correct: 2 },
        { type: 'fill-blank', cardClass: 'orange', prompt: '✍️ Complete:', sentence: 'Can I get an _____?', correctWord: 'estimate' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🛢️', text: '<strong>Oil change</strong> = troca de óleo' },
          { emoji: '💰', text: '<strong>Estimate</strong> = orçamento (PEÇA ANTES!)' },
          { emoji: '⚠️', text: '<strong>Check engine light</strong> = luz do motor' },
          { emoji: '🛡️', text: '<strong>Warranty</strong> = garantia' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🛢️', pt: 'Preciso trocar o óleo', en: 'I need an oil change', level: 1 },
        { emoji: '🛞', pt: 'Os pneus estão gastos', en: 'The tires are worn out', level: 1 },
        { emoji: '🛞', pt: 'Preciso de alinhamento', en: 'I need an alignment', level: 1 },
        { emoji: '🚗', pt: 'O carro puxa pra direita', en: 'The car is pulling to the right', level: 1 },
        { emoji: '⚠️', pt: 'A luz do motor acendeu', en: 'The check engine light is on', level: 1 },
        { emoji: '💰', pt: 'Pode fazer um orçamento?', en: 'Can I get an estimate?', level: 1 },
        { emoji: '📅', pt: 'Quando fica pronto?', en: 'When will it be ready?', level: 1 },
        { emoji: '💵', pt: 'Quanto vai custar?', en: 'How much will it cost?', level: 1 },
        { emoji: '🛡️', pt: 'Tem garantia?', en: 'Is there a warranty?', level: 1 },
        { emoji: '⏱️', pt: 'Quanto tempo demora?', en: 'How long will it take?', level: 1 },
        { emoji: '🔋', pt: 'Preciso de bateria nova', en: 'I need a new battery', level: 1 },
        { emoji: '🛑', pt: 'O freio tá fazendo barulho', en: 'The brakes are squeaking', level: 1 },
        { emoji: '📋', pt: 'Preciso fazer inspeção', en: 'I need a state inspection', level: 1 },
        { emoji: '🚗', pt: 'É seguro dirigir assim?', en: 'Is it safe to drive?', level: 1 },
        { emoji: '🪑', pt: 'Posso esperar aqui?', en: 'Can I wait here?', level: 1 }
      ]
    },

  { id: 'gas-station', title: 'Gas Station', emoji: '⛽🚗', description: 'Posto de gasolina', module: 4, order: 30,    slides: [
        { type: 'title', emoji: '⛽🚗', title: 'GAS STATION', subtitle: 'Posto de gasolina — Simples mas essencial' },
        { type: 'situation', emoji: '⛽', cardClass: 'cyan', text: 'Você parou no posto de gasolina.<br>Precisa abastecer, calibrar pneu,<br>usar o banheiro...<br><br>É simples, mas tem pegadinha!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'COMO FUNCIONA NOS EUA', text: 'Na maioria dos postos nos EUA,<br><strong>VOCÊ MESMO</strong> coloca gasolina!<br>(self-service)<br><br>1. Passa o cartão na bomba<br>2. Escolhe o tipo (Regular, Plus, Premium)<br>3. Abastece sozinho<br>4. Pega o recibo<br><br>Em Massachusetts, é self-service!' },
        { type: 'rule', cardClass: 'cyan', text: 'No posto de gasolina:', keyword: 'FILL IT UP / WHICH PUMP / REGULAR', keywordAfter: 'Tanque cheio / Qual bomba / Regular' },
        { type: 'example', cardClass: 'cyan', emoji: '⛽', question: '<span class="hl-cyan">Fill it up</span>.', questionTr: 'Tanque cheio.', answer: '(Se for em posto com atendente)', answerTr: '"Fill it up with regular."' },
        { type: 'example', cardClass: 'green', emoji: '🔢', question: '<span class="hl-green">Which pump</span>?', questionTr: 'Qual bomba?', answer: '"Pump number 3." / "Pump 5."', answerTr: 'O caixa pergunta isso se pagar dentro.' },
        { type: 'example', cardClass: 'orange', emoji: '💳', question: '<span class="hl-orange">Debit or credit</span>?', questionTr: 'Débito ou crédito?', answer: '(A máquina pergunta isso)', answerTr: 'Nos EUA, débito pede PIN.' },
        { type: 'examples', cardClass: 'cyan', title: '⛽ FRASES ÚTEIS', items: [
          { emoji: '💵', en: '<span class="hl-cyan">Twenty dollars</span> of gas.', pt: 'Vinte dólares de gasolina.' },
          { emoji: '🛞', en: 'Do you have <span class="hl-cyan">air</span> for tires?', pt: 'Tem ar pra pneu?' },
          { emoji: '🚻', en: "Where's the <span class=\"hl-cyan\">bathroom</span>?", pt: 'Onde é o banheiro?' },
          { emoji: '💰', en: 'The <span class="hl-cyan">change</span>.', pt: 'O troco.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🇧🇷 vs 🇺🇸 POSTO', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Frentista abastece<br>e limpa o vidro', leftNote: 'Serviço completo', right: 'Você mesmo abastece<br>(self-service)', rightNote: 'Faça sozinho!', explanation: 'Em NJ e OR ainda tem frentista, mas MA é self-service!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Tanque cheio" em inglês:', options: ['Full tank', 'Fill it up', 'Complete gas'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: '_____ it up with regular.', correctWord: 'Fill' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '⛽', text: '<strong>Fill it up</strong> = tanque cheio' },
          { emoji: '🔢', text: '<strong>Which pump?</strong> = qual bomba?' },
          { emoji: '💳', text: '<strong>Debit or credit?</strong>' },
          { emoji: '🇺🇸', text: 'EUA = self-service (você abastece!)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '⛽', pt: 'Tanque cheio', en: 'Fill it up', level: 1 },
        { emoji: '💵', pt: 'Vinte de gasolina', en: 'Twenty dollars of gas', level: 1 },
        { emoji: '🔢', pt: 'Qual bomba?', en: 'Which pump?', level: 1 },
        { emoji: '❌', pt: 'A bomba não funciona', en: "The pump isn't working", level: 1 },
        { emoji: '🛞', pt: 'Tem ar pra pneu?', en: 'Do you have air for tires?', level: 1 },
        { emoji: '🚻', pt: 'Onde é o banheiro?', en: "Where's the bathroom?", level: 1 },
        { emoji: '💳', pt: 'Aceita cartão?', en: 'Do you take card?', level: 1 },
        { emoji: '💳', pt: 'Débito ou crédito?', en: 'Debit or credit?', level: 1 },
        { emoji: '💰', pt: 'O troco', en: 'The change', level: 1 },
        { emoji: '🔥', pt: 'Tem carvão?', en: 'Do you have charcoal?', level: 1 }
      ]
    },

  { id: 'uber-rideshare', title: 'Uber / Rideshare', emoji: '🚗📱', description: 'Uber e carona por app', module: 4, order: 31,    slides: [
        { type: 'title', emoji: '🚗📱', title: 'UBER / RIDESHARE', subtitle: 'Usando apps de carona' },
        { type: 'situation', emoji: '🚗', cardClass: 'purple', text: 'Você pediu um Uber.<br>O motorista está chegando.<br><br>Como se comunicar?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para confirmar identidade:', keyword: "ARE YOU [NAME]? / IS THIS FOR [NAME]?", keywordAfter: 'Você é...? / É pra...?' },
        { type: 'example', cardClass: 'cyan', emoji: '🚗', question: "Are you <span class='hl-cyan'>[driver name]</span>?", questionTr: 'Você é [nome do motorista]?', answer: 'Yes, I am.', answerTr: 'Confirma o motorista' },
        { type: 'example', cardClass: 'cyan', emoji: '📍', question: "I'm at <span class='hl-cyan'>[location]</span>.", questionTr: 'Estou em [local].', answer: '(sua localização)', answerTr: 'Onde você está' },
        { type: 'example', cardClass: 'cyan', emoji: '🏠', question: "I'm going to <span class='hl-cyan'>[address]</span>.", questionTr: 'Vou para [endereço].', answer: '(confirmar destino)', answerTr: 'GOING TO' },
        { type: 'examples', cardClass: 'cyan', title: '🚗 ENCONTRANDO O MOTORISTA', items: [
          { emoji: '👋', en: "Hi, I'm <span class='hl-cyan'>[your name]</span>", pt: 'Oi, eu sou [seu nome]' },
          { emoji: '🚗', en: "Is this for <span class='hl-cyan'>[name]</span>?", pt: 'É pra [nome]?' },
          { emoji: '📍', en: "I'm in front of <span class='hl-cyan'>[place]</span>", pt: 'Estou na frente de [lugar]' },
          { emoji: '👀', en: "I see you", pt: 'Estou te vendo' }
        ]},
        { type: 'examples', cardClass: 'green', title: '📍 DURANTE A CORRIDA', items: [
          { emoji: '⬅️', en: "Can you <span class='hl-green'>drop me off</span> here?", pt: 'Pode me deixar aqui?' },
          { emoji: '🛑', en: "Can you <span class='hl-green'>stop here</span>?", pt: 'Pode parar aqui?' },
          { emoji: '🔇', en: "Can you turn down the <span class='hl-green'>music</span>?", pt: 'Pode abaixar a música?' },
          { emoji: '❄️', en: "Can you turn on the <span class='hl-green'>AC</span>?", pt: 'Pode ligar o ar?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'SEGURANÇA', text: 'Sempre confirme:<br><br>• <strong>Nome do motorista</strong><br>• <strong>Placa do carro</strong> (license plate)<br>• <strong>Modelo/cor do carro</strong>' },
        { type: 'examples', cardClass: 'gold', title: '💵 PAGAMENTO E GORJETA', items: [
          { emoji: '💳', en: "It\'s already <span class='hl-gold'>paid</span> through the app", pt: 'Já está pago pelo app' },
          { emoji: '💵', en: "I'll <span class='hl-gold'>tip</span> you on the app", pt: 'Vou dar gorjeta no app' },
          { emoji: '⭐', en: "I'll give you <span class='hl-gold'>5 stars</span>", pt: 'Vou te dar 5 estrelas' }
        ]},
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Pode me deixar aqui?" em inglês:', options: ['Can you leave me here?', 'Can you drop me off here?', 'Can you put me here?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Placa do carro" em inglês:', options: ['Car plate', 'License plate', 'Number plate'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "Can you _____ here?", correctWord: 'stop' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🚗', text: '<strong>Drop me off</strong> = me deixa' },
          { emoji: '🔢', text: '<strong>License plate</strong> = placa' },
          { emoji: '💵', text: '<strong>Tip</strong> = gorjeta' },
          { emoji: '⭐', text: '<strong>5 stars</strong> = 5 estrelas' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🚗', pt: 'Você é [nome]?', en: 'Are you [name]?' },
        { emoji: '📍', pt: 'Estou em frente de...', en: "I'm in front of..." },
        { emoji: '⬅️', pt: 'Pode me deixar aqui?', en: 'Can you drop me off here?' },
        { emoji: '🛑', pt: 'Pode parar aqui?', en: 'Can you stop here?' },
        { emoji: '🔇', pt: 'Pode abaixar a música?', en: 'Can you turn down the music?' },
        { emoji: '❄️', pt: 'Pode ligar o ar?', en: 'Can you turn on the AC?' },
        { emoji: '🔢', pt: 'Placa do carro', en: 'License plate' },
        { emoji: '💵', pt: 'Vou dar gorjeta no app', en: "I'll tip you on the app" },
        { emoji: '⭐', pt: '5 estrelas', en: '5 stars' },
        { emoji: '🙏', pt: 'Obrigado pela carona', en: 'Thanks for the ride' },
      ]
    },

  { id: 'bus-transit', title: 'Bus & Transit', emoji: '🚌🚇', description: 'Ônibus e transporte', module: 4, order: 32,    slides: [
        { type: 'title', emoji: '🚌🚇', title: 'BUS & TRANSIT', subtitle: 'Ônibus e transporte público' },
        { type: 'situation', emoji: '🚌', cardClass: 'cyan', text: 'Você precisa pegar ônibus ou metrô.<br>Qual linha? Onde desce? Quanto custa?<br><br>Transporte público nos EUA é diferente do Brasil!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'TRANSPORTE EM MASSACHUSETTS', text: '<strong>MBTA (T) em Boston:</strong><br><br>• <strong>Charlie Card</strong> = cartão recarregável (mais barato)<br>• Ônibus aceita cash mas sem troco!<br>• Red, Green, Blue, Orange = linhas do metrô<br>• "Inbound" = direção downtown<br>• "Outbound" = saindo de downtown<br>• App: Transit ou Google Maps pra horários' },
        { type: 'rule', cardClass: 'cyan', text: 'No transporte:', keyword: 'WHICH LINE / WHICH STOP / HOW MUCH', keywordAfter: 'Qual linha / Qual parada / Quanto' },
        { type: 'example', cardClass: 'cyan', emoji: '🚌', question: 'Does this bus go to <span class="hl-cyan">downtown</span>?', questionTr: 'Esse ônibus vai pro centro?', answer: '"Yes." / "No, you need the 57."', answerTr: 'Sim. / Não, você precisa do 57.' },
        { type: 'example', cardClass: 'green', emoji: '🛑', question: 'Where do I <span class="hl-green">get off</span>?', questionTr: 'Onde eu desço?', answer: '(GET OFF = descer do ônibus/metrô)', answerTr: 'Pergunte pro motorista!' },
        { type: 'example', cardClass: 'orange', emoji: '🔄', question: 'Do I need to <span class="hl-orange">transfer</span>?', questionTr: 'Preciso fazer baldeação?', answer: '"Yes, transfer at Park Street."', answerTr: 'Sim, faz baldeação na Park Street.' },
        { type: 'examples', cardClass: 'cyan', title: '🚌 PERGUNTAS ESSENCIAIS', items: [
          { emoji: '💰', en: 'How <span class="hl-cyan">much</span> is the fare?', pt: 'Quanto é a passagem?' },
          { emoji: '💳', en: 'Do you take <span class="hl-cyan">cash</span>?', pt: 'Aceita dinheiro?' },
          { emoji: '🕐', en: 'What time is the <span class="hl-cyan">next</span> bus?', pt: 'Que horas é o próximo?' },
          { emoji: '😱', en: 'I <span class="hl-cyan">missed</span> my bus!', pt: 'Perdi o ônibus!' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🇧🇷 vs 🇺🇸 TRANSPORTE', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Ônibus passa frequente<br>Cobrador dá troco', leftNote: 'Mais flexível', right: 'Ônibus tem horário fixo<br>Sem troco! Leve trocado', rightNote: 'Mais pontual', explanation: 'Nos EUA, o ônibus segue horário FIXO. Use o app pra não perder!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Onde eu desço?" em inglês:', options: ['Where I go out?', 'Where do I get off?', 'Where I leave?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Does this bus _____ to downtown?', correctWord: 'go' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🚌', text: '<strong>Does this bus go to...?</strong>' },
          { emoji: '🛑', text: '<strong>Where do I get off?</strong> = Onde desço?' },
          { emoji: '🔄', text: '<strong>Transfer</strong> = baldeação' },
          { emoji: '💰', text: 'Sem troco no ônibus! Leve trocado.' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🚌', pt: 'Esse ônibus vai pro centro?', en: 'Does this bus go to downtown?', level: 1 },
        { emoji: '🛑', pt: 'Onde eu desço?', en: 'Where do I get off?', level: 1 },
        { emoji: '💰', pt: 'Quanto é a passagem?', en: 'How much is the fare?', level: 1 },
        { emoji: '💳', pt: 'Aceita dinheiro?', en: 'Do you take cash?', level: 1 },
        { emoji: '💰', pt: 'Preciso de troco', en: 'I need change', level: 1 },
        { emoji: '😱', pt: 'Perdi o ônibus', en: 'I missed the bus', level: 1 },
        { emoji: '🕐', pt: 'Que horas é o próximo?', en: 'What time is the next one?', level: 1 },
        { emoji: '📅', pt: 'Qual é o horário?', en: "What\'s the schedule?", level: 1 },
        { emoji: '🚇', pt: 'Qual linha do metrô?', en: 'Which subway line?', level: 1 },
        { emoji: '🔄', pt: 'Preciso fazer baldeação?', en: 'Do I need to transfer?', level: 1 },
        { emoji: '🗺️', pt: 'Quantas paradas?', en: 'How many stops?', level: 1 },
        { emoji: '💳', pt: 'Onde carrego o cartão?', en: 'Where do I reload my card?', level: 1 }
      ]
    },

  { id: 'parking', title: 'Parking', emoji: '🅿️🚗', description: 'Estacionamento', module: 4, order: 33,    slides: [
        { type: 'title', emoji: '🅿️🚗', title: 'PARKING', subtitle: 'Estacionamento — Evite multas!' },
        { type: 'situation', emoji: '🅿️', cardClass: 'orange', text: 'Estacionar nos EUA pode ser CARO.<br>E errar o lugar? Multa ou guincho!<br><br>Entenda as placas e evite dor de cabeça!' },
        { type: 'tip', cardClass: 'red', icon: '⚠️', title: '🇺🇸 ESTACIONAMENTO NOS EUA', text: '<strong>CUIDADO com:</strong><br><br>• <strong>No Parking</strong> = Proibido estacionar<br>• <strong>Tow Zone</strong> = Zona de guincho (SÉRIO!)<br>• <strong>2 Hour Parking</strong> = Máximo 2 horas<br>• <strong>Street Cleaning</strong> = Dia que limpa a rua<br>  (multa se tiver carro)<br>• <strong>Fire Hydrant</strong> = hidrante<br>  (multa de $100+ se parar perto!)' },
        { type: 'rule', cardClass: 'orange', text: 'Sobre estacionamento:', keyword: 'NO PARKING / TOW / TICKET', keywordAfter: 'Proibido / Guincho / Multa' },
        { type: 'example', cardClass: 'orange', emoji: '🅿️', question: 'Can I <span class="hl-orange">park</span> here?', questionTr: 'Posso estacionar aqui?', answer: '"Yes." / "No, it\'s a tow zone."', answerTr: 'Sim. / Não, é zona de guincho.' },
        { type: 'example', cardClass: 'red', emoji: '🎫', question: 'I got a <span class="hl-red">parking ticket</span>.', questionTr: 'Levei multa de estacionamento.', answer: '(Pague no prazo = preço menor)', answerTr: 'Não ignore! Pode virar dívida.' },
        { type: 'example', cardClass: 'cyan', emoji: '🚛', question: 'My car got <span class="hl-cyan">towed</span>!', questionTr: 'Guincharam meu carro!', answer: '"Call this number."', answerTr: 'Liga pra esse número. ($150-300!)' },
        { type: 'examples', cardClass: 'orange', title: '🅿️ FRASES ÚTEIS', items: [
          { emoji: '💰', en: 'How much is <span class="hl-orange">parking</span>?', pt: 'Quanto é o estacionamento?' },
          { emoji: '🕐', en: 'How <span class="hl-orange">long</span> can I park?', pt: 'Por quanto tempo posso estacionar?' },
          { emoji: '🏢', en: 'Where is the parking <span class="hl-orange">lot</span>?', pt: 'Onde é o estacionamento?' },
          { emoji: '📋', en: 'What does this <span class="hl-orange">sign</span> mean?', pt: 'O que essa placa significa?' }
        ]},
        { type: 'quiz', cardClass: 'orange', question: '🎯 Placa diz "Tow Zone." O que significa?', options: ['Estacionamento grátis', 'Seu carro será guinchado!', 'Pode parar por 2 horas'], correct: 1 },
        { type: 'fill-blank', cardClass: 'orange', prompt: '✍️ Complete:', sentence: 'I got a parking _____.', correctWord: 'ticket' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '🚫', text: '<strong>No Parking</strong> = proibido!' },
          { emoji: '🚛', text: '<strong>Tow Zone</strong> = guincho!' },
          { emoji: '🎫', text: '<strong>Parking ticket</strong> = multa (pague rápido!)' },
          { emoji: '⚠️', text: 'Não pare perto de hidrante!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '🅿️', pt: 'Posso estacionar aqui?', en: 'Can I park here?', level: 1 },
        { emoji: '💰', pt: 'Quanto é o estacionamento?', en: 'How much is parking?', level: 1 },
        { emoji: '🅿️', pt: 'Cadê uma vaga?', en: 'Where is a parking spot?', level: 1 },
        { emoji: '🕐', pt: 'Por quanto tempo posso ficar?', en: 'How long can I park?', level: 1 },
        { emoji: '🎫', pt: 'Levei multa', en: 'I got a parking ticket', level: 1 },
        { emoji: '🚛', pt: 'Guincharam meu carro', en: 'My car got towed', level: 1 },
        { emoji: '💰', pt: 'Quanto é pra tirar do pátio?', en: 'How much to get it out?', level: 1 },
        { emoji: '🏢', pt: 'Onde é o estacionamento?', en: 'Where is the parking lot?', level: 1 },
        { emoji: '📋', pt: 'O que essa placa significa?', en: 'What does this sign mean?', level: 1 },
        { emoji: '🚫', pt: 'Proibido estacionar', en: 'No parking', level: 1 }
      ]
    },

  { id: 'neighbors-living', title: 'Neighbors & Living', emoji: '🏘️👋', description: 'Vizinhos e moradia', module: 4, order: 34,    slides: [
        { type: 'title', emoji: '🏘️👋', title: 'NEIGHBORS & LIVING', subtitle: 'Vizinhos e moradia' },
        { type: 'situation', emoji: '🏘️', cardClass: 'cyan', text: 'Você se mudou pra um apartamento novo.<br>Precisa falar com vizinhos,<br>resolver problemas do prédio...<br><br>Boa vizinhança começa com comunicação!' },
        { type: 'tip', cardClass: 'gold', icon: '🇺🇸', title: 'VIZINHANÇA NOS EUA', text: '<strong>Regras não-escritas:</strong><br><br>• Barulho depois das 10pm pode dar <strong>noise complaint</strong><br>• Lixo tem dia certo (trash pickup day)<br>• Se apresentar é educado mas não obrigatório<br>• "Quiet hours" existem em muitos prédios<br><br>Um simples "Hi, I\'m the new neighbor" abre portas!' },
        { type: 'rule', cardClass: 'cyan', text: 'Com vizinhos e no prédio:', keyword: 'SORRY ABOUT / THE... IS BROKEN / I NEED', keywordAfter: 'Desculpa pelo / O... tá quebrado / Preciso' },
        { type: 'example', cardClass: 'cyan', emoji: '👋', question: "I'm the <span class=\"hl-cyan\">new neighbor</span>.", questionTr: 'Sou o vizinho novo.', answer: '"Welcome! Nice to meet you."', answerTr: 'Bem-vindo! Prazer.' },
        { type: 'example', cardClass: 'orange', emoji: '🔊', question: 'Sorry about the <span class="hl-orange">noise</span>.', questionTr: 'Desculpa pelo barulho.', answer: '"No worries." / "It\'s fine."', answerTr: 'Sem problema.' },
        { type: 'example', cardClass: 'red', emoji: '💧', question: "There's a water <span class=\"hl-red\">leak</span>.", questionTr: 'Tá vazando água.', answer: '(Avise o landlord imediatamente!)', answerTr: 'LEAK = vazamento.' },
        { type: 'examples', cardClass: 'cyan', title: '🏠 PROBLEMAS DO PRÉDIO', items: [
          { emoji: '🛗', en: 'The <span class="hl-cyan">elevator</span> is broken.', pt: 'O elevador tá quebrado.' },
          { emoji: '💡', en: 'The <span class="hl-cyan">power</span> went out.', pt: 'Faltou luz.' },
          { emoji: '🚰', en: 'The <span class="hl-cyan">water</span> is out.', pt: 'Faltou água.' },
          { emoji: '🌡️', en: "The <span class=\"hl-cyan\">heater</span> doesn't work.", pt: 'O aquecedor não funciona.' }
        ]},
        { type: 'examples', cardClass: 'orange', title: '📋 DIA A DIA', items: [
          { emoji: '🗑️', en: 'Where does the <span class="hl-orange">trash</span> go?', pt: 'O lixo vai pra onde?' },
          { emoji: '📅', en: 'What day is <span class="hl-orange">trash pickup</span>?', pt: 'Que dia passa o lixo?' },
          { emoji: '🔑', en: 'I lost my <span class="hl-orange">key</span>.', pt: 'Perdi minha chave.' },
          { emoji: '🔒', en: "I'm <span class=\"hl-orange\">locked out</span>.", pt: 'Tô trancado do lado de fora.' }
        ]},
        { type: 'comparison', cardClass: 'cyan', title: '🇧🇷 vs 🇺🇸 VIZINHANÇA', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '🇧🇷', rightIcon: '🇺🇸', leftLabel: 'NO BRASIL', rightLabel: 'NOS EUA', left: 'Vizinho é quase família<br>Barulho é normal', leftNote: 'Mais informal', right: 'Vizinho é educado mas distante<br>Noise complaint é sério', rightNote: 'Mais formal', explanation: 'Nos EUA, respeitar o silêncio é MUITO importante. Noise complaint pode dar multa!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Faltou luz" em inglês:', options: ['The light went out', 'The power went out', 'No have electricity'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "There's a water _____.", correctWord: 'leak' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO', items: [
          { emoji: '👋', text: '"I\'m the new neighbor" = se apresentar' },
          { emoji: '💡', text: '<strong>The power went out</strong> = faltou luz' },
          { emoji: '💧', text: '<strong>Water leak</strong> = vazamento' },
          { emoji: '🔇', text: 'Noise complaint é coisa séria nos EUA!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [
        { emoji: '👋', pt: 'Sou o vizinho novo', en: "I'm the new neighbor", level: 1 },
        { emoji: '🔊', pt: 'Desculpa pelo barulho', en: 'Sorry about the noise', level: 1 },
        { emoji: '🤫', pt: 'Pode fazer menos barulho?', en: 'Can you keep it down?', level: 1 },
        { emoji: '🗑️', pt: 'O lixo vai pra onde?', en: 'Where does the trash go?', level: 1 },
        { emoji: '📅', pt: 'Que dia passa o lixo?', en: 'What day is trash pickup?', level: 1 },
        { emoji: '🛗', pt: 'O elevador tá quebrado', en: 'The elevator is broken', level: 1 },
        { emoji: '💡', pt: 'Faltou luz', en: 'The power went out', level: 1 },
        { emoji: '🚰', pt: 'Faltou água', en: 'The water is out', level: 1 },
        { emoji: '💧', pt: 'Tá vazando água', en: "There's a water leak", level: 1 },
        { emoji: '🌡️', pt: 'O aquecedor não funciona', en: "The heater doesn't work", level: 1 },
        { emoji: '❄️', pt: 'O ar condicionado quebrou', en: 'The AC is broken', level: 1 },
        { emoji: '🔑', pt: 'Perdi minha chave', en: 'I lost my key', level: 1 },
        { emoji: '🔒', pt: 'Tô trancado do lado de fora', en: "I'm locked out", level: 1 },
        { emoji: '📦', pt: 'Posso receber encomenda na sua casa?', en: 'Can I have a package delivered to your place?', level: 1 },
        { emoji: '🚗', pt: 'Alguém mexeu no meu carro', en: 'Someone messed with my car', level: 1 },
        { emoji: '🚪', pt: 'Tem alguém batendo na porta', en: 'Someone is knocking on the door', level: 1 },
        { emoji: '⏰', pt: 'Que horas pode fazer barulho?', en: 'What time can I make noise?', level: 1 },
        { emoji: '👀', pt: 'Pode vigiar minha casa?', en: 'Can you keep an eye on my place?', level: 1 }
      ]
    },

  { id: 'before-after', title: 'BEFORE / AFTER', emoji: '⏪⏩', description: 'Antes / Depois', module: 4, order: 35,    slides: [
        { type: 'title', emoji: '⏪⏩', title: 'BEFORE / AFTER', subtitle: 'Antes / Depois' },
        { type: 'situation', emoji: '🍽️', cardClass: 'purple', text: 'Você quer dizer que precisa lavar as mãos <strong>ANTES</strong> de comer.<br><br>Como dizer isso?' },
        { type: 'rule', cardClass: 'cyan', text: 'Para indicar <strong>SEQUÊNCIA</strong> de tempo:', keyword: 'BEFORE = antes / AFTER = depois', keywordAfter: 'Antes de... / Depois de...' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>BEFORE</strong> = "bi-FÓR"<br><strong>AFTER</strong> = "ÁF-tér"' },
        { type: 'example', cardClass: 'cyan', emoji: '🧼', question: "Wash your hands <span class='hl-cyan'>before</span> eating.", questionTr: 'Lave as mãos antes de comer.', answer: '(BEFORE = antes de)', answerTr: 'Sequência' },
        { type: 'example', cardClass: 'green', emoji: '🍽️', question: "I'll call you <span class='hl-green'>after</span> dinner.", questionTr: 'Vou te ligar depois do jantar.', answer: '(AFTER = depois de)', answerTr: 'Sequência' },
        { type: 'example', cardClass: 'cyan', emoji: '⏰', question: "<span class='hl-cyan'>Before</span> 5 PM, please.", questionTr: 'Antes das 5 da tarde, por favor.', answer: '(horário)', answerTr: 'Prazo' },
        { type: 'examples', cardClass: 'cyan', title: '⏪ BEFORE (antes)', items: [
          { emoji: '💼', en: '<span class="hl-cyan">Before</span> work', pt: 'Antes do trabalho' },
          { emoji: '🛏️', en: '<span class="hl-cyan">Before</span> bed', pt: 'Antes de dormir' },
          { emoji: '📅', en: '<span class="hl-cyan">Before</span> Friday', pt: 'Antes de sexta' },
          { emoji: '🚪', en: '<span class="hl-cyan">Before</span> you leave', pt: 'Antes de você sair' }
        ]},
        { type: 'examples', cardClass: 'green', title: '⏩ AFTER (depois)', items: [
          { emoji: '💼', en: '<span class="hl-green">After</span> work', pt: 'Depois do trabalho' },
          { emoji: '🍳', en: '<span class="hl-green">After</span> breakfast', pt: 'Depois do café' },
          { emoji: '📅', en: '<span class="hl-green">After</span> Monday', pt: 'Depois de segunda' },
          { emoji: '🏠', en: '<span class="hl-green">After</span> I get home', pt: 'Depois que eu chegar' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'BEFORE/AFTER + ING', text: 'Com verbos, use -ING:<br><br>• <strong>Before</strong> eat<strong>ing</strong> (antes de comer)<br>• <strong>After</strong> finish<strong>ing</strong> (depois de terminar)' },
        { type: 'comparison', cardClass: 'cyan', title: '⏪ BEFORE vs ⏩ AFTER', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⏪', rightIcon: '⏩', leftLabel: 'BEFORE (antes)', rightLabel: 'AFTER (depois)', left: '<span class="hl-cyan">Before</span> lunch', leftNote: 'Antes do almoço', right: '<span class="hl-green">After</span> lunch', rightNote: 'Depois do almoço', explanation: 'Linha do tempo: BEFORE ← agora → AFTER' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Before to eat', leftNote: 'TO não funciona aqui', right: 'Before eating', rightNote: 'Use -ING', explanation: 'BEFORE/AFTER + verbo-ING (não TO!)' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Antes do trabalho" em inglês:', options: ['Before the work', 'Before work', 'Before to work'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Depois de comer" em inglês:', options: ['After eat', 'After to eat', 'After eating'], correct: 2 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "Call me _____ you arrive.", correctWord: 'before' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - BEFORE / AFTER', items: [
          { emoji: '⏪', text: '<strong>BEFORE</strong> = antes (de)' },
          { emoji: '⏩', text: '<strong>AFTER</strong> = depois (de)' },
          { emoji: '📝', text: 'Com verbo: use -ING (before eating)' },
          { emoji: '⏰', text: 'Funcionam com horários, dias, eventos' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💼', pt: 'Antes do trabalho', en: 'Before work' },
        { emoji: '🛏️', pt: 'Antes de dormir', en: 'Before bed' },
        { emoji: '🍳', pt: 'Depois do café', en: 'After breakfast' },
        { emoji: '🍽️', pt: 'Depois do jantar', en: 'After dinner' },
        { emoji: '🧼', pt: 'Antes de comer', en: 'Before eating' },
        { emoji: '✅', pt: 'Depois de terminar', en: 'After finishing' },
        { emoji: '📅', pt: 'Antes de sexta', en: 'Before Friday' },
        { emoji: '🚪', pt: 'Antes de sair', en: 'Before leaving' },
        { emoji: '🏠', pt: 'Depois de chegar', en: 'After arriving' },
        { emoji: '⏰', pt: 'Antes das 5', en: 'Before 5 PM' },
      ]
    },

  { id: 'until', title: 'UNTIL', emoji: '⏳➡️', description: 'Até (tempo)', module: 4, order: 36,    slides: [
        { type: 'title', emoji: '⏳➡️', title: 'UNTIL', subtitle: 'Até (limite de tempo)' },
        { type: 'situation', emoji: '💼', cardClass: 'purple', text: 'Você trabalha <strong>ATÉ</strong> às 5 da tarde.<br><br>Como dizer isso?' },
        { type: 'rule', cardClass: 'cyan', text: 'Use <strong>UNTIL</strong> para indicar o <strong>LIMITE</strong> de tempo:', keyword: 'UNTIL = até', keywordAfter: 'Até que... / Até (horário)' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>UNTIL</strong> = "ãn-TÍL"<br><br>⚡ Forma curta: <strong>TILL</strong> (igual!)' },
        { type: 'example', cardClass: 'cyan', emoji: '💼', question: "I work <span class='hl-cyan'>until</span> 5 PM.", questionTr: 'Eu trabalho até às 5.', answer: '(limite de tempo)', answerTr: 'Ponto final' },
        { type: 'example', cardClass: 'cyan', emoji: '⏳', question: "Wait <span class='hl-cyan'>until</span> I come back.", questionTr: 'Espera até eu voltar.', answer: '(até que)', answerTr: 'Condição' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: "The sale is <span class='hl-cyan'>until</span> Friday.", questionTr: 'A promoção é até sexta.', answer: '(prazo)', answerTr: 'Data limite' },
        { type: 'examples', cardClass: 'cyan', title: '⏳ USOS DE UNTIL', items: [
          { emoji: '🌙', en: "I slept <span class='hl-cyan'>until</span> noon.", pt: 'Dormi até meio-dia.' },
          { emoji: '☔', en: "Wait <span class='hl-cyan'>until</span> the rain stops.", pt: 'Espera até a chuva parar.' },
          { emoji: '🏠', en: "Stay here <span class='hl-cyan'>until</span> I call you.", pt: 'Fica aqui até eu te ligar.' },
          { emoji: '📆', en: "Valid <span class='hl-cyan'>until</span> December.", pt: 'Válido até dezembro.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'UNTIL vs TILL', text: '<strong>UNTIL</strong> = <strong>TILL</strong><br><br>São iguais! TILL é mais informal:<br>• Wait until tomorrow = Wait till tomorrow<br>• I work until 5 = I work till 5' },
        { type: 'comparison', cardClass: 'cyan', title: '⏳ UNTIL vs BY', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '➡️', rightIcon: '🎯', leftLabel: 'UNTIL (duração)', rightLabel: 'BY (prazo)', left: "Work <span class='hl-cyan'>until</span> 5 PM", leftNote: 'Trabalha ATÉ 5 (para às 5)', right: "Finish <span class='hl-green'>by</span> 5 PM", rightNote: 'Termina ANTES das 5', explanation: 'UNTIL = durante todo período | BY = deadline' },
        { type: 'examples', cardClass: 'gold', title: '⚡ EXPRESSÕES COMUNS', items: [
          { emoji: '👋', en: '<span class="hl-gold">Until</span> later!', pt: 'Até mais!' },
          { emoji: '📅', en: '<span class="hl-gold">Until</span> next time!', pt: 'Até a próxima!' },
          { emoji: '🌅', en: '<span class="hl-gold">Until</span> tomorrow!', pt: 'Até amanhã!' },
          { emoji: '⏰', en: "Not <span class='hl-gold'>until</span> Monday.", pt: 'Só segunda. (não antes)' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I work until to 5.', leftNote: 'TO não é necessário', right: 'I work until 5.', rightNote: 'UNTIL + horário direto', explanation: 'UNTIL + horário/dia (sem TO!)' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Até amanhã" em inglês:', options: ['Until tomorrow', 'To tomorrow', 'For tomorrow'], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Espera até eu voltar" em inglês:', options: ['Wait until I come back', 'Wait to I come back', 'Wait for I come back'], correct: 0 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "The store is open _____ 9 PM.", correctWord: 'until' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - UNTIL', items: [
          { emoji: '⏳', text: '<strong>UNTIL</strong> = até (limite de tempo)' },
          { emoji: '✅', text: 'UNTIL = TILL (iguais)' },
          { emoji: '⏰', text: 'UNTIL + horário/dia/evento' },
          { emoji: '👋', text: 'Expressões: Until later! Until tomorrow!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💼', pt: 'Trabalho até às 5', en: 'I work until 5' },
        { emoji: '⏳', pt: 'Espera até eu voltar', en: 'Wait until I come back' },
        { emoji: '📅', pt: 'Até sexta', en: 'Until Friday' },
        { emoji: '🌙', pt: 'Dormi até meio-dia', en: 'I slept until noon' },
        { emoji: '📆', pt: 'Válido até dezembro', en: 'Valid until December' },
        { emoji: '👋', pt: 'Até mais!', en: 'Until later!' },
        { emoji: '🌅', pt: 'Até amanhã!', en: 'Until tomorrow!' },
        { emoji: '📅', pt: 'Até a próxima!', en: 'Until next time!' },
        { emoji: '🏪', pt: 'Aberto até 9h', en: 'Open until 9 PM' },
        { emoji: '⏰', pt: 'Só segunda (não antes)', en: 'Not until Monday' },
      ]
    }
] as Lesson[];
