import Actvity from '../classes/Activity.js';
import HuntPreySequence from '../classes/HuntPreySequence.js';


export default class HuntPreyActivity extends Actvity {
  static name = 'hunt prey';
  static requirements = { 'survivalism': 1 };
  static tick({ actor = null } = { actor: null }) {
    console.debug(`Ticking HuntPreyActivity with actor <${actor}>.`);
    if (super.tick({ actor: actor })) {
      console.debug(`<${actor.uuid}> is hunting prey.`);
      actor.updateSkill('hunting');
      actor.updateSkill('survivalism');
      actor.updateStatistic('hunger', 2);
    };
  };
  static get sequence() {
    let sequence = new HuntPreySequence();
    return sequence;
  };
  /*
  static get sequence() {
    let sequence = {
      'stage': 1,
      'steps': 0,
      'stages': {
        1: {
          'tick': function(actor) {
            console.debug(`<${actor.uuid}> is locating prey.`);
            let sequence_progression = actor.sequence_progression;
            //actor.updateSkill('hunting');
            //actor.updateSkill('survivalism');
            actor.updateSkill('tracking');
            //actor.updateStatistic('hunger', 2);
            let diceroll = Math.random();
            if (diceroll >= 0.9) {
              console.debug(`<${actor.uuid}> has located prey.`);
              sequence_progression.stage = 2;
            };
            return sequence_progression;
          },
          'estimated_steps': 10
        },
        2: { 
          'tick': function(actor) {
            console.debug(`<${actor.uuid}> is fighting prey.`);
            let sequence_progression = actor.sequence_progression;
            actor.updateStatistic('health', -1);
            actor.updateSkill('fighting');
            sequence_progression.steps += 1;
            if (sequence_progression.steps >= 5) {
              console.debug(`<${actor.uuid}> has defeated prey.`);
              sequence_progression.steps = 0;
              sequence_progression.stage = 3;
            }
            return sequence_progression;
          },
          'estimated_steps': 5
        },
        '3': {
          'tick': function(actor) {
            console.debug(`<${actor.uuid}> is eating prey.`);
            let sequence_progression = actor.sequence_progression;
            actor.updateStatistic('hunger', 6);
            sequence_progression.steps += 1;
            if (sequence_progression.steps >= 5) {
              console.debug(`<${actor.uuid}> has finished eating.`);
              sequence_progression.steps = 0;
              sequence_progression.stage = 1;
            };
            return sequence_progression;
          },
          'estimated_steps': 5 
        }
      }
    };
    return sequence;
  };
  */
};
