"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morse_1 = __importDefault(require("../../constants/maps/morse"));
const utils_1 = require("../../utils");
const DEFAULT_PARAMS = {
    reverse: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    return params.reverse
        ? request.text
            .split(" ")
            .map((el) => {
            return el === "" ? " " : (0, utils_1.getKeyByValue)(el, morse_1.default);
        })
            .join("")
            .replace(/  /g, " ")
        : request.text
            .toLowerCase()
            .split("")
            .map((el) => {
            var _a;
            return (_a = morse_1.default[el]) !== null && _a !== void 0 ? _a : el;
        })
            .join(" ");
}
exports.default = generate;
//# sourceMappingURL=generator.js.map