import { DomMixin } from '../mixins/DomMixin.js';
import Thing from './Thing.js';
import NavigationPane from './NavigationPane.js';
import ColonyTab from './ColonyTab.js';
import PopulationTab from './PopulationTab.js';
import ResearchTab from './ResearchTab.js';

export default class UI extends DomMixin(Thing) {
  constructor() {
    super();
    console.debug(`Instantiating a new UI with uuid: <${this.uuid}>.`);

    //this.dom = {};
    this.dom.root_pane = this.createRootPane();

    //TODO: replace these with 'this.attribute =' syntax for readability
    //this.buildTabs();
    this.buildNavigationPane();

    this.tabs = this.createTabs();
    for (let tab of this.tabs) {
      this.dom.root_pane.appendChild(tab.dom.main_tab_pane);
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

    document.body.append(this.dom.root_pane);

  };

  // Propogates tick downward to UI children.
  tick() {
    this.navigation_pane.tick(this.tabs);
    for (var tab of this.tabs) {
      tab.tick();
    };
  };

  buildNavigationPane() {
    console.debug(`Building navigation pane for <${this.uuid}>.`);
    this.navigation_pane = new NavigationPane();
    this.dom.root_pane.appendChild(this.navigation_pane.dom.navigation_pane);
  };

  createRootPane() {
    console.debug(`Creating root pane element for <${this.uuid}>.`);
    let root_pane = document.createElement('div');
    let root_pane_id = `${this.uuid}_root_pane`;
    root_pane.setAttribute('id', root_pane_id);
    root_pane.classList.add('root_pane');
    return root_pane;
  };

  addTab(tab) {
    console.debug(`Adding <${tab.uuid}> to <${this.uuid}>.`);
    this.tabs.push(tab);
    let root_pane = this.dom.root_pane;
    root_pane.appendChild(tab.dom.tab_pane);
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
