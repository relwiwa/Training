var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err !== null) {
      console.log('There was an error reading the file', err);
    }
    else {
      res.send(JSON.parse(data));
      res.end();
    }
  });
});

app.listen(process.argv[2]);