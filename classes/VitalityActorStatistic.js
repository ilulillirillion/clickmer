import ActorStatistic from '../classes/ActorStatistic.js';


export default class VitalityActorStatistic extends ActorStatistic {
  constructor(actor) {
    super(actor);
    this.maximum = 1;
    this.current = 1;
    this.minimum = 1;
  };
  /*
  constructor() {
    super({ name: 'vitality' });
  };
  */
};
