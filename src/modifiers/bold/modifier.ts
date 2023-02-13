import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import boldMap from "../../constants/maps/bold";
import { defaultModifier } from "../../globals/modifierHelpers";

export default function modify(request: ModifierRequest) {
  return defaultModifier(request.text, boldMap);
}
