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
    name = 'server',
    port = 5000,
    logger = null,
    http = null,
    app = null,
    express = null,
    session = null,
    body_parser = null,
    path = null
  } =
  {
    name: 'server',
    port: 5000,
    logger: null,
    http: null,
    app: null,
    express: null,
    session: null,
    body_parser: null,
    path: null
  }
) {

  if (!logger) {
    logger = require('winston');
  }
  if (!http) {
    http = require('http');
  }
  if (!app) {
    if (!express) {
      express = require('express');
    }
    if (!session) {
      session = require('./session.js')({
          secret: process.env.CLICKMER_SESSION_SECRET,
          resave: true,
          saveUninitialized: true
        }
      );
    }
    if (!body_parser) {
      body_parser = require('bodyParser');
    }
    if (!path) {
      path = require('path');
    }
    app = require('./app.js')({ 
        port: 5000,
        express: express,
        session: session,
        body_parser: body_parser,
        path: path 
      }
    );
  }

  const server = http.Server(app);
  server.listen(port, function() {
    logger.info(`<${name}> started on port <${port}>.`);
  });
  
  return server;

}
