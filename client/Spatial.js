// vim: set ft=javascript:

/**
 * file: clickmer/client/Spatial.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Spatial mixin class.
 * Spatial objects have spatial properties used to represent their location
 * in the physical world.
 */

const Spatial = Base => class extends Base {

  constructor(
      { x = 0, y = 0 } = { x: 0, y: 0 },
      ...args) {

    super(...args);


    this.#x = x;
    this.#y = y;
    this.#z = z;
    this.#w = w;

    this.#x_delta = 0;
    this.#y_delta = 0;
    this.#z_delta = 0;
    this.#w_delta = 0;

  }

  /** 
   *  Get and set Cartesian coordinates.
   *  Get coordinate as it's current value plus delta.
   *  Pass attempts to set coordinate directly to the delta value.
   */
  // Get and set x.
  get x() {
    return this.#x + this.#x_delta;
  }
  set x(value) {
    this.#x_delta = value;
  }

  // Get and set y.
  get y() {
    return this.#y + this.#y_delta;
  }
  set y(value) {
    this.#y_delta = value;
  }

  // Get and set z.
  get z() {
    return this.#z + this.#z_delta;
  }
  set z(value) {
    this.#z_delta = value;
  }

  // Get and set w.
  get w() {
    return this.#w + this.#w_delta;
  }
  set w(value) {
    this.#w_delta = value;
  }

  /**
   *  Returns a structure representing the current effective values of each
   *  cartesian coordinate and then resets each delta value to 0.
   *  Intended to be called by the client when preparing a server update.
   */
  reapDelta() {
    let delta = {
      x: this.x,
      y: this.y,
      z: this.z,
      w: this.w
    }
    this.#x_delta = 0;
    this.#y_delta = 0;
    this.#z_delta = 0;
    this.#w_delta = 0;
    return delta;
  }
  

}


export default Spatial;
