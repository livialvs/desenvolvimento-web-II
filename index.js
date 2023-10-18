(async () => {

    const db = require('./db.js') 

    
     // create estudio

     console.log('insert into estudio')
     const criarEstudio1 = await db.createEstudio({
         estudio_nome: 'Studio Ghibli',
         estudio_pais: 'Japão'
     })
     console.log(criarEstudio1)
     
     console.log('insert into estudio')
     const criarEstudio2 = await db.createEstudio({
         estudio_nome: 'A24',
         estudio_pais: 'Estados Unidos'
     })
     console.log(criarEstudio2)

     console.log('insert into estudio')
     const criarEstudio3 = await db.createEstudio({
         estudio_nome: 'Warner Bros. Pictures',
         estudio_pais: 'Estados Unidos'
     })
     console.log(criarEstudio3)


    // read estudio

    console.log('select * from estudio')
    const estudios = await db.readEstudio()
    console.log(estudios)


    // update estudio

    console.log('update into estudio')
    const atualizarEstudio = await db.updateEstudio(1, {
        estudio_nome: 'Studio Ghibli Inc.',
        estudio_pais: 'Japão'
    })
    console.log(atualizarEstudio)


    // delete estudio 

    console.log('delete from estudio')
    const deletarEstudio = await db.deleteEstudio(3)
    console.log(deletarEstudio)



    // create filme

    console.log('insert into filme')
    const criarFilme1 = await db.createFilme({
        filme_titulo: 'A Viagem de Chihiro',
        filme_diretor: 'Hayao Miyazaki',
        filme_ano_lancamento: 2001,
        filme_genero: 'Animação',
        filme_duracao_min: 125,
        estudio_id: 1
    })
    console.log(criarFilme1)

    
    console.log('insert into filme')
    const criarFilme2 = await db.createFilme({
        filme_titulo: 'Pearl',
        filme_diretor: 'Ti West',
        filme_ano_lancamento: 2022,
        filme_genero: 'Terror',
        filme_duracao_min: 102,
        estudio_id: 2
    })
    console.log(criarFilme2)

    console.log('insert into filme')
    const criarFilme3 = await db.createFilme({
        filme_titulo: 'Past Lives',
        filme_diretor: 'Celine Song',
        filme_ano_lancamento: 2023,
        filme_genero: 'Drama',
        filme_duracao_min: 106,
        estudio_id: 2
    })
    console.log(criarFilme3)

    
    // read filme

    console.log('select * from filme')
    const filmes = await db.readFilme()
    console.log(filmes)

    
    // update filme

    console.log('update into filme')
    const atualizarFilme = await db.updateFilme(1, {
        filme_titulo: 'Meu Amigo Totoro',
        filme_diretor: 'Hayao Miyazaki',
        filme_ano_lancamento: 1988,
        filme_genero: 'Animação',
        filme_duracao_min: 86,
        estudio_id: 1
    })
    console.log(atualizarFilme)


    // delete filme

    console.log('delete from filme')
    const deletarFilme = await db.deleteFilme(3)
    console.log(deletarFilme)


    // consulta usando join 
    
    console.log('consultar filmes com estúdio usando join')
    const filmesComEstudio = await db.listarFilmeComEstudio()
    console.log(filmesComEstudio)
    
}) ();
