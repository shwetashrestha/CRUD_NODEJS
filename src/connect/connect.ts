let Sequelize = require('sequelize')

module.exports = new Sequelize('shwetacrud', 'postgres', 'shweta', {
  host: 'localhost',
    logging:console.log,
  dialect: 'postgres',
  port:5433,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});