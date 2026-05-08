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
        { q: "O que são cometas?", a: ["Estrelas", "Bolas de gelo sujas", "Foguetes", "Nuvens"], c: 1, h: "Têm cauda perto do Sol." },
        { q: "Quem foi o primeiro astronauta brasileiro a ir para o espaço?", a: ["Marcos Pontes", "Santos Dumont", "Astrovaldo Silva", "Paulo Souza"], c: 0, h: "Ele levou a bandeira do Brasil na sua missão em 2006." },
        { q: "Qual é o nome da maior lua do planeta Saturno?", a: ["Titã", "Europa", "Ganimedes", "Io"], c: 0, h: "Tem o nome de gigantes da mitologia e começa com T." },
        { q: "Quantos planetas no Sistema Solar possuem anéis?", a: ["Apenas 1", "2", "4", "Todos"], c: 2, h: "Saturno é o mais famoso, mas Júpiter, Urano e Netuno também têm!" },
        { q: "Como se chama o veículo que os astronautas usam para viajar ao espaço?", a: ["Foguete", "Submarino", "Carro voador", "Helicóptero espacial"], c: 0, h: "Ele decola de uma plataforma e faz muito barulho!" },
        { q: "Qual é o menor planeta do nosso Sistema Solar?", a: ["Mercúrio", "Plutão", "Marte", "Terra"], c: 0, h: "Fica bem pertinho do Sol." },
        { q: "Quem foi o primeiro homem a pisar na Lua, em 1969?", a: ["Neil Armstrong", "Buzz Lightyear", "Yuri Gagarin", "Elon Musk"], c: 0, h: "Ele disse a famosa frase: 'Um pequeno passo para o homem...'" },
        { q: "Qual é o nome do telescópio espacial mais famoso lançado em 1990?", a: ["Hubble", "James Webb", "Galileu", "Kepler"], c: 0, h: "Tem o nome de um astrônomo que descobriu que o Universo está se expandindo." },
        { q: "O que os astronautas usam para respirar no espaço?", a: ["Traje espacial com tanque de oxigênio", "Máscara de mergulho", "Prendedor de nariz", "Nada, dá para respirar normalmente"], c: 0, h: "É aquela roupa branca super pesada." },
        { q: "O que acontece quando a Terra passa pela sombra da Lua?", a: ["Eclipse Solar", "Eclipse Lunar", "Chuva de meteoros", "Noite eterna"], c: 0, h: "A Lua cobre o Sol temporariamente durante o dia." },
        { q: "Como se chama o caminho redondo que um planeta faz ao redor do Sol?", a: ["Órbita", "Estrada espacial", "Linha do Equador", "Gravidade"], c: 0, h: "Começa com a letra Ó." },
        { q: "Qual planeta tem uma cor azul-esverdeada por causa do gás metano?", a: ["Urano", "Marte", "Vênus", "Mercúrio"], c: 0, h: "É o sétimo planeta a partir do Sol." },
        { q: "O que os astronautas comem no espaço?", a: ["Comida desidratada e especial", "Rodízio de pizza", "Hambúrguer comum", "Eles não precisam comer"], c: 0, h: "A comida precisa ser embalada a vácuo para não flutuar pela nave." },
        { q: "Qual planeta do Sistema Solar é conhecido por ter ventos super velozes e cor azul-escura?", a: ["Netuno", "Urano", "Marte", "Júpiter"], c: 0, h: "É o planeta mais distante do Sol." },
        { q: "Qual o nome da agência espacial mais famosa do mundo, que fica nos EUA?", a: ["NASA", "ESA", "AEB", "SpaceX"], c: 0, h: "Suas iniciais significam Administração Nacional do Espaço e da Aeronáutica." },
        { q: "Qual planeta possui duas pequenas luas chamadas Fobos e Deimos?", a: ["Marte", "Júpiter", "Vênus", "Mercúrio"], c: 0, h: "É o planeta vermelho." },
        { q: "Como a Lua brilha à noite se ela não produz luz própria?", a: ["Ela reflete a luz do Sol", "Ela é feita de material fluorescente", "Ela tem lâmpadas giants", "Ela brilha por causa das estrelas ao redor"], c: 0, h: "Pense em um espelho no escuro iluminado por uma lanterna." },
        { q: "Qual o nome do famoso cometa que passa perto da Terra a cada 75-76 anos?", a: ["Cometa Halley", "Cometa Hale-Bopp", "Cometa Borrelly", "Cometa de César"], c: 0, h: "O nome começa com H." },
        { q: "Quantas luas a Terra possui?", a: ["Apenas 1", "2", "3", "Nenhuma"], c: 0, h: "É aquela linda que vemos quase toda noite!" },
        { q: "Como chamamos as pessoas treinadas para viajar em naves espaciais?", a: ["Astronautas", "Pilotos de avião", "Marinheiros", "Cosmólogos"], c: 0, h: "O nome começa com Astro-." },
        { q: "Qual é a força que nos mantém presos ao chão e impede que flutuemos?", a: ["Gravidade", "Vento", "Magnetismo", "Eletricidade"], c: 0, h: "É o que faz a maçã cair da árvore." },
        { q: "Qual planeta é famoso por ser cercado por nuvens muito grossas e amarelas?", a: ["Vênus", "Mercúrio", "Marte", "Urano"], c: 0, h: "É o segundo planeta a partir do Sol." },
        { q: "Onde os astronautas moram e trabalham enquanto estão no espaço?", a: ["Na Estação Espacial Internacional (EEI)", "Em um hotel na Lua", "Em suas próprias naves o tempo todo", "Em Marte"], c: 0, h: "É uma grande estação de pesquisa que orbita a Terra." },
        { q: "Por que as pegadas dos astronautas na Lua vão durar milhões de anos?", a: ["Porque não há vento nem chuva lá", "Porque a poeira lunar é feita de cimento", "Porque eles usaram cola nas botas", "Porque a gravidade é muito forte"], c: 0, h: "Sem atmosfera, não há clima para apagar as pegadas." },
        { q: "Qual o nome do primeiro satélite artificial enviado ao espaço pela humanidade?", a: ["Sputnik 1", "Hubble", "Apollo 11", "Voyager 1"], c: 0, h: "Foi lançado pela União Soviética em 1957." },
        { q: "Qual destes corpos celestes NÃO é considerado um planeta do Sistema Solar?", a: ["Plutão", "Saturno", "Terra", "Urano"], c: 0, h: "Foi reclassificado como planeta anão em 2006." },
        { q: "O que é o Sol?", a: ["Uma estrela", "Um planeta gasoso", "Um asteroide gigante", "Um satélite"], c: 0, h: "Produz calor e luz através de fusão nuclear." },
        { q: "Quanto tempo a Lua leva para dar uma volta completa ao redor da Terra?", a: ["Aproximadamente 27 dias", "365 dias", "1 dia", "7 dias"], c: 0, h: "É quase a duração de um mês." },
        { q: "O que separa os planetas rochosos internos dos gigantes gasosos externos?", a: ["O Cinturão de Asteroides", "Um buraco negro", "Uma parede de gelo", "A órbita de Plutão"], c: 0, h: "Fica entre Marte e Júpiter." },
        { q: "Em qual planeta fica o jipe robô 'Perseverance' atualmente?", a: ["Marte", "Vênus", "Júpiter", "Lua"], c: 0, h: "O jipe explora o Planeta Vermelho." },
        { q: "Qual é o planeta vizinho mais próximo da órbita da Terra em direção ao Sol?", a: ["Vênus", "Marte", "Mercúrio", "Júpiter"], c: 0, h: "É o planeta mais brilhante no céu ao amanhecer ou anoitecer." }
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
        { q: "O que é um 'Púlsar'?", a: ["Planeta", "Estrela que gira rápido", "Luz de neon", "Gás"], c: 1, h: "Emite luz como um farol." },
        { q: "Qual é a velocidade aproximada de escape da Terra para um foguete ir ao espaço?", a: ["11,2 km por segundo", "100 km por hora", "340 metros por segundo", "1.000 km por segundo"], c: 0, h: "É incrivelmente rápida, cerca de 40.000 km/h!" },
        { q: "Como se chama o telescópio espacial lançado em 2021 para substituir o Hubble?", a: ["James Webb", "Kepler", "Galileu", "Chandra"], c: 0, h: "Ele possui espelhos hexagonais banhados a ouro." },
        { q: "O que causa as chamadas 'estrelas cadentes' no céu?", a: ["Poeira e rochas espaciais queimando na atmosfera", "Estrelas de verdade que caem", "Lixo lançado de aviões", "Reflexo da Lua nas nuvens"], c: 0, h: "São meteoroides que entram na nossa atmosfera em alta velocidade." },
        { q: "O que é um ano-bissexto e por que ele existe?", a: ["Para compensar as quase 6 horas extras que a Terra leva para orbitar o Sol", "Porque a Lua muda de órbita", "Para ajustar o relógio do Sol", "Porque o ano fica mais frio"], c: 0, h: "A Terra leva cerca de 365 dias e 6 horas para dar uma volta no Sol." },
        { q: "O que é um vento solar?", a: ["Uma corrente de partículas carregadas lançadas pelo Sol", "O vento comum que sobra quente no verão", "A brisa gerada pelas naves espaciais", "A fumaça que sai do núcleo solar"], c: 0, h: "Ele cria fenômenos incríveis como as Auroras." },
        { q: "Como se chama o lindo efeito de luzes coloridas no céu perto dos polos da Terra?", a: ["Aurora Polar (Boreal/Austral)", "Arco-íris espacial", "Halo solar", "Fogo de Santelmo"], c: 0, h: "É causado pela colisão do vento solar com o campo magnético da Terra." },
        { q: "Qual é o planeta conhecido como o 'gêmeo malvado' da Terra por causa do seu efeito estufa extremo?", a: ["Vênus", "Marte", "Mercúrio", "Saturno"], c: 0, h: "Lá chove ácido sulfúrico e a temperatura derrete chumbo." },
        { q: "Qual planeta do Sistema Solar tem o dia mais curto, durando apenas cerca de 10 horas?", a: ["Júpiter", "Terra", "Urano", "Netuno"], c: 0, h: "É o planeta que gira mais rápido sobre o próprio eixo." },
        { q: "O que é a gravidade na Lua comparada com a da Terra?", a: ["É cerca de 6 vezes menor", "É igual à da Terra", "É 2 vezes maior", "Lá não existe gravidade nenhuma"], c: 0, h: "Por isso os astronautas dão pulos super altos e lentos!" },
        { q: "Qual planeta leva mais de 160 anos terrestres para dar uma única volta completa no Sol?", a: ["Netuno", "Urano", "Saturno", "Júpiter"], c: 0, h: "É o planeta mais distante do Sol atualmente." },
        { q: "De onde vêm a maioria dos cometas que visitam o Sistema Solar?", a: ["Nuvem de Oort e Cinturão de Kuiper", "Do centro do Sol", "De outra galáxia distante", "Do Cinturão de Asteroides"], c: 0, h: "São regiões super geladas nos confins do nosso sistema." },
        { q: "Qual constelação famosa tem o formato de uma cruz e serve para navegação no hemisfério Sul?", a: ["Cruzeiro do Sul", "Ursa Menor", "Cassiopeia", "Centauro"], c: 0, h: "Está estampada na bandeira do Brasil!" },
        { q: "Qual o nome da sonda espacial humana que viajou mais longe de nós no espaço?", a: ["Voyager 1", "Sputnik 1", "Apollo 11", "Curiosity"], c: 0, h: "Lançada em 1977, ela já cruzou a fronteira do Sistema Solar." },
        { q: "Qual planeta possui a maior lua do Sistema Solar, chamada Ganimedes?", a: ["Júpiter", "Saturno", "Urano", "Netuno"], c: 0, h: "É o maior planeta de todos." },
        { q: "Qual é o principal combustível utilizado nos motores dos modernos foguetes espaciais?", a: ["Oxigênio e Hidrogênio líquidos", "Gasolina aditivada", "Carvão especial", "Ar comprimido"], c: 0, h: "Esses elementos quando combinados geram uma enorme explosão de água limpa." },
        { q: "Como se chama o ponto onde a gravidade de um buraco negro é tão forte que nem a luz escapa?", a: ["Horizonte de Eventos", "Singularidade", "Núcleo escuro", "Zona de silêncio"], c: 0, h: "É conhecido como a 'borda' ou o ponto de não retorno." },
        { q: "O que é uma 'Anã Branca'?", a: ["O resto morno de uma estrela de tamanho médio como o Sol", "Um pequeno planeta congelado", "Uma estrela recém-nascida", "Um asteroide brilhante"], c: 0, h: "É o destino final do nosso Sol quando ele esgotar seu combustível." },
        { q: "O que aconteceria com um relógio perto de um corpo com gravidade extrema (como um buraco negro)?", a: ["O tempo passaria mais devagar para ele", "O tempo passaria muito mais rápido", "O tempo correria ao contrário", "O relógio pararia de funcionar de vez"], c: 0, h: "Esse efeito incrível é chamado de dilatação do tempo pela gravidade." },
        { q: "Como se formam os eclipses lunares?", a: ["A Terra fica exatamente entre o Sol e a Lua", "A Lua fica entre a Terra e o Sol", "O Sol passa atrás da Lua", "Uma nuvem escura cobre a Lua"], c: 0, h: "A sombra da Terra é projetada diretamente sobre a superfície da Lua." },
        { q: "Qual foi a primeira sonda a tirar fotos de perto do planeta anão Plutão em 2015?", a: ["New Horizons", "Voyager 2", "Cassini", "Pioneer 10"], c: 0, h: "O nome significa 'Novos Horizontes' em inglês." },
        { q: "Qual planeta tem uma densidade tão baixa que poderia flutuar se houvesse uma banheira gigante?", a: ["Saturno", "Júpiter", "Urano", "Netuno"], c: 0, h: "É feito principalmente de gases leves e gelo." },
        { q: "Quantas pessoas já pisaram na Lua até hoje?", a: ["12 pessoas", "Apenas 2", "Mais de 50", "Nenhuma"], c: 0, h: "Todas foram astronautas das missões Apollo entre 1969 e 1972." },
        { q: "O que é uma 'chuva de meteoros'?", a: ["Quando a Terra passa pelo rastro de poeira deixado por um cometa", "Quando estrelas colidem no espaço", "Nuvens que chovem pedras", "Uma tempestade elétrica no espaço"], c: 0, h: "Os pequenos pedacinhos queimam ao entrar em nossa atmosfera." },
        { q: "Qual a diferença entre um meteoroide, um meteoro e um meteorito?", a: ["O meteorito é o pedaço de rocha que consegue atingir o chão da Terra", "O meteoro é o pedaço de rocha no espaço", "Meteoroide é o brilho no céu", "São todos exatamente a mesma coisa"], c: 0, h: "O 'ito' no final lembra que ele virou uma pedrinha que caiu no solo." },
        { q: "Qual planeta possui ventos de até 2.100 km/h, os mais rápidos do Sistema Solar?", a: ["Netuno", "Júpiter", "Saturno", "Marte"], c: 0, h: "É o planeta azul mais distante do Sol." },
        { q: "O que é a 'Zona Habitável' ao redor de uma estrela?", a: ["A distância onde a temperatura permite água líquida na superfície do planeta", "A região onde vivem os astronautas", "O centro quente da própria estrela", "Apenas a atmosfera da Terra"], c: 0, h: "É a zona onde a vida como conhecemos tem chances de existir." },
        { q: "Quem foi o astrônomo que primeiro usou a luneta para observar as luas de Júpiter em 1610?", a: ["Galileu Galilei", "Isaac Newton", "Albert Einstein", "Copérnico"], c: 0, h: "Ele é considerado o pai da astronomia observacional moderna." },
        { q: "Qual planeta tem o maior desfiladeiro do Sistema Solar, o Valles Marineris?", a: ["Marte", "Terra", "Vênus", "Mercúrio"], c: 0, h: "Ele rasga a superfície do Planeta Vermelho." },
        { q: "Por que as estrelas cintilam ou parecem 'piscar' quando olhamos para o céu à noite?", a: ["Por causa das turbulências na atmosfera da Terra", "Porque elas apagam e acendem sozinhas", "Por causa da poeira espacial passando na frente", "É um efeito óptico dos nossos olhos"], c: 0, h: "No vácuo do espaço, elas brilham de forma constante." },
        { q: "Como se chama o satélite natural que orbita o planeta Marte e tem formato de batata?", a: ["Fobos", "Titã", "Europa", "Caronte"], c: 0, h: "O nome significa 'medo' e seu irmão é Deimos." },
        { q: "Qual planeta do Sistema Solar tem o maior número de vulcões ativos e inativos?", a: ["Vênus", "Terra", "Marte", "Júpiter"], c: 0, h: "Sua superfície é cheia de rios de lava e calor infernal." },
        { q: "O que é uma estrela de nêutrons?", a: ["O núcleo super compacto que resta após a explosão de uma estrela gigante", "Uma estrela feita de poeira e água", "Uma estrela de tamanho médio como o Sol", "Um planeta gasoso que brilha"], c: 0, h: "Uma colher de chá dessa estrela pesaria bilhões de toneladas!" },
        { q: "Como se chama a maior montanha conhecida do Sistema Solar e onde ela fica?", a: ["Monte Olimpo, em Marte", "Monte Everest, na Terra", "Mauna Kea, no Havaí", "Mons Huygens, na Lua"], c: 0, h: "É um vulcão extinto três vezes mais alto que o Everest." },
        { q: "Por que o planeta Marte é avermelhado?", a: ["Por causa da grande quantidade de ferrugem (óxido de ferro) em seu solo", "Porque ele é feito de lava quente", "Porque reflete a luz vermelha do Sol", "Por causa de plantas vermelhas gigantes"], c: 0, h: "Sua poeira contém ferro oxidado." },
        { q: "O que é o Cinturão de Kuiper?", a: ["Uma região gelada além de Netuno cheia de cometas e planetas anões", "A linha de anéis que envolve Júpiter", "A região entre a Terra e a Lua", "Uma constelação em formato de cinto"], c: 0, h: "É onde Plutão e outros mundos gelados moram." },
        { q: "O que mantém a atmosfera presa ao redor da Terra?", a: ["A força da gravidade da própria Terra", "As nuvens pesadas", "O magnetismo dos polos", "O calor do Sol"], c: 0, h: "Sem essa força puxando o ar para baixo, ele escaparia para o espaço." },
        { q: "Como se chama a grande nuvem esférica de cometas que fica nos limites extremos do Sistema Solar?", a: ["Nuvem de Oort", "Nuvem de Magalhães", "Cinturão de Kuiper", "Nebulosa de Órion"], c: 0, h: "É a última fronteira gravitacional do nosso sistema." },
        { q: "O que é a 'luz cinérea' da Lua?", a: ["O brilho fraco na parte escura da Lua causado pela luz do Sol refletida pela Terra", "A luz das estrelas que bate na Lua", "O brilho interno das rochas da Lua", "Uma ilusão causada por telescópios"], c: 0, h: "Também é conhecida como o brilho da Terra na Lua." },
        { q: "Por que não ouvimos barulho de explosões no espaço sideral?", a: ["Porque o som precisa de ar (ou matéria) para se propagar e lá é vácuo", "Porque as explosões são silenciosas lá", "Porque os astronautas usam protetores de ouvido", "Porque a gravidade abafa o som"], c: 0, h: "Sem moléculas para vibrar, não há som." },
        { q: "Quantos minutos aproximadamente a luz do Sol leva para chegar até a Terra?", a: ["Cerca de 8 minutos", "Menos de 1 segundo", "24 horas", "1 hora"], c: 0, h: "Se o Sol apagasse agora, só saberíamos após esse tempo." },
        { q: "Qual planeta gira em torno do Sol em apenas 88 dias terrestres?", a: ["Mercúrio", "Vênus", "Marte", "Terra"], c: 0, h: "É o planeta mais rápido do Sistema Solar." },
        { q: "O que é um eclipse solar anular ou 'anel de fogo'?", a: ["Quando a Lua cobre o centro do Sol, deixando apenas um anel brilhante visível", "Quando o Sol explode em formato de anel", "Quando Saturno passa na frente do Sol", "Quando a Terra faz um círculo na Lua"], c: 0, h: "Acontece quando a Lua está um pouco mais distante da Terra e parece menor." },
        { q: "Qual o nome da sonda que pousou com sucesso em um cometa em 2014?", a: ["Rosetta (e o pousador Philae)", "Voyager 1", "Curiosity", "New Horizons"], c: 0, h: "Ela seguiu o cometa 67P por vários anos." },
        { q: "Qual a temperatura aproximada na superfície do Sol?", a: ["5.500 graus Celsius", "100 graus Celsius", "1 milhão de graus Celsius", "0 graus Celsius"], c: 0, h: "É muito quente, mas o núcleo dele é ainda mais quente (15 milhões °C)!" },
        { q: "O que é um asteroide?", a: ["Uma rocha espacial que orbita o Sol, menor que um planeta", "Uma estrela antiga que perdeu o brilho", "Um planeta gasoso em formação", "Um pedaço de gelo que brilha"], c: 0, h: "A maioria fica concentrada entre Marte e Júpiter." },
        { q: "Qual o nome da primeira mulher a viajar para o espaço, em 1963?", a: ["Valentina Tereshkova", "Sally Ride", "Amelia Earhart", "Marie Curie"], c: 0, h: "Ela era uma cosmonauta soviética." },
        { q: "O que é o vento solar e como ele afeta os cometas?", a: ["Ele sopra a cauda do cometa sempre na direção oposta ao Sol", "Ele empurra o cometa para fora do Sistema Solar", "Ele derrete o cometa instantaneamente", "Ele faz o cometa brilhar de verde"], c: 0, h: "A cauda de poeira e gás aponta sempre para longe da nossa estrela." },
        { q: "Qual planeta possui a órbita mais circular de todos no Sistema Solar?", a: ["Vênus", "Marte", "Mercúrio", "Terra"], c: 0, h: "Sua órbita é quase um círculo perfeito." },
        { q: "O que é um 'Ano Galáctico'?", a: ["O tempo que o Sistema Solar leva para dar uma volta na Via Láctea", "O tempo de vida de uma galáxia", "A distância entre duas galáxias", "Um ano no planeta Júpiter"], c: 0, h: "Leva cerca de 230 milhões de anos terrestres!" },
        { q: "Por que Vênus é mais quente que Mercúrio, se Mercúrio está mais perto do Sol?", a: ["Porque a atmosfera de Vênus retém o calor com um forte efeito estufa", "Porque Vênus tem mais vulcões acesos", "Porque Vênus é muito maior", "Porque Mercúrio é feito de gelo"], c: 0, h: "Nuvens grossas de gás carbônico seguram o calor do Sol." },
        { q: "O que é o magnetismo da Terra e por que ele é importante?", a: ["Ele cria um escudo que nos protege das radiações perigosas do Sol", "Ele faz os objetos caírem no chão", "Ele atrai asteroides de ferro para longe", "Ele mantém as nuvens no céu"], c: 0, h: "Graças a ele, as bússolas funcionam e temos vida na Terra." },
        { q: "Qual a maior lua do planeta Netuno que orbita no sentido contrário ao giro do planeta?", a: ["Tritão", "Titã", "Caronte", "Europa"], c: 0, h: "O nome lembra o tridente do deus dos mares." },
        { q: "Qual o planeta anão que tem o formato oval (parecendo um ovo ou bola de futebol americano)?", a: ["Haumea", "Makemake", "Ceres", "Éris"], c: 0, h: "Gira tão rápido que ficou achatado nos polos." },
        { q: "Qual o nome da maior planície de gelo em formato de coração em Plutão?", a: ["Tombaugh Regio (Coração de Plutão)", "Planície Sputnik", "Montes Hillary", "Vale de Gelo"], c: 0, h: "Descoberta pela sonda New Horizons em 2015." },
        { q: "O que são as manchas solares?", a: ["Áreas ligeiramente mais frias na superfície do Sol causadas por magnetismo", "Buracos na superfície do Sol de onde sai fumaça", "Sombras projetadas pelas luas", "Sujeira que acumula na lente do telescópio"], c: 0, h: "Elas parecem pretas porque brilham menos que o resto do Sol." },
        { q: "Quantos planetas anões oficiais existem atualmente no Sistema Solar?", a: ["5", "1", "10", "Mais de 50"], c: 0, h: "São eles: Ceres, Plutão, Haumea, Makemake e Éris." },
        { q: "Qual lua de Júpiter é coberta de gelo e possui um oceano líquido subterrâneo?", a: ["Europa", "Io", "Calisto", "Ganimedes"], c: 0, h: "Eles têm água líquida por baixo da crosta de gelo." },
        { q: "Qual lua de Júpiter é cheia de vulcões ativos e lagos de enxofre líquido?", a: ["Io", "Europa", "Ganimedes", "Calisto"], c: 0, h: "É o corpo celeste com maior atividade vulcânica do Sistema Solar." },
        { q: "Como se chama o telescópio espacial lançado para caçar exoplanetas parecidos com a Terra?", a: ["Kepler", "Hubble", "Chandra", "Spitzer"], c: 0, h: "Descobriu milhares de planetas fora do Sistema Solar." },
        { q: "O que é uma 'Superlua'?", a: ["Quando a Lua está cheia e no ponto mais próximo da Terra", "Uma lua duas vezes maior que o normal", "A colisão de duas luas", "Quando a Lua fica azul brilhante"], c: 0, h: "Ela aparece até 14% maior e 30% mais brilhante no céu." }
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
        { q: "Temperatura do espaço profundo?", a: ["0C", "-100C", "-270C", "-500C"], c: 2, h: "Quase o zero absoluto." },
        { q: "Qual o nome do superaglomerado de galáxias onde fica a Via Láctea?", a: ["Laniakea", "Virgem", "Grupo Local", "Andrômeda"], c: 0, h: "Significa 'céu imensurável' em havaiano." },
        { q: "O que é o efeito de espaguetificação?", a: ["O que acontece com um objeto sendo esticado pela gravidade de um buraco negro", "O cozimento de massas na Estação Espacial", "A forma como as galáxias espirais se formam", "O rastro que os cometas deixam no espaço"], c: 0, h: "A força gravitacional nos seus pés seria muito maior que na cabeça!" },
        { q: "O que aconteceria se duas galáxias colidissem no espaço?", a: ["Elas se fundiriam e as estrelas dificilmente bateriam uma na outra", "Elas explodiriam instantaneamente", "As estrelas colidiriam todas de uma vez", "Uma galáxia engoliria a outra sem alterar nada"], c: 0, h: "O espaço entre as estrelas é tão vasto que colisões diretas seriam extremamente raras." },
        { q: "O que é um exoplaneta 'Júpiter Quente'?", a: ["Um gigante gasoso que orbita muito perto de sua estrela", "Um planeta feito de fogo líquido", "O planeta Júpiter durante o verão", "Um planeta pequeno e rochoso perto do Sol"], c: 0, h: "Orbita sua estrela in poucos dias e é extremamente quente." },
        { q: "O que é a Teoria da Relatividade Geral de Einstein de forma bem simples?", a: ["Que a gravidade é a deformação do espaço-tempo causada pela massa", "Que tudo no universo se move na mesma velocidade", "Que o tempo passa igual em todo o universo", "Que os buracos negros são portais para outros mundos"], c: 0, h: "Imagine uma bola de boliche pesada esticando um lençol elástico." },
        { q: "Como os astrônomos conseguiram tirar a primeira foto real de um buraco negro em 2019?", a: ["Usando uma rede de radiotelescópios espalhados pela Terra como um espelho gigante", "Enviando uma sonda para tirar foto bem de pertinho", "Usando o zoom do telescópio Hubble", "Foi uma imagem desenhada por computador sem dados reais"], c: 0, h: "O projeto se chama Event Horizon Telescope (EHT)." },
        { q: "O que é a 'Morte Térmica' ou 'Grande Congelamento' do Universo?", a: ["Uma teoria onde o Universo se expande até ficar sem calor e energia", "Quando o Sol se apaga e a Terra congela", "Uma era glacial que ocorre nas galáxias espirais", "O congelamento instantâneo de um cometa"], c: 0, h: "A expansão contínua afasta tudo até que nenhuma nova estrela possa nascer." },
        { q: "Como se chama o tipo de planeta que vaga sozinho pelo espaço sem orbitar nenhuma estrela?", a: ["Planeta órfão ou errante", "Planeta fantasma", "Exoplaneta invisível", "Asteroide gigante"], c: 0, h: "Eles foram expulsos de seus sistemas originais pela gravidade." },
        { q: "O que é o desvio para o vermelho (redshift) na luz das galáxias?", a: ["A prova de que as galáxias estão se afastando e o universo se expandindo", "Quando uma estrela fica vermelha por estar morrendo", "A poeira espacial mudando a cor da luz", "Uma ilusão dos telescópios antigos"], c: 0, h: "As ondas de luz se esticam conforme a galáxia se afasta, mudando para tons vermelhos." },
        { q: "Qual a diferença entre a matéria normal e a antimatéria?", a: ["As partículas de antimatéria têm a mesma massa mas carga elétrica oposta", "A antimatéria é invisível e não tem peso", "A antimatéria é feita de energia pura sem átomos", "A antimatéria só existe dentro de buracos negros"], c: 0, h: "Se matéria e antimatéria se tocarem, elas se aniquilam e viram pura energia." }
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

