import Place from '../classes/Place.js';


export default class World extends Place {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.population = [];

  };

  /*
  tick() {
    for (let populant of Object.values(this.population)) {
      populant.tick();
    };
  };
  */

};
