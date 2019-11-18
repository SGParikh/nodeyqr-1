const express = require('express');
const app = express();

// Routers
const home = require('./home.js');
const users = require('./user.js');

app.use('/', home);
app.use('/users', users);
const port=3000;

  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });