// vim: set ft=javascript:


//const logger = require('../library/logger.js');
const logger = require('./logger.js');
const getAccountIdFromUsername = require('./getAccountIdFromUsername');
const getPlayerDataFromAccountId = require('./getPlayerDataFromAccountId');
const setAccountPlayerData = require('./setAccountPlayerData');
const Player = require('./Player.js');


const connectPlayer = async (socket) => {
//async function connectPlayer(socket) {

  try {
    
    logger.debug(`Connecting player on socket <${socket}>.`);

    let username = socket.handshake.session.username;
    
    let account_id = await getAccountIdFromUsername(username);
    logger.debug(`account_id: <${account_id}>.`);
    /*
    logger.debug(`account_id: <${account_id[0]}>.`);
    logger.debug(`account_id: <${account_id.id}>.`);
    logger.log("account_id: %j", account_id);
    logger.debug(`account_id: <${JSON.stringify(account_id)}>.`);
    logger.debug(`account_id: <${JSON.stringify(account_id[0])}>.`);
    logger.debug(`account_id: <${JSON.stringify(account_id.id)}>.`);
    logger.debug(`account_id: <${JSON.stringify(account_id[0].id)}>.`);
    */

    let player_data = await getPlayerDataFromAccountId(account_id);

    if (player_data) {
      logger.info(`Loading saved player from data: <${JSON.stringify(player_data)}>.`);
      var player = new Player(
          { 
            account_id: player_data.id, 
            socket_id: socket.id,
            uuid: player_data.uuid
          }
      );
      logger.debug(`Loaded player with account_id: <${player.account_id}>, socket_id: <${player.socket_id}>, uuid: <${player.uuid}>.`); 
    } else {
      logger.info('(Simulated action) Creating new player.');
      var player = new Player(
          {
            account_id: account_id,
            socket_id: socket.id
          }
      );
      setAccountPlayerData(account_id, player);

      //return null;
    };
    return player;

    //return 'dummy_player';

  } catch(error) {
    logger.error(error);
  };

};


module.exports = connectPlayer;
