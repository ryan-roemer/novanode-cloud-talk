/**
 * Simple cloud proxy web server.
 */
var http = require('http'),
  ADDR = process.env.ADDRESS || "0.0.0.0",
  PORT = process.env.PORT || 2000;

http.createServer(function (req, res) {
  var randColor = ('00000' + (Math.random()*16777216<<0).toString(16)).substr(-6);

  res.writeHead(200, { 'content-type': "text/html" });
  res.end(
    "<!doctype html>" +
    "<html>" +
    "  <head>" +
    '    <link rel="stylesheet" href="http://twitter.github.com/bootstrap/1.4.0/bootstrap.min.css" />' +
    "  </head>" +
    "  <body>" +
    '    <div class="container"><div class="hero-unit">' +
    "      <h1>Hello!</h1>" +
    "      <p>" +
    "         Your path is: \"<b>" + req.url + "</b>\"." +
    "         You're calling from: <b>" + req.connection.remoteAddress + "</b>." +
    "         Your browser identifies as: \"<b>" + req.headers["user-agent"] + "</b>\"." +
    "         Your favorite color is: <span style='background: #" + randColor + "'>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>" +
    "      </p>" +
    '    </div></div>' +
    "  </body>" +
    "</html>"
  )
}).listen(PORT, ADDR);

console.log("Server running at http://%s:%s/", ADDR, PORT);
