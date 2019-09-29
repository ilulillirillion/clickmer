import Actvity from '../classes/Activity.js';


export default class HuntPreyActivity extends Actvity {
  static name = 'hunt prey';
  static requirements = { 'survivalism': 1 };
  static tick({ actor = null } = { actor: null }) {
    console.debug(`Ticking HuntPreyActivity with actor <${actor}>.`);
    if (super.tick({ actor: actor })) {
      console.debug(`<${this.uuid}> is hunting prey.`);
      actor.updateSkill('hunting');
      actor.updateSkill('survivalism');
      actor.updateStatistic('hunger', 2);
    };
  };
};
