import type { Lesson } from '@unlock2026/shared';

export const module5Lessons = [
  { id: 'past-simple-intro', title: 'PAST SIMPLE (Intro)', emoji: '⏪📚', description: 'Passado simples - introdução', module: 5, order: 1,
      slides: [
        { type: 'title', emoji: '⏪📚', title: 'PAST SIMPLE', subtitle: 'Falar sobre o passado' },
        { type: 'situation', emoji: '🍽️', cardClass: 'purple', text: 'Você quer contar o que fez ontem:<br>"Eu <strong>COMI</strong> pizza."<br><br>Como falar sobre o <strong>PASSADO</strong>?' },
        { type: 'rule', cardClass: 'purple', text: 'No passado, os verbos <strong>MUDAM DE FORMA</strong>:', keyword: 'PAST SIMPLE', keywordAfter: 'Ontem / Semana passada / Ano passado' },
        { type: 'tip', cardClass: 'orange', icon: '🗓️', title: 'QUANDO USAR?', text: 'Ações <strong>COMPLETAS</strong> no passado:<br><br>• Yesterday (ontem)<br>• Last week/month/year<br>• In 2020<br>• When I was young' },
        { type: 'example', cardClass: 'purple', emoji: '🍽️', question: 'I <span class="hl-purple">ate</span> pizza.', questionTr: 'Eu comi pizza.', answer: '(eat → ate)', answerTr: 'Verbo mudou!' },
        { type: 'example', cardClass: 'purple', emoji: '🏠', question: 'I <span class="hl-purple">went</span> home.', questionTr: 'Eu fui pra casa.', answer: '(go → went)', answerTr: 'Verbo mudou!' },
        { type: 'example', cardClass: 'purple', emoji: '👀', question: 'I <span class="hl-purple">saw</span> him.', questionTr: 'Eu vi ele.', answer: '(see → saw)', answerTr: 'Verbo mudou!' },
        { type: 'list', cardClass: 'gold', title: '📊 DOIS TIPOS DE VERBOS', items: [
          { emoji: '✅', text: '<strong>REGULARES:</strong> Adiciona -ED (work → worked)' },
          { emoji: '❌', text: '<strong>IRREGULARES:</strong> Mudam totalmente (go → went)' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '🔄 VERBOS IRREGULARES COMUNS', items: [
          { emoji: '🗣️', en: 'say → <span class="hl-purple">said</span>', pt: 'dizer → disse' },
          { emoji: '🧠', en: 'think → <span class="hl-purple">thought</span>', pt: 'pensar → pensei' },
          { emoji: '📖', en: 'read → <span class="hl-purple">read</span>', pt: 'ler → li (mesma forma!)' },
          { emoji: '💤', en: 'sleep → <span class="hl-purple">slept</span>', pt: 'dormir → dormi' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'BOA NOTÍCIA!', text: 'No passado, o verbo é <strong>IGUAL</strong> para todas as pessoas!<br><br>I went / You went / He went / She went / We went / They went' },
        { type: 'comparison', cardClass: 'cyan', title: '⏰ PRESENTE vs PASSADO ⏪', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '⏰', rightIcon: '⏪', leftLabel: 'PRESENTE', rightLabel: 'PASSADO', left: 'I <span class="hl-cyan">go</span> home.', leftNote: 'Vou (agora/sempre)', right: 'I <span class="hl-purple">went</span> home.', rightNote: 'Fui (ontem/antes)', explanation: 'Presente = hábito | Passado = ação completa' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I goed home.', leftNote: 'GO é irregular!', right: 'I went home.', rightNote: 'Forma correta', explanation: 'Verbos irregulares NÃO usam -ED!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Go" no passado:', options: ['goed', 'went', 'gone'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu comi" em inglês:', options: ['I eated', 'I ate', 'I eaten'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (ver no passado):', sentence: 'I _____ the movie yesterday.', correctWord: 'saw' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PAST SIMPLE', items: [
          { emoji: '⏪', text: 'Para ações <strong>COMPLETAS</strong> no passado' },
          { emoji: '✅', text: 'Regulares: verbo + ED' },
          { emoji: '❌', text: 'Irregulares: forma especial (go→went)' },
          { emoji: '👥', text: 'Igual para todas as pessoas' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🍽️', pt: 'Eu comi', en: 'I ate' }, { emoji: '🏠', pt: 'Eu fui', en: 'I went' },
        { emoji: '👀', pt: 'Eu vi', en: 'I saw' }, { emoji: '🗣️', pt: 'Eu falei', en: 'I said' },
        { emoji: '🧠', pt: 'Eu pensei', en: 'I thought' }, { emoji: '📝', pt: 'Eu fiz', en: 'I did' },
        { emoji: '📖', pt: 'Eu li', en: 'I read' }, { emoji: '✍️', pt: 'Eu escrevi', en: 'I wrote' },
        { emoji: '💤', pt: 'Eu dormi', en: 'I slept' }, { emoji: '🚗', pt: 'Eu dirigi', en: 'I drove' },
      ]
    },

  { id: 'regular-verbs-ed', title: 'Regular Verbs (-ED)', emoji: '✅➕', description: 'Verbos regulares', module: 5, order: 2,
      slides: [
        { type: 'title', emoji: '✅➕', title: 'REGULAR VERBS', subtitle: 'Verbos com -ED' },
        { type: 'situation', emoji: '💼', cardClass: 'purple', text: 'Você quer dizer que trabalhou ontem:<br>"Eu <strong>TRABALHEI</strong> ontem."<br><br>É só adicionar <strong>-ED</strong>!' },
        { type: 'rule', cardClass: 'green', text: 'A maioria dos verbos é <strong>REGULAR</strong>:', keyword: 'VERBO + ED', keywordAfter: 'work → worked | call → called' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA DO -ED', text: 'Três sons diferentes:<br><br>• <strong>/t/</strong> após p, k, s, f: work<strong>ed</strong> (uórkt)<br>• <strong>/d/</strong> após vogais: play<strong>ed</strong> (pléid)<br>• <strong>/id/</strong> após t, d: want<strong>ed</strong> (uón-tid)' },
        { type: 'example', cardClass: 'green', emoji: '💼', question: 'I work<span class="hl-green">ed</span> yesterday.', questionTr: 'Eu trabalhei ontem.', answer: '(work + ed)', answerTr: 'Regular' },
        { type: 'example', cardClass: 'green', emoji: '📞', question: 'She call<span class="hl-green">ed</span> me.', questionTr: 'Ela me ligou.', answer: '(call + ed)', answerTr: 'Regular' },
        { type: 'example', cardClass: 'green', emoji: '🎮', question: 'We play<span class="hl-green">ed</span> games.', questionTr: 'Nós jogamos.', answer: '(play + ed)', answerTr: 'Regular' },
        { type: 'examples', cardClass: 'green', title: '✅ VERBOS REGULARES COMUNS', items: [
          { emoji: '👀', en: 'watch → watch<span class="hl-green">ed</span>', pt: 'assistir → assisti' },
          { emoji: '🧹', en: 'clean → clean<span class="hl-green">ed</span>', pt: 'limpar → limpei' },
          { emoji: '🧑‍🍳', en: 'cook → cook<span class="hl-green">ed</span>', pt: 'cozinhar → cozinhei' },
          { emoji: '🚶', en: 'walk → walk<span class="hl-green">ed</span>', pt: 'andar → andei' }
        ]},
        { type: 'tip', cardClass: 'gold', icon: '📝', title: 'REGRAS DE ORTOGRAFIA', text: '1️⃣ Termina em E: só + D<br>• like → lik<strong>ed</strong><br><br>2️⃣ Termina em consoante + Y: troca Y por IED<br>• study → stud<strong>ied</strong><br><br>3️⃣ Termina em CVC: dobra a última<br>• stop → sto<strong>pped</strong>' },
        { type: 'examples', cardClass: 'purple', title: '📝 CASOS ESPECIAIS', items: [
          { emoji: '❤️', en: 'like → lik<span class="hl-purple">ed</span>', pt: 'Termina em E' },
          { emoji: '📚', en: 'study → stud<span class="hl-purple">ied</span>', pt: 'Y vira IED' },
          { emoji: '🛑', en: 'stop → sto<span class="hl-purple">pped</span>', pt: 'Dobra a consoante' },
          { emoji: '✅', en: 'finish → finish<span class="hl-purple">ed</span>', pt: 'Normal' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I studyed yesterday.', leftNote: 'Y não fica assim', right: 'I studied yesterday.', rightNote: 'Y → IED', explanation: 'Consoante + Y = troca por IED' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Play" no passado:', options: ['plaied', 'played', 'plaid'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Study" no passado:', options: ['studyed', 'studied', 'studyied'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (assistir no passado):', sentence: 'I _____ TV last night.', correctWord: 'watched' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - VERBOS REGULARES', items: [
          { emoji: '✅', text: 'Maioria: verbo + <strong>ED</strong>' },
          { emoji: '📝', text: 'Termina em E: só + D (liked)' },
          { emoji: '🔄', text: 'Consoante + Y: vira IED (studied)' },
          { emoji: '🗣️', text: 'Pronúncia: /t/, /d/, ou /id/' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '💼', pt: 'Eu trabalhei', en: 'I worked' }, { emoji: '📞', pt: 'Ela ligou', en: 'She called' },
        { emoji: '🎮', pt: 'Eu joguei', en: 'I played' }, { emoji: '👀', pt: 'Eu assisti', en: 'I watched' },
        { emoji: '🧹', pt: 'Eu limpei', en: 'I cleaned' }, { emoji: '🧑‍🍳', pt: 'Eu cozinhei', en: 'I cooked' },
        { emoji: '🚶', pt: 'Eu andei', en: 'I walked' }, { emoji: '🗣️', pt: 'Eu conversei', en: 'I talked' },
        { emoji: '⏳', pt: 'Eu esperei', en: 'I waited' }, { emoji: '✅', pt: 'Eu terminei', en: 'I finished' },
      ]
    },

  { id: 'irregular-verbs-1', title: 'Irregular Verbs 1', emoji: '❌🔄', description: 'go, do, see', module: 5, order: 3,
      slides: [
        { type: 'title', emoji: '❌🔄', title: 'IRREGULAR VERBS 1', subtitle: 'go, do, see' },
        { type: 'situation', emoji: '🏠', cardClass: 'purple', text: 'Você quer dizer que foi pra casa:<br>"Eu <strong>FUI</strong> pra casa."<br><br>Mas GO não vira "goed"...' },
        { type: 'rule', cardClass: 'purple', text: 'Alguns verbos são <strong>IRREGULARES</strong> - não usam -ED:', keyword: 'IRREGULARES', keywordAfter: 'Precisam ser memorizados!' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'OS 3 MAIS IMPORTANTES', text: '<strong>GO → WENT</strong> (ir → fui)<br><strong>DO → DID</strong> (fazer → fiz)<br><strong>SEE → SAW</strong> (ver → vi)<br><br>São os mais usados do inglês!' },
        { type: 'example', cardClass: 'purple', emoji: '🏠', question: 'I <span class="hl-purple">went</span> home.', questionTr: 'Eu fui pra casa.', answer: '(go → went)', answerTr: 'Irregular!' },
        { type: 'example', cardClass: 'purple', emoji: '📝', question: 'I <span class="hl-purple">did</span> my homework.', questionTr: 'Eu fiz meu dever.', answer: '(do → did)', answerTr: 'Irregular!' },
        { type: 'example', cardClass: 'purple', emoji: '👀', question: 'I <span class="hl-purple">saw</span> him yesterday.', questionTr: 'Eu vi ele ontem.', answer: '(see → saw)', answerTr: 'Irregular!' },
        { type: 'examples', cardClass: 'purple', title: '🚶 GO → WENT', items: [
          { emoji: '🏠', en: 'I <span class="hl-purple">went</span> home.', pt: 'Eu fui pra casa.' },
          { emoji: '💼', en: 'I <span class="hl-purple">went</span> to work.', pt: 'Eu fui pro trabalho.' },
          { emoji: '🏪', en: 'She <span class="hl-purple">went</span> to the store.', pt: 'Ela foi à loja.' },
          { emoji: '🏫', en: 'We <span class="hl-purple">went</span> to school.', pt: 'Nós fomos à escola.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📝 DO → DID', items: [
          { emoji: '✅', en: 'I <span class="hl-cyan">did</span> it.', pt: 'Eu fiz isso.' },
          { emoji: '📝', en: 'I <span class="hl-cyan">did</span> my homework.', pt: 'Eu fiz meu dever.' },
          { emoji: '💪', en: 'He <span class="hl-cyan">did</span> his best.', pt: 'Ele fez o melhor.' },
          { emoji: '🧹', en: 'She <span class="hl-cyan">did</span> the dishes.', pt: 'Ela lavou a louça.' }
        ]},
        { type: 'examples', cardClass: 'green', title: '👀 SEE → SAW', items: [
          { emoji: '👤', en: 'I <span class="hl-green">saw</span> him.', pt: 'Eu vi ele.' },
          { emoji: '🎬', en: 'I <span class="hl-green">saw</span> the movie.', pt: 'Eu vi o filme.' },
          { emoji: '📰', en: 'I <span class="hl-green">saw</span> the news.', pt: 'Eu vi as notícias.' },
          { emoji: '❓', en: 'Did you <span class="hl-green">see</span> that?', pt: 'Você viu isso?' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I goed to work.', leftNote: 'GO é irregular!', right: 'I went to work.', rightNote: 'GO → WENT', explanation: 'Irregulares NÃO usam -ED!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "See" no passado:', options: ['seed', 'seen', 'saw'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu fui pra casa":', options: ['I goed home', 'I went home', 'I gone home'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (fazer no passado):', sentence: 'I _____ my homework yesterday.', correctWord: 'did' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - IRREGULARES 1', items: [
          { emoji: '🚶', text: '<strong>GO → WENT</strong> (ir → fui)' },
          { emoji: '📝', text: '<strong>DO → DID</strong> (fazer → fiz)' },
          { emoji: '👀', text: '<strong>SEE → SAW</strong> (ver → vi)' },
          { emoji: '⚠️', text: 'NÃO usam -ED!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏠', pt: 'Eu fui pra casa', en: 'I went home' }, { emoji: '💼', pt: 'Eu fui pro trabalho', en: 'I went to work' },
        { emoji: '📝', pt: 'Eu fiz isso', en: 'I did this' }, { emoji: '✅', pt: 'Eu fiz tudo', en: 'I did everything' },
        { emoji: '👀', pt: 'Eu vi ele', en: 'I saw him' }, { emoji: '🎬', pt: 'Eu vi o filme', en: 'I saw the movie' },
        { emoji: '❓', pt: 'Onde você foi?', en: 'Where did you go?' }, { emoji: '❓', pt: 'O que você fez?', en: 'What did you do?' },
        { emoji: '❓', pt: 'Você viu isso?', en: 'Did you see this?' }, { emoji: '📍', pt: 'Ele foi lá', en: 'He went there' },
      ]
    },

  { id: 'irregular-verbs-2', title: 'Irregular Verbs 2', emoji: '❌🔄', description: 'eat, have, make', module: 5, order: 4,
      slides: [
        { type: 'title', emoji: '❌🔄', title: 'IRREGULAR VERBS 2', subtitle: 'eat, have, make' },
        { type: 'situation', emoji: '🍕', cardClass: 'purple', text: 'Você quer dizer o que comeu:<br>"Eu <strong>COMI</strong> pizza ontem."<br><br>EAT não vira "eated"...' },
        { type: 'rule', cardClass: 'purple', text: 'Mais 3 verbos <strong>ESSENCIAIS</strong> do dia a dia:', keyword: 'IRREGULARES', keywordAfter: 'EAT, HAVE, MAKE' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'MEMORIZE ESTES', text: '<strong>EAT → ATE</strong> (comer → comi)<br><strong>HAVE → HAD</strong> (ter → tive)<br><strong>MAKE → MADE</strong> (fazer → fiz)' },
        { type: 'example', cardClass: 'purple', emoji: '🍕', question: 'I <span class="hl-purple">ate</span> pizza.', questionTr: 'Eu comi pizza.', answer: '(eat → ate)', answerTr: 'Pronuncia "êit"' },
        { type: 'example', cardClass: 'purple', emoji: '📦', question: 'I <span class="hl-purple">had</span> a problem.', questionTr: 'Eu tive um problema.', answer: '(have → had)', answerTr: 'Pronuncia "réd"' },
        { type: 'example', cardClass: 'purple', emoji: '☕', question: 'I <span class="hl-purple">made</span> coffee.', questionTr: 'Eu fiz café.', answer: '(make → made)', answerTr: 'Pronuncia "mêid"' },
        { type: 'examples', cardClass: 'purple', title: '🍽️ EAT → ATE', items: [
          { emoji: '🍕', en: 'I <span class="hl-purple">ate</span> pizza.', pt: 'Eu comi pizza.' },
          { emoji: '🍳', en: 'I <span class="hl-purple">ate</span> breakfast.', pt: 'Eu tomei café da manhã.' },
          { emoji: '🥗', en: 'She <span class="hl-purple">ate</span> lunch.', pt: 'Ela almoçou.' },
          { emoji: '🍝', en: 'We <span class="hl-purple">ate</span> dinner.', pt: 'Nós jantamos.' }
        ]},
        { type: 'examples', cardClass: 'cyan', title: '📦 HAVE → HAD', items: [
          { emoji: '💭', en: 'I <span class="hl-cyan">had</span> an idea.', pt: 'Eu tive uma ideia.' },
          { emoji: '🎉', en: 'We <span class="hl-cyan">had</span> fun.', pt: 'Nós nos divertimos.' },
          { emoji: '😷', en: 'He <span class="hl-cyan">had</span> a cold.', pt: 'Ele estava gripado.' },
          { emoji: '⏰', en: 'I <span class="hl-cyan">had</span> time.', pt: 'Eu tinha tempo.' }
        ]},
        { type: 'examples', cardClass: 'green', title: '🛠️ MAKE → MADE', items: [
          { emoji: '☕', en: 'I <span class="hl-green">made</span> coffee.', pt: 'Eu fiz café.' },
          { emoji: '🍳', en: 'She <span class="hl-green">made</span> breakfast.', pt: 'Ela fez o café da manhã.' },
          { emoji: '😊', en: 'It <span class="hl-green">made</span> me happy.', pt: 'Isso me deixou feliz.' },
          { emoji: '💰', en: 'He <span class="hl-green">made</span> money.', pt: 'Ele ganhou dinheiro.' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>ATE</strong> soa como "êit" (rima com "eight")<br><strong>HAD</strong> soa como "réd"<br><strong>MADE</strong> soa como "mêid"' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I eated pizza.', leftNote: 'EAT é irregular!', right: 'I ate pizza.', rightNote: 'EAT → ATE', explanation: 'Irregulares NÃO usam -ED!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Have" no passado:', options: ['haved', 'has', 'had'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu comi pizza":', options: ['I eated pizza', 'I ate pizza', 'I eaten pizza'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (fazer no passado):', sentence: 'She _____ coffee this morning.', correctWord: 'made' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - IRREGULARES 2', items: [
          { emoji: '🍽️', text: '<strong>EAT → ATE</strong> (comer → comi)' },
          { emoji: '📦', text: '<strong>HAVE → HAD</strong> (ter → tive)' },
          { emoji: '🛠️', text: '<strong>MAKE → MADE</strong> (fazer → fiz)' },
          { emoji: '⚠️', text: 'NÃO usam -ED!' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🍕', pt: 'Eu comi pizza', en: 'I ate pizza' }, { emoji: '🍳', pt: 'Eu tomei café da manhã', en: 'I ate breakfast' },
        { emoji: '📦', pt: 'Eu tive um problema', en: 'I had a problem' }, { emoji: '🎉', pt: 'Eu me diverti', en: 'I had fun' },
        { emoji: '🛠️', pt: 'Eu fiz isso', en: 'I made this' }, { emoji: '☕', pt: 'Eu fiz café', en: 'I made coffee' },
        { emoji: '❓', pt: 'O que você comeu?', en: 'What did you eat?' }, { emoji: '❓', pt: 'Você tinha isso?', en: 'Did you have this?' },
        { emoji: '❓', pt: 'Quem fez isso?', en: 'Who made this?' }, { emoji: '🤒', pt: 'Ele teve febre', en: 'He had a fever' },
      ]
    },

  { id: 'did', title: 'DID', emoji: '⏪📝', description: 'Passado (auxiliar)', module: 5, order: 5,    slides: [
        { type: 'title', emoji: '⏪📝', title: 'DID', subtitle: 'Auxiliar do passado' },
        { type: 'situation', emoji: '🍕', cardClass: 'purple', text: 'Você quer perguntar sobre <strong>ONTEM</strong>:<br>"Você <strong>COMEU</strong>?"<br><br>Como fazer perguntas no passado?' },
        { type: 'rule', cardClass: 'cyan', text: '<strong>DID</strong> = auxiliar para <strong>PASSADO</strong>:', keyword: 'DID', keywordAfter: 'Perguntas e negações no passado' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>DID</strong> soa como "DID"<br><strong>DIDN\'T</strong> soa como "DÍDNT"' },
        { type: 'example', cardClass: 'cyan', emoji: '🏠', question: '<span class="hl-cyan">Did</span> you go home?', questionTr: 'Você foi pra casa?', answer: 'Yes, I did.', answerTr: 'Resposta curta' },
        { type: 'example', cardClass: 'cyan', emoji: '🍕', question: '<span class="hl-cyan">Did</span> you eat?', questionTr: 'Você comeu?', answer: 'Yes, I did.', answerTr: 'Note: EAT, não ATE' },
        { type: 'example', cardClass: 'red', emoji: '👀', question: "I <span class='hl-red'>didn't</span> see him.", questionTr: 'Eu não vi ele.', answer: '(SEE, não SAW)', answerTr: 'Verbo na forma base!' },
        { type: 'tip', cardClass: 'gold', icon: '⚠️', title: 'REGRA DE OURO', text: 'Com DID, o verbo fica na <strong>FORMA BASE</strong>!<br><br>❌ Did you <strong>went</strong>?<br>✅ Did you <strong>go</strong>?<br><br>DID já indica passado!' },
        { type: 'examples', cardClass: 'cyan', title: '❓ PERGUNTAS NO PASSADO', items: [
          { emoji: '💤', en: '<span class="hl-cyan">Did</span> you sleep well?', pt: 'Você dormiu bem?' },
          { emoji: '📞', en: '<span class="hl-cyan">Did</span> she call?', pt: 'Ela ligou?' },
          { emoji: '🤔', en: '<span class="hl-cyan">Did</span> you understand?', pt: 'Você entendeu?' },
          { emoji: '🗣️', en: 'What <span class="hl-cyan">did</span> you say?', pt: 'O que você disse?' }
        ]},
        { type: 'examples', cardClass: 'red', title: "❌ NEGAÇÕES NO PASSADO", items: [
          { emoji: '❌', en: "I <span class='hl-red'>didn't</span> do that.", pt: 'Eu não fiz isso.' },
          { emoji: '🤷', en: "I <span class='hl-red'>didn't</span> know.", pt: 'Eu não sabia.' },
          { emoji: '👀', en: "I <span class='hl-red'>didn't</span> see it.", pt: 'Eu não vi.' },
          { emoji: '🏠', en: "He <span class='hl-red'>didn't</span> go.", pt: 'Ele não foi.' }
        ]},
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Did you went?', leftNote: 'Verbo no passado', right: 'Did you go?', rightNote: 'Verbo na forma base', explanation: 'Com DID, verbo fica na forma base!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Você comeu?" em inglês:', options: ['Do you eat?', 'Did you ate?', 'Did you eat?'], correct: 2 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu não fui" em inglês:', options: ["I didn't went", "I didn't go", "I not went"], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (você viu?):', sentence: '_____ you see that?', correctWord: 'Did' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - DID', items: [
          { emoji: '⏪', text: '<strong>DID</strong> = passado (perguntas/negações)' },
          { emoji: '❓', text: 'Pergunta: Did you go...?' },
          { emoji: '❌', text: "Negação: I didn't go..." },
          { emoji: '⚠️', text: 'Verbo na forma BASE: Did you go (não went)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏠', pt: 'Você foi pra casa?', en: 'Did you go home?' },
        { emoji: '👀', pt: 'Eu não vi ele', en: "I didn't see him" },
        { emoji: '🍕', pt: 'Você comeu?', en: 'Did you eat?' },
        { emoji: '💤', pt: 'Você dormiu bem?', en: 'Did you sleep well?' },
        { emoji: '📞', pt: 'Ela ligou?', en: 'Did she call?' },
        { emoji: '🤔', pt: 'Você entendeu?', en: 'Did you understand?' },
        { emoji: '💼', pt: 'Você trabalhou ontem?', en: 'Did you work yesterday?' },
        { emoji: '🗣️', pt: 'O que você disse?', en: 'What did you say?' },
        { emoji: '❌', pt: 'Eu não fiz isso', en: "I didn't do that" },
        { emoji: '🤷', pt: 'Eu não sabia', en: "I didn't know" },
      ]
    },

  { id: 'did-questions', title: 'DID (Questions)', emoji: '❓⏪', description: 'Perguntas no passado', module: 5, order: 6,    slides: [
        { type: 'title', emoji: '❓⏪', title: 'DID (Questions)', subtitle: 'Perguntas no passado' },
        { type: 'situation', emoji: '🍕', cardClass: 'purple', text: 'Você quer perguntar se alguém comeu:<br>"Você <strong>COMEU</strong>?"<br><br>No passado, usamos <strong>DID</strong>!' },
        { type: 'rule', cardClass: 'cyan', text: 'Para perguntar no passado, use <strong>DID</strong>:', keyword: 'DID + sujeito + verbo BASE', keywordAfter: 'Did you go? Did she eat?' },
        { type: 'tip', cardClass: 'gold', icon: '⚠️', title: 'REGRA DE OURO', text: 'Com DID, o verbo volta pra forma <strong>BASE</strong>!<br><br>❌ Did you <strong>went</strong>?<br>✅ Did you <strong>go</strong>?<br><br>O DID já indica passado!' },
        { type: 'example', cardClass: 'cyan', emoji: '🏠', question: '<span class="hl-cyan">Did</span> you go home?', questionTr: 'Você foi pra casa?', answer: 'Yes, I did.', answerTr: 'Resposta curta' },
        { type: 'example', cardClass: 'cyan', emoji: '🍽️', question: '<span class="hl-cyan">Did</span> she eat?', questionTr: 'Ela comeu?', answer: 'No, she didn\'t.', answerTr: 'Resposta curta' },
        { type: 'example', cardClass: 'cyan', emoji: '👀', question: '<span class="hl-cyan">Did</span> you see that?', questionTr: 'Você viu isso?', answer: 'Yes, I did!', answerTr: 'Note: SEE, não SAW' },
        { type: 'examples', cardClass: 'cyan', title: '❓ PERGUNTAS COMUNS', items: [
          { emoji: '💤', en: '<span class="hl-cyan">Did</span> you sleep well?', pt: 'Você dormiu bem?' },
          { emoji: '📞', en: '<span class="hl-cyan">Did</span> he call?', pt: 'Ele ligou?' },
          { emoji: '🤔', en: '<span class="hl-cyan">Did</span> you understand?', pt: 'Você entendeu?' },
          { emoji: '💼', en: '<span class="hl-cyan">Did</span> you work yesterday?', pt: 'Você trabalhou ontem?' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '❓ PERGUNTAS COM WH-', items: [
          { emoji: '❓', en: '<span class="hl-purple">What did</span> you do?', pt: 'O que você fez?' },
          { emoji: '📍', en: '<span class="hl-purple">Where did</span> you go?', pt: 'Onde você foi?' },
          { emoji: '⏰', en: '<span class="hl-purple">When did</span> you arrive?', pt: 'Quando você chegou?' },
          { emoji: '🤷', en: '<span class="hl-purple">Why did</span> you do that?', pt: 'Por que você fez isso?' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'RESPOSTAS CURTAS', text: '<strong>Yes, I did.</strong> = Sim.<br><strong>No, I didn\'t.</strong> = Não.<br><br>Mais natural que "Yes, I went."' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'Did you saw?', leftNote: 'Verbo no passado com DID', right: 'Did you see?', rightNote: 'Verbo na forma base', explanation: 'Com DID, verbo fica na <strong>FORMA BASE</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Você viu?":', options: ['Did you saw?', 'Did you see?', 'Do you saw?'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "O que você fez?":', options: ['What you did?', 'What did you do?', 'What did you did?'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete a pergunta:', sentence: '_____ you sleep well last night?', correctWord: 'Did' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - DID (Perguntas)', items: [
          { emoji: '❓', text: 'Estrutura: DID + sujeito + verbo BASE' },
          { emoji: '⚠️', text: 'Verbo na forma base (não no passado!)' },
          { emoji: '✅', text: 'Respostas: Yes, I did / No, I didn\'t' },
          { emoji: '📝', text: 'WH + DID: What did you do?' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏠', pt: 'Você foi pra casa?', en: 'Did you go home?' }, { emoji: '🍽️', pt: 'Ela comeu?', en: 'Did she eat?' },
        { emoji: '👀', pt: 'Você viu?', en: 'Did you see?' }, { emoji: '📞', pt: 'Ele ligou?', en: 'Did he call?' },
        { emoji: '💼', pt: 'Você trabalhou?', en: 'Did you work?' }, { emoji: '💤', pt: 'Você dormiu bem?', en: 'Did you sleep well?' },
        { emoji: '❓', pt: 'O que aconteceu?', en: 'What happened?' }, { emoji: '❓', pt: 'Quando você chegou?', en: 'When did you arrive?' },
        { emoji: '❓', pt: 'Como foi?', en: 'How did it go?' }, { emoji: '❓', pt: 'Por que você fez isso?', en: 'Why did you do that?' },
      ]
    },

  { id: 'past-time-words', title: 'Past + Time Words', emoji: '📅⏪', description: 'yesterday, last...', module: 5, order: 7,
      slides: [
        { type: 'title', emoji: '📅⏪', title: 'TIME WORDS', subtitle: 'Palavras de tempo no passado' },
        { type: 'situation', emoji: '📅', cardClass: 'purple', text: 'Você quer dizer <strong>QUANDO</strong> algo aconteceu:<br>"Ontem", "Semana passada", "Há 2 horas"<br><br>Como indicar tempo no passado?' },
        { type: 'rule', cardClass: 'cyan', text: 'Palavras que indicam <strong>TEMPO PASSADO</strong>:', keyword: 'TIME WORDS', keywordAfter: 'yesterday, last..., ...ago' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'AS 3 PRINCIPAIS', text: '<strong>YESTERDAY</strong> = ontem<br><strong>LAST + tempo</strong> = último/passado<br><strong>tempo + AGO</strong> = há X tempo' },
        { type: 'example', cardClass: 'cyan', emoji: '📅', question: 'I saw him <span class="hl-cyan">yesterday</span>.', questionTr: 'Eu vi ele ontem.', answer: '(ontem)', answerTr: 'Dia anterior' },
        { type: 'example', cardClass: 'cyan', emoji: '📆', question: 'I went there <span class="hl-cyan">last week</span>.', questionTr: 'Eu fui lá semana passada.', answer: '(semana passada)', answerTr: 'LAST + período' },
        { type: 'example', cardClass: 'cyan', emoji: '⏰', question: 'I arrived 2 hours <span class="hl-cyan">ago</span>.', questionTr: 'Cheguei há 2 horas.', answer: '(há X tempo)', answerTr: 'Tempo + AGO' },
        { type: 'examples', cardClass: 'cyan', title: '📅 YESTERDAY (Ontem)', items: [
          { emoji: '📅', en: 'I worked <span class="hl-cyan">yesterday</span>.', pt: 'Eu trabalhei ontem.' },
          { emoji: '🌙', en: '<span class="hl-cyan">Yesterday</span> night', pt: 'Ontem à noite' },
          { emoji: '🌅', en: '<span class="hl-cyan">Yesterday</span> morning', pt: 'Ontem de manhã' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '📆 LAST + PERÍODO', items: [
          { emoji: '🌙', en: '<span class="hl-purple">Last</span> night', pt: 'Ontem à noite' },
          { emoji: '📆', en: '<span class="hl-purple">Last</span> week', pt: 'Semana passada' },
          { emoji: '📆', en: '<span class="hl-purple">Last</span> month', pt: 'Mês passado' },
          { emoji: '📆', en: '<span class="hl-purple">Last</span> year', pt: 'Ano passado' }
        ]},
        { type: 'examples', cardClass: 'green', title: '⏰ TEMPO + AGO', items: [
          { emoji: '⏰', en: '2 hours <span class="hl-green">ago</span>', pt: 'Há 2 horas' },
          { emoji: '📅', en: '3 days <span class="hl-green">ago</span>', pt: 'Há 3 dias' },
          { emoji: '📆', en: 'A week <span class="hl-green">ago</span>', pt: 'Há uma semana' },
          { emoji: '📆', en: '2 years <span class="hl-green">ago</span>', pt: 'Há 2 anos' }
        ]},
        { type: 'tip', cardClass: 'orange', icon: '⚠️', title: 'AGO - POSIÇÃO', text: 'AGO sempre vem <strong>DEPOIS</strong> do tempo:<br><br>❌ Ago 3 days<br>✅ 3 days ago<br><br>Diferente do português!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: '3 days before', leftNote: 'BEFORE não funciona assim', right: '3 days ago', rightNote: 'AGO para passado', explanation: 'Para "há X tempo" use <strong>AGO</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Há 3 dias":', options: ['3 days before', '3 days ago', 'before 3 days'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Ano passado":', options: ['Past year', 'Last year', 'Year ago'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'I saw her 2 days _____.', correctWord: 'ago' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - TIME WORDS', items: [
          { emoji: '📅', text: '<strong>YESTERDAY</strong> = ontem' },
          { emoji: '📆', text: '<strong>LAST</strong> + período (week/month/year)' },
          { emoji: '⏰', text: 'Tempo + <strong>AGO</strong> = há X tempo' },
          { emoji: '⚠️', text: 'AGO vem DEPOIS: 3 days ago' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '📅', pt: 'Ontem', en: 'Yesterday' }, { emoji: '📆', pt: 'Semana passada', en: 'Last week' },
        { emoji: '📆', pt: 'Mês passado', en: 'Last month' }, { emoji: '📆', pt: 'Ano passado', en: 'Last year' },
        { emoji: '🌙', pt: 'Ontem à noite', en: 'Last night' }, { emoji: '⏰', pt: 'Há 2 horas', en: '2 hours ago' },
        { emoji: '📅', pt: 'Há 3 dias', en: '3 days ago' }, { emoji: '📆', pt: 'Há uma semana', en: 'A week ago' },
        { emoji: '📅', pt: 'Anteontem', en: 'The day before yesterday' }, { emoji: '🕐', pt: 'Naquele dia', en: 'That day' },
      ]
    },

  { id: 'past-at-work', title: 'Past at Work', emoji: '💼⏪', description: 'Passado no trabalho', module: 5, order: 8,
      slides: [
        { type: 'title', emoji: '💼⏪', title: 'PAST AT WORK', subtitle: 'Situações no trabalho' },
        { type: 'situation', emoji: '💼', cardClass: 'purple', text: 'Seu chefe pergunta o que você já fez:<br>"Você mandou o email?"<br><br>Como relatar <strong>TAREFAS COMPLETAS</strong>?' },
        { type: 'rule', cardClass: 'cyan', text: 'Verbos comuns no <strong>TRABALHO</strong> no passado:', keyword: 'WORK VERBS', keywordAfter: 'sent, finished, completed, called...' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'VERBOS ESSENCIAIS', text: '<strong>SEND → SENT</strong> (enviar → enviei)<br><strong>FINISH → FINISHED</strong> (terminar → terminei)<br><strong>MEET → MET</strong> (encontrar → encontrei)<br><strong>LEAVE → LEFT</strong> (sair → saí)' },
        { type: 'example', cardClass: 'cyan', emoji: '📧', question: 'I <span class="hl-cyan">sent</span> the email.', questionTr: 'Mandei o email.', answer: '(send → sent)', answerTr: 'Irregular' },
        { type: 'example', cardClass: 'cyan', emoji: '✅', question: 'I <span class="hl-cyan">finished</span> the report.', questionTr: 'Terminei o relatório.', answer: '(finish + ed)', answerTr: 'Regular' },
        { type: 'example', cardClass: 'cyan', emoji: '🤝', question: 'I <span class="hl-cyan">met</span> with the client.', questionTr: 'Me encontrei com o cliente.', answer: '(meet → met)', answerTr: 'Irregular' },
        { type: 'examples', cardClass: 'cyan', title: '💼 TAREFAS COMPLETAS', items: [
          { emoji: '📞', en: 'I <span class="hl-cyan">called</span> the client.', pt: 'Liguei pro cliente.' },
          { emoji: '📝', en: 'I <span class="hl-cyan">completed</span> the task.', pt: 'Completei a tarefa.' },
          { emoji: '📊', en: 'I <span class="hl-cyan">submitted</span> the project.', pt: 'Submeti o projeto.' },
          { emoji: '👥', en: 'We <span class="hl-cyan">had</span> a meeting.', pt: 'Tivemos uma reunião.' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '💼 HORÁRIO E CHEGADA', items: [
          { emoji: '⏰', en: 'I <span class="hl-purple">arrived</span> late.', pt: 'Cheguei atrasado.' },
          { emoji: '🏃', en: 'I <span class="hl-purple">left</span> early.', pt: 'Saí mais cedo.' },
          { emoji: '🌙', en: 'I <span class="hl-purple">worked</span> late.', pt: 'Trabalhei até tarde.' },
          { emoji: '📅', en: 'I <span class="hl-purple">started</span> at 8.', pt: 'Comecei às 8.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'CONFIRMANDO TAREFAS', text: '"Did you...?" → "Yes, I did."<br><br>Did you send the email?<br>→ Yes, I sent it yesterday.' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I sended the email.', leftNote: 'SEND é irregular!', right: 'I sent the email.', rightNote: 'SEND → SENT', explanation: 'SEND é irregular: <strong>SENT</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu mandei o email":', options: ['I sended the email', 'I sent the email', 'I send the email'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Me encontrei com o chefe":', options: ['I meeted my boss', 'I met my boss', 'I meet my boss'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete (terminar no passado):', sentence: 'I _____ the report yesterday.', correctWord: 'finished' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - TRABALHO', items: [
          { emoji: '📧', text: '<strong>SEND → SENT</strong> (enviar)' },
          { emoji: '🤝', text: '<strong>MEET → MET</strong> (encontrar)' },
          { emoji: '🏃', text: '<strong>LEAVE → LEFT</strong> (sair)' },
          { emoji: '✅', text: '<strong>FINISH → FINISHED</strong> (terminar)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '✅', pt: 'Eu terminei o relatório', en: 'I finished the report' }, { emoji: '📧', pt: 'Eu mandei o email', en: 'I sent the email' },
        { emoji: '📞', pt: 'Ele ligou pro cliente', en: 'He called the client' }, { emoji: '📝', pt: 'Eu completei a tarefa', en: 'I completed the task' },
        { emoji: '👥', pt: 'Nós tivemos uma reunião', en: 'We had a meeting' }, { emoji: '🤝', pt: 'Eu encontrei meu chefe', en: 'I met my boss' },
        { emoji: '📊', pt: 'Eu submeti o projeto', en: 'I submitted the project' }, { emoji: '⏰', pt: 'Eu cheguei atrasado', en: 'I arrived late' },
        { emoji: '🏃', pt: 'Eu saí mais cedo', en: 'I left early' }, { emoji: '💼', pt: 'Eu trabalhei até tarde', en: 'I worked late' },
      ]
    },

  { id: 'past-emergencies', title: 'Past in Emergencies', emoji: '🚨⏪', description: 'Passado em emergências', module: 5, order: 9,
      slides: [
        { type: 'title', emoji: '🚨⏪', title: 'PAST IN EMERGENCIES', subtitle: 'Explicar o que aconteceu' },
        { type: 'situation', emoji: '🚨', cardClass: 'purple', text: 'Você precisa explicar para a polícia ou médico:<br>"O que <strong>ACONTECEU</strong>?"<br><br>Como explicar uma <strong>EMERGÊNCIA</strong>?' },
        { type: 'rule', cardClass: 'red', text: 'Em emergências, você precisa explicar <strong>O QUE ACONTECEU</strong>:', keyword: 'WHAT HAPPENED?', keywordAfter: 'O que aconteceu?' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'VERBOS DE EMERGÊNCIA', text: '<strong>FALL → FELL</strong> (cair → caí)<br><strong>LOSE → LOST</strong> (perder → perdi)<br><strong>STEAL → STOLE</strong> (roubar → roubaram)<br><strong>BREAK → BROKE</strong> (quebrar → quebrou)' },
        { type: 'example', cardClass: 'red', emoji: '🚗', question: 'I <span class="hl-red">had</span> an accident.', questionTr: 'Eu tive um acidente.', answer: '(have → had)', answerTr: 'Emergência' },
        { type: 'example', cardClass: 'red', emoji: '🤕', question: 'I <span class="hl-red">fell</span> down.', questionTr: 'Eu caí.', answer: '(fall → fell)', answerTr: 'Emergência' },
        { type: 'example', cardClass: 'red', emoji: '👛', question: 'I <span class="hl-red">lost</span> my wallet.', questionTr: 'Eu perdi minha carteira.', answer: '(lose → lost)', answerTr: 'Emergência' },
        { type: 'examples', cardClass: 'red', title: '🚨 ACIDENTES E QUEDAS', items: [
          { emoji: '🤕', en: 'I <span class="hl-red">got</span> hurt.', pt: 'Eu me machuquei.' },
          { emoji: '🏥', en: 'I <span class="hl-red">went</span> to the hospital.', pt: 'Eu fui pro hospital.' },
          { emoji: '🦵', en: 'I <span class="hl-red">broke</span> my leg.', pt: 'Eu quebrei minha perna.' },
          { emoji: '✂️', en: 'I <span class="hl-red">cut</span> my hand.', pt: 'Eu cortei minha mão.' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '🚨 ROUBO E PERDA', items: [
          { emoji: '📱', en: 'Someone <span class="hl-purple">stole</span> my phone.', pt: 'Roubaram meu celular.' },
          { emoji: '🔑', en: 'I <span class="hl-purple">lost</span> my keys.', pt: 'Eu perdi minhas chaves.' },
          { emoji: '💳', en: 'My card was <span class="hl-purple">stolen</span>.', pt: 'Meu cartão foi roubado.' },
          { emoji: '🚗', en: 'Someone <span class="hl-purple">broke</span> into my car.', pt: 'Arrombaram meu carro.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '📞', title: 'LIGANDO PARA EMERGÊNCIA', text: '<strong>I need help!</strong> = Eu preciso de ajuda!<br><strong>I called 911.</strong> = Liguei pro 911.<br><strong>Please send help!</strong> = Manda socorro!' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: 'I losed my wallet.', leftNote: 'LOSE é irregular!', right: 'I lost my wallet.', rightNote: 'LOSE → LOST', explanation: 'LOSE é irregular: <strong>LOST</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu perdi minha carteira":', options: ['I losed my wallet', 'I lost my wallet', 'I lose my wallet'], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu caí":', options: ['I falled', 'I fell', 'I felled'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'Someone _____ my phone. (roubar)', correctWord: 'stole' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - EMERGÊNCIAS', items: [
          { emoji: '🤕', text: '<strong>FALL → FELL</strong> (cair)' },
          { emoji: '👛', text: '<strong>LOSE → LOST</strong> (perder)' },
          { emoji: '📱', text: '<strong>STEAL → STOLE</strong> (roubar)' },
          { emoji: '💔', text: '<strong>BREAK → BROKE</strong> (quebrar)' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🚗', pt: 'Eu tive um acidente', en: 'I had an accident' }, { emoji: '🤕', pt: 'Eu caí', en: 'I fell' },
        { emoji: '📱', pt: 'Roubaram meu celular', en: 'Someone stole my phone' }, { emoji: '👛', pt: 'Eu perdi minha carteira', en: 'I lost my wallet' },
        { emoji: '🔑', pt: 'Eu perdi minhas chaves', en: 'I lost my keys' }, { emoji: '🤒', pt: 'Eu me machuquei', en: 'I got hurt' },
        { emoji: '🏥', pt: 'Eu fui pro hospital', en: 'I went to the hospital' }, { emoji: '🚨', pt: 'Eu liguei pro 911', en: 'I called 911' },
        { emoji: '💔', pt: 'Algo quebrou', en: 'Something broke' }, { emoji: '❓', pt: 'O que aconteceu?', en: 'What happened?' },
      ]
    },

  { id: 'past-story-basic', title: 'Past Story (Basic)', emoji: '📖⏪', description: 'Contar algo simples', module: 5, order: 10,
      slides: [
        { type: 'title', emoji: '📖⏪', title: 'TELLING A STORY', subtitle: 'Contar algo que aconteceu' },
        { type: 'situation', emoji: '📖', cardClass: 'purple', text: 'Alguém pergunta: "O que você fez ontem?"<br><br>Como <strong>CONTAR</strong> uma sequência de eventos?' },
        { type: 'rule', cardClass: 'cyan', text: 'Use <strong>PALAVRAS DE SEQUÊNCIA</strong> para conectar eventos:', keyword: 'FIRST, THEN, FINALLY', keywordAfter: 'Primeiro... depois... finalmente...' },
        { type: 'tip', cardClass: 'gold', icon: '⭐', title: 'CONECTORES DE SEQUÊNCIA', text: '<strong>FIRST</strong> = Primeiro<br><strong>THEN</strong> = Então/Depois<br><strong>AFTER THAT</strong> = Depois disso<br><strong>FINALLY</strong> = Finalmente' },
        { type: 'example', cardClass: 'cyan', emoji: '🌅', question: '<span class="hl-cyan">Yesterday</span> I woke up early.', questionTr: 'Ontem eu acordei cedo.', answer: '(início)', answerTr: 'Começa com WHEN' },
        { type: 'example', cardClass: 'cyan', emoji: '1️⃣', question: '<span class="hl-cyan">First</span>, I made breakfast.', questionTr: 'Primeiro, fiz café da manhã.', answer: '(primeiro)', answerTr: 'FIRST' },
        { type: 'example', cardClass: 'cyan', emoji: '➡️', question: '<span class="hl-cyan">Then</span> I went to work.', questionTr: 'Então fui trabalhar.', answer: '(depois)', answerTr: 'THEN' },
        { type: 'examples', cardClass: 'cyan', title: '📖 UMA HISTÓRIA SIMPLES', items: [
          { emoji: '🌅', en: 'Yesterday I <span class="hl-cyan">woke up</span> at 7.', pt: 'Ontem acordei às 7.' },
          { emoji: '1️⃣', en: '<span class="hl-cyan">First</span>, I took a shower.', pt: 'Primeiro, tomei banho.' },
          { emoji: '➡️', en: '<span class="hl-cyan">Then</span> I had breakfast.', pt: 'Depois tomei café.' },
          { emoji: '🏁', en: '<span class="hl-cyan">Finally</span>, I went to work.', pt: 'Finalmente, fui trabalhar.' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '🌙 CONTANDO A NOITE', items: [
          { emoji: '🏠', en: 'Last night I <span class="hl-purple">came</span> home late.', pt: 'Ontem à noite cheguei tarde.' },
          { emoji: '🍽️', en: 'I <span class="hl-purple">had</span> dinner.', pt: 'Jantei.' },
          { emoji: '📺', en: '<span class="hl-purple">After that</span>, I watched TV.', pt: 'Depois disso, assisti TV.' },
          { emoji: '🛌', en: '<span class="hl-purple">Finally</span>, I went to bed.', pt: 'Finalmente, fui dormir.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'VERBOS IRREGULARES COMUNS', text: '<strong>wake up → woke up</strong> (acordar)<br><strong>make → made</strong> (fazer)<br><strong>have → had</strong> (ter/tomar)<br><strong>go → went</strong> (ir)<br><strong>come → came</strong> (vir)' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ THEN vs THAN', leftClass: 'right', rightClass: 'wrong', leftIcon: '✅', rightIcon: '❌', leftLabel: 'THEN (depois)', rightLabel: 'THAN (do que)', left: 'First I ate, <span class="hl-green">then</span> I left.', leftNote: 'Sequência', right: 'Bigger <span class="hl-red">than</span> me.', rightNote: 'Comparação', explanation: 'THEN = sequência | THAN = comparação' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 Para sequência, use:', options: ['Then', 'Than', 'That'], correct: 0 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Finalmente" em inglês:', options: ['Final', 'Finally', 'Finish'], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: 'First I woke up, _____ I took a shower.', correctWord: 'then' },
        { type: 'list', cardClass: 'gold', title: '📝 RESUMO - CONTAR HISTÓRIAS', items: [
          { emoji: '1️⃣', text: '<strong>FIRST</strong> = Primeiro' },
          { emoji: '➡️', text: '<strong>THEN</strong> = Então/Depois' },
          { emoji: '📍', text: '<strong>AFTER THAT</strong> = Depois disso' },
          { emoji: '🏁', text: '<strong>FINALLY</strong> = Finalmente' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '1️⃣', pt: 'Primeiro', en: 'First' }, { emoji: '➡️', pt: 'Então / Depois', en: 'Then' },
        { emoji: '📍', pt: 'Depois disso', en: 'After that' }, { emoji: '🏁', pt: 'Finalmente', en: 'Finally' },
        { emoji: '🌅', pt: 'Eu acordei', en: 'I woke up' }, { emoji: '🍳', pt: 'Eu fiz café da manhã', en: 'I made breakfast' },
        { emoji: '💼', pt: 'Eu fui trabalhar', en: 'I went to work' }, { emoji: '🏠', pt: 'Eu voltei pra casa', en: 'I came home' },
        { emoji: '🍽️', pt: 'Eu jantei', en: 'I had dinner' }, { emoji: '🛌', pt: 'Eu fui dormir', en: 'I went to sleep' },
      ]
    },

  { id: 'past-continuous', title: 'PAST CONTINUOUS', emoji: '⏸️📖', description: 'Ação contínua no passado', module: 5, order: 11, slides: [    { type: 'title', emoji: '⏸️📖', title: 'PAST CONTINUOUS', subtitle: 'O que ESTAVA acontecendo' },
      { type: 'situation', emoji: '🚔', cardClass: 'purple', text: 'O policial pergunta:<br><strong>"What were you doing at 9 PM?"</strong><br><br>Você estava trabalhando.<br>Como responder?' },
      { type: 'rule', cardClass: 'cyan', text: 'Para falar o que <strong>ESTAVA</strong> acontecendo:', keyword: 'WAS/WERE + VERB-ING', keywordAfter: 'I was working = Eu estava trabalhando' },
      { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'QUANDO USAR', text: '<strong>WAS</strong> → I / he / she / it<br><strong>WERE</strong> → you / we / they<br><br>I <strong>was</strong> working<br>They <strong>were</strong> sleeping' },
      { type: 'example', cardClass: 'cyan', emoji: '👷', question: "I <span class='hl-cyan'>was working</span> when you called.", questionTr: 'Eu estava trabalhando quando você ligou.', answer: "WAS + verb-ING", answerTr: 'ESTAVA + verbo-NDO' },
      { type: 'example', cardClass: 'cyan', emoji: '🚗', question: "He <span class='hl-cyan'>was driving</span> home.", questionTr: 'Ele estava dirigindo pra casa.', answer: "WAS + verb-ING", answerTr: 'ESTAVA + verbo-NDO' },
      { type: 'example', cardClass: 'cyan', emoji: '😴', question: "They <span class='hl-cyan'>were sleeping</span>.", questionTr: 'Eles estavam dormindo.', answer: "WERE + verb-ING", answerTr: 'ESTAVAM + verbo-NDO' },
      { type: 'examples', cardClass: 'cyan', title: '🚔 RESPONDENDO PERGUNTAS', items: [
        { emoji: '👷', en: "I <span class='hl-cyan'>was working</span> at a construction site.", pt: 'Eu estava trabalhando numa obra.' },
        { emoji: '🍽️', en: "We <span class='hl-cyan'>were having</span> dinner.", pt: 'Estávamos jantando.' },
        { emoji: '📺', en: "I <span class='hl-cyan'>was watching</span> TV.", pt: 'Eu estava assistindo TV.' },
        { emoji: '🛌', en: "She <span class='hl-cyan'>was sleeping</span>.", pt: 'Ela estava dormindo.' }
      ]},
      { type: 'examples', cardClass: 'purple', title: '⚡ QUANDO ALGO INTERROMPEU', items: [
        { emoji: '📞', en: "I was working <span class='hl-purple'>when</span> you called.", pt: 'Eu estava trabalhando quando você ligou.' },
        { emoji: '💥', en: "He was driving <span class='hl-purple'>when</span> the accident happened.", pt: 'Ele estava dirigindo quando o acidente aconteceu.' },
        { emoji: '🌧️', en: "We were outside <span class='hl-purple'>when</span> it started raining.", pt: 'Estávamos fora quando começou a chover.' }
      ]},
      { type: 'comparison', cardClass: 'cyan', title: '🔀 SIMPLE PAST vs PAST CONTINUOUS', leftClass: 'left-side', rightClass: 'right-side', leftIcon: '✅', rightIcon: '⏳', leftLabel: 'SIMPLE (ação completa)', rightLabel: 'CONTINUOUS (em andamento)', left: "I <span class='hl-purple'>worked</span> yesterday.", leftNote: 'Trabalhei e terminei', right: "I <span class='hl-cyan'>was working</span> at 3 PM.", rightNote: 'Estava no meio do trabalho', explanation: 'SIMPLE = completou | CONTINUOUS = estava fazendo' },
      { type: 'tip', cardClass: 'green', icon: '💡', title: 'DICA DE OURO', text: 'Se alguém perguntar o que você estava fazendo em tal hora:<br><br><strong>I was + verbo-ING</strong><br><br>Funciona pra polícia, chefe, médico, seguro...' },
      { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "I was work when you called.", leftNote: 'Faltou o -ING', right: "I was working when you called.", rightNote: 'Com -ING', explanation: 'Sempre: WAS/WERE + verbo<strong>-ING</strong>' },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu estava trabalhando" em inglês:', options: ['I was work', 'I was working', 'I were working'], correct: 1 },
      { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eles estavam dormindo" em inglês:', options: ['They was sleeping', 'They were sleep', 'They were sleeping'], correct: 2 },
      { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I was _____ when the boss called.", correctWord: 'working' },
      { type: 'list', cardClass: 'gold', title: '📝 RESUMO - PAST CONTINUOUS', items: [
        { emoji: '⏸️', text: '<strong>WAS/WERE + verbo-ING</strong>' },
        { emoji: '👤', text: 'I/he/she → WAS | you/we/they → WERE' },
        { emoji: '⚡', text: 'Use com WHEN (quando algo interrompeu)' },
        { emoji: '🚔', text: 'Útil pra explicar o que você estava fazendo' }
      ]},
      { type: 'end' }
    ], vocabulary: [{ emoji: '👷', pt: 'Eu estava trabalhando', en: "I was working", level: 1 },
      { emoji: '🚗', pt: 'Ele estava dirigindo', en: "He was driving", level: 1 },
      { emoji: '😴', pt: 'Eles estavam dormindo', en: "They were sleeping", level: 1 },
      { emoji: '🍽️', pt: 'Estávamos jantando', en: "We were having dinner", level: 1 },
      { emoji: '📺', pt: 'Eu estava assistindo TV', en: "I was watching TV", level: 1 },
      { emoji: '🏗️', pt: 'Eu estava trabalhando numa obra', en: "I was working at a construction site", level: 1 },
      { emoji: '📞', pt: 'Eu estava trabalhando quando você ligou', en: "I was working when you called", level: 1 },
      { emoji: '💥', pt: 'Ele estava dirigindo quando aconteceu', en: "He was driving when it happened", level: 2 },
      { emoji: '🌧️', pt: 'Começou a chover', en: "It started raining", level: 1 },
      { emoji: '🛌', pt: 'Ela estava dormindo', en: "She was sleeping", level: 1 },
      { emoji: '🧹', pt: 'Eu estava limpando a casa', en: "I was cleaning the house", level: 1 },
      { emoji: '🍳', pt: 'Ela estava cozinhando', en: "She was cooking", level: 1 },
      { emoji: '🚶', pt: 'Eu estava caminhando', en: "I was walking", level: 1 },
      { emoji: '🛒', pt: 'Estávamos fazendo compras', en: "We were shopping", level: 1 },
      { emoji: '📱', pt: 'Ele estava no telefone', en: "He was on the phone", level: 1 },
      { emoji: '🔨', pt: 'Eles estavam consertando o teto', en: "They were fixing the roof", level: 2 },
      { emoji: '❓', pt: 'O que você estava fazendo?', en: "What were you doing?", level: 1 },
      { emoji: '🕘', pt: 'O que você estava fazendo às 9?', en: "What were you doing at 9?", level: 2 },
      { emoji: '🏠', pt: 'Eu estava em casa', en: "I was at home", level: 1 },
      { emoji: '⏰', pt: 'Eu estava esperando o ônibus', en: "I was waiting for the bus", level: 1 }
    ] },

  { id: 'didnt-negative', title: "DIDN'T (Negative)", emoji: '❌⏪', description: 'Negação no passado', module: 5, order: 12,
      slides: [
        { type: 'title', emoji: '❌⏪', title: "DIDN'T", subtitle: 'Negar no passado' },
        { type: 'situation', emoji: '🏠', cardClass: 'purple', text: 'Você quer dizer que NÃO foi pra casa:<br>"Eu <strong>NÃO FUI</strong> pra casa."<br><br>No passado, usamos <strong>DIDN\'T</strong>!' },
        { type: 'rule', cardClass: 'red', text: '<strong>DIDN\'T</strong> (did not) para <strong>NEGAR</strong> no passado:', keyword: "DIDN'T + verbo BASE", keywordAfter: "I didn't go / She didn't see" },
        { type: 'tip', cardClass: 'gold', icon: '⚠️', title: 'REGRA DE OURO', text: 'Com DIDN\'T, o verbo volta pra forma <strong>BASE</strong>!<br><br>❌ I didn\'t <strong>went</strong>.<br>✅ I didn\'t <strong>go</strong>.<br><br>O DIDN\'T já indica passado!' },
        { type: 'tip', cardClass: 'orange', icon: '🗣️', title: 'PRONÚNCIA', text: '<strong>DIDN\'T</strong> soa como "DÍDNT"<br><br>O D final é bem suave!' },
        { type: 'example', cardClass: 'red', emoji: '🏠', question: "I <span class='hl-red'>didn't</span> go home.", questionTr: 'Eu não fui pra casa.', answer: '(negação)', answerTr: 'GO, não WENT' },
        { type: 'example', cardClass: 'red', emoji: '👀', question: "She <span class='hl-red'>didn't</span> see me.", questionTr: 'Ela não me viu.', answer: '(negação)', answerTr: 'SEE, não SAW' },
        { type: 'example', cardClass: 'red', emoji: '🤷', question: "I <span class='hl-red'>didn't</span> know.", questionTr: 'Eu não sabia.', answer: '(negação)', answerTr: 'KNOW, não KNEW' },
        { type: 'examples', cardClass: 'red', title: '❌ NEGAÇÕES COMUNS', items: [
          { emoji: '🍽️', en: "I <span class='hl-red'>didn't</span> eat.", pt: 'Eu não comi.' },
          { emoji: '📞', en: "He <span class='hl-red'>didn't</span> call.", pt: 'Ele não ligou.' },
          { emoji: '💼', en: "I <span class='hl-red'>didn't</span> work.", pt: 'Eu não trabalhei.' },
          { emoji: '🤔', en: "I <span class='hl-red'>didn't</span> understand.", pt: 'Eu não entendi.' }
        ]},
        { type: 'examples', cardClass: 'purple', title: '❌ MAIS NEGAÇÕES', items: [
          { emoji: '💭', en: "I <span class='hl-red'>didn't</span> want to go.", pt: 'Eu não queria ir.' },
          { emoji: '⏰', en: "I <span class='hl-red'>didn't</span> have time.", pt: 'Eu não tinha tempo.' },
          { emoji: '💰', en: "We <span class='hl-red'>didn't</span> have money.", pt: 'Não tínhamos dinheiro.' },
          { emoji: '🚗', en: "She <span class='hl-red'>didn't</span> drive.", pt: 'Ela não dirigiu.' }
        ]},
        { type: 'tip', cardClass: 'green', icon: '💡', title: 'IGUAL PARA TODOS', text: 'DIDN\'T é igual para todas as pessoas!<br><br>I didn\'t / You didn\'t / He didn\'t / She didn\'t / We didn\'t / They didn\'t' },
        { type: 'comparison', cardClass: 'red', title: '⚠️ ERRO COMUM', leftClass: 'wrong', rightClass: 'right', leftIcon: '❌', rightIcon: '✅', leftLabel: 'ERRADO', rightLabel: 'CERTO', left: "I didn't went.", leftNote: 'Verbo no passado com DIDN\'T', right: "I didn't go.", rightNote: 'Verbo na forma base', explanation: 'Com DIDN\'T, verbo fica na <strong>FORMA BASE</strong>!' },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Eu não vi":', options: ["I didn't saw", "I didn't see", "I not saw"], correct: 1 },
        { type: 'quiz', cardClass: 'cyan', question: '🎯 "Ele não sabia":', options: ["He didn't knew", "He didn't know", "He not know"], correct: 1 },
        { type: 'fill-blank', cardClass: 'cyan', prompt: '✍️ Complete:', sentence: "I _____ understand the question.", correctWord: "didn't" },
        { type: 'list', cardClass: 'gold', title: "📝 RESUMO - DIDN'T", items: [
          { emoji: '❌', text: "<strong>DIDN'T</strong> = did not (negação no passado)" },
          { emoji: '🔤', text: 'Estrutura: DIDN\'T + verbo BASE' },
          { emoji: '⚠️', text: 'Verbo na forma base (não no passado!)' },
          { emoji: '👥', text: 'Igual para todas as pessoas' }
        ]},
        { type: 'end' }
      ],
      vocabulary: [{ emoji: '🏠', pt: 'Eu não fui', en: "I didn't go" }, { emoji: '👀', pt: 'Ela não me viu', en: "She didn't see me" },
        { emoji: '🍽️', pt: 'Eu não comi', en: "I didn't eat" }, { emoji: '📞', pt: 'Ele não ligou', en: "He didn't call" },
        { emoji: '💼', pt: 'Eu não trabalhei', en: "I didn't work" }, { emoji: '🤔', pt: 'Eu não entendi', en: "I didn't understand" },
        { emoji: '🤷', pt: 'Eu não sabia', en: "I didn't know" }, { emoji: '💭', pt: 'Eu não queria', en: "I didn't want" },
        { emoji: '⏰', pt: 'Eu não tive tempo', en: "I didn't have time" }, { emoji: '💰', pt: 'Eu não tinha dinheiro', en: "I didn't have money" },
      ]
    }
] as Lesson[];
