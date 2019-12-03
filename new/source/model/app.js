// vim: set ft=javascript:

/**
 *  file: clickmer/source/model/app.js
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
    port = 5000,
    express = null,
    session = null,
    body_parser = null,
    path = null
  } =
  {
    port: 5000,
    express: null,
    session: null,
    body_parser: null,
    path: null
  }
    ) {

  if (!express) {
    express = require('express');
  }
  if (!session) {
    session = require('./session.js')({
        secret: process.env.CLICKMER_SESSION_SECRET,
        resave: true,
        saveUnintialized: true 
      }
    );
  }
  if (!body_parser) {
    body_parser = require('bodyParser');
  }
  if (!path) {
    path = require('path');
  }

  const app = require('../../libraries/custom/app.js')({
      port: port,
      express: express,
      session: session,
      body_parser: body_parser,
      path: path
    }
  );

  return app;

}
