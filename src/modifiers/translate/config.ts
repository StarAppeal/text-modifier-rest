import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "(Shitty) Translate",
  value: "translate",
  params: [
    {
      label: "Anzahl Übersetzungen",
      value: "numberTranslations",
      type: ParamType.NUMBER,
    },
  ],
};

export default config;
