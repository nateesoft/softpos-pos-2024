@echo off

pm2 start messages-service/msg-service.config.js
pm2 start pos-portal-service/portal-service.config.js
pm2 start pos-restaurant/server/pos-app.config.js

pm2 save
pm2 startup

open http://localhost:3000
