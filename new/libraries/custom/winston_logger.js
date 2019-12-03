// vim: set ft=javascript:

/**
 *  file: clickmer/libraries/custom/winston_logger.js
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

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [ new transports.Console() ]
});

module.exports = logger;
