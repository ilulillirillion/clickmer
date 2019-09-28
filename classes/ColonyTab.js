import Tab from '../classes/Tab.js';
import ActivityPane from '../classes/ActivityPane.js';


export default class ColonyTab extends Tab {
  constructor() {
    super(name = 'colony');
    console.debug('Creating colony tab.');

    this.header_span_contents = 'Colony Tab';

    this.activity_panes = {};
  };

  tick(game_data) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();

    let available_activities = [];
    for (let populant of game_data.population) {
      for (let activity of populant.doable_activities) {
        available_activities.push(activity);
      };
    };
    for (let activity of available_activities) {
      let activity_pane = this.activity_panes[activity];
      if (activity_pane === 'undefined' || activity_pane == null) {
        activity_pane = new ActivityPane(activity);
        this.element.appendChild(activity_pane.element);
        this.activity_panes[activity] = activity_pane;
      };
      activity_pane.tick({ population: game_data.population });
    };

  };

};
