const br = require("braille");

var fizieren = function (str, params) {
  return br.toBraille(str);
};

module.exports = {
  function: fizieren,
  name: "Braillify",
  show: true,
};
