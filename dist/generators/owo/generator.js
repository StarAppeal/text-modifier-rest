"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const NUZZLE_TEXT = "*schmiegt an*";
const DEFAULT_PARAMS = {
    nuzzle: true,
};
function generate(request) {
    const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
    let indices = (0, utils_1.getLinks)(request.text);
    let result = "";
    for (let i = 0; i < request.text.length; i++) {
        let url = indices.get(i);
        let c = request.text[i];
        if (url == undefined) {
            if (c == "\\" && i < request.text.length) {
                c = "\\" + request.text[i + 1];
                i++;
            }
            else {
                if (c == "l" || c == "r") {
                    c = "w";
                }
                else if (c == "L" || c == "R") {
                    c = "W";
                }
                else if (c.toLowerCase() == "n" && i < request.text.length) {
                    if (isVowel(request.text[i + 1])) {
                        if (c == "n") {
                            c = "ny";
                        }
                        else if (c == "N" &&
                            request.text[i + 1].toUpperCase() == request.text[i + 1]) {
                            c = "NY";
                        }
                    }
                }
            }
        }
        else {
            c = request.text.substring(i, i + url);
            i += url - 1;
        }
        result += c;
    }
    if (params.nuzzle) {
        return [result, NUZZLE_TEXT].join(" ");
    }
    return result;
}
exports.default = generate;
function isVowel(s) {
    return /^[aeiou]$/i.test(s);
}
//# sourceMappingURL=generator.js.map