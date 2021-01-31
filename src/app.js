var express = require("express");
var path = require("path");

var fier = require("./routes/fier");

var application = express();

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
