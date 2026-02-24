/*
Exercicio 1

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