spawn = require('child_process').spawn

# Helpers
print = (data) -> console.log data.toString()
nodemon = (script) ->
  ps = spawn "nodemon", [script]
  ps.stdout.on "data", print
  ps.stderr.on "data", print

# Tasks
task 'dev:hello', 'Run "Hello World #1" development server', () ->
  nodemon "server-hello.js"

task 'dev:hello2', 'Run "Hello World #2" development server', () ->
  nodemon "server-hello2.js"

task 'dev:chat', 'Run chat development server', () ->
  nodemon "chat/app_redis.js"
