let utils = require("../utils");
let leet = utils.maps.leet;

const alphabetBasic = leet.alphabetBasic;
const alphabetAdvanced = leet.alphabetAdvanced;
const alphabetReversed = leet.alphabetReversed;

var fizieren = function (str, params) {
  if (params) {
    if (params.reverse) {
      alphabetReversed.map((x) => {
        str = str.replace(x[0], x[1]);
      });
      return str;
    }
    if (params.advanced) {
      str = leetify(str, alphabetAdvanced);
      return leetify(str, alphabetBasic);
    }
  }
  return leetify(str, alphabetBasic);
};

let leetify = function (str, ar) {
  let result = "";
  for (char of str) {
    //TODO: better way of handling this corner case?
    if (char === "F") {
      result += "PH";
      continue;
    }
    let leetChar = ar[char.toLowerCase()];
    if (leetChar) result += leetChar;
    else result += char;
  }
  return result;
};

module.exports = {
  function: fizieren,
  name: "Leetify",
  show: true,
  params: [
    {
      name: "advanced",
      type: "Boolean",
    },
    {
      name: "reverse",
      type: "Boolean",
    },
  ],
};
