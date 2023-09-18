var nota1 = parseFloat(prompt('insira a primeira nota: '))
while (isNaN(nota1)){
    nota1 = parseFloat(prompt('inválido! \ndigite a primeira nota: '))
}

var nota2 = parseFloat(prompt('insira a segunda nota: '))
while (isNaN(nota2)){
    nota2 = parseFloat(prompt('inválido! \ndigite a segunda nota: '))
}

var nota3 = parseFloat(prompt('insira a terceira nota: '))
while (isNaN(nota3)){
    nota3 = parseFloat(prompt('inválido! \ndigite a terceira nota: '))
}

media = ((2 * nota1) + (5 * nota2) + (3 * nota3))/(2 + 5 +3)

if(media > 9 && media <= 10){
    classificacao = "A"
} else if(media > 8 && media <= 9){
    classificacao = "B"
} else if(media > 7 && media <= 8){
    classificacao = "C"
} else if(media > 6 && media <= 7){
    classificacao = "D"
} else if(media > 5 && media <= 6){
    classificacao = "E"
} else{
    classificacao = "F"
}

document.write(`a média do aluno é = ${media} e sua classificação é ${classificacao}`)