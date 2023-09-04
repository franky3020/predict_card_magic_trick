import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { VersionCheckService } from '../version-check.service';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { RemindPopupComponent } from '../component/remind-popup/remind-popup.component';

declare var deviceInfo: any;
declare var cordova: any;

const googlePlayLink =
  'https://play.google.com/store/apps/details?id=tw.franky.predict_card';
const appStoreLink =
  'itms-apps://itunes.apple.com/us/app/predict-card-magic-trick/id6445894214';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  isUserLearned = false;
  appLink = '';

  appVersion = '';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private zone: NgZone,
    private versionCheckService: VersionCheckService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();

    document.addEventListener(
      'deviceready',
      () => {
        if (typeof cordova !== 'undefined') {
          cordova.getAppVersion.getVersionNumber().then((version: any) => {
            this.zone.run(() => {
              this.appVersion = version;
            });
            this.checkVersionThenGoUpdate(version);
          });
        }
      },
      false
    );
  }

  checkVersionThenGoUpdate(version: string) {
    this.versionCheckService
      .checkNeedToForceUpdate(version)
      .then((isNeedForceUpdate) => {
        if (isNeedForceUpdate) {
          console.log('need update');
          this.dialog.open(RemindPopupComponent, {
            data: {
              clickFunc: () => {
                this.goToAppStroe();
              },
              remindText: 'Please update to the latest version',
              btnText: 'Go to download',
            },
          });
        } else {
          console.log('Not need update');
        }
      });
  }

  goToAppStroe() {
    if (typeof deviceInfo !== 'undefined') {
      const platform = deviceInfo.platform;

      if (platform === 'Android') {
        this.appLink = googlePlayLink;
      } else if (platform === 'iOS') {
        this.appLink = appStoreLink;
      }
    }

    if (this.appLink) {
      window.open(this.appLink, '_system');
    }

    // TODO: 需處理在web模擬的情況
  }

  goToMagicPage() {
    this.router.navigate(['/magic-page']);
  }

  goToTipPage() {
    this.router.navigate(['/tip-page']);
  }

  goToLearnPage() {
    this.router.navigate(['/learn-page']);
  }
}
