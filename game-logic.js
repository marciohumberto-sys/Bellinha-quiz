const questionsPool = {
    1: [ // Missão 1: Sistema Solar (Fácil)
        { q: "Qual é o maior planeta do nosso Sistema Solar?", a: ["Júpiter", "Terra", "Marte", "Saturno"], c: 0, h: "É conhecido como o gigante gasoso." },
        { q: "Qual planeta é conhecido pelos seus grandes anéis brilhantes?", a: ["Urano", "Saturno", "Netuno", "Júpiter"], c: 1, h: "Seu nome começa com S." },
        { q: "Qual é o planeta mais próximo do Sol?", a: ["Vênus", "Marte", "Mercúrio", "Terra"], c: 2, h: "É um planeta pequeno e muito rápido." },
        { q: "Qual planeta é chamado de 'Planeta Vermelho'?", a: ["Marte", "Vênus", "Júpiter", "Mercúrio"], c: 0, h: "É onde enviamos os robôs Rovers." },
        { q: "Quantos planetas existem no nosso Sistema Solar?", a: ["7", "8", "9", "10"], c: 1, h: "Plutão não é mais contado como um planeta principal." },
        { q: "Qual é o nome da estrela que fica no centro do nosso sistema?", a: ["Lua", "Sirius", "Sol", "Polaris"], c: 2, h: "Ela ilumina o nosso dia." },
        { q: "A Lua é o quê?", a: ["Um planeta", "Uma estrela", "Um satélite natural", "Um asteroide"], c: 2, h: "Ela gira em torno da Terra." },
        { q: "Qual planeta gira 'deitado' de lado?", a: ["Urano", "Netuno", "Saturno", "Vênus"], c: 0, h: "Tem uma cor azul esverdeada clara." },
        { q: "Qual é o planeta mais quente do Sistema Solar?", a: ["Mercúrio", "Vênus", "Marte", "Sol"], c: 1, h: "Sua atmosfera segura muito calor." },
        { q: "Qual planeta tem a 'Grande Mancha Vermelha'?", a: ["Marte", "Saturno", "Júpiter", "Netuno"], c: 2, h: "É o maior planeta de todos." },
        { q: "Onde fica o Cinturão de Asteroides?", a: ["Depois de Netuno", "Entre a Terra e Marte", "Entre Marte e Júpiter", "Perto do Sol"], c: 2, h: "Fica entre o planeta vermelho e o gigante gasoso." },
        { q: "Qual destes é um planeta azul com ventos fortes?", a: ["Netuno", "Marte", "Mercúrio", "Vênus"], c: 0, h: "É o último planeta do sistema." },
        { q: "Quanto tempo a Terra leva para dar volta no Sol?", a: ["1 mês", "1 dia", "1 ano", "10 anos"], c: 2, h: "É o tempo que leva para seu aniversário." },
        { q: "Qual é o único planeta conhecido com vida?", a: ["Marte", "Terra", "Vênus", "Júpiter"], c: 1, h: "É a nossa casa azul." },
        { q: "Do que o Sol é feito principalmente?", a: ["Fogo e Rocha", "Gases (Hidrogênio/Hélio)", "Lava", "Gelatina"], c: 1, h: "Elementos leves do universo." },
        { q: "Qual planeta é azul profundo e tem ventos velozes?", a: ["Netuno", "Marte", "Vênus", "Júpiter"], c: 0, h: "É o oitavo planeta." },
        { q: "O que é um eclipse solar?", a: ["Lua entre Terra e Sol", "Terra entre Lua e Sol", "Sol explode", "Nuvem passa"], c: 0, h: "A Lua faz sombra na Terra." },
        { q: "Qual objeto é o mais pesado do Sistema Solar?", a: ["Júpiter", "Buraco Negro", "Sol", "Terra"], c: 2, h: "Contém 99% de toda a massa." },
        { q: "Onde fica o maior vulcão, o Monte Olimpo?", a: ["Terra", "Lua", "Marte", "Vênus"], c: 2, h: "Fica no Planeta Vermelho." },
        { q: "Qual planeta gira no sentido oposto aos outros?", a: ["Terra", "Vênus", "Júpiter", "Marte"], c: 1, h: "É o brilho mais forte depois da Lua." },
        { q: "Do que são feitos os anéis de Saturno?", a: ["Ouro", "Gelo e rocha", "Fumaça", "Nuvens"], c: 1, h: "Pedaços orbitando o planeta." },
        { q: "Quantas luas Júpiter tem aproximadamente?", a: ["1", "10", "Mais de 70", "Nenhuma"], c: 2, h: "É o planeta com mais luas conhecidas." },
        { q: "Qual planeta tem quase o tamanho da Terra?", a: ["Marte", "Mercúrio", "Vênus", "Netuno"], c: 2, h: "Chamado de irmão da Terra." },
        { q: "Do que é feita a maior parte da Lua?", a: ["Queijo", "Gás", "Rocha", "Gelo"], c: 2, h: "Não tem ar nem água líquida." },
        { q: "O que são cometas?", a: ["Estrelas", "Bolas de gelo sujas", "Foguetes", "Nuvens"], c: 1, h: "Têm cauda perto do Sol." }
    ],
    2: [ // Missão 2: Estrelas e Constelações (Médio)
        { q: "O que são as estrelas?", a: ["Bolas de gás", "Pedras", "Planetas", "Lâmpadas"], c: 0, h: "Fazem fusão nuclear." },
        { q: "Qual é a cor das estrelas mais QUENTES?", a: ["Vermelho", "Amarelo", "Azul", "Branco"], c: 2, h: "Pense na chama mais quente." },
        { q: "Qual é a cor das estrelas mais FRIAS?", a: ["Azul", "Vermelho", "Verde", "Preto"], c: 1, h: "Oposto ao azul no calor." },
        { q: "O que é uma constelação?", a: ["Planeta", "Galáxia", "Desenho de estrelas", "Explosão"], c: 2, h: "Guiavam navegadores." },
        { q: "Qual constelação parece uma caçarola?", a: ["Ursa Maior", "Órion", "Cruzeiro", "Leão"], c: 0, h: "Nome de animal da floresta." },
        { q: "Como se chama a explosão final de uma estrela?", a: ["Big Bang", "Supernova", "Meteoro", "Buraco"], c: 1, h: "Evento muito brilhante." },
        { q: "A 'Estrela do Norte' aponta para onde?", a: ["Sul", "Leste", "Norte", "Oeste"], c: 2, h: "O nome já diz a dica!" },
        { q: "O Sol vai brilhar para sempre?", a: ["Sim", "Não", "Talvez", "Sim, de dia"], c: 1, h: "Estrelas têm ciclo de vida." },
        { q: "Onde as estrelas nascem?", a: ["Planetas", "Vácuo", "Nebulosas", "Sol"], c: 2, h: "Nuvens de gás e poeira." },
        { q: "Estrela mais perto da Terra (após o Sol)?", a: ["Sirius", "Vega", "Próxima Centauri", "Betel"], c: 2, h: "Significa 'Próxima'." },
        { q: "O que é 'Berçário de Estrelas'?", a: ["Escola", "Nebulosa", "Lua", "Núcleo"], c: 1, h: "Onde estrelas se formam." },
        { q: "Qual constelação tem as 'Três Marias'?", a: ["Leão", "Órion", "Touro", "Lira"], c: 1, h: "Representa um caçador." },
        { q: "Estrelas noturnas estão no Sistema Solar?", a: ["Sim", "Não", "Algumas", "Só a Lua"], c: 1, h: "O sistema é só o nosso bairro." },
        { q: "O que é 'estrela cadente'?", a: ["Estrela morrendo", "Meteoro no ar", "Alienígena", "Raio"], c: 1, h: "Rocha queimando no ar." },
        { q: "Estrelas piscam de verdade no espaço?", a: ["Sim", "Não, é a atmosfera", "Só as azuis", "Sim, de natal"], c: 1, h: "Sem ar, elas não piscariam." },
        { q: "Estrela mais brilhante do céu noturno?", a: ["Polaris", "Sirius", "Vega", "Betelgeuse"], c: 1, h: "Fica na constelação Cão Maior." },
        { q: "O que resta após uma supernova média-grande?", a: ["Planeta", "Estrela de Nêutrons", "Nuvem", "Nada"], c: 1, h: "É extremamente densa." },
        { q: "Qual constelação tem formato de escorpião?", a: ["Touro", "Escorpião", "Gêmeos", "Sagitário"], c: 1, h: "O nome é o mesmo do bicho." },
        { q: "O Sol é que tipo de estrela?", a: ["Anã Vermelha", "Anã Amarela", "Gigante Azul", "Planeta"], c: 1, h: "Estrela de tamanho médio." },
        { q: "O que é 'paralaxe'?", a: ["Movimento das estrelas", "Tipo de gás", "Lente", "Foguete"], c: 0, h: "Ajuda a medir distâncias." },
        { q: "Qual a cor de estrela com temperatura média?", a: ["Azul", "Preta", "Amarela/Branca", "Verde"], c: 2, h: "O Sol é um exemplo." },
        { q: "O que ocorre no centro das estrelas?", a: ["Fogo", "Fusão Nuclear", "Vento", "Chuva"], c: 1, h: "Cria hélio a partir de hidrogênio." },
        { q: "Qual constelação representa um caçador?", a: ["Órion", "Leão", "Ursa", "Pégaso"], c: 0, h: "Tem um famoso cinturão." },
        { q: "Como se chama um grupo de milhares de estrelas?", a: ["Time", "Aglomerado Estelar", "Bairro", "Nuvem"], c: 1, h: "Abertos ou globulares." },
        { q: "O que é um 'Púlsar'?", a: ["Planeta", "Estrela que gira rápido", "Luz de neon", "Gás"], c: 1, h: "Emite luz como um farol." }
    ],
    3: [ // Missão 3: Galáxias e Universo (Desafio)
        { q: "Nome da galáxia onde moramos?", a: ["Andrômeda", "Via Láctea", "Sombrero", "Céu"], c: 1, h: "Caminho de leite." },
        { q: "Qual o formato da Via Láctea?", a: ["Quadrada", "Redonda", "Espiral", "Linha"], c: 2, h: "Parece um redemoinho." },
        { q: "O que existe no centro das galáxias?", a: ["Estrela", "Ouro", "Buraco Negro", "Vácuo"], c: 2, h: "Gravidade extrema." },
        { q: "A luz escapa de um Buraco Negro?", a: ["Sim", "Não", "Só a azul", "Sim, de dia"], c: 1, h: "Nada volta de lá." },
        { q: "Qual a galáxia grande mais próxima?", a: ["Andrômeda", "Triângulo", "Nuvem", "X"], c: 0, h: "Começa com A." },
        { q: "O que o Universo faz agora?", a: ["Encolhe", "Para", "Se expande", "Gira"], c: 2, h: "As galáxias se afastam." },
        { q: "O que foi o 'Big Bang'?", a: ["Música", "Origem do Universo", "Planeta", "Fim"], c: 1, h: "Há 13,8 bilhões de anos." },
        { q: "Quantas galáxias existem no observável?", a: ["Mil", "Milhões", "Bilhões", "10"], c: 2, h: "Número impossível de imaginar." },
        { q: "O que é um 'Exoplaneta'?", a: ["Explodido", "Fora do Sistema Solar", "Invisível", "Lua"], c: 1, h: "Orbita outra estrela." },
        { q: "O que é o vácuo espacial?", a: ["Aspirador", "Quase sem matéria", "Poeira", "Sol"], c: 1, h: "O som não viaja lá." },
        { q: "Como chamamos grupo de galáxias?", a: ["Time", "Aglomerado", "Sistema", "Vila"], c: 1, h: "Grupo Local é um." },
        { q: "O que é a 'Matéria Escura'?", a: ["Poeira", "Invisível com gravidade", "Lava", "Fumaça"], c: 1, h: "Segura as galáxias juntas." },
        { q: "Qual a velocidade da luz?", a: ["100km/h", "1M km/h", "300k km/s", "Infinita"], c: 2, h: "Limite do universo." },
        { q: "O Universo tem fim?", a: ["Sim", "Não sabemos", "Plutão", "Sol"], c: 1, h: "Pode ser infinito." },
        { q: "O que é um 'Ano-Luz'?", a: ["Ano luz", "Distância da luz no ano", "Tempo", "Feriado"], c: 1, h: "Unidade de distância." },
        { q: "O que é um Quasar?", a: ["Planeta", "Centro de galáxia brilhante", "Lua", "Gás"], c: 1, h: "Alimentado por buraco negro." },
        { q: "Idade estimada do Universo?", a: ["1B", "5B", "13,8 Bilhões", "100B"], c: 2, h: "Começou no Big Bang." },
        { q: "O que é Radiação Cósmica de Fundo?", a: ["Luz do Sol", "Echo do Big Bang", "Rádio", "Calor"], c: 1, h: "Detectada em todo o céu." },
        { q: "Destino de Via Láctea e Andrômeda?", a: ["Explodir", "Colidir", "Sumir", "Nada"], c: 1, h: "Em bilhões de anos." },
        { q: "O que é Energia Escura?", a: ["Luz preta", "Faz universo expandir", "Bateria", "Nuvem"], c: 1, h: "Maior parte do universo." },
        { q: "O que é Horizonte de Eventos?", a: ["Borda do Sol", "Borda de Buraco Negro", "Linha", "Fim"], c: 1, h: "Ponto sem volta." },
        { q: "Maior tipo de galáxia?", a: ["Espiral", "Elíptica Gigante", "Irregular", "Anã"], c: 1, h: "Sem braços em espiral." },
        { q: "O que é Lente Gravitacional?", a: ["Óculos", "Gravidade desvia luz", "Espelho", "Lupa"], c: 1, h: "Previsto por Einstein." },
        { q: "O que é o Multiverso?", a: ["Muitos versos", "Muitos universos", "Um planeta", "Jogo"], c: 1, h: "Conceito teórico da física." },
        { q: "Temperatura do espaço profundo?", a: ["0C", "-100C", "-270C", "-500C"], c: 2, h: "Quase o zero absoluto." }
    ]
};

