// vim: set ft=javascript:


const logger = require('./logger.js');
const Thing = require('./Thing.js');
const Map = require('./Map.js');
const PlayerState = require('./PlayerState.js');


class Game extends Thing {
  constructor({ io, uuid = null, name = null } =
              { io, uuid: null, name: null }) {

    super({ uuid, name });

    this.io = io;

    this.population = [];

    this.map = new Map();

    // TODO: re-implement this
    //this.world = new World();

    this.players = {};

    //let self = this;
    /*
    setInterval(function() {
      io.sockets.emit('state', self.players);
    }, 1000);
    */

    let self = this;
    /*
    this.io.on('connection', async function(socket) {
      logger.info(`Got a new connection on socket <${socket}>.`);
      if (!socket.handshake.session.username) {
        logger.warn('Ignoring strange connection.');
        return;
      };
      //socket.on('connect_player', async function(data, callback) {
      logger.info(`Handling a connect_player event on socket <${socket}>.`);
      //logger.info('test');
      let player = await new Promise((resolve, reject) => {
        try {
          resolve(self.connectPlayer(socket));
        } catch(error) {
          logger.error(error);
          reject(null);
        };
      });
      //self.players.push(player);
      self.players[socket.id] = player;
      //callback(player);
    });
    */

  };

  //connectPlayer() { logger.warn('test') };

  get player_states() {
  //getPlayerStates() {

    return (async () => {
      //let player_states = [];
      let player_states = {};
      for (let player of Object.values(this.players)) {

        let surroundings = await new Promise((resolve, reject) => {
          try { 
            resolve(this.map.getSurroundingsOf(player));
          } catch(error) {
            logger.error(error);
            reject(null);
          }
        });
        logger.warn('Inserting surroundings into player state', surroundings);

        let player_state = new PlayerState(
            //{ player: player, surroundings: player.getSurroundings() });
            { player: player, surroundings: surroundings });
        //player_states.push(player_state);
        //player_states[player.socket_id] = player_state;
        player_states[player.account_id] = player_state;
      }
      return player_states;
    });
  }

  get state() {
    let state = {
      player_states: this.player_states
    }
    /*
    let state = {
      players: this.players,
      tiles: this.map.tiles
    }
    */
    return state;
  }

  async tick() {
    let tick_start_time = Date.now();

    super.tick();

    logger.debug('Ticking game.');

    // Check all sockets for any new players
    /*
    let self = this;
    for (let socket of Object.values(this.io.sockets)) {
      //if (socket.connected && (!socket.id in this.players)) {
      if (socket.connected) {
        logger.debug('Handling a new player connection.');
        let player = await new Promise((resolve, reject) => {
          try {
            resolve(self.connectPlayer(socket));
          } catch(error) {
            logger.error(error);
            reject(null);
          };
        });
        self.players[socket.id] = player;
      }
    }
    */

    // Tick all of the players.
    for (let player of Object.values(this.players)) {
      player.tick();
    }

    // Send state to all players.
    //this.io.sockets.emit('state', this.players);
    logger.debug('Sending state to players');
    //this.io.sockets.emit('state', this.state);
    //let state = await this.getPlayerStates();
    //this.io.sockets.emit('state', this.state);

    let player_states = {};
    for (let player of Object.values(this.players)) {

      let surroundings = await new Promise((resolve, reject) => {
        try { 
          resolve(this.map.getSurroundingsOf(player));
        } catch(error) {
          logger.error(error);
          reject(null);
        }
      });
      logger.warn('Inserting surroundings into player state', surroundings);

      let player_state = new PlayerState(
          //{ player: player, surroundings: player.getSurroundings() });
          { player: player, surroundings: surroundings });
      //player_states.push(player_state);
      //player_states[player.socket_id] = player_state;
      player_states[player.account_id] = player_state;
    }
    //return player_states;

    let state = { 'player_states': player_states };

    this.io.sockets.emit('state', state);

    let tick_end_time = Date.now();
    let time_delta = tick_end_time - tick_start_time;

    logger.info(`Took <${time_delta}> milliseconds to tick <${this.uuid}>.`);

  }

  connectPlayer = require('./connectPlayer.js');
  /*
  connectPlayer() {
    require('./connectPlayer.js')();
  };
  */
  
};


module.exports = Game;
