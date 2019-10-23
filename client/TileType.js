// vim: set ft=javascript:

/*
const Tile = require('./Tile.js');
const GrassTile = require('./GrassTile.js');
const valid_types = {
  GrassTile
}
*/
import Tile from './Tile.js';
import GrassTile from './GrassTile.js';
const valid_types = {
  GrassTile
}

export default class TileType {
  constructor({ type = 'Grass', ...args } =
              { type: 'Grass', ...args }) {
    //console.debug(`Making tiletype with type: <${type}>.`, arguments);
    let tile = new valid_types[type](args);
    return tile;
  }
}
