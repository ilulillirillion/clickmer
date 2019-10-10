const Map = require('../classes/Map.js');
const Place = require('../classes/Place.js');


class WorldMap extends Map {

  constructor({ uuid = null, name = 'worldmap',
                width = 2, height = 2 } =
              { uuid: null, name: 'worldmap',
                width: 2, height: 2 }) {
    super({ uuid, name });

    this.width = width;
    this.height = height;


  };

  createTile() {
    let tile = new Place();
    return tile;
  };


};

module.exports = WorldMap;
