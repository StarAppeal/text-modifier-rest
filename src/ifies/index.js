var fs = require("fs");
var files = fs.readdirSync("src/ifies");
let modules = {};
files.forEach((f) => {
  if (f === "index.js") return;
  const file = f.replace(/\.[^/.]+$/, "");
  modules[file] = require("./" + f);
});

module.exports = modules;
