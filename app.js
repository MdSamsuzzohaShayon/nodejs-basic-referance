// https://nodejs.org/en/knowledge/advanced/buffers/how-to-use-buffers/
// The Buffer class in Node.js is designed to handle raw binary data. 


/*
// BINARY
const buffer = Buffer.alloc(8);
// This will print out 8 bytes of zero:
console.log(buffer);



const bfrBase64 = Buffer.from('Hi I am buffer', 'base64');
// This will print out a chain of values in base64:
console.log(bfrBase64);



const bfrUtf_8 = Buffer.from('Hi I am buffer', 'utf-8');
// This will print out a chain of values in utf-8:
console.log(bfrUtf_8);



const bfrBinary= Buffer.from('Hi I am buffer', 'binary');
// This will print out a chain of values in utf-8:
console.log(bfrBinary);



// JSON PERSING
let parsingData = "This will parse";
console.log(JSON.parse(parsingData));
*/




// CHARECTER ENCODING

let buf = Buffer.from('Hello world', 'utf-8');
// console.log(buf.toJSON());
console.log(buf.toString('hex'));












