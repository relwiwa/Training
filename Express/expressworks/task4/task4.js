var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

app.post('/form', urlencodedParser, function(req, res) {
  res.end(req.body.str.split('').reverse().join('') + '\n');
});

app.listen(process.argv[2]);