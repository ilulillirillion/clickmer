// vim: set ft=javascript:

console.info('Running main.js');

import TileType from './TileType.js';
import KeyboardControllableMixin from './KeyboardControllableMixin.js';
import PlayerView from './PlayerView.js';
import WorldView from './WorldView.js';
import ServerObject from './ServerObject.js';
import Client from './Client.js';

// Use ServerUpdate objects to update the client.
import ServerUpdate from './ServerUpdate.js';

const name = 'test';

let socket = io();

var players = null;
var player = null;
let tiles = null;
let account_id = null;


async function initClient() {
  let client = await new Client({ account_id: null });
  console.warn('client returned', client);
  return client;
}
//let client = initClient();
let client = new Client({ account_id: null });
console.warn('client is', client);

socket.on('state', function(authoritative_state) {
  console.debug('Got state from server.', authoritative_state);

  
  //try { client.update(authoritative_state) } catch { console.warn('no client!') }
  client.update(authoritative_state);
 

  //let client_player = null;

  //for (let player_state of Object.values(state.player_states)) {
  //let players = [];
  /*
  for (let player of Object.values(state.players)) {
    players.push(new ClientServerObject(player));
  }
  */
  // FIXME: Requires server to pass the state players AS server objects
    //let player = new ServerObject(player_state.player);
      
    /*
    if (client.account_id === player.account_id) {
      //client.updatePlayer(player);
      client_player = player;
    }
    */
  //});

  /*
  if (!client_player) {
    console.warn(`Did not find player with matching account id <${client.account_id}>. Looking for player by socket id <${socket.id}>.`);
    // FIXME: Make sure the server is attaching socket_id to players and not
    //        just to the player state itself.
    client_player = Object.values(players).find(
        function(player) { return player.socket_id === socket.id }
    );
  }
  */

  //client.updatePlayer(client_player);
  // FIXME: This assumes client_player will somehow carry the tiles to be
  //        rendered, instead of player state, and will need to be implemented.
  /* FIXME: Server should create the server update object.
  let server_update = new ServerUpdate(
      {
        //player = client_player
        players = state.players
      }
  );
  */
  //client.updateClient(server_update);
  
  
  /*
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
  */

  /*
  players = [];
  for (let _player_state of Object.values(state.player_states)) {
    players.push(_player_state.player);
  }
  */

  // TODO:  This is a temporary dev solution, and incorrectly authorizes the
  //        client to unilaterally set position.

  /*
  if (!player) {
    player = new ServerObject(player_state.player);
  } else {
    player.account_id = player_state.player.account_id;
    player.uuid = player_state.player.uuid;
    player.name = player_state.player.name;
    player.ticks_epoch = player_state.player.ticks_epoch;
    player.x = player_state.player.x;
    player.y = player_state.player.y;
  }
  */

  /*
  console.debug('Got player from player state', player);
  //account_id = player.account_id;
  tiles = createTiles(player_state.player_surroundings);
  console.debug('Got tiles from player state', tiles);
  */

  ReactDOM.render(
    React.createElement(PlayerView, 
        { 
          //player: player
          player: client.player
        }),
    document.getElementById('react_test'));

  ReactDOM.render(
    React.createElement(WorldView,
        //{ tiles: tiles, players: players,
        {
          //tiles: client.player.surroundings,
          //players: players, //FIXME
          client: client,
          width: 100, height: 100,
          tile_size: 8, fill_style: 'rgba(255, 0, 0, 0.6)' 
        }
    ),
    document.getElementById('react_map')
  );

  console.debug('Sending player as state', client.player);


  
  socket.emit('state', client.player);
  console.debug('Sent player as state', client.player);

  client.player.x_delta = 0;
  client.player.y_delta = 0;

  //player.x_delta = 0;
  //player.y_delta = 0;

});

/*
setInterval(function() {
  console.warn(player);
}, 100);
*/

function createTiles(tiles_data) {
  let tiles = [];
  for (let tile_data of tiles_data) {
    let tile = new TileType(tile_data);
    tiles.push(tile);
  }
  return tiles;
}


console.info('Finished running main.js');
