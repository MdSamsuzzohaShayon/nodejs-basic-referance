// https://www.youtube.com/watch?v=BPdRVquo5pg
const http = require('http');



const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('<html><head><title>form</title></head></html>');
        res.write('<body><form method="POST" action="/process"><input name="process" /></form></body>');
        res.end();
    }else if(req.url === '/process' && req.method === "POST"){
        const body = [];
        req.on('data', chunk=>{
            console.log("Add chunk of data to the array: ",chunk);
            body.push(chunk);
        });        
        req.on('end', chunk=>{
            console.log("Get the result at the end of streams: ",chunk);
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
        });
        res.write("<h2>Thank you for submit</h2>");
        res.end();
    }else{
        res.write("Not found");
        res.end();

    }
});



server.listen(3000, ()=>console.log("server is running on port: 3000"));



