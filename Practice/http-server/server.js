const http = require('http');

//setting up server
const server = http.createServer( (req, res) => {
    console.log(`Request was made : ${req.url}`)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Everyone! This is my first server');
});

//setting and listening port
server.listen(3000, '127.0.0.1')
console.log('Listenig to port 3000')