let gameState = {
    currentMission: 1,
    score: 0,
    currentQuestionIndex: 0,
    missionQuestions: [],
    correctInMission: 0,
    hintsAvailable: 2,
    totalCorrect: 0,
    streak: 0,
    bestStreak: 0,
    isMuted: localStorage.getItem('bellinha_muted') === 'true'
};

// Sincronizar UI do som no carregamento
function syncSoundUI() {
    if (!soundToggle) return;
    soundToggle.classList.toggle('muted', gameState.isMuted);
    soundToggle.querySelector('.icon').innerText = gameState.isMuted ? '❌' : '🔊';
}

const missionTitles = {
    1: "Missão 1: Sistema Solar",
    2: "Missão 2: Estrelas e Constelações",
    3: "Missão 3: Galáxias e Universo"
};

const assistantMessages = {
    welcome: "Olá, Bellinha! Sou seu Guia Estelar. Pronta para explorar o universo?",
    correct: [
        "✨ Boa! Você acertou!",
        "🚀 Incrível! Conhecimento estelar!",
        "🌟 Uau! Você é uma exploradora nata!",
        "🛸 Na mosca! Continue assim!"
    ],
    wrong: [
        "💫 Quase! Vamos tentar a próxima!",
        "🔭 Essa foi difícil! Mas você está aprendendo!",
        "🪐 Não desanime! O universo é cheio de mistérios!",
        "🚀 Quase lá! Tente respirar fundo e continue!"
    ],
    thinking: [
        "🤔 Deixe-me consultar meus bancos de dados...",
        "💡 Aqui está uma pista estelar para você!",
        "📡 Escaneando arquivos do universo..."
    ],
    missionComplete: "Missão cumprida! Estamos subindo de nível!",
    spaceship: [
        "🚀 Uau! Você viu aquela nave?!",
        "✨ Olha só isso cruzando o espaço!",
        "🌌 Que incrível! Uma nave passando por aqui!",
        "🛸 Alerta de OVN! Que velocidade!"
    ],
    loadingFrases: [
        "Preparando motores... 🚀",
        "Calculando rota estelar... ✨",
        "Ajustando coordenadas... 🌌",
        "Alinhando satélites... 🛰️"
    ]
};

