// vim: set ft=javascript:

// TODO: new

/**
 *  file: clickmer/source/common/Thing.js
 *  project:
 *    name: Clickmer
 *    descripton: Nodejs/Javascript web game prototype.
 *    reference: https://github.com/zolvaring/clickmer
 *  author:
 *    name: Justin Heil
 *    alias: zolvaring
 *    email: zolvaring@gmail.com
 *    web: https://github.com/zolvaring
 */

/**
 *  Provides the Thing class.
 *  Things are used as a base for nearly every other object in the game, and
 *  bundles core properties and functionality into one object.
 */

class Thing {
  constructor(
      { name = 'thing' } = { name: 'thing' }, 
      ...args) {
    this.name = name;
  };
}
    
module.exports = Thing;   
