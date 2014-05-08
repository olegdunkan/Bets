/**
 * Created by oleg on 06.05.14.
 */
var express = require('express'),
    stylus = require('stylus');

var app = express();

function compile(str, path) {
    console.log(str);
    return stylus(str).set('filename', path);
}

app.configure(function() {
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'jade');
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }));
    app.use(express.static(__dirname + '/public'));
    app.get('*', function(req, res) {
       res.render('index');
    });
});

app.listen(80);