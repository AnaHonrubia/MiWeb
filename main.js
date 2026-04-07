const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Ana Honrubia - CV",
    backgroundColor: '#000000',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Esta línea es la más importante: apunta a tu build de Atomic Design
  win.loadFile(path.join(__dirname, 'www/index.html'));

  // Opcional: Abrir la consola de desarrollador al empezar para ver errores
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});