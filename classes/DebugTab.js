import Tab from '../classes/Tab.js';
//import WrappedDiv from '../classes/WrappedDiv.js';
import WrappedButton from '../classes/WrappedButton.js';
import DebugButtonsDiv from '../classes/DebugButtonsDiv.js';
import WrappedUnorderedList from '../classes/WrappedUnorderedList.js';


export default class DebugPane extends Tab {

  //static reap_debug_populant_event = new Event('reap_debug_populant', { bubbles: true });
  static spawn_populant_event = new Event('spawn_populant', { bubbles: true });

  constructor() {
    console.debug('Constructing a new DebugPane.');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    this.name = 'Debug';

    this.header_span_contents = 'Debug:';

    // This is filled when a populant is spawned, so that the UI can grab it.
    //this.populant_to_be_reaped;

    this.population_count_span = null;

    //this.debug_buttons_div = new DebugButtonsDiv();
    let debug_buttons = [];
    let spawn_populant_button = new WrappedButton('Spawn Populant');
    //spawn_populant_button.text = 'Spawn Populant';
    let self = this;
    spawn_populant_button.element.addEventListener('click', function() {
      console.debug(`<${self.uuid}> spawn populant button clicked.`);
      //this.populant_to_be_reaped = new Human();
      //this.element.dispatchEvent(DebugPane.reap_debug_populant_event);
      self.element.dispatchEvent(DebugPane.spawn_populant_event);
    });
    debug_buttons.push(spawn_populant_button);
    let debug_buttons_div = new DebugButtonsDiv(debug_buttons);
    this.element.appendChild(debug_buttons_div.element);
    this.debug_buttons_div = debug_buttons_div;

    this.debug_text_list = new WrappedUnorderedList();

    this.debug_text_list_contents = null;

  };

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();

    this.debug_buttons_div.tick();    

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
