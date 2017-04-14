module.exports = {
  Player: Player
};

function Player( id, name, avatar, cards, state, glassCount ) {

    this.id         = id ;
    this.name       = name ;
    this.avatar     = avatar;
    this.cards      = cards;
    this.state      = state;
    this.glassCount = glassCount;

};