import Thing from '../classes/Thing.js';


export default class Tile extends Thing {

  constructor({ uuid = null, name = 'tile' } =
              { uuid: null, name: 'tile' }) {
    super({ uuid, name })

  };
};
