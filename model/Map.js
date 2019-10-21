// vim: set ft=javascript:

const Thing = require('./Thing.js');
const Tile = require('./Tile.js');
const logger = require('./logger.js');

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
    //let walkable = true;
    for (let width=0; width < this.width; width++) {
      //var walkable = true;
      //tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        let walkable = true;
        //if (0 < height && height < this.height) {
        //walkable = true;
        //}
        logger.debug(`width <${width}>`);
        logger.debug(`height <${height}>`);

        if (width === 0) {
          logger.debug('width0', height);
          walkable = false;
        }
        if (width === this.width - 1) {
          logger.debug('widthmax', height);
          walkable = false;
        }
        if (height === 0) {
          logger.debug('height0', height);
          walkable = false;
        }
        if (height === this.height - 1) {
          logger.debug('heightmax', height);
          walkable = false;
        }

        /*
        if (height > 0 && height < this.height) {
          console.warn('testest');
          walkable = true;
        }
        if (width > 0 && width < this.width) {
          console.warn('testest');
          walkable = true;
        }
        */
        //let tile = this.createTile({ x: width, y: height, walkable: walkable });
        let tile = new Tile({ x: width, y: height, walkable: walkable });
        //let tile = this.createTile({ x: width, y: height, walkable: false });
        tiles.push(tile);
        //tiles[width][height] = tile;
      }
    }
    return tiles;
  }

}

module.exports = Map;