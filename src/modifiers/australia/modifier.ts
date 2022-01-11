import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import australiaMap from "../../constants/maps/australia";
import { getKeyByValue } from "../../globals/modifierHelpers";

const DEFAULT_PARAMS = {
  reverse: false,
};

export default function modify(request: ModifierRequest) {
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
