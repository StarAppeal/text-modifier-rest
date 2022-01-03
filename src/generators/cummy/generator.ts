import GeneratorRequest from "@/constants/interfaces/GeneratorRequest";

export default function generator(request: GeneratorRequest) {
  return request.text;
}
