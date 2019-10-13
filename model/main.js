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
