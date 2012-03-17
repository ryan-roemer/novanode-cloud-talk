spawn = require('child_process').spawn
print = (data) -> console.log data.toString()

task 'dev:hello', 'Run "Hello World" development server', () ->
  ps = spawn "nodemon", ["server-hello.js"]
  ps.stdout.on "data", print
  ps.stderr.on "data", print

task 'dev:chat', 'Run chat development server', () ->
  ps = spawn "nodemon", ["chat/app_redis.js"]
  ps.stdout.on "data", print
  ps.stderr.on "data", print
