/* Exercicio 1

Crie Três variaveis.
Uma chamada nome com seu nome, Uma chamada idade com sua idade, Uma chamada cidade com sua cidade.
Depois, exiba no console:
Meu nome é ___, tenho ___ anos e moro em ___. */

const nome = 'Ismael'
const idade = 24
const cidade = 'São Paulo'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em ' + cidade)

/*
Exercicio 2

Crie duas variáveis num1 e num2.
Some os valores e armazene o resultado em uma variável resultado.
Exiba no console.
*/

/*
Exercicio 3

Crie duas variáveis:

let a = 10;
let b = 20;

Troque os valores entre elas (sem criar uma terceira variável).
*/

var num1 = 2
var num2 = 3
var resultado = num1 + num2
console.log(resultado)

let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a); // 20
console.log(b); // 10

/*
Exercicio 4

Declare três variáveis:

a com valor "Positivo"
b com valor "Nulo"
c com valor "Negativo"

Peça ao usuário para digitar um número usando prompt().

Verifique:

Se o número for maior que 0 → mostrar "Este número é: Positivo"
Se for igual a 0 → mostrar "Este número é: Nulo"
Se for menor que 0 → mostrar "Este número é: Negativo"
Caso não seja um número → mostrar "Isto não é um número!"
*/

let x = 'Positivo'
let y = 'Nulo'
let z = 'Negativo'
let num = prompt('Digite um Numero');
if (num > 0) {
    alert('Este Numero é: ' + x)
}
else if (num == 0) {
    alert('Este Numero é: ' + y)
}
else if (num < 0) {
    alert('Este Numero é: ' + z)
}
else {
    alert('Isto não é um Numero!')
}
