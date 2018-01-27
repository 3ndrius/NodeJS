var http = require('http');

var fs = require('fs');

var ReadStream = fs.createReadStream(__dirname + '/readMe.txt');// second par utf8 ?

ReadStream.on('data', function(chunk) {
    console.log("New chunk recieved:");
    console.log(chunk);
});