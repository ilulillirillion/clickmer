// vim: set ft=javascript:


const Thing = require('./Thing.js');


// FIXME: lazy property declarations
class Player extends Thing {
  constructor(
      { account_id = null, socket_id = null, 
        uuid = null, name = 'player' } =
      { account_id: null, socket_id: null,
        uuid: null, name: 'player' }) {
    logger.debug(`Constructing a new player with arguments: <${JSON.stringify(arguments)}>.`);
    logger.warn(account_id);
    logger.warn(socket_id);
    logger.warn(uuid);
    logger.warn(name);

    super({ socket_id, uuid, name });

    this.account_id = account_id;

  };


};


module.exports = Player;
