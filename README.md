# geckoV2

Welcome to **HouzSit**.  Our goal was to create an uber-like scheduled service that people can use to have certain tasks completed while they are out of town.  The app is an angular front-end with a node/express webserver and a persistent PostgreSQL database.

## Installation  

To install our app, simply run `npm install` and then `bower install` in the root directory.  Npm handles the server dependencies while bower handles the front end dependences.  Once the dependencies are installed run node (or nodemon) on the app.js file found in /server/app.js `nodemon app.js`.  By default the site should now be accessible via localhost:3333.  

## PostgreSQL

Our PostgreSQL database is persistent, hosted by heroku, and is currently hard coded into the app directly.  This can be modified by changing the /server/db/sqlscript.js file.  Take note of the inclusion of pgp or pg-promise as the library we used to interact with our postgreSQL database.  While it’s a very simple usage of the library, the documentation on pgp allows for much more efficient usage and much more functionality if desired.

Features to add:
- Re-factor the models.js file’s query calls to be much cleaner per pgp creator’s suggestions.

## Summary

There are two logical areas to our site, the user side and the employees or 'sitters' side.  The visitor can utilize either or both.  The user side will allow the user to make tasks and the sitter side will allow the user to assume responsibility for them.

Features to add:
- Allow a single login to work for both users and sitters… somehow.

## Users

Users will be able to create an account and log in.  Upon doing so they should have to ability to create new tasks and see all they're previously created tasks.

Features to add:
- Salt/hash passwords before storage in the DB.
- Add the ability to recreate tasks from previous tasks.
- Input multiple tasks at once (trips added as a whole).

## Sitters

Sitters will be to create an account and log in.  Upon doing so they should have the ability to see all of their currently assigned tasks and see all the available tasks ready for pickup.  From here they should be able to self-assign available tasks to themselves or mark tasks assigned to them already as completed.

Features to add:
- Salt/hash password before storage in the DB.
- Add notes to completed tasks for users to see.
