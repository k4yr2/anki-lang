import Store from 'electron-store';

export const settingsStore = new Store({ name: 'settings' });

export const getSettingsValue = (key: string): string | undefined => {
    return (settingsStore as any).get(key) as string | undefined;
};

export const setSettingsValue = (key: string, value: string): void => {
    (settingsStore as any).set(key, value);
};