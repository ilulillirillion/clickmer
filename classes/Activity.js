//import Thing from '../classes/Thing.js';


export default class Activity {
  /*
  constructor({ name = 'activity', requirements = {} } = 
              { name: 'activity', requirements: {} }) {
    console.debug(`Constructing a new Activity with name <${name}> and requirements <${requirements}>.`);
    super();
    console.debug(`Constructing <${this.uuid}>.`);

    // Name assignment.
    this.name = name || 'activity';
    console.debug(`<${this.uuid}> name set to <${this.name}>.`);

    // Requirements assignment.
    this.requirements = requirements || {};
    console.debug(`<${this.uuid}> requirements set to <${this.requirements}>.`);

  };

  tick({ actor=null } = { actor: null }) {
    console.debug(`Ticking <${this.uuid}> with actor <${actor}>.`);
    if (!actor) {
      console.debug(`Stopping <${this.uuid}>'s tick early because <${actor}> is null.`);
      return false; // Halts wrapped ticks.
    };
    return true;
  };
  */

  static name = 'activity';
  static requirements = {};
  static tick({ actor=null } = { actor: null }) {
    console.debug(`Ticking Activity with actor <${actor}>.`);
    if (!actor) {
      console.debug(`Stopping Activity tick early because <${actor}> is null.`);
      return false;
    };
    return true;
  };

};
