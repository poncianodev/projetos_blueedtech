console.clear();
const prompt = require('prompt-sync')();

let personagem = {
    nome: 'Juan Carlos',
    resistencia: 3, //STATUS DE RESISTENCIA
    ganharesistencia: function () {
        this.resistencia++;
    },
    perdeforca: function () {
        this.resistencia--;
    },
    saude: 3, //STATUS DE SAUDE
    ganhasaude: function () {
        this.saude++;
    },
    perdesaude: function () {
        this.saude--;
    },
    respeito: 5, //STATUS DE RESPEITO
    ganharespeito: function () {
        this.respeito++;
    },
    perderespeito: function () {
        this.respeito--;
    },
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
// AQUI SE O RESPEITO ESTIVER 1 OU MENOS, OS PRESOS TE OBRIGARÃO A LIMPAR TUDO SOZINHO. E PERDERÁ VIDA.
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 08:00 HRS
console.log('Chegamos ao café da manhã, e estão servindo pão com manteigam, leite e café.');
tempo.hora += 2;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 10:00 HRS
console.log('Enfim, o primeiro banho de sol do dia.');
tempo.hora += 2;

//VÃO TER OPÇÕES DELE FAZER ACADEMIA, FUTEBOL, JOGAR BARALHO, FUMAR CIGARRO

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
console.log('Como de rotina, os carcereiros passam de cela em cela fazendo a segunda contagem dos presos.');
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 19:00 HRS
console.log('Após realizada a contagem, os presos são liberados para tomar banho.')
// AQUI PODE ACONTECER ALGUMA LUTA
tempo.hora++;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 20:00 HRS
console.log('Agora está sendo servido o lanche noturno, e os presos podem dentro de suas celas, assistir à televisão e ouvir rádio.');
tempo.hora += 2;

console.log(
    '\n_______________________________________________________________________________________________________\n',
);

tempo.exibeTempo(); // 22:00 HRS
console.log('Chegou a hora de dormir, você sobreviveu a mais um dia na prisão.');

//AQUI O JOGADOR IRÁ APERTAR UMA TECLA PARA IR DORMIR E AVANÇAR O DIA, APÓIS ISSO REINICIA O LOOPING
















// console.log('\n[1] - Ajudar a limpar a cela \n[2] - Apenas ficar olhando');
// let limpezaCela = +prompt();

// while (limpezaCela != 1 && limpezaCela != 2) {
//     console.log('Opção inválida!');
//     console.log('\n[1] - Ajudar a limpar a cela \n[2] - Apenas ficar olhando');
//     let limpezaCela = +prompt();
// }

// if (limpezaCela == 1) {
//     console.log(
//         `Você escolheu ajudar seus  de cela com isso ganhou mais respeito.`,
//     );
//     personagem.ganharespeito();
//     console.log(`\nSeu respeito agora é de: ${personagem.respeito}`);
// } else if (limpezaCela == 2) {
//     console.log(
//         `Você escolheu ficar apenas olhando, e perdeu respeito com seus colegas de cela.`,
//     );
//     personagem.perderespeito();
//     console.log(`\nSeu respeito agora é de: ${personagem.respeito}`);
// }

// console.log(personagem.respeito);
