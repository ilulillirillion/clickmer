// vim: set ft=javascript:

/**
 *  file: clickmer/source/model/main.js
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


const config = {
  name: 'Clickmer',
  session: {
    secret: process.env.CLICKMER_SESSION_SECRET,
    resave: true,
    save_uninitialized: true
  },
  server: {
    port: 5000
  }
}

const logger = require('./logger.js');
const express = require('express');
const session = require('./session.js')({
    secret: config.session.secret,
    resave: config.session.resave,
    save_uninitialized: config.session.save_uninitialized
  }
);
const http = require('http');
const body_parser = require('body-parser');
const path = require('path');
const app = require('./app.js')({
    port: config.server.port,
    express: express,
    session: session,
    body_parser: body_parser,
    path: path
  }
);  
const server = require('./Server.js')({ 
    //name: `${config.name.toLower}_server`,
    name: `${config.name.toLowerCase()}_server`,
    port: config.server.port,
    logger: logger,
    http: http,
    app: app
  }
);

logger.info(`<${config.name}> started.`);
