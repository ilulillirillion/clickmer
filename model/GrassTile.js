// vim: set ft=javascript:

const Tile = require('./Tile.js');

class GrassTile extends Tile {
  constructor({ uuid = null, name = null, x = 0, y = 0 } =
              { uuid: null, name: null, x: 0, y: 0 }) {
    super({ uuid, name, x, y });

    this.walkable = true;

    this.fill_style = 'rgba(0, 255, 0, 0.6)';

  }
}

module.exports = GrassTile;
