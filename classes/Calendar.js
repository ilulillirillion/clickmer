import Thing from '../classes/Thing.js';


export default class Calendar extends Thing {
  constructor() {
    super();

    let units = [ 'seconds' ]
    this.units = units;
    for (let unit of this.units) {
      this[unit] = 0;
    };

    this.tick_unit = 'seconds';

  };

  tick() {
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

  get time() {
    let time = this[this.tick_unit];
    return time;
  };
    

};
