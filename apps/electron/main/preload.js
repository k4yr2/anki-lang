const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('api', {
    dialog: {
        pickFolder: async () => await ipcRenderer.invoke('dialog.pickFolder'),
    },
    openAI: {
        getKey: async () => await ipcRenderer.invoke('openAI.getKey'),
        setKey: async (value) => await ipcRenderer.invoke('openAI.setKey', value)
    }
});