import ActorStatistic from '../classes/ActorStatistic.js';


export default class HungerActorStatistic extends ActorStatistic {
  get maximum() {
    console.debug(`Getting <${this.uuid}>'s maximum.`);
    //let vitality = this.actor.statistics.vitality.current;
    let vitality = this.actor.characteristics.vitality.current;
    let maximum = vitality * 10;
    console.debug(`Returning <${this.uuid}>'s maximum <${maximum}> from vitality <${vitality}>.`);
    return maximum;
  };
};
