let utils = require("../utils");
let australia = utils.maps.australia;

var fizieren = function (str, params) {
  const reverse = params && params.reverse !== undefined && params.reverse;
  let result = "";
  str
    .split("")
    .reverse()
    .forEach(function (c) {
      if (reverse) result += utils.getKeyByValue(c, australia);
      else if (!australia.has(c)) result += c;
      else result += australia.get(c);
    });
  return result;
};

module.exports = {
  function: fizieren,
  name: "Australiafy",
  show: true,
  params: [
    {
      name: "reverse",
      type: "Boolean",
    },
  ],
};
