var posicao = 1;
var tempo = 0;
const cores = ["verde", "azul", "amarelo", "vermelho", "preto"];
var corAtual = cores[3];
const random = (minimo, maximo) => Math.floor(Math.random() * (maximo - minimo) + minimo);
function trocarCor(aCor) {
    if (aCor === "verde") {
        document.getElementById("cabine").style.backgroundColor = 'green';
        document.getElementById("chassi").style.background = 'yellow';
    }
    else if (aCor === "azul") {
        document.getElementById("cabine").style.backgroundColor = 'blue';
        document.getElementById("chassi").style.background = 'red';
    }
    else if (aCor === "amarelo") {
        document.getElementById("cabine").style.backgroundColor = 'yellow';
        document.getElementById("chassi").style.background = 'green';
    }
    else if (aCor === "vermelho") {
        document.getElementById("cabine").style.backgroundColor = 'red';
        document.getElementById("chassi").style.background = 'blue';
    }
    else if (aCor === "preto") {
        document.getElementById("cabine").style.backgroundColor = 'black';
        document.getElementById("chassi").style.background = 'white';
    }
}
function posicao1() {
    document.getElementById("caminhao").style.top = 1 + 'vh';
    posicao = 1;
}
function posicao2() {
    document.getElementById("caminhao").style.top = 20 + "vh";
    posicao = 2;
}
function posicao3() {
    document.getElementById("caminhao").style.top = 40 + "vh";
    posicao = 3;
}
function posicao4() {
    document.getElementById("caminhao").style.top = 60 + "vh";
    posicao = 4;
}
function posicao5() {
    document.getElementById("caminhao").style.top = 80 + "vh";
    posicao = 5;
}
let movimentar = window.addEventListener("keydown", function (event) {
    var tecla = event.keyCode;
    if (tecla === 49 || tecla === 97) {
        posicao1();
    }
    else if (tecla === 50 || tecla === 98) {
        posicao2();
    }
    else if (tecla === 51 || tecla === 99) {
        posicao3();
    }
    else if (tecla === 52 || tecla === 100) {
        posicao4();
    }
    else if (tecla === 53 || tecla === 101) {
        posicao5();
    }
});
let movimentarComClickPara1 = document.querySelector('#botaoCarroVermelho');
movimentarComClickPara1.addEventListener('click', function () {
    posicao1();
})
let movimentarComClickPara2 = document.querySelector('#botaoCarroVerde');
movimentarComClickPara2.addEventListener('click', function () {
    posicao2();
})
let movimentarComClickPara3 = document.querySelector('#botaoCarroAzul');
movimentarComClickPara3.addEventListener('click', function () {
    posicao3();
})
let movimentarComClickPara4 = document.querySelector('#botaoCarroPreto');
movimentarComClickPara4.addEventListener('click', function () {
    posicao4();
})
let movimentarComClickPara5 = document.querySelector('#botaoCarroAmarelo');
movimentarComClickPara5.addEventListener('click', function () {
    posicao5();
})
const duracaoParaTrocarCor = setInterval(() => {
    corAtual = cores[random(0, cores.length)];
    trocarCor(corAtual);
}, 10000);
let time = setInterval(
    () => {
        tempo++;
    }
    , 1000);
function testarBatida(posicaoDoCarro, posicaoQueDeveEstar, condicionalDeCor, corDoCarro) {
    if (posicaoDoCarro <= 12 && posicao === posicaoQueDeveEstar && corAtual !== condicionalDeCor) {
        corDoCarro.style.animation = 'none';
        corDoCarro.style.left = `${posicaoDoCarro}vw`;
        clearInterval(movimentar);
        clearInterval(duracaoParaTrocarCor);
        clearInterval(loop);
        clearInterval(time);
        clearInterval(movimentarComClickPara1);
        clearInterval(movimentarComClickPara2);
        clearInterval(movimentarComClickPara3);
        clearInterval(movimentarComClickPara4);
        clearInterval(movimentarComClickPara5);
        let reiniciar = prompt("Houve uma colisão!!! O teu tempo foi de " + tempo + "segundos. Desejas continuar a jogar? 's' ou 'S' para recomeçar.");
        if (reiniciar === "s" || reiniciar === "S") location.href = "jogoCarroMobile.html";
        else location.href = "../index.html";
    }
}
const loop = setInterval(() => {
    const carroVermelho = document.querySelector('#vermelho');
    const posicaoCarroVermelho = carroVermelho.offsetLeft;
    testarBatida(posicaoCarroVermelho, 1, "vermelho", carroVermelho);
    const carroVerde = document.querySelector('#verde');
    const posicaoCarroVerde = carroVerde.offsetLeft;
    testarBatida(posicaoCarroVerde, 2, "verde", carroVerde);
    const carroAzul = document.querySelector('#azul');
    const posicaoCarroAzul = carroAzul.offsetLeft;
    testarBatida(posicaoCarroAzul, 3, "azul", carroAzul);
    const carroPreto = document.querySelector('#preto');
    const posicaoCarroPreto = carroPreto.offsetLeft;
    testarBatida(posicaoCarroPreto, 4, "preto", carroPreto);
    const carroAmarelo = document.querySelector('#amarelo');
    const posicaoCarroAmarelo = carroAmarelo.offsetLeft;
    testarBatida(posicaoCarroAmarelo, 5, "amarelo", carroAmarelo);
    console.log(posicaoCarroAmarelo)
}, 3)