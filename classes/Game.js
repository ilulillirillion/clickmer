import ReactorMixin from '../mixins/ReactorMixin.js';
import Thing from '../classes/Thing.js';
import MessageLog from '../classes/MessageLog.js';
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

  };

  test() {
    console.info(`<${this.uuid}> is running test.`);
    let test_actor = new Actor();
    test_actor.write('test message');
  };

};
