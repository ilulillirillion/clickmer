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
  for (let populant of game_data.population) {
    console.debug(`Game about to tick populant <${populant.uuid}>.`);
    if (populant.active) {
      populant.tick();
    };
  };
  ui.tick(game_data);
  if (ui.flags.spawn_populant === true) {
    let new_populant = new Human();
    game_data.population.push(new_populant);
    ui.flags.spawn_populant = false;
  };

};


function saveGame() {
  console.debug('Saving game.');
  localStorage.setItem('game_save_data', JSON.stringify(game_data));
};


function loopMain(game_data, ui) {
  console.debug('Starting main loop.');

  /* Temporarily disabled
  setInterval(function(game_data) {
    console.info('Autosaving.');
    //localStorage.setItem('game_save_data', JSON.stringify(game_data))
    saveGame(game_data);
  }, 15000, game_data);
  */


  setInterval(function() {
    tick(game_data, ui);
  }, 1000, game_data, ui);
};


function createActivities() {
  let activities = [];
  //activities.push(new IdleActivity());
  return activities;
};
  

// Do main ////////////////
///////////////////////////

console.debug('Starting main.');

import UI from './classes/UI.js'
import Human from '../classes/Human.js';


// Create game data.
var game_data = createGameData();

// Load saved data.
game_data = loadSavedData(game_data);

var activities = createActivities();

game_data.population = [];
let test_human = new Human();
game_data.population.push(test_human);

// Create the UI.
var ui = new UI();

// Start the main loop;
loopMain(game_data, ui);
