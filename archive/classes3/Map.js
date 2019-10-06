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

    this.tiles = {}

    for (let width=0; width < this.width; width++) {
      this.tiles[width] = {};
      for (let height=0; height < this.height; height++) {
        this.tiles[width][height] = new Tile();
      };
    };
        
  };
};
