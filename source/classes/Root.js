// vim set ft=javascript


const Thing = require('../classes/Thing.js');
const Game = require('../classes/Game.js');
const logger = require('../classes/Logger.js');


class Root extends Thing {
//class Root {

  /*
  constructor({ uuid = null, name = null, app, server, io } =
              { uuid: null, name: null, app, server, io }) {
              //{ uuid: null, name: null }) {
    super({ uuid, name });
  */
  constructor({ uuid = null, name = null } =
              { uuid: null, name: null }) {
              //{ uuid: null, name: null }) {
    super({ uuid, name });

    /*
    this.app = app;
    this.server = server;
    this.io = io;

    this.io.on('connection', function(socket) {});

    this.players = {};

    this.io.on('connection', function(socket) {
      
      socket.on('new_player', function() {
        logger.info('new player connected');
        players[socket.id] = {
          x: 300,
          y: 300
        };
      });

    });
    */

    this.game = new Game();

    logger.info(io);

    this.players = [];
    let self = this;
    setInterval(function() {
      io.sockets.emit('state', self.players);
      self.game.tick();
    //}, 1000 / 60);
    }, 1000);


    /*
    this.angular = Angular.module('Clickmer', []);
    angular.controller('Controller', function($scope) {
      $scope.game = this.game;
    });
    */


  };

};

module.exports = Root;
