import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  async set(settingName, value) {
    return await Storage.set({ key: `setting:${settingName}`, value: `${value}` });
  }
  async get(settingName) {
    return await Storage.get({ key: `setting:${settingName}` });
  }
  async remove(settingName) {
    return await Storage.remove({ key: `setting:${settingName}` });
  }
  async clear() {
    return await Storage.clear();
  }
}
