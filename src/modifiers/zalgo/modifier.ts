import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";

const DEFAULT_PARAMS = {
  intensity: 2,
};

export default function generate(request: GeneratorRequest) {
  const params = { ...DEFAULT_PARAMS, ...request.params };

  if (isNaN(params.intensity) || params.intensity < 0 || params.intensity > 100)
    return "Invalid intensity param";
  let result = "";
  request.text.split("").forEach(function (c) {
    result += c + getZalgoString(params.intensity);
  });
  return result;
}

function getZalgoChar() {
  return String.fromCharCode(Math.random() * (880 - 768) + 768);
}

function getZalgoString(n: number): string {
  return n === 0 ? getZalgoChar() : getZalgoChar() + getZalgoString(n - 1);
}
