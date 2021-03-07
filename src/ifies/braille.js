const br = require("braille");

var fizieren = function (str, params) {
  const reverse =
    params && params.reverse !== undefined ? params.reverse : false;
  str = str
    .toUpperCase()
    .replace(/Ä/g, "AE")
    .replace(/Ö/g, "OE")
    .replace(/Ü/g, "UE");
  return reverse ? br.toText(str) : br.toBraille(str);
};

module.exports = {
  function: fizieren,
  name: "Braillify",
  show: true,
  params: [
    {
      name: "reverse",
      type: "Boolean",
    },
  ],
};
