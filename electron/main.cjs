const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const { createServer } = require('./server.cjs');
const isDev = process.env.NODE_ENV === 'development';

let mainWindow;
let server;

async function startServer() {
  try {
    server = await createServer(isDev);
    console.log('Server started successfully');
  } catch (err) {
    console.error('Failed to start server:', err);
    app.quit();
  }
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
      sandbox: true,
      preload: path.join(__dirname, 'preload.cjs')
    }
  });

  // Set CSP headers for the window
  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self'; " +
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
          "style-src 'self' 'unsafe-inline'; " +
          "img-src 'self' data: https:; " +
          "font-src 'self' data: https:; " +
          "connect-src 'self' https: ws: wss:; " +
          "media-src 'self' https:; " +
          "object-src 'none'; " +
          "child-src 'none'; " +
          "frame-src 'none'; " +
          "base-uri 'self'; " +
          "form-action 'self'; " +
          "frame-ancestors 'none';"
        ]
      }
    });
  });

  // Always load from localhost:5173 since we're running our own server
  mainWindow.loadURL('http://localhost:5173');

  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// Start the app
app.whenReady().then(async () => {
  await startServer();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (server && server.close) {
      server.close();
    }
    app.quit();
  }
});

app.on('before-quit', () => {
  if (server && server.close) {
    server.close();
  }
}); 