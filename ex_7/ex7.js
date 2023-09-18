var data = prompt('digite a data no formato "dd/mm/aaaa": ')

data = data.split('/')

var mesesNomes = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

var mesNome = mesesNomes[parseInt(data[1]) - 1]

alert(`dia ${data[0]} de ${mesNome} de ${data[2]}`)