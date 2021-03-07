var morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ä: ".-.-",
  ö: "---.",
  ü: "..--",
  ß: "...--..",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "0": "-----",
  ".": ".-.-.-",
  ",": "--..--",
  ":": "---...",
  ";": ".-.-.-",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  _: "..--.-,",
  "(": "-.--.",
  ")": "-.--.-",
  "'": ".----.",
  '"': ".-..-.",
  "„": ".-..-.",
  "=": "-...-",
  "+": ".-.-.",
  "/": "-..-.",
  "@": ".--.-.",
};

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
