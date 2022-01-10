import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import ParamType from "../../constants/enums/ParamType";
import modify from "./modifier";

const config: ModifierConfig = {
  function: modify,
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
