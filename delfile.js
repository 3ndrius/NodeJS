var fs = require('fs');

// newFunction();

// function newFunction() {
//     fs.rmdir('Second3', function () {
//         fs.readFile('readMe.txt', 'utf8', function (err, data) {
//             fs.writeFile('./Second2/write.txt', data, function (err, data) {
//                 console.log("all good");
//             });
//         });
//     });
// }


fs.unlink('./Second2/write.txt', function() {
    fs.rmdirSync('Second2');
});