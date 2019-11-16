// vim: set ft=javascript:

/**
 *  file: clickmer/client/KeyboardControllable.js
 *  author: zolvaring
 *  email: zolvaring@gmail.com
 *  reference: https://github.com/zolvaring/clickmer.git
 **
 *  Dependencies:
 *    - clickmer/client/Vagile.js
 **
 *  Provides the KeyboardControllable mixin class.
 */

import Vagile from './Vagile.js'

const KeyboardControllable = Base => class extends Vagile(Base) {

  constructor(...args) {

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

    window.addEventListener('keydown', function(_event) {
      console.warn('(Unimplemented function) Got keydown event.', _event);
      self.keydown(_event);
    });

  }
    
  keydown(_event) {
    let key = _event.key;
    console.debug(`Got key <${key}>.`);
    console.debug(`Looking for <${key}> in <${this.uuid}>'s controls.`, this);
    if (key in this.controls) {
      console.debug(`Found <${key}> in <${this.uuid}>'s controls.`);
      this.controls[key]();
    }
  }
}

export default KeyboardControllable;
