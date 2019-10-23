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


logger.info('Clickmer started');
//const Game = require('./functional_source/Game.js');
const Game = require('./Game.js');
var game = new Game({ io: io });

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


setInterval(function() {
  game.tick();
}, 1000);
