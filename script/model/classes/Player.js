import Thing from '../classes/Thing.js';


export default class Player extends Thing {
  constructor({ uuid = null, name = 'player' } =
              { uuid: null, name: 'player' }) {
    super({ uuid, name });

    this.colony_location = 0;

  };

};
