var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  var route = url.parse(req.url).pathname;
  var query = url.parse(req.url).query.split('=')[1];  
  var date = new Date(query);
  
  res.writeHead(200, {
    'content-type': 'application/json'
  });
  
  if (route === '/api/parsetime') {
    res.end(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }));
  }
  else if (route === '/api/unixtime') {
    res.end(JSON.stringify({
      'unixtime': date.getTime()
    }));
  }

});

server.listen(process.argv[2]);