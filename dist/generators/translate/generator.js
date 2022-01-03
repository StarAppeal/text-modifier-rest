"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const translatte_1 = __importDefault(require("translatte"));
const langs = [
    "en",
    "fr",
    "tr",
    "it",
    "la",
    "zu",
    "sl",
    "ru",
    "ja",
    "hr",
    "nl",
];
const DEFAULT_PARAMS = {
    numberTranslations: 3,
};
function generate(request) {
    return __awaiter(this, void 0, void 0, function* () {
        const params = Object.assign(Object.assign({}, DEFAULT_PARAMS), request.params);
        return yield translateShitty(request.text, params.numberTranslations);
    });
}
exports.default = generate;
const translateShitty = (str, n, langIndex = 0, tries = 0) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (langIndex === n) {
            const result = yield (0, translatte_1.default)(str, { to: "de" });
            return result.text;
        }
        const result = yield (0, translatte_1.default)(str, { to: langs[langIndex] });
        return translateShitty(result.text, n, langIndex + 1);
    }
    catch (error) {
        console.log(error);
        return translateShitty(str, langIndex, tries + 1);
    }
});
//# sourceMappingURL=generator.js.map