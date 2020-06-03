var express = require('express');
var path = require('path');

var fier = require("./routes/fier")

var application = express();

// view engine setup
application.set('views', path.join(__dirname, '../views'));
application.set('view engine', 'pug')

application.use(function(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  next();
});

application.use(express.static(path.join(__dirname, 'public')));
application.use(express.json());

application.use("/fier", fier);

module.exports = application;
