import Activity from '../classes/Activity.js';


export default class IdleActivity extends Activity {

  constructor(actor) {
    console.debug(`Instantiating new IdleActivity for actor <${actor.uuid}>.`);
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    this.name = 'idle';
    this.populant_pane_string = 'idling';
    
    let self = this;
    //let trigger_activity_effects_tick_listener = function() {
    let tick_listener = function() {
      console.debug(`Increasing <${this.uuid}>'s energy from idling.`);
      self.actor.updateStatistic('energy', 1);
    };
    this.tick_listeners.push(tick_listener);
      

  };

  

};
