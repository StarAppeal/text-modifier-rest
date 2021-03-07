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
];

const fizieren = async (str, params) => {
  const n =
    params && params.numberTranslations !== undefined
      ? params.numberTranslations
      : langs.length;
  let result = await translateShitty(str, n);
  return result;
};

const translateShitty = async (str, n, langIndex = 0, tries = 0) => {
  try {
    if (langIndex === n) {
      let result = await translatte(str, { to: "de" });
      return result.text;
    }
    let result = await translatte(str, { to: langs[langIndex] });
    return translateShitty(result.text, n, langIndex + 1);
  } catch (error) {
    console.log(error);
    return translateShitty(str, langIndex, tries + 1);
  }
};

module.exports = {
  function: fizieren,
  name: "(Shitty) Translatify",
  show: true,
  params: [
    {
      name: "numberTranslations",
      type: "Number",
    },
  ],
};
