"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_PARAMS = {
    startLowerCase: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    let result = "";
    for (let i = 0; i < request.text.length; i++) {
        let char = request.text[i];
        let flag = params.startLowerCase ? 0 : 1;
        if (i % 2 === flag) {
            char = char.toLowerCase();
        }
        else {
            char = char.toUpperCase();
        }
        result += char;
    }
    return result;
}
exports.default = generate;
//# sourceMappingURL=generator.js.map