<<<<<<< HEAD
var express = require('express'),
    stylus = require('stylus'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
  return stylus(str).set('filename', path);
}

app.configure(function() {
  app.set('views', __dirname + '/server/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(stylus.middleware(
    {
      src: __dirname + '/public',
      compile: compile
    }
  ));
  app.use(express.static(__dirname + '/public'));
});

mongoose.connect('mongodb://localhost/bets');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('bets db opened');
});

var messageSchema = mongoose.Schema({message: String}, {collection:'message'});
var Message = mongoose.model('message', messageSchema);
//Message.create({message:'Stas'}).then(console.log.bind(console, "Ok!"));
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
    console.error(messageDoc);
    mongoMessage ="sd"; //messageDoc.message;
});

//Message.findOne({message:'oleg'}).exec(function(err, messageDoc) {
//    console.error(messageDoc);
//  mongoMessage ="sd"; messageDoc.message;
//});

app.get('/templates/:partialPath', function(req, res) {
  res.render('templates/' + req.params.partialPath);
});

app.get('*', function(req, res) {
  res.render('index', {
    mongoMessage: mongoMessage
  });
});

var port = 80;
app.listen(port);
console.log('Listening on port ' + port + '...');
=======
/**
 * Created by oleg on 06.05.14.
 */
sdsdsd
sdsdsdffghg
sdsdsd
>>>>>>> 2a56116f3b147b69d55f15545c12843723274737
