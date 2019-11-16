// vim: set ft=javascript:

/**
 * file: clickmer/client/Drawable.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Drawable mixin class.
 * Drawable objects should have all the requisite properties and method to be
 * drawn by Map classes.
 */

/**
 * Drawable objects must be spatial in order to be drawn.
 */
const Drawable = Base => class extends Spatial(Base) {

  /**
   * Extend the base object with properties for drawing.
   */
  constructor(
      { fill_style = 'rgba(0, 0, 255, 0.6)' } =
      { fill_style: 'rgba(0, 0, 255, 0.6)' },
      ...args) {

    // Pass-through any irrelevant arguments to the super.
    super(...args);

    /** 
     * Expose a public fill style property.
     * When drawing the map using the fill style, the map will access this
     * property to figure out how to fill the tile.
     */
    this.fill_style = 'rgba(0, 0, 255, 0.6)';

  }

}

export default Thing;
