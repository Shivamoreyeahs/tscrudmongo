"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const mongoose_1 = require("mongoose");
const route_1 = require("../src/routes/route");
(0, mongoose_1.connect)('mongodb://0.0.0.0:27017/TSCRUD')
    .then(() => console.log("Connected too MongoDB..."))
    .catch((err) => console.error(err));
app.use(express_1.default.json());
app.use('/', route_1.router);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Connecting to the port ${PORT}`);
});
