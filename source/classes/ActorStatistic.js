const Thing = require('../classes/Thing.js');


class ActorStatistic extends Thing {

  constructor({ uuid = null, name = 'statistic', 
                current = 0, maximum = 0, minimum = 0 } = 
              { uuid: null, name: 'statistic', 
                current: 0, maximum: 0, minimum: 0 }) {
    super({ uuid, name });    
    
    this.name = name;

    this._current = current;
    this.maximum = maximum;
    this.minimum = minimum;

  };

  get current() {
    return this._current;
  };

  set current(current) {
    if (current > this.maximum) { current = this.maximum };
    if (current < this.minimum) { current = this.minimum };
    this._current = current;
  };


  fill() {
    this.current = this.maximum;
  };

};

module.exports = ActorStatistic;
