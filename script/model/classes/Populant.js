import Actor from '../classes/Actor.js';
import Human from '../classes/Human.js';
import Pixie from '../classes/Pixie.js';


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

export default Populant;
