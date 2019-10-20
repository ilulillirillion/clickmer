// vim: set ft=javascript:

const Thing = require('./Thing.js');
const Tile = require('./Tile.js');

class Map extends Thing {

  constructor({ uuid = null, name = 'map',
                width = 10, height = 10 } =
              { uuid: null, name: 'map',
                width: 10, height: 10 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;

    this.tiles = this.createTiles();

  }

  createTile() {
    let tile = new Tile();
    return tile;
  }

  createTiles() {
    let tiles = [];
    for (let width=0; width < this.width; width++) {
      //tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        let tile = this.createTile({ x: width, y: height });
        tiles.push(tile);
        //tiles[width][height] = tile;
      }
    }
    return tiles;
  }

}

module.exports = Map;
