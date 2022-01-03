import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "Z̙̐̏ḁ̇̊l̛̝͑g̢͓̰ơ̜̠",
  value: "zalgo",
  params: [
    {
      label: "Intensität",
      value: "intensity",
      type: ParamType.NUMBER,
    },
  ],
};

export default config;
