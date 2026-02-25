/*
Exercicio 1

Uma pessoa tem R$ 250.
Ela compra um produto de R$ 89.90.
Calcule quanto sobra.
*/

const ValorInicial = 250
const Produto = 89.90

const Resultado = ValorInicial - Produto;
console.log('O Valor restante é: $' + Resultado)

/*
Exercicio 2

Crie um programa que calcula a idade de uma pessoa calculando as seguintes informações:
Ano de nascimento.
Ano Atual
*/

let AnoNascimento = parseInt(prompt('Digite o ano de seu Nascimento'))
let AnoAtual = parseInt(prompt('Digite o ano Atual da data de hoje'))
let ResultadoAno = AnoAtual - AnoNascimento
alert('Sua idade atual é: ' + ResultadoAno)

/*
Exercicio 3

Crie um programa que faça uma calculadora basica do numero informado.
*/

let ValorBase = parseInt(prompt('Informe um valor para calcular'))
alert('O Resultado da Multiplicação do numero informado é: \n\n' + 
    ValorBase * 1 + '\n' +
    ValorBase * 2 + '\n' +
    ValorBase * 3 + '\n' +
    ValorBase * 4 + '\n' +
    ValorBase * 5 + '\n' +
    ValorBase * 6 + '\n' +
    ValorBase * 7 + '\n' +
    ValorBase * 8 + '\n' +
    ValorBase * 9 + '\n' +
    ValorBase * 10
)

/*
Exercicio 4

Crie um programa que:

Receba dois números.
Mostre:
Soma, Subtração, Multiplicação, Divisão e o Resto da divisão
*/

let num1 = parseFloat(prompt('Digite um numero'))
let num2 = parseFloat(prompt('Digite outro numero'))
let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2
let resto = num1 % num2

alert('Resultados: \n A Soma entre os dois numeros é: ' + soma + 
    '\n A Subtração entre os dois numeros é: ' + subtracao +
    '\n A Multiplicação entre os dois numeros é: ' + multiplicacao + 
    '\n A Divisão entre os dois numeros é: ' + divisao +
    '\n O Valor restante entre os dois numeros é: ' + resto
)