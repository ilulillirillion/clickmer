// vim: set ft=javascript:

import ClientThing from './ClientThing.js';

export default class KeyboardHandler extends ClientThing {
  constructor(
      { uuid = null, name = 'keyboard_controller' } =
      { uuid: null, name: 'keyboard_controller' }) {
    console.debug('Constructing a new KeyboardController', arguments);
    super({ uuid, name });

    this.x = 0;

    /*
    this.key_map = {
      'up': [ 38, 87 ],
      'down': [ 40, 83 ],
      'left': [ 37, 65 ],
      'right': [ 39, 68 ]
    }
    */
    let self = this;

    this.controls = {
      // Up.
      'w': function() { self.moveUp(1) },
      // Down.
      's': function() { self.moveDown(1) },
      // Left.
      'a': function() { self.moveLeft(1) },
      // Right.
      'd': function() { self.moveRight(1) }
    };

    /*
    this.controls = {
      // Up.
      'w': function() { self.modX(1) },
      // Down.
      's': function() { self.modX(-1) },
      // Left.
      'a': function() { self.modY(1) },
      // Right.
      'd': function() { self.modY(-1) }
    };
    */

    /*
    this.controls = {
      // Up.
      'w': function() { self.changeInfluence({ axis: y, delta: 1 }),
      // Down.
      's': function() { self.changeInfluence({ axis: y, delta: -1 }),
      // Left.
      'a': function() { self.changeInfluence({ axis: x, delta: 1 }),
      // Right.
      'd': function() { self.changeInfluence({ axis: x, delta: -1 })
    };
    */

    this.scope = window;
    this.scope.addEventListener('keydown', function(_event) {
      console.warn('(Unimplemented function) Got keydown event.', _event);
      //self.keydown(_event);
    });

  }

  keydown(_event) {
    let key_code = _event.key;
    console.warn(`Got key_code <${key_code}>.`);
    if (key_code in this.controls) {
      this.controls[key_code]();
    }
  }

  /*
  modX(delta) {
    this.x += delta;
  }

  modY(delta) {
    this.y += delta;
  }
  */

  giveInfluence() {
    //return { this.x, this.y })
    let influence = { this.x, this.y };
    this.x = 0;
    this.y = 0;
    console.warn(`Returning directional influence <${influence}>.`);
    return influence;
  }

  changeInfluence({ axis, delta }) {
    this[axis] += delta;
  }

}
