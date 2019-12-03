// vim: set ft=javascript:

/**
 *  file: clickmer/libraries/custom/session.js
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
      secret,
      resave = false,
      save_uninitialized = false
    } =
    { secret,
      resave: false,
      save_uninitialied: false
    }) {

  const session = require('express-session')
  (
    {
      secret: secret,
      resave: resave,
      saveUninitialized: save_uninitialized
    }
  );

  return session;

} 
