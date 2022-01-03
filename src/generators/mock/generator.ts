import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";

const DEFAULT_PARAMS = {
  startLowerCase: false,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  let result = "";
  for (let i = 0; i < request.text.length; i++) {
    let char = request.text[i];
    let flag = params.startLowerCase ? 0 : 1;
    if (i % 2 === flag) {
      char = char.toLowerCase();
    } else {
      char = char.toUpperCase();
    }
    result += char;
  }
  return result;
}
