console.clear();
const prompt = require('prompt-sync')();

//MENSAGEM DE BOAS VINDAS
console.log();
console.log('Olá, seja bem-vindo ao Jokênpo!');

//O JOGADOR INSERE O NOME DELE
console.log();
let nomeJogador = prompt('Digite seu nome: ');
//VALIDAÇÃO PARA ACEITAR SOMENTE LETRAS
while (!isNaN(nomeJogador)) {
    console.log('Nome inválido!');
    nomeJogador = prompt('Digite seu nome: ');
}

console.log();

//VARIÁVEIS PARA CONTAR OS PONTOS DE CADA UM
let pontosJogador = 0;
let pontosPc = 0;
let empate = 0;
let continuar = 's';

//REPETIÇÃO DO JOGO CASO O USUÁRIO QUEIRA ESCOLHA JOGAR NOVAMENTE
while (continuar == 's') {
    //O USUÁRIO ESCOLHE A QUANTIDADE DE RODADAS QUE QUER JOGAR
    let numRodadas = parseInt(
        prompt(`${nomeJogador}, digite o número de rodadas que deseja jogar: `),
    );

    //VALIDAÇÃO SE O USUÁRIO DIGITOU CORRETAMENTE O NÚMERO DE RODADAS
    while (numRodadas == 0 || isNaN(numRodadas)) {
        console.log('Erro! Digite um número de rodadas válido.');
        numRodadas = parseInt(
            prompt(
                `${nomeJogador}, digite o número de rodadas que deseja jogar: `,
            ),
        );
    }

    //EXIBE O NÚMERO DE RODADAS A SEREM JOGADAS
    console.log();
    console.log(`Você irá jogar ${numRodadas} rodadas.`);
    console.log();

    for (let contador = 0; contador < numRodadas; contador++) {
        //O USUÁRIO ESCOLHA O ELEMENTO QUE QUER, E O COMPUTADOR ESCOLHE UM OUTRO ELEMENTO ALEATÓRIO
        let elementos = ['pedra', 'papel', 'tesoura'];
        let usuario = +prompt(
            `Por favor ${nomeJogador}, digite o número relacionado a sua escolha: 0-PEDRA, 1-PAPEL ou 2-TESOURA = `,
        );
        let pc = Math.trunc(Math.random() * 3);

        //VALIDAÇÃO CASO O JOGADOR NÃO INSIRA A ESCOLHA DOS ELEMENTOS CORRETAMENTE
        while (usuario != 0 && usuario != 1 && usuario != 2) {
            console.log('Erro! Escolhe inválida.');
            usuario = +prompt(
                `Por favor ${nomeJogador}, digite o número relacionado a sua escolha: 0-PEDRA, 1-PAPEL ou 2-TESOURA = `,
            );
        }

        let escolhaPc = elementos[pc];
        let escolhaJogador = elementos[usuario];

        //MOSTRA AS ESCOLHAS DO JOGADOR E DO COMPUTADOR
        console.log(`\n${nomeJogador} você escolheu ${escolhaJogador}.`);
        console.log(`O computador escolheu ${escolhaPc}.`);

        console.log();

        //POSSÍVEIS RESULTADOS CASO JOGADOR ESCOLHA PEDRA
        if (escolhaJogador === 'pedra' && escolhaPc === 'tesoura') {
            console.log(
                `Pedra quebra a tesoura. ${nomeJogador} venceu esta rodada!`,
            );
            pontosJogador++;
        } else if (escolhaJogador === 'pedra' && escolhaPc === 'papel') {
            console.log(
                'Papel embrulha a pedra. O computador venceu esta rodada!',
            );
            pontosPc++;
        } else if (escolhaJogador === 'pedra' && escolhaPc === 'pedra') {
            console.log(
                'Os dois escolheram pedra. Esta rodada terminou empatada!',
            );
            empate++;
        }

        console.log();

        //POSSÍVEIS RESULTADOS CASO O JOGADOR ESCOLHA PAPEL
        if (escolhaJogador === 'papel' && escolhaPc === 'pedra') {
            console.log(
                `Papel embrulha a pedra. ${nomeJogador} venceu esta rodada!`,
            );
            pontosJogador++;
        } else if (escolhaJogador === 'papel' && escolhaPc === 'tesoura') {
            console.log(
                'Tesoura corta o papel. O computador venceu esta rodada!',
            );
            pontosPc++;
        } else if (escolhaJogador === 'papel' && escolhaPc === 'papel') {
            console.log(
                'Os dois escolheram papel. Esta rodada terminou empatada!',
            );
            empate++;
        }

        console.log();

        //POSSÍVEIS RESULTADOS CASO O JOGADOR ESCOLHA TESOURA
        if (escolhaJogador === 'tesoura' && escolhaPc === 'papel') {
            console.log(
                `Tesoura corta o papel. ${nomeJogador} venceu esta rodada!`,
            );
            pontosJogador++;
        } else if (escolhaJogador === 'tesoura' && escolhaPc === 'pedra') {
            console.log(
                'Pedra quebra a tesoura. O computador venceu esta rodada!',
            );
            pontosPc++;
        } else if (escolhaJogador === 'tesoura' && escolhaPc === 'tesoura') {
            console.log(
                'Os dois escolheram tesoura. Esta rodada terminou empatada!',
            );
            empate++;
        }
    }

    console.log();

    //AQUI VAMOS EXIBIR AS RODADAS
    console.log('\nPLACAR: ');
    console.log(`${nomeJogador} ganhou ${pontosJogador} rodada(s).`);
    console.log(`O computador ganhou ${pontosPc} rodada(s).`);
    console.log(`E ${empate} rodada(s) como empate.`);

    console.log();

    //EXIBE O PLACAR
    if (pontosJogador > pontosPc) {
        console.log(`Parabéns, ${nomeJogador}. Você ganhou o jogo!`);
    } else if (pontosPc > pontosJogador) {
        console.log('Que pena. O computador ganhou o jogo!');
    } else {
        console.log('O jogo terminou empatado!');
    }

    console.log();

    //PERGUNTA SE O JOGADOR QUER JOGAR NOVAMENTE OU ENCERRAR O JOGO
    continuar = prompt(
        `${nomeJogador}, você deseja jogar novamente? Digite "s" para continuar ou "n" para finalizar o jogo: `,
    ).toLowerCase();
    while (continuar != 's' && continuar != 'n') {
        // VALIDAÇÃO PARA CONTINUAR OU NÃO O JOGO
        console.log('Erro! Opção inválida!');
        continuar = prompt(
            `${nomeJogador}, você deseja jogar novamente? Digite "s" para continuar ou "n" para finalizar o jogo: `,
        ).toLowerCase();
    }

    console.log();
}
