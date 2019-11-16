// vim: set ft=javascript:

console.info('KeyboardControllable.js started.');

const KeyboardControllable = Base => class extends Base {
  constructor(...args) {
    console.debug('Constructing a new KeyboardController', arguments);
    super(...args);
    console.debug(`Extending base <${this.uuid}> into a keyboard controllable object:`, this);
    console.warn('test move', this.hasOwnProperty('move'), this);
    console.warn(`test account_id (<${this.account_id}>)`, this.hasOwnProperty('account_id'), this);
    console.warn(`test name (<${this.name}>)`, this.hasOwnProperty('name'), this);

    let self = this;
    this.controls = {
      // Up.
      'w': function() { self.moveX(1) },
      // Down.
      's': function() { self.moveX(-1) },
      // Left.
      'a': function() { self.moveY(1) },
      // Right.
      'd': function() { self.moveY(-1) }
    };

    window.addEventListener('keydown', function(_event) {
      console.warn('(Unimplemented function) Got keydown event.', _event);
      self.keydown(_event);
    });

  }
    
  moveX(delta) {
    console.debug(`<${this.uuid}> moving <${delta}> units on the x axis.`);
    this.move('x', delta);
  }

  moveY(delta) {
    console.debug(`<${this.uuid}> moving <${delta}> units on the y axis.`);
    this.move('y', delta);
  }

  move(axis, delta) {
    console.debug(`<${this.uuid}> moving <${delta}> on the <${axis}> axis.`);
    this[axis] += delta;
  }

  keydown(_event) {
    let key = _event.key;
    console.warn(`Got key <${key}>.`);
    console.warn(`Looking for <${key}> in <${this.uuid}>'s controls.`, this);
    if (key in this.controls) {
      console.warn(`Found <${key}> in <${this.uuid}>'s controls.`);
      this.controls[key]();
    }
  }
}

export default KeyboardControllable;
