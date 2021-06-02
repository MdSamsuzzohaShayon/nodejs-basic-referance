


const fs = require('fs');

// GET UTF 8 DATA 
const readStreamData = fs.createReadStream(`${__dirname}/bigdata.txt`);
// WRITE DATA TO ANOTHER FILES 
const writeStreamData = fs.createWriteStream(`${__dirname}/write.txt`);


/*
readStreamData.on('data', (chunk)=>{
    // GET THE WHOLE DATA AS TEXT
    // console.log("Data as text: ",chunk.toString());
    writeStreamData.write(chunk)
});
*/



readStreamData.pipe(writeStreamData);