var stuff = require('./stuff');
var util = require('util');





var events = require('events');
var myEmmitter = new events.EventEmitter();

myEmmitter.on('someEvent', function (mssg) {
    console.log(mssg);
});

myEmmitter.emit('someEvent', 'The event was emittet 1s');



var Person = function (name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ray = new Person('ray');

var people = [james, mary, ray];

people.forEach(function (person) {

    person.on('speak', function (mssg) {
        console.log(person.name + " said: " + mssg);
    });
});

james.emit('speak', 'hey dude');
mary.emit('speak', 'what up');








let array = ['Marcin', 'Tomasz', 'Zbyszek'];

//  console.log(stuff.counter(array));
//  console.log(stuff.adder(4,5));
//  console.log(stuff.adder(stuff.pi, 3.86));

