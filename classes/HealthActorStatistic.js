import ActorStatistic from '../classes/ActorStatistic.js';


export default class HealthActorStatistic extends ActorStatistic {
  constructor(actor) {
    super(actor);

    //this.current = this.maximum;
  };
  get maximum() {
    let vitality = this.actor.statistics.vitality.current;
    let maximum = vitality * 100;
    return maximum;
  };
};
