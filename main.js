import MessageLog from '../classes/MessageLog.js';
import RestActivity from '../classes/RestActivity.js';
import StudyEnvironmentActivity from '../classes/StudyEnvironmentActivity.js';
import HuntPreyActivity from '../classes/HuntPreyActivity.js';


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


function tick(ui) {
  console.debug('Ticking.');

  // Tick the world.
  game_data.world.tick();

  // Tick population
  for (let populant of game_data.population) {
    console.debug(`Game about to tick populant <${populant.uuid}>.`);
    if (populant.active) {
      populant.tick();
    };
  };

  // Tick the UI
  ui.tick();
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


//function loopMain(game_data, ui) {
function loopMain(ui) {
  console.debug('Starting main loop.');

  /* Temporarily disabled
  setInterval(function(game_data) {
    console.info('Autosaving.');
    //localStorage.setItem('game_save_data', JSON.stringify(game_data))
    saveGame(game_data);
  }, 15000, game_data);
  */


  setInterval(function() {
    tick(ui);
  }, 1000, ui);
};


function createActivities() {
  let activities = [
    RestActivity,
    StudyEnvironmentActivity,
    HuntPreyActivity
  ];
  //activities.push(new IdleActivity());
  return activities;
};
  

// Do main ////////////////
///////////////////////////

console.debug('Starting main.');

import UI from './classes/UI.js'
import World from './classes/World.js';
import Human from './classes/Human.js';
import Rabbit from './classes/Rabbit.js';


// Create game data.
window.game_data = createGameData();

// Load saved data.
game_data = loadSavedData(game_data);

game_data.activities = createActivities();

game_data.message_log = new MessageLog();

// World
let world = new World();
game_data.world = world;

// Population
game_data.population = [];
let test_populant = new Human();
//let test_populant = new Rabbit();
game_data.population.push(test_populant);

// Create the UI.
var ui = new UI();

// Start the main loop;
loopMain(ui);
