let utils = require("../utils");
let getLinks = utils.getLinks;

let db = require("../utils/edb");
const MAX_EMOJIS = 3; // Max number of emojis that get added after a word
const numberMap = {
  "0": "0️⃣",
  "1": "1️⃣",
  "2": "2️⃣",
  "3": "3️⃣",
  "4": "4️⃣",
  "5": "5️⃣",
  "6": "6️⃣",
  "7": "7️⃣",
  "8": "8️⃣",
  "9": "9️⃣",
};

var fizieren = function (str, params) {
  const words = str.split(" ");
  let numberEmojis;
  let emoji;
  let emojis;
  let emojiArray;
  let emojified = "";
  for (let word of words) {
    let dbWord = db[word.toLowerCase()];
    emojified += word;
    emojis = "";
    if (dbWord) {
      emojiArray = JSON.parse(JSON.stringify(dbWord));
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

  const indices = getLinks(emojified);
  let re = /[0-9]/g;
  while ((match = re.exec(emojified)) != null) {
    let isInsideLink = false;
    indices.forEach((value, key, map) => {
      if (match.index > key && match.index <= key + value) {
        isInsideLink = true;
      }
    });
    if (isInsideLink) {
      continue;
    }
    emojified =
      emojified.substring(0, match.index) +
      numberMap[emojified.charAt(match.index)] +
      emojified.substring(match.index + 1);
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

module.exports = {
  function: fizieren,
  name: "Emojify",
  show: true,
};
