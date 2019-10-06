import Activity from '../classes/Activity.js';


export default class RestActivity extends Activity {

  static name = 'rest';
  static requirements = {};
  static tick({ actor = null } = { actor: null }) {
    super.tick();
    console.debug(`<${actor.uuid}> is resting.`);
    actor.statistics.health.current += 1;
  };

};
