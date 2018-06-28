'use strict';

function clickHandler (db) {
  var clicks = db.collection('clicks');

  return {
    getClicks: getClicks,
    addClick: addClick,
    resetClicks: resetClicks
  }

  function getClicks (req, res) {
    var clickProjection = {
      '_id': false
    };

    clicks.findOne({}, clickProjection, function(err, result) {
      if (err) {
        throw new Error('An error happened getting data from the DB');
      }

      if (result) {
        res.json(result);
      }
      else {
        clicks.insert({
          'clicks': 0
        }, function(err) {
          if (err) {
            throw new Error('An error happened inserting initial value to DB');
          }

          clicks.findOne({}, clickProjection, function(err, doc) {
            if (err) {
              throw new Error('An error happened getting data from the DB');
            }

            if (doc) {
              res.json(doc);
            }
          });
        });
      }
    });
  };

  function addClick (req, res) {
    clicks
    .findAndModify(
      {},
      { '_id': 1 },
      { $inc: { 'clicks': 1 } },
      function (err, result) {
        if (err) {
          throw new Error('Error happened incrementing the click');
        }
        res.json(result);
      }
    );
  };

  function resetClicks (req, res) {
    clicks
    .update(
      {},
      { 'clicks': 0 },
      function (err, result) {
        if (err) {
          throw new Error('Error happened updating clicks');
        }
        res.json(result);
      }
    );
  };

}

module.exports = clickHandler;