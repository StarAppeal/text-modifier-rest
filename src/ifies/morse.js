let utils = require("../utils");
let morseCode = utils.maps.morseCode;

var fizieren = function (str, params) {
  const reverse =
    params && params.reverse !== undefined ? params.reverse : false;
  console.log(str.split(" "));
  return reverse
    ? str
        .split(" ")
        .map((el) => {
          return el === ""
            ? " "
            : Object.keys(morseCode).find((key) => morseCode[key] === el);
        })
        .join("")
        .replace(/  /g, " ")
    : str
        .toLowerCase()
        .split("")
        .map((el) => {
          return morseCode[el] ? morseCode[el] : el;
        })
        .join(" ");
};

module.exports = {
  function: fizieren,
  name: "Morsify",
  show: true,
  params: [
    {
      name: "reverse",
      type: "Boolean",
    },
  ],
};
