"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tiny_1 = __importDefault(require("../../constants/maps/tiny"));
function generate(request) {
    let result = "";
    request.text
        .toLowerCase()
        .split("")
        .forEach(function (c) {
        var _a;
        result += (_a = tiny_1.default[c]) !== null && _a !== void 0 ? _a : c;
    });
    return result;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map