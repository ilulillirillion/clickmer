// vim: set ft=javascript:

const Thing = require('./Thing.js');
const Tile = require('./Tile.js');
//const GrassTile = require('./GrassTile.js');
//const WallTile = require('./WallTile.js');
const TileType = require('./TileType.js');
const logger = require('./logger.js');
const runSql = require('./runSql.js');

class Map extends Thing {

  constructor({ uuid = null, name = 'map',
                width = 100, height = 100 } =
              { uuid: null, name: 'map',
                width: 100, height: 100 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;

    //this.tiles = this.createTiles();
    this.createTiles();

  }

  createTile() {
    let tile = new Tile();
    return tile;
  }

  async getSurroundingsOf(thing) {
    logger.debug('Getting surroundings')
    //let surroundings_amount = 10;
    let scope = 5;

    let surroundings = [];
    // let start_x = thing.x
    let start_x = thing.x - scope;
    //let end_x = start_x + 10;
    let end_x = thing.x + scope;
    //let start_y = thing.y;
    let start_y = thing.y - scope;
    //let end_y = start_y + 10;
    let end_y = thing.y + scope;
    logger.warn(`Collecting tiles between (<${start_x}>, <${start_y}>) and (<${end_x}>, <${end_y}>) as surroundings.`);


    /*
    for (let x=start_x; x < end_x; x ++) {
      for (let y=start_y; y < end_y; y++) {
        // Find the tile with the matching coordinates and push to surroundings
        if (0 <= x && x < this.width && 0 <= y && y < this.height) {

          //let tile = this.tiles[x][y];
          let tile_data = runSql(`SELECT * FROM tiles WHERE x = ${x} AND y = ${y};`);
    */

    let tile_data = await new Promise((resolve, reject) => {
      try {
        let results = runSql(`SELECT * FROM tiles WHERE x >= ${start_x} AND x <= ${end_x} AND y >= ${start_y} AND y <= ${end_y};`);
        resolve(results);
      } catch(error) {
        logger.error(error);
        reject(null);
      }
    });

    logger.debug('Got tile_data', tile_data);
    //let tile = new TileType(tile_data);

    //logger.debug('Adding tile to surroundings', tile);
    //surroundings.push(this.tiles[x][y]);
    //surroundings.push(tile);

    surroundings = tile_data;



    logger.warn('Returning surroundings', surroundings);
    return surroundings;
  }
         

  async createTiles() {
    let create_tiles_start_time = Date.now();

    // Destroy existing tiles;
    let clear_tiles = await new Promise((resolve, reject) => { 
      try {
        let tiles_cleared = runSql('TRUNCATE TABLE tiles');
        resolve(tiles_cleared);
      } catch(error) {
        logger.error(error);
        reject(tiles_cleared);
      }
    });
    logger.info('Truncated old tiles data');

    //let tile_entries = [];
    let tile_entries = '';
    //let tiles = {};
    //let walkable = true;
    for (let width=0; width < this.width; width++) {
      //var walkable = true;
      //tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        let border_tile = false;
        //if (0 < height && height < this.height) {
        //walkable = true;
        //}
        logger.info(`width <${width}>`);
        logger.info(`height <${height}>`);

        if (width === 0) {
          logger.debug('width0', height);
          border_tile = true;
        }
        if (width === this.width - 1) {
          logger.debug('widthmax', height);
          border_tile = true;
        }
        if (height === 0) {
          logger.debug('height0', height);
          border_tile = true;
        }
        if (height === this.height - 1) {
          logger.debug('heightmax', height);
          border_tile = true;
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
        //let tile = new Tile({ x: width, y: height, walkable: walkable });

        //let tile = new GrassTile({ x: width, y: height });
        //if (border_tile) {
        //  tile = new WallTile({ x: width, y: height });
        //}
        //let tile = this.createTile({ x: width, y: height, walkable: false });


        //let tile_entry = [ 'test', `'${width}'`, `'${height}'`, 'grass' ]
        let tile_entry = `( 'test', '${width}', '${height}', 'GrassTile' )`;
        if (!tile_entries) {
          tile_entries += tile_entry;
        } else {
          tile_entries += `, ${tile_entry}`
        }

        //tile_entries.push(tile_entry);
        //tiles.push(tile);



        //tiles[width][height] = tile;

        //runSql(`INSERT INTO tiles (uuid, x, y, type) VALUE ('${tile.uuid}', '${tile.x}', '${tile.y}', 'grass')`);
        //runSql(`INSERT INTO tiles (uuid, x, y, type) VALUE ('${tile.uuid}', '${tile.x}', '${tile.y}', 'grass')`);
      }
    }

    //runSql(`INSERT INTO tiles (uuid, x, y, type) VALUES ${[tile_entries]}`);
    runSql(`INSERT INTO tiles (uuid, x, y, type) VALUES ${tile_entries}`);

    let create_tiles_end_time = Date.now();
    let time_delta = create_tiles_end_time - create_tiles_start_time;
    logger.info(`Took <${time_delta}> milliseconds to create <${this.uuid}>'s map tiles.`);

    //return tiles;
  }

}

module.exports = Map;
