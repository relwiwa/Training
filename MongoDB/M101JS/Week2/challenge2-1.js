db.movieDetails.updateOne({
  "_id": ObjectId("569190cc24de1e0ce2dfcd5a")

},
{
  $set: {
    "awards.oscars" : [
      {
        "award": "bestAnimatedFeature",
        "result": "won"
      }, {
        "award": "bestMusic",
        "result": "won"
      }, {
        "award": "bestSoundEditing",
        "result": "nominated"
      }, {
        "award": "bestScreenplay",
        "result": "nominated"
      }
    ]
  }
})

db.movieDetails.find({
  "awards.oscars.award": "bestPicture"
}).pretty()