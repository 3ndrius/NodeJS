var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
    console.log('Request was made: ' + req.url);
        if(req.url === '/home' || req.url === '/') 
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var MReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
            MReadStream.pipe(res);
        }
        else if(req.url === '/contact') 
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var MReadStream = fs.createReadStream(__dirname + '/contact.html', 'utf8');
            MReadStream.pipe(res);
        }
        else if(req.url === '/api/ninjas') {
            var ninjas = [ {name: 'rayan', age: 10}, {name: 'mark', age:20}];
            res.writeHead(200, {'Content-Type': 'application/JSON'});
            res.end(JSON.stringify(ninjas));
        }
        else{
            res.writeHead(404, {'Content-Type': 'text/html'});
            var MReadStream = fs.createReadStream(__dirname + '/404.html', 'utf8');
            MReadStream.pipe(res);
        }
});
server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000 ');

