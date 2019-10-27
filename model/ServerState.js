// vim: set ft=javascript:

const logger = require('./logger.js');

class ServerState {
  constructor(
      {
        players = null
      } = 
      {
        players: null
      }
      ) {
    logger.debug('Constructing a new ServerState object.');
    this.players = players;
  }
}

module.exports = ServerState;
