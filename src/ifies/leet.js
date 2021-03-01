const alphabetBasic = {
  a: "4",
  b: "8",
  e: "3",
  f: "ph",
  g: "6",
  l: "1",
  o: "0",
  s: "5",
  t: "7",
};

const alphabetAdvanced = {
  c: "(", // or k or |< or /<
  d: "<|",
  h: "|-|",
  k: "|<", // or /<
  m: "|\\/|",
  n: "|\\|",
  p: "|2",
  u: "|_|",
  v: "\\/", // or \/
  w: "\\/\\/", // or \/\/
  x: "><",
  y: "'/",
};

const alphabetReversed = [
  [/(\|\\\/\|)/g, "m"],
  [/(\|\\\|)/g, "n"],
  [/(\()/g, "c"],
  [/(<\|)/g, "d"],
  [/\|-\|/g, "h"],
  [/(\|<)/g, "k"],
  [/(\|2)/g, "p"],
  [/(\|_\|)/g, "u"],
  [/(\/\/)/g, "w"],
  [/(><)/g, "x"],
  [/(\|)/g, "l"],
  [/(\'\/)/g, "y"],
  [/(\/)/g, "v"],
  [/(1)/g, "l"],
  [/(0)/g, "o"],
  [/(3)/g, "e"],
  [/(4)/g, "a"],
  [/(5)/g, "s"],
  [/(6)/g, "g"],
  [/(7)/g, "t"],
  [/(8)/g, "b"],
  [/(ph)/g, "f"],
];

var fizieren = function (str, params) {
  if (params) {
    if (params.reverse) {
      alphabetReversed.map((x) => {
        str = str.replace(x[0], x[1]);
      });
      return str;
    }
    if (params.advanced) {
      str = leetify(str, alphabetBasic);
      return leetify(str, alphabetAdvanced);
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
