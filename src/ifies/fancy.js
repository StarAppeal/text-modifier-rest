fancy = new Map();
fancy.set("A", "𝒜");
fancy.set("B", "ℬ");
fancy.set("C", "𝒞");
fancy.set("D", "𝒟");
fancy.set("E", "ℰ");
fancy.set("F", "ℱ");
fancy.set("G", "𝒢");
fancy.set("H", "ℋ");
fancy.set("I", "ℐ");
fancy.set("J", "𝒥");
fancy.set("K", "𝒦");
fancy.set("L", "ℒ");
fancy.set("M", "ℳ");
fancy.set("N", "𝒩");
fancy.set("O", "𝒪");
fancy.set("P", "𝒫");
fancy.set("Q", "𝒬");
fancy.set("R", "ℛ");
fancy.set("S", "𝒮");
fancy.set("T", "𝒯");
fancy.set("U", "𝒰");
fancy.set("V", "𝒱");
fancy.set("W", "𝒲");
fancy.set("X", "𝒳");
fancy.set("Y", "𝒴");
fancy.set("Z", "𝒵");
fancy.set("a", "𝒶");
fancy.set("b", "𝒷");
fancy.set("c", "𝒸");
fancy.set("d", "𝒹");
fancy.set("e", "ℯ");
fancy.set("f", "𝒻");
fancy.set("g", "ℊ");
fancy.set("h", "𝒽");
fancy.set("i", "𝒾");
fancy.set("j", "𝒿");
fancy.set("k", "𝓀");
fancy.set("l", "𝓁");
fancy.set("m", "𝓂");
fancy.set("n", "𝓃");
fancy.set("o", "ℴ");
fancy.set("p", "𝓅");
fancy.set("q", "𝓆");
fancy.set("r", "𝓇");
fancy.set("s", "𝓈");
fancy.set("t", "𝓉");
fancy.set("u", "𝓊");
fancy.set("v", "𝓋");
fancy.set("w", "𝓌");
fancy.set("x", "𝓍");
fancy.set("y", "𝓎");
fancy.set("z", "𝓏");
fancy.set("ä", "𝒶̈");
fancy.set("ö", "𝑜̈");
fancy.set("ü", "𝓊̈");
fancy.set("Ä", "𝒜ℰ");
fancy.set("Ö", "𝒪ℰ");
fancy.set("Ü", "𝒰ℰ");
fancy.set("ß", "𝓈𝓈");

var fizieren = function (str, params) {
  let fancyfied = "";
  str.split("").forEach(function (c) {
    if (!fancy.has(c)) fancyfied += c;
    else fancyfied += fancy.get(c);
  });
  return fancyfied;
};

module.exports = {
  function: fizieren,
  name: "Fancify",
  show: true,
};
