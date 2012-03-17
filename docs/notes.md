Notes
=====

Heroku
------
* Sign up: https://api.heroku.com/signup
* Log in: https://api.heroku.com/login
* Install Heroku: (on Node guide page.)
* Install NVM: Recommended to deal with multiple versions.
* Node.js Guide: http://devcenter.heroku.com/articles/nodejs
* v0.4.7 by default. Buildpacks for more recent versions.
* Secrets and process environment.
* Multiple accounts (link).

Exercise
--------
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




Other Cloud PAAS
----------------
Get a basic overview of these guys going.

* Joyent
* Cloud Foundry
* Azure
* Nodester
* NodeJitsu

Misc
----
* Add library licenses for included code.
