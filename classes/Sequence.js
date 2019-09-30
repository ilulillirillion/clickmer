import Thing from '../classes/Thing.js';


export default class Sequence extends Thing {
  constructor({ stages = {}, stage = 1, steps = 0 } = 
              { stages:  {}, stage:  1, steps:  0 }) {
    console.debug(`Constructing a new Sequence with stages <${stages}>.`);
    super();
    console.debug(`Constructing <${this.uuid}>`);

    // Stage assignment.
    this.stage = stage || 1;
    console.debug(`Set <${this.uuid}>'s stage to <${this.stage}>.`);

    // Steps assignment.
    this.steps = steps || 0;
    console.debug(`Set <${this.uuid}>'s steps to <${this.steps}>.`);

    // Stages assignment.
    this.stages = stages || {};
    console.debug(`Set <${this.uuid}>'s stages to <${this.stages}>.`);

  };

  get estimated_steps() {
    let estimated_steps = 0;
    for (let stage of Object.values(this.stages)) {
      estimated_steps += stage.estimated_steps;
    };
    return estimated_steps;
  };


  get remaining_steps_estimate() {
    let number_of_stages = Object.keys(this.stages).length;
    let starting_stage = this.stage;
    let remaining_steps_estimate = 0;
    for (let i = starting_stage; i < number_of_stages; i++) {
      let stage = this.stages[i];
      remaining_steps_estimate += stage.estimated_steps;
    };
    return remaining_steps_estimate;
  }


  get fill_bar_values() {
    let previous_stage_steps = 0;
    //let remaining_stage_steps = 0;
    for (let [stage_number, stage_data] of Object.entries(this.stages)) {
      if (stage_number < this.stage) {
        let steps_addition = stage_data.estimated_steps;
        //this.previous_stage_steps += stage_data.estimated_steps;
        previous_stage_steps += steps_addition;
        console.debug(`Added <${steps_addition}> steps to previous stage steps <${previous_stage_steps}>.`);
      };
      /* 
      else {
        this.remaining_stage_steps += stage_data.estimated_steps;
      };
      */
    };
    let current_steps = this.steps;
    let current_stage_steps = this.stages[this.stage].estimated_steps;
    console.debug(`tempa1 <${this.stage}> <${this.stage.estimated_steps}>.`);
    console.debug(`comparing current steps <${current_steps}> to <${current_stage_steps}>.`);
    //if (current_steps > this.stage.estimated_steps) {
    if (current_steps > current_stage_steps) {
      console.debug(`current steps <${current_steps}> exceeds estimated <${this.stage.estimated_steps}>, some steps won't be measured for bar progress.`);
      current_steps = this.stage.estimated_steps;
    };
    let steps_progress = previous_stage_steps + current_steps;
    return [steps_progress, this.estimated_steps];
  };
      
      

  get sequence_progress() {
    let sequence_progress = { 'stage': this.stage, 'steps': this.steps };
    return sequence_progress;
  };

  set sequence_progress({ stage, steps } = {}) {
    this.stage = stage;
    this.steps = steps;
  };

  get effective_steps_progress() {
    let steps = this.steps;
    let maximum_effective_steps = this.stage.estimated_steps;
    let minimum_effective_steps = this.previously_accumulated_steps;
    if (steps > maximum_effective_steps) {
      steps = maximum_effective_steps;
    };
    return steps;
  };

  tick(actor) {
    console.debug('Ticking Sequence.')
    //console.debug(`Ticking Sequence (stage: <${sequence_progress.stage}>) with actor <${actor.uuid}>.`);
    let sequence_progress = this.stages[this.stage].tick({ sequence_progress: this.sequence_progress, actor: actor });
    this.sequence_progress = sequence_progress;
    /*
    if (sequence_delta) {
      // Stage delta handling.
      if ('stage_delta' in sequence_delta) {
        let new_stage = this.stage + sequence_delta.stage_delta;
        console.debug(`Updating <${this.uuid}> stage <${this.stage}> by <${sequence_delta.stage_delta}> to <${new_stage}>.`);
        this.stage = new_stage;
        console.debug(`Set <${this.uuid}> stage to <${this.stage}>.`);
      }
      // Steps delta handling.
      if ('steps_delta' in sequence_delta) {
        let new_steps = this.steps + sequence_delta.steps_delta;
        console.debug(`Updating <${this.uuid}> steps <${this.steps}> by <${sequence_delta.steps_delta}> to <${new_steps}>.`);
        this.steps = new_steps;
        console.debug(`Set <${this.uuid}> steps to <${this.steps}>.`);
      };
    };
    */
  };
};
