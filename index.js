var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var profileCtrl = require('./controllers/profileCtrl');
var userCtrl = require('./controllers/userCtrl');

var app = express();
var port = 9999;
var corsOptions = {
  origin: 'http://localhost:9999'
};

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(cors(corsOptions));
app.use(session({ secret: 'config.sessionSecret' }));
app.use(express.static(__dirname + './public'));

app.post('/api/login', userCtrl.login);
app.get('/api/profiles', profileCtrl.getFriends);


app.listen(port, function() {
    console.log('Listening to port:', port);
});
