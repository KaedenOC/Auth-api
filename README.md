# Auth-api

## Author: Kaeden O'Meara

## Problem Domain

- Implement a permissions based access control middleware module.

- Integrate back-end authorization controls using Express and Postgres Database.

- Use a virtual column for capabilities, to create a roles system.

## Links and Resources


## Collaborators

- Starter Code. Demo Reference. Ike Stoeger

## Setup

.env requirements (where applicable)
See the .env.sample

## How to initialize/run your application (where applicable)

Clone repo, npm i, set up DB with npm run db:config & then npm run db:create then run nodemon in the terminal

## Routes

- GET : / - server is live route
- POST: /signup - sign up with username & password
- POST: signin - sign in with username & password
- GET : /api/v1/model - get all model in DB
- GET : /api/v1/model/:id - get specific model item by ID in DB
- POST : /api/v1/model - add new model item to DB
- PUT : /api/v1/model/:id - update model item by ID in DB
- DELETE : /api/v1/model/:id - delete model item by ID in DB
- GET : /api/v2/model - get all model in DB but requires BasicAuth
- GET : /api/v2/model/:id - get specific model item by ID in DB but requires BasicAuth
- POST : /api/v2/model - add new model item to DB but requires BearerAuth and proper ACL role
- PUT : /api/v2/model/:id - update model item by ID in DB but requires BearerAuth and proper ACL role
- DELETE : /api/v2/model/:id - delete model item by ID in DB but requires BearerAuth and proper ACL role
Tests

To run tests, after running npm i, run the command npm test

## UML

![UML 08](./assets/uml08.jpg)
