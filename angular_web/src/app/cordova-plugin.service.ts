import { Injectable } from '@angular/core';


declare var cordova: any;
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class CordovaPluginService {

  brightness: any;
  powermanagement: any;

  constructor() {
    document.addEventListener('deviceready', () => {
      this.brightness = cordova.plugins.brightness;
      this.powermanagement = window.powermanagement;
    }, false);

    // brightness.setKeepScreenOn(true); TODO: 這好像有問題
  }

  setBrightness(n: number) {
    document.addEventListener('deviceready', () => {
      this.brightness.setBrightness(n, () => { }, () => { });
    }, false);
  }

  powermanagementAcquire() {
    document.addEventListener('deviceready', () => {
      this.powermanagement.acquire();
    }, false);
  }
  


}
