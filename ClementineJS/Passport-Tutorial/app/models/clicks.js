'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Click = new Schema(
  {
    clicks: Number
  }, {
    versionKey: false
  }
);

/*  Mongoose will automatically search for plural version of the
    collection name in the database 'Click' -> clicks */
module.exports = mongoose.model('Click', Click);