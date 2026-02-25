/*
Exercicio 1

Crie uma variável idade.
Verifique se a pessoa é maior de idade (18+).
Mostre:

"Maior de idade"
"Menor de idade"
*/

let idade = prompt('Digite sua idade')
if (idade >= 18) {
    alert('Maior de idade')
}
else {
    alert('menor de idade')
}

/*
Exercicio 2
Crie uma variável numero.
Verifique se ele é:

Positivo, Negativo ou Zero
*/

let numero = prompt('Digite um Numero')
if (numero > 0) {
    alert('Positivo')
}
else if (numero == 0) {
    alert('Zero')
}
else {
    alert('Negativo')
}

/*
Exercicio 3
Crie uma variável numero.
Verifique se ele é par ou ímpar.
*/

let num = prompt('Digite um Numero')
if (num % 2 == 0) {
    alert('Este Numero é Par')
}
else {
    alert('Este Numero é Impar')
}

/*
Exercicio 4

Crie uma variável nota.

Mostre:

"Aprovado" → nota >= 7
"Recuperação" → nota >= 5 e < 7
"Reprovado" → nota < 5
*/

let nota = prompt('Digite uma nota')
if (nota >= 7) {
    alert('Aprovado')
}
else if (nota >= 5 && nota < 7) {
    alert('Recuparação')
}
else {
    alert('Reprovado')
}

/*
Exercicio 5

Crie duas variáveis a e b.
Mostre qual é o maior (ou se são iguais).
*/

let a = prompt('Digite um Número')
let b = prompt('Digite outro Número')

if (a > b) {
    alert(a + ' é maior que ' + b)
}
else if (a === b) {
    alert(a + ' é igual a ' + b)
}
else {
    alert(b + ' é maior que ' + a)
}

/*
Exercicio 6

Crie valorCompra.
Se for maior que 100, aplique 10% de desconto.
Use operador ternário.
*/

let valorCompra = prompt('Digite o valor da compra')
let resultCompra = valorCompra > 100 ? valorCompra * 0.9 : valorCompra;
alert('O Valor da compra é de $' + resultCompra)

/*
Exercicio 7

Crie uma variável dia (1 a 7).
Use switch para mostrar:

1 → Domingo
2 → Segunda
3 → Terça
4 → Quarta
5 → Quinta
6 → Sexta
7 → Sábado
*/

let diaSemana = Number(prompt('Digite um Número'))
switch (diaSemana) {
    case diaSemana = 1:
        alert('Domingo')
        break
    case diaSemana = 2:
        alert('Segunda')
        break
    case diaSemana = 3:
        alert('Terça')
        break
    case diaSemana = 4:
        alert('Quarta')
        break
    case diaSemana = 5:
        alert('Quinta')
        break
    case diaSemana = 6:
        alert('Sexta')
        break
    case diaSemana = 7:
        alert('Sábado')
        break
        default: alert('Numero Invalido, tente novamente')
}