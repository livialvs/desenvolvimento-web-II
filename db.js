const mysql = require('mysql2/promise')

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected') 
        return global.connection
    
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'fatec',
        database: 'crud'
    })

    global.connection = connection
    return connection
}


// create estudio  

async function createEstudio(estudio) {
    const conn = await connect()
    const sql = 'insert into estudio (estudio_nome, estudio_pais) values (?, ?);'
    const values = [estudio.estudio_nome, estudio.estudio_pais]
    return await conn.query(sql, values)
}


// read estudio

async function readEstudio() {
    const conn = await connect()
    const sql = 'select * from estudio;'
    const [estudios] = await conn.query(sql)
    return estudios
}


// update estudio

async function updateEstudio(estudio_id, estudio) {
    const conn = await connect()
    const sql = 'update estudio set estudio_nome = ?, estudio_pais = ? where estudio_id = ?;'
    const values = [estudio.estudio_nome, estudio.estudio_pais, estudio_id]
    return await conn.query(sql, values)
}


// delete estudio

async function deleteEstudio(estudio_id) {
    const conn = await connect()
    const sql = 'delete from estudio where estudio_id = ?;'
    return await conn.query(sql, [estudio_id])
}


// create filme

async function createFilme(filme) {
    const conn = await connect()
    const sql = 'insert into filme (filme_titulo, filme_diretor, filme_ano_lancamento, filme_genero, filme_duracao_min, estudio_id) values (?, ?, ?, ?, ?, ?);' 
    const values = [filme.filme_titulo, filme.filme_diretor, filme.filme_ano_lancamento, filme.filme_genero, filme.filme_duracao_min, filme.estudio_id]
    return await conn.query(sql, values)
}


// read filme

async function readFilme() {
    const conn = await connect()
    const sql = 'select * from filme;'
    const [filmes] = await conn.query(sql)
    return filmes
}


// update filme

async function updateFilme(filme_id, filme) {
    const conn = await connect()
    const sql = 'update filme set filme_titulo = ?, filme_diretor = ?, filme_ano_lancamento = ?, filme_genero = ?, filme_duracao_min = ?, estudio_id = ? where filme_id = ?;'
    const values = [filme.filme_titulo, filme.filme_diretor, filme.filme_ano_lancamento, filme.filme_genero, filme.filme_duracao_min, filme.estudio_id, filme_id]
    return await conn.query(sql, values) 
}


// delete filme

async function deleteFilme(filme_id) {
    const conn = await connect()
    const sql = 'delete from filme where filme_id = ?;'
    return await conn.query(sql, [filme_id])
}



// consulta usando join 

async function listarFilmeComEstudio() {
    const conn = await connect()
    const sql = 'select filme.filme_id, filme.filme_titulo, estudio.estudio_nome, estudio.estudio_pais from filme join estudio on filme.estudio_id = estudio.estudio_id;'
    const [filmeComEstudio] = await conn.query(sql)
    return filmeComEstudio
}

module.exports = {createFilme, readFilme, updateFilme, deleteFilme, createEstudio, readEstudio, updateEstudio, deleteEstudio, listarFilmeComEstudio}