import Thing from '../classes/Thing.js';
import VitalityActorStatistic from '../classes/VitalityActorStatistic.js';
import HealthActorStatistic from '../classes/HealthActorStatistic.js';
import StaminaActorStatistic from '../classes/StaminaActorStatistic.js';
import HungerActorStatistic from '../classes/HungerActorStatistic.js';


export default class ActorStatistics extends Thing {
  constructor(actor) {
    super();

    let vitality = new VitalityActorStatistic({ name: 'vitality', actor: actor });
    this.vitality = vitality;

    let health = new HealthActorStatistic({ name: 'health', actor: actor });
    this.health = health;

    let stamina = new StaminaActorStatistic({ name: 'stamina', actor: actor });
    this.stamina = stamina;

    let hunger = new HungerActorStatistic({ name: 'hunger', actor: actor });
    this.hunger = hunger;

  };

  fill() {
    console.debug(`Filling <${this.uuid}>.`);
    this.health.fill();
    this.stamina.fill();
    this.hunger.fill();
  };

};
