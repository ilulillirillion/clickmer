import Component from '../classes/Component.js';


export default class ActorTask extends Component {
  
  constructor({ owner = null, uuid = null, name = 'task',
                simple_present_name = null } = 
              { owner: null, uuid: null, name: 'task',
                simple_present_name: null }) {
    super({ owner, uuid, name });

    this._simple_present_name = simple_present_name;
      
  };

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

  tick() {
    console.info(`<${this.owner}> is doing <${this.simple_present_name}>.`);
  };
};
