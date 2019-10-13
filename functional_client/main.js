console.log('test');


var app = angular.module('Clickmer', []);
app.controller('Controller', function($scope) {

  let socket = io();

  socket.emit('connect_player', null, function(response) {
    console.debug(response);
  
    let player_name = response;
    $scope.player_name = player_name;
    $scope.$apply();
  });
});


console.log('test2');
