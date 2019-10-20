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
socket.on('state', function(players) {
  console.debug('Got state from server.', players);
  /*
  for (let player of players) {
    if (player.socket_id = socket.id) {
      player_info.update(player);
    };
  };
  */
  console.debug(`Getting player with socket id <${socket.id}>.`, players);
  player = players[socket.id];
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

});

console.info('Finished running main.js');
