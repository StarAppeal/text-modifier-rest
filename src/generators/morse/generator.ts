import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import morseMap from "../../constants/maps/morse";
import { getKeyByValue } from "../../utils";

const DEFAULT_PARAMS = {
  reverse: false,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  return params.reverse
    ? request.text
        .split(" ")
        .map((el) => {
          return el === "" ? " " : getKeyByValue(el, morseMap);
        })
        .join("")
        .replace(/  /g, " ")
    : request.text
        .toLowerCase()
        .split("")
        .map((el) => {
          return morseMap[el as keyof typeof morseMap] ?? el;
        })
        .join(" ");
}
