import PopulantsPane from '../classes/PopulantsPane.js';
import ExpandablePopulantPane from '../classes/ExpandablePopulantPane.js';


export default class PopulationPopulantsPane extends PopulantsPane {
  constructor() {
    console.debug('Constructing a new PopulationPopulantsPane');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

  };

  createPopulantPane(populant) {
    console.debug(`<${this.uuid}> creating populant pane for <${populant.uuid}>.`);
    let populant_pane = new ExpandablePopulantPane(populant);
    return populant_pane;
  };

};
