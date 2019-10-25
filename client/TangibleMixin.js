// vim: set ft=javascript:

/**
 *  TangibleMixin
 *    The Tangible mixin represents objects with tangibility.
 *    Tangible objects have an x and y property which represent their location
 *      on the map.
 */

const TangibleMixin = Base => class extends Base {

  constructor(...args) {
    console.debug('Constructing a TangibleMixin.', arguments);
    super(...args);
  
    // TODO: How would these be set from ...args?
    this.x = 0;
    this.y = 0;

  }

}

export default TangibleMixin;
