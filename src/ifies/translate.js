const translatte = require("translatte");

const langs = [
  "en",
  "fr",
  "tr",
  "it",
  "la",
  "zu",
  "sl",
  "ru",
  "ja",
  "hr",
  "nl",
  "de",
];

const fizieren = async (str, params) => {
  let result = await translateShitty(str);
  return result;
};

const translateShitty = async (str, langIndex = 0, tries = 0) => {
  try {
    if (langIndex === langs.length) {
      return str;
    }
    let result = await translatte(str, { to: langs[langIndex] });
    return translateShitty(result.text, langIndex + 1);
  } catch (error) {
    console.log(error);
    return translateShitty(str, langIndex, tries + 1);
  }
};

module.exports = fizieren;
