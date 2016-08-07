var filterDirectory = require('./filter-directory');

var directory = process.argv[2];
var extension = process.argv[3];

filterDirectory(directory, extension, handleResponse);

function handleResponse(err, data) {
  if (err !== null) {
    console.log('There was an error filtering the directory', err);
  }
  else {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  }
}