@echo off

cd pos-printer-service
pm2 start prtservice.config.js

cd ..
cd pos-restaurant-service
pm2 start service.config.js

cd ..
cd pos-restaurant-2024/server
pm2 start webapp.config.js

pm2 save
pm2 startup

open http://localhost:3000
