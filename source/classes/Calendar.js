const Thing = require('../classes/Thing.js');


class Calendar extends Thing {
  constructor({ uuid = null, name = 'calendar' } =
              { uuid: null, name: 'calendar' }) {
    super();

  };

  get time() {
    let day_minutes = this.minutes_epoch % 1440;
    let hours = Math.floor(day_minutes / 60);
    let minutes = day_minutes % 60;
    let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    return time;
  };

  get minutes_epoch() {
    return this.ticks_epoch;
  };

  tick() {
    super.tick();
    console.info(`<${this.uuid}> time: <${this.time}>.`, this);
  };

};

module.exports = Calendar;
