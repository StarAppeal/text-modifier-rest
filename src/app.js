var express = require("express");
var path = require("path");

var fier = require("./routes/fier");

var application = express();

var cors = require('cors')

application.use(cors({credentials: true, origin: true}));

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