// UI Elements
const gameContainer = document.getElementById('game-container');
const questionText = document.getElementById('question-text');
const optionsGrid = document.getElementById('options-grid');
const missionTitle = document.getElementById('mission-title');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const scoreValue = document.getElementById('score-value');
const assistantMsg = document.getElementById('assistant-msg');
const speechBubble = document.getElementById('speech-bubble');
const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('overlay');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalBtn = document.getElementById('modal-btn');
const spaceshipContainer = document.getElementById('spaceship-container');
const bgElements = document.getElementById('background-elements');
const hintBtn = document.getElementById('hint-btn');
const hintCountLabel = document.getElementById('hint-count');
const hintCard = document.getElementById('hint-card');
const hintText = document.getElementById('hint-text');
const statsBar = document.getElementById('stats-bar');
const statCorrect = document.getElementById('stat-correct');
const statStreak = document.getElementById('stat-streak');
const statBestStreak = document.getElementById('stat-best-streak');
const soundToggle = document.getElementById('sound-toggle');
syncSoundUI();

// Sound Manager (Web Audio API)
let audioCtx = null;
let audioReady = false;

function initAudio() {
    if (audioReady) return;

    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        // Silent pulse to unlock iOS Safari
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        gain.gain.value = 0.001;
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(0);
        osc.stop(0.1);

        audioReady = true;
        console.log("Web Audio API initialized and unlocked for iOS");
    } catch (e) {
        console.warn("Web Audio API not supported:", e);
    }
}

