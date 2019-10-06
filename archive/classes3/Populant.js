import Actor from '../classes/Actor.js';


const valid_populants = {
  'Actor': Actor
};

class Populant {
  constructor({ class_name = 'Actor', class_parameters = {} } =
              { class_name: 'Actor', class_parameters: {} }) {
    return new valid_populants[class_name](class_parameters);
  };
};

export default Populant;
