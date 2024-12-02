const { app, BrowserWindow } = require('electron');
const path = require('path')
require('dotenv').config();

const isDev = true
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.setMenu(null)
  const DESKTOP_RUNNING = process.env.DESKTOP
  const MACNO = process.env.MACNO

  const prodUrlPath = `file://${path.join(__dirname, 'build/index.html')}`
  const startURL = isDev ? `${WEB_HOSTING}/register-macno?macno=${MACNO}` : prodUrlPath;

  mainWindow.loadURL(startURL);
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
