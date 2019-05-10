// Using the File System module as an example, this is a synchronous file read
const fs = require('fs');
const data = fs.readFileSync('./read.txt'); // blocks here until file is read


console.log(data.toString());




// And here is an equivalent asynchronous example
fs.readFile('./read.txt', (err, data) => {
  if (err) throw err;
});