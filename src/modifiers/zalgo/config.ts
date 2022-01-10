import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import ParamType from "../../constants/enums/ParamType";
import modify from "./modifier";

const config: ModifierConfig = {
  function: modify,
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
