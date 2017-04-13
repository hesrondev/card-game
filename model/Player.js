module.exports = {
  Player: Player
};

function Player( id, name, cards, state, glassCount ) {

    this.id    = id ;
    this.name  = name ;
    this.cards = cards;
    this.state = state;
    this.glassCount = glassCount;

};