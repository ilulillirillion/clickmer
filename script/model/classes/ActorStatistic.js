import Thing from '../classes/Thing.js';


export default class ActorStatistic extends Thing {

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

  /*
  levelUp() {
    this.current += 1;
  };
  */

  fill() {
    this.current = this.maximum;
  };

};
