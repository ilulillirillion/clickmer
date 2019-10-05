import Human from '../classes/Human.js';


const valid_classes = {
  Human
};


let PopulantMixin;
export default PopulantMixin = Base => class extends Base {
  constructor(className, parameters) {
    return new valid_classes[classname](parameters);
  };
};
