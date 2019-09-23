import Tab from '../classes/Tab.js';
import PopulantsPane from '../classes/PopulantsPane.js';


export default class PopulationTab extends Tab {
  constructor() {
    super('population');
    console.log('Creating population tab.');

    //this.header_text_span_contents = 'Population Tab';

    this.header_span_contents = 'Population Tab';

    // Populants Pane.
    this.populants_pane = new PopulantsPane();
    this.element.appendChild(this.populants_pane.element);
    console.debug(`<${this.uuid}> populants pane <${this.populants_pane}> created.`);
    //this.dom.population_tab_pane_populants_pane = this.populants_pane.dom.populants_pane;
    //this.dom.population_tab_pane.appendChild(this.dom.population_tab_pane_populants_pane);
    //this.dom.main_pane.appendChild(this.dom.population_tab_pane_populants_pane);

    //console.debug(`<${this.uuid}> populants pane set to <${this.dom.population_tab_pane_populants_pane}>.`);


    let self = this;
    let update_populants_pane_tick_listener = function() {
      self.populants_pane.tick();
    };
    this.tick_listeners.push(update_populants_pane_tick_listener);

  };

  /*
  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    //this.propogateTickToSuper();
    super.tick();
    this.populants_pane.tick();
  };
  */
};
