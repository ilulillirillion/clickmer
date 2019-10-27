// vim: set ft=javascript:


//const logger = require('./functional_source/logger.js');
const logger = require('./logger.js');
//const express = require('express');
//const app = require('./functional_source/app.js');

// Import the server module
//const server = require('./functional_source/server.js');
const server = require('./server.js');

const runSql = require('./runSql.js');


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
  logger.info(`Got a new connection on socket <${socket.id}>.`);
  if (!socket.handshake.session.username) {
    logger.warn('Ignoring strange connection.');
    return;
  };
  //socket.on('connect_player', async function(data, callback) {
  logger.info(`Handling a connect_player event on socket <${socket.id}>.`);
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
  //game.players[player.account_id] = player;
  game.players[socket.id] = player;

  socket.on('getid', function(callback) {
    //return game.players[socket.id];
    logger.warn(`TEST ${socket.id}`, game.players);
    account_id = game.players[socket.id].account_id;
    logger.warn(`Sending account_id <${account_id}>.`);
    callback(account_id);
  });


  socket.on('state', async function(client_player) {
    logger.warn(`Responding to client state (<${client_player.client_x}>, <${client_player.client_y}>.`, client_player);

    // get client x and y
    //let client_x = client_player.x + client_player.x_delta;
    //let client_y = client_player.y + client_player.y_delta;
    player.x = client_player.x + client_player.x_delta;
    player.y = client_player.y + client_player.y_delta;
    

    //player.x = client_player.x;
    //player.y = client_player.y;
    let results = await new Promise((resolve, reject) => {
      try { 
        //resolve(runSql(`UPDATE players SET x = ${player.x}, y = ${player.y} WHERE id = ${player.account_id};`));
        //resolve(runSql(`UPDATE players SET x = ${player.client_x}, y = ${player.client_y} WHERE id = ${player.account_id};`));
        //resolve(runSql(`UPDATE players SET x = ${client_player.client_x}, y = ${client_player.client_y} WHERE id = ${client_player.account_id};`));
        //resolve(runSql(`UPDATE players SET x = ${client_x}, y = ${client_y} WHERE id = ${client_player.account_id};`));
        resolve(runSql(`UPDATE players SET x = ${player.x}, y = ${player.y} WHERE id = ${client_player.account_id};`));
      } catch(error) {
        logger.error('Got update player error.', error);
        reject(null);
      }
    });

    logger.warn('Got update player results.', results);
  }); 

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
