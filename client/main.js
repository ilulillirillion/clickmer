console.info('Running main.js');


var app = angular.module('Clickmer', []);
app.controller('Controller', function($scope) {

  let socket = io();

  socket.emit('connect_player', null, function(response) {
    console.debug('connect_player response: ', response);
  });

});


console.info('Finished running main.js');
