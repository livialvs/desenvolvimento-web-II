const express = require("express")
const app = express()

app.set('view engine', 'ejs')

app.get("/",(requisicao,resposta) => {
    var nomeTS = 'Taylor Alison Swift'
    var idadeTS = 33
    var quantidade = 10

    resposta.render('index',{
        nomeTS: nomeTS,
        idadeTS: idadeTS,
        quantidade: quantidade,
    })
})

app.get("/evermore",(requisicao,resposta) => {
    var musica1 = 'gold rush'
    var qntMusica1 = 15
    var ano1 = 2020

    resposta.render('evermore',{
        musica1: musica1,
        qntMusica1: qntMusica1,
        ano1: ano1,
    })
})

app.get("/folklore",(requisicao,resposta) => {
    var musica2 = 'august'
    var qntMusica2 = 17
    var ano2 = 2020

    resposta.render('folklore',{
        musica2: musica2,
        qntMusica2: qntMusica2,
        ano2: ano2,
    })

})


app.listen(3000,()=>{console.log('app rodando')})