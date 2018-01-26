
function counter(arr) {
    return 'The are ' + arr.length + ' elements in the array';  
};
function adder(a,b) {
    return `This equal to ${a+b}`;
}

var pi = 3.14;


//export module 

// module.exports.counter = counter;
// module.exports.adder = adder;

// module.exports.pi = pi;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
// end export module