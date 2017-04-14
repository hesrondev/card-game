app.service('gameService', function($q, $http) {
 
  this.conexionSocket = function(){
    var socket = io.connect('http://localhost:3000');
    // pseudo 
    socket.emit('pseudo', "julien");
    // recevoir la game 
    socket.on('game', function(message) {
      alert('Le serveur a un message pour vous : ' + message); 
     // socket.emit('message', 'Salut serveur, ça va ?');
    });
  }

});