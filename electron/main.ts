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

    if(!app.isPackaged) {
        const appPath = app.getAppPath();
        const indexPath = path.join(appPath, "next", "index.html");
        mainWindow.loadFile(indexPath).then(() => {console.log("IM in")}).catch(err => {
            console.error("Error loading file:", err);
        });
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

    console.log("asddas");
    console.log('appPath:', app.getAppPath());
console.log('indexPath:', path.join(app.getAppPath(), 'next', 'index.html'));
console.log('isPackaged:', app.isPackaged);

});