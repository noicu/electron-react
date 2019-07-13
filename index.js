const electron = require('electron');
const { app, BrowserWindow, Menu, ipcMain, ipcRenderer, Tray } = electron;


console.log('123'+process)
let isDevelopment = false;

if (isDevelopment) {
  require('electron-reload')(__dirname, {
    ignored: /node_modules|[\/\\]\./
  });
}

var mainWnd = null;

function createMainWnd() {
  mainWnd = new BrowserWindow({
    width: 1078,
    height: 698,
    frame:false
  });

  if (isDevelopment) {
    mainWnd.webContents.openDevTools();
  }

  mainWnd.loadURL(`file://${__dirname}/index.html`);

  mainWnd.on('closed', () => {
    mainWnd = null;
  });
}

app.on('ready', createMainWnd);

app.on('window-all-closed', () => {
  app.quit();
});
