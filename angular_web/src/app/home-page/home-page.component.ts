import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isAfterOrientationLock = false;

  constructor() {
    document.addEventListener("deviceready", this.orientationLock, false);
  }

  async ngOnInit() {

    console.log('wait Orientation lock');
    while (1) {
      console.log('Orientation is:' + screen.orientation.type.toString());
      if (screen.orientation.type.toString() !== 'portrait-primary') {
        await this.sleep(100);
      } else {
        this.isAfterOrientationLock = true;
        break;
      }
    }
  }

  orientationLock() {
    console.log('screen.orientation.lock is ', screen.orientation.lock);

    if (typeof window.screen.orientation.lock !== "undefined") {
      window.screen.orientation.lock('portrait-primary');
      console.log('window.screen.orientation.lock("portrait-primary");');
    }
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
