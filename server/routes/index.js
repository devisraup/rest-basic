const express = require('express');

const app = express();

// Routes App
app.use(require('./usuario'));
app.use(require('./login'));
app.use(require('./categoria'));
app.use(require('./producto'));

module.exports = app;