const Thing = require('../classes/Thing.js');
const Calendar = require('../classes/Calendar.js');
const WorldMap = require('../classes/WorldMap.js');
const Populant = require('../classes/Populant.js');


class World extends WorldMap {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.calendar = new Calendar();


  };



  tick() {
    super.tick();


    this.calendar.tick();
  };

  get random_place() {
    let place = this.getRandomTile();
    return place;
  };

  spawn({ class_name = 'Actor', constructor_parameters = {}} =
        { class_name: 'Actor', constructor_parameters: {}}) {
    let populant = new Populant({ class_name: 'Actor', constructor_parameters });
    let place = this.random_place;
    place.addContent(populant);
    return populant;
  };

};

module.exports = World;
