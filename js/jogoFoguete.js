let motor = false
let altitude = 60;
let combustivel = 45;
let velocidade = 0;
let aceleracao = 0;
let intervalo;
let liga = () => {
    motor = true;
    document.getElementById("idNave").src = "../img/fogueteFogo.png";
}
let desliga = () => {
    motor = false
    document.getElementById("idNave").src = "../img/foguete.png";
}
let ciclo = () => {
    if (combustivel <= 0) desliga();
    if (motor) {
        aceleracao = 0.2;
        combustivel--;
    }
    else aceleracao = -0.3;
    velocidade += aceleracao;
    altitude += velocidade;
    if (altitude <= 5) {
        if (velocidade <= -2.4) {
            let reiniciar = prompt("Nave EXPLODIU!!! Desejas continuar a jogar? 's' ou 'S' para recomeçar.");
            if (reiniciar === "s" || reiniciar === "S") location.href = "jogoFoguete.html";
            else location.href = "../index.html";
        }
        else {
            let reiniciar = prompt("Pouso bem sucedido. Desejas continuar a jogar? 's' ou 'S' para recomeçar.");
            if (reiniciar === "s" || reiniciar === "S") location.href = "jogoFoguete.html";
            else location.href = "../index.html";
        }
        clearInterval(intervalo);
        showLoading();
    }
    document.getElementById("idInfo").innerHTML = `velocidade: ${velocidade.toFixed(2)}<br/>combustivel: ${combustivel}<br/>`
    document.getElementById("idNave").style.top = (60 - altitude) + "vh";
}
intervalo = window.setInterval(ciclo, 100);
document.addEventListener('mousedown', liga);
document.addEventListener('mouseup', desliga);