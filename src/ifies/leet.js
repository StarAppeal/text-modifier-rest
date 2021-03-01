const alphabet = {
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

var fizieren = function (str, params) {
  let result = "";
  for (char of str) {
    //TODO: better way of handling this corner case?
    if (char === "F") {
      result += "PH";
      continue;
    }
    let leetChar = alphabet[char.toLowerCase()];
    if (leetChar) result += leetChar;
    else result += char;
  }
  return result;
};

module.exports = {
  function: fizieren,
  name: "Leetify",
  show: true,
};
