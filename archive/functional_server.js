// vim: set ft=javascript:


const logger = require('./source/misc/winston_logger.js');
const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const session = require('express-session')({
  secret: process.env.CLICKMER_SESSION_SECRET,
  resave: true,
  saveUninitialized: true
});
const shared_session = require('express-socket.io-session');
const getFromDatabase = require('./source/functions/getFromDatabase.js');


logger.info('Clickmer started');


var app = express();
app.set('port', 5000);


app.use(session);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParse.json());


app.use(express.static(path.join(__dirname, './functional_client/')));


app.get('/', function(request, response) {
  return response.sendFile(path.join(__dirname, 'functional_client/view/test.html'));
});


var server = http.server(app);
server.listen(5000, function() {
  logger.info('Server started on port 5000');
});


var io = socketIO(server);
io.use(shared_session(session, { autoSave: true } ));


const Game = require('./functional_source/Game.js');
