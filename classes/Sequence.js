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

  get sequence_progress() {
    let sequence_progress = { 'stage': this.stage, 'steps': this.steps };
    return sequence_progress;
  };

  set sequence_progress({ stage, steps } = {}) {
    this.stage = stage;
    this.steps = steps;
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