// Singleton para a música ambiente
window.bgMusicInstance = null;

function applyBGMVolume() {
    if (window.bgMusicInstance) {
        window.bgMusicInstance.volume = 0.08; // Volume equilibrado aumentado para audibilidade no Android
        console.log("Volume BGM ajustado para 0.08");
    }
}

function initBackgroundMusic() {
    if (window.bgMusicInstance) return;
    
    console.log("Criando instância única de música ambiente...");
    const musicUrl = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3';
    window.bgMusicInstance = new Audio(musicUrl);
    window.bgMusicInstance.loop = true;
    applyBGMVolume();
    
    if (!gameState.isMuted) {
        window.bgMusicInstance.play()
            .catch(e => console.log("Erro ao tocar BGM (interação necessária):", e));
    }
}

function toggleMusic(play) {
    if (!window.bgMusicInstance) return;
    
    if (play && !gameState.isMuted) {
        applyBGMVolume();
        window.bgMusicInstance.play()
            .catch(e => console.log("Erro ao retomar BGM:", e));
    } else {
        window.bgMusicInstance.pause();
        console.log("BGM Pausada");
    }
}

function playSound(soundName) {
    if (gameState.isMuted || !audioReady || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    switch(soundName) {
        case 'correct':
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(523.25, now);
            osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.1);
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
            break;
        case 'wrong':
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(110, now + 0.2);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.3);
            osc.start(now);
            osc.stop(now + 0.3);
            break;
        case 'hint':
            osc.type = 'sine';
            osc.frequency.setValueAtTime(880, now);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.linearRampToValueAtTime(0, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
            break;
        case 'start':
            osc.type = 'square';
            osc.frequency.setValueAtTime(100, now);
            osc.frequency.exponentialRampToValueAtTime(800, now + 0.5);
            gain.gain.setValueAtTime(0, now);
            gain.gain.linearRampToValueAtTime(0.1, now + 0.1);
            gain.gain.linearRampToValueAtTime(0, now + 0.5);
            osc.start(now);
            osc.stop(now + 0.5);
            break;
        case 'victory':
            // Fanfarra de sucesso (acordes)
            const victoryNotes = [523.25, 659.25, 783.99, 1046.50];
            victoryNotes.forEach((freq, i) => {
                const o = audioCtx.createOscillator();
                const g = audioCtx.createGain();
                o.type = 'triangle';
                o.frequency.setValueAtTime(freq, now + (i * 0.1));
                g.gain.setValueAtTime(0, now + (i * 0.1));
                g.gain.linearRampToValueAtTime(0.2, now + (i * 0.1) + 0.05);
                g.gain.linearRampToValueAtTime(0, now + 1.5);
                o.connect(g);
                g.connect(audioCtx.destination);
                o.start(now + (i * 0.1));
                o.stop(now + 1.5);
            });
            break;
    }
}

