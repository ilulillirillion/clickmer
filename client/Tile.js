// vim: set ft=javascript:

//const Thing = require('./Thing.js');

//class Tile extends Thing {
export default class Tile extends Object {
  constructor({ uuid = null, name = null, x = 0, y = 0, walkable = true } =
              { uuid: null, name: null, x: 0, y: 0, walkable: true }) {
    super({ uuid, name });

    this.x = x;
    this.y = y;

    this.walkable = walkable;
    //this.walkable = false;

    this.fill_style = 'rgba(255, 0, 0, 0.6)';
    //this.fill_style = 'rgba(0, 255, 0, 0.6)';

  }

  draw() {};

}

//module.exports = Tile;
