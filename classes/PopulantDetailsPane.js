import Pane from '../classes/Pane.js';


export default class PopulantDetailsPane extends Pane {
  constructor(populant) {
    console.debug('Instantiating a new PopulantDetailsPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    // Populant assignment.
    this.populant = populant;
    console.debug(`<${this.uuid}> populant set to <${this.populant.uuid}>.`);

    // Header span contents.
    this.header_span_contents = '';

  };

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();
    this.element.classList.add('populant_details_pane');
    for (const [skill_name, skill_details]  of this.populant.skills) {
      let level = skill_details['level'];
      let progress = skill_details['progress'];
      let skill_text = `<p>{skill_name}: {level} ({progress})</p><br>`;
      console.debug(`Adding skill_text <${skill_text}> to <${this.uuid}>:<${this.populant.uuid}>'s details pane.`);
      this.element.innerHTML += skill_text;
    };
  };

};
