Notes
=====

Tasks
-----
* Identify good open source redis + fun application (ideally npm install).
* Research highlights, links for other cloud providers.
* Add short discussion of raw AWS.
* Set up gh-pages -> host presentation and demo app pages.
* Try switching to a higher-price RedisToGo for more connections and back.
* Add library licenses for included code.
* Deploy on raw AWS.

Heroku
------
Basics:

* Sign up: https://api.heroku.com/signup
* Log in: https://api.heroku.com/login
* Install Heroku: (on Node guide page.)
* Install NVM: Recommended to deal with multiple versions.
* Node.js Guide: http://devcenter.heroku.com/articles/nodejs

Advanced, other topics:

* v0.4.7 by default. Buildpacks for more recent versions.
* Secrets and process environment.
* Multiple accounts (link).
* First dyno for each individual app is free.
* Can use more processors on the underlying EC2 instance with a "cluster" library. Don't necessarily need this for most apps as Node is really light on resource use.

Exercise - Hello World
----------------------
* Create app in Git.
* Add package.json.
    * Tip: Heroku will use these dependencies to determine what
      modules to install in your application runtime.
* Test out in dev.
* Add Procfile.
* Commit everything.
* Create Node.js application:

        $ heroku create --stack cedar
        Creating fierce-fog-4141... done, stack is cedar
        http://fierce-fog-4141.herokuapp.com/ | git@heroku.com:fierce-fog-4141.git
        Git remote heroku added

        $ heroku rename novanode-cloud-talk
        http://novanode-cloud-talk.herokuapp.com/ | git@heroku.com:novanode-cloud-talk.git
        Git remote heroku updated

* Deploy!:

        $ git push heroku master
        (nvm v0.4.7) rye@silver ~/scm/os/novanode-cloud-talk $ git push heroku master
        Counting objects: 24, done.
        Delta compression using up to 2 threads.
        Compressing objects: 100% (19/19), done.
        Writing objects: 100% (24/24), 3.23 KiB, done.
        Total 24 (delta 5), reused 0 (delta 0)

        -----> Heroku receiving push
        -----> Node.js app detected
        -----> Resolving engine versions
               Using Node.js version: 0.6.13
               Using npm version: 1.0.106
        -----> Fetching Node.js binaries
        -----> Vendoring node into slug
        -----> Installing dependencies with npm
               npm WARN prefer global nodemon@0.6.12 should be installed with -g
               nodemon@0.6.12 ./node_modules/nodemon
               coffee-script@1.2.0 ./node_modules/coffee-script
               npm WARN prefer global nodemon@0.6.12 should be installed with -g
               coffee-script@1.2.0 /tmp/build_3j2wdip9rp4v9/node_modules/coffee-script
               nodemon@0.6.12 /tmp/build_3j2wdip9rp4v9/node_modules/nodemon
               Dependencies installed
        -----> Discovering process types
               Procfile declares types -> web
        -----> Compiled slug size is 3.5MB
        -----> Launching... done, v3
               http://novanode-cloud-talk.herokuapp.com deployed to Heroku

        To git@heroku.spanishdict:novanode-cloud-talk.git
         * [new branch]      master -> master

* Check how our application is doing:

        $ heroku ps
        Process  State      Command
        -------  ---------  --------------------
        web.1    up for 1m  node server-hello.js

* Now lets test it out: http://novanode-cloud-talk.herokuapp.com

* Heroku logs: Heroku will log out anything from `console.log` to its logs.

        $ heroku logs

* Heroku Bash: Get a bash shell and poke around.

        $ heroku run bash

* Scaling:

        $ heroku ps:scale web=1

Chat
----
* Document switching Procfile and dev. server.
* Home: https://addons.heroku.com/redistogo
* Guide: http://devcenter.heroku.com/articles/redistogo
* Add redis (only 10 connections for free):

        $ heroku addons:add redistogo:nano

* Credentials: The plugin automatically sets `REDISTOGO_URL`

        $ heroku run env

* Versions:

    * AWS ELB XHR: http://chat.sdsandbox.com/
    * AWS ELB WS: http://talk.sdsandbox.com/
    * AWS EC2 WS: http://chat-node.sdsandbox.com:2000/

Advantages
----------
* Intelligent routing during application upgrades.
* Rollback.
* Integration with AWS. Runs in AWS, and can directly hook to RDS.
* Automatic application restarts on crashes.

Gotchas
-------
* Memcached: All add-on's use SASL authentication, but existing Node libraries
  don't support.
* Monitoring: Some support, but could use a **lot** more.
* Outlier Request Latencies: A small fraction of 30 second timeout requests.
* Add-ons are really costly against self-hosting for many of them.
* No websockets! (yet)


Other Cloud PAAS
----------------
Get a basic overview of these guys going.

* Joyent
* Cloud Foundry
* Azure
* Nodester
* NodeJitsu

Host yourself:

* AWS (what we do at SpanishDict).
* Rackspace

Takeaways
---------
* Cloud PAAS services are fantastic for trying node out and prototyping.
* For long term production applications, may need to go for IAAS, but the cloud is definitely a great option.
