const env = require('./env');
const mysql = require('mysql')

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const rawSQL = mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USERNAME,
  password:env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT,
  database_name: env.DATABASE_NAME,
})

rawSQL.connect(function(err) {
  if (err) throw err;
  console.log('Connected, ready for raw SQL.')
});

module.exports = rawSQL;