spawn = require('child_process').spawn
print = (data) -> console.log data.toString()

task 'dev:server', 'Run development server', () ->
  ps = spawn "nodemon", ["server.js"]
  ps.stdout.on "data", print
  ps.stderr.on "data", print
