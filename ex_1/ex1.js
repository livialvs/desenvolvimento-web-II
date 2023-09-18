var nome = prompt('digite seu nome: ')

var altura = parseFloat(prompt('digite sua altura em cm: '))
while (isNaN(altura)){
    altura = parseFloat(prompt('inválido! \ndigite sua altura em cm: '))
}

var peso = parseFloat(prompt('digite seu peso: '))
while (isNaN(peso)){
    peso = parseFloat(prompt('inválido! \ndigite seu peso: '))
}

altura = altura/100

massa = peso/(altura**2)

if (massa < 16){
    resultado = 'baixo peso muito grave'
} else if (16 <= massa && massa <= 16.99){
    resultado = 'baixo peso grave'
} else if (17 <= massa && massa <=18.49){
    resultado = 'baixo peso'
} else if (18.50 <= massa && massa <= 24.99){
    resultado = 'peso normal'
} else if (25 <= massa && massa <= 29.99){
    resultado = 'sobrepeso'
} else if (30 <= massa && massa <= 34.99){
    resultado = 'obesidade grau I'
} else if (35 <= massa && massa <= 39.99){
    resultado = 'obesidade grau II'
} else {
    resultado = 'obesidade grau III'
}

alert(`${nome} possui índice de massa corporal igual a ${massa.toFixed(2)}, sendo classificado como: ${resultado}`)