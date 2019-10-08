import Thing from '../classes/Thing.js';
import Structure from '../classes/Structure.js';
import Populant from '../classes/Populant.js';
import Map from '../classes/Map.js';


/**
 * Places are used to represent locations, and their main functional 
 * characteristic is the ability to spawn and hold populants.
 */
//export default class Place extends Thing {
export default class Place extends Map {
  constructor({ uuid = null, name = 'place', width = 10, height = 10 } =
              { uuid: null, name: 'place', width: 10, height: 10 }) {
    super({ uuid, name, width, height });

    //this.population = [];
    //this.map = new Map({ width, height });
    //this.contents = [];

    //let structures = [];
    //let test_structure = new Structure();
    //structures.push(test_structure);
    //this.structures = structures;

    //this.contents = [];

    this.innate_effects = [];
    
    

  };

  /*
  get population() {
    let population = [];
    for (let content of this.contents) {
      if (content.thing_type === 'actor') {
        population.push(content);
      };
    };
  };


  get structures() {
    let structures = [];
    for (let structure of this.structures) {
      if (content.thing_type === 'structure') {
        structures.push(content);
      };
    };
  };
  */


  tick() {

    // Tick places own innate effects
    for (let effect of this.innate_effects) {
      effect();
    }; 

    //for (let populant of Object.values(this.population)) {
    for (let populant of this.population) {
      populant.tick();
    };

    for (let structure of this.structures) {
      structure.affectLocalPlace(this);
      for (let populant of this.population) {
        structure.affectLocalActor(populant);
      };
    };

  };

  createDynamicPopulant({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = new Populant({ class_name: class_name, constructor_parameters });
    //this.population.push(populant);
    return populant;
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    console.warn('Creating class_name with parameters', class_name, constructor_parameters);
    let populant = this.createDynamicPopulant(
        { class_name, constructor_parameters });
    console.warn('Created populant', populant);
    //this.population.push(populant);
    this.addContent(populant);
    return populant;
  };

};
