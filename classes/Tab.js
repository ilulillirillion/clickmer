//import { DomMixin } from '../mixins/DomMixin.js';
//import Thing from './Thing.js';
import Pane from '../classes/Pane.js';


// DomMixin provides element_id.
//export default class Tab extends DomMixin(Thing) {
export default class Tab extends Pane {
  constructor(name) {
    let super_name = `${name}_tab`;
    super({ 'name': super_name });
    console.debug(`Creating tab with name: <${name}>.`);

    // Name
    this.name = name;
    console.debug(`Set tab name to <${this.name}>.`);


    this.header_text = 'A tab.';
    console.debug(`<${this.uuid}> header text set to <${this.header_text}>.`);

    //let tab_pane_name = `${this.name}_tab_pane`;
    //console.debug(tab_pane_name);
    //this.dom[tab_pane_name].classList.add('tab');
    // Tabs are hidden by default.
    //this.dom[tab_pane_name].style.display = 'none';

    //this.dom.main_tab_pane = this.dom[tab_pane_name];
    
    this.dom.main_pane.style.display = 'none';

    // Element root
    //console.debug(`Element root set to <${this.element_root}>.`);

    //let element_root = this.createElementRoot();
    //let navigation_button_element = this.createNavigationButtonElement()

    //ui.tabs.append(this);

  
    //this.dom = {};
    //this.dom.tab = this.createTabPaneElement();  
    //this.dom.root = this.dom.tab;
    //this.dom.tab_pane = this.dom.tab;

    // Tab element.
    /*
    let tab_name = `${this.name}_tab`;
    this.dom[tab_name] = this.createTabElement(
        name = this.name, uuid = this.uuid);
    console.debug(`<${this.uuid}> <${tab_name}> set to <${this.dom[tab_name]}>.`);
    */

    // Tab header text element.
    /*
    let tab_pane_header_text_name = `${tab_pane_name}_header_text`;
    this.dom[tab_pane_header_text_name] = 
        this.createHeaderTextElement(
            name = this.name, text = this.header_text, uuid = this.uuid);
    this.dom[tab_pane_name].appendChild(this.dom.[tab_pane_header_text_name]);
    console.debug(`<${this.uuid}> <${tab_pane_header_text_name}> set to <${this.dom[tab_pane_header_text_name]}>`);
    */

    // Tab pane header text.
    //this.dom.header_text = this.createHeaderTextElement(this.header_text);
    //this.dom.tab_pane.appendChild(this.dom.header_text);

  };


  tick() {
    console.debug(`Ticking tab (<${this.uuid}>).`);
  };

  hide() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    //let tab_pane_name = `${this.name}_tab_pane`;
    //this.dom[tab_pane_name].style.display = 'none';
    this.dom.main_pane.style.display = 'none';
  };

  show() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    //let tab_pane_name = `${this.name}_tab_pane`;
    //this.dom[tab_pane_name].style.display = 'inline-block';
    this.dom.main_pane.style.display = 'inline-block';
  };

  createHeaderTextElement(
      name, 
      text = this.header_text,
      uuid = this.uuid) {
    console.debug(`Creating header text element for <${uuid}>.`);
    let header_text = document.createElement('text_span');
    let header_text_id = `${uuid}_{name}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.innerHTML = text;
    return header_text;
  };

  createTabPaneElement(name, uuid = this.uuid) {
    console.debug('Creating tab DOM element.');

    // Create the tab element itself.
    let tab_pane = document.createElement('div');
    //tab_element.setAttribute('id', this.element_id);
    let tab_pane_id = `${uuid}_${name}_tab_pane`;
    //tab_element.setAttribute('id', `${this.uuid}_tab_pane`);
    tab_pane.setAttribute('id', tab_pane_id);
    tab_pane.style.display = 'none';

    tab_pane.addEventListener('hide_tabs', function() {
      console.debug(`<${this.uuid}> responding to 'hide_tabs' event.`);
      tab_pane.style.display = 'none';
    });

    //document.body.append(tab_element);
    //console.debug(`Created tab element with id <${this.element_id}>.`);

    return tab_element;

  };

};
