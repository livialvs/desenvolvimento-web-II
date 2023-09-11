var codigo = parseInt(prompt('digite o código do funcionário: '))
while (isNaN(codigo)) {
    codigo = parseInt(prompt('código inválido! \ndigite o código do funcionário: '))
}

var horasTrabalhadas = parseInt(prompt('digite a quantidade de horas trabalhadas: '))
while (isNaN(horasTrabalhadas)) {
    horasTrabalhadas = parseInt(prompt('número inválido! \ndigite a quantidade de horas trabalhadas: '))
}

var turno = prompt('digite o turno (M-matutino, V-vespertino, N-noturno): ')
turno = turno.toLocaleUpperCase()
while (turno !== 'M' && turno !== 'V' && turno !== 'N') {
    turno = prompt('caracter inválido! digite o turno (M-matutino, V-vespertino, N-noturno): ')
    turno = turno.toLocaleUpperCase()
}

var categoria = prompt('digite a categoria (G-gerente, F-funcionário): ')
categoria = categoria.toLocaleUpperCase()
while (categoria !== 'G' && categoria !== 'F') {
    categoria = prompt('caracter inválido! \ndigite a categoria (G-gerente, F-funcionário): ')
    categoria = categoria.toLocaleUpperCase()
}

var salarioMinimo = parseFloat(prompt('digite o salário mínimo: '))
while (isNaN(salarioMinimo)) {
    salarioMinimo = parseFloat(prompt('número inválido! \ndigite o salário mínimo: '))
}


var valorHora = 0

if (categoria === 'G' && turno === 'N') {
    valorHora = salarioMinimo * 0.05
} else if (categoria === 'G' && turno === 'M' || turno === 'V') {
    valorHora = salarioMinimo * 0.04
} else if (categoria === 'F' && turno === 'N') {
    valorHora = salarioMinimo * 0.02
} else {
    valorHora = salarioMinimo * 0.01
}

var salarioInicial = horasTrabalhadas * valorHora

var auxilioAlimentacao = 0

if (salarioInicial <= 800) {
    auxilioAlimentacao = salarioInicial * 0.25
} else if (salarioInicial > 800 && salarioInicial <= 1200) {
    auxilioAlimentacao = salarioInicial * 0.20
} else {
    auxilioAlimentacao = salarioInicial * 0.15
}

var salarioFinal = salarioInicial + auxilioAlimentacao

alert(`código do funcionário: ${codigo} \nnúmero de horas trabalhadas: ${horasTrabalhadas} \nvalor da hora trabalhada: ${valorHora.toFixed(2)} \nsalário inicial: ${salarioInicial.toFixed(2)} \nauxílio alimentação: ${auxilioAlimentacao.toFixed(2)} \nsalário final: ${salarioFinal}`)