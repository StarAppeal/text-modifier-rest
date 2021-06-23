let utils = require("../utils");
let australia = utils.maps.australia;

var fizieren = function (str, params) {
  let upside = "";
  str
    .split("")
    .reverse()
    .forEach(function (c) {
      if (!australia.has(c)) upside += c;
      else upside += australia.get(c);
    });
  return upside;
};

module.exports = {
  function: fizieren,
  name: "Australiafy",
  show: true,
};
