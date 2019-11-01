// vim: set ft=javascript:

/**
 * file: clickmer/client/TileType.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the TileType class.
 * TileType is used as a proxy for dynamically constructing tiles of differing
 * "types," such as grass, wall, etc.
 */

// Initialize an empty structure for holding all available tile types.
// Each available type must be explicitly declared.
const valid_types = {};

// Import GrassTile and add it to the array of available tile types.
import GrassTile from './GrassTile.js';
valid_types.GrassTile = GrassTile;

class TileType {
  constructor({ type = 'Grass', ...args } =
              { type: 'Grass', ...args }) {
    //TODO: too verbose, fix? -- console.debug('Constructing a new TileType with arguments:', arguments);
    let tile = new valid_types[type](args);
    return tile;
  }
}

export default TileType;
