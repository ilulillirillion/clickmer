import PopulantsPane from '../classes/PopulantsPane.js';
import ActivityPopulantPane from '../classes/ActivityPopulantPane.js';


export default class ActivityPopulantsPane extends PopulantsPane {
  constructor(activity) {
    console.debug(`Constructing a new ActivityPopulantsPane with activity <${activity}>.`);
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.header_span_contents = 'activity populants pane';
    this.tooltip_text_contents = 'activity populants pane tooltip';

    this.populant_panes = [];

    this.activity = activity

  };

  createPopulantPane(populant) {
    console.debug(`<${this.uuid}> creating populant pane for <${populant.uuid}>.`);
    let populant_pane = new ActivityPopulantPane(populant, this.activity);
    return populant_pane;
  };

};
