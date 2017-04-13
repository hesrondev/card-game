module.exports = {
  Game : Game
};

function Game( id, state, sign, number ) {
  
    this.id     = id ;// 1 TO 52
    this.state  = state ;
    this.sign   = sign;
    this.number = number;


};