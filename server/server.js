var express = require('express');
var app = express();
var mongoose = require('mongoose');	
var bodyParser = require('body-parser');
var path = require('path');

var dir = path.resolve(__dirname + '/../client');
var morgan = require('morgan');
// var someRouter = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
// mongoose.connect()

app.use(morgan('dev'));
app.use(express.static(dir));

// app.use('some route', some Router);

var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Student Confusion app is listening at http://%s:%s', host, port);

})


// require('some router path')('the name of the router');
