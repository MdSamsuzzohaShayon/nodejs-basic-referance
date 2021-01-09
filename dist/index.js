"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const app: express.Application = express();
const app = express_1.default();
app.get('/', (req, res, next) => {
    res.send("server is running");
});
app.listen(5000, () => console.log("Server is running on port 5000"));
