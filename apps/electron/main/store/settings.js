import Store from 'electron-store';

export const settingsStore = new Store({ name: 'settings' });

export default settingsStore;