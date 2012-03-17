/**
 * Simple cloud proxy web server.
 */
var http = require('http'),
  ADDR = process.env.ADDRESS || "0.0.0.0",
  PORT = process.env.PORT || 2000;

http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': "application/json" });
  res.end(JSON.stringify({"TODO": "HERE"}))
}).listen(PORT, ADDR);

console.log("Server running at http://%s:%s/", ADDR, PORT);
