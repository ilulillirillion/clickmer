const Thing = require('../classes/Thing.js');


class ActorTask extends Thing {
  
  constructor({ uuid = null, name = 'task',
                simple_present_name = null } = 
              { uuid: null, name: 'task',
                simple_present_name: null }) {
    super({ uuid, name });

    this.simple_present_name = simple_present_name;
      
  };

  getSimplePresentName() {
    let simple_present_name = this.simple_present_name;
    if (!simple_present_name) {
      simple_present_name = `${this.name}ing`;
    };
    return simple_present_name;
  };

  /*
  get simple_present_name() {
    let simple_present_name = this._simple_present_name;
    if (!simple_present_name) {
      simple_present_name = `${this.name}ing`;
    };
    return simple_present_name;
  };

  set simple_present_name(value) {
    this._simple_present_name = value;
  };
  */

  apply_tick_effects( { participant = { uuid: 'dummy' }} = 
                      { participant:  { uuid: 'dummy' }} ) {
    //console.info(`${participant.uuid} is ${this.getSimplePresentName()}`);
  };
};

module.exports = ActorTask;
