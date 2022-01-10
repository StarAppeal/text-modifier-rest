import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";
import braille from "braille";

const DEFAULT_PARAMS = {
  reverse: false,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  const str = request.text
    .toUpperCase()
    .replace(/Ä/g, "AE")
    .replace(/Ö/g, "OE")
    .replace(/Ü/g, "UE");
  return params.reverse ? braille.toText(str) : braille.toBraille(str);
}
