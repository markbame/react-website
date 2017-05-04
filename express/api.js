global.site = 'https://dev.loc.com'

var express = require('express');
var app = express();

var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var validate = require('express-validation');

var jwt = require('jsonwebtoken');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect("mongodb://mongo:27017/abenyu");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('db connected') });

app.use( function( req, res, next ) {
    res.header( "Access-Control-Allow-Origin", "*" );
    res.header( "Access-Control-Allow-Methods", "GET, PUT, POST, DELETE" );
    res.header( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, cache-control" );
    next();
});

app.use('/static', express.static('./express/public'))
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

function authorizationDecode(req,res, next) {
  var token = req.headers.authorization;
  jwt.verify(token, key, function(err, decoded) {
    console.log(decoded.userid)
  });
  next();
}

function authorizationEncode(req,res, next) {
    var token = jwt.sign({ userid: '102',username: 'markbame' }, key);
    res.setHeader('Content-Type', 'application/json');
    res.send({token})
}

app.post('/upload', require('multer')({ storage: require('multer').memoryStorage() }).single('file'),
        require("./utils/s3").upload)

app.get('/delete',  require("./utils/s3").delete)

app.get('/', function( req, res, next ) {
      res.sendFile('/var/www/express/index.html');
})

app.post('/auth', function( req, res, next ) {
    authorizationEncode(req,res, next);
})

app.get('/seed',
        require("./test/seedItems").seedItems,
        require("./test/seedUsers").seedUsers)

app.get('/getusers',
        require("./modules/users/getusers").getUsers)

app.get('/getitems',
        require("./modules/items/getitems").getItems)

app.get('/getuseritems/:username',
        require("./modules/items/getuseritems").getUserItems)

app.get('/getitem/:itemid',
        require("./modules/items/getitem").getItem)

app.post('/signup',
        validate(require("./validations/signup-validation")),
        require("./modules/users/signup").saveUser)

app.get('*', function( req, res, next ) {
      res.sendFile('/var/www/express/index.html');
})

exports.api = app;
