import { Component, OnDestroy, OnInit } from '@angular/core';
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

declare let deviceInfo: any;
declare let appVersionInfo: any;
declare let cordova: any;

const googlePlayLink =
  'https://play.google.com/store/apps/details?id=tw.franky.predict_card';
const appStoreLink =
  'itms-apps://itunes.apple.com/us/app/predict-card-magic-trick/id6445894214';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnDestroy, OnInit {
  isUserLearned = false;
  appLink = '';

  appVersion = '';

  showLoading = true;

  isPageDestroy = false;

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
    private zone: NgZone,
    private versionCheckService: VersionCheckService,
    private dialog: MatDialog
  ) {
  }


  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();

    setTimeout(() => {
      this.showLoading = false;

      if (typeof appVersionInfo !== "undefined") {
        this.appVersion = appVersionInfo;
        this.checkVersionThenGoUpdate(appVersionInfo);
      }

    }, 500);

    // for dev: 以下可測試 popupUpdateDialog 會不會在跳轉後還會顯示
    // setTimeout(() => {
    //   this.popupUpdateDialog();
    // }, 5000);
  }

  ngOnDestroy(): void {
    this.isPageDestroy = true;
  }

  checkVersionThenGoUpdate(version: string) {
    this.versionCheckService
      .checkNeedToForceUpdate(version)
      .then((isNeedForceUpdate) => {
        if (isNeedForceUpdate) {
          this.popupUpdateDialog();
        }
      });
  }

  popupUpdateDialog() {
    this.zone.run(() => {
      if (this.isPageDestroy === false) { // 如果以跳轉到別頁 則不需要 跳出提示視窗
        this.dialog.open(RemindPopupComponent, {
          data: {
            clickFunc: () => {
              this.goToAppStroe();
            },
            remindText: 'Please update to the latest version',
            btnText: 'Go to download',
          },
        });
      }
    })
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
