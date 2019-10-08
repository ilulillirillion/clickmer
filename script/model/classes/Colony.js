import Place from '../classes/Place.js';


export default class Colony extends Place {
  constructor({ uuid = null, name = 'colony' } =
              { uuid: null, name: 'colony' }) {
    super({ uuid, name });

    var self = this;

  
    this.innate_effects = [
      // Randomly generate a pixie
      function() {
        let random_chance = Math.random();
        if (random_chance >= 0.50) {
          self.spawn({ class_name: 'Pixie' });
        };
      }
    ];
        
      
  };

  /*
  tick() {
    //let chance = Math.random();
    //this.randomlyCreatePixie({ chance: chance });
  };
  */

  /*
  randomlyCreatePixie({ chance }) {
    //let effective_chance = chance / this.population.length
    if (chance >=  0.19) {
      //let pixie = new Actor();
      //this.populants.push(pixie);
      let spawn = this.spawn();
      //return true;
    };
    //return false;
  };
  */
};
