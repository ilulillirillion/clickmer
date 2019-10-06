import ActorStatistic from '../classes/ActorStatistic.js';


export default class HungerActorStatistic extends ActorStatistic {
  constructor(actor) {
    console.debug('Constructing a new HungerActorStatistic.');
    super(actor);
    console.debug(`Constructing <${this.class_name}> <${this.uuid}>.`);

    //this._current = 100;
    //this._maximum = 100;

  };

  get current() {
    console.debug(`Getting <${this.actor.uuid}> current <${this.uuid}>.`);
    return this._current;
  };

  set current(value) {
    console.debug(`Setting <${this.actor.uuid}> current <${this.uuid}> to <${value}>.`);
    this._current = value;
    if (this._current <= 0) {
      this.actor.die();
    };
  };

};
