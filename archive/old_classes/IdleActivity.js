import Activity from '../classes/Activity.js';


export default class IdleActivity extends Activity {
  /*
  constructor({ name = 'idle', requirements = {} } =
              { name: 'idle', requirements: {} }) {
    console.debug(`Constructing a new IdleActivity with name <${name}> and requirements <${requirements}>.`);
    super(name, requirements); // Super will set these.
    console.debug(`Constructing <${this.uuid}>.`);

  };

  tick({ actor=null } = { actor: null }) {
    // Only ticks if super tick completes.
    if (super.tick(actor)) {
      console.debug(`<${actor.uuid}> is idling.`);
    };
  };
  */

  static name = 'idle';
  static requirements = {};
  static tick({ actor = null } = { actor: null }) {
    console.debug(`Ticking IdleActivity with actor <${actor}>.`);
    if (super.tick({ actor: actor })) {
      console.debug(`<${actor.uuid}> is idling.`);
    };
  }; 

};
