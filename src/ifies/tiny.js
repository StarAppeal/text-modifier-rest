tiny = new Map();
tiny.set(97, "ᵃ");
tiny.set(98, "ᵇ");
tiny.set(99, "ᶜ");
tiny.set(100, "ᵈ");
tiny.set(101, "ᵉ");
tiny.set(102, "ᶠ");
tiny.set(103, "ᵍ");
tiny.set(104, "ʰ");
tiny.set(105, "ⁱ");
tiny.set(106, "ʲ");
tiny.set(107, "ᵏ");
tiny.set(108, "ˡ");
tiny.set(109, "ᵐ");
tiny.set(110, "ⁿ");
tiny.set(111, "ᵒ");
tiny.set(112, "ᵖ");
tiny.set(113, "ᵠ");
tiny.set(114, "ʳ");
tiny.set(115, "ˢ");
tiny.set(116, "ᵗ");
tiny.set(117, "ᵘ");
tiny.set(118, "ᵛ");
tiny.set(119, "ʷ");
tiny.set(120, "ˣ");
tiny.set(121, "ʸ");
tiny.set(122, "ᶻ");
tiny.set(132, "ᵃᵉ");
tiny.set(148, "ᵒᵉ");
tiny.set(129, "ᵘᵉ");
tiny.set(223, "ˢˢ");
tiny.set(63, "ˀ");
tiny.set(33, "ᵎ");

var fizieren = function (str) {
  let smol = "";
  str
    .toLowerCase()
    .split("")
    .forEach(function (c) {
      if (!tiny.has(c.charCodeAt(0))) smol += c;
      else smol += tiny.get(c.charCodeAt(0));
    });
  return smol;
};

module.exports = fizieren;
