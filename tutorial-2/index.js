// https://www.youtube.com/watch?v=BPdRVquo5pg
const fs = require('fs');

/*
// GET BUFFER DATA 
// Buffer objects are used to represent a fixed-length sequence of bytes. Many Node.js APIs support Buffers.
const readStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
// console.log(getUTF8Data.readable); // true

readStream.on('data', (chunk)=>{
    // IF WE CREATE OUR BIGDATA MORE LONGER THIS WILL DEVIDE INTO MORE BUFFER 
    // FOR EXAMPLE IF WE JUST COPY EVERYTHING FROM BIGDATA AND PASTE IT BELOW THIS WILL DEVIDE INTO MORE THAN 5 DIFFERENT BUFFER
    console.log("Data has 3 deffrent chunk of buffer: ",chunk);

});
*/



/*
// GET UTF 8 DATA 
const getUTF8Data = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf8");


getUTF8Data.on('data', (data)=>{
    // GET THE WHOLE DATA AS TEXT
    console.log("Data as text: ",data);

});
*/




// ANOTHER WAY OF GET UTF 8 DATA 
const getUTF8Data = fs.createReadStream(`${__dirname}/bigdata.txt`);


getUTF8Data.on('data', (data)=>{
    // GET THE WHOLE DATA AS TEXT
    console.log("Data as text: ",data.toString());

});