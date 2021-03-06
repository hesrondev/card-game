var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io')(server),
    index = require('./routes/index'),
    game = require('./utils/game');

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// set static folder

app.use(express.static(path.join(__dirname, 'client')));

// body paser MV

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/', index);




var port = 3000;

game.init();

io.sockets.on('connection', function (socket) {

    socket.on('pseudo', function (pseudo) {
        socket.pseudo = pseudo;
        console.log(pseudo + ' connecter');
        game.addPlayer(pseudo);
        socket.emit('game', game.game());
        socket.broadcast.emit('game', game.game());
    });
    socket.on('replay', function (message) {
        console.log("replay");
        game.init();
        socket.emit('replay', game.game());
        socket.broadcast.emit('replay',game.game());
    });


    socket.on('game', function (message) {
        console.log("il retourne une carte");
        game.setGame(message);
        if(game.playerHaveReturnAllCard()) {game.centerCard(); }
        socket.emit('game', game.game());
        socket.broadcast.emit('game',game.game());
    });

    socket.on('centerCard', function (message) {
        console.log("il retourne une carte au centre ");
        game.setGame(message);
        if(game.game().centerCards.length < 12 )  game.centerCard();
        socket.emit('game', game.game());
        socket.broadcast.emit('game',game.game());
    });

});

server.listen(port, function () {
    console.log('serveur starterd on port' + port);
});
