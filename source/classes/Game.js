const logger = require('../misc/winston_logger.js');
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

  constructor({ io, uuid = null, name = null } =
              { io, uuid: null, name: null }) {

    //let message_log = new MessageLog();
    //window.message_log = message_log;

    super({ uuid, name });

    this.io = io;

    //this.message_log = message_log;

    this.population = [];

    this.world = new World();

    this.players = {};
    let self = this;
    setInterval(function() {
      io.sockets.emit('state', self.players);
    }, 1000);

    this.io.on('connection', function(socket) {
      logger.debug('Got new connection.');
      socket.on('new_player', function(data, callback) {
        logger.debug('Got new_player event');
        let player = new Player({ socket_id: socket.id });
        self.players[socket.id] = player;
        //logger.warn(player.socket_id);
        callback(player);
        //callback(player);
        //callback('success');
        //socket.emit('player_state', player, function(response) {
        //  logger.debug(`test response ${response}.`);
        //});
      });
      socket.on('load_player', function(player_socket_id, callback) {
        logger.debug('Got load_player event');
        let player = self.players[player_socket_id];
        callback(player);
      });
    });


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
    //console.info(`<${this.uuid}> took <${time_delta}> milliseconds to tick.`);
  };

  test() {
    //console.info(`<${this.uuid}> is running test.`);
    

    let test_world = new World();
    //console.info(`<${this.uuid}> generated a test world:`,  test_world);
    this.world = test_world;

    this.buildPlayer();

    
    let test_actor = this.world.spawn({ class_name: 'Actor' });
    //console.info(`<${this.world.uuid}> has spawned a test actor:`, test_actor);


    test_actor.write('test message');

    let self = this;
    setInterval(function() {
      self.tick();
    }, 1000);
  };

};


module.exports = Game;
