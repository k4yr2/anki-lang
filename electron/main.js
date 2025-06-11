import { app, BrowserWindow } from 'electron';
import serve from 'electron-serve';
import path from 'path';
//import * as path from 'path';

app.commandLine.appendSwitch('disable-gpu');
const isProd = !process.defaultApp;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            //preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
    });
    win.setMenu(null);

    if(isProd) {
        win.loadURL('app://./');
    }
    else {
        win.loadURL('http://localhost:3000');
    }

    win.webContents.openDevTools();
    return win;
}

(async () => {
    if (isProd) {
        serve({ directory: "app" })
    } else {
        app.setPath('userData', `${app.getPath('userData')} (development)`)
    }

    await app.whenReady();

    const win = createWindow();

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
})()