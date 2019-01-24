const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mysql = require('mysql');

// Express app setup
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12D@tabases21',
  database: 'FlashMe',
  port: 3306,
})

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log('Connected to DB');
})

global.db = db;

// log requests to console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Default catch-all route, returns JSON welcome message
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Flash-Me',
}));

module.exports = app;