// vim: set ft=javascript:


import { DomTooltipMixin } from '../mixins/DomTooltipMixin.js';
import Pane from '../classes/Pane.js';


//export default class PopulantPane extends DomTooltipMixin(Pane) {
export default class PopulantPane extends DomTooltipMixin(Pane) {
//export default class PopulantPane extends DomTooltipMixin(Pane) {
  //static default_args = { 'name': 'populant_pane' };
  //constructor(args = PopulantPane.default_args) {
  constructor(actor) {
    console.debug('Instantiating a new PopulantPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    // Actor.
    this.actor = actor;
    console.debug(`<${this.uuid}> actor set to <${this.actor.uuid}>.`);

    // Header text.
    this.header_span_contents = this._header_span_contents;
    //this.header_span_contents = 'testtest';

    //this.tooltip_span_contents = 'testREMOVE';
    //this.tooltip_span_contents = 'Populant Test';
    //this.tooltip_span_contents = this._tooltip_span_contents;


    /*
    let self = this;
    let update_element_tick_listener = function() {
      self.element.classList.add('populant_pane');
    };
    this.tick_listeners.push(update_element_tick_listener);
    */

    /* Offloaded to Pane superclass
    this.dom = [
      'name': 'pane',
      'element': this.createPaneElement(),
      'children': [{ 
        'name': 
        'element': this.createPaneHeaderTextElement()
        'children': null
      }]
    ];
    */
  };
  
  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();
    this.element.classList.add('populant_pane');
    this.tooltip.tick(this.tooltip_span_contents);
  };

  // Hide the getter so as not to interfere with sets.
  get _header_span_contents() {
    let text = `-${this.actor.name}-`;
    return text;
  };

  get tooltip_span_contents() {
    //let text = `name: ${this.actor.name}`;
    //console.warn(this.actor);
    //console.warn(this.actor.statistics);
    /*
    let text = `
        activity: ${this.actor.activity.populant_pane_string}<br>
        health: ${this.actor.statistics.health.current}/${this.actor.statistics.health.max}<br>
        energy: ${this.actor.statistics.energy.current}/${this.actor.statistics.energy.max}<br>
        hunger: ${this.actor.statistics.hunger.current}/${this.actor.statistics.hunger.max}<br>`
    */
    
    let text = '';
    text += `status: ${this.actor.status.health}<br>`;
    if (this.actor.status != 'dead') {
      //text += `activity: ${this.actor.activity.populant_pane_string}<br>`;
      text += `activity: ${this.actor.activity}<br>`;
      text += `health: ${this.actor.statistics.health.current}/${this.actor.statistics.health.maximum}<br>`;
      text += `energy: ${this.actor.statistics.energy.current}/${this.actor.statistics.energy.maximum}<br>`;
      text += `hunger: ${this.actor.statistics.hunger.current}/${this.actor.statistics.hunger.maximum}<br>`;
    };
    return text;
    /*
    let text = `
        status: ${this.actor.status}<br>
        activity: ${this.actor.activity.populant_pane_string}<br>
        health: ${this.actor.statistics.health.current}/${this.actor.statistics.health.maximum}<br>
        energy: ${this.actor.statistics.energy.current}/${this.actor.statistics.energy.maximum}<br>
        hunger: ${this.actor.statistics.hunger.current}/${this.actor.statistics.hunger.maximum}<br>`
    return text;
    */
  };

  /*
  tick(overrides={}) {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick(overrides);
  };
  */
};
