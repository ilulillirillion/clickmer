// vim: set ft=javascript:


//const PlayerView = require('../classes/PlayerView.js');
import PlayerView from './classes/PlayerView.js';


console.log('test');

//class View {};

//class PlayerView extends View {};

//var player_view = new PlayerView();

//var player_view = new PlayerView({ uuid: 'test' });

//var player_view;

var app = angular.module('Clickmer', []);
app.controller('Controller', function($scope) {
  //$scope.player_view = player_view;
  //$scope.player_view = player_view;
  var socket = io();
  socket.emit('new_player', null, function(response) {
    console.debug(response);
    let player_view = new PlayerView(response);
    //player_view.update(response);
    console.log(player_view);
    $scope.player_view = player_view;
    $scope.$apply();
  });
});

let player = null;
console.info(player);

/*
var socket = io();
socket.emit('new_player', null, function(response) {
  console.debug(response);
  //player_view = response;
  player_view = new PlayerView(response);
  player_view.update(response);
  console.log(player_view);
  $scope.apply();
  //player_view = new PlayerView(player);
  //return player_view;
  //player_view.update(player);
  //player_view.update({ uuid: 'test2' });
  //console.info(player_view);
  //player_view.update(player);
  //player_view.update({ uuid: 'test3' });
  //console.info(player_view);
});
*/

//console.info(player_view);

setInterval(function() {
  //console.info(player_view);
}, 1000);
  
/*
socket.on('state', function(players) {
  console.debug('Got state from server.', players);
  //player_view.update(players);
});
*/
