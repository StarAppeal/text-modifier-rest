"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const braille_1 = __importDefault(require("braille"));
const DEFAULT_PARAMS = {
    reverse: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    const str = request.text
        .toUpperCase()
        .replace(/Ä/g, "AE")
        .replace(/Ö/g, "OE")
        .replace(/Ü/g, "UE");
    return params.reverse ? braille_1.default.toText(str) : braille_1.default.toBraille(str);
}
exports.default = generate;
//# sourceMappingURL=generator.js.map