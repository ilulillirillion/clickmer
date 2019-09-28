import PopulantsPane from '../classes/PopulantsPane.js';
import ExpandablePopulantsPane from '../classesExpandablePopualntsPane.js';


export default class PopulationPopulantsPane extends PopulantsPane {
  constructor() {
    console.debug('Constructing a new PopulationPopulantsPane');
    super();
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

  };

  createPopulantPane(populant) {
    console.debug(`<${this.uuid}> creating populant pane for <${populant.uuid}>.`);
    let populant_pane = new ExpandablePopulantPane(populant);
    return popluant_pane;
  };

};
