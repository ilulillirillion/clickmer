const Thing = require('../classes/Thing.js');
const Structure = require('../classes/Structure.js');
const Populant = require('../classes/Populant.js');
const Map = require('../classes/Map.js');


/**
 * Places are used to represent locations, and their main functional 
 * characteristic is the ability to spawn and hold populants.
 */
class Place extends Map {
  constructor({ uuid = null, name = 'place', width = 10, height = 10 } =
              { uuid: null, name: 'place', width: 10, height: 10 }) {
    super({ uuid, name, width, height });


    this.innate_effects = [];
    
  };


  tick() {

    // Tick places own innate effects
    for (let effect of this.innate_effects) {
      effect();
    }; 

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
    return populant;
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    console.warn('Creating class_name with parameters', class_name, constructor_parameters);
    let populant = this.createDynamicPopulant(
        { class_name, constructor_parameters });
    console.warn('Created populant', populant);
    this.addContent(populant);
    return populant;
  };

};

module.exports = Place;
