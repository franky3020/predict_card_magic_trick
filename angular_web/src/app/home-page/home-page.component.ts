import { Component } from '@angular/core';

declare var cordova: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  constructor() {
  }

  async ngOnInit() {
    let brightness = cordova.plugins.brightness;
    brightness.setBrightness(0.5, ()=>{}, ()=>{});
    brightness.setKeepScreenOn(true);
    
  }
  
}
