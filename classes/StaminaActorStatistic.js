import ActorStatistic from '../classes/ActorStatistic.js';


export default class StaminaActorStatistic extends ActorStatistic {
  get maximum() {
    //let vitality = this.actor.characteristics.vitality;
    let vitality = this.actor.statistics.vitality.current;
    let maximum = vitality * 50;
    return maximum;
  };
};
