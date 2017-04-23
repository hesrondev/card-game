app.controller('GameController', function ($scope, GameService, $rootScope) {

    var game = {};


    $scope.player = {
        pseudo: null,
        isConnected: false
    };

    $scope.sendPseudo = function (pseudo) {

        $scope.player = {
            isConnected: true,
            pseudo: pseudo
        };
        
        $rootScope.pseudo = pseudo; 
        console.log('CU: ' + JSON.stringify($scope.player));

        GameService.emit('pseudo', pseudo);
    };


    GameService.on('game', function (data) {

        game = data;

        placePlayers(data.players);

        $scope.centerCards = game.centerCards;
    });

    // Reveal card
    $scope.returnCard = function (card) {
        card.state = 1;
        var cp = getCurrentPlayer(game.players);
        ChangeStateCard(card,cp.cards);
         GameService.emit('game', game);
    }
    $scope.returnCardCenter = function(card){ 
        ChangeStateCard(card,game.centerCards);
        GameService.emit('centerCard', game);
    }

    function ChangeStateCard (cardselected,cards){  
        cards.forEach(function(card){
            if(card.id == cardselected.id )  card.state = 1;
        });

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
    
        var result;

        players.forEach(function (e) {
            if (e.name === $scope.player.pseudo) {
                result = e;
            }
        });

        return result;
    }

    // Place players {

    function placePlayers(playerArray) {
   
         var players = JSON.parse(JSON.stringify(playerArray));
        // Get current player

        var cp = getCurrentPlayer(players);

        if (cp) {
            $scope.player2 = cp;
            drop(players, $scope.player2);
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
});
