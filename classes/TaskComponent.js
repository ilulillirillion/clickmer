import Component from '../classes/Component.js';


export default class ActorTask extends Component {
  
  /*
  constructor({ uuid = null, name = 'task' } = 
              { uuid: null, name: 'task' }) {
    super({ uuid, name });
      
  };
  */

  tick() {
    console.info(`<${this.owner}> is doing <${task.name}>.`);
  };
};
