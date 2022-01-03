import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import fancy from "../../constants/maps/fancy";

export default function generate(request: GeneratorRequest) {
  let result = "";
  request.text.split("").forEach((c) => {
    result += fancy[c as keyof typeof fancy] ?? c;
  });
  return result;
}
