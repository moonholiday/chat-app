"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const ws_1 = __importDefault(require("ws"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.default.Server({ server });
wss.on('connection', (ws) => {
    console.log('A new WebSocket connection has been established.');
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send(`You sent: ${message}`);
    });
});
server.listen(3000, () => {
    console.log('WebSocket server is listening on port 3000');
});
