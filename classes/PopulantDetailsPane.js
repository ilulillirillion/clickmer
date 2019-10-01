import Pane from '../classes/Pane.js';
import WrappedDiv from '../classes/WrappedDiv.js';
import DynamicWrappedTextSpan from '../classes/DynamicWrappedTextSpan.js';


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

    /*
    let details_div = document.createElement('div');
    this.element.appendChild(details_div);
    this.details_div = details_div;
    */
    let details_div = new WrappedDiv();
    details_div.element.classList.add('populant_details_div');
    this.element.appendChild(details_div.element);
    this.details_div = details_div;

  };

  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();
    this.element.classList.add('populant_details_pane');
    this.details_div.element.innerHTML = '';
    //for (const [skill_name, skill_details]  of Object.entries(this.populant.skills)) {
    for (let skill of this.populant.skills.all) {

      let text_span = new DynamicWrappedTextSpan();
      //let level = 0;
      let level = skill.level;
      let name = skill.name;
      //let experience = skill.experience;
      let experience = skill.experience;
      let level_up_experience = skill.experience_to_next_level;

      //let skill_text = 'skill_text<br>';
      let skill_text = `<p>${name}: ${level} (${experience}/${level_up_experience})</p><br>`;
      text_span.element.innerHTML = skill_text;
      text_span.element.classList.add('populant_details_span');
      this.details_div.element.appendChild(text_span.element);

      /*
      let text_span = new DynamicWrappedTextSpan();
      let level = skill_details['level'];
      //let progress = skill_details['progress'];
      let experience = skill_details['experience'];
      let level_up_experience = skill_details['level_up_experience'];
      //let skill_text = `<p>${skill_name}: ${level} (${experience})</p><br>`;
      let skill_text = `<p>${skill_name}: ${level} (${experience}/${level_up_experience})</p>`;
      console.debug(`Adding skill_text <${skill_text}> to <${this.uuid}>:<${this.populant.uuid}>'s details pane.`);
      text_span.element.innerHTML = skill_text;
      text_span.element.classList.add('populant_details_span');
      this.details_div.element.appendChild(text_span.element);
      //this.details_div.element.innerHTML += skill_text;
      */
    };
  };

};
