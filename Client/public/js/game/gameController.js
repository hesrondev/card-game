app.controller('GameController', function ($scope, GameService) {


    // Dummy players

    var game = GameService.initGame();

    $scope.player1 = game.players[0];
    $scope.player2 = game.players[1];
    $scope.player3 = game.players[2];
    $scope.player4 = game.players[3];

    $scope.centerCards = game.centerCards;


    function update() {

    }


    // Get card img

    $scope.getCardImg = function (card) {

        var root = 'public/img/';

        if (card.state) {
            return root + card.img;
        } else {
            return root + card.img;
        }
    }

});
