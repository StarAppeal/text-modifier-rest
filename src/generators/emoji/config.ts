import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "Emoji😂",
  value: "emoji",
  params: [
    {
      label: "Maximale Emoji-Anzahl pro Wort",
      value: "maxEmojis",
      type: ParamType.NUMBER,
    },
  ],
};

export default config;
