"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leet_1 = require("../../constants/maps/leet");
const DEFAULT_PARAMS = {
    advanced: false,
    reverse: false,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    let str = request.text;
    if (params.reverse) {
        leet_1.alphabetReversed.map((x) => {
            str = str.replace(x[0], x[1]);
        });
        return str;
    }
    if (params.advanced) {
        str = leetify(str, leet_1.alphabetAdvanced);
    }
    return leetify(str, leet_1.alphabetBasic);
}
exports.default = generate;
function leetify(str, ar) {
    let result = "";
    for (let char of str) {
        //TODO: better way of handling this corner case?
        if (char === "F") {
            result += "PH";
            continue;
        }
        let leetChar = ar[char.toLowerCase()];
        if (leetChar)
            result += leetChar;
        else
            result += char;
    }
    return result;
}
//# sourceMappingURL=generator.js.map