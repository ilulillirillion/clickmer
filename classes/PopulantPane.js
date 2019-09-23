// vim: set ft=javascript:

import Pane from '../classes/Pane.js';


export default class PopulantPane extends Pane {
  static default_args = { 'name': 'populant_pane' };
  constructor(args = PopulantPane.default_args) {
    super(args);

    console.debug(`Instantiating PopulantPane <${this.uuid}>.`);

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
