// vim: ft=javascript:

/*
const { createLogger, format, transports } = require('winston');


const logger = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [new transports.Console()],
  exitOnError: false
});


logger.debug('Created a Winston logger instance.');
*/

//const { winston_logger: logger } = require('../library/nodejs/winston_logger.js');
//const logger = require('../library/nodejs/winston_logger.js');
//const logger = require('nodejslib.winston_logger');
//const logger = require('nodejslib');
const { winston_logger: logger } = require('nodejslib');
//const { logger: winston_logger } = require('../library/nodejs/winston_logger.js');
//const winston_logger = require('../library/nodejs/winston_logger.js');
//const logger = winston_logger;

logger.level = 'debug';

logger.debug('test test test');

module.exports = logger;
