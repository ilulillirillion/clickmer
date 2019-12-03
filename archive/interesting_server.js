// vim: set ft=javascript:

/**
 *  file: clickmer/source/model/server.js
 *  project:
 *    name: Clickmer
 *    reference: https://github.com/zolvaring/clickmer
 *  author:
 *    name: Justin Heil
 *    alias: zolvaring
 *    email: zolvaring@gmail.com
 *    web: https://github.com/zolvaring
 */

/**
 * TODO: Docstring.
 */

'use strict';

module.exports = function(
  { 
    server_name = 'server', 
    logger = null,
    express = null,
    http = null,
    path = null,
    socketIO = null
  } =
  { 
    server_name: 'server',
    logger: null,
    express: null,
    http: null,
    path: null,
    socketIO: null
  }
) {

  if (!logger) {
    logger = require('winston');
  }
  if (!express) {
    express = require('express');
  }
  if (!http) {
    http = require('http');
  }
  if (!path) {
    path = require('path');
  }
  if (!socketIO) {
    socketIO = require('socket.io');
  }

  logger.info(`<${server_name}> started`);

  const Server = {

    this.app = express();
    app.set('port', 5000);
    app.use(session);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.get('/test', function(request, response) {
      response.sendFile(path.join(__dirname, 'client/static/test.html'));
    });

    app.use(express.static(path.join(__dirname, './client/')));
    app.get('/', function(request, response) {
      response.redirect('/test');
    }

  }

  return Server;

}


  
