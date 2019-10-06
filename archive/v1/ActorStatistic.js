import Thing from '../classes/Thing.js';


export default class ActorStatistic extends Thing {
  constructor(actor) {
    console.debug('Constructing a new ActorStatistic.');
    super();
    console.debug(`Constructing <${this.class_name}> <${this.uuid}>.`);

    this.actor = actor;
    this._current = 100;
    this._maximum = 100;

    //this.test = this['current'];
    //console.warn(this.test);

  }

  add(value, selector='current') {
    console.debug(`Adding <${value}> to <${this.actor.uuid}>'s <${selector}> <${this.uuid}> of <${this[selector]}>.`);
    let changed_value = this[selector];
    changed_value += value;
    this[selector] = changed_value;
  };

  get current() {
    console.debug(`Getting <${this.actor.uuid}> current <${this.uuid}>.`);
    return this._current;
  };

  set current(value) {
    console.debug(`Setting <${this.actor.uuid}> current <${this.uuid}> to <${value}>`);
    this._current = value;
  };

  get maximum() {
    console.debug(`Getting <${this.actor.uuid}> maximum <${this.uuid}>.`);
    return this._maximum;
  };

  set maximum(value) {
    console.debug(`Setting <${this.actor.uuid}> maximum <${this.uuid}> to <${value}>.`);
    this._maximum = value;
  };

};
