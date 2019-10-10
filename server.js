// vim: set ft=javascript


//const winston = require('winston');
const logger = require('./source/classes/Logger.js');
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

//winston.log('info', 'Clickmer started');
logger.info('Clickmer started');

// Instantiate an app from express and assign a port.
app = express();
app.set('port', 5000);

// Serve client files in the client directory
app.use(express.static(path.join(__dirname, 'client')));
app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'client/view/index.html'));
  response.sendFile(path.join(__dirname, 'client/view/main.js'));
});

server = http.Server(app);
server.listen(5000, function() {
  console.info('Starting server on port 5000');
});

const Root = require('./source/classes/Root.js');
var root = new Root();
