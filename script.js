'use strict'

const botaoadicao = document.getElementById('somar');

function somar() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    const resultado = num1 + num2;
}

botaoadicao.onclick = somar