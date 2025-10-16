const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200, // Set a good default size for the chart app
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Optional: Open the DevTools (useful for debugging your HTML/JS)
  // mainWindow.webContents.openDevTools(); 
}

// When Electron is ready, create the window
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // On macOS, recreate a window when dock icon is clicked
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed (except on macOS)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
