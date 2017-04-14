app.controller( 'gameController', [ 'Messages' , '$scope', 'gameService', function( Messages, $scope,gameService ) {
    // Message Inbox
    $scope.messages = [];
    // Receive Messages
    Messages.receive(function(message) {
        $scope.messages.push(message);
    });
    // Send Messages
    $scope.send = function() {
        Messages.send({ 
            data: $scope.textbox 
        });
    };
    gameService.conexionSocket();
}]);