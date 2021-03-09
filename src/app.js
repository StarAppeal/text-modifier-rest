var express = require("express");
var path = require("path");

var cors = require('cors')

var fier = require("./routes/fier");

var application = express();

application.use(cors({credentials: true, origin: true}));

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
