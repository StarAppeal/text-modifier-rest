var fs = require("fs");
var files = fs.readdirSync("src/utils/maps");
let maps = {};
files.forEach((f) => {
  if (f === "index.js") return;
  const file = f.replace(/\.[^/.]+$/, "");
  maps[file] = require("./" + f);
});

module.exports = maps;
