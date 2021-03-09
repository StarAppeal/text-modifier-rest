const app = require("./app");
const http = require("http");

var port = process.argv[2] === "DEBUG" ? 81 : process.env.PORT;

http.createServer(app).listen(port, function () {
  console.log("App listens on port: " + this.address().port);
});
