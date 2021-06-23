tiny = new Map();
tiny.set("a", "ᵃ");
tiny.set("b", "ᵇ");
tiny.set("c", "ᶜ");
tiny.set("d", "ᵈ");
tiny.set("e", "ᵉ");
tiny.set("f", "ᶠ");
tiny.set("g", "ᵍ");
tiny.set("h", "ʰ");
tiny.set("i", "ⁱ");
tiny.set("j", "ʲ");
tiny.set("k", "ᵏ");
tiny.set("l", "ˡ");
tiny.set("m", "ᵐ");
tiny.set("n", "ⁿ");
tiny.set("o", "ᵒ");
tiny.set("p", "ᵖ");
tiny.set("q", "ᵠ");
tiny.set("r", "ʳ");
tiny.set("s", "ˢ");
tiny.set("t", "ᵗ");
tiny.set("u", "ᵘ");
tiny.set("v", "ᵛ");
tiny.set("w", "ʷ");
tiny.set("x", "ˣ");
tiny.set("y", "ʸ");
tiny.set("z", "ᶻ");
tiny.set("ä", "ᵃᵉ");
tiny.set("ö", "ᵒᵉ");
tiny.set("ü", "ᵘᵉ");
tiny.set("ß", "ˢˢ");
tiny.set("?", "ˀ");
tiny.set("!", "ᵎ");

var fizieren = function (str, params) {
  let smol = "";
  str
    .toLowerCase()
    .split("")
    .forEach(function (c) {
      if (!tiny.has(c)) smol += c;
      else smol += tiny.get(c);
    });
  return smol;
};

module.exports = {
  function: fizieren,
  name: "Tinify",
  show: true,
};