// Sound Toggle
const handleSoundToggle = (e) => {
    if (e.type === 'touchstart') e.preventDefault();
    initAudio(); 
    gameState.isMuted = !gameState.isMuted;
    localStorage.setItem('bellinha_muted', gameState.isMuted);
    syncSoundUI();
    
    // Sincronizar música
    toggleMusic(!gameState.isMuted);
};

soundToggle.addEventListener('click', handleSoundToggle);
soundToggle.addEventListener('touchstart', handleSoundToggle, { passive: false });

// Start Game
let loadingInterval;
function startLoadingRotation() {
    let index = 0;
    loadingInterval = setInterval(() => {
        index = (index + 1) % assistantMessages.loadingFrases.length;
        questionText.style.opacity = '0';
        setTimeout(() => {
            questionText.innerText = assistantMessages.loadingFrases[index];
            questionText.style.opacity = '1';
        }, 300);
    }, 1500);
}

startLoadingRotation();

let hasStartedInteraction = false;
const handleStartInteraction = (e) => {
    if (hasStartedInteraction) return;
    
    initAudio(); // Lazy init directly in user handler
    initBackgroundMusic(); // Iniciar música ambiente na primeira interação
    hasStartedInteraction = true;
    
    clearInterval(loadingInterval);
    gameContainer.classList.add('launching');
    
    setTimeout(() => {
        startBtn.style.display = 'none';
        hintBtn.classList.remove('hidden');
        statsBar.classList.remove('hidden');
        gameContainer.classList.remove('launching');
        playSound('start');
        initMission(1);
    }, 600);
};

