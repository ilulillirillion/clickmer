// vim: set ft=javascript:

/**
 *  ControllableMixin
 *    Intended for objects which can be driven by controllers.
 *    Supplies methods for moving objects around on the map.
 */

//const TangibleMixin = require('./TangibleMixin.js');
import TangibleMixin from './TangibleMixin.js';

const ControllableMixin = Base => class extends TangibleMixin(Base) {
//const ControllableMixin = Base => class extends Base {

  constructor(...args) {
    console.debug('Constructing a ControllableMixin.', arguments);
    super(...args);
    //super();

    // TODO: allow x and y to be passed?
    //this.x = this.x || x || 0;
    //this.y = this.y || y || 0;



    //this.controller_scope = window;

  }

  move(axis, delta) {
    console.warn(`<${this}> moving <${delta}> units on <${axis}>`, this);
    //this[axis] += delta;
    this[`${axis}_delta`] += delta;
  }

  moveX(delta) {
    console.warn(`<${this}> moving <${delta}> units on x.`);
    this.move('x', delta);
  }

  moveY(delta) {
    console.warn(`<${this}> moving <${delta}> units y.`);
    this.move('y', delta);
  }

}

export default ControllableMixin;
