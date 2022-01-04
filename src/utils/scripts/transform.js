const fs = require("fs");

let config = {
  inputFile: process.env.npm_config_inputfile,
  outputFile: process.env.npm_config_outputfile,
};

console.log("inputFile: " + config.inputFile);
console.log("outputFile: " + config.outputFile);

console.log("Reading inputfile...");
let content = JSON.parse(fs.readFileSync(config.inputFile, "utf8"));

console.log("transforming to correct syntax...");
let result = transform(content);

console.log("writing file");
fs.writeFileSync(config.outputFile, JSON.stringify(result));

function transform(input) {
  const result = {};
  const duplicates = [];
  for (const [key, value] of Object.entries(input)) {
    const keys = key.split(",");
    keys.forEach((isolatedKey) => {
      if (result[isolatedKey]) {
        duplicates.push(isolatedKey)
      }
      result[isolatedKey] =
        result[isolatedKey] && input[key].length
          ? result[isolatedKey].concat(input[key])
          : input[key];
    });
  }
  console.log(duplicates)
  return result;
}
