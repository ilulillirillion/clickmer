import Tab from '../classes/Tab.js';
import PopulantsPane from '../classes/PopulantsPane.js';


export default class PopulationTab extends Tab {
  constructor() {
    super('population');
    console.log('Creating population tab.');

    // Populants Pane.
    this.populants_pane = new PopulantsPane();
    this.dom.population_tab_pane_populants_pane = this.populants_pane.dom.populants_pane;
    this.dom.population_tab_pane.appendChild(this.dom.population_tab_pane_populants_pane);
    console.debug(`<${this.uuid}> populants pane set to <${this.dom.population_tab_pane_populants_pane}>.`);

  };
};
