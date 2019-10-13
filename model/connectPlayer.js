// vim: set ft=javascript:


const connectPlayer = async (socket) => {

  try {
    
    logger.debug(`Connecting player on socket <${socket}>.`);

    let username = socket.handshake.session.username;
    
    let account_id = await getAccountIdFromUsername(username);

    let player_data = await getPlayerDataFromAccountId(account_id);

    if (player_data) {
      logger.info('(Simulated action) Loading saved player.');
    } else {
      logger.info('(Simulated action) Creating new player.');
    };

    return 'dummy_player';

  } catch(error) {
    logger.error(error);
  };

};


module.exports = connectPlayer;
