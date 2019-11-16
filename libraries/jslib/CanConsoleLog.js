// vim: set ft=javascript:

/**
 * file: clickmer/library/client/CanConsoleLog.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the CanConsoleLog class mixin.
 * Allows for the base to log to the console in a browser through an
 * wrapper for togglability and extensibility.
 */

const CanConsoleLog = Base => class extends Base {

  /**
   * Many of the wrapped console methods must be declared directly in the
   * constructor in order for the bind->call mapping to work succesfully.
   * TODO:  Is it possible to remove the trailing parenthesis here? Doing so
   *        would enable more flexible code structures and probably remove the
   *        need to declare an alternative empty return function.
   */
  constructor(
      { logging_enabled = true } = { logging_enabled: true}, 
      ...args) {
    super(...args);
    this.logging_enabled = logging_enabled;
    //this.logging_enable = false;

    let self = this;
    this.console_logger = {

      debug: function() {
        if (!self.logging_enabled || !window.console || !console.debug) { return function() {} }
        return Function.prototype.bind.call(console.debug, console);
      }(),

      info: function() {
        if (!self.logging_enabled || !window.console || !console.info) { return function() {} }
        return Function.prototype.bind.call(console.info, console);
      }(),

      warn: function() {
        if (!self.logging_enabled || !window.console || !console.warn) { return function() {} }
        return Function.prototype.bind.call(console.warn, console);
      }(),

      error: function() {
        if (!self.logging_enabled || !window.console || !console.error) { return function() {} }
        return Function.prototype.bind.call(console.error, console);
      }(),

    }

  }

}

export default CanConsoleLog;
