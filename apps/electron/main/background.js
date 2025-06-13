import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import Store from 'electron-store';
import serve from 'electron-serve';
import path from 'path';

app.commandLine.appendSwitch('disable-gpu');
const isProd = !process.defaultApp;
const store = new Store({
    name: 'settings',
    cwd: app.getPath('userData'),
    encryptionKey: 'mein_sprache_welt_mit_sprachx',
    clearInvalidConfig: true,
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            nodeIntegration: false,
            preload: path.join(app.getAppPath(), 'main', 'preload.js'),
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

if (isProd) {
    serve({ directory: "app" })
} else {
    app.setPath('userData', `${app.getPath('userData')} (development)`)
}

app.whenReady().then(() => {

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
});

ipcMain.handle('openAI.getKey', () => {
    return store.get("openAI.key") || null;
});

ipcMain.handle('openAI.setKey', (_, value) => {
    store.set("openAI.key", value);
});