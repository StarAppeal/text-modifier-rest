const utils = require("../utils");
const fracture = utils.maps.fracture.fracture;
const fractureBold = utils.maps.fracture.fractureBold;

var fizieren = function (str, params) {
  let fracturefied = "";
  if (params && params.bold) {
    str.split("").forEach((c) => {
      if (!fractureBold.has(c)) fracturefied += c;
      else fracturefied += fractureBold.get(c);
    });
  } else {
    str.split("").forEach((c) => {
      if (!fracture.has(c)) fracturefied += c;
      else fracturefied += fracture.get(c);
    });
  }
  return fracturefied;
};

module.exports = {
  function: fizieren,
  name: "Frakturify",
  show: true,
  params: [
    {
      name: "bold",
      type: "Boolean",
    },
  ],
};
