import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import ParamType from "../../constants/enums/ParamType";
import modify from "./modifier";

const config: ModifierConfig = {
  function: modify,
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
