//import ActorStatistic from '../classes/ActorStatistic.js';
import ActorSkill from '../classes/ActorSkill.js';


//export default class VitalityActorStatistic extends ActorStatistic {
export default class VitalityActorSkill extends ActorSkill {
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
