// vim: set ft=javascript:


const http = require('http');
const logger = require('./logger.js');
const app = require('./app.js');


logger.debug('Executing server.js');


var server = http.Server(app);
server.listen(5000, function() {
  logger.info('Server started on port 5000');
});


module.exports = server;
