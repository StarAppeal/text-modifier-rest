import GeneratorRequest from "./GeneratorRequest";
import Param from "./Param";

interface GeneratorConfig {
  function: (request: GeneratorRequest) => string | Promise<string>;
  label: string;
  value: string;
  hidden?: boolean;
  params?: Param[];
}

export default GeneratorConfig;
