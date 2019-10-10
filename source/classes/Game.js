const Thing = require('../classes/Thing.js');
const MessageLog = require('../classes/MessageLog.js');
const World = require('../classes/World.js');
const Player = require('../classes/Player.js');

/**
 * Game class aims to contain the entire game itself.
 * Instantiating a new game instance should effectively start a new game.
 * ReactorMixin exists to allow the handling of game events from child 
 * components.
 */
//export default class Game extends ReactorMixin(Thing) {
class Game extends Thing {

  constructor() {

    //let message_log = new MessageLog();
    //window.message_log = message_log;

    super();

    //this.message_log = message_log;

    this.population = [];

    this.world = new World();

    

  };

  buildPlayer() {
    let player = new Player();
    this.player = player;
    this.world.randomlyOverwriteTile(this.player.colony);
  };

  tick() {
    let tick_start_time = Date.now();
    super.tick();
    this.world.tick();

    //this.player.tick();

    let tick_end_time = Date.now()
    let time_delta = tick_end_time - tick_start_time;
    console.info(`<${this.uuid}> took <${time_delta}> milliseconds to tick.`);
  };

  test() {
    console.info(`<${this.uuid}> is running test.`);
    

    let test_world = new World();
    console.info(`<${this.uuid}> generated a test world:`,  test_world);
    this.world = test_world;

    this.buildPlayer();

    
    let test_actor = this.world.spawn({ class_name: 'Actor' });
    console.info(`<${this.world.uuid}> has spawned a test actor:`, test_actor);


    test_actor.write('test message');

    let self = this;
    setInterval(function() {
      self.tick();
    }, 1000);
  };

};


module.exports = Game;
