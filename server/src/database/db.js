const {Sequelize} = require('sequelize');
const database = require("../config");

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
  operatorsAliases: 0,
 
  pool: {
    max: database.max,
    min: database.pool.min,
    acquire: database.pool.acquire,
    idle: database.pool.idle
    }
   
  });


  module.exports = sequelize;