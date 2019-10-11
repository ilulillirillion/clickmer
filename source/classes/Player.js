const logger = require('../misc/winston_logger.js');
const Thing = require('../classes/Thing.js');
const Colony = require('../classes/Colony.js');


class Player extends Thing {
  constructor({ socket_id = null, uuid = null, name = 'player' } =
              { socket_id: null, uuid: null, name: 'player' }) {
    logger.info(`socket_id: <${socket_id}>`);
    super({ socket_id, uuid, name });

    //this.colony_location = 0;

    //this.colony = new Colony();
    logger.info('constructed player', arguments, this);
    logger.info(`constructed player with socket id <${this.socket_id}>.`);

  };

  tick() {
    //console.info(`Player colony`, this.colony);
  };

};

module.exports = Player;
