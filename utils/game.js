'use strict';

var Random  = require('random-js'),
    Card    = require('../model/Card').Card,
    Game    = require('../model/Game').Game,
    Player  = require('../model/Player').Player;


module.exports = {
  init                    : init,
  game                    : game,
  addPlayer               : addPlayer,
  setGame                 : setGame,
  centerCard              : centerCard,
  playerHaveReturnAllCard : playerHaveReturnAllCard
};

var game ;

function init() {
  game = new Game([], [], 1);  
}

function game(){
  return game;
}
function setGame(games){
  game = games;
}


function addPlayer(playerName){

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

function centerCard() {
  var card = drawCard (cards);
  game.centerCards.push(card);

}


function playerHaveReturnAllCard(){
  var needreturnCard = true;
  game.players.forEach(function(player){
    player.cards.forEach(function(card){
      if(card.state == 0) needreturnCard = false;
    });
  });
  return needreturnCard;
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
  new Card(  1, 0, 'T',  2, '2_carreau.png'     ),
  new Card(  2, 0, 'H',  2, '2_coeur.png'       ),
  new Card(  3, 0, 'P',  2, '2_pique.png'       ),
  new Card(  4, 0, 'C',  2, '2_treffle.png'     ),
  new Card(  5, 0, 'T',  3, '3_carreau.png'     ),
  new Card(  6, 0, 'H',  3, '3_coeur.png'       ),
  new Card(  7, 0, 'P',  3, '3_pique.png'       ),
  new Card(  8, 0, 'C',  3, '3_treffle.png'     ),
  new Card(  9, 0, 'T',  4, '4_carreau.png'     ),
  new Card( 10, 0, 'H',  4, '4_coeur.png'       ),
  new Card( 11, 0, 'P',  4, '4_pique.png'       ),
  new Card( 12, 0, 'C',  4, '4_treffle.png'     ),
  new Card( 13, 0, 'T',  5, '5_carreau.png'     ),
  new Card( 14, 0, 'H',  5, '5_coeur.png'       ),
  new Card( 15, 0, 'P',  5, '5_pique.png'       ),
  new Card( 16, 0, 'C',  5, '5_treffle.png'     ),
  new Card( 17, 0, 'T',  6, '6_carreau.png'     ),
  new Card( 18, 0, 'H',  6, '6_coeur.png'       ),
  new Card( 19, 0, 'P',  6, '6_pique.png'       ),
  new Card( 20, 0, 'C',  6, '6_treffle.png'     ),
  new Card( 21, 0, 'T',  7, '7_carreau.png'     ),
  new Card( 22, 0, 'H',  7, '7_coeur.png'       ),
  new Card( 23, 0, 'P',  7, '7_pique.png'       ),
  new Card( 24, 0, 'C',  7, '7_treffle.png'     ),
  new Card( 25, 0, 'T',  8, '8_carreau.png'     ),
  new Card( 26, 0, 'H',  8, '8_coeur.png'       ),
  new Card( 27, 0, 'P',  8, '8_pique.png'       ),
  new Card( 28, 0, 'C',  8, '8_treffle.png'     ),
  new Card( 29, 0, 'T',  9, '9_carreau.png'     ),
  new Card( 30, 0, 'H',  9, '9_coeur.png'       ),
  new Card( 31, 0, 'P',  9, '9_pique.png'       ),
  new Card( 32, 0, 'C',  9, '9_treffle.png'     ),
  new Card( 33, 0, 'T', 10, '10_carreau.png'    ),
  new Card( 34, 0, 'H', 10, '10_coeur.png'      ),
  new Card( 35, 0, 'P', 10, '10_pique.png'      ),
  new Card( 36, 0, 'C', 10, '10_treffle.png'    ),
  new Card( 37, 0, 'T', 11, 'valet_carreau.png' ),
  new Card( 38, 0, 'H', 11, 'valet_coeur.png'   ),
  new Card( 39, 0, 'P', 11, 'valet_pique.png'   ),
  new Card( 40, 0, 'C', 11, 'valet_treffle.png' ),
  new Card( 41, 0, 'T', 12, 'reine_carreau.png' ),
  new Card( 42, 0, 'H', 12, 'reine_coeur.png'   ),
  new Card( 43, 0, 'P', 12, 'reine_pique.png'   ),
  new Card( 44, 0, 'C', 12, 'reine_treffle.png' ),
  new Card( 45, 0, 'T', 13, 'roi_carreau.png'   ),
  new Card( 46, 0, 'H', 13, 'roi_coeur.png'     ),
  new Card( 47, 0, 'P', 13, 'roi_pique.png'     ),
  new Card( 48, 0, 'C', 13, 'roi_treffle.png'   ),
  new Card( 49, 0, 'T', 14, 'as_carreau.png'    ),
  new Card( 50, 0, 'H', 14, 'as_coeur.png'      ),
  new Card( 51, 0, 'P', 14, 'as_pique.png'      ),
  new Card( 51, 0, 'C', 14, 'as_treffle.png'    )

];