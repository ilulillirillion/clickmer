import PopulantPane from '../classes/PopulantPane.js';


export default class ActivityPopulantPane extends PopulantPane {
  constructor(actor, activity_name) {
    console.debug(`Constructing a new PopulantPane with actor <${actor}> and activity_name <${activity_name}>.`);
    super(actor);
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.activity_name = activity_name;
    this.header_span_contents = this._header_span_contents;

  };

  get _header_span_contents() {
    let text = this.actor.name;
    if (this.actor.activity == this.activity_name) {
      text = text.bold();
    };
    return text;
  };

};
