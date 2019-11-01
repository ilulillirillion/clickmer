// vim: set ft=javascript:

/**
 * file: clickmer/library/CanWinstonLog.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the CanWinstonLog class mixin.
 * Allows for the base to log to stdout/err streams via Winston.
 */

const winston_logger = require('./winston_logger.js');

const CanWinstonLog = Base => class extends Base {
  constructor(...args) {
    super(...args);

    let self = this;
    this.winston_logger = {
      
      debug:    function() {
                  if (self.logging_enabled) {
                    return Function.prototype.bind.call(winston_logger.debug, logger);
                  } else {
                    return function() {}
                  }
                }(),
      
      info:     function() {
                  if (self.logging_enabled) {
                    return Function.prototype.bind.call(winston_logger.info, logger);
                  } else {
                    return function() {}
                  }
                }(),

      warn:     function() {
                  if (self.logging_enabled) {
                    return Function.prototype.bind.call(winston_logger.warn, logger);
                  } else {
                    return function() {}
                  }
                }(),

      error:    function() {
                  if (self.logging_enabled) {
                    return Function.prototype.bind.call(winston_logger.error, logger);
                  } else {
                    return function() {}
                  }
                }(),

      critical: function() {
                  if (self.logging_enabled) {
                    return Function.prototype.bind.call(
                        winston_logger.critical, logger
                    );
                  } else {
                    return function() {}
                  }
                }()
    }
  }
}

module.exports = CanWinstonLog;
