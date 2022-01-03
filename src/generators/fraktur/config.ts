import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "𝔉𝔯𝔞𝔨𝔱𝔲𝔯",
  value: "fraktur",
  params: [
    {
      label: "Fett",
      value: "bold",
      type: ParamType.BOOLEAN,
    },
  ],
};

export default config;
