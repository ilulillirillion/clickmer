import PopulantPane from '../classes/PopulantPane.js';
import PopulantDetailsPane from '../classes/PopulantDetailsPane.js';


export default class ExpandablePopulantsPane extends PopulantPane {
  constructor(actor) {
    console.debug(`Constructing a new ExpandablePopulantsPane with actor <${actor}>.`);
    super(actor);
    console.debug(`Constructing a <${this.class_name}> <${this.uuid}>.`);

    let self = this;
    this.element.addEventListener('click', function(_event) {
      console.debug(`<${self.uuid}> clicked with event <${_event}>.`);
      self.element.classList.toggle('expanded');
    });

    // Details pane assignment.
    let details_pane = new PopulantDetailsPane(this.actor);
    this.element.appendChild(details_pane.element);
    this.details_pane = details_pane;
    console.debug(`Set <${this.uuid}>'s details pane to <${this.details_pane.uuid}>.`);

  };

  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    super.tick();
    this.details_pane.tick();
  };
      
};
