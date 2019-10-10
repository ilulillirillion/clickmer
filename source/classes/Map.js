const Thing = require('../classes/Thing.js');
const Tile = require('../classes/Tile.js');


class Map extends Thing {

  constructor({ uuid = null, name = 'map',
                width = 10, height = 10 } =
              { uuid: null, name: 'map',
                width: 10, height: 10 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;

    this.tiles = this.createTiles();

        
  };

  get contents() {
    let contents = [];
    for (let x = 0; x < Object.keys(this.tiles).length; x++) {
      for (let y = 0; y < Object.keys(this.tiles[0]).length; y++) {
        let tile = this.tiles[x][y];
        if (tile.contents.length >= 1) {
        };
        for (let content of tile.contents) {
          contents.push(content);
        };
      };
    };
    return contents;
  };

  get population() {
    let population = [];
    for (let content of this.contents) {
      if (content.class_name == 'actor') {
        population.push(content);
      };
    };
    return population;
  };

  get structures() {
    let structures = [];
    for (let content in this.contents) {
      if (content.thing_type === 'structure') {
        structures.push(content);
      };
    };
    return structures;
  };

  tick() {
    for (let tile of this.flattened_tiles) {
      tile.tick();
    };
  };

  addContent(content) {
    let tile = this.getRandomTile();
    tile.contents.push(content);
  };

  getRandomTile() {
    let random_x = Math.floor(Math.random() * Object.keys(this.tiles).length);
    let random_y = Math.floor(Math.random() * Object.keys(this.tiles[0]).length);
    let tile = this.tiles[random_x][random_y];
    return tile;
  }; 


  getRandomCoordinates() {
    let coordinates = {};
    coordinates.x = Math.floor(Math.random() * Object.keys(this.tiles).length);
    coordinates.y = Math.floor(Math.random() * Object.keys(this.tiles[0]).length);
    return coordinates;
  };
    

  randomlyOverwriteTile(tile) {
    let random_coordinates = this.getRandomCoordinates();
    this.tiles[random_coordinates.x][random_coordinates.y] = tile;
    console.debug(`Overwrote <${this.uuid}> tile at <${random_coordinates.x}>,<${random_coordinates.y}> to <${this.tiles[random_coordinates.x][random_coordinates.y]}>`, this.tiles);
  };
    

  get flattened_tiles() {
    let tiles = [];
    for (let x = 0; x < Object.keys(this.tiles).length; x++) {
      for (let y = 0; y < Object.keys(this.tiles[0]).length; y++) {
        let tile = this.tiles[x][y];
        tiles.push(tile);
      };
    };
    return tiles;
  };


  createTile() {
    let tile = new Tile();
    return tile;
  };


  createTiles() {
    let tiles = {};
    for (let width=0; width < this.width; width++) {
      tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        let tile = this.createTile();
        tiles[width][height] = tile;
      };
    };
    return tiles;
  }

};

module.exports = Map;
