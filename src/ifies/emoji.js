let db = require("../utils/edb");

var fizieren = function (str) {
  return str + " " + getRandomOfArray(db[str]);
};

function getRandomOfArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = fizieren;
