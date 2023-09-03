import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionRes } from './apiRes/VersionRes';

declare var device: any;

@Injectable({
  providedIn: 'root',
})
export class VersionCheckService {
  constructor(private http: HttpClient) {}

  getVersion() {
    return this.http.get<{ [version: string]: VersionRes }>(
      'http://localhost:3000/appversion'
    );
  }

  checkNeedToForceUpdate(version: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.http
        .get<{ [version: string]: VersionRes }>(
          'http://localhost:3000/appversion'
        )
        .subscribe({
          next: (res) => {
            const versionRes = res[version];
            if (typeof versionRes !== 'undefined') {
              return resolve(versionRes.forceUpdate);
            } else {
              return resolve(false);
            }
          },
          error: (error) => {
            console.error('checkNeedToForceUpdate fail');
            return resolve(false);
          }
        });
    });
  }

  isNewVersionFitUserDevice(androidMinSdk: string, iOSMinVersion: string) {
    document.addEventListener("deviceready", () => {
      const version = device.version;

      const platform = device.platform;

      if (platform === 'Android') {

      } else if (platform === 'iOS') {

      }


    }, false);
  }

  static isV1GreateThanV2(v1: string, v2: string): boolean {
    const v1Array = v1.split('.');
    const v2Array = v2.split('.');

    const v1Len = v1Array.length;
    const v2Len = v2Array.length;

    const compareTime = v1Len > v2Len ? v1Len : v2Len;

    for (let i = 0 ; i < compareTime ; i++) {
      let n1_number = Number(v1Array[i]);
      let n2_number = Number(v2Array[i]);

      if (isNaN(n1_number)) {
        n1_number = 0;
      }

      if (isNaN(n2_number)) {
        n2_number = 0;
      }

      if (n1_number > n2_number) {
        return true;
      } else if (n1_number < n2_number) {
        return false;
      } else {
        // continue run
      }
    }

    return false;
  }
}
