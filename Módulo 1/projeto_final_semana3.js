console.clear();
const prompt = require("prompt-sync")();

let escolhaFutebol = false;
let escolhaAcademia = false;

let personagem = {
    nome: "Juan Carlos",
    resistencia: 50, //STATUS DE RESISTENCIA
    saude: 50, //STATUS DE SAUDE
    respeito: 50, //STATUS DE RESPEITO
    fome: 50,
    itens: [],
    amigos: [],
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

// FUNÇÕES PARA RANDOMIZAR
const function_random = () => {
    const listaRandom = [];
    const random = Math.floor(Math.random() * 2);
    listaRandom.push(random);
    return listaRandom;
};

const function_random2 = () => {
    const listaRandom = [];
    const random = Math.floor(Math.random() * 3);
    listaRandom.push(random);
    return listaRandom;
};

console.log("Olá, seja bem-vindo a Mexican Getaway.");
console.log(
    "\nNesse jogo você irá viver a aventura de Juan Carlos, um mexicano que foi preso por narcotráfico e cumpre pena em uma prisão na Flórida. \nJuan já cumpriu quase toda sua pena, faltando apenas 3 dias para sair.",
);
console.log(
    "Sua missão é ajudá-lo a sobreviver os últimos dias nesse lugar. Suas escolhas terão impacto sobre a vida dele. \nBoa Sorte!",
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
    "Já amanheceu, é mais um dia na prisão. O guarda passa fazendo a contagem matinal de rotina.",
);
if (personagem.itens.includes("Faca")) {
    console.log(
        "Você foi pego com uma faca, e agora passará semanas na solitária.",
    );
    console.log("Você perdeu o jogo!");
    // break;
}
tempo.hora++; //ADICIONANDO A HORA PASSADA

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 07:00 HRS
console.log("Após a contagem, é hora da limpeza da cela.");

// EVENTO ALEATÓRIO - AQUI SE O RESPEITO ESTIVER 30 OU MENOS, OS PRESOS TE OBRIGARÃO A LIMPAR TUDO SOZINHO.,
if (personagem.respeito <= 30) {
    console.log(
        "\nVocê está com o respeito muito baixo, e os presos tentam te obrigar a limpar toda a cela sozinho. O que você faz?",
    );
    console.log(
        "\n[1] - ENFRENTA OS PRESOS POR NÃO ACHAR JUSTO TER QUE LIMPAR TUDO SOZINHO. \n[2] - ACEITA A PRESSÃO DELES E FAZ TODA A FAXINA.",
    );
    let pgt = +prompt();

    while (pgt != 1 && pgt != 2) {
        console.log("Opção Inválida!");
        console.log(
            "\n[1] - ENFRENTA OS PRESOS POR NÃO ACHAR JUSTO TER QUE LIMPAR TUDO SOZINHO. \n[2] - ACEITA A PRESSÃO DELES E FAZ TODA A FAXINA.",
        );
        pgt = +prompt();
    }

    if (pgt == 1 && personagem.resistencia >= 70) {
        console.log(
            "Você enfrentou os presos e conseguiu se livrar da faxina. Acabou perdendo um pouco de sáude, mas reconquistou o respeito deles.",
        );
        personagem.saude -= 5;
        personagem.respeito += 20;
        console.log(
            `Sua saúde foi para ${personagem.saude}, mas ganhou respeito e foi para ${personagem.respeito}.`,
        );
    } else if (pgt == 1 && personagem.resistencia <= 50) {
        console.log(
            "Ao tentar enfrentá-los, sua resistencia está muito baixa e acaba perdendo a luta. Você perdeu sáude e ainda sim teve que fazer toda a faxina sozinho.",
        );
        personagem.saude -= 20;
        personagem.respeito -= 10;
        console.log(
            `Sua sáude foi para ${personagem.saude}, e seu respeito foi para ${personagem.respeito}.`,
        );
    } else if (pgt == 2) {
        console.log(
            "Ao aceitar limpar tudo sozinho, você perde um pouco de saúde mas reconquista o respeito deles.",
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
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 08:00 HRS
console.log(
    "Chegamos ao café da manhã, e estão servindo pão com manteigam, leite e café.",
);
tempo.hora += 2;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

// BANHO DE SONHO DA MANHÃ
tempo.exibeTempo(); // 10:00 HRS
console.log("Enfim, o primeiro banho de sol do dia.");
console.log(
    "O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - EXPLORAR",
);
let escolhasBds1 = +prompt();
// VALIDAÇÃO SOBRE AS ESCOLHAS DO BANHO DE SOL
while (
    escolhasBds1 != 1 &&
    escolhasBds1 != 2 &&
    escolhasBds1 != 3 &&
    escolhasBds1 != 4
) {
    console.log("Opção Inválida!");
    console.log(
        "O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - EXPLORAR",
    );
    escolhasBds1 = +prompt();
}
// CONDICIONAIS DO BANHO DE SOL
if (escolhasBds1 == 1) {
    escolhaFutebol = true;
    console.log("Você escolheu jogar futebol.");
    personagem.saude += 5;
    console.log(`Sua saúde agora é de ${personagem.saude}`);
} else if (escolhasBds1 == 2) {
    escolhaAcademia = true;
    console.log("Você escolheu fazer academia.");
    personagem.resistencia += 5;
    console.log(`Sua resistência agora é de ${personagem.resistencia}`);
} else if (escolhasBds1 == 3) {
    console.log("Você escolheu jogar baralho.");
    const random_baralho = function_random();
    if (random_baralho == 0) {
        console.log("Você ganhou o jogo.");
        personagem.respeito += 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    } else if (random_baralho == 1) {
        console.log("Você perdeu o jogo.");
        personagem.respeito -= 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    }
} else if (escolhasBds1 == 4) {
    console.log("Você escolheu explorar.");
    const random_explorar = function_random();
    if (random_explorar == 0) {
        console.log(
            "Ao sair para explorar você encontra uma faca. Deseja ficar com ela?",
        );
        console.log("Digite [1] para SIM ou [2] para NÃO.");
        let escolha_explorar1 = +prompt();
        while (escolha_explorar1 != 1 && escolha_explorar1 != 2) {
            console.log("Opção Inválida");
            console.log("Digite [1] para SIM ou [2] para NÃO.");
            escolha_explorar1 = +prompt();
        }
        if (escolha_explorar1 == 1) {
            console.log("Você guardou a faca no bolso.");
            personagem.itens.push("Faca");
        } else if (escolha_explorar1 == 2) {
            console.log("Você deixou a faca ali e saiu andando.");
        }
    } else if (random_explorar == 1) {
        console.log("Você não encontrou nada enquanto explorava.");
    }
}

tempo.hora += 2;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 12:00 HRS
console.log(
    "Os guardas apitam o fim do banho de sol, e mandam os presos de volta para suas celas.",
);
console.log("Está na hora da marmita do almoço.");
tempo.hora++;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

// BANHO DE SOL DA TARDE
tempo.exibeTempo(); // 13:00 HRS
console.log(
    "Depois do almoço, os presos estão liberados para o banho de sol da tarde.",
);
console.log(
    "O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - EXPLORAR",
);
let escolhasBds2 = +prompt();
// VALIDAÇÃO SOBRE AS ESCOLHAS DO BANHO DE SOL
while (
    escolhasBds2 != 1 &&
    escolhasBds2 != 2 &&
    escolhasBds2 != 3 &&
    escolhasBds2 != 4
) {
    console.log("Opção Inválida!");
    console.log(
        "O que você deseja fazer? \n\n[1] - JOGAR FUTEBOL \n[2] - FAZER ACADEMIA \n[3] - JOGAR BARALHO \n[4] - EXPLORAR",
    );
    escolhasBds2 = +prompt();
}
if (escolhasBds2 == 1) {
    console.log("Você escolheu jogar futebol.");
    if (escolhaFutebol == true) {
        console.log(
            "Você já tenta jogar, mas como já jogou mais cedo acaba não conseguindo",
        );
        personagem.saude -= 10;
        console.log(`Sua saúde agora é de ${personagem.saude}`);
    } else if (escolhaFutebol == false) {
        personagem.saude += 5;
        console.log(`Sua saúde agora é de ${personagem.saude}`);
    }
}
if (escolhasBds2 == 2) {
    console.log("Você escolheu fazer academia.");
    if (escolhaAcademia == true) {
        console.log(
            "Você tenta treinar, mas como já treinou mais cedo acaba não conseguindo",
        );
        personagem.resistencia -= 10;
        console.log(`Sua resistência agora é de ${personagem.resistencia}`);
    } else if (escolhaAcademia == false) {
        personagem.resistencia += 5;
        console.log(`Sua resistência agora é de ${personagem.resistencia};`);
    }
}
if (escolhasBds2 == 3) {
    console.log("Você escolheu jogar baralho.");
    const random_baralho2 = function_random();
    if (random_baralho2 == 0) {
        console.log(
            "Juan ganhou do cara mais durão da prisão, e agora ele quer brigar com você.",
        );
        console.log(
            "O que você faz? Digite [1] para BRIGAR ou [2] para FUGIR;",
        );
        let escolhaBaralho1 = +prompt();
        while (escolhaBaralho1 != 1 && escolhaBaralho1 != 2) {
            console.log("Escolha Inválida!");
            console.log(
                "O que você faz? Digite [1] para BRIGAR ou [2] para FUGIR;",
            );
            escolhaBaralho1 = +prompt();
        }
        if (escolhaBaralho1 == 1 && personagem.resistencia >= 65) {
            console.log("Uau, que resistência. Você deu um surra nele!");
            personagem.respeito += 15;
            personagem.saude -= 5;
            personagem.resistencia += 52;
            console.log(
                `Sua sáude foi para ${personagem.saude}, seu respeito subiu para ${personagem.respeito} e sua resistência foi para ${personagem.resistencia}`,
            );
        } else if (escolhaBaralho1 == 1 && personagem.resistencia < 65) {
            console.log(
                "Nossa que vexame. Você não foi páreo para ele e tomou um surra!",
            );
            personagem.saude -= 20;
            personagem.respeito -= 10;
            personagem.resistencia -= 10;
            console.log(
                `Sua saúde foi para ${personagem.saude}, seu respeito para ${personagem.respeito} e sua resistencia para ${personagem.resistencia}`,
            );
        }
    } else if (random_baralho2 == 1) {
        console.log(
            "Juan perdeu para o cara mais durão da prisão, e agora ele irá te difamar.",
        );
        personagem.respeito -= 20;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    }
}
if (escolhasBds2 == 4) {
    console.log("Você escolheu explorar.");
    const random_explorar2 = function_random2();
    if (random_explorar2 == 0) {
        console.log(
            "Juan fez um amigo durante a exploração. O nome dele é Pedro, e talvez te ajude quando você precisar.",
        );
        personagem.amigos.push("Pedro");
    } else if (random_explorar2 == 1 && personagem.respeito <= 30) {
        console.log(
            "Um grupo de presos encontra Juan andando sozinho pelo pátio e querem arrumar confusão.",
        );
        console.log(
            "O que você faz? Digite [1] para ENFRENTAR ELES ou [2] para FUGIR.",
        );
        let escolha_explorar2 = +prompt();
        while (escolha_explorar2 != 1 && escolha_explorar2 != 2) {
            console.log("Opção Inválida!");
            console.log(
                "O que você faz? Digite [1] para ENFRENTAR ELES ou [2] para FUGIR.",
            );
            escolha_explorar2 = +prompt();
        }
        if (escolha_explorar2 == 1) {
            console.log(
                "Juan tenta lutar com eles, mas ele são muitos e ele acaba sendo morto esfaqueado.",
            );
            // break;
        } else if (escolha_explorar2 == 2) {
            console.log(
                "Juan corre para perto dos guardas e acaba se safando dessa.",
            );
            personagem.respeito -= 10;
            console.log(`Seu respeito agora é de ${personagem.respeito}.`);
        }
    } else if (random_explorar2 == 2) {
        console.log("Você não encontrou nada explorando dessa vez.");
    }
}
tempo.hora += 3;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 16:00 HRS
console.log(
    "Chega ao fim o segundo banho de sol, e os presos voltam para suas celas.",
);
tempo.hora++;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 17:00 HRS
console.log('É final de tarde, e já estão servindo as "quentinhas" do jantar.');
tempo.hora++;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 18:00 HRS
console.log(
    "Como de rotina, os carcereiros passam de cela em cela fazendo a segunda contagem dos presos.",
);

if (personagem.itens.includes("Faca")) {
    console.log(
        "Você foi pego com uma faca, e agora passará semanas na solitária.",
    );
    console.log("Você perdeu o jogo!");
    // break;
}

tempo.hora++;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

// ATIVIDADES PERÍODO NOTURNO
tempo.exibeTempo(); // 19:00 HRS
console.log(
    "Após realizada a contagem, os presos são liberados para tomar banho e fazer algumas atividades.",
);
console.log(
    "O que você deseja fazer? \n\n[1] - IR TOMAR BANHO \n[2] - ASSISTIR TELEVISÃO \n[3] - OUVIR RÁDIO",
);
let escolhasNoite = +prompt();
while (escolhasNoite != 1 && escolhasNoite != 2 && escolhasNoite != 3) {
    console.log("Opção Inválida!");
    console.log(
        "O que você deseja fazer? \n\n[1] - IR TOMAR BANHO \n[2] - ASSISTIR TELEVISÃO \n[3] - OUVIR RÁDIO",
    );
    escolhasNoite = +prompt();
}
if (escolhasNoite == 1) {
    console.log("Você escolheu tomar banho.");
    if (personagem.respeito <= 30) {
        console.log(
            "Os presos não respeitam você e fizem uma armadilha para te pegar durante o banho. Você é morto enquanto se lavava.",
        );
        console.log("Você perdeu o jogo!");
        //break;
    } else if (
        personagem.respeito <= 30 &&
        personagem.amigos.includes("Pedro")
    ) {
        console.log(
            "Os presos fizeram uma armadilha para você no banho, mas seu amigo Pedro te ajuda a sair dessa.",
        );
        personagem.respeito += 20;
        console.log(`Seu respeito agora é de ${personagem.respeito}`);
    } else {
        console.log("Você tomou um banho tranquilo.");
    }
}
if (escolhasNoite == 2) {
    console.log("Você escolheu assistir televisão.");
    const random_noite = function_random();
    if (random_noite == 0) {
        console.log("Você colocou no canal que os presos gostam.");
        personagem.respeito += 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    } else if (random_noite == 1) {
        console.log("Você colocou no canal que os presos odeiam.");
        personagem.respeito -= 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    }
}
if (escolhasNoite == 3) {
    console.log("Você escolheu ouvir rádio.");
    console.log(
        "Seleciona qual estação quer ouvir: \n\n[1] - Estação RAP \n[2] - Estação ROCK \n[3] - Estação POP",
    );
    let escolhasRadio = +prompt();
    while (escolhasRadio != 1 && escolhasRadio != 2 && escolhasRadio != 3) {
        console.log("Opção Inválida!");
        console.log(
            "Seleciona qual estação quer ouvir: \n\n[1] - Estação RAP \n[2] - Estação ROCK \n[3] - Estação POP",
        );
        escolhasRadio = +prompt();
    }
    if (escolhasRadio == 1) {
        console.log("Você escolheu ouvir RAP, e os presos adoram!");
        personagem.respeito += 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    } else if (escolhasRadio == 2) {
        console.log(
            "Você escolheu ouvir ROCK. Os presos não gostam, mas irão tolerar.",
        );
        personagem.respeito -= 5;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    } else if (escolhasRadio == 3) {
        console.log("Você escolheu ouvir POP, e os presos odeiam!");
        personagem.respeito -= 10;
        console.log(`Seu respeito agora é de ${personagem.respeito}.`);
    }
}
tempo.hora += 3;

console.log(
    "\n_______________________________________________________________________________________________________\n",
);

tempo.exibeTempo(); // 22:00 HRS
console.log(
    "Chegou a hora de dormir, você sobreviveu a mais um dia na prisão.",
);
