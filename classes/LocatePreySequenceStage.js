import SequenceStage from '../classes/SequenceStage.js';
import Rabbit from '../classes/Rabbit.js';


export default class LocatePreySequenceStage extends SequenceStage {
  static estimated_steps = 10;
  static tick({ sequence_progress, actor } = {}) {
    //console.debug(`Ticking LocatePreySequenceStage with sequence progress <${sequence_progress}> and actor <${actor}> (<${actor.uuid}>.`);
    super.tick({ sequence_progress: sequence_progress, actor: actor });
    console.debug(`<${actor.uuid}> is locating prey.`);
    //let sequence_delta = { 'stage_delta': 0, 'steps_delta': 0 };
    
    //actor.updateSkill('tracking', 1);
    //actor.updateSkill('hunting', 1);
    actor.skills.tracking.experience += 1;
    actor.skills.hunting.experience += 1;
    sequence_progress.steps += 1;
    
    let diceroll = Math.random();
    console.warn(`1 ${diceroll}`);
    diceroll = diceroll + ((actor.skills.tracking.level / 100) * diceroll)
    console.warn(`2 ${diceroll}`);
    if (diceroll >= 0.9) {
      console.debug(`<${actor.uuid}> has located prey.`);
      let prey = new Rabbit();
      //let prey = new Bear();
      sequence_progress.temporary_objects.prey = prey;
      //sequence_delta.stage_delta += 1;
      sequence_progress.steps = 0;
      sequence_progress.stage += 1;
    };
    return sequence_progress;
  };
};  
