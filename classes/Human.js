import Actor from '../classes/Actor.js';


export default class Human extends Actor {

  constructor() {
    let characteristics = {
      'vitality': 10
    };
    super({ characteristics: characteristics });

    //this.sex = this.randomlyDetermineSex();
  };

  tick() {
    super.tick();
    console.warn(`teste1 <${this.sex}>.`);
  };

  /*
  randomlyDetermineSex() {
    console.debug(`Determining random sex for <${this.class_name}> <${this.uuid}>.`);
    let sexes = [ 'male', 'female' ];
    let random_index = Math.floor(Math.random() * sexes.length);
    console.debug(`Determing <${this.uuid}>'s sex from sexes: <${sexes}> with random index <${random_index}>.`);
    let sex = sexes[random_index];
    console.debug(`Returning random sex <${sex}> for <${this.uuid}>.`);
    return sex;
  };
  */

};
