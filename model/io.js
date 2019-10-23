// vim: set ft=javascript:


const socketIO = require('socket.io');
const shared_session = require('express-socket.io-session');
const logger = require('./logger.js');
const server = require('./server.js');
const session = require('./session.js');

const connectPlayer = require('./connectPlayer.js');


var io = socketIO(server);
io.use(shared_session(session, { autoSave: true, pingTimeout: 1000000 }));


/*
io.on('connection', function(socket) {
  logger.info('Got a new connection.');
  //socket.on('connect_player', connectPlayer(socket, callback));
  //socket.on('connect_player', connectPlayer(socket));
  socket.on('connect_player', function() {
    logger.warn(`socket ${socket}`);
    return connectPlayer(socket);
  });
});
*/


module.exports = io;
