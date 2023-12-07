const Sequelize = require('sequelize');
const database = require('./db');
const Cantor = require('./cantor');

const Album = database.define('album', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoLancamento: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cantorId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

Album.belongsTo(Cantor, { as: 'cantor', foreignKey: 'cantorId', onDelete: 'CASCADE' });

    try {
        Album.sync({ force: false });
        console.log('tabela criada com sucesso :)')
    } catch (error) {
        console.error('erro ao criar tabela: ', error);
    }

module.exports = Album;