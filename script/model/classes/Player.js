import Thing from '../classes/Thing.js';
import Colony from '../classes/Colony.js';


export default class Player extends Thing {
  constructor({ uuid = null, name = 'player' } =
              { uuid: null, name: 'player' }) {
    super({ uuid, name });

    this.colony_location = 0;

    this.colony = new Colony();

  };

  tick() {
    console.info(`Player colony`, this.colony);
  };

};
