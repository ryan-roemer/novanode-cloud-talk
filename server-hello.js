var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'content-type': "text/html"
  });
  res.end("<h1>Hello World!</h1>")
}).listen(2001);
