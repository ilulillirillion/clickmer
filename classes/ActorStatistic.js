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
    try { this.current = 0 } catch(error) {};
    try { this.maximum = 0 } catch(error) {};
    try { this.minimum = 0 } catch(error) {};

    //this.current = this.maximum;
  
  };

  fill() {
    console.debug(`Filling <${this.uuid}> from <${this.current}> to <${this.maximum}>.`);
    this.current = this.maximum;
  };

  update(delta, state='current') {
    let current_value = this[state];
    let new_value = current_value += delta;
    if (state === 'current') {
      if (new_value > this.maximum) { new_value = this.maximum };
      if (new_value < this.minimum) { new_value = this.minimum };
    };
    this[state] = new_value;
  };
};
