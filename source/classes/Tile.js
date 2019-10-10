const Thing = require('../classes/Thing.js');


class Tile extends Thing {

  constructor({ uuid = null, name = 'tile' } =
              { uuid: null, name: 'tile' }) {
    super({ uuid, name })

    this.contents = [];

  };
};

module.exports = Tile;
