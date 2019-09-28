import Tab from '../classes/Tab.js';
import WrappedUnorderedList from '../classes/WrappedUnorderedList.js';


export default class DebugPane extends Tab {
  constructor() {
    console.debug('Constructing a new DebugPane.');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.name = 'Debug';

    this.header_span_contents = 'Debug:';

    this.population_count_span = null;

    this.debug_text_list = new WrappedUnorderedList();


    this.debug_text_list_contents = null;

  };

  tick(game_data) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();

    if (this.debug_text_list.element.parentNode != this.element) {
      this.element.appendChild(this.debug_text_list.element);
    };

    this.debug_text_list_contents = [
      `Population count: <${game_data.population.length}>`
    ];
    this.debug_text_list.tick(this.debug_text_list_contents);

    this.element.classList.add('debug_pane');

  };

};
