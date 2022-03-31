console.clear();
const prompt = require('prompt-sync')();

let personagem = {
    nome: 'Juan Carlos',
    resistencia: 50, //STATUS DE RESISTENCIA
    saude: 50, //STATUS DE SAUDE
    respeito: 50, //STATUS DE RESPEITO
    fome: 50,
};

// OBJETO PARA CONTROLAR O TEMPO
let tempo = {
    dia: 1,
    hora: 6,

    exibeTempo: function () {
        console.log(`Agora são ${this.hora} horas.`);
    },

    exibeData: function () {
        console.log(`Estamos no dia ${this.dia}.`);
    },
};

// FUNÇÃO PARA RANDOMIZAR
const function_random = () => {
    const player_pc = [];
    const random = Math.floor(Math.random() * 2);
    player_pc.push(random);
    return player_pc;
};

console.log('Olá, seja bem-vindo a Mexican Getaway.');
console.log(
    '\nNesse jogo você irá viver a aventura de Juan Carlos, um mexicano que foi preso por narcotráfico e cumpre pena em uma prisão na Flórida. \nJuan já cumpriu 10 dos 40 anos de sua pena e está planejando uma fuga histórica.',
);
console.log(
    'Sua missão é guiá-lo nessa jornada tomando decisões que irão levá-lo até a conquista do seu objetivo, mas cuidado, a prisão contém muitos perigos.',
);

//LOOPING PARA REPETIR OS DIAS
console.log();
console.log();

//CHAMA A FUNÇÃO PARA MOSTRAR QUAL DIA ESTAMOS
tempo.exibeData();

console.log();

//FUNÇÃO PARA MOSTRAR A PASSAGEM DO TEMPO
tempo.exibeTempo(); // 06:00 HRS
console.log(
    'Já amanheceu, é mais um dia na prisão. O guarda passa fazendo a contagem matinal de rotina.',
);
tempo.hora++; //ADICIONANDO A HORA PASSADA

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 07:00 HRS
console.log('Após a contagem, é hora da limpeza da cela.');

// EVENTO ALEATÓRIO - AQUI SE O RESPEITO ESTIVER 30 OU MENOS, OS PRESOS TE OBRIGARÃO A LIMPAR TUDO SOZINHO.,
if (personagem.respeito <= 30) {
    console.log(
        '\nVocê está com o respeito muito baixo, e os presos tentam te obrigar a limpar toda a cela sozinho. O que você faz?',
    );
    console.log(
        '\n[1] - ENFRENTA OS PRESOS POR NÃO ACHAR JUSTO TER QUE LIMPAR TUDO SOZINHO. \n[2] - ACEITA A PRESSÃO DELES E FAZ TODA A FAXINA.',
    );
    let pgt = +prompt();

    while (pgt != 1 && pgt != 2) {
        console.log('Opção Inválida!');
        console.log(
            '\n[1] - ENFRENTA OS PRESOS POR NÃO ACHAR JUSTO TER QUE LIMPAR TUDO SOZINHO. \n[2] - ACEITA A PRESSÃO DELES E FAZ TODA A FAXINA.',
        );
        pgt = +prompt();
    }

    if (pgt == 1 && personagem.resistencia >= 70) {
        console.log(
            'Você enfrentou os presos e conseguiu se livrar da faxina. Acabou perdendo um pouco de sáude, mas reconquistou o respeito deles.',
        );
        personagem.saude -= 5;
        personagem.respeito += 20;
        console.log(
            `Sua saúde foi para ${personagem.saude}, mas ganhou respeito e foi para ${personagem.respeito}.`,
        );
    } else if (pgt == 1 && personagem.resistencia <= 50) {
        console.log(
            'Ao tentar enfrentá-los, sua resistencia está muito baixa e acaba perdendo a luta. Você perdeu sáude e ainda sim teve que fazer toda a faxina sozinho.',
        );
        personagem.saude -= 20;
        personagem.respeito -= 10;
        console.log(
            `Sua sáude foi para ${personagem.saude}, e seu respeito foi para ${personagem.respeito}.`,
        );
    } else if (pgt == 2) {
        console.log(
            'Ao aceitar limpar tudo sozinho, você perde um pouco de saúde mas reconquista o respeito deles.',
        );
        personagem.saude -= 10;
        personagem.respeito += 10;
        console.log(
            `Sua saúde foi para ${personagem.saude}, mas seu respeito foi para ${personagem.respeito}.`,
        );
    }
}
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 08:00 HRS
console.log(
    'Chegamos ao café da manhã, e estão servindo pão com manteigam, leite e café.',
);
tempo.hora += 2;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 10:00 HRS
console.log('Enfim, o primeiro banho de sol do dia.');
console.log(
    'O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - FUMAR CIGARRO',
);
let escolhasBds1 = +prompt();
// VALIDAÇÃO SOBRE AS ESCOLHAS DO BANHO DE SOL
while (
    escolhasBds1 != 1 &&
    escolhasBds1 != 2 &&
    escolhasBds1 != 3 &&
    escolhasBds1 != 4
) {
    console.log('Opção Inválida!');
    console.log(
        'O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - FUMAR CIGARRO',
    );
    escolhasBds1 = +prompt();
}
// CONDICIONAIS DO BANHO DE SOL
if (escolhasBds1 == 1) {
    console.log('Você escolheu jogar futebol e aumentou seu status de sáude.');
    personagem.saude += 5;
    console.log(`Sua saúde agora é de ${personagem.saude}`);
} else if (escolhasBds1 == 2) {
    console.log('Você escolheu fazer academia e fortaleceu sua resistencia.');
    personagem.resistencia += 5;
    console.log(`Sua resistência agora é de ${personagem.resistencia}`);
} else if (escolhasBds1 == 3) {
    console.log('Você escolheu jogar baralho.');
    const random_baralho = function_random;
    if (random_baralho == 0) {
        console.log('Você ganhou o jogo.');
        personagem.respeito += 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    } else if (random_baralho == 1) {
        console.log('Você perdeu o jogo.');
        personagem.respeito -= 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    }
}
tempo.hora += 2;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 12:00 HRS
console.log(
    'Os guardas apitam o fim do banho de sol, e mandam os presos de volta para suas celas.',
);
console.log('Está na hora da marmita do almoço.');
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 13:00 HRS
console.log(
    'Depois do almoço, os presos estão liberados para o banho de sol da tarde.',
);
tempo.hora += 3;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 16:00 HRS
console.log(
    'Chega ao fim o segundo banho de sol, e os presos voltam para suas celas.',
);
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 17:00 HRS
console.log('É final de tarde, e já estão servindo as "quentinhas" do jantar.');
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 18:00 HRS
console.log(
    'Como de rotina, os carcereiros passam de cela em cela fazendo a segunda contagem dos presos.',
);
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 19:00 HRS
console.log(
    'Após realizada a contagem, os presos são liberados para tomar banho.',
);
// AQUI PODE ACONTECER ALGUMA LUTA
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 20:00 HRS
console.log(
    'Agora está sendo servido o lanche noturno, e os presos podem dentro de suas celas, assistir à televisão e ouvir rádio.',
);
tempo.hora += 2;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 22:00 HRS
console.log(
    'Chegou a hora de dormir, você sobreviveu a mais um dia na prisão.',
);
