app.controller('GameController', function ($scope, GameService) {

    var mypseudo = null;
    var currentPlayer = null;

    GameService.on('game', function (data) {

        var game = data;

        placePlayers(data.players);

        $scope.centerCards = game.centerCards;
    });

    $scope.sendPseudo = function (pseudo) {
        mypseudo = pseudo;
        GameService.emit('pseudo', pseudo);
    };

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


    // Get current player

    function getCurrentPlayer(players) {
        players.forEach(function (e) {
            if (e.pseudo == mypseudo)
                return e;
        });
    }

    // Place players {

    function placePlayers(players) {

        // Get current player

        $scope.player2 = getCurrentPlayer(players);
        drop(players, $scope.player2);

        $scope.player1 = players[0];
        drop(players, $scope.player1);

        $scope.player4 = players[0];
        drop(players, $scope.player4);

        $scope.player3 = players[0];
        drop(players, $scope.player3);
    }


    function drop(array, e) {
        var index = array.indexOf(e);
        if (index > -1)
            array.splice(index, 1);
    }
})
