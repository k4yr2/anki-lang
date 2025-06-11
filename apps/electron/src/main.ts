import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import serve from 'electron-serve';
import path from 'path';

app.commandLine.appendSwitch('disable-gpu');
const isProd = !process.defaultApp;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(app.getAppPath(), 'app', 'preload.js'),
        },
    });
    win.setMenu(null);

    if(isProd) {
        win.loadURL('app://./');
    }
    else {
        win.loadURL('http://localhost:3000');
    }

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
    let hasFocused = false;

    globalShortcut.register('F12', () => {
        if (hasFocused) {
            win.webContents.toggleDevTools();
        }
    });

    win.on('focus', () => {
        hasFocused = true;
    });

    win.on('blur', () => {
        hasFocused = false;
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
})()

ipcMain.on('settings.openAI.getKey', (event) => {
    const key = window.settings?.openAI?.getKey();
    event.returnValue = key || null;
});

ipcMain.on('settings.openAI.setKey', (event, value) => {
    window.settings?.openAI?.setKey(value);
    event.returnValue = true;
});