startBtn.addEventListener('click', handleStartInteraction);
startBtn.addEventListener('touchstart', handleStartInteraction, { passive: false });

// Hint Logic
hintBtn.addEventListener('click', () => {
    if (gameState.hintsAvailable > 0 && hintCard.classList.contains('hidden-hint')) {
        playSound('hint');
        updateAssistant('thinking');
        const q = gameState.missionQuestions[gameState.currentQuestionIndex];
        hintText.innerText = q.h;
        hintCard.classList.remove('hidden-hint');
        gameState.hintsAvailable--;
        gameState.score = Math.max(0, gameState.score - 10);
        updateUI();
    }
});

function initMission(level) {
    gameState.currentMission = level;
    gameState.currentQuestionIndex = 0;
    gameState.correctInMission = 0;
    gameState.hintsAvailable = 2;
    
    // Selecionar 5 perguntas aleatórias sem repetição
    const allQuestions = [...questionsPool[level]];
    gameState.missionQuestions = allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);
        
    missionTitle.innerText = missionTitles[level];
    updateBackground(level);
    updateUI();
    showQuestion();
}

function showQuestion() {
    const q = gameState.missionQuestions[gameState.currentQuestionIndex];
    questionText.innerText = q.q;
    optionsGrid.innerHTML = '';
    hintCard.classList.add('hidden-hint');
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = (e) => handleAnswer(idx, e);
        optionsGrid.appendChild(btn);
    });
    
    // Limpeza total para evitar seleção persistente no mobile
    optionsGrid.style.pointerEvents = 'auto';
    if (document.activeElement) document.activeElement.blur();
    window.getSelection().removeAllRanges();
    
    updateProgress();
}

function handleAnswer(idx, event) {
    const q = gameState.missionQuestions[gameState.currentQuestionIndex];
    const buttons = optionsGrid.querySelectorAll('.option-btn');
    
    // Aplicar blur imediato para evitar estado :focus preso no mobile
    if (event && event.currentTarget) {
        event.currentTarget.blur();
    }
    
    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);
    
    if (idx === q.c) {
        // Correct
        buttons[idx].classList.add('correct');
        gameState.score += (100 * gameState.currentMission);
        gameState.correctInMission++;
        gameState.totalCorrect++;
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) gameState.bestStreak = gameState.streak;
        
        createSuccessEffect(buttons[idx]);
        playSound('correct');
        updateAssistant(true);
    } else {
        // Wrong
        buttons[idx].classList.add('wrong');
        buttons[q.c].classList.add('correct');
        gameState.streak = 0;
        playSound('wrong');
        updateAssistant(false);
    }
    
    // Bloquear interações durante a transição
    optionsGrid.style.pointerEvents = 'none';
    
    setTimeout(() => {
        gameState.currentQuestionIndex++;
        if (gameState.currentQuestionIndex < 5) {
            showQuestion();
        } else {
            finishMission();
        }
    }, 2000);
    
    updateUI();
}

