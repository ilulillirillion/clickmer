import PopulantPane from '../classes/PopulantPane.js';


export default class ExpandablePopulantsPane extends PopulantPane {
  constructor(actor) {
    console.debug(`Constructing a new ExpandablePopulantsPane with actor <${actor}>.`);
    super(actor);
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

  };
};
