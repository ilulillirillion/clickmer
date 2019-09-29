import Activity from '../classes/Activity.js';


export default class StudyEnvironmentActivity extends Activity {
  static name = 'study environment';
  static requirements = {};
  static tick({ actor = null } = { actor: null }) {
    console.debug(`Ticking StudyEnvironmentActivity with actor <${actor}>.`);
    if (super.tick({ actor: actor })) {
      console.debug(`<${actor.uuid}> is studying the environment.`);
      actor.updateSkill('survivalism', 1);
    };
  };
};
