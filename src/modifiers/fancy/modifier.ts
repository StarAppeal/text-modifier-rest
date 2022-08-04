import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import fancyMap from "../../constants/maps/fancy";
import { defaultModifier } from '../../globals/modifierHelpers';

export default function modify(request: ModifierRequest) {
  return defaultModifier(request.text, fancyMap);
}
