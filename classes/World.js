import Thing from '../classes/Thing.js';
import Calendar from '../classes/Calendar.js';


export default class World extends Thing {
  constructor() {
    super();

    // Name assignment.
    this.name = 'world';

    // Time assignment.
    //this.time = 0;

    this.calendar = new Calendar();
    
  }

  tick() {
    super.tick();
    this.calendar.tick();
  };

  get age() {
    // Set age equal to the ticks epoch property provided by Thing.
    let age = this.ticks_epoch;
    return age
  };

}
