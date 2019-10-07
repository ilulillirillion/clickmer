//import Thing from '../classes/Thing.js';
import Map from '../classes/Map.js';
import Place from '../classes/Place.js';


export default class WorldMap extends Map {

  constructor({ uuid = null, name = 'worldmap',
                width = 2, height = 2 } =
              { uuid: null, name: 'worldmap',
                width: 2, height: 2 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;

    //this.tiles = this.createTiles();

  };

  createTile() {
    let tile = new Place();
    return tile;
  };

};
