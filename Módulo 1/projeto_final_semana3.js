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

console.log('Olá, seja bem-vindo a Mexican Getaway.');
console.log(
    '\nNesse jogo você irá viver a aventura de Juan Carlos, um mexicano que foi preso por narcofráfico e cumpre pena em uma prisão na Flórida. \nJuan já cumpriu 10 dos 40 anos de sua pena e está planejando uma fuga histórica.',
);
console.log(
    'Sua missão é guiá-lo nessa jornada tomando decisões que irão levá-lo até a conquista do seu objetivo, mas cuidado, a prisão contém muitos perigos.',
);

//O INICIO

console.log(
    'Já amanheceu, é mais um dia na prisão.\n O guarda passa fazendo a contagem diária de rotina. ',
);
console.log(
    'Após a contagem, é hora da limpeza da cela. O que você deseja fazer?',
);

let limpezaCela = +prompt(
    '\n[1] - Ajudar a limpar a cela (+Respeito) \n [2] - Apenas ficar olhando',
);
while (limpezaCela != 1 && limpezaCela != 2) {
    console.log('Opção inválida!');
    limpezaCela = +prompt(
        '[1] - Ajudar a limpar a cela (+Respeito) \n [2] - Apenas ficar olhando',
    );

    if (limpezaCela == 1) {
        console.log(
            `Você escolheu ajudar seus  de cela com isso ganhou respeito. \n[Seu respeito agora é de: ${personagem.respeito}`,
        );
        personagem.ganharespeito();
    } else if (limpezaCela == 2) {
        console.log(
            `Você escolheu ficar apenas olhando, e perdeu respeito com seus colegas de cela. \n[Seu respeito agora é de: ${personagem.respeito}`
        );
        personagem.perderespeito();
    }
}
console.log(personagem.respeito);
