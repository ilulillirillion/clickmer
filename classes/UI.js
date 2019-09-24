//import { DomMixin } from '../mixins/DomMixin.js';
//import Thing from './Thing.js';
import Pane from '../classes/Pane.js';
import NavigationPane from './NavigationPane.js';
import ColonyTab from './ColonyTab.js';
import PopulationTab from './PopulationTab.js';
import ResearchTab from './ResearchTab.js';

//export default class UI extends DomMixin(Thing) {
export default class UI extends Pane {
  constructor() {
    super();
    console.debug(`Instantiating a new UI with uuid: <${this.uuid}>.`);

    this.header_text_span_contents = 'Clickmer'

    //this.dom = {};
    //this.dom.root_pane = this.createRootPane();

    //TODO: replace these with 'this.attribute =' syntax for readability
    //this.buildTabs();
    this.buildNavigationPane();

    this.tabs = this.createTabs();
    for (let tab of this.tabs) {
      //this.dom.root_pane.appendChild(tab.dom.main_tab_pane);
      //this.dom.root_pane.appendChild(tab.dom.main_pane);
      this.element.appendChild(tab.element);
    };

    //this.tabs = this.createTabs();
    //this.navigation_pane = new NavigationPane();

    // Create a root event listener for tab handling
    let self = this;
    document.addEventListener('hide_tabs', function() {
      console.debug(`<${self.uuid}> responding to hide_tabs event.`);
      for (let tab of self.tabs) {
        //tab.dom.tab_pane.style.display = 'none';
        tab.hide();
      };
    });

    //document.body.append(this.dom.root_pane);
    document.body.append(this.element);

    /*
    let update_navigation_pane_tick_listener = function() {
      self.navigation_pane.tabs = self.tabs;
      self.navigation_pane.tick(self.tabs);
    };
    this.tick_listeners.push(update_navigation_pane_tick_listener);
    
    let update_tabs_tick_listener = function() {
      for (let tab of self.tabs) {
        tab.tick(game_data);
      };
    };
    this.tick_listeners.push(update_tabs_tick_listener);
    */

  };

  tick(game_data) {
    console.debug(`Ticking <${this.uuid}>.`);
    this.navigation_pane.tabs = this.tabs;
    this.navigation_pane.tick(game_data, this.tabs);
    for (let tab of this.tabs) {
      tab.tick(game_data)
    };
  }; 

  /*
  // Propogates tick downward to UI children.
  tick(master=null) {
    console.debug(`Ticking <${this.uuid}>.`);
    //this.propogateTickToSuper(master);
    super.tick();
    this.navigation_pane.tick(master, this.tabs);
    for (var tab of this.tabs) {
      tab.tick(game_data);
    };
  };
  */

  buildNavigationPane() {
    console.debug(`Building navigation pane for <${this.uuid}>.`);
    this.navigation_pane = new NavigationPane();
    //this.dom.root_pane.appendChild(this.navigation_pane.dom.navigation_pane);
    //this.dom.element.appendChild(this.navigation_pane.dom.navigation_pane);
    //this.element.appendChild(this.navigation_pane.dom.navigation_pane);
    this.element.appendChild(this.navigation_pane.element);
  };

  /*
  createRootPane() {
    console.debug(`Creating root pane element for <${this.uuid}>.`);
    let root_pane = document.createElement('div');
    let root_pane_id = `${this.uuid}_root_pane`;
    root_pane.setAttribute('id', root_pane_id);
    root_pane.classList.add('root_pane');
    return root_pane;
  };
  */

  addTab(tab) {
    console.debug(`Adding <${tab.uuid}> to <${this.uuid}>.`);
    this.tabs.push(tab);
    //let root_pane = this.dom.root_pane;
    //root_pane.appendChild(tab.dom.tab_pane);
    this.element.appendChild(tab.element);
  };

  createTabs() {
    console.debug(`Building tabs for UI with uuid: <${this.uuid}>).`);
    let tabs = [];
    // Colony Tab
    let colony_tab = new ColonyTab();
    //this.addTab(colony_tab);
    tabs.push(colony_tab);
    console.debug(
      `Added colony tab (<${colony_tab.uuid}>) to UI (<${this.uuid}>).`);
    // Population Tab
    let population_tab = new PopulationTab();
    //this.addTab(population_tab);
    tabs.push(population_tab);
    console.debug(
      `Added population tab (<${population_tab.uuid}>) to UI (<${this.uuid}>).`);
    // Research Tab
    let research_tab = new ResearchTab();
    //this.addTab(research_tab);
    tabs.push(research_tab);
    console.debug(
      `Added research tab (<${research_tab.uuid}>) to UI (<${this.uuid}>).`);
    return tabs;
  };
};
