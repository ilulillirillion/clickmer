import WrappedButton from '../classes/WrappedButton.js';
import capitalizeString from '../functions/capitalizeString.js';


export default class TabNavigationButton extends WrappedButton {
  static hide_tabs_event = new Event('hide_tabs', { bubbles: true });
  constructor(tab) {
    super();
    console.debug(`Creating tab navigation button <${this.uuid}> for tab: <${tab.uuid}>.`);

    tab.navigation_button = this;
    console.debug(`<${tab.uuid}> navigation button set to <${this.uuid}>.`);

    this.tab = tab;
    console.debug(`<${this.uuid}> tab set to <${this.tab.uuid}>.`);

    let self = this;
    this.element.addEventListener('click', function() {
      console.debug(`<${self.uuid}> clicked.`);
      self.element.dispatchEvent(TabNavigationButton.hide_tabs_event);
      self.tab.show();
    });

  };

  tick() {
    let button_text = `${capitalizeString(this.tab.name)} view`;
    this.element.innerHTML = button_text;
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
