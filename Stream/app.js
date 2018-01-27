var http = require('http');

var fs = require('fs');

var MReadStream = fs.createReadStream(__dirname + '/readMe.txt');// second par utf8 ?
var MWriteStream = fs.createWriteStream(__dirname + '/write.txt');


MReadStream.on('data', function(chunk) {
    //writeTest
    
    // setTimeout(function() {
        MWriteStream.write(chunk);
        console.log("New chunk recieved:");
    // },3000);

    // console.log(chunk);
});