module.exports = {
  Game : Game
};

function Game( players, centerCards, state ) {

    this.players     = players;
    this.centerCards = centerCards;
    this.state       = state;

};