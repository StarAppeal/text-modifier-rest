var express = require("express");
var path = require("path");

var fier = require("./routes/fier");

var application = express();

application.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Methods", "GET,POST");
	res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
	next();
});

application.use(express.json());

application.use("/fier", fier);

module.exports = application;
