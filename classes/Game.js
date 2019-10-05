import ReactorMixin from '../mixins/ReactorMixin.js';
import Thing from '../classes/Thing.js';
import MessageLog from '../classes/MessageLog.js';
import World from '../classes/World.js';
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
    /*
    for (let actor of Object.values(this.population)) {
      actor.tick();
    };
    */
    this.world.tick();
  };

  test() {
    console.info(`<${this.uuid}> is running test.`);

    let test_world = new World();
    console.info(`<${this.uuid}> generated a test world:`,  test_world);
    this.world = test_world;

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
