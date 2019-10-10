const Place = require('../classes/Place.js');


class Colony extends Place {
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

};


module.exports = Colony;
