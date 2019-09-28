import TabNavigationButton from './TabNavigationButton.js';
import Pane from '../classes/Pane.js';


export default class NavigationPane extends Pane {
  constructor() {
    super();
    console.debug(`Creating navigation pane (uuid: <${this.uuid}>).`);

    this.header_text_span_contents = 'navigation pane';


    this.tab_navigation_buttons = [];

    let self = this;
    this.element.addEventListener('hide_tabs', function() {
      console.debug(`<${self.uuid}> responding to hide_tabs event.`);
    });


  };

  tick(game_data, tabs) {
    console.debug(`_ticking <${this.uuid}>.`);
    for (let tab of tabs) {
      console.debug(`Handling navigation button tick actions for <${tab.uuid}>.`);
      let navigation_button = tab.navigation_button;
      if (navigation_button == null) {
        console.debug(`Creating new tab navigation button for <${tab.uuid}>.`);
        navigation_button = new TabNavigationButton(tab);
        this.tab_navigation_buttons.push(navigation_button);
        this.element.appendChild(navigation_button.element);
      };
      navigation_button.tick(game_data);
    };
  };


  createTabButtonElement(tabs, tab) {
    console.debug(`Creating button for <${tab.name}>.`);
    let button = document.createElement('button');
    let button_id = `${tab.element_id}_button`;
    button.setAttribute('id', button_id);
    console.debug(`Set button id to <${button.getAttribute('id')}>.`);
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


};
