let counter = function(arr){
    return 'there are ' + arr.length + ' elements in this array';

}

let adder =function(a,b){
    return `sun of the two number is ${a+b}`;
}

let pi = 3.14;

//module.exports.counter = counter;
module.exports = {
    counter : counter,
    pi: pi,
    adder : adder
}