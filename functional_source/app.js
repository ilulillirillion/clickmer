// vim: set ft=javascript:


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();
app.set('port', 5000);

const session = require('./session.js');
app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../functional_client/')));

app.get('/', function(request, response) {
  return response.sendFile(path.join(__dirname, '../functional_client/test.html'));
});


module.exports = app;
