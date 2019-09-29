import SequenceStage from '../classes/SequenceStage.js';


export default class FightPreySequenceStage extends SequenceStage {
  static tick({ sequence_progress, actor } = {}) {
    //console.debug('Ticking FightPreySequenceStage.');
    super.tick({ sequence_progress: sequence_progress, actor: actor });

    console.debug(`<${actor.uuid}> is fighting prey.`);    

    //let sequence_delta = { 'stage_delta': 0, 'steps_delta': 0 };
   
    actor.updateStatistic('health', -1);
    actor.updateSkill('fighting');
    sequence_progress.steps += 1;

    if (sequence_progress.steps >= 5) {
      console.debug(`<${actor.uuid}> has defeated its prey.`);
      sequence_progress.steps = 0;
      sequence_progress.stage += 1;
    };

    return sequence_progress;

  };
};  
