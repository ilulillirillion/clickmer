import Thing from './Thing.js';
import NavigationPane from './NavigationPane.js';
import ColonyTab from './ColonyTab.js';
import PopulationTab from './PopulationTab.js';
import ResearchTab from './ResearchTab.js';

export default class UI extends Thing {
  constructor() {
    super();
    console.debug(`Instantiating a new UI with uuid: <${this.uuid}>.`);

    this.tabs = this.createTabs();
    this.navigation_pane = new NavigationPane();
  };

  // Propogates tick downward to UI children.
  tick() {
    this.navigation_pane.tick(this.tabs);
    for (var tab of this.tabs) {
      tab.tick();
    };
  };

  createTabs() {
    console.debug(`Creating tabs for UI with uuid: <${this.uuid}>).`);
    let tabs = [];
    // Colony Tab
    let colony_tab = new ColonyTab();
    tabs.push(colony_tab);
    console.debug(
      `Added colony tab (<${colony_tab.uuid}>) to UI (<${this.uuid}>).`);
    // Population Tab
    let population_tab = new PopulationTab();
    tabs.push(population_tab);
    console.debug(
      `Added population tab (<${population_tab.uuid}>) to UI (<${this.uuid}>).`);
    // Research Tab
    let research_tab = new ResearchTab();
    tabs.push(research_tab);
    console.debug(
      `Added research tab (<${research_tab.uuid}>) to UI (<${this.uuid}>).`);
    return tabs;
  };
};
