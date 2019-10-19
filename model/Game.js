// vim: set ft=javascript:


const logger = require('./logger.js');
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
      socket.on('connect_player', async function(data, callback) {
        //logger.info('test');
        let player = await new Promise((resolve, reject) => {
          try {
            resolve(self.connectPlayer(socket));
          } catch(error) {
            logger.error(error);
            reject(null);
          };
        });
        logger.warn(`testplayer ${player}`, player);
        //self.players.push(player);
        callback(player);
      });
    });

  };

  //connectPlayer() { logger.warn('test') };

  connectPlayer = require('./connectPlayer.js');
  /*
  connectPlayer() {
    require('./connectPlayer.js')();
  };
  */
  
};


module.exports = Game;
