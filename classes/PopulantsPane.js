import Pane from '../classes/Pane.js';
import PopulantPane from '../classes/PopulantPane.js';


export default class PopulantsPane extends Pane {
  constructor() {
    super(name = 'populants');
    console.debug(`Instantiating PopulantsPane <${this.uuid}>.`);
    
    // Header text.
    ///this.header_text = 'populants_pane';
    //console.debug(`<${this.uuid}> header text set to <${this.header_text}>.`);
    this.header_text_span_contents = 'populants pane'
    console.debug(`<${this.uuid}> header text span contents set to <${this.header_text_span_contents}>.`);

    //let test_populant_pane = new PopulantPane();
    //this.dom.main_pane.appendChild(test_populant_pane.dom.main_pane);
    //this.dom.main_pane.appendChild(test_populant_pane.dom.pane.element);
    //let main_pane = this.dom.find(element => element.name == 'pane');
    //main_pane.children.push(test_populant_pane.dom);
    //let test_populant_pane_element = this.dom.find(element => element.name == 'pane');
    //main_pane.element.appendChild(test_populant_pane_element);

  };

  tick() {
    console.debug(`Ticking <${this.uuid}>.`);
    //this.propogateTickToSuper();
    super.tick();
  };
};
      


/*
export default class PopulantsPane extends DomMixin(Thing) {
  constructor() {
    super();
    console.debug(`Creating PopulantsPane <${this.uuid}>.`);

    // Populants pane DOM element.
    this.dom.populants_pane = this.createPopulantsPaneElement();
    console.debug(`<${this.uuid}> populants pane set to <${this.dom.populants_pane}>.`);

    // Populants pane header text DOM element.
    this.dom.populants_pane_header_text = this.createPopulantsPaneHeaderTextElement();
    console.debug(`<${this.uuid}> populants pane header text set to <${this.dom.populants_pane_header_text}>.`);

  };

  createPopulantsPaneElement() {
    let populants_pane = document.createElement('div');
    let populants_pane_id = `${this.uuid}_populants_pane`;
    populants_pane.setAttribute('id', populants_pane_id);
    populants_pane.classList.add('populants_pane');
    return populants_pane;
  };

  createPopulantsPaneHeaderTextElement() {
    let header_text = document.createElement('span');
    let header_text_id = `${this.uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.classList.add('header_text');
    header_text.classList.add('populants_pane_header_text');
    header_text.innerHTML = this.header_text;
    return header_text;
};
*/
