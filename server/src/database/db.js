const {Sequelize} = require('sequelize');
const database = require("../config");

const sequelize = new Sequelize(database.database, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
  operatorsAliases: 0,
  define: {
    timestamps: false
},
 
  pool: {
    max: database.max,
    min: database.pool.min,
    acquire: database.pool.acquire,
    idle: database.pool.idle
    }
   
  });

  const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../models/user.model')(sequelize, Sequelize);
db.movie = require('../models/movie.model')(sequelize, Sequelize);
db.sale = require('../models/sales.model')(sequelize, Sequelize);

// db.sale.belongsToMany(db.user, { through: 'users_sales'});
// db.user.belongsToMany(db.sale, { through: 'users_sales'});
// db.sale.belongsToMany(db.movie, { through: 'users_sales'});
// db.movie.belongsToMany(db.sale, { through: 'users_sales'});

  module.exports = sequelize;