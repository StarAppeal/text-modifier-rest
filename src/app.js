var express = require("express");
var path = require("path");

var fier = require("./routes/fier");

var application = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  next();
});

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
