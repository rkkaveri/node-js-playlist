const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {
    console.log('request was made : ' + req.url);
    
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200, ({'Content-Type':'text/html'}));
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/contact'){
        res.writeHead(200, ({'Content-Type':'text/html'}));
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }
    else if(req.url === '/api/developers'){
        const developers = {
            name : "KK",
            expertises : "java", 
            experience : "2 years"
        }
        res.writeHead(200, ({'Content-Type':'text/json'}));
        res.end(JSON.stringify(developers));
    } 
    else {
        res.writeHead(200, ({'Content-Type' : 'text/html'}));
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }

});

server.listen(3000, '127.0.0.1');
console.log('Server started at port : 3000');