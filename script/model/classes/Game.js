import ReactorMixin from '../mixins/ReactorMixin.js';
import Thing from '../classes/Thing.js';
import MessageLog from '../classes/MessageLog.js';
import World from '../classes/World.js';
import Colony from '../classes/Colony.js';
import Actor from '../classes/Actor.js';


/**
 * Game class aims to contain the entire game itself.
 * Instantiating a new game instance should effectively start a new game.
 * ReactorMixin exists to allow the handling of game events from child 
 * components.
 */
export default class Game extends ReactorMixin(Thing) {

  constructor() {

    let message_log = new MessageLog();
    window.message_log = message_log;

    super();

    this.message_log = message_log;

    this.population = [];

  };
  
  tick() {
    let tick_start_time = Date.now();
    super.tick();
    /*
    for (let actor of Object.values(this.population)) {
      actor.tick();
    };
    */
    this.world.tick();
    //this.colony.tick();

    let tick_end_time = Date.now()
    let time_delta = tick_end_time - tick_start_time;
    console.info(`<${this.uuid}> took <${time_delta}> milliseconds to tick.`);
  };

  test() {
    console.info(`<${this.uuid}> is running test.`);

    let test_world = new World();
    console.info(`<${this.uuid}> generated a test world:`,  test_world);
    this.world = test_world;

    let test_colony = new Colony();
    console.info(`<${this.uuid}> generated a test colony:`, test_colony);
    //this.colony = test_colony;
    this.world.places.push(test_colony);

    //let test_actor = new Actor();
    //console.info(`<${this.uuid}> generated a test actor:`, test_actor);
    
    let test_actor = this.world.spawn({ class_name: 'Actor' });
    console.info(`<${this.world.uuid}> has spawned a test actor:`, test_actor);

    //this.population.push(test_actor);

    test_actor.write('test message');

    let self = this;
    setInterval(function() {
      //this.tick();
      self.tick();
    }, 1000);
  };

};
