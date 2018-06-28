var http = require('http');

var url = process.argv[2];
var output = "";


http.get(url, handleResponse).on('error', console.error);

function handleResponse(response) {
  response.setEncoding('utf8');
  
  response.on('data', function(data) {
    output += data;
  });
  
  response.on('end', function() {
    console.log(output.length);
    console.log(output);
  });
  
  response.on('error', console.error);
}