let utils = require("../utils");
let fancy = utils.maps.fancy;

var fizieren = function (str, params) {
  let fancyfied = "";
  str.split("").forEach(function (c) {
    if (!fancy.has(c)) fancyfied += c;
    else fancyfied += fancy.get(c);
  });
  return fancyfied;
};

module.exports = {
  function: fizieren,
  name: "Fancify",
  show: true,
};
