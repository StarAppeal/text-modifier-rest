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
  let result = {};
  for (let prop in input) {
    let s = prop.split(",");
    for (let i = 0; i < s.length; i++) {
      result[s[i]] = input[prop];
    }
  }
  return result;
}
