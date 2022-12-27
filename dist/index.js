"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send('HolA DESDE EL SERVIDOR con ts');
});
app.get('/hello', (req, res) => {
    res.send('HolA DESDE EL SERVIDOR con ts desde helloword');
});
app.listen(port, () => {
    console.log(`EXPRESS SERVER: Running at http://localhots:${port}`);
});
