const express = require('express');

const app = express();

// Routes App
app.use(require('./usuario'));
app.use(require('./login'));

module.exports = app;