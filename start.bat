@echo off

cd messages-service
pm2 start msg-service.config.js

cd ..
cd pos-portal-service
pm2 start portal-service.config.js

cd ..
cd pos-restaurant-2024/server
pm2 start pos-app.config.js

pm2 save
pm2 startup

start http://localhost:3000
