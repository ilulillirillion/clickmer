import Thing from '../classes/Thing.js';
import Populant from '../classes/Populant.js';


/**
 * Places are used to represent locations, and their main functional 
 * characteristic is the ability to spawn and hold populants.
 */
export default class Place extends Thing {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.population = [];

  };

  tick() {
    for (let populant of Object.values(this.population)) {
      populant.tick();
    };
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = new Populant({ class_name: 'Actor', constructor_parameters });
    this.population.push(populant);
    return populant;
  };

};
