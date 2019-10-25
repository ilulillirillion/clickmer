// vim: set ft=javascript:

//const ControllableMixin = require('./ControllableMixin');
import ControllableMixin from './ControllableMixin.js';

const KeyboardControllableMixin = Base => class extends ControllableMixin(Base) {
  constructor(...args) {
    console.debug('Constructing a new KeyboardController', arguments);
    //super({ uuid, name });
    super(...args);

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

    //this.controller_scope.addEventListener('keydown', function(_event) {
    window.addEventListener('keydown', function(_event) {
      console.warn('(Unimplemented function) Got keydown event.', _event);
      self.keydown(_event);
    });

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

export default KeyboardControllableMixin;

    /*
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
    */

    //this.scope = window;




    //move(direction, distance) {
