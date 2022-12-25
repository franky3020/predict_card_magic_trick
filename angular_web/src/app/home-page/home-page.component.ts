import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isAfterOrientationLock = false;
  isNotPortraitPrimary = true;

  constructor() {
    document.addEventListener("deviceready", this.orientationLock, false);
  }

  async ngOnInit() {

    console.log('wait Orientation lock');
    for(let i = 0 ; i < 10 ; i++) {
      console.log('Orientation is:' + window.screen.orientation.type.toString());
      if (window.screen.orientation.type.toString() !== 'portrait-primary') {
        await this.sleep(100);
      } else {
        this.isNotPortraitPrimary = false;
        break;
      }
    }

    this.isAfterOrientationLock = true;
  }

  orientationLock() {
    console.log('screen.orientation.lock is ', window.screen.orientation.lock);

    if (typeof window.screen.orientation.lock !== "undefined") {
      window.screen.orientation.lock('portrait-primary');
      console.log('window.screen.orientation.lock("portrait-primary");');
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
