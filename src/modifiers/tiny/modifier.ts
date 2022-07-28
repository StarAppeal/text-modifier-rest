import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import tinyMap from "../../constants/maps/tiny";

export default function modify(request: ModifierRequest) {
  let result = "";
  request.text
    .toLowerCase()
    .split("")
    .forEach(c => {
      result += tinyMap[c as keyof typeof tinyMap] ?? c;
    });
  return result;
}
