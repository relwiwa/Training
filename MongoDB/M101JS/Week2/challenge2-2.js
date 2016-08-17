db.movieDetails.updateMany({
  "imdb.votes": {
    $lt: 10000
  },
  "year": {
    $gte: 2010,
    $lte: 2013
  },
  "tomato.consensus": {
    $type: "null"
  }
},
{
  $unset: {
    "tomato.consensus": ""
  }
})

// 13 documents were updated