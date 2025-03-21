@echo off

pm2 start pos-app.config.js

start http://localhost:3000
