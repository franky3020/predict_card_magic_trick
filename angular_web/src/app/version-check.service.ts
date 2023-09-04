import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionRes, toAppVersionInfo } from './apiRes/VersionRes';
import { AppVersionInfo } from './entity/AppVersionInfo';

declare var device: any;

@Injectable({
  providedIn: 'root',
})
export class VersionCheckService {
  constructor(private http: HttpClient) {}

  async checkNeedToForceUpdate(version: string): Promise<boolean> {
    let appVersionInfo: AppVersionInfo | undefined = undefined;
    try {
      appVersionInfo = await this.getAppVersionInfo(
        'https://frankyya.com:37002/app_version'
      );
    } catch (err) {
      console.error('https://frankyya.com:37002/app_version has fail');
      console.error('try other server');
    }

    try {
      if (typeof appVersionInfo === 'undefined') {
        appVersionInfo = await this.getAppVersionInfo(
          'https://frankyya.com:37003/app_version'
        );
      }
    } catch (err) {
      console.error('https://frankyya.com:37002/appversion has fail');
      return false;
    }

    const versionRes = appVersionInfo.versionDict[version];
    if (typeof versionRes !== 'undefined') {
      if (versionRes.forceUpdate) {
        const lastVersion = appVersionInfo.lastVersion;
        this.isNewVersionFitUserDevice(
          lastVersion.minSDK,
          lastVersion.miniOS
        ).then((isFit) => {
          return isFit;
        });
      } else {
        return false;
      }
    } else {
      return false;
    }
    return false;
  }

  getAppVersionInfo(url: string): Promise<AppVersionInfo> {
    return new Promise((resolve, reject) => {
      this.http.get<VersionRes>(url).subscribe({
        next: (res) => {
          const appVersionInfo = toAppVersionInfo(res);
          return resolve(appVersionInfo);
        },
        error: (error) => {
          console.error('getAppVersionInfo fail');
          return reject();
        },
      });
    });
  }

  isNewVersionFitUserDevice(
    androidMinSdk: string,
    iOSMinVersion: string
  ): Promise<boolean> {
    return new Promise((resolve) => {
      // TODO: 需處理在web 端測試的環境
      // if (true) {
      //   return resolve(true);
      // }

      document.addEventListener(
        'deviceready',
        () => {
          const version = device.version;
          const platform = device.platform;

          if (platform === 'Android') {
            return resolve(
              VersionCheckService.isV1GreatThanV2(version, androidMinSdk)
            );
          } else if (platform === 'iOS') {
            return resolve(
              VersionCheckService.isV1GreatThanV2(version, iOSMinVersion)
            );
          }
        },
        false
      );
    });
  }

  static isV1GreatThanV2(v1: string, v2: string): boolean {
    const v1Array = v1.split('.');
    const v2Array = v2.split('.');

    const v1Len = v1Array.length;
    const v2Len = v2Array.length;

    const compareTime = v1Len > v2Len ? v1Len : v2Len;

    for (let i = 0; i < compareTime; i++) {
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
