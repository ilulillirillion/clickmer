// vim: set ft=javascript:

import Pane from '../classes/Pane.js';


export default class PopulantPane extends Pane {
  //static default_args = { 'name': 'populant_pane' };
  //constructor(args = PopulantPane.default_args) {
  constructor(actor) {
    console.debug('Instantiating a new PopulantPane.');
    super();
    console.debug(`Instantiating <${this.class_name}> <${this.uuid}>.`);

    // Header text.
    this.header_text_span_contents = 'populant pane';

    // Actor.
    this.actor = actor;
    console.debug(`<${this.uuid}> actor set to <${this.actor.uuid}>.`);

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
};
