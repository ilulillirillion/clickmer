//TODO: don't lose this!
/*
window.onmousemove = function(e) {
  let tooltip_x = `${e.clientX + 10}px`,
      tooltip_y = `${e.clientY + 10}px`;
      tooltips = document.getElementsByClassName('tooltiptext');
  for (var i = 0; i < tooltips.length; i++) {
    let tooltip = tooltips[i];
    tooltip.style.top = tooltip_y;
    tooltip.style.left = tooltip_x;
  }
};
*/


function buildUI() {
  console.debug(`Building UI for game <${this.uuid}>.`);
  ui = new UI();
  return ui;
};


function createGameData() {
  console.debug('Creating game data.');
  let game_data = {};
  console.debug(`Create game data: <${game_data}>.`);
  return game_data;
};


function loadSavedData(game_data) {
  console.debug('Loading saved data');
  return game_data;
};


function tick(game_data, ui) {
  console.debug('Ticking.');
  ui.tick();

};


function saveGame() {
  console.debug('Saving game.');
  localStorage.setItem('game_save_data', JSON.stringify(game_data));
};


function loopMain(game_data, ui) {
  console.debug('Starting main loop.');

  setInterval(function(game_data) {
    console.info('Autosaving.');
    //localStorage.setItem('game_save_data', JSON.stringify(game_data))
    saveGame(game_data);
  }, 15000, game_data);


  setInterval(function() {
    tick(game_data, ui);
  }, 1000, game_data, ui);
};


function createActivities() {
  let activities = [];

  let hunt_prey_activity = new HuntPreyActivity();
  activities.push(hunt_prey_activity);
  return activities;
};
  

// Do main ////////////////
///////////////////////////

console.debug('Starting main.');

import UI from './classes/UI.js'
import HuntPreyActivity from './classes/HuntPreyActivity.js';


// Create game data.
var game_data = createGameData();

// Load saved data.
game_data = loadSavedData(game_data);

var activities = createActivities();

// Create the UI.
var ui = new UI();

// Start the main loop;
loopMain(game_data, ui);










/* Game data is meant to be relevant and preserved between client reloads,
basically saved progress. */

//var game_data = Game.createGameDataShell();


// Construct all of the UI elements.
//Game.buildUI();

//Game.loadSavedData();



//var runtime_data = Game.buildRuntimeData();


// Retrieve any valid save data and start autosaving.
//var [game_data, save_data] = Game.loadSavedData();
//Game.startAutosaveScheduler();

//runtime_data['activities'] = generateActivities();

//createEventLog();

// go to a tab for the first time, so not all show
//tab('colony_tab')

//console.log(game_data);
//var mainGameLoop = window.setInterval(function() {


  //console.log(game_data);

  // Figure out delta from last tick
  // May need this for offline progress (time_delta / main loop ms), but
  // not using currently.
  //time_delta = Date.now() - game_data.lastTick;

  // Save current time as the new "last" tick
  //game_data.lastTick = Date.now()

  // Refresh activity panes
  /*
  for (var i=0; i < runtime_data['activities'].length; i++) {
    let activity = runtime_data['activities'][i];
    activity.updateElement();
  */
  //activity_panes = document.getElementsByClassName('activity_pane');
  //for (var i=0; i < activity_panes.length; i++ ) {
  //  let activity = activity_panes[i];
  //  console.log(`Iterating activity (<${activity}>) for update.`);
  //  let activity_id = `${activity.getAttribute('id')}`;
    //Game.updateActivityElement(activity_id);
  //};


  //for (var i = 0; i < game_data.population.length; i++) {
  //  let populant = game_data.population[i];

    /*
    // Check and apply octopus tasks
    if (octopus.activity != null) {
      let activity = runtime_data['activities'].find(function (activity) {
        return activity.name == octopus.activity;
      });
      for (let [effect, change] of Object.entries(activity.effects.octopi)) {
        octopus.updateAttribute(effect, change);
      }
      for (let [effect, change] of Object.entries(activity.effects.game)) {
        game_data[effect]['current'] += change;
        if (game_data[effect]['current'] > game_data[effect]['max']) {
          game_data[effect]['current'] = game_data[effect]['max'];
        };
      };
    };
    */

    //if (populant.activity != null) {
    //  console.log(`${populant.name} doing ${populant.activity.name}.`);
    //  //if (populant.hasOwnProperty(populant.activity)) {
    //  if (true) {
    //    console.log(`${populant.name} has property ${populant.activity}.`);
    //    //populant[populant.activity.name]();
    //  };
    //};

    // Update octopus element
    //game_data.octopi[i].updatePopulationTab();


    // Updates tooltips
    //populant.updatePopulationTab();
    //populant.updatePopulationPanes();
    //populant.updatePopulationPanes(true);

    //populant.updateActivityPopulationPanes();

    //populant.updateActivityProgressBar();

    //populant.updateStatistic('hunger', -1);

  //}
    
  //Game.tryRandomTraveller();

  //Game.updatePopulationTab();

  // Update octopi count
  //update('population_p', 'population: ' + game_data.population.length);
  

//}, 1000)
