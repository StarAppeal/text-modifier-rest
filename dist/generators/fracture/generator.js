"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fracture_1 = require("../../constants/maps/fracture");
const DEFAULT_PARAMS = {
    bold: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    let result = "";
    const fractureMap = params.bold ? fracture_1.fractureBold : fracture_1.fracture;
    request.text.split("").forEach((c) => {
        var _a;
        result += (_a = fractureMap[c]) !== null && _a !== void 0 ? _a : c;
    });
    return result;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map