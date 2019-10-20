console.info('Running main.js');


const name = 'test';
//var player = { 'name': 'dummyplayer' };
//const element = <p>hello {name}</p>;

class PlayerInfo extends React.Component {
  constructor(
      { player, props, context } = 
      {} ) {
    console.debug('Contstructing PlayerInfo with arguments', arguments);
    super(props, context);
    
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
  };
};

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

async function buildPlayerInfo() {

  //var player = { name: 'test' };
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


  //let test = new Test();
  let player_info = new PlayerInfo({ player: player });
  console.debug('player info', player_info); 

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
    player_info.player = player;

    console.debug('Updating DOM with React.', player_info);
    ReactDOM.render(
      player_info.render(),
      document.getElementById('react_test')
    );
    ReactDOM.render(
      player_info.render(),
      document.getElementById('react_test_mirror')
    );
  });

};

buildPlayerInfo();

console.info('Finished running main.js');
