import Thing from '../classes/Thing.js';
import Structure from '../classes/Structure.js';
import Populant from '../classes/Populant.js';
import Map from '../classes/Map.js';


export default class Locale extends Map {
  constructor({ uuid = null, name = 'world',
                width = 10, height = 10 } =
              { uuid: null, name: 'world',
                width: 10, height: 10 }) {
    super({ uuid, name, width, height });

    /*
    //this.population = [];
    this.map = new Map({ width, height });
    //this.contents = [];

    //let structures = [];
    let test_structure = new Structure();
    structures.push(test_structure);
    this.structures = structures;
    */

    

  };

  /*
  get contents() {
    return this.map.contents;
  };
  */

  /*
  get population() {
    return this.map.population;
  };

  get structures() {
    return this.map.structures;
  };
  */

  tick() {

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
    let populant = new Populant({ class_name: 'Actor', constructor_parameters });
    //this.population.push(populant);
    return populant;
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = this.createDynamicPopulant(
        { class_name, constructor_parameters });
    this.population.push(populant);
    return populant;
  };

};
