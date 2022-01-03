"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const port = process.argv[2] === "DEBUG" ? 80 : process.env.PORT;
http_1.default.createServer(app_1.default).listen(port, function () {
    console.log("App listens on port: " + this.address().port);
});
//# sourceMappingURL=server.js.map