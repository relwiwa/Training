var http = require('http');

var urls = [];
var amount = process.argv.length - 2;
var finished = 0;
var outputs = [];

for (var i = 2; i < amount + 2; i++) {
  urls.push(process.argv[i]);
  getRequest(i - 2);
}

/*  function that performs get request
    it gets index parameter, so we can identify the number of the request
    and put the result in order */
function getRequest(index) {
  http.get(urls[index], function(response) {
    handleResponse(response, index);
  }).on('error', console.error);
}

function handleResponse(response, index) {
  var output = "";

  response.on('data', function(data) {
    output += data;
  });
  
  response.on('end', function() {
    outputs[index] = output;
    finished++;
    // check whether all requests have already finished
    if (finished === amount) {
      for (var i = 0; i < outputs.length; i++) {
        console.log(outputs[i]);
      }
    }
  });
  
  response.on('error', console.error);
}