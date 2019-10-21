// vim: set ft=javascript:

//TODO: rename "ctx"

console.info('Running main.js');


const name = 'test';
//var player = { 'name': 'dummyplayer' };
//const element = <p>hello {name}</p>;


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


class Tile {
  constructor({ walkable = true } = 
              { walkable: true }) {
    this.walkable = walkable;
  }

  draw() {};

}

class WorldMap extends React.Component {
  constructor() {
    super();
    this.state = { tiles: [] };
    this.tile_size = 4;
    //this.canvas = document.createElement('canvas');
    this.fill_style = 'rgba(255, 0, 0, 0.6)';

  }

  componentDidMount() {
    console.debug('WorldMap mounted.');
    this.canvas = this.refs.canvas;
    //this.canvas = "canvas";
    this.ctx = this.canvas.getContext("2d");

    fetchTiles(tiles => {
      console.debug('Setting tiles', tiles);
      this.setState({ tiles: tiles });
    });
    let self = this;
    setInterval(function() {
      self.tick();
    }, 1000);
  }

  tick() {
    console.debug('Ticking WorldMap');
    let tiles = fetchTiles();
    this.setState({ tiles: tiles });
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
    for (let tile of this.state.tiles) {
      //let tile = this.tiles[width][height];
      //tile.draw();
      //if (tile.walkable === false) {
      //if (tile.walkable) {
        //console.debug('drawing tile', tile);
      this.drawTile(tile);
      //}
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

var player = null;
function fetchPlayer() {
  console.debug('Fetch player called.');
  return player;
}
let tiles = null;
function fetchTiles() {
  console.debug('Fetch tiles called.', tiles);
  return tiles;
}
socket.on('state', function(state) {
  console.debug('Got state from server.', state);
  tiles = state.tiles
  /*
  for (let player of players) {
    if (player.socket_id = socket.id) {
      player_info.update(player);
    };
  };
  */
  console.debug(`Getting player with socket id <${socket.id}>.`, state);
  player = state.players[socket.id];
  console.debug('Got player', player);

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

});

console.info('Finished running main.js');
