import ModifierRequest from "@/constants/interfaces/ModifierRequest";
import { fraktur, frakturBold } from "../../constants/maps/fraktur";

const DEFAULT_PARAMS = {
  bold: false,
};

export default function modify(request: ModifierRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  let result = "";
  const fractureMap = params.bold ? frakturBold : fraktur;
  request.text.split("").forEach((c) => {
    result += fractureMap[c as keyof typeof fraktur] ?? c;
  });

  return result;
}
