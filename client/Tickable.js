// vim: set ft=javascript:

/**
 * file: clickmer/client/tickable.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Tickable mixin.
 * Tickable objects must have a tick method and counter to track their total
 * ticks.
 */

const Tickable = Base => class extends Base {

  constructor({ ticks_epoch = 0 } = { ticks_epoch: 0 }, ...args) {

    super(...args);
 
    /**
     *  Declare a private ticks epoch property. This acts as a counter for the
     *  number of times an object has been ticked.
     *  This is not currently used for anything critical, but is very useful
     *  for simple debugging.
     *  It's expected this will either be implemented more thoroughly or
     *  removed at a future point.
     */
    this.#ticks_epoch = ticks_epoch;

  }

  /**
   * All tickable things must have a tick method.
   * The provided tick method only increments the tick epoch of the object.
   * It is expected, though not required, that descendent objects might extend
   * this method with additional behaviors.
   */
  tick() {
    this.#ticks_epoch += 1;
  }

} 
