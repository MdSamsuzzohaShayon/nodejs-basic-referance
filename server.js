
//BUILT IN MODULES 
//const events = require('events');
/*
const myEmmiter = new events.EventEmitter();

myEmmiter.on('someEvent',function(sms){
    console.log(sms);
    
});

myEmmiter.emit('someEvent', 'This event is emitted');
*/








//INHERITING IN JS ULING UTIL MODULE
/*
const util = require('util');
let Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

let james = new Person('james');
let mary = new Person('mary');
let ryu = new Person('ryu');
//USING ARRAY
let people = [james,mary,ryu];



//RENDERING MULTIPLE OBJECT
people.forEach(function(person){
    person.on('speak', function(sms){
        console.log(person.name+ ' Said '+ sms);
        
    });
});


james.emit('speak','hey dudes');
james.emit('speak','I want a curry');

*/