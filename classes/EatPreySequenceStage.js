import SequenceStage from '../classes/SequenceStage.js';


export default class EatPreySequenceStage extends SequenceStage {
  static tick({ sequence_progress, actor } = {}) {
    super.tick({ sequence_progress: sequence_progress, actor: actor });
    
    console.debug(`<${actor.uuid}> is eating prey.`);

    actor.updateStatistic('hunger', 6);
    sequence_progress.steps += 1;

    if (sequence_progress.steps >= 5) {
      console.debug(`<${this.uuid}> has finished eating.`);
      sequence_progress.steps = 0;
      sequence_progress.stage = 1;
    };

    return sequence_progress;

  };
};
