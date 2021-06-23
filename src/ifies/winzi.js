let utils = require("../utils");
let tiny = utils.maps.tiny;

var fizieren = function (str, params) {
  let smol = "";
  str
    .toLowerCase()
    .split("")
    .forEach(function (c) {
      if (!tiny.has(c)) smol += c;
      else smol += tiny.get(c);
    });
  return smol;
};

module.exports = {
  function: fizieren,
  name: "Tinify",
  show: true,
};
