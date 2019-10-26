// vim: set ft=javascript:

import ControllableMixin from './ControllableMixin.js';

const ControllableViewMixin = Base => class extends ControllableMixin(Base) {

  move(axis, delta) {
    console.warn(`ControllableViewMixin moving <${delta}> units on <${axis}> axis.`);
    let state_delta = this.state;
    state_delta[`${axis}_delta`] += delta;
    this.setState(state_delta);
  }

}

export default ControllableViewMixin;
