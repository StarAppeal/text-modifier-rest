import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import {
  alphabetBasic,
  alphabetAdvanced,
  alphabetReversed,
} from "../../constants/maps/leet";

const DEFAULT_PARAMS = {
  advanced: false,
  reverse: false,
};

export default function modify(request: ModifierRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  let str = request.text;
  if (params.reverse) {
    alphabetReversed.map((x: any[]) => {
      str = str.replace(x[0], x[1]);
    });
    return str;
  }
  if (params.advanced) {
    str = leetify(str, alphabetAdvanced);
  }
  return leetify(str, alphabetBasic);
}

function leetify(str: string, ar: Record<string, string>) {
  let result = "";
  for (let char of str) {
    //TODO: better way of handling this corner case?
    if (char === "F") {
      result += "PH";
      continue;
    }
    let leetChar = ar[char.toLowerCase()];
    if (leetChar) result += leetChar;
    else result += char;
  }
  return result;
}
