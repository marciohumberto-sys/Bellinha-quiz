const questionsPool = {
    1: [ // Missão 1: Sistema Solar (Smart/Curioso)
        { q: "Qual é o vulcão mais alto do Sistema Solar e onde se localiza?", a: ["Mons Huygens, na Lua", "Monte Everest, na Terra", "Monte Olimpo, em Marte", "Mauna Kea, no Havaí"], c: 2, h: "É um vulcão extinto três vezes mais alto que o Everest." },
        { q: "Por que Vênus é o planeta mais quente, mesmo não sendo o mais próximo do Sol?", a: ["Ele tem mais vulcões acesos", "Sua atmosfera retém calor num forte efeito estufa", "Ele é feito inteiramente de lava", "Ele reflete mais luz solar"], c: 1, h: "Nuvens grossas de CO2 seguram o calor como um cobertor grosso." },
        { q: "Um dia em Vênus é mais longo que o seu ano. O que isso significa?", a: ["O Sol brilha mais forte lá", "Ele orbita o Sol muito rápido", "Ele gira muito devagar em torno de si mesmo", "Vênus não possui estações do ano"], c: 2, h: "O movimento de rotação dele é extremamente lento." },
        { q: "Qual característica única define o eixo de rotação do planeta Urano?", a: ["Ele gira deitado, inclinado quase 90 graus", "Ele gira de pé perfeitamente reto", "Ele não realiza rotação", "Ele gira para frente e para trás"], c: 0, h: "Parece uma bola rolando na sua órbita." },
        { q: "A 'Grande Mancha Vermelha' no planeta Júpiter é na verdade o quê?", a: ["Uma montanha de ferro", "Uma tempestade gigante maior que a Terra", "Uma grande poça de lava líquida", "O reflexo do Sol"], c: 1, h: "É um furacão que dura há pelo menos 300 anos!" },
        { q: "Qual planeta tem densidade tão baixa que flutuaria se houvesse uma banheira gigante?", a: ["Júpiter", "Netuno", "Urano", "Saturno"], c: 3, h: "Apesar de enorme, é feito de gases muito leves." },
        { q: "Onde se localiza o Cinturão de Asteroides no nosso Sistema Solar?", a: ["Entre Marte e Júpiter", "Entre a Terra e a Lua", "Depois de Netuno", "Perto do Sol"], c: 0, h: "Fica entre o planeta vermelho e o gigante gasoso." },
        { q: "O que aconteceria com seu peso se você pudesse pisar na superfície da Lua?", a: ["Ficaria exatamente igual", "Aumentaria muito", "Ele diminuiria bastante", "Você pesaria zero, flutuando"], c: 2, h: "A gravidade lá é cerca de seis vezes menor que na Terra." },
        { q: "Por que vemos sempre a mesma face da Lua voltada para a Terra?", a: ["A Lua não gira no próprio eixo", "Sua rotação está sincronizada com sua translação", "O Sol só ilumina um lado", "A Terra não permite que ela gire"], c: 1, h: "Ela leva o mesmo tempo para girar em torno de si e da Terra." },
        { q: "Qual lua de Saturno é famosa por possuir lagos e rios de metano líquido?", a: ["Europa", "Ganimedes", "Encélado", "Titã"], c: 3, h: "É a única lua com uma atmosfera densa e espessa." },
        { q: "Quantos planetas do nosso Sistema Solar possuem sistemas de anéis?", a: ["Apenas Saturno", "Dois: Saturno e Urano", "Quatro: Júpiter, Saturno, Urano e Netuno", "Todos os oito"], c: 2, h: "Saturno é o mais visível, mas os gigantes gasosos também têm." },
        { q: "A cauda de um cometa sempre aponta para qual direção no espaço?", a: ["Sempre na direção oposta ao Sol", "Na direção do movimento do cometa", "Aponta sempre para a Terra", "Para o centro da galáxia"], c: 0, h: "O vento solar empurra o material para longe da estrela." },
        { q: "Qual é a principal diferença na composição de um Cometa e um Asteroide?", a: ["Asteroides brilham, cometas não", "Cometas são ricos em gelo; Asteroides em rocha/metal", "Cometas são maiores que asteroides", "Eles são exatamente a mesma coisa"], c: 1, h: "Cometas costumam ser apelidados de 'bolas de gelo sujas'." },
        { q: "O que causa as diferentes estações do ano (verão, inverno) no nosso planeta?", a: ["A distância da Terra ao Sol", "O calor da Lua", "A atividade das manchas solares", "A inclinação do eixo da Terra"], c: 3, h: "Durante o ano, um hemisfério recebe mais luz direta que o outro." },
        { q: "Qual planeta possui duas pequenas luas chamadas Fobos (Medo) e Deimos (Pânico)?", a: ["Vênus", "Marte", "Júpiter", "Mercúrio"], c: 1, h: "É o planeta vermelho da nossa vizinhança." },
        { q: "Do que são feitos principalmente os brilhantes anéis do planeta Saturno?", a: ["Pedaços de gelo de água e rocha", "Gases coloridos ardentes", "Fios de ouro e diamante", "Lava solidificada"], c: 0, h: "São bilhões de pedacinhos orbitando o planeta." },
        { q: "Qual lua de Júpiter possui uma crosta congelada escondendo um vasto oceano?", a: ["Io", "Europa", "Calisto", "Caronte"], c: 1, h: "É um dos lugares mais promissores para busca de vida microscópica." },
        { q: "Por que o planeta Marte possui uma coloração avermelhada característica?", a: ["Ele reflete a luz vermelha do Sol", "Ele é feito de rocha derretida quente", "Presença de óxido de ferro (ferrugem) no solo", "Coberto por desertos de areia rosa"], c: 2, h: "O ferro na poeira marciana oxidou com o tempo." },
        { q: "O que é o Cinturão de Kuiper, localizado nos confins do sistema?", a: ["O espaço entre as galáxias", "Uma nuvem de estrelas jovens", "A órbita dos satélites artificiais", "Região gelada com planetas anões além de Netuno"], c: 3, h: "É onde residem Plutão, Eris e outros mundos gelados." },
        { q: "Se alinhássemos todos os planetas do sistema solar lado a lado...", a: ["Seriam maiores que o próprio Sol", "Eles caberiam no espaço entre a Terra e a Lua", "Cruzariam a Via Láctea inteira", "Não caberiam no nosso sistema"], c: 1, h: "O espaço entre nós e a Lua é incrivelmente vasto!" },
        { q: "Qual planeta leva o menor tempo para orbitar o Sol (apenas 88 dias)?", a: ["Mercúrio", "Vênus", "Marte", "Netuno"], c: 0, h: "Por estar mais próximo da nossa estrela, viaja muito rápido." },
        { q: "Qual objeto do sistema solar contém 99,8% de toda a massa do sistema?", a: ["Júpiter", "O Sol", "O Buraco Negro central", "A soma de todos os planetas"], c: 1, h: "Ele é tão pesado que domina todo o resto ao redor." },
        { q: "O que protege a Terra das radiações e ventos solares perigosos?", a: ["O campo magnético da Terra", "A camada de nuvens", "A distância da Lua", "O anel de asteroides"], c: 0, h: "Age como um escudo invisível gerado pelo nosso núcleo de ferro." },
        { q: "Qual planeta possui o maior sistema de cânions, o 'Valles Marineris'?", a: ["Vênus", "Terra", "Mercúrio", "Marte"], c: 3, h: "É muito maior e mais profundo que o Grand Canyon terrestre." },
        { q: "Qual é o nome da maior lua de todo o Sistema Solar, maior até que Mercúrio?", a: ["Ganimedes (de Júpiter)", "Titã (de Saturno)", "Lua (da Terra)", "Tritão (de Netuno)"], c: 0, h: "Pertence ao maior planeta de todos." },
        { q: "Qual planeta gira no sentido oposto da maioria dos outros?", a: ["Terra", "Vênus", "Júpiter", "Marte"], c: 1, h: "Lá, o Sol nasceria no Oeste e se poria no Leste." },
        { q: "Qual lua de Júpiter é o objeto vulcânico mais ativo do Sistema Solar?", a: ["Europa", "Io", "Calisto", "Lua"], c: 1, h: "Tem centenas de vulcões expelindo enxofre constantemente." },
        { q: "Como os astrônomos classificam planetas como a Terra, Marte e Vênus?", a: ["Planetas Rochosos", "Gigantes Gasosos", "Estrelas Fracassadas", "Planetas Anões"], c: 0, h: "Eles possuem superfícies sólidas onde podemos pousar." },
        { q: "Qual planeta tem os ventos mais velozes do sistema, chegando a 2.100 km/h?", a: ["Marte", "Júpiter", "Terra", "Netuno"], c: 3, h: "É o mundo azul mais distante do Sol." },
        { q: "Qual o nome da misteriosa nuvem esférica de cometas nos limites do sistema?", a: ["Nuvem de Magalhães", "Nuvem de Oort", "Cinturão de Kuiper", "Nebulosa Solar"], c: 1, h: "É considerada a borda gravitacional do Sistema Solar." }
    ],
    2: [ // Missão 2: Estrelas e Exploração (Inteligente)
        { q: "Qual é a cor de uma estrela com a temperatura de superfície mais alta?", a: ["Vermelho", "Azul", "Amarelo", "Preto"], c: 1, h: "Pense na parte mais quente da chama de um fogão." },
        { q: "O que gera o brilho e o calor incríveis no centro das estrelas?", a: ["Fusão nuclear de átomos", "Queima de carvão e gás", "Atrito de meteoros", "Eletricidade das nuvens"], c: 0, h: "Átomos de hidrogênio se unem para formar hélio liberando energia." },
        { q: "Como chamamos o imenso berçário de gás e poeira onde novas estrelas nascem?", a: ["Buraco Negro", "Galáxia", "Nebulosa", "Supernova"], c: 2, h: "São nuvens moleculares interestelares." },
        { q: "O que mede exatamente o conceito de um 'Ano-Luz' na astronomia?", a: ["Distância percorrida pela luz em um ano", "Tempo que a luz leva para apagar", "A idade exata de uma estrela", "A velocidade de uma nave espacial"], c: 0, h: "É uma medida de comprimento, não de tempo." },
        { q: "Qual telescópio, lançado em 2021, enxerga o passado do universo em infravermelho?", a: ["Hubble", "Galileu", "Kepler", "James Webb"], c: 3, h: "Possui espelhos hexagonais folheados a ouro." },
        { q: "Quem proferiu a frase 'A Terra é azul', sendo o primeiro humano no espaço?", a: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Marcos Pontes"], c: 1, h: "Foi um cosmonauta soviético em 1961." },
        { q: "O que é uma Supernova e por que ela é importante?", a: ["Um planeta pegando fogo", "O nascimento de uma estrela", "Explosão de estrela que espalha elementos químicos", "Uma estrela caindo na Terra"], c: 2, h: "Cria os elementos pesados que formam o nosso corpo." },
        { q: "O que são os Pulsares conhecidos no universo profundo?", a: ["Estrelas de nêutrons que giram e emitem rádio", "Planetas que piscam luz", "Batimentos do coração do sol", "Buracos negros pequenos"], c: 0, h: "Funcionam como faróis cósmicos ultra-rápidos." },
        { q: "Qual espaçonave humana viajou a maior distância da Terra até hoje?", a: ["Apollo 11", "Sputnik", "Voyager 1", "Space Shuttle"], c: 2, h: "Lançada em 1977, já está no espaço interestelar." },
        { q: "O que causa o lindo efeito das Auroras (Boreais e Austrais)?", a: ["Reflexo do sol na neve dos polos", "Poluição luminosa das cidades", "Nuvens de gelo na alta atmosfera", "Vento solar atingindo o campo magnético"], c: 3, h: "Partículas carregadas colidem com gases da atmosfera." },
        { q: "Quanto tempo, aproximadamente, a luz solar leva para chegar na Terra?", a: ["Cerca de 8 minutos", "1 segundo", "24 horas", "Imediatamente"], c: 0, h: "O Sol está a 150 milhões de quilômetros de distância." },
        { q: "O que restará do nosso Sol quando ele esgotar seu combustível no futuro?", a: ["Uma Anã Branca", "Um Buraco Negro", "Uma Estrela de Nêutrons", "Ele explodirá em supernova"], c: 0, h: "Estrelas de massa média encolhem num núcleo denso e morno." },
        { q: "Qual é o nome da estrela mais próxima de nós, além do nosso Sol?", a: ["Sirius", "Betelgeuse", "Próxima Centauri", "Polaris"], c: 2, h: "Fica a cerca de 4,2 anos-luz de distância." },
        { q: "As constelações são desenhos no céu feitos de estrelas que...", a: ["Parecem próximas mas estão longe entre si", "Estão todas juntas num mesmo grupo", "São planetas vizinhos brilhando", "Giram juntas no espaço"], c: 0, h: "É uma ilusão de perspectiva vista aqui da Terra." },
        { q: "Como chamamos um planeta que orbita outra estrela fora do Sistema Solar?", a: ["Estrela falha", "Exoplaneta", "Planetoide", "Cometa interestelar"], c: 1, h: "O prefixo 'exo-' significa fora." },
        { q: "O que significa dizer que um planeta está na 'Zona Habitável'?", a: ["Lá tem oxigênio para respirar", "A distância permite água líquida na superfície", "É seguro para naves pousarem", "O planeta tem o mesmo tamanho da Terra"], c: 1, h: "Não é nem muito quente, nem muito frio." },
        { q: "Qual o nome da maior estação espacial tripulada orbitando a Terra?", a: ["Estação MIR", "Skylab", "Estação Lunar Gateway", "EEI (Estação Espacial Internacional)"], c: 3, h: "Laboratório gigante onde moram astronautas de vários países." },
        { q: "Por que não ouvimos explosões no vácuo do espaço sideral?", a: ["Nossa audição congela no espaço", "O som precisa de matéria para se propagar", "As explosões são silenciosas lá", "A gravidade suga o som"], c: 1, h: "Sem ar ou átomos para vibrar, não há transmissão de ondas sonoras." },
        { q: "O que é uma Estrela de Nêutrons, formada após uma supernova?", a: ["Uma nuvem rala de gás e poeira", "Uma estrela feita de água e gelo", "Um novo planeta gasoso", "Objeto incrivelmente denso e compacto"], c: 3, h: "Uma colher de chá dela pesaria bilhões de toneladas!" },
        { q: "Qual constelação contém as 'Três Marias' formando o cinturão de um caçador?", a: ["Órion", "Cruzeiro do Sul", "Escorpião", "Ursa Maior"], c: 0, h: "É uma das constelações mais fáceis de ver no verão brasileiro." },
        { q: "O que um astrônomo descobre ao usar a 'Espectroscopia'?", a: ["A distância usando réguas lasers", "A composição química da estrela pela luz", "O peso do planeta usando balanças", "A idade do telescópio usado"], c: 1, h: "Luzes diferentes indicam elementos como hidrogênio ou hélio." },
        { q: "O que acontece quando um meteoroide queima na atmosfera e vemos um brilho?", a: ["Vira um Cometa", "Vira um Meteoro (Estrela Cadente)", "Vira uma Supernova", "Ocorre um Eclipse"], c: 1, h: "O atrito com o ar gera calor e o brilho luminoso." },
        { q: "O que é a 'Velocidade de Escape' que um foguete precisa atingir?", a: ["A velocidade mínima para vencer a gravidade", "A velocidade da luz no vácuo", "A velocidade do som no ar", "O tempo de decolagem"], c: 0, h: "Para sair da Terra são cerca de 11,2 km/s ou 40.000 km/h." },
        { q: "Qual é a função principal do escudo de calor das cápsulas espaciais?", a: ["Evitar que queime na reentrada atmosférica", "Proteger contra o frio do espaço", "Manter a temperatura dos motores", "Refletir a luz solar forte"], c: 0, h: "O atrito com a atmosfera na volta gera temperaturas de milhares de graus." },
        { q: "O que mantém as estrelas 'vivas' e impede que elas colapsem?", a: ["Ventos de outras galáxias", "A luz que vem do lado de fora", "Gelo no centro da estrela", "Pressão da fusão nuclear empurrando para fora"], c: 3, h: "É uma briga entre a gravidade puxando e a energia empurrando." },
        { q: "Como os astrônomos medem distâncias de estrelas próximas pela perspectiva?", a: ["Paralaxe Estelar", "Usando trena a laser", "Medindo o tamanho delas", "Contando o brilho"], c: 0, h: "Observar a estrela de dois pontos diferentes da órbita da Terra." },
        { q: "Qual foi o primeiro satélite artificial colocado em órbita da Terra?", a: ["Hubble", "Sputnik 1", "Explorer 1", "Vanguard"], c: 1, h: "Lançado pela União Soviética em 1957, iniciou a Era Espacial." },
        { q: "Por que os satélites orbitando a Terra 'não caem'?", a: ["Eles estão caindo, mas andam tão rápido que erram a curva da Terra", "Eles não sofrem nenhuma gravidade", "Existem motores empurrando-os para cima sempre", "Estão pendurados por fios invisíveis"], c: 0, h: "É o estado de queda livre contínua em alta velocidade." },
        { q: "O que é um Telescópio Espacial e qual a sua vantagem?", a: ["Fica mais perto das estrelas", "Funciona sem usar eletricidade", "Fica acima da atmosfera, vendo sem distorções", "É feito para ser usado por astronautas"], c: 2, h: "A atmosfera da Terra embaça e bloqueia algumas luzes do cosmos." },
        { q: "Qual a classe da nossa estrela, o Sol, em sua fase atual?", a: ["Sequência Principal (Anã Amarela)", "Gigante Vermelha", "Supergigante Azul", "Anã Marrom"], c: 0, h: "É uma estrela de tamanho e temperatura médias na metade da vida." }
    ],
    3: [ // Missão 3: Galáxias e Universo (Desafiador)
        { q: "Qual o formato e tipo da Via Láctea, a nossa galáxia?", a: ["Elíptica arredondada", "Espiral com braços e núcleo", "Irregular e caótica", "Uma linha reta fina"], c: 1, h: "Parece um grande redemoinho de estrelas girando." },
        { q: "O que os cientistas acreditam existir bem no centro da nossa galáxia?", a: ["Um Buraco Negro Supermassivo", "Uma Estrela gigante imortal", "Nada, apenas vácuo", "Uma frota alienígena"], c: 0, h: "Chama-se Sagitário A* e tem milhões de vezes a massa do Sol." },
        { q: "O que define o 'Horizonte de Eventos' de um Buraco Negro?", a: ["A superfície sólida do buraco", "Onde o buraco negro nasce", "A luz brilhante do centro", "Ponto de não retorno onde nem a luz escapa"], c: 3, h: "Passou dali, a gravidade é tão forte que nada volta." },
        { q: "Qual é a explicação atual para o início de tudo no 'Big Bang'?", a: ["Foi uma explosão de bomba de hidrogênio", "Duas galáxias bateram uma na outra", "O universo expandiu a partir de um ponto denso e quente", "O sol nasceu primeiro"], c: 2, h: "Não foi uma explosão no espaço, mas a expansão do próprio espaço." },
        { q: "O que Edwin Hubble notou ao estudar a luz de galáxias distantes?", a: ["A maioria se afasta, provando a expansão do universo", "Estão todas paradas no céu", "Vêm todas em direção à Terra", "Estão todas apagando"], c: 0, h: "Descobriu a expansão cósmica em 1929." },
        { q: "O que é a misteriosa 'Matéria Escura' no cosmos?", a: ["Poeira escura que suja o espaço", "Luz que ficou velha e apagou", "Invisível, exerce gravidade mantendo galáxias unidas", "Gás venenoso interestelar"], c: 2, h: "Não emite luz, mas sabemos que existe por causa da sua gravidade." },
        { q: "Pela Relatividade Geral, o que a gravidade forte faz com o tempo?", a: ["Faz o tempo passar mais devagar (dilatação)", "Faz o tempo parar completamente", "Faz o tempo passar mais rápido", "Faz o tempo correr ao contrário"], c: 0, h: "Perto de um buraco negro, o tempo avança lentamente comparado à Terra." },
        { q: "Qual é a velocidade da luz, o limite máximo de velocidade do universo?", a: ["1.000 km por hora", "Velocidade infinita", "340 metros por segundo", "Cerca de 300.000 km por segundo"], c: 3, h: "Viajaria da Terra à Lua em pouco mais de 1 segundo." },
        { q: "O que é a 'Energia Escura' proposta pelos cosmólogos?", a: ["Força que acelera a expansão do universo", "Combustível de foguetes modernos", "Eletricidade preta das estrelas", "O centro dos buracos negros"], c: 0, h: "Vence a gravidade e empurra as galáxias para longe mais rápido." },
        { q: "O que é o fenômeno da 'Lente Gravitacional'?", a: ["Gravidade curvando a luz de objetos distantes", "Um óculos especial de astronomia", "Uma lupa feita de estrelas", "O reflexo da luz na lua"], c: 0, h: "Grandes massas entortam o espaço, servindo como uma lente cósmica." },
        { q: "O que é a 'Radiação Cósmica de Fundo em Micro-ondas'?", a: ["O som do sol fervendo", "O eco de luz residual do Big Bang", "Sinais de rádio de alienígenas", "Micro-ondas de eletrodomésticos"], c: 1, h: "É a luz mais antiga do universo, datada de 380 mil anos após o início." },
        { q: "Daqui a bilhões de anos, o que deve ocorrer entre Via Láctea e Andrômeda?", a: ["Vão colidir e se fundir numa nova galáxia", "Vão explodir separadamente", "Uma vai evaporar a outra", "Nada, elas vão se afastar"], c: 0, h: "Elas estão em rota de encontro gravitacional." },
        { q: "O que é um Quasar, um dos objetos mais brilhantes do universo?", a: ["Um tipo de cometa gigante", "Núcleo de galáxia alimentado por buraco negro ativo", "Uma estrela solitária em chamas", "Um planeta feito de diamante"], c: 1, h: "Libera energia monstruosa consumindo o gás ao redor." },
        { q: "O que é o efeito de 'Espaguetificação' perto de um buraco negro?", a: ["O cozimento de massas em gravidade zero", "Objeto sendo esticado pelas forças de maré gravitacionais", "A formação dos braços da galáxia", "Quando uma estrela vira um fio"], c: 1, h: "A gravidade nos pés seria muito mais forte que na cabeça, esticando você." },
        { q: "O que Albert Einstein propôs que a gravidade realmente é?", a: ["A curvatura do tecido do espaço-tempo pela massa", "Um ímã puxando as coisas para baixo", "Uma força mágica e invisível", "O vento empurrando os planetas"], c: 0, h: "Como uma bola de boliche afundando num lençol esticado." },
        { q: "Qual a temperatura média aproximada do vácuo do espaço profundo?", a: ["0 Graus Celsius", "Cerca de -270 Graus Celsius (Perto do zero absoluto)", "Morno, uns 25 Graus Celsius", "Extremamente quente como o sol"], c: 1, h: "Longe de estrelas, o espaço é incrivelmente gelado." },
        { q: "O que determina o destino final de uma estrela (se virará anã, nêutrons ou buraco negro)?", a: ["A cor que ela pisca", "O nome que os cientistas dão", "A quantidade de massa que ela tinha ao nascer", "A distância de outras estrelas"], c: 2, h: "Somente estrelas supermassivas podem criar buracos negros." },
        { q: "O que são as Ondas Gravitacionais detectadas pela primeira vez em 2015?", a: ["Ondulações no espaço-tempo causadas por colisões massivas", "Ondas de rádio enviadas do espaço", "Tsunamis no mar causados pela lua", "Luz pisca-pisca de supernovas"], c: 0, h: "Como ondas em um lago ao jogar uma pedra, mas no próprio espaço." },
        { q: "O que acontece na teoria de aniquilação entre Matéria e Antimatéria?", a: ["Elas se destroem e liberam pura energia", "Elas criam um novo planeta", "Nada, elas se atravessam", "Elas esfriam o universo"], c: 0, h: "É a reação de conversão de massa em energia mais eficiente da física." },
        { q: "A luz que vemos das galáxias mais distantes nos mostra na verdade...", a: ["Como elas serão no futuro", "O que está acontecendo EXATAMENTE AGORA", "Como elas eram no passado remoto", "Uma miragem sem sentido"], c: 2, h: "A luz levou bilhões de anos para cruzar o espaço até nossos olhos." },
        { q: "O que é a Singularidade localizada no fundo de um buraco negro?", a: ["Onde saem os foguetes", "Uma bolha de ar quente", "Um planeta redondo perfeito", "Um ponto teórico de densidade infinita"], c: 3, h: "Onde as leis da física atual deixam de funcionar." },
        { q: "Qual é o maior tipo de agrupamento no universo, feito de milhares de galáxias?", a: ["Superaglomerados de Galáxias", "Sistemas Solares Gigantes", "Constelações Mãe", "Nebulosas Supremas"], c: 0, h: "São as maiores estruturas organizadas do cosmos." },
        { q: "O que é o 'Redshift' (Desvio para o Vermelho) observado na luz das galáxias?", a: ["As galáxias ficando velhas e vermelhas", "O brilho da poeira cobrindo a luz", "A luz queimando o oxigênio", "Esticamento da luz provando que elas se afastam"], c: 3, h: "Semelhante ao efeito Doppler do som de uma ambulância." },
        { q: "Qual o nome da Teia que conecta todas as galáxias por filamentos?", a: ["Teia Cósmica", "Rede Galáctica", "Internet das Estrelas", "Fibra Espacial"], c: 0, h: "A grande estrutura do universo em larga escala." },
        { q: "Qual o tempo aproximado da idade do nosso Universo?", a: ["4,5 bilhões de anos", "13,8 bilhões de anos", "100 trilhões de anos", "2024 anos"], c: 1, h: "4,5 bilhões é a idade da Terra; o universo é bem mais antigo!" },
        { q: "Se viajássemos à velocidade da luz, quanto tempo levaria para atravessar a Via Láctea?", a: ["Alguns minutos", "Cerca de 100.000 anos", "Uma vida humana de 80 anos", "Imediatamente"], c: 1, h: "A nossa própria galáxia é incrivelmente vasta." },
        { q: "O que é um Buraco de Minhoca na teoria da física?", a: ["Um túnel cavado na Lua por robôs", "Um atalho hipotético pelo espaço-tempo", "Uma mancha preta numa estrela", "A órbita de um cometa antigo"], c: 1, h: "Conectaria dois pontos distantes no universo como uma ponte." },
        { q: "Do que é composto cerca de 95% de todo o nosso Universo?", a: ["Energia e Matéria Escura (desconhecidas)", "Estrelas e Planetas normais", "Apenas Vácuo absolutamente vazio", "Gás hidrogênio visível"], c: 0, h: "Tudo que conseguimos ver com os olhos é só 5% do todo." },
        { q: "O que é o Paradoxo de Fermi em termos simples?", a: ["Por que a lua não cai na terra?", "Onde estão os alienígenas se o universo é tão grande?", "Por que a luz é tão rápida?", "Por que o universo vai acabar?"], c: 1, h: "A aparente contradição entre a alta probabilidade de vida e a falta de contato." },
        { q: "Qual o maior tipo conhecido de galáxia no universo?", a: ["Galáxia Elíptica Gigante", "Galáxia Espiral Anã", "Via Láctea Plus", "Nuvem Irregular"], c: 0, h: "Geralmente formadas após colisões de muitas galáxias menores." }
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
