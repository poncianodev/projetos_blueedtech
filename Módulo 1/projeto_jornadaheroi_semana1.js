console.clear();
const prompt = require('prompt-sync')();

console.log(
    'Olá aventureiro! Hoje você vai conhecer a história de um guerreiro chamado Zaion e como ele mudou o destino de seu povo. Em um planeta chamado Exos, vivia uma população pacífica denominada Exozorgs. Eles eram especialistas em cultivo e mineração, e após longos anos conseguiram descobrir um novo minério em suas escavações: o Brakio. Com o poder do Brakio eles evoluiram suas cidades construindo muitas tecnologias. Porém, em um planeta vizinho chamado Swamp, havia uma outra civilização não tão amistosa, com o nome de Swampers. Os Swampers logo descubriram sobre esse novo poder e ficaram muito interessados. Porém, como os Exozorgs eram muito mais ricos que eles, não teriam condições de comprar deles. Foi ai que eles começaram a se preparar para invadir o planeta Exos e roubar todo o Brakio já coletado por eles. Zaion era um comerciante, e em uma de suas viagens intergalácticas, ele percebeu a presença de naves de Swamp fazendo reconhecimento, e começou a se perguntar o que eles estariam fazendo ali. Quando voltou ao seu planeta, foi contar ao Imperador Kalos o que tinha visto. O Imperador não acreditou que aquilo representasse algum tipo de perigo, e não deu muita moral para ele, mas Zaion sabia que algo não estava certo. Então na sua próxima viagem, Zaion se fantasiou de Swamper e entrou no planeta deles para ver o que estava acontecendo. Ele arriscou sua vida pois se fosse reconhecido, com certeza seria preso ou morto por eles. Após um período lá dentro, ele viu um vasto exército de Swampers treinando arduamente. Esse exército era comandado por um general chamado Razor, que tinha muita experiencia de batalha e era muito frio. Ao perceber o que estava por vir, Zaion tirou fotos para que todos acreditassem nele, pegou sua nave que estava escondida e voltou ao seu planeta. Chegando lá, mostrou ao imperador as fotos que provavam a invasão que estava por vir. Kalos ficou abismado, viu que seu povo realmente corria perigo, e começou a montar um exército. Após algum tempo de treinamento, os Exozorgs ainda não tinham soldados suficientes para lutar contra os Swampers, foi ai que Zaion deu a brilhante idéia de usar o minério Brakio para forjar armas que seriam muito mais eficazes. O imperador aderiu a idéia e começou uma produção em massa. Depois de alguns anos quando eles já estavam mais preparados, começa a surgir no céu várias naves inimigas, a invasão está começando.',
);

console.log();

console.log('Responda as questões com 1 para SIM ou 0 para NÃO: ');

console.log();

const pergunta1 = +prompt('Você encontrou a Espada Flamejante de Brakio? ');
const pergunta2 = +prompt('Você se lembrou de avisar o Imperador Kalos sobre a presença do General Razor na invasão? ');
const pergunta3 = +prompt('Sua nave está abastecida para caso de fuga? ');
const pergunta4 = +prompt('Os Exozorgs usaram armaduras forjadas em Brakio? ');
const pergunta5 = +prompt('Você teria coragem de enfrentar o General Razor em uma luta? ');
const total = pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5;

console.log();

console.log(`O total das respostas é: ${total}`);

console.log();

if (total == 0) {
    console.log('Os Exozorgs perderam a guerra. Você foi capturado e morto. Os que ficaram vivos, agora seriam escravizados e forçados a trabalhar nas minas. Agora Exos é comandada pelos Swampers.');
} else if (total == 1 || total == 2) {
    console.log('Os Exozorgs estavam perdendo a guerra, por isso assinaram um acordo para que os Swampers levassem uma enorme quantia de minério Brakio para seu planeta, e todos os meses enviarião mais. Você usa sua nave para fugir do planeta antes que as coisas piorem.');
} else if (total == 3) {
    console.log('Devido às grandes baixas que tiveram, os Swampers sairam do seu planeta e prometeram voltar para terminar o que começaram, temporáriamente a guerra se encerra.');
} else if (total == 4) {
    console.log('Você conseguiu um acordo com o General Razor e vão vender Brakio para eles. Os Zorgs não tem certeza se eles cumprirão o acordo, mas a guerra acabou.');
} else if (total == 5) {
    console.log('Você avistou o acampamento dos Swampers, entrou despercebido na cabana do General Razor e o matou enquanto dormia. Sem seu general, os inimigos batem em retirada e nunca mais vão voltar. Você venceu a guerra, seu nome será lembrado por toda a eternidade!!');
}

console.log();