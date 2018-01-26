var fs = require('fs');

// var readMe = fs.readFileSync('readMe.txt', 'utf8');

// console.log(readMe);

// var writeMe = fs.writeFileSync('writeMe.txt', readMe);

fs.readFile('readMe.txt', 'utf8' , function(err, data) {
    console.log(data);

    fs.writeFile('writeMe.txt', data, function(err) {
        console.log('Done');
    });
});

console.log("What is first ");