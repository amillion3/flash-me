const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Express ap setup
const app = express();

// log requests to console
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Default catch-all route, returns JSON welcome message
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;