// vim: set ft=javascript:

// TODO: new

/**
 *  file: clickmer/source/common/createUuid.js
 *  project:
 *    name: Clickmer
 *    reference: https://github.com/zolvaring/clickmer.git
 *  author:
 *    name: Justin Heil
 *    alias: zolvaring
 *    email: zolvaring@gmail.com
 *    web: https://github.com/zolvaring
 */

/**
 * TODO: Docstring.
 */

const uuid = require('./uuidv6.js');

const createUuid = class_name => {
  return uuid(class_name);
}

module.exports = createUuid;
