const http = require('http');
const fs = require('fs');


// OFFICIAL EXAMPLE
/*
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/


/*
const server = http.createServer((req, res)=>{
    console.log(req.httpVersion);
    res.statusCode = 200;
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // LETTER ON DISCUSS ABOUT FS
    const myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);
    
});*/



// Returns content-type = text/plain
const server = http.createServer((req, res)=>{
    console.log(req);    
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Foo', 'foo');
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('ok');
})


server.listen(3000, 'localhost');
console.log("Server is running");