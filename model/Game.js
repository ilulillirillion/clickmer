// vim: set ft=javascript:


const Thing = require('./Thing.js');


class Game extends Thing {
  constructor({ io, uuid = null, name = null } =
              { io, uuid: null, name: null }) {

    super({ uuid, name });

    this.io = io;

    this.population = [];

    // TODO: re-implement this
    //this.world = new World();

    this.players = {};

    let self = this;
    setInterval(function() {
      io.sockets.emit('state', self.players);
    }, 1000);

    this.io.on('connection', function(socket) {
      logger.info(`Got a new connection on socket <${socket}>.`);
      socket.on('connect_player', function() {
        return this.connectPlayer(socket);
      });
    });

  };

  connectPlayer = require('./connectPlayer.js');
  
};


module.exports = Game;
