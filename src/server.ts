import app from "./app";
import http from "http";

const port = process.argv[2] === "DEBUG" ? 80 : process.env.PORT;

http.createServer(app).listen(port, function () {
  console.log("App listens on port: " + this.address().port);
});
