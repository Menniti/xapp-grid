// server.js

// call packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// config app to use bodyParser()
// get data from post

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080;

// ROUTES API
//=====================================
// get a instance of express Router
var router = express.Router();

// route test
router.get('/', function(req, res){
	res.json({message: 'Server working!'});
});

// routes


// REGISTER ROUTES -------------
// routes PREFIX
app.use('/api', router);


// START SERVER
// ==============================
app.listen(port);
console.log('Listen on port' + port);