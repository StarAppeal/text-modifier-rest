import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "owo",
  value: "owo",
  params: [
    {
      label: "Anschmiegen",
      value: "nuzzle",
      type: ParamType.BOOLEAN,
    },
  ],
};

export default config;
