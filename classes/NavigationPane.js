//import { DomMixin } from '../mixins/DomMixin.js';
//import Thing from './Thing.js';
//import capitalizeString from '../functions/capitalizeString.js'
import TabNavigationButton from './TabNavigationButton.js';
import Pane from '../classes/Pane.js';


//export default class NavigationPane extends DomMixin(Thing) {
export default class NavigationPane extends Pane {
  constructor() {
    super();
    console.debug(`Creating navigation pane (uuid: <${this.uuid}>).`);

    this.header_text_span_contents = 'navigation pane';

    //this.element_root = this.createElementRoot();
    //console.debug(`<${this.uuid}> element root is <${this.element_root}>.`);
    //document.body.append(this.element_root);
    //runtime_data.ui.panes.append(this);
    //this.dom = {};
    //this.dom.navigation_pane = this.createNavigationPaneElement();
    //console.debug(`<${this.uuid}> dom.navigation_pane: <${this.dom.navigation_pane}>.`);
    //this.dom.navigation_pane_buttons = [];
    //console.debug(`<${this.uuid}> dom.navigation_pane_buttons: <${this.dom.navigation_pane_buttons}>.`);
    //console.debug(`<${this.uuid}> dom: <${this.dom}>.`);

    this.tab_navigation_buttons = [];

    let self = this;
    //console.warn(this.element);
    this.element.addEventListener('hide_tabs', function() {
      console.debug(`<${self.uuid}> responding to hide_tabs event.`);
      //for (let button of this.navigation_pane_buttons) {
    });


    let update_tab_navigation_buttons_tick_listener = function() {
      console.warn(self);
      for (let tab of self.tabs) {
        let navigation_button = tab.navigation_button;
        if (navigation_button == null) {
          console.debug(`Creating new tab navigation button for <${tab.uuid}>.`);
          navigation_button = new TabNavigationButton(tab);
          self.tab_navigation_buttons.push(navigation_button);
          self.element.appendChild(navigation_button.element);
        };
        navigation_button.tick();
      };
    };
    this.tick_listeners.push(update_tab_navigation_buttons_tick_listener);


  };

  //tick(master=null, tabs) {
  //  console.debug(`Ticking navigation pane (uuid: <${this.uuid}>).`);
    //this.propogateTickToSuper(master);
  //  super.tick();
    //for (let i=0; i < runtime_data.ui.tabs.length; i++) {
    //  let tab = runtime_data.data.ui.tabs[i];
  //  for (let tab of tabs) {

      //let navigation_button = 
      //    this.dom.navigation_pane_buttons.find(button => button.tab.uuid == tab.uuid);



      //console.warn('Re-add navigation button generation!');
      /*
      let navigation_button = tab.navigation_button;
      if (navigation_button == null) {
        console.debug(`Creating new tab navigation button for <${tab.uuid}>.`);
        navigation_button = new TabNavigationButton(tab);
        this.dom.navigation_pane_buttons.push(navigation_button);
        this.dom.navigation_pane.appendChild(navigation_button.dom.button);
      };
      //let navigation_button_text = `${capitalizeString(tab.name)} view`;
      //navigation_button.innerHTML = navigation_button_text;
      navigation_button.tick();
      */

      /*
      let navigation_button = tab.navigation_button;
      if (navigation_button == null) {
        console.debug(`Creating new tab navigation button for <${tab.uuid}>.`);
        navigation_button = new TabNavigationButton(tab);
        this.tab_navigation_buttons.push(navigation_button);
        this.element.appendChild(navigation_button.element);
      };
      navigation_button.tick();
      */


      
      //let button_query = `#${tab.element_id}_button`;
      //console.debug(
      //    `Looking for button in <${this.element_root}> with query <${button_query}>.`);
      //let button = this.element_root.querySelector(button_query);
      //if (button == null) {
      //  button = this.createTabButtonElement(tabs, tab);
      //  this.element_root.appendChild(button);
      //};
      //button.innerHTML = `${capitalizeString(tab.name)} view`;
    //};
  //};

  createTabButtonElement(tabs, tab) {
    console.debug(`Creating button for <${tab.name}>.`);
    let button = document.createElement('button');
    let button_id = `${tab.element_id}_button`;
    button.setAttribute('id', button_id);
    console.debug(`Set button id to <${button.getAttribute('id')}>.`);
    //button.innerHTML = `${capitalizeString(tab.name)} view`;
    button.addEventListener('click', function() {
      console.debug(`Triggered <${tab.name}> button on <${tab.uuid}>.`);
      for (let _tab of tabs) {
        console.debug(`Checking whether to show or hide <${_tab.uuid}>.`);
        if (_tab.uuid == tab.uuid) {
          console.debug(`Going to show <${_tab.uuid}>.`);
          _tab.show();
        } else {
          console.debug(`Going to hide <${_tab.uuid}>.`);
          _tab.hide();
        }
      }
    });
    return button;
  };

  /*
  //createElementRoot() {
  createNavigationPaneElement() {
    console.debug('Creating navigation pane DOM element.');

    // Navigation Pane
    let navigation_pane = document.createElement('div');
    navigation_pane.setAttribute('id', `${this.uuid}_navigation_pane`);

    let self = this;
    navigation_pane.addEventListener('hide_tabs', function() {
      console.debug(`<${self.uuid}> responding to hide_tabs event.`);
      //for (let button of this.navigation_pane_buttons) {
    });
        

    //document.body.append(navigation_pane);
    console.debug(`Created navigation pane element with id <${this.element_id}>.`);
    return navigation_pane;

  };
  */

};
