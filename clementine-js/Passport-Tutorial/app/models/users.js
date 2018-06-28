'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
  github: {
    id: String,
    displayName: String,
    username: String,
    publicRepos: Number
  },
  nbrClicks: {
    clicks: Number
  }
});

/*  Mongoose will automatically search for plural version of the
    collection name in the database 'User' -> users */
module.exports = mongoose.model('User', User);