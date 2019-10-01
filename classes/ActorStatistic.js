import Thing from '../classes/Thing.js';


export default class ActorStatistic extends Thing {
  constructor({ name = 'statistic', actor }) {
    // TODO: super should handle name...
    super();

    this.name = name;

    this.actor = actor;

    //this.maximum = 0;
    //this.minimum = 0;
    // These may not have setters, use best effort.
    //try { this._current = 0 } catch(error) {};
    this._current = 0;
    try { this.maximum = 0 } catch(error) {};
    try { this.minimum = 0 } catch(error) {};

    //this.current = this.maximum;
  
  };

  fill() {
    console.debug(`Filling <${this.uuid}> from <${this.current}> to <${this.maximum}>.`);
    this.current = this.maximum;
  };

  get current() {
    return this._current;
  };

  set current(current) {
    console.debug(`Setting current to <${current}>.`);
    if (current > this.maximum) { current = this.maximum };
    if (current < this.minimum) { current = this.minimum };
    this._current = current
    console.debug(`Set current to <${this.current}> (<${this._current}>).`);
  };
 

  /*
  update(delta, state='current') {
    let current_value = this[state];
    let new_value = current_value += delta;
    if (state === 'current') {
      if (new_value > this.maximum) { new_value = this.maximum };
      if (new_value < this.minimum) { new_value = this.minimum };
    };
    this[state] = new_value;
  };
  */
};
