// vim: set ft=javascript:

//TODO: rename "ctx"

console.info('Running main.js');


import TileType from './TileType.js';
//import KeyboardController from './KeyboardController.js';
//import Controller from './Controller.js';
import KeyboardControllableMixin from './KeyboardControllableMixin.js';


const name = 'test';
//var player = { 'name': 'dummyplayer' };
//const element = <p>hello {name}</p>;

//const keyboard_controller = new KeyboardController();
//const controller = new Controller();

/*
class PlayerInfo extends React.Component {
  constructor(
      { root, player, props, context } = 
      {} ) {
    console.debug('Contstructing PlayerInfo with arguments', arguments);
    super(props, context);
    
    this.root = root;
    this.player = player;

  }
    
  render() {
    return (
      React.createElement('div', {},
        React.createElement('p', {}, `player: ${this.player}`),
        React.createElement('p', {}, `player name: ${this.player.name}`),
        React.createElement('p', {}, `player ticks: ${this.player.ticks_epoch}`)
      )
    );

    ReactDOM.render(
      React.createElement('div', {},
        React.createElement('p', {}, `player name: ${this.player.name}`),
        React.createElement(
            'p', {}, `player ticks: ${this.player.ticks_epoch}`)),
      this.root);
    
  };

};
*/


/*
class PlayerInfoContainer extends React.Component {
  state = { player: null };
  
  componentDidMount() {
    fetchPlayer(player =>
      this.setState({ player: player }));
  }

  render() {
    //return (
    //  React.createElement('div', {},
    //    React.createElement('p', {}, `player name: ${this.player.name}`),
    //    React.createElement('p', {}, `player ticks: ${this.player.ticks_epoch}`)
    //  )
    //);
    return React.createElement(PlayerInfo, { player: this.state.player });
  }
}
*/

/*
const PlayerInfo = props => {
  return (
    React.createElement('div', {},
      React.createElement('p', {}, `player name: ${props.player.name}`),
      React.createElement('p', {}, `player ticks: ${props.player.ticks_epoch}`)
    )
  );
}
*/

class PlayerClient extends KeyboardControllableMixin(Object) {
  constructor(
      { account_id = null, uuid = null, name = 'player_client', ticks_epoch = 0, x = 1, y = 1 } =
      { account_id: null, uuid: null, name: 'player_client', ticks_epoch: 0, x: 1, y: 1 }) {
    super({ uuid, name, x, y });
    //super();

    this.account_id = account_id;

  };
};


//import ControllableMixin from './ControllableMixin.js';
//import TangibleMixin from './TangibleMixin.js';
//class PlayerClient {
/*
class PlayerClient extends KeyboardControllableMixin(Object) {
//class PlayerClient extends ControllableMixin(Object) {
//class PlayerClient extends TangibleMixin(Object) {
  constructor() {
    super();
  }
}
*/

//class PlayerInfo extends KeyboardControllableMixin(React.Component) {
class PlayerInfo extends React.Component {
  constructor() {
    super();
    this.state = { player: {} };
  };

  componentDidMount() {
    console.debug('Component mounted.');
    fetchPlayer(player => {
      console.debug('Setting player', player);
      this.setState({ player: player });
    });
    let self = this;
    setInterval(function() {
      self.tick();
    }, 1000);
  }

  tick() {
    console.debug('React component ticking.');
    player = fetchPlayer();
    this.setState({ player: player });
  }

  render() {
    return (
      React.createElement('div', {},
        React.createElement('p', {}, `player name: ${this.state.player.name}`),
        React.createElement('p', {}, `player ticks: ${this.state.player.ticks_epoch}`)
      )
    );
  } 
}


/*
class Tile {
  constructor({ walkable = true } = 
              { walkable: true }) {
    this.walkable = walkable;
  }

  draw() {};

}
*/

class WorldMap extends React.Component {
  constructor() {
    super();
    this.state = { tiles: [] };
    this.tile_size = 8;
    //this.canvas = document.createElement('canvas');
    this.fill_style = 'rgba(255, 0, 0, 0.6)';

  }

  componentDidMount() {
    console.debug('WorldMap mounted.');
    this.canvas = this.refs.canvas;
    //this.canvas = "canvas";
    this.ctx = this.canvas.getContext("2d");

    let _tiles = fetchTiles();
    let _players = fetchPlayers();
    this.setState({ tiles: _tiles, players: _players });

    /*
    fetchTiles(tiles => {
      console.debug('Setting tiles', tiles);
      this.setState({ tiles: tiles });
    });
    */

    let self = this;
    setInterval(function() {
      self.tick();
    }, 1000);
  }

  tick() {
    console.debug('Ticking WorldMap');
    let tiles = fetchTiles();
    let players = fetchPlayers();
    this.setState({ tiles: tiles, players: players});
    //this.draw();
  }

  componentDidUpdate() {
    console.debug('Updating world map', this);
    //let tiles = fetchTiles();
    //this.setState({ tiles: tiles });
    this.draw();
  }

