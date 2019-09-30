import Pane from '../classes/Pane.js';
import ActivityPopulantsPane from '../classes/ActivityPopulantsPane.js';


export default class ActivityPane extends Pane {
  constructor(name=null, population=[]) {
    console.debug('Instantiating a new ActivityPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    this.header_span_contents = name;

    this.name = name;

    let populants_pane = new ActivityPopulantsPane(this.name);
    this.element.appendChild(populants_pane.element);
    this.populants_pane = populants_pane; 

    let self = this;
    this.element.addEventListener('click', function(_event) {
      console.debug(`<${self.uuid}> clicked with event <${_event}>.`);
      let target_id = _event.target.getAttribute('id');
      let this_element_id = self.element.getAttribute('id');
      let this_header_element_id = self.header_text_span.element.getAttribute('id');
      let this_populants_pane_id = self.populants_pane.element.getAttribute('id');
      if (target_id != this_element_id && 
          target_id != this_header_element_id &&
          target_id != this_populants_pane_id) {
        console.debug(`<${self.uuid}> ignoring click because event target <${_event.target}> (<${this_element_id}>) does not seem to match element id <${this_element_id}>.`);
        return;
      };
      self.element.classList.toggle('expanded');
    });

      
      

  };

  tick({ 
      header_span_contents = this.header_span_contents, 
      population = [] } = { 
          header_span_contents: this.header_span_contents, 
          population: [] }) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with 'header_span_contents' <${header_span_contents}> (<${typeof(header_span_contents)}>) and 'population' <${population}> (<${typeof(population)}>) (array: <${Array.isArray(population)}>).`);
    super.tick();
    this.header_span_contents = header_span_contents;
    this.element.classList.add('activity_pane');
    this.populants_pane.tick({ population: population });
  };
};
