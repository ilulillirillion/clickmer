// vim: set ft=javascript:

/**
 *  file: clickmer/source/model/winston_logger.js
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
    { level = 'info' } =
    { level: 'info' }) {
  
  // TODO: fix this path.
  const winston_logger = require('../../libraries/custom/winston_logger.js');

  winston_logger.level = level;

  return winston_logger;

}