  draw() {
    console.debug('Drawing map', this);
    this.ctx.rect(0, 0, this.width, this.height);
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.6)';
    //for (let width=0; width < this.map.width; width++) {
    //  for (let height=0; height < this.map.height; height++) {
    let tiles = this.state.tiles;
    if (tiles) {
      //for (let tile of Object.values(this.state.tiles)) {
      for (let tile of Object.values(tiles)) {
        //let tile = this.tiles[width][height];
        //tile.draw();
        //if (tile.walkable === false) {
        //if (tile.walkable) {
          //console.debug('drawing tile', tile);
        this.drawTile(tile);
        //}
      }
    }
    let players = this.state.players;
    if (players) {
      for (let player of players) {
        console.debug('Drawing player', player);
        this.drawTile(player);
      }
    }
  }

  drawTile(tile) {
    //this.ctx.fillStyle = 'rgba(255, 0, 0, 0.6)';
    this.ctx.fillStyle = tile.fill_style;
    this.ctx.fillRect(
      tile.x * this.tile_size, tile.y * this.tile_size,
      this.tile_size, this.tile_size);
    this.ctx.fillStyle = this.fill_style;
  }

  drawTileV1(tile) {
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.6)';
    this.ctx.fillRect(
      tile.x * this.tile_size, tile.y * this.tile_size,
      this.tile_size, this.tile_size);
  }

  render() {
    return (
      React.createElement('canvas',
          { ref: "canvas", width: this.width, height: this.height }));
  }

}
    
      



/*
ReactDOM.render(
  //element,
  //document.getElementById('root')
  React.createElement('p', {}, `hello ${name}`),
  React.createElement('p', {}, `player: ${player}`),
  //React.createElement('p', {}, `player name: ${player.name}`),
  document.getElementById('react_test')
);
*/



//var app = angular.module('Clickmer', []);
//app.controller('Controller', function($scope) {

let socket = io();

//async function buildPlayerInfo() {

//async function connectPlayer() {

  //var player = { name: 'test' };
  /*
  let player = await new Promise((resolve, reject) => {
    try {
      socket.emit('connect_player', null, function(response) {
        console.debug('connect_player response: ', response);
        resolve(response);
      });
    } catch(error) {
      console.error(error);
    };
  });
  */


  //let test = new Test();
  /*
  let player_info = new PlayerInfo(
    { root: document.getElementById('react_test'), player: player });
  console.debug('player info', player_info); 
  */

  //return player_info;

  /*
  setInterval(function() {
    console.debug('Updating DOM with React.', player_info);
    ReactDOM.render(
      player_info.render(),
      document.getElementById('react_test')
    );
  }, 1000);
  */

//let player_info = buildPlayerInfo();

var players = null;
function fetchPlayers() {
  console.debug('Fetch players called.', players);
  return players;
}
var player = null;
function fetchPlayer() {
  console.debug('Fetch player called.', player);
  return player;
}
let tiles = null;
function fetchTiles() {
  console.debug('Fetch tiles called.', tiles);
  return tiles;
}
let account_id = null;
function fetchAccountId() {
  console.debug('Fetch account_id called', account_id);
  return account_id
};
//let controller = new Controller({ player: player });



socket.on('state', function(state) {
  console.debug('Got state from server.', state);
  //tiles = state.tiles
  /*
  for (let player of players) {
    if (player.socket_id = socket.id) {
      player_info.update(player);
    };
  };
  */
  //let account_id = socket.handshake.session.account_id;
  //let account_id = socket.session.account_id;
  if (account_id) {
    console.debug(`Getting player with account id <${account_id}>.`, state);
    //player = state.players[socket.id];
    //let player_state = state.player_states[socket.id];
    //let account_id = getAccountIdFromUsername(socket.handshake.session.username);
    var player_state = state.player_states[account_id];
    console.debug(`Got player_state with account id <${account_id}>.`, player_state);
    //console.debug('Got player_state', player_state);
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
  let _player = player_state.player;
  if (!player) {
    player = new PlayerClient({ account_id: _player.account_id, uuid: _player.uuid, name: _player.name, ticks_epoch: _player.ticks_epoch, x: _player.x, y: _player.y });
  } else {
    player.uuid = player_state.player.uuid;
    player.ticks_epoch = player_state.player.ticks_epoch;
  }


  //player = player_state.player;
  //player.x = player_info.x;
  //player.y = player_info.y;

  /*
  if (!player) {
    player = new (player_state.player);
  } else {
    player.setState
  */


  console.debug('Got player from player state', player);
  account_id = player.account_id;
  tiles = createTiles(player_state.player_surroundings);
  console.debug('Got tiles from player state', tiles);

  //player_info.player = player;


  //console.debug('Updating DOM with React.', player_info);
  /*
  ReactDOM.render(
    player_info.render(),
    document.getElementById('react_test')
  );
  ReactDOM.render(
    player_info.render(),
    document.getElementById('react_test_mirror')
  );
  */
  //player_info.render();

  ReactDOM.render(
    React.createElement(PlayerInfo, null),
    document.getElementById('react_test'));

  ReactDOM.render(
    React.createElement(WorldMap, null),
    document.getElementById('react_map'));


  // Issue a response
  socket.emit('state', player);

});


function createTiles(tiles_data) {
  let tiles = [];
  for (let tile_data of tiles_data) {
    //let tile = new TileType(tiles_data);
    let tile = new TileType(tile_data);
    tiles.push(tile);
  }
  return tiles;
}


console.info('Finished running main.js');
