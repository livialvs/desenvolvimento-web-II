var valorCombustivel = parseFloat(prompt('digite o valor do combustível: '))
while (isNaN(valorCombustivel)) {
    valorCombustivel = parseFloat(prompt('inválido! \ndigite o valor do combustível: '))
}

var distanciaKm = parseFloat(prompt('digite a distância em quilômetros: '))
while (isNaN(distanciaKm)) {
    distanciaKm = parseFloat(prompt('inválido! \ndigite a distância em quilômetros: '))
}

var quantidadePecas = parseInt(prompt('digite a quantidade de peças: '))
while (isNaN(quantidadePecas)) {
    quantidadePecas = parseInt(prompt('inválido! \ndigite a quantidade de peças: '))
}

var regiao = prompt('digite a região (1-Sul, 2-Sudeste e 3-Centro-oeste): ')
while (regiao !== '1' && regiao !== '2' && regiao !== '3') {
    regiao = prompt('inválido! \ndigite a região (1-Sul, 2-Sudeste e 3-Centro-oeste): ')
}

var rastreamento = prompt('deseja rastreamento? (S-sim e N-não): ')
rastreamento = rastreamento.toLocaleUpperCase()
while (rastreamento !== 'S' && rastreamento !== 'N') {
    rastreamento = prompt('caracter inválido! \ndeseja rastreamento? (S-sim e N-não):')
    rastreamento = rastreamento.toLocaleUpperCase()
}

var freteKm = valorCombustivel * distanciaKm
var fretePecas = 0
var freteRastreamento = 0
var freteTotal = 0


if (regiao === '1') {
    if (rastreamento === 'S') {
        freteRastreamento =+ 200
    } else {
        freteRastreamento = 0
    }
    if (quantidadePecas <= 1000) {
        fretePecas = quantidadePecas * 1
    } else {
        fretePecas = (1000 * 1) + ((quantidadePecas - 1000) * 0.9)
    }
}


if (regiao === '2') {
    if (rastreamento === 'S') {
        freteRastreamento =+ 200
    } else {
        freteRastreamento = 0
    }
    if (quantidadePecas <= 1000) {
        fretePecas = quantidadePecas * 1.20
    } else {
        fretePecas = (1000 * 1.20) + ((quantidadePecas - 1000) * 1.056)
    }
}


if (regiao === '3') {
    if (rastreamento === 'S') {
        freteRastreamento =+ 200
    } else {
        freteRastreamento = 0
    }
    if (quantidadePecas <= 1000) {
        fretePecas = quantidadePecas * 1.30
    } else {
        fretePecas = (1000 * 1) + ((quantidadePecas - 1000) * 1.131)
    }
}

freteTotal = freteKm + fretePecas + freteRastreamento

document.write(`taxa de rastreamento: R$ ${freteRastreamento.toFixed(2)} <br>`)
document.write(`valor do frete pelas peças: R$ ${fretePecas.toFixed(2)} <br>`)
document.write(`valor do frete por quilômetro: R$ ${freteKm.toFixed(2)} <br>`)
document.write(`valor total do frete: R$ ${freteTotal.toFixed(2)} <br>`)