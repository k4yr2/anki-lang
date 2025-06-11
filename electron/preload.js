import { contextBridge } from 'electron';
import Store from 'electron-store';

const store = new Store();

contextBridge.exposeInMainWorld('settings', {
    openAI: {
        getKey: () => store.get("openAI.key"),
        setKey: (value) => store.set("openAI.key", value),
    }
});