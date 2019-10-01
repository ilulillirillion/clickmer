//import ActorSkill from '../classes/ActorSkill.js';
import ActorStatistic from '../classes/ActorStatistic.js';


//export default class HealthActorSkill extends ActorSkill {
export default class HealthActorStatistic extends ActorStatistic {
  constructor(actor) {
    super(actor);

    //this.current = this.maximum;
  };
  get maximum() {
    //console.info(this.actor.characteristics);
    let vitality = this.actor.characteristics.vitality.current;
    let maximum = vitality * 100;
    return maximum;
  };
};
