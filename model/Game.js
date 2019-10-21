// vim: set ft=javascript:


const logger = require('./logger.js');
const Thing = require('./Thing.js');
const Map = require('./Map.js');


class Game extends Thing {
  constructor({ io, uuid = null, name = null } =
              { io, uuid: null, name: null }) {

    super({ uuid, name });

    this.io = io;

    this.population = [];

    this.map = new Map();

    // TODO: re-implement this
    //this.world = new World();

    this.players = {};

    //let self = this;
    /*
    setInterval(function() {
      io.sockets.emit('state', self.players);
    }, 1000);
    */

    let self = this;
    this.io.on('connection', async function(socket) {
      logger.info(`Got a new connection on socket <${socket}>.`);
      if (!socket.handshake.session.username) {
        logger.warn('Ignoring strange connection.');
        return;
      };
      //socket.on('connect_player', async function(data, callback) {
      logger.info(`Handling a connect_player event on socket <${socket}>.`);
      //logger.info('test');
      let player = await new Promise((resolve, reject) => {
        try {
          resolve(self.connectPlayer(socket));
        } catch(error) {
          logger.error(error);
          reject(null);
        };
      });
      //self.players.push(player);
      self.players[socket.id] = player;
      //callback(player);
    });

  };

  //connectPlayer() { logger.warn('test') };

  get state() {
    let state = {
      players: this.players,
      tiles: this.map.tiles
    }
    return state;
  }

  tick() {

    logger.debug('Ticking game.');

    // Check all sockets for any new players
    /*
    let self = this;
    for (let socket of Object.values(this.io.sockets)) {
      //if (socket.connected && (!socket.id in this.players)) {
      if (socket.connected) {
        logger.debug('Handling a new player connection.');
        let player = await new Promise((resolve, reject) => {
          try {
            resolve(self.connectPlayer(socket));
          } catch(error) {
            logger.error(error);
            reject(null);
          };
        });
        self.players[socket.id] = player;
      }
    }
    */

    // Tick all of the players.
    for (let player of Object.values(this.players)) {
      player.tick();
    }

    // Send state to all players.
    //this.io.sockets.emit('state', this.players);
    logger.debug('Sending state to players');
    this.io.sockets.emit('state', this.state);

  }

  connectPlayer = require('./connectPlayer.js');
  /*
  connectPlayer() {
    require('./connectPlayer.js')();
  };
  */
  
};


module.exports = Game;
