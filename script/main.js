//import Game from '../classes/Game.js';
//import Actor from '../classes/Actor.js';
import Game from './model/classes/Game.js';


var app = angular.module('Clickmer', []);
app.controller('Controller', function($scope) {
  $scope.test2='test2';
  $scope.game = new Game();
});


let game = new Game();
game.test();

/*
window.dispatchEvent = function(event_name) {
  game.dispatchEvent(event_name);
};

game.registerEvent('test event');
game.addEventListener('test event', function() {
  console.debug('test event fired');
});
game.dispatchEvent('test event');


let actor = new Actor();
*/
