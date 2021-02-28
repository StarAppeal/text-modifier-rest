var fizieren = function (str) {
  let zalgofied = "";
  str.split("").forEach(function (c) {
    zalgofied += c + getZalgoString(2);
  });
  return zalgofied;
};

function getZalgoChar() {
  return String.fromCharCode(Math.random() * (880 - 768) + 768);
}

function getZalgoString(n) {
  if (n == 0) return getZalgoChar();
  return getZalgoChar() + getZalgoString(n - 1);
}

module.exports = fizieren;