function createSuccessEffect(target) {
    const rect = target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Mix de estrelas e brilhos
    const particlesCount = 12;
    const items = ['⭐', '✨', 'dot'];
    
    for (let i = 0; i < particlesCount; i++) {
        const p = document.createElement('div');
        const type = items[Math.floor(Math.random() * items.length)];
        
        p.className = 'particle';
        if (type === 'dot') {
            p.innerHTML = '<div class="dot-particle"></div>';
        } else {
            p.innerHTML = `<span class="star-particle">${type}</span>`;
        }
        
        p.style.left = `${centerX}px`;
        p.style.top = `${centerY}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * 80 + 40;
        const tx = Math.cos(angle) * dist;
        const ty = Math.sin(angle) * dist;
        const rotate = Math.random() * 360;
        
        document.body.appendChild(p);
        
        p.animate([
            { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: 0 },
            { transform: 'translate(-50%, -50%) scale(1.2) rotate(0deg)', opacity: 1, offset: 0.2 },
            { transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0) rotate(${rotate}deg)`, opacity: 0 }
        ], {
            duration: 800 + Math.random() * 400,
            easing: 'cubic-bezier(0.1, 0.9, 0.2, 1)'
        }).onfinish = () => p.remove();
    }
}

function finishMission() {
    if (gameState.currentMission < 3) {
        showModal(
            "Missão Concluída!",
            `Você acertou ${gameState.correctInMission} de 5 perguntas. <br> Pronta para a próxima missão?`,
            () => {
                hideModal();
                initMission(gameState.currentMission + 1);
            }
        );
    } else {
        showFinalRanking();
    }
}

function showFinalRanking() {
    let rank = "";
    let msg = "";
    
    const totalScore = gameState.score;
    
    if (totalScore >= 1300) {
        rank = "Comandante da Galáxia 🌌";
        msg = "Incrível, Bellinha! Você é uma mestre do universo!";
    } else if (totalScore >= 800) {
        rank = "Exploradora Lunar 🌙";
        msg = "Muito bem! Você já conhece muitos segredos do espaço!";
    } else {
        rank = "Cadete Espacial 🚀";
        msg = "Parabéns por começar sua jornada! Continue estudando as estrelas!";
    }
    
    playSound('victory'); // Som de conquista ao concluir missão
    
    showModal(
        "Fim da Jornada!",
        `Sua pontuação final: <strong>${totalScore}</strong><br><br>Seu Ranking:<br><span style="font-size: 1.5rem; color: #a855f7; font-weight: bold;">${rank}</span><br><br>${msg}`,
        () => {
            location.reload();
        },
        "JOGAR NOVAMENTE"
    );
    hintBtn.classList.add('hidden'); // Hide hint button on final screen
}

// Helpers
function updateUI() {
    scoreValue.innerText = gameState.score.toString().padStart(3, '0');
    hintCountLabel.innerText = gameState.hintsAvailable;
    hintBtn.disabled = gameState.hintsAvailable === 0;
    statCorrect.innerText = gameState.totalCorrect;
    statStreak.innerText = gameState.streak;
    statBestStreak.innerText = gameState.bestStreak;
}

function updateProgress() {
    const p = (gameState.currentQuestionIndex / 5) * 100;
    progressFill.style.width = `${p}%`;
    progressText.innerText = `Pergunta ${gameState.currentQuestionIndex + 1} de 5`;
}

function updateAssistant(type) {
    let msgs;
    if (type === 'thinking') {
        msgs = assistantMessages.thinking;
    } else {
        msgs = type ? assistantMessages.correct : assistantMessages.wrong;
    }
    
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    
    speechBubble.classList.add('fade-out');
    
    setTimeout(() => {
        assistantMsg.innerText = randomMsg;
        speechBubble.classList.remove('fade-out');
    }, 300);
    
    // Robot animation
    const robot = document.getElementById('space-robot');
    robot.style.animation = 'none';
    void robot.offsetWidth; // trigger reflow
    
    let anim;
    if (type === 'thinking') anim = 'float 1s ease-in-out infinite';
    else anim = type ? 'jump 0.5s ease' : 'shake 0.5s ease';
    
    robot.style.animation = anim;
    
    // Add floating back after animation
    if (type !== 'thinking') {
        setTimeout(() => {
            robot.style.animation = 'float 3s ease-in-out infinite';
        }, 500);
    }
}

function showModal(title, body, btnAction, btnText = "CONTINUAR") {
    modalTitle.innerHTML = title;
    modalBody.innerHTML = body;
    modalBtn.innerText = btnText;
    modalBtn.onclick = btnAction;
    overlay.classList.remove('hidden');
}

function hideModal() {
    overlay.classList.add('hidden');
}

