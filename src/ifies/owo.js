let utils = require("../utils");
let getLinks = utils.getLinks;
let isVowel = utils.isVowel;

var fizieren = function (str, params) {
  let indices = getLinks(str);
  let owofiziert = "";
  for (let i = 0; i < str.length; i++) {
    let url = indices.get(i);
    let c = str[i];
    if (url == undefined) {
      if ((c == "\\") & (i < str.length)) {
        c = "\\" + str[i + 1];
        i++;
      } else {
        if ((c == "l") | (c == "r")) {
          c = "w";
        } else if ((c == "L") | (c == "R")) {
          c = "W";
        } else if ((c.toLowerCase() == "n") & (i < str.length)) {
          if (isVowel(str[i + 1])) {
            if (c == "n") {
              c = "ny";
            } else if (c == "N" && str[i + 1].toUpperCase() == str[i + 1]) {
              c = "NY";
            }
          }
        }
      }
    } else {
      c = str.substring(i, i + url);
      i += url - 1;
    }
    owofiziert += c;
  }
  if (!params || (params && params.anschmiegen))
    return owofiziert + " *schmiegt an*";
  return owofiziert;
};

module.exports = {
  function: fizieren,
  name: "Owofy",
  show: true,
  params: [
    {
      name: "anschmiegen",
      type: "Boolean",
    },
  ],
};
