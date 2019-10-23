// vim: set ft=javascript:


//const logger = require('./functional_source/logger.js');
const logger = require('./logger.js');
//const express = require('express');
//const app = require('./functional_source/app.js');

// Import the server module
//const server = require('./functional_source/server.js');
const server = require('./server.js');


// Import the io object
//const io = require('./functional_source/io.js');


var io = require('./io.js');


//const console = require('./console.js');


logger.info('Clickmer started');
//const Game = require('./functional_source/Game.js');
const Game = require('./Game.js');
var game = new Game({ io: io });

// TODO: test moving this back into game?
io.on('connection', async function(socket) {
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
      resolve(game.connectPlayer(socket));
    } catch(error) {
      logger.error(error);
      reject(null);
    };
  });
  //game.players[socket.id] = player;
  game.players[player.account_id] = player;
});


const console = require('./console.js');
process.stdin.on('data', function(raw_text) {
  let text = raw_text.trim();
  if (text === 'regenerate_tiles') {
    logger.warn('Regenerating tiles');
    game.map.createTiles();
  } else if (text === 'log_level_debug') {
    logger.level = 'debug';
  } else if (text === 'log_level_info') {
    logger.level = 'info';
  } else if (text === 'log_level_warn') {
    logger.level = 'warn';
  } else if (text === 'log_level_error') {
    logger.level = 'error';
  } else if (text === 'log_level_critical') {
    logger.level = 'critical';
  } else if (text === 'nolog') {
    logger.level = 'critical'; 
  } else {
    logger.warn(`Unrecognized text: <${text}>`);
  }
});


setInterval(function() {
  game.tick();
}, 1000);
