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

  /**
   * Constructs and returns a new thing instance.
   * All things should have an exposed UUID and name property.
   */
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

  };

}

export default Thing;
