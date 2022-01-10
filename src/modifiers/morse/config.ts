import GeneratorConfig from "@/constants/interfaces/GeneratorConfig";
import ParamType from "../../constants/enums/ParamType";
import generate from "./generator";

const config: GeneratorConfig = {
  function: generate,
  label: "-- --- .-. ... .",
  value: "morse",
  params: [
    {
      label: "Rückgängig",
      value: "reverse",
      type: ParamType.BOOLEAN,
    },
  ],
};

export default config;
