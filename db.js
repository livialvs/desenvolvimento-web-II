const Sequelize = require('sequelize');

const sequelize = new Sequelize('crud_sequelize', 'root', 'fatec', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco de dados:', error);
  });

module.exports = sequelize;
