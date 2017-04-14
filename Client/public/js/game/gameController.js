app.controller('GameController', function ($scope, GameService) {

    $scope.player = {
        pseudo: null,
        isConnected: false
    };

    $scope.sendPseudo = function (pseudo) {

        $scope.player = {
            isConnected: true,
            pseudo: pseudo
        };

        console.log('CU: ' + JSON.stringify($scope.player));

        GameService.emit('pseudo', pseudo);
    };


    GameService.on('game', function (data) {

        var game = data;

        placePlayers(data.players);

        $scope.centerCards = game.centerCards;
    });

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

        console.log('Finding player... ');

        var result;

        players.forEach(function (e) {
            if (e.name === $scope.player.pseudo) {
                result = e;
            }
        });

        return result;
    }

    // Place players {

    function placePlayers(players) {

        // Get current player

        var cp = getCurrentPlayer(players);

        console.log(cp);

        if (cp) {
            console.log(cp);
            $scope.player2 = cp;
            drop(players, $scope.player2);
            console.log(players);
        }


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
