import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import mirrorMap from "../../constants/maps/mirror";
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
    .forEach(c => {
      result += params.reverse
        ? getKeyByValue(c, mirrorMap)
        : mirrorMap[c as keyof typeof mirrorMap] ?? c;
    });
  return result;
}
