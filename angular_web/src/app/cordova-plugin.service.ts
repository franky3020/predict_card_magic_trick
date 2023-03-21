import { Injectable } from '@angular/core';


declare var cordova: any;

@Injectable({
  providedIn: 'root'
})
export class CordovaPluginService {

  brightness: any;

  constructor() {
    document.addEventListener('deviceready', () => {
      this.brightness = cordova.plugins.brightness;
    }, false);

    // brightness.setKeepScreenOn(true); TODO: 這好像有問題
  }

  setBrightness(n: number) {
    document.addEventListener('deviceready', () => {
      this.brightness.setBrightness(n, () => { }, () => { });
    }, false);
  }


}
