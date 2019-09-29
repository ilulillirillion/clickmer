import SequenceStage from '../classes/SequenceStage.js';


export default class LocatePreySequenceStage extends SequenceStage {
  static tick({ sequence_progress, actor } = {}) {
    //console.debug(`Ticking LocatePreySequenceStage with sequence progress <${sequence_progress}> and actor <${actor}> (<${actor.uuid}>.`);
    super.tick({ sequence_progress: sequence_progress, actor: actor });
    console.debug(`<${actor.uuid}> is locating prey.`);
    //let sequence_delta = { 'stage_delta': 0, 'steps_delta': 0 };
    
    actor.updateSkill('tracking');
    
    let diceroll = Math.random();
    if (diceroll >= 0.9) {
      console.debug(`<${actor.uuid}> has located prey.`);
      //sequence_delta.stage_delta += 1;
      sequence_progress.steps = 0;
      sequence_progress.stage += 1;
    };
    return sequence_progress;
  };
};  
