var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, extractFiles);

function extractFiles(err, data) {
  if (err !== null) {
    console.log('There was an error reading the directory:', err);
  }
  else {
    for (var i = 0; i < data.length; i++) {
      if (path.extname(data[i]) === '.' + extension) {
        console.log(data[i]);
      }
    }
  }
}