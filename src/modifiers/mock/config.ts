import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "MoCk",
  value: "mock",
  params: [
    {
      label: "Mit Großbuchstaben beginnen",
      value: "startLowerCase",
      type: ParamType.BOOLEAN,
    },
  ],
};

export default config;
