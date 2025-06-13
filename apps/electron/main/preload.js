const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    openAI: {
        getKey: async () => await ipcRenderer.invoke('openAI.getKey'),
        setKey: async (value) => await ipcRenderer.invoke('openAI.setKey', value)
    }
});