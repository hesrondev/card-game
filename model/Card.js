module.exports = {
  Card: Card
};

function Card( id, state, sign, number,img ) {
  
    this.id     = id ;// 1 TO 52
    this.state  = state ;
    this.sign   = sign;
    this.number = number;
    this.img    = img;


};