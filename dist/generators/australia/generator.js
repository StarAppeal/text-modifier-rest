"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const australia_1 = __importDefault(require("../../constants/maps/australia"));
const utils_1 = require("../../utils");
const DEFAULT_PARAMS = {
    reverse: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    let result = "";
    request.text
        .split("")
        .reverse()
        .forEach(function (c) {
        var _a;
        result += params.reverse
            ? (0, utils_1.getKeyByValue)(c, australia_1.default)
            : (_a = australia_1.default[c]) !== null && _a !== void 0 ? _a : c;
    });
    return result;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map