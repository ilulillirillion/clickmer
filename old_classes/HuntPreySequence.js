import Sequence from '../classes/Sequence.js';
import LocatePreySequenceStage from '../classes/LocatePreySequenceStage.js';
import FightPreySequenceStage from '../classes/FightPreySequenceStage.js';
import EatPreySequenceStage from '../classes/EatPreySequenceStage.js';


export default class HuntPreySequence extends Sequence {
  constructor(
    { 
      stages = { 
          1: LocatePreySequenceStage, 
          2: FightPreySequenceStage,
          3: EatPreySequenceStage
      }, 
      stage = 1, steps = 0 
    } = 
    { 
      stages:  { 
          1: LocatePreySequenceStage, 
          2: FightPreySequenceStage,
          3: EatPreySequenceStage
      }, 
      stage:  1, steps:  0 
    }) 
      {
    console.debug(`Constructing a new HuntPreySequence with stages <${stages}>, stage <${stage}> and steps <${steps}>.`);
    // Super will handle basic setting.
    super({stages: stages, stage: stage, steps: steps});
  };


};
