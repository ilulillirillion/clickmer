import SequenceStage from '../classes/SequenceStage.js';


export default class EatPreySequenceStage extends SequenceStage {
  static estimated_steps = 5;
  static tick({ sequence_progress, actor } = {}) {
    super.tick({ sequence_progress: sequence_progress, actor: actor });
    
    console.debug(`<${actor.uuid}> is eating prey.`);

    let prey = sequence_progress.temporary_objects.prey;
    if (prey.statistics.hunger.current >= 6) {
      actor.statistics.hunger.current += 6;
      prey.statistics.hunger.current -= 6;
    } else {
      actor.statistics.hunger.current += prey.statistics.hunger.current;
      prey.statistics.hunger.current = 0;
      sequence_progress.temporary_objects = {};
      sequence_progress.steps = 0;
      sequence_progress.stage = 1;
    };
    return sequence_progress;
    


    /*
    //actor.updateStatistic('hunger', 6);
    //actor.statistics.hunger.update(6);
    actor.statistics.hunger.current += 6;
    sequence_progress.steps += 1;

    if (sequence_progress.steps >= 5) {
      console.debug(`<${this.uuid}> has finished eating.`);
      sequence_progress.steps = 0;
      sequence_progress.stage = 1;
    };

    return sequence_progress;
    */

  };
};
