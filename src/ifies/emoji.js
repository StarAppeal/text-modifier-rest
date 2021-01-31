let db = require("../utils/edb");
const MAX_EMOJIS = 3; // Max number of emojis that get added after a word

var fizieren = function (str) {
  const words = str.split(" ");
  let numberEmojis;
  let emoji;
  let emojis;
  let emojiArray;
  let emojified = "";
  for (word of words) {
    emojified += word;
    emojis = "";
    if (db[word]) {
      emojiArray = JSON.parse(JSON.stringify(db[word]));
    } else {
      emojified += " ";
      continue;
    }
    numberEmojis = Math.floor(Math.random() * MAX_EMOJIS) + 1;
    emoji = "";
    if (emojiArray) {
      for (let i = 0; i < numberEmojis; i++) {
        emoji = getRandomOfArray(emojiArray);
        if (emojis.includes(emoji) | !emoji) {
          continue;
        }
        emojis += emoji;
      }
    }
    emojified += emojis + " ";
  }
  return emojified.substring(0, emojified.length - 1);
};

function getRandomOfArray(arr) {
  if (!arr.length) {
    return "";
  }
  let index = Math.floor(Math.random() * arr.length);
  const selected = arr[index];
  arr.splice(index, 1);
  return selected;
}

module.exports = fizieren;
