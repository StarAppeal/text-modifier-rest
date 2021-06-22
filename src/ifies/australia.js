australia = new Map();
australia.set(65, "∀");
australia.set(66, "q");
australia.set(67, "Ɔ");
australia.set(68, "p");
australia.set(69, "Ǝ"); // nice
australia.set(70, "Ⅎ");
australia.set(71, "פ");
australia.set(72, "H");
australia.set(73, "I");
australia.set(74, "ſ");
australia.set(75, "ʞ");
australia.set(76, "˥");
australia.set(77, "W");
australia.set(78, "N");
australia.set(79, "O");
australia.set(80, "Ԁ");
australia.set(81, "Q");
australia.set(82, "ɹ");
australia.set(83, "S");
australia.set(84, "┴");
australia.set(85, "∩");
australia.set(86, "Λ");
australia.set(87, "M");
australia.set(88, "X");
australia.set(89, "⅄");
australia.set(90, "Z");
australia.set(97, "ɐ");
australia.set(98, "q");
australia.set(99, "ɔ");
australia.set(100, "p");
australia.set(101, "ǝ");
australia.set(102, "ɟ");
australia.set(103, "ƃ");
australia.set(104, "ɥ");
australia.set(105, "ᴉ");
australia.set(106, "ɾ");
australia.set(107, "ʞ");
australia.set(108, "l");
australia.set(109, "ɯ");
australia.set(110, "u");
australia.set(111, "o");
australia.set(112, "d");
australia.set(113, "b");
australia.set(114, "ɹ");
australia.set(115, "s");
australia.set(116, "ʇ");
australia.set(117, "n");
australia.set(118, "ʌ");
australia.set(119, "ʍ");
australia.set(120, "x");
australia.set(121, "ʎ");
australia.set(122, "z");
australia.set(196, "∀Ǝ");
australia.set(214, "OƎ");
australia.set(220, "∩Ǝ");
australia.set(129, "nǝ");
australia.set(223, "ss");
australia.set(63, "¿");
australia.set(33, "¡");
australia.set(46, "˙");

var fizieren = function (str, params) {
  let upside = "";
  str
    .split("")
    .reverse()
    .forEach(function (c) {
      if (!australia.has(c.charCodeAt(0))) upside += c;
      else upside += australia.get(c.charCodeAt(0));
    });
  return upside;
};

module.exports = {
  function: fizieren,
  name: "Australiafy",
  show: true,
};
