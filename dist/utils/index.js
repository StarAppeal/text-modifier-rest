"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyByValue = exports.getLinks = void 0;
const getLinks = function (str) {
    let matches = str.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi);
    let indices = new Map();
    if (matches != null) {
        for (let i = 0; i < matches.length; i++) {
            let index = str.indexOf(matches[i]);
            indices.set(index, matches[i].length);
        }
    }
    return indices;
};
exports.getLinks = getLinks;
const getKeyByValue = function (value, map) {
    return Object.keys(map).find((key) => map[key] === value);
};
exports.getKeyByValue = getKeyByValue;
//# sourceMappingURL=index.js.map