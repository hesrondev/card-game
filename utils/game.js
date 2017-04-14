'use strict';

var Random  = require('random-js'),
    Card    = require('../model/Card').Card,
    Game    = require('../model/Game').Game,
    Player  = require('../model/Player').Player;


module.exports = {
  init: init
};

var game ;

function init() {
  game = new Game([], [], 1);  
  AddPlayer("jean");
  AddPlayer("luc");
  AddPlayer("julie");
  AddPlayer("justine");
}


function AddPlayer(playerName){

  game.players.push( new  Player( game.players.length, playerName, 'https://api.adorable.io/avatars/136/salut.png',[ drawCard (cards), drawCard (cards), drawCard (cards), drawCard (cards) ], 1, 0 ) );

}

function drawCard (card){

  var random = new Random(Random.engines.mt19937().seedWithArray([0x12345678, 0x90abcdef]));
  var choix = (random.integer( 0, (card.length-1) ) );
  choix = 1;
  var cardDraw = card[choix];
  card.splice(choix,1);
  return cardDraw;

}

function playerHaveCard( player, selectedCard ){
  var cardPlayer = player.cards;
  var i = 0;
  cardPlayer.forEach(function(card) {
    if(selectedCard == card.number) i++ ;
  });
  return i;
}


var cards = [
  new Card(  1, 0, 'T',  2, '2_carreau.png' ),
  new Card(  2, 0, 'H',  2, '2_coeur.png'   ),
  new Card(  3, 0, 'P',  2, '2_pique.png'   ),
  new Card(  4, 0, 'C',  2, '2_treffle.png' ),
  new Card(  5, 0, 'T',  3, '3_carreau.png' ),
  new Card(  6, 0, 'H',  3, '3_coeur.png'   ),
  new Card(  7, 0, 'P',  3, '3_pique.png'   ),
  new Card(  8, 0, 'C',  3, '3_treffle.png' ),
  new Card(  9, 0, 'T',  4, '4_carreau.png' ),
  new Card( 10, 0, 'H',  4, '4_coeur.png'   ),
  new Card( 11, 0, 'P',  4, '4_pique.png'   ),
  new Card( 12, 0, 'C',  4, '4_treffle.png' ),
  new Card( 13, 0, 'T',  5, '5_carreau.png' ),
  new Card( 14, 0, 'H',  5, '5_coeur.png'   ),
  new Card( 15, 0, 'P',  5, '5_pique.png'   ),
  new Card( 16, 0, 'C',  5, '5_treffle.png' ),
  new Card( 17, 0, 'T',  6, '6_carreau.png' ),
  new Card( 18, 0, 'H',  6, '6_coeur.png'   ),
  new Card( 19, 0, 'P',  6, '6_pique.png'   ),
  new Card( 20, 0, 'C',  6, '6_treffle.png' )

];