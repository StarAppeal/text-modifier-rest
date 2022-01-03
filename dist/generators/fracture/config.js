"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParamType_1 = __importDefault(require("../../constants/enums/ParamType"));
const generator_1 = __importDefault(require("./generator"));
const config = {
    function: generator_1.default,
    label: "𝔉𝔯𝔞𝔠𝔱𝔲𝔯𝔢",
    value: "fracture",
    params: [
        {
            label: "Fett",
            value: "bold",
            type: ParamType_1.default.BOOLEAN,
        },
    ],
};
exports.default = config;
//# sourceMappingURL=config.js.map