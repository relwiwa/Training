'use strict';

var Clicks = require('../models/clicks.js');

function ClickHandler () {

  return {
    getClicks: getClicks,
    addClick: addClick,
    resetClicks: resetClicks
  }

  function getClicks (req, res) {

    Clicks.findOne({}).exec(function(err, result) {
      if (err) {
        throw new Error('An error happened getting data from the DB');
      }

      if (result) {
        res.json(result);
      }
      else {
        var newDoc = new Clicks({
          'clicks': 0
        });
        newDoc.save(function(err, doc) {
          if (err) {
            throw new Error('An error happened inserting initial value to DB');
          }
          
          res.json(doc);
        });
      }
    });
  };

  function addClick (req, res) {
    Clicks.findOneAndUpdate(
      {},
      { $inc: { 'clicks': 1 }}
    ).exec(function (err, result) {
      if (err) {
        throw new Error('Error happened incrementing the click');
      }
      res.json(result);
    });
  };

  function resetClicks (req, res) {
    Clicks.findOneAndUpdate(
      {},
      { 'clicks': 0 }
    ).exec(function (err, result) {
      if (err) {
        throw new Error('Error happened updating clicks');
      }
      res.json(result);
    });
  };

}

module.exports = ClickHandler;