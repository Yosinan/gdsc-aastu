var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('hello world');

}).listen(8080);



// const fs = require('fs');

// fs.readFile('sample.txt', (error, fileBuffer) => {
//     if (error) console.log(error.message);
//     else console.log(fileBuffer.toString());
// });