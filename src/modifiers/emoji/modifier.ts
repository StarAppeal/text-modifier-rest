import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import {
  extractLinks,
  insertLinks,
  getRandomNumber,
} from "../../globals/modifierHelpers";
import { LinkExtraction } from "@/constants/interfaces/Links";
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

const PUNCTUATION_MARKS = [
  ",",
  ".",
  "!",
  "?",
  ";",
  "(",
  ")",
  '"',
  "'",
  ":",
  "-",
];

const REGEX_EVERY_PUNCTUATION = new RegExp(
  `[${PUNCTUATION_MARKS.join("")}]+`,
  "g"
);

const REGEX_TRAILING_PUNCTUATION = new RegExp(
  `[${PUNCTUATION_MARKS.join("")}]*$`
);

export default function modify(request: ModifierRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  const textWithNumberEmojis = replaceAllNumbers(request.text);

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
      result +=
        emojiString.originalString.substring(emojiString.emojiIndex) + " ";
      continue;
    }
    numberEmojis = getRandomNumber(params.maxEmojis) + 1; // should have atleast 1 emoji
    emoji = "";
    if (emojiArray) {
      for (let i = 0; i < numberEmojis; i++) {
        const randomNumber = getRandomNumber(emojiArray.length);
        emoji = emojiArray[randomNumber];
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

function replaceAllNumbers(str: string) {
  const splitString: LinkExtraction = extractLinks(str);

  let editedTextParts: string[] = [];
  splitString.textParts.forEach((textPart) => {
    editedTextParts.push(replaceNumbers(textPart));
  });

  return insertLinks(editedTextParts, splitString.extractedLinks);
}

function replaceNumbers(str: string) {
  const regex = /[0-9]/g;
  let result = str;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(result))) {
    result =
      result.substring(0, match.index) +
      numberMap[match[0] as keyof typeof numberMap] +
      result.substring(match.index + 1);
  }
  return result;
}

function removePunctuations(str: string): EmojiString {
  const lowerStr = str.toLowerCase();
  if (!PUNCTUATION_MARKS.some((punctuation) => str.includes(punctuation))) {
    return {
      strippedString: lowerStr,
      originalString: str,
      emojiIndex: str.length,
    };
  }

  return {
    strippedString: lowerStr.replace(REGEX_EVERY_PUNCTUATION, ""),
    originalString: str,
    emojiIndex: REGEX_TRAILING_PUNCTUATION.exec(str).index,
  };
}
