app.controller( 'gameController', [ 'Messages', '$scope', function( Messages, $scope ) {
    
    // Message Inbox
    $scope.messages = [];
    Messages.user({ id: 1, name : "Toto" });

    // Receive Messages
    Messages.receive(function(message) {
        $scope.messages.push(message);
    });

    // Send Messages
    $scope.send = function() {
        Messages.send({ 
            data: $scope.textbox 
        });
        $scope.textbox="";
    };
}]);