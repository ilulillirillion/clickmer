// vim: set ft=javascript:

import TileType from './TileType.js';

class ServerArtifact {
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
      //let tile = new TileType({ type: 'Grass', tile_data });
      let tile = new TileType(tile_data);
      _surroundings.push(tile);
    }
    this.surroundings = _surroundings;
      
  }

}

export default ServerArtifact;
