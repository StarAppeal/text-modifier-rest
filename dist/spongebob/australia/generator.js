"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const australia_1 = __importDefault(require("../../constants/maps/australia"));
const utils_1 = __importDefault(require("../../utils"));
function generate(request) {
    const reverse = request.params &&
        request.params.reverse !== undefined &&
        request.params.reverse;
    let result = "";
    console.log(request.params.reverse);
    request.text
        .split("")
        .reverse()
        .forEach(function (c) {
        if (reverse)
            result += utils_1.default.getKeyByValue(c, australia_1.default);
        else if (!(c in australia_1.default))
            result += c;
        else
            result += australia_1.default[c];
    });
    return result;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map