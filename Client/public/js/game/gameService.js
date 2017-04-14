app.service('gameService', function($q, $http) {
 
  this.conexionSocket = function(){
    var socket = io.connect('http://localhost:3000');
      socket.on('message', function(message) {
      alert('Le serveur a un message pour vous : ' + message);
      socket.emit('petit_nouveau', "julien");
      socket.emit('message', 'Salut serveur, ça va ?');
    });
  }

});