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
    '    <div class="container" style="width: 600px;"><div class="hero-unit">' +
    "      <h1 style='text-align: center;'>Hello World!</h1><br />" +
    "      <p>Your path is: \"<b>" + req.url + "</b>\"" +
    "         and you're calling from: <b>" + req.connection.remoteAddress + "</b>.</p>" +
    "      <p>Your browser identifies as: \"<b>" + req.headers["user-agent"].substr(0, 60) + " ...</b>\".</p>" +
    "      <p>Your favorite color is: <span style='background: #" + randColor + "'>" +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>" +
    '    </div></div>' +
    "  </body>" +
    "</html>"
  )
}).listen(PORT, ADDR);

console.log("Server running at http://%s:%s/", ADDR, PORT);
