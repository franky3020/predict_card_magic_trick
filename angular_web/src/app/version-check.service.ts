import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VersionRes } from './apiRes/VersionRes';

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
}
