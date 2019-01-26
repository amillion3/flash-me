const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.cards = require('../models/cards.js')(sequelize, Sequelize);
db.decks = require('../models/decks.js')(sequelize, Sequelize);
db.userdeckpairing = require('../models/userdeckpairing.js')(sequelize, Sequelize);

//Relations
// db.pets.belongsTo(db.owners);
// db.owners.hasMany(db.pets);

module.exports = db;