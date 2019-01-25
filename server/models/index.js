const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(`${__dirname}/../config/config.json`)[env];
const db = {};


// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable]);
// } else {
//   sequelize = new Sequelize(
//     config.database, config.username, config.password, config
//   );
// }
const sequelize = new Sequelize('flashme', 'root', '12D@tabases21', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  port: 3306,

  pool: {
    max: 25,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  // Quick example
  sequelize.query("SELECT * FROM decks").then(myTableRows => {
    console.log(myTableRows)
  })

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = sequelize;
  db.Sequelize = Sequelize;

  module.exports = db;