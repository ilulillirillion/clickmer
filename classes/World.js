import Place from '../classes/Place.js';
import Calendar from '../classes/Calendar.js';


export default class World extends Place {
  constructor({ uuid = null, name = 'world' } =
              { uuid: null, name: 'world' }) {
    super({ uuid, name });

    this.calendar = new Calendar();

    this.population = [];

  };

  tick() {
    super.tick();
    this.calendar.tick();
  };

  /*
  tick() {
    for (let populant of Object.values(this.population)) {
      populant.tick();
    };
  };
  */

};
