import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import ParamType from "../../constants/enums/ParamType";
import modify from "./modifier";

const config: ModifierConfig = {
  function: modify,
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
