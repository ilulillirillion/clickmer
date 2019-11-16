// vim: set ft=javascript:

/**
 *  file: clickmer/client/Vagile.js
 *  author: zolvaring
 *  email: zolvaring@gmailcom
 *  reference: https://github.com/zolvaring/clickmer
 **
 *  Dependencies:
 *    - clickmer/client/Spatial.js
 **
 * Provides the Vagile mixin class.
 * Vagile objects can move on their own volition.
 */

import Spatial from './Spatial.js';

const Vagile = Base => class extends Spatial(Base) {

  constructor(...args) {

    super(...args);

  }

  move(axis, delta) {
    this.axis += delta
  }

  moveX(delta) {
    this.move('x', delta);
  }

  moveY(delta) {
    this.move('y', delta);
  }

}

export default Vagile;
