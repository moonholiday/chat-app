import express from 'express';
import http from 'http';
import WebSocket from 'ws';

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    console.log('Websocket connection established');

    ws.on('message', (message: string) => {
        console.log(`received: ${message}`);

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

app.get('/', (req, res) => {
    res.send("hello world");
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
