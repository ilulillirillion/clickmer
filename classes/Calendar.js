import Thing from '../classes/Thing.js';


export default class Calendar extends Thing {
  constructor() {
    super();

    /*
    let units = [ 'minutes' ]
    this.units = units;
    for (let unit of this.units) {
      this[unit] = 0;
    };
    */

    //this.minutes = 0;

    //this.tick_unit = 'minutes';

  };

  tick() {
    super.tick();
    /*
    for (let unit of this.units) {
      if (unit === this.tick_unit) {
        unit += 1;
      }
    }
    */
    this[this.tick_unit] += 1;
    console.debug(`<${this.uuid}> time: <${this.time}>.`);
  };

  /*
  get time() {
    let time = this[this.tick_unit];
    return time;
  };
  */

  get time() {
    let day_minutes = this.minutes_epoch % 720;
    let hours = Math.floor(day_minutes / 60);
    let minutes = day_minutes % 60;
    let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return time;
  };

  get weeks_epoch() {
    let weeks = Math.floor(this.days / 7);
    return weeks;
  }; 

  get days_epoch() {
    let days = Math.floor(this.hours / 24);
    return days;
  };

  get hours_epoch() {
    let hours = Math.floor(this.minutes / 60);
    return hours;
  };

  get minutes_epoch() {
    let minutes = this.ticks_epoch;
    return minutes;
  };
    

};
