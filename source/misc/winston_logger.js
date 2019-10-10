// vim ft=javascript


'use strict';


const { createLogger, format, transports } = require('winston');


const logger = createLogger({
  level: 'debug',
  format: format.simple(),
  transports: [new transports.Console()]
});


logger.debug('Created a Winston logger instance.');


module.exports = logger;
