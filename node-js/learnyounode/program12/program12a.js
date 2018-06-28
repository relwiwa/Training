var http = require('http');

var server = http.createServer(function(req, res) {
  var output = "";
  if (req.method !== 'POST') {
    res.end('this was not a POST request');
  }
  else {
    req.on('data', function(data) {
      output += data;
    });
    req.on('end', function() {
      res.end(output.toString().toUpperCase());
    });
  }
});

server.listen(process.argv[2]);