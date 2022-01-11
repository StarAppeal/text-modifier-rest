import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import fancy from "../../constants/maps/fancy";

export default function modify(request: ModifierRequest) {
  let result = "";
  request.text.split("").forEach((c) => {
    result += fancy[c as keyof typeof fancy] ?? c;
  });
  return result;
}
