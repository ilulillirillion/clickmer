import PopulantPane from '../classes/PopulantPane.js';


export default class ActivityPopulantPane extends PopulantPane {
  constructor(actor, activity_name) {
    console.debug(`Constructing a new PopulantPane with actor <${actor}> and activity_name <${activity_name}>.`);
    super(actor);
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.activity_name = activity_name;
    this.header_span_contents = this._header_span_contents;

    this.element.classList.add('activity_populant_pane');

    let self = this;
    this.element.addEventListener('click', function(_event) {
      console.debug(`<${self.uuid}> clicked with event <${_event}>.`);
      if (self.actor.activity == self.activity_name) {
        //self.actor.activity = 'idle';
        //let idle_activity = Actor.activities.find(activity => activity.name === 'idle');
        //self.actor.activity = idle_activity;
        self.actor.activity = actor.getActivity('idle');
      } else {
        //let activity = Actor.activities.find(activity => activity.name === self.activity_name);
        //self.actor.activity = activity;
        self.actor.activity = actor.getActivity(activity_name);
      };
    });

  };

  get _header_span_contents() {
    let text = this.actor.name;
    console.debug(`Checking if <${this.actor.class_name}> <${this.actor.uuid}>'s activity <${this.actor.activity.name}> matches <${this.class_name}> <${this.uuid}>'s activity name <${this.activity_name}>.`);
    if (this.actor.activity.name == this.activity_name) {
      //text = text.bold();
     console.debug(`Returning header span contents <${text.bold()}> because <${this.actor.uuid}>'s activity <${this.actor.activity.name}> matches <${this.uuid}>'s activity name <${this.activity_name}>.`);
      return text.bold();
    };
    console.debug(`Returning header span contents <${text}>.`);
    return text;
  };

};
