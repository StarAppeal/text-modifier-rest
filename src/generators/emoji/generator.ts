import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import { getLinks } from "../../globals/generatorHelpers";
import stringSimilarity from "string-similarity";
import emojiMap from "../../constants/maps/emoji";

interface EmojiString {
  strippedString: string;
  originalString: string;
  emojiIndex: number;
}

const DEFAULT_PARAMS = {
  maxEmojis: 2,
};

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

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  let textWithNumberEmojis = request.text;
  const indices = getLinks(textWithNumberEmojis);
  let re = /[0-9]/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(textWithNumberEmojis)) != null) {
    let isInsideLink = false;
    indices.forEach((value, key) => {
      if (match.index > key && match.index <= key + value) {
        isInsideLink = true;
      }
    });
    if (isInsideLink) {
      continue;
    }
    textWithNumberEmojis =
      textWithNumberEmojis.substring(0, match.index) +
      numberMap[
        textWithNumberEmojis.charAt(match.index) as keyof typeof numberMap
      ] +
      textWithNumberEmojis.substring(match.index + 1);
  }

  const words = textWithNumberEmojis.split(" ");
  let numberEmojis;
  let emoji;
  let emojis;
  let emojiArray;
  let result = "";
  const dbWords = Object.keys(emojiMap);
  for (let word of words) {
    let dbWord;
    const emojiString = removePunctuations(word);
    if (emojiString.strippedString.length >= 6) {
      let bestMatch = stringSimilarity.findBestMatch(
        emojiString.strippedString,
        dbWords
      ).bestMatch;
      if (bestMatch.rating >= 0.7) {
        dbWord = emojiMap[bestMatch.target as keyof typeof emojiMap];
      }
    } else {
      dbWord = emojiMap[emojiString.strippedString as keyof typeof emojiMap];
    }

    result += emojiString.originalString.substring(0, emojiString.emojiIndex);
    emojis = "";
    if (dbWord && dbWord.length) {
      emojiArray = JSON.parse(JSON.stringify(dbWord));
    } else {
      result += " ";
      continue;
    }
    numberEmojis = Math.floor(Math.random() * params.maxEmojis) + 1;
    emoji = "";
    if (emojiArray) {
      for (let i = 0; i < numberEmojis; i++) {
        emoji = getRandomOfArray(emojiArray);
        if (emojis.includes(emoji) || !emoji) {
          continue;
        }
        emojis += emoji;
      }
    }
    result +=
      emojis +
      emojiString.originalString.substring(emojiString.emojiIndex) +
      " ";
  }

  return result.substring(0, result.length - 1);
}

function getRandomOfArray(arr: string[]) {
  if (!arr.length) {
    return "";
  }
  let index = Math.floor(Math.random() * arr.length);
  const selected = arr[index];
  arr.splice(index, 1);
  return selected;
}

function removePunctuations(str: string): EmojiString {
  const lowerStr = str.toLowerCase();
  if (!/[,|.|!|?|;|(|)|"]/g.test(str)) {
    return {
      strippedString: lowerStr,
      originalString: str,
      emojiIndex: str.length,
    };
  }

  return {
    strippedString: lowerStr.replace(/[,|.|!|?|;|(|)|"]/g, ""),
    originalString: str,
    emojiIndex: /[,|.|!|?|;|(|)|"]*$/.exec(str).index,
  };
}
