import { SettingsAPI } from "./api/settings";

declare global {
  interface Window {
    settings: SettingsAPI;
  }
}
