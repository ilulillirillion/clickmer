// vim: set ft=javascript:

/**
 *  file: clickmer/source/model/session.js
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

// TODO:  Experiement defaulting resave and saveUninitalized to false and
//        prefer that if it works.
module.exports = function(
    {
      secret = process.env.CLICKMER_SESSION_SECRET,
      resave = true,
      save_uninitialized = true
    } =
    {
      secret: process.env.CLICKMER_SESSION_SECRET,
      resave: true,
      save_uninitialized: true
    }) {

  const session = require('../../libraries/custom/session.js')
  (
    {
      secret: secret,
      resave: resave,
      save_uninitialized: save_uninitialized
    }
  );

  return session;

}

