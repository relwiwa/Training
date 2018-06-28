var fs = require('fs');

var file = fs.readFile(process.argv[2], handleFile);

function handleFile(err, data) {
  if (err !== null) {
    console.log('Error reading file asynchronously:', err);
  }
  else {
    var lines = data.toString().split('\n');
    console.log(lines.length - 1);
  }
}