// Spaceship logic
function spawnSpaceship() {
    const ship = document.createElement('div');
    ship.className = 'spaceship';
    
    const isLeftToRight = Math.random() > 0.5;
    const yStart = Math.random() * 30 + 55; // 55% - 85%
    const yEnd = Math.random() * 35 + 20;   // 20% - 55%
    
    ship.style.setProperty('--y-start', `${yStart}vh`);
    ship.style.setProperty('--y-end', `${yEnd}vh`);
    
    ship.innerHTML = `
        <div class="spaceship-flame"></div>
        <div class="spaceship-emoji">🚀</div>
    `;
    
    const duration = Math.random() * 3 + 10; // 10s a 13s
    ship.style.animation = `${isLeftToRight ? 'crossSpaceLeftRight' : 'crossSpaceRightLeft'} ${duration}s ease-in-out forwards`;
    
    spaceshipContainer.appendChild(ship);

    // Efeito de estrelinhas na chama do foguete
    const trailInterval = setInterval(() => {
        if (!ship.parentElement) {
            clearInterval(trailInterval);
            return;
        }
        createRocketTrail(ship);
    }, 350);
    
    // Robot reaction
    setTimeout(() => {
        const msgs = assistantMessages.spaceship;
        const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
        
        speechBubble.classList.add('fade-out');
        setTimeout(() => {
            assistantMsg.innerText = randomMsg;
            speechBubble.classList.remove('fade-out');
        }, 300);
    }, duration * 300);

    setTimeout(() => ship.remove(), duration * 1000);
    
    // Schedule next ship
    setTimeout(spawnSpaceship, Math.random() * 27000 + 18000); // 18-45s
}

setTimeout(spawnSpaceship, 2000); // Aparece 2 segundos após carregar

// Starfield generation
function generateStars() {
    const layer = document.getElementById('stars-layer');
    let stars = "";
    for (let i = 0; i < 200; i++) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1;
        const opacity = Math.random();
        stars += `<div style="position:absolute; left:${x}%; top:${y}%; width:${size}px; height:${size}px; background:white; border-radius:50%; opacity:${opacity}; box-shadow: 0 0 ${size}px white;"></div>`;
    }
    layer.innerHTML = stars;
}

generateStars();

// Comet logic
function spawnComet() {
    const comet = document.createElement('div');
    comet.className = 'comet';
    const startX = Math.random() * 50; // top-left area
    comet.style.left = `${startX}%`;
    comet.style.top = `-50px`;
    
    const duration = Math.random() * 4 + 4; // 4-8s
    comet.style.animation = `crossDiagonal ${duration}s linear forwards`;
    
    bgElements.appendChild(comet);
    setTimeout(() => comet.remove(), duration * 1000);
    
    setTimeout(spawnComet, Math.random() * 15000 + 10000); // 10-25s
}

setTimeout(spawnComet, 5000);

// Background Variations
function updateBackground(level) {
    bgElements.innerHTML = '';
    
    if (level === 1) {
        // Planetas
        for (let i = 0; i < 5; i++) {
            const p = document.createElement('div');
            p.className = 'bg-planet';
            const size = Math.random() * 40 + 30;
            p.style.width = `${size}px`;
            p.style.height = `${size}px`;
            p.style.left = `${Math.random() * 90}%`;
            p.style.top = `${Math.random() * 80}%`;
            const colors = ['#f87171', '#fbbf24', '#60a5fa', '#34d399', '#a78bfa'];
            p.style.background = `radial-gradient(circle at 30% 30%, ${colors[i]}, #000)`;
            p.style.animationDelay = `${Math.random() * 5}s`;
            bgElements.appendChild(p);
        }
    } else if (level === 2) {
        // Nebulosas e Estrelas Maiores
        for (let i = 0; i < 3; i++) {
            const n = document.createElement('div');
            n.className = 'bg-nebula';
            n.style.left = `${Math.random() * 70}%`;
            n.style.top = `${Math.random() * 70}%`;
            bgElements.appendChild(n);
        }
    } else {
        // Deep Space
        document.querySelector('.space-background').style.background = 'radial-gradient(circle at center, #0a0f1d 0%, #020408 100%)';
        for (let i = 0; i < 2; i++) {
            const g = document.createElement('div');
            g.className = 'bg-nebula';
            g.style.background = 'radial-gradient(circle, #4c1d95, transparent 70%)';
            g.style.left = `${Math.random() * 80}%`;
            g.style.top = `${Math.random() * 80}%`;
            bgElements.appendChild(g);
        }
    }
}
