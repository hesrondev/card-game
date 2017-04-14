var express    = require('express');
var path       = require('path');
var bodyParser = require('body-parser');
var index      = require('./routes/index');
var game   = require('./utils/game');


var port = 3000 ;

var app = express();

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

game.init();


app.listen(port,function(){
    console.log('serveur starterd on port'+port);
});