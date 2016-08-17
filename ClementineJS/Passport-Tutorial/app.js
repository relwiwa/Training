'use strict';

var express = require('express');
var mongoose = require('mongoose');

var routes = require('./app/routes/index.js');
var app = express();
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost:27017/clementinejs');

app.use('/public', express.static(process.cwd() + '/public'));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

routes(app);

app.listen(port, function(err, res) {
  if (err) {
    console.log('Error happened during server startup:', err);
  }
  else {
    console.log('Server started successfully');
  }
});