import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
declare var deviceInfo: any;

const googlePlayLink = 'https://play.google.com/store/apps/details?id=tw.franky.predict_card';
const appStoreLink = 'itms-apps://itunes.apple.com/app/id6445894214';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  isUserLearned = false;
  appLink = 'Empty';
  platform = 'platform Empty';


  constructor(
    private localStorageService: LocalStorageService
  ) {

  }

  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();
  }

  goToAppStroe() {
    if (typeof deviceInfo !== 'undefined') {
      this.platform = deviceInfo.platform;

      if (this.platform === 'Android') {
        this.appLink = googlePlayLink;
      } else if (this.platform === 'iOS') {
        this.appLink = appStoreLink;
      }
    }

    if (this.appLink) {
      window.open(this.appLink, "_system");
    }

    // TODO: 需處理在web模擬的情況
    
  }

  // @HostListener('deviceready', [])
  // updateAppLink() {
  //   if (typeof device !== 'undefined') {
  //     this.platform = device.platform;

  //     if (device.platform === 'Android') {
  //       this.appLink = googlePlayLink;
  //     } else if (device.platform === 'iOS') {
  //       this.appLink = appStoreLink;
  //     }
  //   }
  //   this.appLink = appStoreLink;
  // }
  
}
