var idade = prompt('idade: ')        
while (isNaN(idade)){
    idade = prompt('inválido! \ndigite sua idade: ')
}

if(idade >= 0 && idade < 15){
    alert('criança')
} else if(idade >= 15 && idade < 30){
    alert('jovem')
} else if(idade >= 30 && idade < 60){
    alert('adulto')
} else{
    alert('idoso')
}
