import { DomMixin } from '../mixins/DomMixin.js';
import Thing from './Thing.js';
import capitalizeString from '../functions/capitalizeString.js'


export default class TabNavigationButton extends DomMixin(Thing) {
  constructor(tab) {
    super();
    console.debug(`Creating tab navigation button <${this.uuid}> for tab: <${tab.uuid}>.`);

    //this.tab.uuid = tab.uuid;
    //console.debug(`<${this.uuid}> tab uuid set to <${this.tab.uuid}>.`);

    //this.tab.name = tab.name;
    //console.debug(`<${this.uuid} tab name set to <${this.tab.name}>.`);

    tab.navigation_button = this;
    console.debug(`<${tab.uuid}> navigation button set to <${this.uuid}>.`);

    this.tab = tab;
    console.debug(`<${this.uuid}> tab set to <${this.tab.uuid}>.`);

    this.dom = {};
    console.debug(`Created <${this.uuid}> dom: <${this.dom}>.`);

    this.dom.button = this.createTabNavigationButtonElement();
    console.debug(`Create dom button: <${this.dom.button}>.`);

  };

  //tick(tab={ 'uuid': this.tab_uuid, 'name': this.tab_name }) {
  tick(tab=this.tab) {

    // Defend against tab drift.
    this.tab = tab;

    let button_text = `${capitalizeString(this.tab.name)} view`;
    this.dom.button.innerHTML = button_text;
  };
    

  createTabNavigationButtonElement() {
    console.debug(`Creating element for <${this.uuid}>.`);
    let button = document.createElement('button');
    let button_id = this.uuid;
    button.setAttribute('id', button_id);
    let hide_tabs_event = new Event('hide_tabs', { bubbles: true });
    let self = this;
    button.addEventListener('click', function() {
      console.info(`<${self.uuid}> clicked.`);
      console.debug(`Handling <${self.uuid}> click for <${self.tab.uuid}>.`);
      button.dispatchEvent(hide_tabs_event);
      self.tab.show();
    });
    return button;
  };
};
