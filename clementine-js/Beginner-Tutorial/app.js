'use strict';

var express = require('express');
var mongo = require('mongodb').MongoClient;

var routes = require('./app/routes/index.js');
var app = express();
var port = process.env.PORT || 3000;

mongo.connect('mongodb://localhost:27017/clementinejs', function(err, db) {
  if (err) {
    throw new Error('Database failed to connect');
  }
  else {
    console.log('Database connection successfully established');
  }

  app.use('/public', express.static(process.cwd() + '/public'));

  app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

  routes(app, db);

  app.listen(port, function(err, res) {
    if (err) {
      console.log('Error happened during server startup:', err);
    }
    else {
      console.log('Server started successfully');
    }
  });

});