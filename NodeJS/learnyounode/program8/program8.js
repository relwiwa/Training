var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, handleResponse).on('error', console.error);

function handleResponse(response) {

  response.pipe(bl(function(err, data) {
    if (err !== null) {
      console.log('There was an error processing the get-request:', err);
    }
    else {
      console.log(data.length);
      console.log(data.toString());
    }
      
  }));
  
}