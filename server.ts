import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    console.log('A new WebSocket connection has been established.');

    ws.on('message', (message: string) => {
        console.log(`Received: ${message}`);
        ws.send(`You sent: ${message}`);
    });
});

server.listen(3000, () => {
    console.log('WebSocket server is listening on port 3000');
});

