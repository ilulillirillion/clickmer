// vim: set ft=javascript:

/**
 *  file: clickmer/libraries/custom/app.js
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
    session = require('express-session')({
        secret: 'INSECURE'
      }
    );
  }
  if (!body_parser) {
    body_parser = require('bodyParser');
  }
  if (!path) {
    path = require('path');
  }

  const app = express();
  app.set('port', port);

  app.use(session);

  app.use(body_parser.urlencoded({ extended: true }));

  app.use(body_parser.json());

  return app;

}
