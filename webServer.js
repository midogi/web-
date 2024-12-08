const http = require('http');

const server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type' : 'text/html'});
    res.write("<h1>Hi Welcome</h1>")
    res.end("<h1>Hello World!<h1>")
});

server.listen(500);
