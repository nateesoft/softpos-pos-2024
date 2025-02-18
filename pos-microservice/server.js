const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req, res) => {
    res.send("Socket.IO Server is running");
});

io.on("connection", (socket) => {
    console.log("A client connected:", socket.id);

    // รับข้อความจาก client
    socket.on("message", (data) => {
        console.log("Received from client:", data);
        // ส่งข้อความกลับไปยัง client
        socket.emit("reply", "Hello from server!");
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected:", socket.id);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});
