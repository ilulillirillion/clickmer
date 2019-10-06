import Pane from '../classes/Pane.js';
import PopulantPane from '../classes/PopulantPane.js';
import Actor from '../classes/Actor.js';


export default class PopulantsPane extends Pane {
  constructor() {
    super(name = 'populants');
    console.debug(`Instantiating PopulantsPane <${this.uuid}>.`);
    
    // Header text.
    this.header_span_contents = 'populants pane';
    console.debug(`<${this.uuid}> header text span contents set to <${this.header_text_span_contents}>.`);

    this.element.classList.add('populants_pane');

    // Tooltip text
    this.tooltip_text_contents = 'populants pane tooltip'
    console.debug(`<${this.uuid}> tooltip text contents set to <${this.tooltip_text_contents}>.`);


    this.populant_panes = [];

  };

  //tick({ population = [] } = { population: [] }) {
  tick() {
    let population = game_data.population;
    //population = [];
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with population <${population}> (variable type: <${typeof(population)}>) (array: <${Array.isArray(population)}>).`);
    for (let populant of population) {
      let populant_pane = this.populant_panes.find(pane => pane.actor.uuid == populant.uuid);
      if (populant_pane === 'undefined' || populant_pane == null) {
        populant_pane = this.createPopulantPane(populant);
        this.populant_panes.push(populant_pane);
        this.element.appendChild(populant_pane.element);
      };
      populant_pane.tick()
    };
  };

  createPopulantPane(populant) {
    console.debug(`<${this.uuid}> creating populant pane for <${populant.uuid}>.`);
    let populant_pane = new PopulantPane(populant);
    return populant_pane;
  };

};
