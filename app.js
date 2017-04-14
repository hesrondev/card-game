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
//app.listen(port2,function(){
//    console.log('serveur starterd on port'+port2);
//});
game.init();

io.sockets.on('connection', function (socket) {
	socket.emit('message', 'Vous êtes bien connecté !');
	socket.broadcast.emit('message', 'Un autre client vient de se connecter !');

	socket.on('message', function (message) {
		console.log('Un client me parle ! Il me dit : ' + message);
	});	
    
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session
    socket.on('petit_nouveau', function(pseudo) {
        socket.pseudo = pseudo;
    });

    // Dès qu'on reçoit un "message" (clic sur le bouton), on le note dans la console
    socket.on('message', function (message) {
        // On récupère le pseudo de celui qui a cliqué dans les variables de session
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    }); 



});

server.listen(port,function(){
    console.log('serveur starterd on port'+port);
});