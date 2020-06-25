const fs = require('fs');
const http = require('http');

// const readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// const writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');
// readStream.pipe(writeStream);

//let's perform this action from server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const readStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    //sends data at server
    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log(`Listening server at port 3000`)
