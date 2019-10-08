import Actor from '../classes/Actor.js';
import Human from '../classes/Human.js';
import Pixie from '../classes/Pixie.js';


const valid_populants = {
  Actor,
  Human,
  Pixie
};

class Populant {
  constructor({ class_name = 'Actor', class_parameters = {} } =
              { class_name: 'Actor', class_parameters: {} }) {
    return new valid_populants[class_name](class_parameters);
  };
};

export default Populant;