// Singleton para o jingle de vitória
window.victoryJingleInstance = null;

function initVictoryJingle() {
    if (window.victoryJingleInstance) return;
    
    console.log("Criando instância do jingle de vitória...");
    // Usando URL externa (Mixkit - Success/Win)
    const jingleUrl = 'https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3';
    window.victoryJingleInstance = new Audio(jingleUrl);
    window.victoryJingleInstance.volume = 0.5;
}

function playVictoryJingle() {
    if (!window.victoryJingleInstance || gameState.isMuted) {
        console.log('Jingle de vitória ignorado (mutado ou não inicializado)');
        return;
    }

    console.log('Tentando tocar jingle de missão concluída');
    try {
        window.victoryJingleInstance.currentTime = 0;
        window.victoryJingleInstance.play().catch(error => {
            console.warn('Erro ao tocar jingle de missão concluída:', error);
        });
    } catch (error) {
        console.warn('Erro ao tocar jingle de missão concluída:', error);
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
    
    // Aplicar blur imediato para evitar transferência de foco
    if (e && e.currentTarget) e.currentTarget.blur();
    
    initAudio(); // Lazy init directly in user handler
    initBackgroundMusic(); // Iniciar música ambiente na primeira interação
    initVictoryJingle(); // Iniciar jingle de vitória
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
    
    // Limpeza profunda antes de renderizar novas alternativas
    if (document.activeElement) document.activeElement.blur();
    optionsGrid.innerHTML = '';
    hintCard.classList.add('hidden-hint');
    
    q.a.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.disabled = false; // Garantir que comece habilitado e sem classes extras
        btn.onclick = (e) => handleAnswer(idx, e);
        optionsGrid.appendChild(btn);
    });
    
    // Garantir que o foco não seja capturado automaticamente pelo primeiro botão (comum no iOS)
    requestAnimationFrame(() => {
        optionsGrid.style.pointerEvents = 'auto';
        if (document.activeElement) document.activeElement.blur();
        window.getSelection().removeAllRanges();
    });
    
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
    // Tocar jingle de vitória ao concluir a missão
    playVictoryJingle();

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
    
    // Tocar jingle de vitória no ranking final também
    playVictoryJingle();
    
    playSound('victory'); // Mantém o som sintetizado como camada extra ou fallback
    
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

// Ocultar Loading Screen após carregamento completo
window.addEventListener('load', () => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('loaded');
        // Remover do DOM após a transição para economizar recursos
        setTimeout(() => loader.remove(), 1000);
    }
});
