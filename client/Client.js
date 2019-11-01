// vim: set ft=javascript:

/** 
 * file: clickmer/client/Client.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Client class.
 * TODO: expand on this docstring.
 */

// TODO: Enforce singleton

//console.info('Client.js started.');

import Thing from './Thing.js';

// Import ServerArtifact to track the state of players.
import ServerArtifact from './ServerArtifact.js';
//console.debug('Imported ServerArtifact:', ServerArtifact);

// Import CanConsoleLog mixin to extend the client with access to wrapped
// console operations and a configuration abstraction for the console.
import CanConsoleLog from './javascript/CanConsoleLog.js';
//console.debug('Imported CanConsoleLog:', CanConsoleLog);

// Import KeyboardControllable to make the client respond to keyboard input.
import KeyboardControllable from './KeyboardControllable.js';
//console.debug('Imported KeyboardControllable:', KeyboardControllable);

// Import PlayerView for rendering player.
import PlayerView from './PlayerView.js';
//console.debug('Imported PlayerView:', PlayerView);

// Import WorldView for rendering the world.
import WorldView from './WorldView.js';
//console.debug('Imported WorldView:', WorldView);

// NOTE:  It's important to only call this once anywhere in the client in
//        order to avoid issues with duplicating sockets.
let socket = io();
//console.debug('Got socket from io call:', socket);

/**
 * The Client class is used to represent the player client.
 * Contains all client state data, methods, and socket behaviors.
 */
//class Client extends KeyboardControllable(Object) {
//class Client extends KeyboardControllable(CanConsoleLog(Object)) {
class Client extends KeyboardControllable(CanConsoleLog(Thing)) {
  constructor(
      {
        account_id = null,
        players = {}
      } = 
      {
        account_id: null,
        players: {}
      }
      ) {

    super({ logging_enabled: false });

    // Create an alias for the console logger
    this.logger = this.console_logger;

    /*
    let name = 'blopo'
    this.logger.debug(`Debug test <${name}>`, this);
    this.logger.info(`Info test <${name}>`, this);
    this.logger.warn(`Warn test <${name}>`, this);
    this.logger.error(`Error test <${name}>`, this);
    */


    // TODO: this is insecure
    this.account_id = account_id;

    this.players = players;

    if (!this.account_id) {
      let self = this;
      socket.emit('getid', function(response) {
        console.debug('getid response:', response);
        self.account_id = response;
      });
    }

    let self = this;
    socket.on('state', function(authoritative_state) {
      //console.debug('Got state from server.', authoritative_state);
      self.logger.debug('Got authoritative state from server:', authoritative_state);

      // Update the client to reflect the authoritative state.
      self.update(authoritative_state);

      // Render the player view.
      // TODO: create this child div.
      ReactDOM.render(
        React.createElement(PlayerView,
            {
              player: self.player
            }),
        document.getElementById('react_test'));

      // Render the world view.
      // TODO: create this child div.
      ReactDOM.render(
        React.createElement(WorldView,
            {
              client: self,
              width: 100, height: 100,
              tile_size: 8, fill_style: 'rgba(255, 0, 0, 0.6)'
            }
        ),
        document.getElementById('react_map')
      );

      // Send the client's player to the server to be validated.
      let player = self.player;
      socket.emit('state', player);
      //console.debug('Sent client player to server:', player);
      self.logger.debug('Sent client player to server:', player);

      player.x_delta = 0;
      player.y_delta = 0;

    });
       
  }


  /**
   * Gets the "current" player for the client by checking for a matching
   * account id.
   */
  get player() {
    //console.debug(`Getting client player by account id <${this.account_id}>.`, this.players);
    this.logger.debug(`Getting client player by account id <${this.account_id}>.`, this.players);
    let account_id = this.account_id;
    
    let player = Object.values(this.players).find(function(player) {
      return player.account_id === account_id;
    });

    //console.debug('Returning client player.', player);
    this.logger.debug('Returning client player.', player);
    return player;
  }

  /**
   * Returns every player except the client's current player by account id.
   */
  get other_players() {
    //console.debug('Getting other players from client:', this);
    this.logger.debug('Getting other players from client:', this);
    other_players = Object.values(this.players).filter(player => {
      player.account_id !== this.account_id;
    });
    return other_players;
  }

  /**
   * Take an authoritative state from the server and use it to update all
   * players.
   */
  update(authoritative_state) {
    //console.debug('Updating Client.', socket.id);
    this.logger.debug('Updating Client.', socket.id);
    const players = authoritative_state.players;
    for (let [player_uuid, player_state] of Object.entries(players)) {
      if (!(player_uuid in this.players)) {
        this.players[player_uuid] = new ServerArtifact(player_state);
      }
      this.players[player_uuid].update(player_state);
    }
  }

  /**
   * Overwrites the move method provided by KeyboardControllable.
   * The client captures the keyboard input as normal, but moves the player
   * instead of itself.
   */
  move(axis, delta) {
    //console.debug(`<${this}> moving <${delta}> units on <${axis}>`, this);
    this.logger.debug(`<${this}> moving <${delta}> units on <${axis}>`, this);
    let self = this;
    let player = Object.values(this.players).find(function(player) {
      return player.account_id === self.account_id;
    });
    player[`${axis}_delta`] += delta;
    //console.debug(`Moved player <${player.uuid}> <${delta}> units on <${axis}>:`, player);
    this.logger.debug(`Moved player <${player.uuid}> <${delta}> units on <${axis}>:`, player);
  }
}

export default Client;
