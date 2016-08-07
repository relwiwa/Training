var net = require('net');
var server = net.createServer();

function addZero(number) {
  if (number < 10) {
    return "0" + number.toString();
  }
  else {
    return number.toString();
  }
}

server.on('connection', function(socket) {
  var date = new Date();
  var year = date.getFullYear();
  var month = addZero(date.getMonth() + 1);
  var day = addZero(date.getDay());
  var hours = addZero(date.getHours());
  var minutes = addZero(date.getMinutes());
  date = year + "-" + month + "-" + day + " " + hours + ":" + minutes;
  socket.end(date + '\n');
});

server.listen(process.argv[2]);