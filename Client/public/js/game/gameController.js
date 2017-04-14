app.controller('GameController', function ($scope, GameService) {



    GameService.on('game', function (data) {

        console.log('Received');

        var game = data.game;

        $scope.player1 = game.players[0];
        $scope.player2 = game.players[1];
        $scope.player3 = game.players[2];
        $scope.player4 = game.players[3];

        $scope.centerCards = game.centerCards;
    });

    $scope.sendPseudo = function (pseudo) {
        GameService.emit('pseudo', pseudo);
    };




    function update() {

    }

    // Reveal card
    $scope.returnCard = function (card) {
        card.state = 1;
    }


    // Get card img

    $scope.getCardImg = function (card) {

        var root = 'public/img/';

        if (!card.state) {
            return root + 'card-reverse.jpg';
        } else {
            return root + card.img;
        }
    }
})
