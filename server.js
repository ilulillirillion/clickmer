// vim: set ft=javascript


//const winston = require('winston');
//const logger = require('./source/classes/Logger.js');
var logger = require('./source/misc/winston_logger.js');
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
//var mysql = require('mysql');
var bodyParser = require('body-parser');
var session = require('express-session')({
  secret: process.env.CLICKMER_SESSION_SECRET,
  resave: true,
  saveUninitialized: true
});
var shared_session = require('express-socket.io-session');
var getFromDatabase = require('./source/functions/getFromDatabase.js');

//winston.log('info', 'Clickmer started');
logger.info('Clickmer started');

// Instantiate an app from express and assign a port.
var app = express();
app.set('port', 5000);

app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/')));
app.get('/', function(request, response) {
  response.redirect('/login');
});
app.get('/login', function(request, response) {
  return response.sendFile(path.join(__dirname, 'client/view/login.html'));
});
logger.info('App created.');

app.get('/registration', function(request, response) {
  return response.sendFile(path.join(__dirname, 'client/view/registration.html'));
});

app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
    getFromDatabase(
        //'SELECT * FROM accounts WHERE username = ? AND password = ?',
        //[ username, password ],
        `SELECT * FROM accounts WHERE username = '${username}' AND password = '${password}'`,
        function(results) {
      if (results.length > 0) {
        request.session.loggedin = true;
        request.session.username = username;
        return response.redirect('/game');
      } else {
        response.send('Incorrect username and/or password!');
      };
      response.end();
    });
  };
});

app.post('/register', function(request, response) {
  let username = request.body.username;
  let password = request.body.password;
  if (username && password) {
    getFromDatabase(
        `INSERT INTO accounts (username, password, email) VALUES ('${username}', '${password}', 'test@test.com')`, 
        function(results) {
      logger.info(results)
    });
    return response.redirect('/game');
  };
  response.end();
});


app.get('/game', function(request, response) {
	if (request.session.loggedin) {
    response.sendFile(path.join(__dirname, 'client/view/game.html'));
	} else {
		response.send('Please login to view this page!');
	}
});





var server = http.Server(app);
server.listen(5000, function() {
  logger.info('Server started on port 5000');
});

var io = socketIO(server);


io.use(shared_session(session, {
  autoSave: true
}));



const Game = require('./source/classes/Game.js');
var game = new Game({ io: io });

