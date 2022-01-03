"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let utils = require("../utils");
let australia = utils.maps.australia;
function generate(request) {
    const reverse = request.params &&
        request.params.reverse !== undefined &&
        request.params.reverse;
    let result = "";
    request.text
        .split("")
        .reverse()
        .forEach(function (c) {
        if (reverse)
            result += utils.getKeyByValue(c, australia);
        else if (!(c in australia))
            result += c;
        else
            result += australia[c];
    });
    return result;
}
exports.default = generate;
//# sourceMappingURL=australia.js.map