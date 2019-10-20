// vim: set ft=javascript

const Thing = require('./Thing.js');

class Tile extends Thing {
  constructor({ uuid = null, name = null, x = 0, y = 0, walkable = true } =
              { uuid: null, name: null, x: 0, y: 0, walkable: true }) {
    super({ uuid, name });

    this.x = x;
    this.y = y;

    //this.walkable = walkable;
    this.walkable = false;

  }

  draw() {};

}

module.exports = Tile;
