import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import { defaultModifier } from "../../globals/modifierHelpers";
import italicMap from "../../constants/maps/italic";

export default function modify(request: ModifierRequest) {
  return defaultModifier(request.text, italicMap);
}
