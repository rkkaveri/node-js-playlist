const fs = require('fs')
const http = require('http');

//sending data as html
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html'});
    const readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server listening at port: 3000');


//sending json data to server
const serverJson =  http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type':'text/json'});
    const myObj = {
        name: "Kritika Kaveri",
        job: 'developer',
        age: 23
    };
    res.end(JSON.stringify(myObj));
});

serverJson.listen(4000, '127.0.0.1');
console.log('ServerJSON listening at port: 4000');
