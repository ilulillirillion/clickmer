import Thing from './Thing.js';
//import { DomMixin } from '../mixins/DomMixin.js';


//export default class Activity extends DomMixin(Thing) {
export default class Activity extends Thing {

  constructor() {
    super();
    console.debug(`Creating new activity <${this.uuid}>.`);

    this.name = 'activity';
    this.populant_pane_string = 'doing something';

    //this.dom = {};

    /*
    this.dom.activity_pane = this.createActivityPaneElement();

    this.dom.activity_pane_text_span = this.createActivityPaneTextSpanElement();
    this.dom.activity_pane.appendChild(this.dom.activity_pane_text_span);

    this.dom.activity_pane_tooltip_text_span = this.createActivityPaneTooltipTextSpanElement();
    this.dom.activity_pane.appendChild(this.dom.activity_pane_tooltip_text_span);

    this.dom.activity_pane_population_pane = this.createActivityPanePopulationPaneElement();
    this.dom.activity_pane.appendChild(this.dom.activity_pane_population_pane);
    */

  };

  createActivityPaneElement() {
    console.debug(`Creating <${this.uuid}> DOM element.`);
    
    // Activity Pane
    let activity_pane = document.createElement('div');
    //let activity_pane_id = this.element_id;
    let activity_pane_id = `${this.uuid}_activity_pane`;
    activity_pane.setAttribute('id', activity_pane_id);
    console.debug(`Set <${this.uuid}> activity pane id to <${activity_pane.getAttribute('id')}>.`);
    activity_pane.classList.add('activity_pane');
    activity_pane.classList.add('has_tooltip');

    activity_pane.addEventListener('click', function(e) {
      console.debug(`<${this.uuid}> clicked.`);
    });

    return activity_pane;

  };

  createActivityPaneTextSpanElement() {
    console.debug(`Creating <${this.uuid}> activity pane text span.`);
    let text_span = document.createElement('span');
    let text_span_id = `${this.uuid}_activity_pane_text_span`;
    text_span.setAttribute('id', text_span_id);
    text_span.classList.add('activity_pane_text_span');
    text_span.innerHTML = this.name;
    console.debug(`Created activity pane text span with element id <${text_span.getAttribute('id')}>.`);
    return text_span;
  };

  createActivityPaneTooltipTextSpanElement() {
    console.debug(`Creating <${this.uuid}> activity pane tooltip text span.`);
    let tooltip_text_span = document.createElement('span');
    let tooltip_text_span_id = `${this.uuid}_activity_pane_tooltip_text_span`;
    tooltip_text_span.setAttribute('id', tooltip_text_span_id);
    tooltip_text_span.classList.add('tooltip_text');
    tooltip_text_span.innerHTML = this.tooltip_text_string;
    return tooltip_text_span;
  };

  createActivityPanePopulationPaneElement() {
    console.debug(`Creating <${this.uuid}> activity pane population pane.`);
    let population_pane = document.createElement('div');
    let population_pane_id = `${this.uuid}_activity_pane_population_pane`;
    population_pane.setAttribute('id', population_pane_id);
    population_pane.classList.add('activity_pane_population_pain');
    console.debug(`Created <${this.uuid}> activity pane population pane with element id <${population_pane.getAttribute('id')}>.`);
    return population_pane;
  };

};
