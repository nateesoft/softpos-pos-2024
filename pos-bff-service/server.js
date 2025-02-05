require("dotenv").config()

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, process.env.WEB_FOLDER)));

const proxy = require('http-proxy').createProxyServer();

app.use('/api', function (req, res, next) {
    proxy.web(req, res, {
        target: `${process.env.BFF_API_HOST}`
    }, next);
});

app.use((req, res, next) => {
    if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
        next();
    } else {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.header('Expires', '-1');
        res.header('Pragma', 'no-cache');
        res.sendFile(path.join(__dirname, process.env.WEB_FOLDER, 'index.html'));
    }
});

// Serve React frontend for any unknown routes
app.get("*", (req, res) => {
    res.sendFile(express.static(path.join(__dirname, process.env.WEB_FOLDER)));
  });
  

const port = process.env.WEB_PORT || 80
console.log(`Website running port ${port}`)

app.listen(port);
