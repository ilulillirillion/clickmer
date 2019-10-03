import Pane from '../classes/Pane.js';
import WorldInfoSidebar from '../classes/WorldInfoSidebar.js';
import MessageLog from '../classes/MessageLog.js';
import NavigationPane from './NavigationPane.js';
import ColonyTab from './ColonyTab.js';
import PopulationTab from './PopulationTab.js';
import ResearchTab from './ResearchTab.js';
import DebugTab from '../classes/DebugTab.js';

export default class UI extends Pane {
  constructor(game_data) {
    super();
    console.debug(`Instantiating a new UI with uuid: <${this.uuid}>.`);

    this.header_text_span_contents = 'Clickmer'

    this.buildNavigationPane();

    this.element.classList.add('ui');

    this.flags = {
      'spawn_populant': false
    };

    let sidebar = new WorldInfoSidebar(game_data.world);
    this.element.appendChild(sidebar.element);
    this.sidebar = sidebar;

    let message_log = new MessageLog();
    this.element.append(message_log.element);
    this.message_log = message_log;

    this.tabs = this.createTabs();
    for (let tab of this.tabs) {
      this.element.appendChild(tab.element);
    };

    // Create a root event listener for tab handling
    let self = this;
    document.addEventListener('hide_tabs', function() {
      console.debug(`<${self.uuid}> responding to hide_tabs event.`);
      for (let tab of self.tabs) {
        tab.hide();
      };
    });

    document.addEventListener('spawn_populant', function() {
      console.debug(`<${self.uuid}> responding to spawn_populants event.`);
      self.flags.spawn_populant = true;
    });

    document.body.append(this.element);
  };
    
  tick(game_data) {
    super.tick();
    console.debug(`Ticking <${this.uuid}>.`);

    this.message_log.write(`Tick: ${this.ticks_epoch}`);

    this.sidebar.tick();

    this.navigation_pane.tabs = this.tabs;
    this.navigation_pane.tick(game_data, this.tabs);
    for (let tab of this.tabs) {
      tab.tick(game_data)
    };
  }; 


  buildNavigationPane() {
    console.debug(`Building navigation pane for <${this.uuid}>.`);
    this.navigation_pane = new NavigationPane();
    this.element.appendChild(this.navigation_pane.element);
  };


  addTab(tab) {
    console.debug(`Adding <${tab.uuid}> to <${this.uuid}>.`);
    this.tabs.push(tab);
    this.element.appendChild(tab.element);
  };

  createTabs() {
    console.debug(`Building tabs for UI with uuid: <${this.uuid}>).`);
    let tabs = [];
    // Debug Tab.
    let debug_tab = new DebugTab();
    tabs.push(debug_tab);
    console.debug(
      `Added debug tab (<${debug_tab.uuid}>) to UI (<${this.uuid}>).`);
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
