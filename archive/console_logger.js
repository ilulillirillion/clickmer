// vim: set ft=javascript:

/**
 * file: clickmer/library/client/console_logger.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides a singleton console logger object.
 * Wraps the browser-provided console object to enable toggling and provide
 * basic extensibility.
 * Makes use of bind and call to avoid losing caller data.
 */

const console_logger = {
}
