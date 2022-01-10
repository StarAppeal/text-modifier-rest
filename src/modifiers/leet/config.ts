import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "1337",
  value: "leet",
  params: [
    {
      label: "Erweitert",
      value: "advanced",
      type: ParamType.BOOLEAN,
    },
    {
      label: "Rückgängig",
      value: "reverse",
      type: ParamType.BOOLEAN,
    },
  ],
};

export default config;
