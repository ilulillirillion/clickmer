// vim: set ft=javascript:

/**
 * file: clickmer/client/ServerArtifact.js
 * author: zolvaring
 * email: zolvaring@gmail.com
 * reference: https://github.com/zolvaring/clickmer
 **
 * Provides the ServerArtifact class.
 * ServerArtifacts are objects that exist on the client but is managed by the
 * server through mutation.
 * The ServerArtifact represents the state that the client things a given
 * object is in, and is also what the client sends to the server to be
 * validated. The server will respond with validation data and the client will
 * make sure ServerArtifacts are mutated accordingly.
 */


// Import TileType for constructing server artifact surroundings.
import TileType from './TileType.js';

// Import CanConsoleLog for mixing in with base ServerArtifact class.
// Enables logging to the console.
import CanConsoleLog from './jslib/CanConsoleLog.js';

import Thing from './Thing.js';

class ServerArtifact extends CanConsoleLog(Thing) {
  /**
   * Constructs a new ServerArtifact.
   * Initializes all valid parameters to the exact value given.
   * Initializes an x and y delta value at 0. These values are used to track
   * position changes that occur on the client's side.
   */
  constructor(
      {
        account_id = null,
        socket_id = null,
        uuid = null,
        name = 'server_artifact',
        ticks_epoch = 0,
        x = 1,
        y = 1,
        surroundings = {}
      } =
      {
        account_id: null,
        socket_id: null,
        uuid: null,
        name: 'server_artifact',
        ticks_epoch: 0,
        x: 1,
        y: 1,
        surroundings: {}
      }
      ) {
    console.debug('Constructing a new ServerArtifact.', arguments);

    super();

    // Log to the mixin provide console logger by default.
    // TODO:  Provide some sort of base which supplies a default "logger" value 
    //        since mixing in console logging implies it should exist.
    this.logger = this.console_logger;

    this.account_id = account_id;
    this.socket_id = socket_id;
    this.uuid = uuid;
    this.name = name;
    this.ticks_epoch = ticks_epoch;
    this.x = x;
    this.y = y;
    this.surroundings = surroundings;

    this.x_delta = 0;
    this.y_delta = 0;

  }

  /**
   * The update method sets all properties of the server artifact to that of
   * the update data (designed to use with data from the server response)
   * except for x and y delta, which cannot be passed and shouldn't be set in
   * this way. Delta values should be reset once sent to the server.
   */
  update(
      {
        account_id = this.account_id || null,
        socket_id = this.socket_id || null,
        uuid = this.uuid || null,
        name = this.name || 'server_artifact',
        ticks_epoch = this.ticks_epoch || 0,
        x = this.x || 1,
        y = this.y || 1,
        surroundings = this.surroundings || {}
      } = {
        account_id: this.account_id || null,
        socket_id: this.socket_id || null,
        uuid: this.uuid || null,
        name: this.name || 'server_artifact',
        ticks_epoch: this.ticks_epoch || 0,
        x: this.x || 1,
        y: this.y || 1,
        surroundings: this.surroundings || {}
      }) {

    //console.debug('Updating server artifact:', this, arguments);
    this.logger.debug('Updating server artifact:', this, arguments);

    this.account_id = account_id;
    this.socket_id = socket_id;
    this.uuid = uuid;
    this.name = name;
    this.ticks_epoch = ticks_epoch;
    this.x = x;
    this.y = y;

    // TODO: use map?
    let _surroundings = [];
    for (let tile_data of surroundings) {
      let tile = new TileType(tile_data);
      _surroundings.push(tile);
    }
    this.surroundings = _surroundings;
      
  }

}

export default ServerArtifact;

//console.info('ServerArtifact.js finished.');
