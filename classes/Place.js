import Thing from '../classes/Thing.js';
import Structure from '../classes/Structure.js';
import Populant from '../classes/Populant.js';
import Map from '../classes/Map.js';


/**
 * Places are used to represent locations, and their main functional 
 * characteristic is the ability to spawn and hold populants.
 */
export default class Place extends Thing {
  constructor({ uuid = null, name = 'world',
                width = 10, height = 10 } =
              { uuid: null, name: 'world',
                width: 10, height: 10 }) {
    super({ uuid, name });

    this.population = [];
    this.map = new Map({ width, height });
    this.contents = [];

    let structures = [];
    //let test_structure = new Structure();
    //structures.push(test_structure);
    //this.structures = structures;
    

  };

  tick() {

    //for (let populant of Object.values(this.population)) {
    for (let populant of this.population) {
      populant.tick();
    };

    for (let structure of this.structures) {
      for (let populant of this.population) {
        structure.affectLocalActor(populant);
      };
    };

  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = new Populant({ class_name: 'Actor', constructor_parameters });
    this.population.push(populant);
    return populant;
  };

};
