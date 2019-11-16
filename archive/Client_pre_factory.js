// vim: set ft=javascript:

/** 
 * file: clickmer/client/Client.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the Client class.
 * Client objects contain all of the necessary state and functionality to run
 * the client-side of the game. The client is dependent on a basic HTML shell
 * which should be provided to it.
 */

// TODO: Enforce singleton

//console.info('Client.js started.');

// Import Thing to use as a base for the client class.
import Thing from './Thing.js';
// Import ServerArtifact to track the state of players.
import ServerArtifact from './ServerArtifact.js';
// Import CanConsoleLog mixin to extend the client with access to wrapped
import CanConsoleLog from './jslib/CanConsoleLog.js';
// Import KeyboardControllable to make the client respond to keyboard input.
import KeyboardControllable from './KeyboardControllable.js';
// Import PlayerView for rendering player.
import PlayerView from './PlayerView.js';
// Import WorldView for rendering the world.
import WorldView from './WorldView.js';

// NOTE:  It's important to only call this once anywhere in the client in
//        order to avoid issues with duplicating sockets.
let socket = io();

/**
 * The Client class is used to represent the player client.
 * Contains all client state data, methods, and socket behaviors.
 * Relies on existence of relevant shell divs in the HTML and expects them to
 * be provided by the main script or static HTML.
 */
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

    // Shouldn't need to pass anything to super.
    super();

    // Create an alias for the console logger
    this.logger = this.console_logger;

    this.players = players;

    // FIXME: This is insecure as client could set a different account id.
    this.account_id = account_id;
    if (!this.account_id) {
      let self = this;
      socket.emit('getid', function(response) {
        console.debug('getid response:', response);
        self.account_id = response;
      });
    }

    let self = this;
    socket.on('state', function(authoritative_state) {
      self.logger.debug('Got authoritative state from server:', authoritative_state);

      // Update the client to reflect the authoritative state.
      self.update(authoritative_state);

      // Render the player view.
      ReactDOM.render(
        React.createElement(PlayerView,
            {
              player: self.player
            }
        ),
        document.getElementById('player_view_container')
      );

      // Render the world view.
      ReactDOM.render(
        React.createElement(WorldView,
            {
              client: self,
              width: 100, height: 100,
              tile_size: 8, fill_style: 'rgba(255, 0, 0, 0.6)'
            }
        ),
        document.getElementById('world_view_container')
      );

      // Send the client's player to the server to be validated.
      let player = self.player;
      socket.emit('state', player);
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
    this.logger.debug(
        `Getting client player by account id <${this.account_id}>.`, 
        this.players);
    let account_id = this.account_id;
    
    let player = Object.values(this.players).find(function(player) {
      return player.account_id === account_id;
    });

    this.logger.debug('Returning client player.', player);
    return player;
  }

  /**
   * Returns every player except the client's current player by account id.
   */
  get other_players() {
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
    this.logger.debug(`<${this}> moving <${delta}> units on <${axis}>`, this);
    let self = this;
    let player = Object.values(this.players).find(function(player) {
      return player.account_id === self.account_id;
    });
    player[`${axis}_delta`] += delta;
    this.logger.debug(`Moved player <${player.uuid}> <${delta}> units on <${axis}>:`, player);
  }
}

export default Client;
