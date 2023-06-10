import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
declare var cordova: any;
declare var device: any;

const googlePlayLink = 'https://play.google.com/store/apps/details?id=tw.franky.predict_card';
const appStoreLink = 'https://apps.apple.com/us/app/predict-card-magic-trick/id6445894214';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  isUserLearned = false;
  appLink = googlePlayLink;


  constructor(
    private localStorageService: LocalStorageService
  ) {
    document.addEventListener("deviceready", this.updateAppLink, false);
  }

  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();
  }

  goToAppStroe() {
    window.open(this.appLink, '_blank');
  }

  updateAppLink() {
    if (device) {
      if (device.platform === 'Android') {
        this.appLink = googlePlayLink;
      } else if (device.platform === 'iOS') {
        this.appLink = appStoreLink;
      }
    }
  }
  
}
