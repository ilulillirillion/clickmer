// vim: set ft=javascript:

const Tile = require('./Tile.js');
const GrassTile = require('./GrassTile.js');
const valid_types = {
  GrassTile
}

class TileType {
  constructor({ type = 'Grass', ...args } =
              { type: 'Grass', ...args }) {
    let tile = new valid_types[type](args);
    return tile;
  }
}

module.exports = TileType;
