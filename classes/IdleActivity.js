import Activity from '../classes/Activity.js';


export default class IdleActivity extends Activity {

  constructor() {
    console.debug('Instantiating new IdleActivity');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    this.name = 'idle';
    this.populant_pane_string = 'idling';

  };
};
