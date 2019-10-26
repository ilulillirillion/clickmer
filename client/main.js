// vim: set ft=javascript:

console.info('Running main.js');

import TileType from './TileType.js';
import KeyboardControllableMixin from './KeyboardControllableMixin.js';
import PlayerView from './PlayerView.js';
import WorldView from './WorldView.js';
import ServerObject from './ServerObject.js';

const name = 'test';

/*
class PlayerClient extends KeyboardControllableMixin(Object) {
  constructor(
      { account_id = null, uuid = null, name = 'player_client', ticks_epoch = 0, x = 1, y = 1 } =
      { account_id: null, uuid: null, name: 'player_client', ticks_epoch: 0, x: 1, y: 1 }) {
    super({ uuid, name, x, y });
    //super();

    this.account_id = account_id;

  };
};
*/

let socket = io();

var players = null;
var player = null;
//var player = { x_delta: 0, y_delta: 0 };
let tiles = null;
let account_id = null;
socket.on('state', function(state) {
  console.debug('Got state from server.', state);
  if (account_id) {
    console.debug(`Getting player with account id <${account_id}>.`, state);
    var player_state = state.player_states[account_id];
    console.debug(`Got player_state with account id <${account_id}>.`, player_state);
  } else {
    console.debug(`Getting player with socket id <${socket.id}>.`, state);
    var player_state = Object.values(state.player_states).find(function(player_state) {
      return player_state.socket_id = socket.id;
    });
  }

  players = [];
  for (let _player_state of Object.values(state.player_states)) {
    players.push(_player_state.player);
  }

  // TODO:  This is a temporary dev solution, and incorrectly authorizes the
  //        client to unilaterally set position.
  if (!player) {
    player = new ServerObject(player_state.player);
  } else {
    //player.update(player_state.player);
    //player = { ...player, ...player_state.player };
    player.account_id = player_state.player.account_id;
    player.uuid = player_state.player.uuid;
    player.name = player_state.player.name;
    player.ticks_epoch = player_state.player.ticks_epoch;
    player.x = player_state.player.x;
    player.y = player_state.player.y;
  }

  //if (player) {
  //  let 

  /*
  if (player) {
    let client_x = player.x;
    let client_y = player.y;
    player = player_state.player;
    player.x = client_x;
    player.y = client_y;
  } else {
    player = player_state.player;
  }
  */
  /*
  let _player = player_state.player;
  if (!player) {
    player = new PlayerClient({ account_id: _player.account_id, uuid: _player.uuid, name: _player.name, ticks_epoch: _player.ticks_epoch, x: _player.x, y: _player.y });
  } else {
    player.uuid = player_state.player.uuid;
    player.ticks_epoch = player_state.player.ticks_epoch;
  }
  */

  console.debug('Got player from player state', player);
  account_id = player.account_id;
  tiles = createTiles(player_state.player_surroundings);
  console.debug('Got tiles from player state', tiles);

  ReactDOM.render(
    //React.createElement(PlayerView, { player_seed: player }),
    React.createElement(PlayerView, 
        { 
          //account_id: player.account_id,
          //uuid: player.uuid;
          player: player
        }),
    document.getElementById('react_test'));

  ReactDOM.render(
    React.createElement(WorldView,
        { tiles: tiles, players: players,
          width: 100, height: 100,
          tile_size: 8, fill_style: 'rgba(255, 0, 0, 0.6)' }),
    document.getElementById('react_map'));

  console.debug('Sending player as state', player);


  
  socket.emit('state', player);
  //socket.emit('state', { x: player.x, y: player.y, client_x: stupid_object.x, client_y: stupid_object.y });
  console.debug('Sent player as state', player);
  //socket.emit('state', {"x":0,"y":0,"controls":{},"account_id":1,"uuid":"player_830c7c9","name":"player","ticks_epoch":0,"x_delta":5,"y_delta":5});

  player.x_delta = 0;
  player.y_delta = 0;

});

setInterval(function() {
  console.warn(player);
}, 100);

function createTiles(tiles_data) {
  let tiles = [];
  for (let tile_data of tiles_data) {
    let tile = new TileType(tile_data);
    tiles.push(tile);
  }
  return tiles;
}


console.info('Finished running main.js');
