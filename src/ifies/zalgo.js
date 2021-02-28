const DEFAULT_INTENSITY = 2;

var fizieren = function (str, params) {
  const intensity =
    params.intensity !== undefined ? params.intensity : DEFAULT_INTENSITY;
  if (intensity < 0 || intensity > 100 || typeof intensity === "string")
    return "Invalid intensity param";
  console.log(params.intensity);
  let zalgofied = "";
  str.split("").forEach(function (c) {
    zalgofied += c + getZalgoString(intensity);
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
