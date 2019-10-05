import Thing form '../classes/Thing.js';


export default class ActorStatistic extends Thing {

  constructor({ name = 'statistic' } = { name: 'statistic' }) {
    super();    
    
    this.name = name;

    this._current = 0;
    try { this.maximum = 0 } catch(error) {};
    try { this.minimum = 0 } catch(error) {};

  };

  get current() {
    return this._current;
  };

  set current(current) {
    if (current > this.maximum) { current = this.maximum };
    if (current < this.minimum) { current = this.minimum };
    this._current = current;
  };

  levelUp() {
    this.current += 1;
  };

};
