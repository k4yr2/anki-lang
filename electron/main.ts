import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
//import * as path from 'path';

app.commandLine.appendSwitch('disable-gpu'); 

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    mainWindow.setMenu(null);

    if(app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, 'next', 'index.html'));
    }
    else {
        mainWindow.loadURL('http://localhost:3000');
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
});

ipcMain.handle('navigate', (_event, href) => {
    const win = BrowserWindow.getFocusedWindow();
    if (!win) return;

    console.log("wtf");
    const targetPath = path.join(__dirname, 'next', href, 'index.html');
    win.loadFile(targetPath);
});