"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const artistRoute_1 = __importDefault(require("./routes/artistRoute"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1', artistRoute_1.default);
const port = 5050;
app.listen(port, () => {
    console.log("app running on port " + port);
});
