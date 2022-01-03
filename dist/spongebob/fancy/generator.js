"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fancy_1 = __importDefault(require("../../constants/maps/fancy"));
function generate(request) {
    let fancyfied = "";
    request.text.split("").forEach((c) => {
        if (!(c in fancy_1.default))
            fancyfied += c;
        else
            fancyfied += fancy_1.default[c];
    });
    return fancyfied;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map