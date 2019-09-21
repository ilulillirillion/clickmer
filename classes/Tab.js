import { DomMixin } from '../mixins/DomMixin.js';
import Thing from './Thing.js';

// DomMixin provides element_id.
export default class Tab extends DomMixin(Thing) {
  constructor(name) {
    super();
    console.debug(`Creating tab with name: <${name}>.`);

    // Name
    this.name = name;
    console.debug(`Set tab name to <${this.name}>.`);

    // Element root
    //console.debug(`Element root set to <${this.element_root}>.`);

    //let element_root = this.createElementRoot();
    //let navigation_button_element = this.createNavigationButtonElement()

    //ui.tabs.append(this);

  
    //this.dom = {};
    this.dom.tab = this.createTabPaneElement();  
    this.dom.root = this.dom.tab;
    this.dom.tab_pane = this.dom.tab;

    this.header_text = 'A tab.';
    this.dom.header_text = this.createHeaderTextElement(this.header_text);
    this.dom.tab_pane.appendChild(this.dom.header_text);

  };

  tick() {
    console.debug(`Ticking tab (<${this.uuid}>).`);
  };

  hide() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.dom.tab_pane.style.display = 'none';
  };

  show() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.dom.tab_pane.style.display = 'inline-block';
  };

  createHeaderTextElement(text) {
    console.debug(`Creating header text element for <${this.uuid}>.`);
    let header_text = document.createElement('text_span');
    let header_text_id = `${this.uuid}_header_text`;
    header_text.setAttribute('id', header_text_id);
    header_text.innerHTML = text;
    return header_text;
  };

  createTabPaneElement() {
    console.debug('Creating tab DOM element.');

    // Create the tab element itself.
    let tab_element = document.createElement('div');
    //tab_element.setAttribute('id', this.element_id);
    tab_element.setAttribute('id', `${this.uuid}_tab_pane`);
    tab_element.style.display = 'none';

    tab_element.addEventListener('hide_tabs', function() {
      console.debug(`<${this.uuid}> responding to 'hide_tabs' event.`);
      tab_element.style.display = 'none';
    });

    //document.body.append(tab_element);
    //console.debug(`Created tab element with id <${this.element_id}>.`);

    return tab_element;

  };

};
