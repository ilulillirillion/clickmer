//import Pane from '../classes/DebugPane.js'
import Tab from '../classes/Tab.js';
import WrappedUnorderedList from '../classes/WrappedUnorderedList.js';


export default class DebugPane extends Tab {
  constructor() {
    console.debug('Constructing a new DebugPane.');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    //this.name = 'testname1';
    this.name = 'Debug';

    this.header_span_contents = 'Debug:';

    this.population_count_span = null;

    this.debug_text_list = new WrappedUnorderedList();

    //this.debug_text_list_contents = [
    //  `Population count: <${game_data.population.length}>`
    //];

    this.debug_text_list_contents = null;

  };

  tick(game_data) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    //super.tick(this);
    super.tick();

    //if (this.debug_text_list.parentNode === 'undefined' || this.debug_text_list.parentNode != this.element) {
    if (this.debug_text_list.element.parentNode != this.element) {
      this.element.appendChild(this.debug_text_list.element);
    };

    this.debug_text_list_contents = [
      `Population count: <${game_data.population.length}>`
    ];
    //this.debug_text_list.tick(this);
    this.debug_text_list.tick(this.debug_text_list_contents);

    this.element.classList.add('debug_pane');

    /*
    if (this.population_count_span == null) {
      let population_count_span = document.createElement('span');
      //this.element.appendChild(population_count_span);
      this.population_count_span = population_count_span;
    };
    let population_count = `Population count: <${game_data.population.length}>`;
    this.population_count_span.innerHTML = population_count;
    */

  };

};
