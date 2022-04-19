let imgForma = document.querySelector(".base");
let nameForma = document.querySelector("#evoluir");
let botao = document.querySelector("#transformar");

let i = 0;

console.dir(imgForma.setAttribute);

// Função para Alterar as imagens
function alterarBotao() {
    i++;
    if (i == 1) {
        imgForma.setAttribute("src", "./assets/img/grifinoria.png");
        imgForma.setAttribute("alt", "Casa de Grifinória");
        nameForma.innerHTML = "Esta é Grifinória!";
    } else if (i == 2) {
        imgForma.setAttribute("src", "./assets/img/sonserina.png");
        imgForma.setAttribute("alt", "Casa de Sonserina");
        nameForma.innerHTML = "Esta é Sonserina!";
    } else if (i == 3) {
        imgForma.setAttribute("src", "./assets/img/corvinal.png");
        imgForma.setAttribute("alt", "Casa de Corvinal");
        nameForma.innerHTML = "Esta é Corvinal!";
    } else if (i == 4) {
        imgForma.setAttribute("src", "./assets/img/lufa-lufa.png");
        imgForma.setAttribute("alt", "Casa de Lufa-lufa");
        nameForma.innerHTML = "Esta é Lufa-lufa!";
    }

    if (i > 4) {
        i = 0;

        imgForma.setAttribute("src", "./assets/img/base-casas.png");
        imgForma.setAttribute("alt", "Casas Hogwarts");
        nameForma.innerHTML = "Essas são as casas:";
        botao.textContent = "Alterar";
    }
}
