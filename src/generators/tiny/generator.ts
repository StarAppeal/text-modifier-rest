import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import tinyMap from "../../constants/maps/tiny";

export default function generate(request: GeneratorRequest) {
  let result = "";
  request.text
    .toLowerCase()
    .split("")
    .forEach(function (c) {
      result += tinyMap[c as keyof typeof tinyMap] ?? c;
    });
  return result;
}
