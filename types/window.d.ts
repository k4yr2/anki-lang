import { SettingsAPI } from "./api/settings";

export {}

declare global {
  interface Window {
    settings: SettingsAPI;
  }
}
