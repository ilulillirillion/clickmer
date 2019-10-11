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

/*
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : process.env.CLICKMER_MYSQL_PASSWORD,
	database : 'nodelogin'
});
*/

//winston.log('info', 'Clickmer started');
logger.info('Clickmer started');

// Instantiate an app from express and assign a port.
var app = express();
app.set('port', 5000);
// Serve client files in the client directory
//app.use(express.static(path.join(__dirname, './client/view')));

/*
app.use(session({
  secret: process.env.CLICKER_SESSION_SECRET,
  //secret: 'test',
  resave: true,
  save_uninitialized: true
}));
*/
app.use(session);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/')));
app.get('/', function(request, response) {
  response.redirect('/login');
});
//  response.sendFile(path.join(__dirname, 'client/view/index.html'));
  //response.sendFile(path.join(__dirname, 'client/view/main.js'));
//});
app.get('/login', function(request, response) {
  return response.sendFile(path.join(__dirname, 'client/view/login.html'));
});
logger.info('App created.');


app.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
    getFromDatabase(
        'SELECT * FROM accounts WHERE username = ? AND password = ?',
        [ username, password ],
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

    /*
		connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
      logger.info(arguments);
      logger.info(`${error}, ${results}, ${fields}`);
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				return response.redirect('/game');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});
    */


app.get('/game', function(request, response) {
	if (request.session.loggedin) {
		//response.send('Welcome back, ' + request.session.username + '!');
		//response.send('Welcome back, ' + request.session.username + '!');
    response.sendFile(path.join(__dirname, 'client/view/game.html'));
	} else {
		response.send('Please login to view this page!');
	}
});





var server = http.Server(app);
server.listen(5000, function() {
  //console.info('Starting server on port 5000');
  logger.info('Server started on port 5000');
});

var io = socketIO(server);


io.use(shared_session(session, {
  autoSave: true
}));

/*
//var parseCookie = require('connect').utils.parseCookie;
var parseCookie = require('cookie-parser');
io.set('authorization', function (data, accept) {
  if (data.headers.cookie) {
    data.cookie = parseCookie(data.headers.cookie);
    data.sessionID = data.cookie['express.sid'];
  } else {
    return accept('No cookie transmitted.', false);
  }
  accept(null, true);
});
*/


//const Root = require('./source/classes/Root.js');
//var root = new Root();

const Game = require('./source/classes/Game.js');
var game = new Game({ io: io });

/*
setInterval(function() {
  io.sockets.emit('state', game.players);
  //self.game.tick();
}, 1000 / 60);
*/
