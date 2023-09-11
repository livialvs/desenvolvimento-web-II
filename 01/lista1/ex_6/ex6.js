while (true) {
    var numero1 = parseFloat(prompt('digite o primeiro número: '))
    var operacao = prompt('digite o tipo da operação ("soma" ou "subtração"):')
    var numero2 = parseFloat(prompt('digite o segundo número: '))


    function calculo(numero1, numero2, operacao){
        if (operacao === 'soma') {
            return numero1 + numero2
        } else if (operacao === 'subtração') {
            return numero1 - numero2
        } else {
            return false
        }
    }

    var resultado = calculo(numero1, numero2, operacao)

    if(resultado !== false){
        alert(`o resultado é ${resultado}`)
        break
    } else{
        alert('operação inválida, tente novamente.')
    }


}


