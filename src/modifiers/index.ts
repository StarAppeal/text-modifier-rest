import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import fs from "fs";
import path from "path";

const modifiers: Record<string, ModifierConfig> = {};

fs.readdirSync(__dirname)
  .filter((file) => !file.startsWith("index.js"))
  .forEach((dir) => {
    fs.readdirSync(path.join(__dirname, dir))
      .filter((file) => file === "config.js")
      .map((file) => path.join(path.join(__dirname, dir), file))
      .map((file) => require(file))
      .map((config) => config.default)
      .forEach((config) => (modifiers[config.value] = config));
  });

export default modifiers;
