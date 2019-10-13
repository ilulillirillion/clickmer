// vim: set ft=javascript:


const logger = require('./logger.js');
const runSql = require('./runSql.js');


const connectPlayer = async (socket) => {

  try { 
    
    logger.debug(`Connecting player on socket <${socket}>.`);

    let username = socket.handshake.session.username;
    let player;
    
    // TODO: this can be curried
    /*
    runSql(`SELECT id FROM accounts WHERE username = '${username}'`,
        function(results) {
    */
    //let get_id = new Promise((resolve, reject) => {
    let id_results = await new Promise((resolve, reject) => {
      let results = runSql(`SELECT id FROM accounts WHERE username = '${username}'`);
      resolve(results);
    });
    //let id_results = await get_id;
    
    //let get_player_data = Promise((resolve, reject) => {
    let player_results = await new Promise((resolve, reject) => {
      let results = runSql(`SELECT * FROM players WHERE id = '${id_results[0].id}'`);
      resolve(results);
    });
    //let player_results = await get_player_data;

    if (player_results.length <= 0) {
      logger.info('Creating new player');
    } else {
      logger.info('Loading saved player');
    };

    return 'dummy_player';

  } catch(error) {
    logger.warn(error);
  };

};


module.exports = connectPlayer;
