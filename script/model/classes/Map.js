import Thing from '../classes/Thing.js';
import Tile from '../classes/Tile.js';


export default class Map extends Thing {

  constructor({ uuid = null, name = 'map',
                width = 10, height = 10 } =
              { uuid: null, name: 'map',
                width: 10, height: 10 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;

    this.tiles = this.createTiles();

    /*
    this.tiles = {}

    for (let width=0; width < this.width; width++) {
      this.tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        this.tiles[width][height] = new Tile();
      };
    };
    */
        
  };

  get contents() {
    let contents = [];
    //for (let tile of this.tiles) {
    for (let x = 0; x < Object.keys(this.tiles).length; x++) {
      for (let y = 0; y < Object.keys(this.tiles[0]).length; y++) {
        //console.warn(x, y);
        let tile = this.tiles[x][y];
        contents.push.apply(tile.contents);
      };
    };
    return contents;
  };

  get population() {
    /*
    let population = [];
    for (let tile of this.tiles) {
      population.push.apply(tile.population);
    };
    */
    let population = [];
    for (let content in this.contents) {
      if (content.thing_type === 'actor') {
        population.push(content);
      };
    };
    return population;
  };

  get structures() {
    /*
    let structures = [];
    for (let tile of this.tiles) {
      structures.push.apply(tile.structures);
    };
    */
    let structures = [];
    for (let content in this.contents) {
      if (content.thing_type === 'structure') {
        structures.push(content);
      };
    };
    return structures;
  };

  tick() {
    //for (let tile of
    for (let tile of this.flattened_tiles) {
      tile.tick();
    };
  };

  addContent(content) {
    let tile = this.getRandomTile();
    tile.contents.push(content);
  };

  getRandomTile() {
    /*
    console.warn(this.tiles.length);
    console.warn(typeof(this.tiles));
    let random_index = Math.floor(Math.random() * this.tiles.length);
    console.warn(this.tiles);
    console.warn(random_index);
    let tile = this.tiles[random_index];
    console.warn(tile);
    return tile;
    */
    let random_x = Math.floor(Math.random() * Object.keys(this.tiles).length);
    let random_y = Math.floor(Math.random() * Object.keys(this.tiles[0]).length);
    let tile = this.tiles[random_x][random_y];
    return tile;
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
        //tiles[width][height] = new Tile();
        tiles[width][height] = tile;
      };
    };
    return tiles;
  }
  
    


};
