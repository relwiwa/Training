var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  if (req.method !== 'POST') {
    res.end('this was not a POST request');
  }
  else {
    req.pipe(map(function (chunk) {  
      return chunk.toString().toUpperCase()  
    })).pipe(res);
  }
});

server.listen(process.argv[2]);