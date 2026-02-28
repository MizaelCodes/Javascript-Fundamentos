/*
Desenvolva um programa em JavaScript que calcule o valor total gasto em uma viagem com base nas seguintes informações:

- Valor da gasolina (por litro)
- Consumo médio do veículo (km por litro)
- Distância percorrida (em km)
*/

function ValorViagem() {
    let ValorGasolina = document.getElementById('gasolina').value;
    let ConsumoMedio = document.getElementById('consumo').value;
    let DistanciaPercorrida = document.getElementById('distancia').value;

    let QuilometrosPorLitro = DistanciaPercorrida / ConsumoMedio;
    let ValorTotal = QuilometrosPorLitro * ValorGasolina

    ValorTotal = document.getElementById('resultado').innerText = ValorTotal
}