import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import translatte from "translatte";

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

const DEFAULT_PARAMS = {
  numberTranslations: 3,
};

export default async function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };
  return await translateShitty(request.text, params.numberTranslations);
}

const translateShitty = async (
  str: string,
  n: number,
  langIndex = 0,
  tries = 0
): Promise<string> => {
  try {
    if (langIndex === n) {
      const result = await translatte(str, { to: "de" });
      return result.text;
    }
    const result = await translatte(str, { to: langs[langIndex] });
    return translateShitty(result.text, n, langIndex + 1);
  } catch (error) {
    console.log(error);
    return translateShitty(str, langIndex, tries + 1);
  }
};
