// https://www.youtube.com/watch?v=BPdRVquo5pg
const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {
    // GET UTF 8 DATA 
    const readStreamData = fs.createReadStream(`${__dirname}/bigdata.txt`);
    readStreamData.pipe(res);
});



server.listen(3000, () => console.log("server is running on port: 3000"));
