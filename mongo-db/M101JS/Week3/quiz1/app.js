var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var port = process.env.PORT || 3000;

MongoClient.connect('mongodb://localhost:27017/crunchbase', function (err, db) {

	if (err) {
		console.log('An error happened connecting to the Database', err);
	}
	else {
		console.log("Successfully connected to MongoDB.");

		app.route('/')
		.get(function (req, res) {

			var query = {
				'founded_year': 2010
			};

			var cursor = db.collection('companies').find(query);
			cursor.project({
				'name': 1,
				'number_of_employees': 1,
				'_id': 0
			});

			cursor.forEach(
				function (doc) {
					console.log(doc.name + ' has ' + doc.number_of_employees + ' employees.');
				},
				function (err) {
					if (err === null) {
						return db.close();
					}
					else {
						console.log('An error happenend', err);
					}
				}
			);

		});

		app.use(function (req, res){
				res.sendStatus(404);
		});

		app.listen(port, function (err, res) {
			if (err) {
				console.log('Error happened during server startup:', err);
			}
			else {
				console.log('Server started successfully');
			}
		});    
	}

});