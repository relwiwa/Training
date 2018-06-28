var fs = require('fs');
var path = require('path');

function filterDirectory(directory, extension, callback) {
  fs.readdir(directory, function(err, data) {
    if (err !== null) {
      return callback(err);
    }
    else {
      var files = [];
      for (var i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === '.' + extension) {
          files.push(data[i]);
        }
      }
      return callback(null, files);
    }
  });
}

module.exports = filterDirectory;