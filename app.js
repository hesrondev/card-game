var express     = require('express'),
     path       = require('path'),
     bodyParser = require('body-parser'),
     app        = express(),
     server     = require('http').createServer(app),
     io = require('socket.io')(server)
     index      = require('./routes/index'),
     game       = require('./utils/game');

// view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// set static folder

app.use(express.static(path.join(__dirname,'client')));

// body paser MV

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',index);




var port = 3000 ;

game.init();

console.log(game.game());
io.sockets.on('connection', function (socket) {

    socket.on('pseudo', function(pseudo) {
        socket.pseudo = pseudo;
        console.log(pseudo+' connecter');
        game.addPlayer(pseudo);
        socket.broadcast.emit('game',game.game());

    });

  
    socket.on('message', function (message) {
        // On récupère le pseudo de celui qui a cliqué dans les variables de session
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    }); 



});

server.listen(port,function(){
    console.log('serveur starterd on port'+port);
});