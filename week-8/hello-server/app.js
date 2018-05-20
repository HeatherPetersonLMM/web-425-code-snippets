const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist/hello-server/index.html'));
});

module.exports = app;
