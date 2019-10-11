// vim: set ft=javascript:


//const PlayerView = require('../classes/PlayerView.js');
import PlayerView from './classes/PlayerView.js';


console.log('test');

//class View {};

//class PlayerView extends View {};

//var player_view = new PlayerView();

//var player_view = new PlayerView({ uuid: 'test' });

//var player_view;

function getCookie(name) { 
  var cookies = '; ' + document.cookie; 
  console.info('cookies', cookies);
  var splitCookie = cookies.split('; ' + name + '='); 
  console.info('splitCookie', splitCookie);
  if (splitCookie.length == 2) {
    return splitCookie.pop();
  }
}


var app = angular.module('Clickmer', []);
app.controller('Controller', function($scope) {
  //$scope.player_view = player_view;
  //$scope.player_view = player_view;
  var socket = io();
  //if getCookie('cookie1');
  //let cookie = getCookie('cookie1');
  //console.info('cookie', cookie);

  let saved_player = getCookie('cookie1');
  let player_view;
  if (saved_player) {
    console.info('saved player', saved_player);
    socket.emit('load_player', saved_player, function(response) {
      console.debug('response', response);
      player_view = new PlayerView(response);
      $scope.player_view = player_view;
      $scope.$apply();
    }); 
  } else {

    socket.emit('new_player', null, function(response) {
      console.debug('response', response);
      player_view = new PlayerView(response);
      document.cookie = 
        `cookie1=${player_view.socket_id}; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/`
        //`cookie1=test123; expires=Fri, 19 Jun 2020 20:47:11 UTC; path=/`
      //player_view.update(response);
      //console.log(player_view);
      $scope.player_view = player_view;
      $scope.$apply();
    });
  };
  //$scope.player_view = player_view;
  //i$scope.$apply();
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
