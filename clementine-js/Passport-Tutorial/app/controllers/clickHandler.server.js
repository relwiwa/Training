'use strict';

var Users = require('../models/users.js');

function ClickHandler () {

  return {
    getClicks: getClicks,
    addClick: addClick,
    resetClicks: resetClicks
  }

  function getClicks (req, res) {
    console.log('req.user.github.id', req.user.github.id);

    Users.findOne({
      'github.id': req.user.github.id
    }).exec(function(err, result) {
      if (err) {
        throw new Error('An error happened getting data from the DB');
      }
      console.log('clicks sent', result);
      res.json(result.nbrClicks);
    });
  };

  function addClick (req, res) {
    Users.findOneAndUpdate(
      {
        'github.id': req.user.github.id
      },
      { $inc: { 'nbrClicks.clicks': 1 }}
    ).exec(function (err, result) {
      if (err) {
        throw new Error('Error happened incrementing the click');
      }
      console.log('clicks ++', result);
      res.json(result.nbrClicks);
    });
  };

  function resetClicks (req, res) {
    Users.findOneAndUpdate(
      {
        'github.id': req.user.github.id
      },
      { 'nbrClicks.clicks': 0 }
    ).exec(function (err, result) {
      if (err) {
        throw new Error('Error happened updating clicks');
      }
      console.log("clicks reset");
      res.json(result.nbrClicks);
    });
  };

}

module.exports = ClickHandler;