import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

declare var deviceInfo: any;

const googlePlayLink = 'https://play.google.com/store/apps/details?id=tw.franky.predict_card';
const appStoreLink = 'itms-apps://itunes.apple.com/us/app/predict-card-magic-trick/id6445894214';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  isUserLearned = false;
  appLink = '';

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();
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
      window.open(this.appLink, "_system");
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
