/*
Você deverá criar uma aplicação simples que contenha:
Uma imagem de uma lâmpada acessa (estado inicial).
Um botão com o texto "Desligar".

Ao clicar no botão:

A imagem da lâmpada deve mudar para a versão apagada.
O texto do botão deve mudar para "Ligar".

Ao clicar novamente:

A imagem deve voltar para a versão acessa.
O texto do botão deve voltar para "Desligar".
*/

function energia() {
    let botao = document.getElementById('btn')
    let luz = document.getElementById("bulbo")

    if (botao.innerText === 'Ligar') {
        botao.innerText = 'Desligar'
        luz.style.background = '#fffb00'
    }
    else {
        botao.innerText = 'Ligar';
        luz.style.background = '#fff'
    }
}