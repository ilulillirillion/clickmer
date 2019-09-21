import { DomMixin } from './dom_mixin.js';
import Thing from './thing.js';

// DomMixin provides element_id.
export default class Tab extends DomMixin(Thing) {
  constructor(name) {
    super();
    console.debug(`Creating tab with name: <${name}>.`);

    // Name
    this.name = name;
    console.debug(`Set tab name to <${this.name}>.`);

    // Element root
    console.debug(`Element root set to <${this.element_root}>.`);

    //let element_root = this.createElementRoot();
    //let navigation_button_element = this.createNavigationButtonElement()

    //ui.tabs.append(this);
  };

  tick() {
    console.debug(`Ticking tab (<${this.uuid}>).`);
  };

  hide() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.element_root.style.display = 'none';
  };

  show() {
    console.debug(`Showing tab (<${this.uuid}>).`);
    this.element_root.style.display = 'inline-block';
  };

  createElementRoot() {
    console.debug('Creating tab DOM element.');

    // Create the tab element itself.
    let tab_element = document.createElement('div');
    tab_element.setAttribute('id', this.element_id);
    document.body.append(tab_element);
    console.debug(`Created tab element with id <${this.element_id}>.`);

    return tab_element;

  };

};
