const { app, BrowserWindow } = require('electron');
const path = require('path')

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

  const prodUrlPath = `file://${path.join(__dirname, 'build/index.html')}`

  const startURL = isDev ? 'http://localhost:3000' : prodUrlPath;

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
