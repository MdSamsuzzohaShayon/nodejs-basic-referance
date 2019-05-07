const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {

    // CREATING JS OBJECT
    /*
    res.writeHead(200, {'Content-Type':'text/plain'});
    let obj = {
        "Messi" : "FC Barcelona",
        "Neymar JR": "Paris Saint Germain",
        "Ronaldo": "Juventus"
    }

    // OBJECT IN JSON FORMAT
    res.end(JSON.stringify(obj));
    */

    if (req.url === '/home' || req.url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contract') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/contract.html').pipe(res);
    } else if (req.url === '/api/ninjas') {
        let ninjas = [{
                name: 'Md SHayon',
                age: 22
            },
            {
                name: 'Khokon',
                age: 23
            },
        ];
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, 'localhost');
console.log("working");