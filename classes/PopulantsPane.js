import Pane from '../classes/Pane.js';
import PopulantPane from '../classes/PopulantPane.js';
import Actor from '../classes/Actor.js';


export default class PopulantsPane extends Pane {
  constructor() {
    super(name = 'populants');
    console.debug(`Instantiating PopulantsPane <${this.uuid}>.`);
    
    // Header text.
    ///this.header_text = 'populants_pane';
    //console.debug(`<${this.uuid}> header text set to <${this.header_text}>.`);
    this.header_text_span_contents = 'populants pane'
    console.debug(`<${this.uuid}> header text span contents set to <${this.header_text_span_contents}>.`);

    // Tooltip text
    this.tooltip_text_contents = 'populants pane tooltip'
    console.debug(`<${this.uuid}> tooltip text contents set to <${this.tooltip_text_contents}>.`);

    //let test_populant_pane = new PopulantPane();
    //this.dom.main_pane.appendChild(test_populant_pane.dom.main_pane);
    //this.dom.main_pane.appendChild(test_populant_pane.dom.pane.element);
    //let main_pane = this.dom.find(element => element.name == 'pane');
    //main_pane.children.push(test_populant_pane.dom);
    //let test_populant_pane_element = this.dom.find(element => element.name == 'pane');
    //main_pane.element.appendChild(test_populant_pane_element);

    this.populant_panes = [];
    let test_actor = new Actor();
    this.test_actor = test_actor;
    let populant_pane = new PopulantPane(test_actor);
    this.populant_panes.push(populant_pane);
    this.element.appendChild(populant_pane.element);

    let self = this;
    let update_populant_panes_tick_listener = function() {
      for (let populant_pane of self.populant_panes) {
        populant_pane.tick();
      };
    };
    this.tick_listeners.push(update_populant_panes_tick_listener);

  };

  /*
  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    //this.propogateTickToSuper();
    super.tick();
    for (let populant_pane of this.populant_panes) {
      console.debug(`<${this.uuid}> propogating tick to <${populant_pane.uuid}>.`);
      populant_pane.tick();
    };
  };
  */
};
      


/*
export default class PopulantsPane extends DomMixin(Thing) {
  constructor() {
    super();
    console.debug(`Creating PopulantsPane <${this.uuid}>.`);

    // Populants pane DOM element.
    this.dom.populants_pane = this.createPopulantsPaneElement();
    console.debug(`<${this.uuid}> populants pane set to <${this.dom.populants_pane}>.`);

    // Populants pane header text DOM element.
    this.dom.populants_pane_header_text = this.createPopulantsPaneHeaderTextElement();
    console.debug(`<${this.uuid}> populants pane header text set to <${this.dom.populants_pane_header_text}>.`);

  };

  createPopulantsPaneElement() {
    let populants_pane = document.createElement('div');
    let populants_pane_id = `${this.uuid}_populants_pane`;
    populants_pane.setAttribute('id', populants_pane_id);
    populants_pane.classList.add('populants_pane');
    return populants_pane;
  };

  createPopulantsPaneHeaderTextElement() {
    let header_text = document.createElement('span');
    let header_text_id = `${this.uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.classList.add('header_text');
    header_text.classList.add('populants_pane_header_text');
    header_text.innerHTML = this.header_text;
    return header_text;
};
*/
