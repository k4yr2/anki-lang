import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('settings', {
    openAI: {
        getKey: () => null,
        setKey: (value : string) => null,
    }
});

console.log('[preload] loaded')