// vim: set ft=javascript:

/**
 *  file: Clickmer/libraries/custom/Server.js
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
    http = null,
    app = 
  } =
  { 
    server_name: 'server',
    logger: null,
    http: null,
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

  logger.info(`<${server_name}> created.`);

  const Server = {
    this.name = name;
    this.logger = logger;
    this.http = http;
    this.app = app;
  }

  return Server;

}
