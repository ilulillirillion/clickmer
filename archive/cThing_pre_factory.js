// vim: set ft=javascript:

/**
 * file: clickmer/client/Thing.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Thing class.
 * Things are used as a base for nearly every other object in the game, and
 * bundles core properties and functionality into one object.
 */
class Thing {

  constructor(
      { uuid = null, name = 'thing' } =
      { uuid: null, name: 'thing' }) {

    // Provide all things with a class_name property, built from the name
    // of the class itself. This should not be relied upon, but normally will
    // point the parent when inheritance is used.
    this.class_name = this.constructor.name.toLowerCase();

    // All things should have a UUID. Set this from arguments.
    this.uuid = uuid;

    // Set a name for the thing from arguments.
    this.name = name;

    // TODO: Move this into some sort of "drawable" mixin?
    // Set a default fill value in case the thing needs to be drawn.
    this.fill_style = 'rgba(0, 0, 255, 0.6)';

    // Initialize a ticks epoch value at 0.
    this.ticks_epoch = 0;

  };

  /**
   * Tick the thing.
   * Descendants that tick 
  tick() {
    this.ticks_epoch += 1;
  }

}

export default Thing;
