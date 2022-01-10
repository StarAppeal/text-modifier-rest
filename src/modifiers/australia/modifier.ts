import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import australiaMap from "../../constants/maps/australia";
import { getKeyByValue } from "../../globals/generatorHelpers";

const DEFAULT_PARAMS = {
  reverse: false,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };
  let result = "";
  request.text
    .split("")
    .reverse()
    .forEach(function (c) {
      result += params.reverse
        ? getKeyByValue(c, australiaMap)
        : australiaMap[c as keyof typeof australiaMap] ?? c;
    });
  return result;
}
