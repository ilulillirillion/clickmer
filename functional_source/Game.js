// vim: set ft=javascript:


const logger = require('./logger.js');


const players = [];


const tick = players => {
  logger.info(`ticking game with players <${players}>.`);
};


const addPlayer = (player, players) => {
  players.push(player);
  return players;
};


//const io = require('./io.js');


module.exports = players;
