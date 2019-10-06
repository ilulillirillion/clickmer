import Tab from '../classes/Tab.js';
import ActivityPane from '../classes/ActivityPane.js';


export default class ColonyTab extends Tab {
  constructor() {
    super(name = 'colony');
    console.debug('Creating colony tab.');

    this.header_span_contents = 'Colony Tab';

    this.activity_panes = {};
  };

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();

    let available_activities = {};
    for (let populant of game_data.population) {
      for (let activity of populant.doable_activities) {
        //available_activities.push(activity);
        if (!(activity.name in available_activities)) {
          console.debug(`Adding <${activity.name}> to available activities <${available_activities}>.`);
          available_activities[activity.name] = { 
            'activity': activity, 'doers': [ populant ] 
          };
        } else {
          available_activities[activity.name].doers.push(populant);
        };
      };
    };
    for (let [activity_name, data] of Object.entries(available_activities)) {
      console.debug(`Handling activity pane for <${activity_name}> with data <${data}>.`);
      let doers = data.doers;
      let activity_pane = this.activity_panes[activity_name];
      if (activity_pane === 'undefined' || activity_pane == null) {
        activity_pane = new ActivityPane(activity_name);
        this.element.appendChild(activity_pane.element);
        this.activity_panes[activity_name] = activity_pane;
      };
    activity_pane.tick({ population: doers });
    };

    /*
    for (let activity_n of available_activities) {
      let activity_pane = this.activity_panes[activity.name];
      if (activity_pane === 'undefined' || activity_pane == null) {
        activity_pane = new ActivityPane(activity);
        this.element.appendChild(activity_pane.element);
        this.activity_panes[activity.name] = activity_pane;
      };
      activity_pane.tick({ population: avaia });
    };
    */

  };

};
