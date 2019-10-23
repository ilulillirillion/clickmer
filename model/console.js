// vim: set ft=javascript:

const logger = require('./logger.js');

process.stdin.resume();
process.stdin.setEncoding('utf8');

/*
process.stdin.on('data', function(text) {
  if (text === 'regenerate_map') {
    logger.warn('Making map');
  } else {
    logger.warn(`Unrecognized text: <${text}>`);
  }
});
*/
