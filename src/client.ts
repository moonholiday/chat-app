import WebSocket from "ws";

const socket = new WebSocket('ws://localhost:3000/');

socket.onopen = () => {
    console.log('web socket connection opened.');
    socket.send('Hello websocket server');
}

socket.onmessage = (event) => {
    console.log(`received from server: ${event.data}`);

    socket.send('hello, websocket server');
}

socket.onclose = (event) => {
    console.log(`web socket connection closed: ${event.code}  ${event.reason}`);
}
