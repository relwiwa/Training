'use strict';

var Users = require('../models/users.js');

function ClickHandler () {

  return {
    getClicks: getClicks,
    addClick: addClick,
    resetClicks: resetClicks
  }

  function getClicks (req, res) {

    Users.findOne({
      'github.id': req.user.github.id
    }).exec(function(err, result) {
      if (err) {
        throw new Error('An error happened getting data from the DB');
      }

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
      res.json(result.nbrClicks);
    });
  };

}

module.exports = ClickHandler;