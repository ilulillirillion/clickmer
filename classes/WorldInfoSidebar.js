import Sidebar from '../classes/Sidebar.js';
import DynamicWrappedTextSpan from '../classes/DynamicWrappedTextSpan.js';


export default class WorldInfoSidebar extends Sidebar {
  constructor(world) {
    super();

    this.world = world;

    /*
    this.info_spans = [];
    let info_strings = [
      'test',
      `Time: ${this.world.time}`
    ];
    for (let info_string of info_strings) {
      let span_contents = `${info_string}<br>`;
      let info_span = new DynamicWrappedTextSpan({span_contents: span_contents});
      this.element.append(info_span.element);
      this.info_spans.push(info_span);
    };
    */

    let time_span = new DynamicWrappedTextSpan();
    this.element.append(time_span.element);
    this.time_span = time_span;

  };

  tick() {
    super.tick();
    /*
    for (let info_span of this.info_spans) {
      info_span.tick();
    };
    */

    //this.time_span.tick();
    //this.time_span.tick('testtest');
    //this.time_span.tick(`Time: ${this.world.calendar.time}`);
    //console.warn(this.world.calendar);
    //this.time_span.tick(`Time: ${this.world.calendar.minutes}`);
    //this.time_span.tick(`Time: ${this.world.calendar.minutes} minutes`);
    //this.time_span.tick(`Time: ${this.world.calendar.weeks} - ${this.world.calendar.days} - ${this.world.calendar.hours} hours - ${this.world.calendar.minutes} minutes`);
    this.time_span.tick(`Time: ${this.world.calendar.time}`);
    
  };
};
