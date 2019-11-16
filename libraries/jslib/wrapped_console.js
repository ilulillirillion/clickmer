// vim: set ft=javascript:

/**
 * file: clickmer/library/WrappedConsole.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides a wrapped console object.
 * Wraps the default console to provide extensibility.
 * Allow for logging to be toggled off and on.
 */

const wrapped_console = {

  debug:  function() {
            if (!window.console || !console.debug) { return }
            return Function.prototype.bind.call(console.debug, console);
          }(),
}

export default wrapped_console;
