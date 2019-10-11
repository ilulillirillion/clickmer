const logger = require('../misc/winston_logger.js');
const Thing = require('../classes/Thing.js');
const Colony = require('../classes/Colony.js');


class Player extends Thing {
  constructor({ player_id = null, socket_id = null, 
                uuid = null, name = 'player' } =
              { player_id: null, socket_id: null, 
                uuid: null, name: 'player' }) {
    logger.info(`socket_id: <${socket_id}>`);
    super({ socket_id, uuid, name });

    this.player_id = player_id;

    //this.colony_location = 0;

    //this.colony = new Colony();
    logger.info('constructed player', arguments, this);
    logger.info(`constructed <${this.uuid}> with player_id: <${this.player_id}>, socket_id: <${this.socket_id}>.`);
    //logger.info('%o', this);

  };

  tick() {
    //console.info(`Player colony`, this.colony);
  };

};

module.exports = Player;
