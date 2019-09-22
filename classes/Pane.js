import { DomMixin } from '../mixins/DomMixin.js'
import Thing from '../classes/Thing.js'


export default class Pane extends DomMixin(Thing) {
  constructor(name='') {
    super();
    console.debug(`Instantiating <${name}> Pane <${this.uuid}>.`);

    this.header_text = '';

    // Pane element.
    let pane_name = `${name}_pane`;
    this.dom[pane_name] = this.createPaneElement(name);
    // Main pane alias.
    this.dom.main_pane = this.dom[pane_name];
    console.debug(`<${this.uuid}> <${pane_name}> set to <${this.dom[pane_name]}>.`); 

    // Pane header text element.
    let header_text_name = `${pane_name}_header_text`;
    this.dom[header_text_name] = this.createPaneHeaderTextElement(name, this.header_text, this.uuid);
    this.dom[pane_name].appendChild(this.dom[header_text_name]);
    // Main pane text header alias.
    this.dom.main_pane_header_text = this.dom[header_text_name];
    console.debug(`<${this.uuid}> <${header_text_name}> set to <${this.dom[header_text_name]}>.`);

    

  };

  createPaneElement(name, uuid = this.uuid) {    
    let pane = document.createElement('div');
    let pane_id = `${uuid}_${name}_pane`;
    pane.setAttribute('id', pane_id);
    pane.classList.add('pane');
    pane.classList.add(`${name}_pane`);
    return pane;
  };

  createPaneHeaderTextElement(
      name, uuid = this.uuid, text = this.header_text) {
    let header_text = document.createElement('span');
    let header_text_id = `${uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.classList.add('header_text');
    header_text.classList.add(`${name}_pane_header_text`);
    header_text.innerHTML = text;
    return header_text;
  };

};
