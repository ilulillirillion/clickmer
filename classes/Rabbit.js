import Actor from '../classes/Actor.js';


export default class Rabbit extends Actor {

  constructor() {
    let characteristics = {
      'vitality': 1
    };
    super({ characteristics: characteristics });
  };
};
