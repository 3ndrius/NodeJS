var fs = require('fs');
var http = require('http');



var server = http.createServer(function(req, res) {

    console.log('Request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'application/json'});
    
  var myObject = {
      name: 'James',
      jos: 'Player',
      age:30
  };
  res.end(JSON.stringify(myObject));
 
});

server.listen(3000, '127.0.0.1');

console.log('Listening on port 3000 ');