'use strict';

require('dotenv').config();
const { db } = require('./api-server copy/src/models');
const server = require('./api-server copy/src/server.js');
const PORT = process.env.PORT || 3001;

db.sync().then(() => {
  server.start(PORT);
});
