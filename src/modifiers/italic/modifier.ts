import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import italicMap from "../../constants/maps/italic";

export default function modify(request: ModifierRequest) {
  let result = "";
  request.text
    .split("")
    .forEach(c => {
      result += italicMap[c as keyof typeof italicMap] ?? c;
    });
  return result;
}
