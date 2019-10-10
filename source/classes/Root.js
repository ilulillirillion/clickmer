// vim set ft=javascript


const Thing = require('../classes/Thing.js');
const Game = require('../classes/Game.js');


class Root extends Thing {
//class Root {

  constructor() {
    super();

    this.imports = {
      express: require('express'),
      http: require('http'),
      path: require('path'),
      socketIO: require('socket.io')
    };

    let self = this;
    this.app = this.imports.express();
    this.app.set('port', 5000);
    this.app.use('/view', this.imports.express.static(__dirname + '/view'));
    this.app.get('/', function(request, response) {
      response.sendFile(self.imports.path.join(__dirname, '../../view/index.html'));
    });

    this.server = this.imports.http.Server(this.app);
    this.server.listen(5000, function() {
      console.info('Starting server on port 5000');
    });

    this.io = this.imports.socketIO(this.server);
    this.io.on('connection', function(socket) {});

    this.test_players = {};

    this.io.on('connection', function(socket) {
      
      socket.on('new_player', function() {
        test_players[socket.id] = {
          x: 300,
          y: 300
        };
      });

    });

    this.game = new Game();

    setInterval(function() {
      self.io.sockets.emit('state', self.test_players);
      self.game.tick();
    }, 1000 / 60);


    /*
    this.angular = Angular.module('Clickmer', []);
    angular.controller('Controller', function($scope) {
      $scope.game = this.game;
    });
    */


  };

};

module.exports = Root;
