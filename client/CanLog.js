// vim: set ft=javascript:

/**
 *  file: clickmer/client/CanLog.js
 *  author: zolvaring
 *  email: zolvaring@gmail.com
 *  reference: https://github.com/zolvaring/clickmer
 **
 *  Dependencies:
 *    - clickmer/library/jslib/CanConsoleLog.js
 **
 *  Provides the CanLog class mixin.
 *  Extends objects with a logger property.
 */

import CanConsoleLog from './jslib/CanConsoleLog.js';

/**
 * Extend base objects with a logger property.
 * Logger property should alias the dependency-provided console logger
 * interface.
 */
const CanLog = Base => class extends CanConsoleLog(Base) {

  constructor(...args) {

    super(...args);

    /** 
     *  Pass logger calls to the console logger property provided by the
     *  CanConsoleLog mixin.
     */
    this.logger = this.console_logger;

  }

}


export default CanLog;
