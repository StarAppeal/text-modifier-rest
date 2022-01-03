"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphabetReversed = exports.alphabetAdvanced = exports.alphabetBasic = void 0;
const alphabetBasic = {
    a: "4",
    b: "8",
    e: "3",
    f: "ph",
    g: "6",
    l: "1",
    o: "0",
    s: "5",
    t: "7",
};
exports.alphabetBasic = alphabetBasic;
const alphabetAdvanced = {
    c: "(",
    d: "<|",
    h: "|-|",
    k: "|<",
    l: "|",
    m: "|\\/|",
    n: "|\\|",
    p: "|2",
    u: "|_|",
    v: "\\/",
    w: "\\/\\/",
    x: "><",
    y: "'/",
};
exports.alphabetAdvanced = alphabetAdvanced;
const alphabetReversed = [
    [/(\|\\\/\|)/g, "m"],
    [/(\|\\\|)/g, "n"],
    [/(\()/g, "c"],
    [/(<\|)/g, "d"],
    [/\|-\|/g, "h"],
    [/(\|<)/g, "k"],
    [/(\|2)/g, "p"],
    [/(\|_\|)/g, "u"],
    [/(\/\/)/g, "w"],
    [/(><)/g, "x"],
    [/(\|)/g, "l"],
    [/(\'\/)/g, "y"],
    [/(\/)/g, "v"],
    [/(1)/g, "l"],
    [/(0)/g, "o"],
    [/(3)/g, "e"],
    [/(4)/g, "a"],
    [/(5)/g, "s"],
    [/(6)/g, "g"],
    [/(7)/g, "t"],
    [/(8)/g, "b"],
    [/(ph)/g, "f"],
];
exports.alphabetReversed = alphabetReversed;
//# sourceMappingURL=leet.js.map