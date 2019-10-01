import SequenceStage from '../classes/SequenceStage.js';


export default class FightPreySequenceStage extends SequenceStage {
  static estimated_steps = 5;
  static tick({ sequence_progress, actor } = {}) {
    //console.debug('Ticking FightPreySequenceStage.');
    super.tick({ sequence_progress: sequence_progress, actor: actor });

    console.debug(`<${actor.uuid}> is fighting prey.`);    

    //let sequence_delta = { 'stage_delta': 0, 'steps_delta': 0 };
   
    //actor.updateStatistic('health_points', -1);
    //actor.statistics.health.update(-1);
    actor.statistics.health.current -= 1;
    actor.characteristics.vitality.experience += 1;
    //actor.updateSkill('fighting', 2);
    //actor.statistics.fighting.update(2);
    actor.skills.fighting.experience += 2;
    sequence_progress.steps += 1;

    if (sequence_progress.steps >= 5) {
      console.debug(`<${actor.uuid}> has defeated its prey.`);
      sequence_progress.steps = 0;
      sequence_progress.stage += 1;
    };

    return sequence_progress;

  };
};  
