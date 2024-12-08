const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, {'content-Type' : 'text/html'});
    const filename = "/week4/practice8-4.html";
    fs.readFile(filename), (err, data) => {
        res.write(data);
        res.end();
    };

});

server.listen(500);
