import Tab from '../classes/Tab.js';
import PopulationPopulantsPane from '../classes/PopulationPopulantsPane.js';


export default class PopulationTab extends Tab {
  constructor() {
    super('population');
    console.log('Creating population tab.');

    this.header_span_contents = 'Population Tab';

    // Populants Pane.
    this.populants_pane = new PopulationPopulantsPane();
    this.element.appendChild(this.populants_pane.element);
    console.debug(`<${this.uuid}> populants pane <${this.populants_pane}> created.`);

  };

  tick(game_data) {
    super.tick();
    this.populants_pane.tick({ population: game_data.population });
  };

};
