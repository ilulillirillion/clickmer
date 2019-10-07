import Thing from '../classes/Thing.js';


export default class Tile extends Thing {
//export default class Tile extends Place {

  constructor({ uuid = null, name = 'tile' } =
              { uuid: null, name: 'tile' }) {
    super({ uuid, name })

    this.contents = [];

  };
};
