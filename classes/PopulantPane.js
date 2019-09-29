// vim: set ft=javascript:


import { DomTooltipMixin } from '../mixins/DomTooltipMixin.js';
import Pane from '../classes/Pane.js';


export default class PopulantPane extends DomTooltipMixin(Pane) {
  constructor(actor) {
    console.debug('Instantiating a new PopulantPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    // Actor.
    this.actor = actor;
    console.debug(`<${this.uuid}> actor set to <${this.actor.uuid}>.`);

    // Header text.
    this.header_span_contents = this._header_span_contents;

  };
  
  tick() {
    console.debug(`Ticking <${this.class_name}> <${this.uuid}>.`);
    super.tick();
    this.element.classList.add('populant_pane');
    if (!this.actor.active) {
      console.debug(`Hiding <${this.class_name}> <${this.uuid}> because <${this.actor.class_name}> <${this.actor.uuid}> active state is <${this.actor.active}>.`);
      this.element.classList.add('dead_populant_pane');
    } else {
      this.element.classList.remove('dead_populant_pane');
    };
    this.tooltip.tick(this.tooltip_span_contents);
  };

  // Hide the getter so as not to interfere with sets.
  get _header_span_contents() {
    let text = `-${this.actor.name}-`;
    return text;
  };

  get tooltip_span_contents() {
    
    let text = '';
    text += `status: ${this.actor.status.health}<br>`;
    if (this.actor.status != 'dead') {
      text += `activity: ${this.actor.activity.name}<br>`;
      text += `health: ${this.actor.statistics.health.current}/${this.actor.statistics.health.maximum}<br>`;
      text += `energy: ${this.actor.statistics.energy.current}/${this.actor.statistics.energy.maximum}<br>`;
      text += `hunger: ${this.actor.statistics.hunger.current}/${this.actor.statistics.hunger.maximum}<br>`;
    };
    return text;
  };

};
