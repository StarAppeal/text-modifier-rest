australia = new Map();
australia.set("A", "∀");
australia.set("B", "q");
australia.set("C", "Ɔ");
australia.set("D", "p");
australia.set("E", "Ǝ");
australia.set("F", "Ⅎ");
australia.set("G", "ꓨ");
australia.set("H", "H");
australia.set("I", "I");
australia.set("J", "ſ");
australia.set("K", "ʞ");
australia.set("L", "˥");
australia.set("M", "W");
australia.set("N", "N");
australia.set("O", "O");
australia.set("P", "Ԁ");
australia.set("Q", "Q");
australia.set("R", "ɹ");
australia.set("S", "S");
australia.set("T", "┴");
australia.set("U", "∩");
australia.set("V", "Λ");
australia.set("w", "M");
australia.set("X", "X");
australia.set("Y", "⅄");
australia.set("Z", "Z");
australia.set("a", "ɐ");
australia.set("b", "q");
australia.set("c", "ɔ");
australia.set("d", "p");
australia.set("e", "ǝ");
australia.set("f", "ɟ");
australia.set("g", "ɓ");
australia.set("h", "ɥ");
australia.set("i", "ᴉ");
australia.set("j", "ɾ");
australia.set("k", "ʞ");
australia.set("l", "l");
australia.set("m", "ɯ");
australia.set("n", "u");
australia.set("o", "o");
australia.set("p", "d");
australia.set("q", "b");
australia.set("r", "ɹ");
australia.set("s", "s");
australia.set("t", "ʇ");
australia.set("u", "n");
australia.set("v", "ʌ");
australia.set("w", "ʍ");
australia.set("x", "x");
australia.set("y", "ʎ");
australia.set("z", "z");
australia.set("Ä", "Ǝ∀");
australia.set("Ö", "ƎO");
australia.set("Ü", "Ǝ∩");
australia.set("ä", "ǝɐ");
australia.set("ö", "ǝo");
australia.set("ü", "ǝn");
australia.set("ß", "ss");
australia.set("?", "¿");
australia.set("!", "¡");
australia.set(".", "˙");

var fizieren = function (str, params) {
  let upside = "";
  str
    .split("")
    .reverse()
    .forEach(function (c) {
      if (!australia.has(c)) upside += c;
      else upside += australia.get(c);
    });
  return upside;
};

module.exports = {
  function: fizieren,
  name: "Australiafy",
  show: true,
};
