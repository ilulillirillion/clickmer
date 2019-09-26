import Pane from '../classes/Pane.js';
import PopulantsPane from '../classes/PopulantsPane.js';


export default class ActivityPane extends Pane {
  constructor(name=null, population=[]) {
    console.debug('Instantiating a new ActivityPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    this.header_span_contents = name;

    let self = this;
    this.element.addEventListener('click', function() {
      //self.element.classList.toggle('activity_pane_expanded');
      self.element.classList.toggle('expanded');
    });

    let populants_pane = new PopulantsPane();
    this.element.appendChild(populants_pane.element);
    this.populants_pane = populants_pane; 
      
      

  };

  tick({ 
      header_span_contents = this.header_span_contents, 
      population = [] } = { 
          header_span_contents: this.header_span_contents, 
          population: [] }) {
    //population = [];
    console.debug(`Ticking <${this.class_name}> <${this.uuid}> with 'header_span_contents' <${header_span_contents}> (<${typeof(header_span_contents)}>) and 'population' <${population}> (<${typeof(population)}>) (array: <${Array.isArray(population)}>).`);
    super.tick();
    //this.header_span_contents = text;
    this.header_span_contents = header_span_contents;
    this.element.classList.add('activity_pane');
    this.populants_pane.tick(population);
    this.populants_pane.tick();
  };
};
