"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DEFAULT_PARAMS = {
    intensity: 2,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    if (isNaN(params.intensity) || params.intensity < 0 || params.intensity > 100)
        return "Invalid intensity param";
    let result = "";
    request.text.split("").forEach(function (c) {
        result += c + getZalgoString(params.intensity);
    });
    return result;
}
exports.default = generate;
function getZalgoChar() {
    return String.fromCharCode(Math.random() * (880 - 768) + 768);
}
function getZalgoString(n) {
    return n === 0 ? getZalgoChar() : getZalgoChar() + getZalgoString(n - 1);
}
//# sourceMappingURL=generator.js.map