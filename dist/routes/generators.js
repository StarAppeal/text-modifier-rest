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
const express_1 = __importDefault(require("express"));
const generators_1 = __importDefault(require("../generators"));
const router = express_1.default.Router();
Object.keys(generators_1.default).forEach((generatorKey) => {
    router.post("/" + generators_1.default[generatorKey].value, function (req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.status(200).send(yield compute(req.body, req.url.substring(1)));
        });
    });
});
router.get("/", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = generators_1.default;
        res.status(200).send(result);
    });
});
function compute(req, url) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`Received call to ${url}`);
        const generatorFunction = generators_1.default[url].function;
        const oldTime = new Date().getTime();
        const generated = yield generatorFunction(req);
        const time = new Date().getTime() - oldTime;
        console.log(`Response is: ${generated}`);
        console.log(`Time: ${time}`);
        const result = { text: generated, time };
        return result;
    });
}
exports.default = router;
//# sourceMappingURL=generators.js.map