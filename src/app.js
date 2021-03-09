var express = require("express");
var path = require("path");

var fier = require("./routes/fier");

var application = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
