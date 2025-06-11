import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('settings', {
    openAI: {
        getKey: () => null,
        setKey: (value) => null,
    }
});

console.log('[preload] loaded')