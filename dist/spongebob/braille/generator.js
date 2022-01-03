"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const braille_1 = __importDefault(require("braille"));
// const br = require("braille");
function generate(request) {
    const reverse = request.params && request.params.reverse !== undefined
        ? request.params.reverse
        : false;
    request.text = request.text
        .toUpperCase()
        .replace(/Ä/g, "AE")
        .replace(/Ö/g, "OE")
        .replace(/Ü/g, "UE");
    return reverse
        ? braille_1.default.toText(request.text)
        : braille_1.default.toBraille(request.text);
}
exports.default = generate;
//# sourceMappingURL=generator.js.map