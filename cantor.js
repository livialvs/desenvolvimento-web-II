const Sequelize = require('sequelize');
const database = require('./db');

const Cantor = database.define('cantor', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    generoMusical: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.DATE
    }
})

    try {
        Cantor.sync({ force: false });
        console.log('tabela criada com sucesso :)')
    } catch (error) {
        console.error('erro ao criar tabela: ', error);
    }

module.exports = Cantor;