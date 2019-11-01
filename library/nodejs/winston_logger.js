// vim: ft=javascript:


const { createLogger, format, transports } = require('winston');

process.stdout.write('stdout test2');
const winston_logger = createLogger({
  level: 'info',
  format: format.simple(),
  transports: [new transports.Console()],
  exitOnError: false
});


winston_logger.debug('Created a Winston logger instance.');


module.exports = winston_logger;
