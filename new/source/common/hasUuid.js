// vim: set ft=javascript:

// TODO: new

/**
 *  file: clickmer/source/common/hasUuid.js
 *  project:
 *    name: Clickmer
 *    reference: https://github.com/zolvaring/clickmer
 *  author:
 *    name: Justin Heil
 *    alias: zolvaring
 *    email: zolvaring@gmail.com
 *    web: https://github.com/zovlaring
 */

/**
 * TODO: Docstring
 */

const objectComposer = require('./objectComposer.js');
const _createUuid = require('./createUuid.js')

const createUuid = Symbol('createUuid');

const hasUuid = objectComposer
  // Name:
  ('hasUuid')
  // Imports:
  ()
  // Exports:
  ({
    constructor({ uuid = null } = { uuid: null }) {
      this.uuid = uuid;
      if (!this.uuid) {
        this.uuid = this.createUuid();
      }
    },
    [createUuid]() {
      const uuid = _createUuid(this.class_name);
      return uuid;
    }
  });

module.exports = hasUuid;
