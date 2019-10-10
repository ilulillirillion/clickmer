const Actor = require('../classes/Actor.js');
const Human = require('../classes/Human.js');
const Pixie = require('../classes/Pixie.js');

const valid_populants = {
  Actor,
  Human,
  Pixie
};

/*
 * Dynamically instantiate an actor class as a populant class.
 * Used to allow dynamic class name instantiation.
 * Also used to ensure populant fill_statistic method is invoked following
 * constructor.
 */
class Populant {
  constructor({ class_name = 'Actor', class_parameters = {} } =
              { class_name: 'Actor', class_parameters: {} }) {
    let populant = new valid_populants[class_name](class_parameters);
    populant.fill_statistics();
    return populant; 
  };
};

module.exports = Populant;
