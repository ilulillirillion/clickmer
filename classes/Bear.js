import Actor from '../classes/Actor.js';


export default class Bear extends Actor {
  
  constructor() {
    let characteristics = {
      'vitality': 20,
      'strength': 40
    };
    super({ characteristics: characteristics });
  };
};
