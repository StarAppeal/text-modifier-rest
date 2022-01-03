"use strict";
// var fs = require("fs");
// import fs from "fs";
//
// var files = fs.readdirSync("src/generators");
// let modules = {};
// files.forEach((f) => {
//   if (f === "index.js") return;
//   const file = f.replace(/\.[^/.]+$/, "");
//   modules[file] = require("./" + f);
// });
//
// export default modules;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./australia/config"));
const config_2 = __importDefault(require("./braille/config"));
exports.default = { [config_1.default.value]: config_1.default, [config_2.default.value]: config_2.default };
//# sourceMappingURL=index.js.map