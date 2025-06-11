import { contextBridge, ipcMain, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('settings', {
    openAI: {
        getKey: async () => await ipcRenderer.invoke('settings.openAI.getKey'),
        setKey: async (value : string) => await ipcRenderer.invoke('settings.openAI.setKey', value)
    }
});

console.log('[preload] loaded')