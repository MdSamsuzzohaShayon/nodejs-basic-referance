/* let time =0 ;
let timer = setInterval(function(){
    time += 2;
    console.log(`${time} sec have passed`);
    if(time > 6){
        clearInterval(timer);
    }
    
}, 2000); */


// console.log(__dirname);
// console.log(__filename);





//CUSTOM MODULE
/*
const stuff = require('./stuff');
console.log(stuff.counter(['shayon', 'khokon', 'tanvir']));
console.log(stuff.adder(3+4));
console.log(stuff.adder(stuff.pi, 6));
*/







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




