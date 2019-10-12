// vim set ft=javascript


import Thing from '../classes/Thing.js';


class Root extends Thing {

  constructor() {
    super();

    this.lib = {
      express = require('express'),
      http = require('http'),
      path = require('path'),
      socketIO = require('socket.io')
    };

    this.app = this.lib.express();
    this.app.set('port', 5000);
    this.app.use('/view', this.lib.express.static(__dirname + '/view')
    this.app.get('/', function(request, response) {
      response.sendFile(path.join(__dirname, 'view/index.hml'));
    };

    this.server = this.lib.http.Server(app);
    this.server.listen(5000, function() {
      console.info('Starting server on port 5000');
    });

    this.io = this.lib.socketIO(server);
    this.io.on('connection', function(socket) {});

    let _test_players = {};

    this.io.on('connection', function(socket) {
      
      socket.on('new_player', function() {
        test_players[socket.id] = {
          x: 300,
          y: 300
        };
      });

    });

    setInterval(function() {
      this.io.sockets.emit('state', test_players);
    }, 1000 / 60);

  };

};
      
