import ModifierConfig from "@/constants/interfaces/ModifierConfig";
import fs from "fs";
import path from "path";

const modifiers: Record<string, ModifierConfig> = {};

fs.readdirSync(__dirname)
  .filter((file) => !file.startsWith("index.js"))
  .forEach((dir) => {
    const dirPath = path.join(__dirname, dir);

    fs.readdirSync(dirPath)
      .filter((file) => file === "config.js")
      .map((file) => path.join(dirPath, file))
      .map((file) => require(file))
      .map((config) => config.default)
      .forEach((config) => (modifiers[config.value] = config)); 
  });

export default modifiers;
