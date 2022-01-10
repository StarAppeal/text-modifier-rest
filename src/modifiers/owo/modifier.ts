import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import { getLinks } from "../../globals/generatorHelpers";

const NUZZLE_TEXT = "*schmiegt an*";
const DEFAULT_PARAMS = {
  nuzzle: true,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  let links = getLinks(request.text);
  let result = "";
  for (let i = 0; i < request.text.length; i++) {
    let url = links.find((link) => i === link.index)?.length;
    let c = request.text[i];
    if (!url) {
      if (c == "\\" && i < request.text.length) {
        c = "\\" + request.text[i + 1];
        i++;
      } else {
        if (c == "l" || c == "r") {
          c = "w";
        } else if (c == "L" || c == "R") {
          c = "W";
        } else if (c.toLowerCase() == "n" && i < request.text.length) {
          if (isVowel(request.text[i + 1])) {
            if (c == "n") {
              c = "ny";
            } else if (
              c == "N" &&
              request.text[i + 1].toUpperCase() == request.text[i + 1]
            ) {
              c = "NY";
            }
          }
        }
      }
    } else {
      c = request.text.substring(i, i + url);
      i += url - 1;
    }
    result += c;
  }
  if (params.nuzzle) {
    return [result, NUZZLE_TEXT].join(" ");
  }
  return result;
}

function isVowel(s: string) {
  return /^[aeiou]$/i.test(s);
}
